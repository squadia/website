import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Cas client Migration et Data Cleaning CRM — Squadia",
  description: "Migration CRM et nettoyage de données pour fiabiliser le pipeline et améliorer l'adoption des équipes commerciales.",
  path: "/cas-clients/migration-crm",
});

export default function Page() {
  return <PageClient />;
}
