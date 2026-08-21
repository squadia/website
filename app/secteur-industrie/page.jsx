import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Squadia pour le secteur Industrie — Prospection B2B",
  description: "Prospection ciblée pour les industriels B2B : identification des comptes et prise de rendez-vous.",
  path: "/secteur-industrie",
});

export default function Page() {
  return <PageClient />;
}
