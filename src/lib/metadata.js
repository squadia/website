// Métadonnées partagées pour l'ensemble du site Squadia

export const SITE_NAME = 'Squadia';
export const SITE_URL = 'https://squadia.io';
export const DEFAULT_IMAGE = '/og-image.jpg'; // à remplacer si besoin par une image OG existante

export const defaultOpenGraph = {
  type: 'website',
  locale: 'fr_FR',
  siteName: SITE_NAME,
};

export function buildMetadata({ title, description, path, image = DEFAULT_IMAGE }) {
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url: path ? `${SITE_URL}${path}` : SITE_URL,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: path ? `${SITE_URL}${path}` : SITE_URL,
    },
  };
}
