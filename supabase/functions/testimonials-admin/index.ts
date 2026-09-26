import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// Admin gate: verifies a Google Sign-In ID token (same OAuth client as
// squad.squadia.io - client IDs are public, not secret) and only lets
// through the one allow-listed admin email. No password, no Supabase Auth
// user, nothing shared with the SaaS product's own auth.
const GOOGLE_CLIENT_ID = "169502095118-tk41hlqg0e3aqca2mbbthhbiu0c7p0uo.apps.googleusercontent.com";
const ADMIN_EMAIL = "jerome@squadia.io";
const BUCKET = "testimonial-videos";
const THANKS_BUCKET = "testimonial-thanks";
const SIGNED_URL_TTL_SECONDS = 3600;
const MAX_CUTS = 50;

// n8n (VPS Hostinger) : genere la video HeyGen puis envoie l'email.
// Le webhook ne recoit qu'un id + un jeton a usage unique ; n8n rappelle
// ensuite cette fonction (actions avatar_*) pour obtenir email et script.
const AVATAR_WEBHOOK_URL = "https://n8n.srv762881.hstgr.cloud/webhook/temoignage-avatar";
const WATCH_PAGE_URL = "https://www.squadia.io/temoignage/video/";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function verifyGoogleIdToken(idToken: string): Promise<boolean> {
  try {
    const res = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`,
    );
    if (!res.ok) return false;
    const info = await res.json();
    const emailVerified = info.email_verified === "true" || info.email_verified === true;
    return info.aud === GOOGLE_CLIENT_ID && emailVerified && info.email === ADMIN_EMAIL;
  } catch {
    return false;
  }
}

// Cuts are segments to skip at playback: [{ start, end }] in seconds.
function sanitizeCuts(raw: unknown): { start: number; end: number }[] | null {
  if (!Array.isArray(raw) || raw.length > MAX_CUTS) return null;
  const cuts: { start: number; end: number }[] = [];
  for (const c of raw) {
    const start = Number((c as Record<string, unknown>)?.start);
    const end = Number((c as Record<string, unknown>)?.end);
    if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end <= start) return null;
    cuts.push({ start: Math.round(start * 100) / 100, end: Math.round(end * 100) / 100 });
  }
  return cuts.sort((a, b) => a.start - b.start);
}

function withFinalPunctuation(text: string): string {
  const t = text.trim();
  if (!t) return "";
  return /[.!?…]$/.test(t) ? t : `${t}.`;
}

function buildScript(firstName: string | null, note: string | null): string {
  const name = (firstName || "").trim();
  return [
    `Merci ${name}, je tenais à te remercier pour ton témoignage vidéo !`,
    withFinalPunctuation(note || ""),
    "J'espère que ce que je te partage ici t'apportera des choses en plus de la formation passée ensemble.",
  ].filter(Boolean).join(" ").replace(/\s+/g, " ");
}

type Supa = ReturnType<typeof createClient>;

async function triggerAvatar(supabase: Supa, id: string): Promise<{ ok: boolean; error?: string }> {
  const { data: row, error } = await supabase
    .from("testimonial_videos")
    .select("id, email, avatar_note, avatar_status")
    .eq("id", id)
    .single();
  if (error || !row) return { ok: false, error: error?.message || "not found" };
  if (!row.email) return { ok: false, error: "pas d'email pour ce témoignage" };
  if (!row.avatar_note?.trim()) return { ok: false, error: "mot perso vide" };
  if (row.avatar_status === "queued" || row.avatar_status === "generating" || row.avatar_status === "sent") {
    return { ok: false, error: "vidéo avatar déjà lancée" };
  }

  const token = `${crypto.randomUUID()}${crypto.randomUUID()}`.replace(/-/g, "");
  await supabase
    .from("testimonial_videos")
    .update({ avatar_status: "queued", avatar_token: token, avatar_error: null })
    .eq("id", id);

  try {
    const res = await fetch(AVATAR_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, token }),
    });
    if (!res.ok) throw new Error(`n8n ${res.status}`);
    return { ok: true };
  } catch (err) {
    const message = `webhook n8n injoignable (${(err as Error).message})`;
    await supabase
      .from("testimonial_videos")
      .update({ avatar_status: "error", avatar_error: message, avatar_token: null })
      .eq("id", id);
    return { ok: false, error: message };
  }
}

async function rowForToken(supabase: Supa, id: unknown, token: unknown) {
  if (typeof id !== "string" || typeof token !== "string" || token.length < 32) return null;
  const { data } = await supabase
    .from("testimonial_videos")
    .select("id, first_name, email, avatar_note, avatar_token, avatar_status")
    .eq("id", id)
    .single();
  if (!data || !data.avatar_token || data.avatar_token !== token) return null;
  return data;
}

async function copyToThanksBucket(supabase: Supa, url: string, path: string, fallbackType: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status}`);
  const contentType = res.headers.get("content-type") || fallbackType;
  const { error } = await supabase.storage
    .from(THANKS_BUCKET)
    .upload(path, await res.arrayBuffer(), { contentType, upsert: true });
  if (error) throw error;
  return supabase.storage.from(THANKS_BUCKET).getPublicUrl(path).data.publicUrl;
}

