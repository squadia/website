import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Squadia pour Directeurs Marketing — Pipeline B2B et IA",
  description: "Squadia aide les directions marketing B2B à structurer un pipeline fiable et qualifier leurs leads. Pour PME et ETI en France.",
  path: "/directeur-marketing",
});

const service = serviceSchema({
  name: "Squadia pour Directeurs Marketing",
  description: "Structurer un pipeline fiable et qualifier les leads marketing B2B.",
  path: "/directeur-marketing",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Directeur Marketing", path: "/directeur-marketing" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[service, breadcrumb]} />
      <PageClient />
    </>
  );
}
