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

// Même Client ID Google OAuth que squad.squadia.io (public par nature, pas un secret).
// Nécessite que www.squadia.io (et localhost en dev) soit dans ses "Authorized JavaScript origins".
export const GOOGLE_CLIENT_ID = '169502095118-tk41hlqg0e3aqca2mbbthhbiu0c7p0uo.apps.googleusercontent.com';
export const ADMIN_EMAIL = 'jerome@squadia.io';
