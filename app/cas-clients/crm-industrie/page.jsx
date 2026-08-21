import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Cas client Prospection ciblée — Industrie B2B — Squadia",
  description: "Prospection ciblée dans le secteur industriel : identification des comptes prioritaires et prise de rendez-vous qualifiés.",
  path: "/cas-clients/crm-industrie",
});

export default function Page() {
  return <PageClient />;
}
