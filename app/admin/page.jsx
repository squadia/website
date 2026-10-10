import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: 'Espace admin Squadia',
  description: 'Page privée : suivi d\'Elisa et modération des témoignages.',
  path: '/admin',
  noindex: true,
});

export default function Page() {
  return <PageClient />;
}
