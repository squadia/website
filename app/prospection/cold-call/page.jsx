import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Cold Call B2B — Rendez-vous qualifiés par téléphone — Squadia",
  description: "Squadia prend vos rendez-vous B2B qualifiés par téléphone : commercial senior, script co-construit, reporting hebdomadaire.",
  path: "/prospection/cold-call",
});


export default function Page() {
  return <PageClient />;
}
