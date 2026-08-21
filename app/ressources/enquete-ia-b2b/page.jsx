import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Enquête IA B2B 2026 — Squadia",
  description: "Les résultats de notre enquête sur l'adoption de l'IA dans les équipes commerciales et marketing B2B en France.",
  path: "/ressources/enquete-ia-b2b",
});


export default function Page() {
  return <PageClient />;
}