// Callbacks n8n, authentifies par le jeton a usage unique (pas par Google).
async function handleAvatarCallback(supabase: Supa, action: string, body: Record<string, unknown>) {
  const row = await rowForToken(supabase, body.id, body.token);
  if (!row) return json({ error: "invalid token" }, 403);

  if (action === "avatar_job") {
    await supabase.from("testimonial_videos").update({ avatar_status: "generating" }).eq("id", row.id);
    return json({
      firstName: row.first_name,
      email: row.email,
      script: buildScript(row.first_name, row.avatar_note),
    });
  }

  if (action === "avatar_done") {
    const videoUrl = body.video_url;
    if (typeof videoUrl !== "string" || !videoUrl.startsWith("https://")) {
      return json({ error: "missing video_url" }, 400);
    }
    try {
      const fileId = crypto.randomUUID();
      const videoPath = `${fileId}.mp4`;
      await copyToThanksBucket(supabase, videoUrl, videoPath, "video/mp4");

      let thumbnailUrl: string | null = null;
      if (typeof body.thumbnail_url === "string" && body.thumbnail_url.startsWith("https://")) {
        thumbnailUrl = await copyToThanksBucket(supabase, body.thumbnail_url, `${fileId}.jpg`, "image/jpeg")
          .catch(() => null);
      }

      await supabase
        .from("testimonial_videos")
        .update({
          avatar_status: "sent",
          avatar_video_path: videoPath,
          avatar_sent_at: new Date().toISOString(),
          avatar_token: null,
          avatar_error: null,
        })
        .eq("id", row.id);

      return json({
        firstName: row.first_name,
        email: row.email,
        watchUrl: `${WATCH_PAGE_URL}?v=${fileId}`,
        thumbnailUrl,
      });
    } catch (err) {
      const message = `stockage vidéo : ${(err as Error).message}`;
      await supabase
        .from("testimonial_videos")
        .update({ avatar_status: "error", avatar_error: message, avatar_token: null })
        .eq("id", row.id);
      return json({ error: message }, 500);
    }
  }

  if (action === "avatar_failed") {
    const message = typeof body.error === "string" ? body.error.slice(0, 500) : "erreur HeyGen";
    await supabase
      .from("testimonial_videos")
      .update({ avatar_status: "error", avatar_error: message, avatar_token: null })
      .eq("id", row.id);
    return json({ ok: true });
  }

  return json({ error: "unknown action" }, 400);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "method not allowed" }, 405);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "invalid json body" }, 400);
  }

  const { idToken, action } = body as { idToken?: string; action?: string };

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  if (action === "avatar_job" || action === "avatar_done" || action === "avatar_failed") {
    return handleAvatarCallback(supabase, action, body);
  }

  if (!idToken || !(await verifyGoogleIdToken(idToken))) {
    return json({ error: "unauthorized" }, 401);
  }

  if (action === "list") {
    const { data: rows, error } = await supabase
      .from("testimonial_videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return json({ error: error.message }, 500);

    const withUrls = await Promise.all(
      (rows ?? []).map(async (row: Record<string, unknown>) => {
        const { avatar_token: _token, ...rest } = row;
        const { data: signed } = await supabase.storage
          .from(BUCKET)
          .createSignedUrl(row.storage_path as string, SIGNED_URL_TTL_SECONDS);
        const avatarUrl = row.avatar_video_path
          ? supabase.storage.from(THANKS_BUCKET).getPublicUrl(row.avatar_video_path as string).data.publicUrl
          : null;
        return { ...rest, signed_url: signed?.signedUrl ?? null, avatar_video_url: avatarUrl };
      }),
    );

    return json({ rows: withUrls });
  }

  if (action === "update") {
    const { id, status, assigned_page, label, cuts, avatar_note } = body as {
      id?: string;
      status?: string;
      assigned_page?: string | null;
      label?: string | null;
      cuts?: unknown;
      avatar_note?: string | null;
    };
    if (!id) return json({ error: "missing id" }, 400);

    const patch: Record<string, unknown> = {};
    if (status !== undefined) patch.status = status;
    if (assigned_page !== undefined) patch.assigned_page = assigned_page;
    if (label !== undefined) patch.label = label;
    if (avatar_note !== undefined) patch.avatar_note = avatar_note?.trim() || null;
    if (cuts !== undefined) {
      const clean = sanitizeCuts(cuts);
      if (!clean) return json({ error: "invalid cuts" }, 400);
      patch.cuts = clean;
    }

    const { error } = await supabase
      .from("testimonial_videos")
      .update(patch)
      .eq("id", id);

    if (error) return json({ error: error.message }, 500);

    // Publication : lance automatiquement la video avatar si un mot perso est saisi.
    if (status === "approved") {
      const { data: row } = await supabase
        .from("testimonial_videos")
        .select("avatar_note, avatar_status")
        .eq("id", id)
        .single();
      if (row?.avatar_note && !row.avatar_status) {
        const avatar = await triggerAvatar(supabase, id);
        return json({ ok: true, avatar });
      }
    }
    return json({ ok: true });
  }

  if (action === "avatar_send") {
    const { id } = body as { id?: string };
    if (!id) return json({ error: "missing id" }, 400);
    const result = await triggerAvatar(supabase, id);
    return json(result, result.ok ? 200 : 400);
  }

  if (action === "delete") {
    const { id } = body as { id?: string };
    if (!id) return json({ error: "missing id" }, 400);

    const { data: row, error: fetchError } = await supabase
      .from("testimonial_videos")
      .select("storage_path, avatar_video_path")
      .eq("id", id)
      .single();

    if (fetchError) return json({ error: fetchError.message }, 500);

    if (row?.storage_path) {
      await supabase.storage.from(BUCKET).remove([row.storage_path as string]);
    }
    if (row?.avatar_video_path) {
      const base = (row.avatar_video_path as string).replace(/\.mp4$/, "");
      await supabase.storage.from(THANKS_BUCKET).remove([`${base}.mp4`, `${base}.jpg`]);
    }

    const { error: deleteError } = await supabase
      .from("testimonial_videos")
      .delete()
      .eq("id", id);

    if (deleteError) return json({ error: deleteError.message }, 500);
    return json({ ok: true });
  }

  return json({ error: "unknown action" }, 400);
});
