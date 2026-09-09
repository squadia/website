/**
 * Gating client-side pour les flipbooks (remplace le lien Heyzine).
 *
 * Le site étant en export statique (pas d'API route, pas de backend), on ne
 * peut pas vérifier un token côté serveur. On signe donc un token HMAC en JS
 * juste après la soumission d'un formulaire, et on le revérifie en JS sur la
 * page du flipbook. Ça empêche l'URL d'être devinable/partagée en clair et
 * de finir indexée, mais ce n'est PAS une authentification serveur : c'est
 * le même niveau de protection qu'un lien Heyzine "non listé".
 */

const SECRET = 'sqd-flipbook-7f1c3e9a-v1';
const TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 jours

function toBase64Url(bytes) {
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(str) {
  const padded = str.replace(/-/g, '+').replace(/_/g, '/').padEnd(str.length + (4 - (str.length % 4 || 4)) % 4, '=');
  const binary = atob(padded);
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

async function hmac(message) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return toBase64Url(new Uint8Array(signature));
}

/** Génère un token d'accès pour un flipbook, à appeler juste après un submit réussi. */
export async function createFlipbookToken(slug, lead = {}) {
  const payload = {
    slug,
    email: lead.Email || lead.email || '',
    exp: Date.now() + TTL_MS,
  };
  const payloadB64 = toBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
  const signature = await hmac(payloadB64);
  return `${payloadB64}.${signature}`;
}

/** Vérifie un token pour un slug donné. Retourne { valid, reason }. */
export async function verifyFlipbookToken(slug, token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) {
    return { valid: false, reason: 'missing' };
  }
  const [payloadB64, signature] = token.split('.');
  if (!payloadB64 || !signature) return { valid: false, reason: 'malformed' };

  const expectedSignature = await hmac(payloadB64);
  if (expectedSignature !== signature) return { valid: false, reason: 'signature' };

  let payload;
  try {
    payload = JSON.parse(new TextDecoder().decode(fromBase64Url(payloadB64)));
  } catch {
    return { valid: false, reason: 'malformed' };
  }

  if (payload.slug !== slug) return { valid: false, reason: 'slug' };
  if (!payload.exp || Date.now() > payload.exp) return { valid: false, reason: 'expired' };

  return { valid: true, reason: null, payload };
}

/** Construit l'URL du flipbook avec token, prête à rediriger l'utilisateur dessus. */
export async function buildFlipbookUrl(slug, lead = {}) {
  const token = await createFlipbookToken(slug, lead);
  return `/ressources/flipbook/${slug}/?token=${encodeURIComponent(token)}`;
}
