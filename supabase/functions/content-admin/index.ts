import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// Studio de contenu, onglet « Contenus » de l'espace admin du site (/admin).
// Projet Supabase du SITE (compte site, « squadia website ») : ne jamais déployer cette
// fonction sur le projet des applications.
// Connexion Google réservée à ADMIN_EMAIL, comme elisa-admin. Déployée sans vérification JWT :
// chaque requête est authentifiée ci-dessous.

const GOOGLE_CLIENT_ID = "169502095118-tk41hlqg0e3aqca2mbbthhbiu0c7p0uo.apps.googleusercontent.com";
const ADMIN_EMAIL = "jerome@squadia.io";
const BUCKET = "content-assets";
const SIGNED_URL_TTL = 3600;
const EDITABLE_STATUSES = ["brouillon", "a_valider", "valide", "programme", "echec", "archive"];
const SETTABLE_STATUSES = ["brouillon", "a_valider", "valide", "programme", "archive"];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}

async function isAdmin(idToken: unknown): Promise<boolean> {
  if (typeof idToken !== "string" || !idToken) return false;
  try {
    const res = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`);
    if (!res.ok) return false;
    const info = await res.json();
    const verified = info.email_verified === "true" || info.email_verified === true;
    return info.aud === GOOGLE_CLIENT_ID && verified && info.email === ADMIN_EMAIL;
  } catch {
    return false;
  }
}

const uuid = (v: unknown) => (typeof v === "string" && /^[0-9a-f-]{36}$/i.test(v) ? v : null);
const text = (v: unknown, max = 6000) => (typeof v === "string" ? v.slice(0, max) : undefined);

// Liens signés (1 h) vers les fichiers d'un visuel
async function withUrls(asset: Record<string, any>) {
  const files: string[] = asset.spec?.files || [];
  if (!asset.storage_path || !files.length) return { ...asset, urls: [] };
  const { data } = await db.storage.from(BUCKET)
    .createSignedUrls(files.map((f) => `${asset.storage_path}/${f}`), SIGNED_URL_TTL);
  return { ...asset, urls: (data || []).map((d, i) => ({ file: files[i], url: d.signedUrl })) };
}

async function list() {
  const { data: items, error } = await db.from("content_items")
    .select("id, channel, title, status, publish_at, published_at, external_url, error, fingerprint, created_at, updated_at")
    .neq("status", "archive")
    .order("publish_at", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: false });
  if (error) return json({ error: error.message }, 500);
  const ids = (items || []).map((i) => i.id);
  const { data: assets } = ids.length
    ? await db.from("content_assets").select("id, item_id, kind, storage_path, spec").eq("selected", true).in("item_id", ids)
    : { data: [] };
  // Vignette : la première image du visuel choisi
  const thumbs: Record<string, string> = {};
  for (const a of assets || []) {
    const first = (a.spec?.files || []).find((f: string) => /\.(png|jpe?g|webp)$/i.test(f));
    if (!first || !a.storage_path) continue;
    const { data } = await db.storage.from(BUCKET).createSignedUrl(`${a.storage_path}/${first}`, SIGNED_URL_TTL);
    if (data?.signedUrl) thumbs[a.item_id] = data.signedUrl;
  }
  return json({ items: (items || []).map((i) => ({ ...i, thumb: thumbs[i.id] || null })) });
}

async function get(id: string) {
  const [{ data: item, error }, { data: assets }] = await Promise.all([
    db.from("content_items").select("*, idea:content_ideas(id, title, theme, persona)").eq("id", id).maybeSingle(),
    db.from("content_assets").select("id, kind, provider, model, status, storage_path, spec, selected, created_at")
      .eq("item_id", id).order("created_at", { ascending: false }),
  ]);
  if (error) return json({ error: error.message }, 500);
  if (!item) return json({ error: "Contenu introuvable" }, 404);
  return json({ item, assets: await Promise.all((assets || []).map(withUrls)) });
}

async function update(id: string, patch: Record<string, unknown>) {
  const { data: current } = await db.from("content_items").select("status, publish_at").eq("id", id).maybeSingle();
  if (!current) return json({ error: "Contenu introuvable" }, 404);
  if (!EDITABLE_STATUSES.includes(current.status)) {
    return json({ error: "Ce contenu est en cours de publication ou déjà publié." }, 409);
  }
  const changes: Record<string, unknown> = {};
  for (const field of ["title", "body", "first_comment"]) {
    const v = text(patch[field], field === "body" ? 3000 : 1000);
    if (v !== undefined) changes[field] = v;
  }
  if ("publish_at" in patch) {
    const v = patch.publish_at;
    if (v === null || v === "") changes.publish_at = null;
    else if (typeof v === "string" && !Number.isNaN(Date.parse(v))) changes.publish_at = new Date(v).toISOString();
    else return json({ error: "Date de publication invalide" }, 400);
  }
  if ("status" in patch) {
    const s = patch.status;
    if (typeof s !== "string" || !SETTABLE_STATUSES.includes(s)) return json({ error: "Statut invalide" }, 400);
    if (s === "programme") {
      const when = (changes.publish_at ?? current.publish_at) as string | null;
      if (!when) return json({ error: "Choisis une date et une heure avant de programmer." }, 400);
      if (Date.parse(when) < Date.now() + 60_000) return json({ error: "La date de publication doit être dans le futur." }, 400);
    }
    changes.status = s;
    changes.error = null;
  }
  if (!Object.keys(changes).length) return json({ error: "Rien à modifier" }, 400);
  const { error } = await db.from("content_items").update(changes).eq("id", id);
  if (error) return json({ error: error.message }, 500);
  return get(id);
}

// Remplacement d'un visuel, étape 1 : lien d'envoi direct vers le stockage (évite la limite de taille de la fonction)
async function uploadUrl(itemId: string, filename: unknown, contentType: unknown) {
  if (typeof filename !== "string" || typeof contentType !== "string") return json({ error: "Fichier invalide" }, 400);
  const kind = contentType === "application/pdf" ? "carrousel" : contentType.startsWith("video/") ? "video" : "image";
  const { data: asset, error } = await db.from("content_assets")
    .insert({ item_id: itemId, kind, provider: "upload", model: "admin", status: "en_attente", spec: {} })
    .select("id").single();
  if (error) return json({ error: error.message }, 500);
  const safe = filename.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^\w.-]+/g, "-").slice(-80);
  const path = `items/${itemId}/${asset.id}/${safe}`;
  const { data, error: e2 } = await db.storage.from(BUCKET).createSignedUploadUrl(path);
  if (e2) return json({ error: e2.message }, 500);
  return json({ asset_id: asset.id, path, token: data.token, signed_url: data.signedUrl });
}

// Étape 2 : le fichier est arrivé, il devient le visuel choisi
async function registerAsset(assetId: string) {
  const { data: asset } = await db.from("content_assets").select("id, item_id").eq("id", assetId).maybeSingle();
  if (!asset) return json({ error: "Visuel introuvable" }, 404);
  const folder = `items/${asset.item_id}/${asset.id}`;
  const { data: objects } = await db.storage.from(BUCKET).list(folder);
  const files = (objects || []).map((o) => o.name);
  if (!files.length) return json({ error: "Le fichier n'est pas arrivé dans le stockage." }, 400);
  await db.from("content_assets").update({ selected: false }).eq("item_id", asset.item_id);
  const { error } = await db.from("content_assets")
    .update({ status: "pret", selected: true, storage_path: folder, spec: { files } }).eq("id", asset.id);
  if (error) return json({ error: error.message }, 500);
  return get(asset.item_id);
}

async function selectAsset(assetId: string) {
  const { data: asset } = await db.from("content_assets").select("id, item_id, status").eq("id", assetId).maybeSingle();
  if (!asset || asset.status !== "pret") return json({ error: "Visuel introuvable ou pas prêt" }, 404);
  await db.from("content_assets").update({ selected: false }).eq("item_id", asset.item_id);
  await db.from("content_assets").update({ selected: true }).eq("id", asset.id);
  return get(asset.item_id);
}

// --- Idées : la réserve de sujets et la file de production ---

const IDEA_FIELDS = "id, title, notes, theme, persona, status, triage_note, priority, requested_at, production_note, source, source_url, created_at, updated_at";
const IDEA_STATUSES = ["idee", "retenue", "a_produire", "archivee"];
const PERSONAS = ["dg", "sales_manager", "marketing_manager", "autre"];

async function ideasList() {
  const [{ data: ideas, error }, { data: items }] = await Promise.all([
    db.from("content_ideas").select(IDEA_FIELDS).order("updated_at", { ascending: false }),
    db.from("content_items").select("id, idea_id, status, title").not("idea_id", "is", null),
  ]);
  if (error) return json({ error: error.message }, 500);
  const byIdea: Record<string, unknown[]> = {};
  for (const it of items || []) (byIdea[it.idea_id] ||= []).push({ id: it.id, status: it.status });
  return json({ ideas: (ideas || []).map((i) => ({ ...i, items: byIdea[i.id] || [] })) });
}

function ideaPatch(input: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  for (const f of ["title", "notes", "theme", "production_note", "source_url"]) {
    const v = text(input[f], f === "title" ? 300 : 4000);
    if (v !== undefined) out[f] = v.trim() || null;
  }
  if (typeof input.persona === "string") out.persona = PERSONAS.includes(input.persona) ? input.persona : null;
  if (input.priority === "normale" || input.priority === "express") out.priority = input.priority;
  if (typeof input.status === "string") {
    if (!IDEA_STATUSES.includes(input.status)) throw new Error("Statut d'idée invalide");
    out.status = input.status;
    if (input.status === "a_produire") out.requested_at = new Date().toISOString();
  }
  return out;
}

async function ideaCreate(input: Record<string, unknown>) {
  let patch: Record<string, unknown>;
  try { patch = ideaPatch(input); } catch (err) { return json({ error: (err as Error).message }, 400); }
  if (!patch.title) return json({ error: "Donne au moins un titre à l'idée." }, 400);
  const produce = input.produce === "express" || input.produce === "normale" ? input.produce : null;
  const row = {
    ...patch, source: "manuel",
    status: produce ? "a_produire" : "retenue",
    priority: produce === "express" ? "express" : "normale",
    requested_at: produce ? new Date().toISOString() : null,
  };
  const { error } = await db.from("content_ideas").insert(row);
  if (error) return json({ error: error.message }, 500);
  return ideasList();
}

async function ideaUpdate(id: string, input: Record<string, unknown>) {
  let patch: Record<string, unknown>;
  try { patch = ideaPatch(input); } catch (err) { return json({ error: (err as Error).message }, 400); }
  if (!Object.keys(patch).length) return json({ error: "Rien à modifier" }, 400);
  const { data: current } = await db.from("content_ideas").select("status").eq("id", id).maybeSingle();
  if (!current) return json({ error: "Idée introuvable" }, 404);
  if (current.status === "en_production" && patch.status && patch.status !== "archivee") {
    return json({ error: "Cette idée est en cours de production." }, 409);
  }
  const { error } = await db.from("content_ideas").update(patch).eq("id", id);
  if (error) return json({ error: error.message }, 500);
  return ideasList();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "POST attendu" }, 405);
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "JSON invalide" }, 400);
  }
  if (!(await isAdmin(body.idToken))) return json({ error: "Non autorisé" }, 401);

  switch (body.action) {
    case "list":
      return list();
    case "get": {
      const id = uuid(body.id);
      return id ? get(id) : json({ error: "id manquant" }, 400);
    }
    case "update": {
      const id = uuid(body.id);
      return id ? update(id, (body.patch as Record<string, unknown>) || {}) : json({ error: "id manquant" }, 400);
    }
    case "upload_url": {
      const id = uuid(body.id);
      return id ? uploadUrl(id, body.filename, body.contentType) : json({ error: "id manquant" }, 400);
    }
    case "register_asset": {
      const id = uuid(body.assetId);
      return id ? registerAsset(id) : json({ error: "assetId manquant" }, 400);
    }
    case "select_asset": {
      const id = uuid(body.assetId);
      return id ? selectAsset(id) : json({ error: "assetId manquant" }, 400);
    }
    case "ideas_list":
      return ideasList();
    case "idea_create":
      return ideaCreate((body.idea as Record<string, unknown>) || {});
    case "idea_update": {
      const id = uuid(body.id);
      return id ? ideaUpdate(id, (body.patch as Record<string, unknown>) || {}) : json({ error: "id manquant" }, 400);
    }
    default:
      return json({ error: "Action inconnue" }, 400);
  }
});
