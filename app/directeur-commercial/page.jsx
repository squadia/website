import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Squadia pour Directeurs Commerciaux — Pipeline B2B",
  description: "Squadia aide les directions commerciales B2B à fiabiliser leur pipeline, structurer la prospection et exploiter les bons signaux d'achat. Pour PME et ETI en France.",
  path: "/directeur-commercial",
});

const service = serviceSchema({
  name: "Squadia pour Directeurs Commerciaux",
  description: "Fiabiliser le pipeline, structurer la prospection et exploiter les bons signaux d'achat.",
  path: "/directeur-commercial",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Directeur Commercial", path: "/directeur-commercial" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[service, breadcrumb]} />
      <PageClient />
    </>
  );
}
