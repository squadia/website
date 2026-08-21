import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Squadia pour les DG — Croissance PME/ETI",
  description: "57 % des dirigeants testent l'IA sans vision d'ensemble. Squadia aide les DG de PME/ETI à bâtir un système de génération de revenus mesurable en 90 jours.",
  path: "/directeur-general",
});

const service = serviceSchema({
  name: "Squadia pour Directeurs Généraux",
  description: "Bâtir un système de génération de revenus mesurable en 90 jours pour les DG de PME/ETI.",
  path: "/directeur-general",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Directeur Général", path: "/directeur-general" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[service, breadcrumb]} />
      <PageClient />
    </>
  );
}
