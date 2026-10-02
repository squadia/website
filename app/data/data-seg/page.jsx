import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Data Seg — Segmentation et scoring de contacts B2B — Squadia",
  description: "Squadia segmente votre base B2B et identifie vos comptes prioritaires grâce à la définition de l'ICP et au scoring.",
  path: "/data/data-seg",
});

export default function Page() {
  return <PageClient />;
}
