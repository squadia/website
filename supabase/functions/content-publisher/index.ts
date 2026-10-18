import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// Publie les posts LinkedIn programmés du studio de contenu sur le profil personnel de Jérôme,
// via Unipile. Appelée toutes les 5 minutes par pg_cron, uniquement quand un post est dû.
// Projet Supabase du SITE (compte site) : ne jamais déployer cette fonction sur le projet des applications.
// Déployée sans vérification JWT : l'appel doit porter l'en-tête x-cron-key = CONTENT_CRON_KEY.
//
// Secrets de la fonction : UNIPILE_DSN, UNIPILE_API_KEY, UNIPILE_ACCOUNT_ID, CONTENT_CRON_KEY.

const BUCKET = "content-assets";
const MAX_PER_RUN = 3;
const MAX_IMAGES = 20;

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const dsn = (Deno.env.get("UNIPILE_DSN") || "").replace(/^https?:\/\//, "").replace(/\/+$/, "");
const UNIPILE = `https://${dsn}/api/v1`;
const API_KEY = Deno.env.get("UNIPILE_API_KEY") || "";
const ACCOUNT_ID = Deno.env.get("UNIPILE_ACCOUNT_ID") || "";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

async function unipile(method: string, path: string, body?: BodyInit, contentType?: string) {
  const headers: Record<string, string> = { "X-API-KEY": API_KEY, accept: "application/json" };
  if (contentType) headers["Content-Type"] = contentType;
  const res = await fetch(`${UNIPILE}${path}`, { method, headers, body });
  const text = await res.text();
  let data: any = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = { raw: text.slice(0, 300) }; }
  if (!res.ok) throw new Error(`Unipile ${method} ${path} : HTTP ${res.status} ${data?.type || ""} ${data?.title || data?.detail || ""}`.trim());
  return data;
}

// Fichiers du visuel choisi : images (une ou plusieurs, LinkedIn les affiche en galerie) ou une vidéo.
// Le PDF du carrousel sert à l'aperçu ; on publie ses slides en images.
async function attachmentsFor(itemId: string) {
  const { data: asset } = await db.from("content_assets").select("storage_path, spec")
    .eq("item_id", itemId).eq("selected", true).eq("status", "pret").maybeSingle();
  if (!asset?.storage_path) return [];
  const files: string[] = asset.spec?.files || [];
  const images = files.filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort().slice(0, MAX_IMAGES);
  const video = files.find((f) => /\.mp4$/i.test(f));
  const chosen = video ? [video] : images;
  const out: { name: string; blob: Blob }[] = [];
  for (const f of chosen) {
    const { data, error } = await db.storage.from(BUCKET).download(`${asset.storage_path}/${f}`);
    if (error || !data) throw new Error(`Visuel illisible : ${f}`);
    out.push({ name: f, blob: data });
  }
  return out;
}

async function publish(item: Record<string, any>) {
  const form = new FormData();
  form.append("account_id", ACCOUNT_ID);
  form.append("text", item.body || "");
  for (const a of await attachmentsFor(item.id)) form.append("attachments", a.blob, a.name);
  const created = await unipile("POST", "/posts", form);
  const postId: string | null = created?.post_id || null;

  // Lien public et identifiant social du post, pour le premier commentaire
  let socialId = postId;
  let shareUrl: string | null = null;
  if (postId) {
    try {
      const post = await unipile("GET", `/posts/${encodeURIComponent(postId)}?account_id=${encodeURIComponent(ACCOUNT_ID)}`);
      socialId = post?.social_id || postId;
      shareUrl = post?.share_url || null;
    } catch { /* le post est publié, on continue sans le lien */ }
  }

  let commentError: string | null = null;
  const comment = (item.first_comment || "").trim();
  if (comment && socialId) {
    try {
      await unipile("POST", `/posts/${encodeURIComponent(socialId)}/comments`,
        JSON.stringify({ account_id: ACCOUNT_ID, text: comment }), "application/json");
    } catch (err) {
      commentError = `Post publié, mais le premier commentaire a échoué : ${(err as Error).message}`;
    }
  }

  await db.from("content_items").update({
    status: "publie", published_at: new Date().toISOString(), external_id: postId,
    external_url: shareUrl, error: commentError,
  }).eq("id", item.id);
  return { id: item.id, post_id: postId, comment: commentError ? "échec" : comment ? "ok" : "aucun" };
}

Deno.serve(async (req) => {
  const cronKey = Deno.env.get("CONTENT_CRON_KEY");
  if (!cronKey || req.headers.get("x-cron-key") !== cronKey) return json({ error: "Non autorisé" }, 401);
  if (!dsn || !API_KEY || !ACCOUNT_ID) return json({ error: "Secrets Unipile manquants" }, 500);

  // On réserve chaque post dû (programme -> publication) avant de l'envoyer : jamais deux envois du même post
  const { data: due, error } = await db.from("content_items").select("id")
    .eq("status", "programme").eq("channel", "linkedin").lte("publish_at", new Date().toISOString())
    .order("publish_at").limit(MAX_PER_RUN);
  if (error) return json({ error: error.message }, 500);

  const results = [];
  for (const { id } of due || []) {
    const { data: claimed } = await db.from("content_items").update({ status: "publication" })
      .eq("id", id).eq("status", "programme").select("id, body, first_comment").maybeSingle();
    if (!claimed) continue;
    try {
      results.push(await publish(claimed));
    } catch (err) {
      await db.from("content_items").update({ status: "echec", error: (err as Error).message.slice(0, 500) }).eq("id", id);
      results.push({ id, error: (err as Error).message });
    }
  }
  return json({ published: results.length, results });
});
