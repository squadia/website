import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Notre Mission — Squadia, conseil B2B en IA et performance commerciale",
  description: "Découvrez la mission de Squadia : réconcilier l'intention et l'exécution pour les équipes commerciales B2B. Notre équipe, nos valeurs et notre engagement.",
  path: "/notre-mission",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Notre Mission", path: "/notre-mission" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumb]} />
      <PageClient />
    </>
  );
}
