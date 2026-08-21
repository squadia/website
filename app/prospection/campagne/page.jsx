import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Campagnes de prospection multicanale B2B — Squadia",
  description: "Lancez des campagnes de prospection B2B personnalisées par email, LinkedIn et téléphone. Séquences, réponses, rendez-vous qualifiés.",
  path: "/prospection/campagne",
});

const service = serviceSchema({
  name: "Campagnes de prospection multicanale B2B",
  description: "Lancez des campagnes de prospection B2B personnalisées par email, LinkedIn et téléphone. Séquences, réponses et rendez-vous qualifiés.",
  path: "/prospection/campagne",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Prospection multicanale", path: "/prospection/campagne" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[service, breadcrumb]} />
      <PageClient />
    </>
  );
}
