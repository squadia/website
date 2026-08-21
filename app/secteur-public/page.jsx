import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Squadia pour le secteur Public — Prospection B2B",
  description: "Prospection pour les entreprises ciblant le secteur public et les collectivités.",
  path: "/secteur-public",
});

export default function Page() {
  return <PageClient />;
}
