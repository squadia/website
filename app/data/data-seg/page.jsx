import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Data Seg — Segmentation et scoring de contacts B2B — Squadia",
  description: "Segmentez votre base B2B et identifiez les comptes prioritaires grâce au scoring comportemental et firmographique.",
  path: "/data/data-seg",
});

export default function Page() {
  return <PageClient />;
}
