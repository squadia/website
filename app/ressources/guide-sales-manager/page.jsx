import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Guide Sales Manager B2B — Squadia",
  description: "Guide pratique pour les Sales Managers : pipeline, KPI, coaching et outils pour manager une équipe commerciale performante.",
  path: "/ressources/guide-sales-manager",
});


export default function Page() {
  return <PageClient />;
}
