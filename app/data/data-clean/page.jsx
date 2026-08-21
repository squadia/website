import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Data Clean — Nettoyage et fiabilisation base CRM — Squadia",
  description: "Supprimez les doublons, corrigez les données incomplètes et fiabilisez votre base CRM pour une prospection plus efficace.",
  path: "/data/data-clean",
});

export default function Page() {
  return <PageClient />;
}
