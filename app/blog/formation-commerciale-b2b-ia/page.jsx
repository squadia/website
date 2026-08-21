import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Formation commerciale B2B et IA — Blog Squadia",
  description: "Comment former les commerciaux à l'IA pour améliorer la prospection, la qualification et le closing.",
  path: "/blog/formation-commerciale-b2b-ia",
});

const article = articleSchema({
  title: "Formation commerciale B2B et IA — Blog Squadia",
  description: "Comment former les commerciaux à l'IA pour améliorer la prospection, la qualification et le closing.",
  path: "/blog/formation-commerciale-b2b-ia",
  image: "/assets/images/blog/formationcommercialeB2B.jpeg",
  datePublished: "2026-04-01",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Formation commerciale B2B et IA", path: "/blog/formation-commerciale-b2b-ia" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[article, breadcrumb]} />
      <PageClient />
    </>
  );
}
