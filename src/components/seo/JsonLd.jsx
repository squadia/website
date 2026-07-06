/**
 * Injecte un bloc Schema.org (JSON-LD) dans une page.
 * Composant serveur : à utiliser dans les fichiers page.jsx (App Router).
 *
 * Usage :
 *   import JsonLd from '@/src/components/seo/JsonLd';
 *   <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', ... }} />
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
