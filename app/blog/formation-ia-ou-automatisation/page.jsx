import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Formation commerciale IA vs automatisation — Blog Squadia",
  description: "Différences, complémentarités et choix entre formation des équipes et automatisation des processus commerciaux.",
  path: "/blog/formation-ia-ou-automatisation",
});

const article = articleSchema({
  title: "Formation commerciale IA vs automatisation — Blog Squadia",
  description: "Différences, complémentarités et choix entre formation des équipes et automatisation des processus commerciaux.",
  path: "/blog/formation-ia-ou-automatisation",
  image: "/assets/images/blog/blog3.jpeg",
  datePublished: "2026-04-01",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Formation commerciale IA vs automatisation", path: "/blog/formation-ia-ou-automatisation" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[article, breadcrumb]} />
      <PageClient />
    </>
  );
}
