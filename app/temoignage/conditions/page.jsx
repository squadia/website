import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Conditions d'utilisation témoignage client — Squadia",
  description: "Page privée : conditions d'utilisation des témoignages vidéo.",
  path: '/temoignage/conditions',
  noindex: true,
});

export default function Page() {
  return <PageClient />;
}
