import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Changement de CRM et organisation — Blog Squadia",
  description: "Changer de CRM sans échouer : conduite du changement, adoption et alignement des équipes.",
  path: "/blog/changement-crm-organisation",
});

const article = articleSchema({
  title: "Changement de CRM et organisation — Blog Squadia",
  description: "Changer de CRM sans échouer : conduite du changement, adoption et alignement des équipes.",
  path: "/blog/changement-crm-organisation",
  image: "/assets/images/blog/blog2.jpeg",
  datePublished: "2026-04-01",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Changement de CRM et organisation", path: "/blog/changement-crm-organisation" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[article, breadcrumb]} />
      <PageClient />
    </>
  );
}
