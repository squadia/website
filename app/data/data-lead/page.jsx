import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Data Lead — Fichiers de prospection qualifiés B2B — Squadia",
  description: "Squadia construit vos fichiers de prospection B2B : contacts vérifiés à la main, signaux d'achat, alignés sur votre cible.",
  path: "/data/data-lead",
});

export default function Page() {
  return <PageClient />;
}
