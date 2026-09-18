import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: 'Merci pour votre formation — Squadia',
  description: "Page privée de recueil de témoignage.",
  path: '/temoignage',
  noindex: true,
});

export default function Page() {
  return <PageClient />;
}
