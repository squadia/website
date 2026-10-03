// Messageries grand public refusées sur les formulaires de téléchargement (adresse pro exigée).
// Même logique à garder alignée avec le filtre des workflows n8n ebook.

const PERSONAL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com',
  'msn.com', 'aol.com', 'aol.fr', 'ymail.com', 'rocketmail.com',
  'icloud.com', 'me.com', 'mac.com',
  'proton.me', 'protonmail.com', 'pm.me', 'tutanota.com', 'tuta.io', 'tutanota.de',
  'mail.com', 'email.com', 'gmx.com', 'gmx.fr', 'gmx.net', 'gmx.de', 'web.de', 't-online.de',
  'yandex.com', 'yandex.ru', 'mail.ru', 'qq.com', '163.com', '126.com', 'sina.com',
  'free.fr', 'orange.fr', 'wanadoo.fr', 'sfr.fr', 'neuf.fr', 'laposte.net', 'bbox.fr',
  'numericable.fr', 'club-internet.fr', 'voila.fr', 'cegetel.net', 'aliceadsl.fr', 'live.fr',
  'libertysurf.fr', 'noos.fr', 'tiscali.fr', 'nordnet.fr', 'sfr.net', 'outlook.fr', 'hotmail.fr',
  'skynet.be', 'telenet.be', 'bluewin.ch', 'libero.it', 'virgilio.it',
]);

// Familles avec une extension de pays : hotmail.xx, outlook.xx, live.xx, yahoo.xx
const PERSONAL_FAMILY = /^(hotmail|outlook|live|yahoo|gmx)\.[a-z.]{2,}$/;

export const PERSONAL_EMAIL_MESSAGE =
  'Merci de renseigner votre adresse email professionnelle (les adresses Gmail, Outlook, Hotmail, Free, etc. ne sont pas acceptées).';

export function isPersonalEmail(email) {
  const domain = String(email || '').trim().toLowerCase().split('@')[1] || '';
  return PERSONAL_DOMAINS.has(domain) || PERSONAL_FAMILY.test(domain);
}
