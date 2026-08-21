import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Channel Sales Plan B2B — Squadia",
  description: "Modèle et guide pour structurer un plan de vente indirecte et accompagner vos partenaires commerciaux.",
  path: "/ressources/channel-sales-plan",
});


export default function Page() {
  return <PageClient />;
}
