import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Cas client Pipeline B2B — Construction d'un pipeline qualifié — Squadia",
  description: "Comment Squadia a aidé une entreprise B2B à structurer un pipeline fiable et générer des rendez-vous qualifiés.",
  path: "/cas-clients/pipeline-b2b",
});

export default function Page() {
  return <PageClient />;
}
