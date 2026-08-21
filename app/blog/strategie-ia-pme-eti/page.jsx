import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Stratégie IA pour PME et ETI — Blog Squadia",
  description: "Comment les PME et ETI peuvent bâtir une stratégie IA commerciale concrète, sans se perdre dans les outils.",
  path: "/blog/strategie-ia-pme-eti",
});

const article = articleSchema({
  title: "Stratégie IA pour PME et ETI — Blog Squadia",
  description: "Comment les PME et ETI peuvent bâtir une stratégie IA commerciale concrète, sans se perdre dans les outils.",
  path: "/blog/strategie-ia-pme-eti",
  image: "/assets/images/blog/blog1.png",
  datePublished: "2026-04-01",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Stratégie IA pour PME et ETI", path: "/blog/strategie-ia-pme-eti" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[article, breadcrumb]} />
      <PageClient />
    </>
  );
}
