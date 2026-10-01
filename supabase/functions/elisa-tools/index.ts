import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// Outils serveur d'Elisa (agent vocal ElevenLabs du site), appelés par
// ElevenLabs en webhook. Ils mettent en forme pour l'oral ce que renvoient
// Cal.com et Serper.
//
//   POST /elisa-tools/slots          → créneaux libres Cal.com, lisibles à l'oral
//   POST /elisa-tools/book           → réserve sur Cal.com (lead transmis à n8n seulement si échec)
//   POST /elisa-tools/company-news   → actualités récentes d'une entreprise (Serper)
//
// Les clés ne sont pas stockées ici : ElevenLabs les envoie depuis ses secrets
// de workspace dans les en-têtes x-cal-key et x-serper-key. Déployée sans
// vérification JWT (appelée par ElevenLabs, pas par un utilisateur Supabase).
//
// Chaque conversation est tracée dans public.elisa_leads (visible seulement
// côté Squadia) : entreprise dès qu'elle est donnée, puis RDV s'il est pris.

const TIME_ZONE = "Europe/Paris";
const CAL_EVENT_TYPE_ID = 1027573; // « Meeting découverte », 45 min
const SLOT_DAYS = 14;
const MAX_SLOTS = 8;
const NEWS_MAX_AGE_DAYS = 183;

// Champ obligatoire « Attente » du type de RDV Cal.com (multiselect)
const CAL_SUBJECTS: Record<string, string> = {
  data: "DATA B2B : fichier client, enrichissement, segmentation",
  prospection: "PROSPECTION : campagne mktg , appels sortants",
  formation: "FORMATION : vente, marketing digital , communication",
};

// n8n (VPS Hostinger) : même webhook que les leads du site, email d'alerte à l'équipe
const LEAD_WEBHOOK_URL = "https://n8n.srv762881.hstgr.cloud/webhook/lead-magnet-fallback";

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

