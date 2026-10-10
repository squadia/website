import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// Suivi qualité d'Elisa (agent vocal du site), deux publics :
// - l'espace admin du site (/admin) : connexion Google, réservée à ADMIN_EMAIL,
//   comme testimonials-admin. Jérôme y lit les mises à jour et répond aux questions ;
// - l'audit automatique (scripts/elevenlabs/elisa-sync.mjs) : en-tête
//   x-elisa-automation-key, dont seul le SHA-256 figure ici (la clé reste dans .env.local).
// Déployée sans vérification JWT : chaque requête est authentifiée ci-dessous.

const GOOGLE_CLIENT_ID = "169502095118-tk41hlqg0e3aqca2mbbthhbiu0c7p0uo.apps.googleusercontent.com";
const ADMIN_EMAIL = "jerome@squadia.io";
const AUTOMATION_KEY_SHA256 = "fad71bc973c467c6e8daad898e008943eede8ef0d1b07497e7ebf553ebeb0161";
const RECENT_CHANGES = 10;
const MAX_TEXT = 8000;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-elisa-automation-key",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

const text = (value: unknown, max = MAX_TEXT) => {
  const t = typeof value === "string" ? value.trim() : "";
  return t ? t.slice(0, max) : null;
};

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

async function isAutomation(key: string | null): Promise<boolean> {
  if (!key) return false;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(key));
  const hex = [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return hex === AUTOMATION_KEY_SHA256;
}

const QUESTION_FIELDS = "id, ref, created_at, kind, question, context, conversation_id, answer, answered_at, answered_via, status, applied_at, applied_note";

async function dashboard() {
  const [audit, changes, questions] = await Promise.all([
    db.from("elisa_audits").select("id, created_at, period_start, period_end, conversations_count, summary, issues")
      .order("created_at", { ascending: false }).limit(1).maybeSingle(),
    db.from("elisa_changes").select("id, created_at, category, source, title, detail")
      .order("created_at", { ascending: false }).limit(RECENT_CHANGES),
    db.from("elisa_questions").select(QUESTION_FIELDS)
      .or(`status.in.(open,answered),applied_at.gte."${new Date(Date.now() - 30 * 86400000).toISOString()}"`)
      .order("ref", { ascending: true }),
  ]);
  const error = audit.error || changes.error || questions.error;
  if (error) return json({ error: error.message }, 500);
  return json({ audit: audit.data, changes: changes.data, questions: questions.data });
}

// Réponse ou consigne modifiable tant qu'elle n'a pas été intégrée
async function answer(id: unknown, value: unknown, via: "admin" | "email", byRef = false) {
  const body = text(value);
  if (!body) return json({ error: "réponse vide" }, 400);
  const query = db.from("elisa_questions")
    .update({ answer: body, answered_at: new Date().toISOString(), answered_via: via, status: "answered" })
    .in("status", ["open", "answered"]);
  const { data, error } = await (byRef ? query.eq("ref", Number(id)) : query.eq("id", String(id))).select(QUESTION_FIELDS);
  if (error) return json({ error: error.message }, 500);
  if (!data?.length) return json({ error: "question introuvable ou déjà intégrée" }, 404);
  return json({ ok: true, question: data[0] });
}

async function adminAction(action: string, body: Record<string, unknown>) {
  if (action === "dashboard") return dashboard();
  if (action === "answer") return answer(body.id, body.answer, "admin");
  if (action === "dismiss") {
    const { error } = await db.from("elisa_questions").update({ status: "dismissed" })
      .eq("id", String(body.id)).in("status", ["open", "answered"]);
    return error ? json({ error: error.message }, 500) : json({ ok: true });
  }
  if (action === "consigne") {
    const consigne = text(body.consigne);
    if (!consigne) return json({ error: "consigne vide" }, 400);
    const { data, error } = await db.from("elisa_questions").insert({
      kind: "consigne", answer: consigne, answered_at: new Date().toISOString(), answered_via: "admin", status: "answered",
    }).select(QUESTION_FIELDS).single();
    return error ? json({ error: error.message }, 500) : json({ ok: true, question: data });
  }
  return json({ error: "action inconnue" }, 400);
}

