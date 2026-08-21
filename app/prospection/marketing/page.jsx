import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Prospection marketing B2B — Campagnes email et LinkedIn — Squadia",
  description: "Créez et optimisez vos campagnes de prospection B2B sur email et LinkedIn : copy, ciblage, A/B test et reporting.",
  path: "/prospection/marketing",
});


export default function Page() {
  return <PageClient />;
}
