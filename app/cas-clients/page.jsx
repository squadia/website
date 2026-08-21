import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Cas clients B2B — Résultats Squadia en prospection, CRM et formation",
  description: "Découvrez comment Squadia accompagne les PME et ETI B2B : cas concrets en prospection, CRM, data et formation.",
  path: "/cas-clients",
});

export default function Page() {
  return <PageClient />;
}
