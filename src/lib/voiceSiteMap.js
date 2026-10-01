// Pages vers lesquelles l'assistant vocal ElevenLabs peut emmener le visiteur.
// Toute page absente de cette liste est refusée par l'outil navigateToPage.

export const VOICE_SITE_MAP = [
  { path: '/', label: 'Accueil', summary: "Vue d'ensemble Squadia : data, prospection multicanale, formation IA." },

  { path: '/data', label: 'Offre Data B2B', summary: 'Nettoyage, segmentation et enrichissement de base B2B.' },
  { path: '/data/data-clean', label: 'Data Clean', summary: 'Dédoublonnage, correction et fiabilisation de la base CRM.' },
  { path: '/data/data-seg', label: 'Data Seg', summary: 'Segmentation et scoring des contacts, comptes prioritaires.' },
  { path: '/data/data-lead', label: 'Data Lead', summary: "Fichiers de leads qualifiés, contacts vérifiés, signaux d'achat." },

  { path: '/prospection', label: 'Offre Prospection', summary: 'Campagnes email + LinkedIn avec Repliik, appels sortants, ou les deux.' },
  { path: '/prospection/campagne', label: 'Campagnes multicanales', summary: 'Séquences email, LinkedIn et téléphone personnalisées.' },
  { path: '/prospection/marketing', label: 'Prospection marketing', summary: 'Copy, ciblage, A/B test et reporting des campagnes email et LinkedIn.' },
  { path: '/prospection/cold-call', label: 'Cold call', summary: 'Rendez-vous qualifiés par téléphone, script co-construit.' },
  { path: '/prospection/phoning', label: 'Phoning', summary: 'Appels sortants B2B, méthode structurée, reporting.' },

  { path: '/formations', label: 'Formations IA', summary: 'Catalogue des formations IA pour vente, marketing et communication.' },
  { path: '/formation-ventes-et-ia', label: 'Formation Ventes & IA', summary: 'Prospection augmentée, qualification, closing avec l’IA.' },
  { path: '/formation-marketing-et-ia', label: 'Formation Marketing & IA', summary: 'Contenus, campagnes multicanal, scoring et analyse avec l’IA.' },
  { path: '/formation-communication-et-ia', label: 'Formation Communication & IA', summary: 'Charte d’usage, rédaction augmentée, gouvernance.' },

  { path: '/directeur-general', label: 'Pour les DG', summary: 'Système de génération de revenus mesurable en 90 jours.' },
  { path: '/directeur-commercial', label: 'Pour les directeurs commerciaux', summary: 'Fiabiliser le pipeline, structurer la prospection.' },
  { path: '/directeur-marketing', label: 'Pour les directeurs marketing', summary: 'Pipeline fiable et qualification des leads.' },

  { path: '/secteur-industrie', label: 'Secteur Industrie', summary: 'Prospection ciblée pour industriels B2B.' },
  { path: '/secteur-it-saas', label: 'Secteur IT & SaaS', summary: 'Prospection pour éditeurs logiciels et entreprises IT.' },
  { path: '/secteur-public', label: 'Secteur Public', summary: 'Prospection vers le secteur public et les collectivités.' },

  { path: '/cas-clients', label: 'Cas clients', summary: 'Tous les cas clients : prospection, CRM, data, formation.' },
  { path: '/cas-clients/pipeline-b2b', label: 'Cas : pipeline B2B', summary: 'Construction d’un pipeline qualifié et rendez-vous.' },
  { path: '/cas-clients/crm-industrie', label: 'Cas : prospection industrie', summary: 'Comptes prioritaires et rendez-vous dans l’industrie.' },
  { path: '/cas-clients/migration-crm', label: 'Cas : migration CRM', summary: 'Migration CRM et nettoyage de données.' },
  { path: '/cas-clients/formation-vente', label: 'Cas : formation vente', summary: 'Formation des équipes de vente à l’IA.' },
  { path: '/cas-clients/formation-ia-com', label: 'Cas : formation IA communication', summary: 'Formation des équipes communication à l’IA générative.' },

  { path: '/agent-vocal-ia', label: 'Agent vocal IA', summary: "L'offre agent vocal : un agent comme Elisa sur le site du client, mise en place et suivi." },
  { path: '/tarifs', label: 'Tarifs', summary: 'Tarifs data, prospection et formation.' },
  { path: '/contact', label: 'Contact', summary: 'Prendre rendez-vous avec Squadia.' },
  { path: '/notre-mission', label: 'Notre mission', summary: 'Mission, équipe et valeurs de Squadia.' },
  { path: '/a-propos', label: 'À propos', summary: 'Présentation de Squadia et de son approche.' },

  { path: '/ressources', label: 'Ressources', summary: 'Guides, enquêtes et outils.' },
  { path: '/ressources/simulateur-roi', label: 'Simulateur ROI', summary: 'Estimer le revenu additionnel lié à une donnée CRM propre.' },
  { path: '/ressources/planificateur-campagne', label: 'Planificateur de campagne', summary: 'Estimer la durée d’une campagne multicanale.' },
  { path: '/ressources/enquete-ia-b2b', label: 'Enquête IA B2B 2026', summary: 'Adoption de l’IA dans les équipes commerciales et marketing.' },
  { path: '/ressources/guide-sales-manager', label: 'Guide Sales Manager', summary: 'Pipeline, KPI, coaching.' },
  { path: '/ressources/guide-marketing-manager', label: 'Guide Marketing Manager', summary: 'Génération de leads, scoring, alignement vente.' },
  { path: '/ressources/channel-sales-plan', label: 'Channel Sales Plan', summary: 'Plan de vente indirecte et partenaires.' },
  { path: '/blog', label: 'Blog', summary: 'Articles sur prospection, IA, CRM et formation.' },
  { path: '/blog/formation-ia-automatisation-ordre', label: 'Article : formation IA ou automatisation ?', summary: 'Par quoi commencer : former les équipes ou automatiser les process.' },
  { path: '/blog/strategie-ia-pme-sequence', label: 'Article : stratégie IA en PME/ETI', summary: 'Séquence pragmatique pour adopter l’IA sans disruption.' },
];

// "/data/", "data", "https://www.squadia.io/data/" → "/data"
export function normalizePath(input) {
  if (!input) return '/';
  let p = String(input).trim();
  try {
    if (/^https?:\/\//i.test(p)) p = new URL(p).pathname;
  } catch {
    // garde la valeur brute
  }
  p = p.split('#')[0].split('?')[0];
  if (!p.startsWith('/')) p = `/${p}`;
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p.toLowerCase();
}

export function findPage(input) {
  const target = normalizePath(input);
  return VOICE_SITE_MAP.find((page) => page.path === target) || null;
}
