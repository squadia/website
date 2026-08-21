import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Phoning B2B — Appels sortants et rendez-vous qualifiés — Squadia",
  description: "Service d'appels sortants B2B pour obtenir des rendez-vous qualifiés. Méthode structurée, script validé, reporting.",
  path: "/prospection/phoning",
});


export default function Page() {
  return <PageClient />;
}
