import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Contact Squadia — Prendre rendez-vous",
  description: "Contactez Squadia pour discuter de votre data B2B, de vos campagnes de prospection ou de la formation de vos équipes. Réponse sous 24h.",
  path: "/contact",
});

export default function Page() {
  return <PageClient />;
}
