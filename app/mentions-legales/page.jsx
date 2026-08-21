import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Mentions légales — Squadia",
  description: "Mentions légales du site Squadia : éditeur, hébergeur, contact et conditions d'utilisation.",
  path: "/mentions-legales",
});

export default function Page() {
  return <PageClient />;
}
