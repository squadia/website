import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Prospection B2B — Campagnes multicanale et appels sortants — Squadia",
  description: "Squadia lance vos campagnes de prospection B2B : séquences email et LinkedIn avec Repliik, appels sortants par un commercial senior, ou les deux combinés.",
  path: "/prospection",
});

const service = serviceSchema({
  name: "Prospection B2B",
  description: "Campagnes de prospection multicanale et appels sortants pour générer des rendez-vous qualifiés.",
  path: "/prospection",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Prospection", path: "/prospection" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[service, breadcrumb]} />
      <PageClient />
    </>
  );
}
