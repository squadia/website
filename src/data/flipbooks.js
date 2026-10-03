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
  'recrutement-commercial-7-leviers': {
    title: 'Recruter un commercial : 7 leviers avant l\'onboarding',
    pdf: '/flipbooks/recrutement-commercial-7-leviers.pdf',
    formPath: '/ressources/recrutement-commercial-7-leviers/',
    // Page 4 : emplacement gris sous « Segmenter le marché en 3 tiers » (mesuré sur le PDF).
    // Le watermark Veed saute entre les 4 coins sur un fond bleu uni (#A1D7FF) : 4 pastilles de la même
    // couleur le masquent, sans zoom ni rognage. Lecteur sous la vidéo, pas de plein écran.
    video: {
      page: 4,
      src: '/flipbooks/tiering-strategy.mp4',
      mode: 'below',
      mask: {
        color: '#A1D7FF',
        rects: [
          { top: 0, left: 0, width: 21.5, height: 11 },
          { top: 0, left: 78, width: 22, height: 11 },
          { top: 90, left: 0, width: 21.5, height: 10 },
          { top: 90, left: 78, width: 22, height: 10 },
        ],
      },
      rect: { top: 9.08, left: 10.73, width: 77.19, height: 29.49 },
    },
    // Zones cliquables sur les boutons du PDF (positions mesurées sur le PDF, en % de la page)
    links: [
      { page: 3, href: '/ressources/simulateur-roi/', label: 'Calcul ROI : Temps de process vs Temps de vente', top: 43.6, left: 21, width: 56, height: 5.6 },
      { page: 14, href: '/contact/', label: 'Préparons son arrivée', top: 60.1, left: 10.5, width: 30, height: 3.5 },
    ],
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
