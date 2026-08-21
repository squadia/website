import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Erreurs de prospection multicanale B2B — Blog Squadia",
  description: "Les erreurs les plus fréquentes dans les campagnes email + LinkedIn B2B, et comment les éviter.",
  path: "/blog/prospection-multicanale-b2b-erreurs",
});

const article = articleSchema({
  title: "Erreurs de prospection multicanale B2B — Blog Squadia",
  description: "Les erreurs les plus fréquentes dans les campagnes email + LinkedIn B2B, et comment les éviter.",
  path: "/blog/prospection-multicanale-b2b-erreurs",
  image: "/assets/images/blog/blog4.jpeg",
  datePublished: "2026-04-01",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Erreurs de prospection multicanale B2B", path: "/blog/prospection-multicanale-b2b-erreurs" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[article, breadcrumb]} />
      <PageClient />
    </>
  );
}
