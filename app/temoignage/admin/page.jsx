import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: 'Admin témoignages — Squadia',
  description: 'Page privée de modération.',
  path: '/temoignage/admin',
  noindex: true,
});

export default function Page() {
  return <PageClient />;
}
