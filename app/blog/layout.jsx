import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Blog B2B — Prospection, data et IA — Squadia",
  description: "Articles pratiques sur la prospection B2B, la data et l'IA pour les équipes commerciales et marketing.",
  path: "/blog",
});

export default function BlogLayout({ children }) {
  return children;
}