// Ne bloque jamais la conversation : une erreur d'écriture est seulement loguée
async function saveLead(conversationId: string | undefined, fields: Record<string, unknown>) {
  const id = conversationId?.trim() || `sans-id-${Date.now()}`;
  const clean = Object.fromEntries(Object.entries(fields).filter(([, v]) => v !== undefined && v !== ""));
  const { error } = await db.from("elisa_leads").upsert({ conversation_id: id, ...clean, updated_at: new Date().toISOString() });
  if (error) console.error("elisa_leads", error.message);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// "jeudi 2 octobre à 10 h", "lundi 6 octobre à 14 h 30"
function spokenSlot(iso: string): string {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("fr-FR", {
      timeZone: TIME_ZONE,
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(new Date(iso)).map((p) => [p.type, p.value]),
  );
  const minutes = parts.minute === "00" ? "" : ` ${parts.minute}`;
  return `${parts.weekday} ${parts.day} ${parts.month} à ${Number(parts.hour)} h${minutes}`;
}

async function slots(calKey: string) {
  const start = new Date();
  const end = new Date(start.getTime() + SLOT_DAYS * 86400000);
  const url = new URL("https://api.cal.com/v2/slots");
  url.searchParams.set("eventTypeId", String(CAL_EVENT_TYPE_ID));
  url.searchParams.set("start", start.toISOString());
  url.searchParams.set("end", end.toISOString());
  url.searchParams.set("timeZone", TIME_ZONE);

  const res = await fetch(url, {
    headers: { "cal-api-version": "2024-09-04", Authorization: `Bearer ${calKey}` },
  });
  if (!res.ok) return json({ ok: false, error: "agenda_indisponible" });
  const data: Record<string, { start: string }[]> = (await res.json()).data ?? {};

  // Jusqu'à 2 créneaux par jour (un matin, un après-midi) pour étaler le choix
  const picked: { start: string; label: string }[] = [];
  for (const day of Object.keys(data).sort()) {
    const daySlots = data[day].map((s) => s.start);
    const hour = (iso: string) => Number(
      new Intl.DateTimeFormat("fr-FR", { timeZone: TIME_ZONE, hour: "numeric", hour12: false })
        .formatToParts(new Date(iso)).find((p) => p.type === "hour")?.value,
    );
    const morning = daySlots.find((s) => hour(s) < 12);
    const afternoon = daySlots.find((s) => hour(s) >= 14) ?? daySlots.find((s) => hour(s) >= 12);
    for (const s of [morning, afternoon]) {
      if (s && picked.length < MAX_SLOTS) picked.push({ start: s, label: spokenSlot(s) });
    }
    if (picked.length >= MAX_SLOTS) break;
  }
  return json({ ok: true, slots: picked });
}

// "06 12 34 56 78" → "+33612345678" ; renvoie undefined si inexploitable
function e164(phone?: string): string | undefined {
  if (!phone) return undefined;
  let digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("00")) digits = `+${digits.slice(2)}`;
  if (/^0\d{9}$/.test(digits)) digits = `+33${digits.slice(1)}`;
  return /^\+\d{8,15}$/.test(digits) ? digits : undefined;
}

async function forwardLead(lead: Record<string, unknown>) {
  try {
    const res = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "elisa-voice", ...lead, submittedAt: new Date().toISOString() }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function book(calKey: string, body: Record<string, string>) {
  const { start, first_name, last_name, company, email, phone, recap, sujets, conversation_id, page_depart } = body;
  if (!start || !email || !first_name) return json({ ok: false, error: "champs_manquants" });

  // "data, prospection" → options Cal.com ; à défaut, déduit du récapitulatif
  const wanted = `${sujets ?? ""} ${recap ?? ""}`.toLowerCase();
  const subjects = Object.entries(CAL_SUBJECTS).filter(([key]) => wanted.includes(key)).map(([, option]) => option);

  const label = spokenSlot(start);
  const lead = { meetingdate: label, company, first_name, last_name, email, phone, recap, sujets };

  const res = await fetch("https://api.cal.com/v2/bookings", {
    method: "POST",
    headers: {
      "cal-api-version": "2026-02-25",
      Authorization: `Bearer ${calKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start: new Date(start).toISOString(),
      eventTypeId: CAL_EVENT_TYPE_ID,
      attendee: {
        name: [first_name, last_name].filter(Boolean).join(" "),
        email,
        timeZone: TIME_ZONE,
        language: "fr",
        ...(e164(phone) ? { phoneNumber: e164(phone) } : {}),
      },
      // Notes visibles aussi par le prospect : la source, jamais le récap interne
      bookingFieldsResponses: {
        Attente: subjects.length ? subjects : [CAL_SUBJECTS.prospection],
        title: `Meeting découverte ${company ?? ""}`.trim(),
        notes: "RDV pris avec Elisa, l'assistante vocale du site squadia.io",
      },
      metadata: {
        source: "elisa",
        company: (company ?? "").slice(0, 200),
        recap: (recap ?? "").slice(0, 450),
      },
    }),
  });

  const leadRow = {
    page_depart, entreprise: company, prenom: first_name, nom: last_name,
    email, telephone: phone, sujets, recap, rdv_creneau: label,
  };

  // Réservé : Cal.com envoie lui-même la confirmation au visiteur et à l'équipe
  if (res.ok) {
    await saveLead(conversation_id, { ...leadRow, rdv_pris: true, statut: "RDV réservé sur Cal.com" });
    return json({ ok: true, booked: label });
  }

  // Le lead n'est jamais perdu : transmis à n8n même si la réservation échoue
  const details = await res.text();
  console.error("cal.com booking", res.status, details.slice(0, 500));
  const unavailable = res.status === 409 || /not available|already|unavailable|no available/i.test(details);
  const statut = `À CONFIRMER, réservation Cal.com échouée (${res.status})`;
  await saveLead(conversation_id, { ...leadRow, statut });
  const saved = await forwardLead({ ...lead, status: statut });
  return json({ ok: false, error: unavailable ? "creneau_indisponible" : "reservation_impossible", lead_saved: saved });
}

// Âge approximatif en jours d'une date Serper ("3 months ago", "il y a 2 mois", "12 sept. 2026")
function ageInDays(date?: string): number | null {
  if (!date) return null;
  const rel = date.toLowerCase().match(/(\d+)\s*(minute|heure|hour|jour|day|semaine|week|mois|month|an|year)/);
  if (rel) {
    const n = Number(rel[1]);
    const unit = rel[2];
    if (unit.startsWith("min") || unit.startsWith("h")) return 0;
    if (unit === "jour" || unit === "day") return n;
    if (unit === "semaine" || unit === "week") return n * 7;
    if (unit === "mois" || unit === "month") return n * 30;
    return n * 365;
  }
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? null : Math.round((Date.now() - parsed) / 86400000);
}

const monthOf = (daysAgo: number) =>
  new Intl.DateTimeFormat("fr-FR", { timeZone: TIME_ZONE, month: "long" })
    .format(new Date(Date.now() - daysAgo * 86400000));

async function companyNews(serperKey: string, body: Record<string, string>) {
  const company = (body.company ?? "").trim();
  if (!company) return json({ ok: false, error: "entreprise_manquante" });

  const res = await fetch("https://google.serper.dev/news", {
    method: "POST",
    headers: { "X-API-KEY": serperKey, "Content-Type": "application/json" },
    body: JSON.stringify({ q: `"${company}"`, gl: "fr", hl: "fr", num: 10, tbs: "qdr:y" }),
  });
  if (!res.ok) return json({ ok: false, error: "recherche_indisponible" });

  const items: { title?: string; snippet?: string; date?: string; source?: string }[] = (await res.json()).news ?? [];
  const news = items
    .map((n) => ({ ...n, age: ageInDays(n.date) }))
    .filter((n) => n.age !== null && n.age <= NEWS_MAX_AGE_DAYS)
    .slice(0, 5)
    .map((n) => ({ titre: n.title, extrait: n.snippet, mois: monthOf(n.age as number) }));

  await saveLead(body.conversation_id, { entreprise: company, page_depart: body.page_depart, actualites: news, statut: "Entreprise donnée" });
  return json({ ok: true, company, news });
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405);

  const action = new URL(req.url).pathname.split("/").pop();
  const body = await req.json().catch(() => ({}));
  const calKey = req.headers.get("x-cal-key") ?? "";
  const serperKey = req.headers.get("x-serper-key") ?? "";

  try {
    if (action === "slots" && calKey) return await slots(calKey);
    if (action === "book" && calKey) return await book(calKey, body);
    if (action === "company-news" && serperKey) return await companyNews(serperKey, body);
    if (["slots", "book", "company-news"].includes(action ?? "")) return json({ ok: false, error: "unauthorized" }, 401);
    return json({ ok: false, error: "unknown_action" }, 404);
  } catch (err) {
    console.error(action, err);
    return json({ ok: false, error: "erreur_interne" });
  }
});
