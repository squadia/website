// Studio de contenu (onglet « Contenus » de /admin). Projet Supabase du SITE, distinct des applications.
export const CONTENT_ADMIN_FUNCTION_URL =
  'https://xcljajcdcfnbqtxppfdx.supabase.co/functions/v1/content-admin';

export const CONTENT_STATUSES = {
  brouillon: { label: 'Brouillon', color: '#6B716C' },
  a_valider: { label: 'À valider', color: '#8A6D3B' },
  valide: { label: 'Validé', color: '#3F7A5E' },
  programme: { label: 'Programmé', color: '#1F5F8B' },
  publication: { label: 'Publication en cours', color: '#1F5F8B' },
  publie: { label: 'Publié', color: '#1C2B27' },
  echec: { label: 'Échec', color: '#A63D2F' },
  archive: { label: 'Archivé', color: '#6B716C' },
};

// Longueur visible sur mobile avant le « …plus » de LinkedIn
export const LINKEDIN_FOLD = 210;
export const LINKEDIN_MAX = 3000;
