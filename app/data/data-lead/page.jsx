import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Data Lead — Fichiers de prospection qualifiés B2B — Squadia",
  description: "Construisez des fichiers de leads B2B qualifiés : contacts vérifiés, signaux d'achat et alignement avec votre cible.",
  path: "/data/data-lead",
});

export default function Page() {
  return <PageClient />;
}
