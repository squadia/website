import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Cas client Formation IA Communication — Squadia",
  description: "Formation des équipes communication à l'IA générative : charte d'usage, rédaction et gouvernance.",
  path: "/cas-clients/formation-ia-com",
});

export default function Page() {
  return <PageClient />;
}
