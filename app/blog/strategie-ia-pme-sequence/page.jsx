import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Séquence d'adoption IA en PME/ETI — Blog Squadia",
  description: "Par où commencer l'IA dans une PME ou ETI ? Une séquence pragmatique pour progresser sans disruption.",
  path: "/blog/strategie-ia-pme-sequence",
});

const article = articleSchema({
  title: "Séquence d'adoption IA en PME/ETI — Blog Squadia",
  description: "Par où commencer l'IA dans une PME ou ETI ? Une séquence pragmatique pour progresser sans disruption.",
  path: "/blog/strategie-ia-pme-sequence",
  image: "/assets/images/blog/blog1.png",
  datePublished: "2026-04-01",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Séquence d'adoption IA en PME/ETI", path: "/blog/strategie-ia-pme-sequence" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[article, breadcrumb]} />
      <PageClient />
    </>
  );
}