async function automationAction(action: string, body: Record<string, unknown>) {
  if (action === "dashboard") return dashboard();

  if (action === "pending" || action === "open") {
    const { data, error } = await db.from("elisa_questions").select(QUESTION_FIELDS)
      .eq("status", action === "pending" ? "answered" : "open").order("ref", { ascending: true });
    return error ? json({ error: error.message }, 500) : json({ questions: data });
  }

  if (action === "record_audit") {
    const audit = (body.audit ?? {}) as Record<string, unknown>;
    const { data: row, error } = await db.from("elisa_audits").insert({
      period_start: audit.period_start ?? null,
      period_end: audit.period_end ?? null,
      conversations_count: Number(audit.conversations_count) || 0,
      summary: text(audit.summary),
      issues: Array.isArray(audit.issues) ? audit.issues : [],
    }).select("id").single();
    if (error) return json({ error: error.message }, 500);

    const changes = (Array.isArray(body.changes) ? body.changes : []).map((c: Record<string, unknown>) => ({
      audit_id: row.id, source: "audit", category: c.category ?? "prompt", title: text(c.title, 300), detail: text(c.detail),
    })).filter((c) => c.title);
    const questions = (Array.isArray(body.questions) ? body.questions : []).map((q: Record<string, unknown>) => ({
      audit_id: row.id, kind: q.kind === "validation" ? "validation" : "question",
      question: text(q.question, 1000), context: text(q.context, 2000), conversation_id: text(q.conversation_id, 100),
    })).filter((q) => q.question);

    const [c, q] = await Promise.all([
      changes.length ? db.from("elisa_changes").insert(changes).select("id, title") : { data: [], error: null },
      questions.length ? db.from("elisa_questions").insert(questions).select("id, ref, question") : { data: [], error: null },
    ]);
    if (c.error || q.error) return json({ error: (c.error || q.error)!.message, audit_id: row.id }, 500);
    return json({ ok: true, audit_id: row.id, changes: c.data, questions: q.data });
  }

  if (action === "record_change") {
    const title = text(body.title, 300);
    if (!title) return json({ error: "titre manquant" }, 400);
    const { data: change, error } = await db.from("elisa_changes").insert({
      title, detail: text(body.detail), category: body.category ?? "prompt", source: body.source ?? "reponse",
      audit_id: body.audit_id ?? null,
    }).select("id").single();
    if (error) return json({ error: error.message }, 500);
    const refs = (Array.isArray(body.refs) ? body.refs : []).map(Number).filter(Number.isInteger);
    if (refs.length) {
      const { error: e } = await db.from("elisa_questions").update({
        status: "applied", applied_at: new Date().toISOString(), applied_note: text(body.note, 2000), change_id: change.id,
      }).in("ref", refs).eq("status", "answered");
      if (e) return json({ error: e.message, change_id: change.id }, 500);
    }
    return json({ ok: true, change_id: change.id });
  }

  // Clôture sans modification d'Elisa (réponse prise en compte autrement, ou question sans objet)
  if (action === "close") {
    const refs = (Array.isArray(body.refs) ? body.refs : []).map(Number).filter(Number.isInteger);
    const status = body.status === "dismissed" ? "dismissed" : "applied";
    const { error } = await db.from("elisa_questions").update({
      status, applied_at: new Date().toISOString(), applied_note: text(body.note, 2000),
    }).in("ref", refs).in("status", ["open", "answered"]);
    return error ? json({ error: error.message }, 500) : json({ ok: true });
  }

  if (action === "answer_email") return answer(body.ref, body.answer, "email", true);

  if (action === "set_thread") {
    const { error } = await db.from("elisa_audits").update({ email_thread_id: text(body.thread_id, 200) })
      .eq("id", String(body.audit_id));
    return error ? json({ error: error.message }, 500) : json({ ok: true });
  }

  if (action === "threads") {
    const { data, error } = await db.from("elisa_audits").select("id, created_at, email_thread_id")
      .not("email_thread_id", "is", null).order("created_at", { ascending: false }).limit(6);
    return error ? json({ error: error.message }, 500) : json({ threads: data });
  }

  return json({ error: "action inconnue" }, 400);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  const body = await req.json().catch(() => ({})) as Record<string, unknown>;
  const action = String(body.action ?? "");
  try {
    if (await isAutomation(req.headers.get("x-elisa-automation-key"))) return await automationAction(action, body);
    if (await isAdmin(body.idToken)) return await adminAction(action, body);
    return json({ error: "unauthorized" }, 401);
  } catch (err) {
    console.error(action, err);
    return json({ error: "erreur_interne" }, 500);
  }
});
