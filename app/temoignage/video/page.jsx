import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: 'Un message pour toi · Squadia',
  description: 'Page privée : message vidéo de remerciement.',
  path: '/temoignage/video',
  noindex: true,
});

export default function Page() {
  return <PageClient />;
}
