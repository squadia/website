import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Cold Call B2B — Rendez-vous qualifiés par téléphone — Squadia",
  description: "Prenez des rendez-vous B2B qualifiés par téléphone. Script co-construit, validation du rendez-vous, reporting hebdomadaire.",
  path: "/prospection/cold-call",
});


export default function Page() {
  return <PageClient />;
}
