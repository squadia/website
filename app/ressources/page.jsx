import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Ressources B2B — Guides, enquêtes et outils — Squadia",
  description: "Accédez aux guides, enquêtes et outils de Squadia pour améliorer votre prospection, votre CRM et votre stratégie commerciale.",
  path: "/ressources",
});

export default function Page() {
  return <PageClient />;
}
