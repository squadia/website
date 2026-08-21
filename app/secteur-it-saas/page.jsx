import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Squadia pour le secteur IT & SaaS — Prospection B2B",
  description: "Prospection B2B pour les éditeurs logiciels, SaaS et entreprises IT.",
  path: "/secteur-it-saas",
});

export default function Page() {
  return <PageClient />;
}
