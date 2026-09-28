import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Planificateur de campagne multicanale : combien de temps dure votre séquence ? | Squadia",
  description: "Estimez la durée réelle d'une campagne de prospection multicanale (email, LinkedIn, appel) selon vos contacts, vos délais de relance et vos capacités d'envoi quotidiennes.",
  path: "/ressources/planificateur-campagne",
});

export default function Page() {
  return <PageClient />;
}
