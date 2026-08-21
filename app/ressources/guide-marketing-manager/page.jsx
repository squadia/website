import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Guide Marketing Manager B2B — Squadia",
  description: "Guide pratique pour les Marketing Managers : génération de leads, scoring, alignmentement vente et automatisation.",
  path: "/ressources/guide-marketing-manager",
});


export default function Page() {
  return <PageClient />;
}
