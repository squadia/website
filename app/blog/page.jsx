import { buildMetadata } from '@/src/lib/metadata';
import { redirect } from 'next/navigation';

export const metadata = buildMetadata({
  title: "Blog — Squadia",
  description: "Articles, guides et retours d'expérience sur la prospection B2B, l'IA, le CRM et la formation commerciale.",
  path: "/blog",
});

export default function Page() {
  redirect('/ressources');
}
