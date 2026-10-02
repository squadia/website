// Maillage interne : cartes « Pour aller plus loin » affichées en bas des pages d'offre.
// Un titre de carte décrit la page de destination ; les chiffres des cas clients
// sont ceux publiés sur le site.
const cards = {
  data: { href: '/data', tag: 'Data B2B', title: 'Une base B2B propre, segmentée et enrichie', desc: 'Nettoyage, segmentation et enrichissement de votre base de contacts.' },
  clean: { href: '/data/data-clean', tag: 'Data Clean', title: 'Nettoyer et fiabiliser votre CRM', desc: 'Doublons, champs vides, formats incohérents : une base exploitable dès demain.' },
  seg: { href: '/data/data-seg', tag: 'Data Seg', title: 'Segmenter et scorer vos contacts', desc: 'Votre ICP défini, vos comptes prioritaires identifiés.' },
  lead: { href: '/data/data-lead', tag: 'Data Lead', title: 'Des fichiers de prospection qualifiés', desc: 'Des contacts vérifiés à la main, alignés sur votre cible.' },
  prosp: { href: '/prospection', tag: 'Prospection', title: 'Déléguer la prise de rendez-vous', desc: 'Campagnes email et LinkedIn, appels sortants, ou les deux.' },
  camp: { href: '/prospection/campagne', tag: 'Campagne multicanale', title: 'Des campagnes email et LinkedIn sur signal', desc: 'Messages personnalisés contact par contact, réponses traitées jusqu’au rendez-vous.' },
  cold: { href: '/prospection/cold-call', tag: 'Appels sortants', title: 'Des rendez-vous pris par téléphone', desc: 'Un commercial senior et un script validé avec vous.' },
  form: { href: '/formations', tag: 'Formations IA', title: 'Former vos équipes à l’IA', desc: 'Vente, marketing, communication : deux jours pour changer les habitudes.' },
  fvte: { href: '/formation-ventes-et-ia', tag: 'Formation', title: 'Formation Ventes & IA', desc: 'Prospecter, qualifier et closer avec l’IA.' },
  fmkt: { href: '/formation-marketing-et-ia', tag: 'Formation', title: 'Formation Marketing & IA', desc: 'Contenus, campagnes et analyse augmentés par l’IA.' },
  fcom: { href: '/formation-communication-et-ia', tag: 'Formation', title: 'Formation Communication & IA', desc: 'Charte d’usage, rédaction et production de contenus.' },
  agent: { href: '/agent-vocal-ia', tag: 'Agent vocal IA', title: 'Un agent vocal IA sur votre site', desc: 'Il accueille vos visiteurs 24 h/24, les guide et prend les rendez-vous.' },
  playbook: { href: '/automatisation-ia.html', tag: 'IA Playbook', title: '18 automatisations IA pour la vente B2B', desc: 'Prospection, qualification, suivi CRM, personnalisation.' },
  cas: { href: '/cas-clients', tag: 'Cas clients', title: 'Les résultats de nos clients', desc: 'Prospection, CRM, data, formation : des cas concrets.' },
  casPipeline: { href: '/cas-clients/pipeline-b2b', tag: 'Cas client', title: '+39 opportunités en 2 mois', desc: 'Construction d’un pipeline B2B qualifié.' },
  casIndustrie: { href: '/cas-clients/crm-industrie', tag: 'Cas client', title: '+32 rendez-vous qualifiés dans l’industrie', desc: 'Prospection ciblée de directeurs d’exploitation, en 5 mois.' },
  casMigration: { href: '/cas-clients/migration-crm', tag: 'Cas client', title: 'Migration CRM et nettoyage des données', desc: 'Un pipeline fiabilisé et des équipes qui adoptent l’outil.' },
  casFormVente: { href: '/cas-clients/formation-vente', tag: 'Cas client', title: 'Formation vente : un ROI multiplié par 3', desc: 'Méthode de vente B2B et outils IA.' },
  casFormCom: { href: '/cas-clients/formation-ia-com', tag: 'Cas client', title: 'L’équipe communication formée à l’IA', desc: 'Charte d’usage, rédaction et gouvernance.' },
};

const byPage = {
  '/data': ['agent', 'casMigration', 'playbook'],
  '/data/data-clean': ['seg', 'lead', 'casMigration', 'camp'],
  '/data/data-seg': ['clean', 'lead', 'casIndustrie', 'camp'],
  '/data/data-lead': ['clean', 'seg', 'cold', 'casPipeline'],
  '/prospection': ['agent', 'lead', 'casPipeline', 'casIndustrie'],
  '/prospection/campagne': ['cold', 'lead', 'agent', 'casPipeline'],
  '/prospection/cold-call': ['camp', 'lead', 'casIndustrie', 'fvte'],
  '/formations': ['agent', 'casFormVente', 'casFormCom', 'playbook'],
  '/formation-ventes-et-ia': ['fmkt', 'fcom', 'casFormVente', 'prosp'],
  '/formation-marketing-et-ia': ['fvte', 'fcom', 'seg', 'playbook'],
  '/formation-communication-et-ia': ['fmkt', 'fvte', 'casFormCom', 'playbook'],
  '/agent-vocal-ia': ['prosp', 'data', 'playbook', 'cas'],
  '/directeur-general': ['data', 'prosp', 'form', 'agent'],
  '/directeur-commercial': ['prosp', 'lead', 'fvte', 'agent'],
  '/directeur-marketing': ['seg', 'camp', 'fmkt', 'agent'],
  '/notre-mission': ['data', 'prosp', 'form', 'agent'],
};

export const relatedLinksFor = (path) => (byPage[path] || []).map((key) => cards[key]);
