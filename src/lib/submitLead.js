/**
 * Soumission robuste des leads (lead magnets / diagnostic / …).
 *
 * Logique :
 *   1. Envoi au webhook principal (Make).
 *   2. Si le webhook principal échoue (réseau, 4xx/5xx, timeout),
 *      on envoie immédiatement une copie au webhook de secours n8n
 *      (qui envoie un email d’alerte à l’équipe).
 *   3. Si même le secours n’est pas joignable, la soumission est
 *      stockée dans localStorage et réessayée automatiquement.
 */

const FALLBACK_WEBHOOK_URL = 'https://n8n.srv762881.hstgr.cloud/webhook/lead-magnet-fallback';
const QUEUE_KEY = 'squadia_lead_submission_queue';
const DEFAULT_TIMEOUT_MS = 15000;

function readQueue() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(QUEUE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeQueue(queue) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(QUEUE_KEY, JSON.stringify(queue.slice(-50)));
  } catch {
    // Si localStorage est plein/indisponible, on ignore silencieusement.
  }
}

function queueLead(payload) {
  const queue = readQueue();
  queue.push({ ...payload, queuedAt: new Date().toISOString() });
  writeQueue(queue);
}

async function sendBeaconFallback(payload) {
  if (typeof navigator === 'undefined' || !navigator.sendBeacon) {
    throw new Error('sendBeacon unavailable');
  }
  const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
  const ok = navigator.sendBeacon(FALLBACK_WEBHOOK_URL, blob);
  if (!ok) throw new Error('sendBeacon rejected');
}

async function fetchFallback(payload) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    await fetch(FALLBACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function fallbackSubmit(payload) {
  try {
    await sendBeaconFallback(payload);
  } catch {
    try {
      await fetchFallback(payload);
    } catch {
      queueLead(payload);
    }
  }
}

export async function drainLeadQueue() {
  if (typeof window === 'undefined') return;
  const queue = readQueue();
  if (queue.length === 0) return;

  const remaining = [];
  for (const item of queue) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      await fetch(item.targetWebhookUrl || FALLBACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
        signal: controller.signal,
      });
      clearTimeout(timeout);
    } catch {
      remaining.push(item);
    }
  }
  writeQueue(remaining);
}

export async function submitLead(source, webhookUrl, data) {
  const payload = {
    source,
    ...data,
    targetWebhookUrl: webhookUrl,
    submittedAt: new Date().toISOString(),
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (response.ok) {
      drainLeadQueue(); // réessaie les anciennes soumissions en arrière-plan
      return { ok: true, fallbackUsed: false };
    }

    throw new Error(`Make responded ${response.status}`);
  } catch (err) {
    const fallbackPayload = {
      ...payload,
      makeError: err.message || 'unknown',
      fallbackAt: new Date().toISOString(),
    };
    await fallbackSubmit(fallbackPayload);
    return { ok: false, fallbackUsed: true, queued: readQueue().some(q => q.submittedAt === payload.submittedAt), error: err.message };
  }
}
