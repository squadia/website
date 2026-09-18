import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: 'Enregistrer votre témoignage — Squadia',
  description: "Page privée d'enregistrement de témoignage.",
  path: '/temoignage/enregistrer',
  noindex: true,
});

export default function Page() {
  return <PageClient />;
}
