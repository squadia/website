import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Data Clean — Nettoyage et fiabilisation base CRM — Squadia",
  description: "Squadia nettoie et fiabilise votre CRM : doublons supprimés, données complétées, formats harmonisés. Audit gratuit de votre base.",
  path: "/data/data-clean",
});

export default function Page() {
  return <PageClient />;
}
