import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Formations IA pour équipes B2B — Squadia",
  description: "Catalogue des formations Squadia : IA appliquée à la vente, au marketing et à la communication B2B. Pour les équipes de PME et ETI en France.",
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Formations Squadia",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Formation Vente B2B et IA", "url": "https://squadia.io/formation-ventes-et-ia" },
    { "@type": "ListItem", "position": 2, "name": "Formation Marketing et IA", "url": "https://squadia.io/formation-marketing-et-ia" },
    { "@type": "ListItem", "position": 3, "name": "Formation Communication et IA", "url": "https://squadia.io/formation-communication-et-ia" }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd data={itemList} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Formations", path: "/formations" },
      ])} />
      <PageClient />
    </>
  );
}
