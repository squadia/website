import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Nettoyage, segmentation et enrichment des données B2B — Blog Squadia",
  description: "Pourquoi et comment nettoyer, segmenter et enrichir votre base de données B2B pour une prospection efficace.",
  path: "/blog/nettoyage-segmentation-enrichissement-donnees-b2b",
});

const article = articleSchema({
  title: "Nettoyage, segmentation et enrichment des données B2B — Blog Squadia",
  description: "Pourquoi et comment nettoyer, segmenter et enrichir votre base de données B2B pour une prospection efficace.",
  path: "/blog/nettoyage-segmentation-enrichissement-donnees-b2b",
  image: "/assets/images/blog/cleaningdata.jpeg",
  datePublished: "2026-04-01",
  dateModified: "2026-09-05",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Nettoyage, segmentation et enrichment des données B2B", path: "/blog/nettoyage-segmentation-enrichissement-donnees-b2b" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[article, breadcrumb]} />
      <PageClient />
    </>
  );
}
