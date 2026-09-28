export const NOTION_RESOURCE_URL = 'https://app.notion.com/p/Bonus-Formation-3e0500024083807f8b4fdf1f4e077841';

export const TESTIMONIALS_ADMIN_FUNCTION_URL =
  'https://veofbxujodjoqeynzsbj.supabase.co/functions/v1/testimonials-admin';

export const TESTIMONIAL_PAGES = [
  { value: 'ventes', label: 'Formation Ventes & IA' },
  { value: 'marketing', label: 'Formation Marketing & IA' },
  { value: 'communication', label: 'Formation Communication & IA' },
  { value: 'general', label: 'Page Formations (toutes)' },
];

export const MAX_RECORDING_SECONDS = 180;

// n8n : envoie l'email de remerciement une fois le temoignage recu.
export const THANK_YOU_WEBHOOK_URL = 'https://n8n.srv762881.hstgr.cloud/webhook/temoignage-merci';

// Même Client ID Google OAuth que squad.squadia.io (public par nature, pas un secret).
// Nécessite que www.squadia.io (et localhost en dev) soit dans ses "Authorized JavaScript origins".
export const GOOGLE_CLIENT_ID = '169502095118-tk41hlqg0e3aqca2mbbthhbiu0c7p0uo.apps.googleusercontent.com';
export const ADMIN_EMAIL = 'jerome@squadia.io';

// Vidéos de remerciement HeyGen (bucket public, noms en UUID), lues par /temoignage/video.
export const AVATAR_VIDEO_BASE_URL =
  'https://veofbxujodjoqeynzsbj.supabase.co/storage/v1/object/public/testimonial-thanks/';

// Bouton de la page /temoignage/video : pages vers lesquelles renvoyer la personne.
// Liste blanche (le lien de l'email ne transporte que la clé, jamais une URL libre).
export const AVATAR_CTA_PAGES = [
  { value: 'bonus', label: 'Bonus formation (page Notion)', href: NOTION_RESOURCE_URL, defaultLabel: 'Accéder à ton bonus' },
  { value: 'formation-ventes', label: 'Formation Ventes & IA (programme)', href: '/formation-ventes-et-ia/#programme', defaultLabel: 'Découvrir la formation Ventes & IA' },
  { value: 'formation-marketing', label: 'Formation Marketing & IA (programme)', href: '/formation-marketing-et-ia/#programme', defaultLabel: 'Découvrir la formation Marketing & IA' },
  { value: 'formation-communication', label: 'Formation Communication & IA (programme)', href: '/formation-communication-et-ia/#programme', defaultLabel: 'Découvrir la formation Communication & IA' },
  { value: 'formations', label: 'Toutes les formations', href: '/formations/', defaultLabel: 'Voir nos formations' },
  { value: 'data', label: 'Data B2B (offres)', href: '/data/#offres', defaultLabel: 'Découvrir nos offres Data' },
  { value: 'data-lead', label: 'Data Lead', href: '/data/data-lead/', defaultLabel: 'Découvrir Data Lead' },
  { value: 'data-clean', label: 'Data Clean', href: '/data/data-clean/', defaultLabel: 'Découvrir Data Clean' },
  { value: 'data-seg', label: 'Data Seg', href: '/data/data-seg/', defaultLabel: 'Découvrir Data Seg' },
  { value: 'prospection', label: 'Prospection (vue d\'ensemble)', href: '/prospection/', defaultLabel: 'Découvrir notre prospection' },
  { value: 'prospection-campagne', label: 'Campagnes multicanales', href: '/prospection/campagne/', defaultLabel: 'Découvrir les campagnes multicanales' },
  { value: 'prospection-marketing', label: 'Prospection marketing (email, LinkedIn)', href: '/prospection/marketing/', defaultLabel: 'Découvrir la prospection marketing' },
  { value: 'cold-call', label: 'Cold call', href: '/prospection/cold-call/', defaultLabel: 'Découvrir le cold call' },
  { value: 'phoning', label: 'Phoning', href: '/prospection/phoning/', defaultLabel: 'Découvrir le phoning' },
  { value: 'ressources', label: 'Ressources (guides, outils)', href: '/ressources/', defaultLabel: 'Explorer nos ressources' },
  { value: 'tarifs', label: 'Tarifs', href: '/tarifs/', defaultLabel: 'Voir nos tarifs' },
  { value: 'contact', label: 'Contact / prendre rendez-vous', href: '/contact/', defaultLabel: 'Prendre rendez-vous' },
];
export const DEFAULT_AVATAR_CTA = 'bonus';
