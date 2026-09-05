import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Formation IA ou automatisation : dans quel ordre ? — Blog Squadia",
  description: "Formation ou automatisation : quel levier actionner en premier pour accélérer vos équipes commerciales ?",
  path: "/blog/formation-ia-automatisation-ordre",
});

const article = articleSchema({
  title: "Formation IA ou automatisation : dans quel ordre ? — Blog Squadia",
  description: "Formation ou automatisation : quel levier actionner en premier pour accélérer vos équipes commerciales ?",
  path: "/blog/formation-ia-automatisation-ordre",
  image: "/assets/images/blog/blog3.jpeg",
  datePublished: "2026-04-01",
  dateModified: "2026-09-05",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Formation IA ou automatisation : dans quel ordre ?", path: "/blog/formation-ia-automatisation-ordre" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[article, breadcrumb]} />
      <PageClient />
    </>
  );
}
