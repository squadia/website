import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Cas client Formation commerciale — Squadia",
  description: "Formation des équipes de vente à l'IA et aux nouveaux outils : adoption, méthodes et résultats mesurables.",
  path: "/cas-clients/formation-vente",
});

export default function Page() {
  return <PageClient />;
}
