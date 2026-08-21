import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Data B2B — Prospection ciblée et intelligence commerciale — Squadia",
  description: "Nettoyez, segmentez et enrichissez votre base de données B2B pour cibler les bons prospects au bon moment.",
  path: "/data",
});

const service = serviceSchema({
  name: "Data B2B",
  description: "Nettoyage, segmentation et enrichissement de bases de données B2B pour cibler les bons prospects au bon moment.",
  path: "/data",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Data B2B", path: "/data" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[service, breadcrumb]} />
      <PageClient />
    </>
  );
}
