/**
 * Registre des ebooks disponibles en flipbook.
 *
 * Chaque entrée pointe vers un PDF dans /public/flipbooks/. Dépose le
 * fichier au chemin indiqué (ou change `pdf`) et ça marche direct — pas
 * d'autre câblage nécessaire. `video` est optionnel : ne le mets que sur le
 * document qui a une page vidéo (l'ebook marketing).
 */
export const FLIPBOOKS = {
  'guide-sales-manager': {
    title: 'Mini-guide Sales Manager B2B',
    pdf: '/flipbooks/guide-sales-manager.pdf',
    formPath: '/ressources/guide-sales-manager/',
  },
  'guide-marketing-manager': {
    title: 'Mini-guide Marketing Manager B2B',
    pdf: '/flipbooks/guide-marketing-manager.pdf',
    formPath: '/ressources/guide-marketing-manager/',
    // Page (1-indexée) où la vidéo doit se lancer automatiquement.
    // rect = position/taille de l'encart vidéo dans la page, en % — mesuré
    // directement sur le PDF (page 12, cadre HeyGen).
    video: {
      page: 12,
      src: '/flipbooks/guide-marketing-manager-video.mp4',
      rect: { top: 59.6, left: 50.1, width: 41.7, height: 16.6 },
    },
  },
  'channel-sales-plan': {
    title: 'Plan Partenaire Channel Sales',
    pdf: '/flipbooks/channel-sales-plan.pdf',
    formPath: '/ressources/channel-sales-plan/',
  },
};

export function getFlipbook(slug) {
  return FLIPBOOKS[slug] || null;
}
