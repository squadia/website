// Références Schema.org partagées par les pages.

export const SITE_URL = 'https://squadia.io';

// Référence à l'organisation (déclarée en entier dans app/layout.jsx).
// On la réutilise via @id pour lier les schémas de page à l'entité Squadia.
export const ORGANIZATION_REF = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Squadia',
  url: SITE_URL,
};

// Construit un schéma BlogPosting pour un article de blog.
export function blogPosting({ slug, headline, description, datePublished, dateModified }) {
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': headline,
    'description': description,
    'inLanguage': 'fr-FR',
    'url': url,
    'mainEntityOfPage': { '@type': 'WebPage', '@id': url },
    'datePublished': datePublished,
    'dateModified': dateModified || datePublished,
    'image': `${SITE_URL}/logo.png`,
    'author': {
      '@type': 'Person',
      'name': 'Jérôme Debruyne',
      'url': `${SITE_URL}/a-propos`,
    },
    'publisher': {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      'name': 'Squadia',
      'logo': { '@type': 'ImageObject', 'url': `${SITE_URL}/logo.png` },
    },
  };
}

// Construit un fil d'Ariane BreadcrumbList à partir d'une liste [{ name, path }].
// Le path est relatif ('/formations') ou absolu.
export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}
