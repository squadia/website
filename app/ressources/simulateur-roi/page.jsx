import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Simulateur ROI : combien vaut le temps récupéré en process ? — Squadia",
  description: "Estimez en 30 secondes le pipeline et le revenu additionnel que votre équipe commerciale peut générer grâce au nettoyage et à l'enrichissement de votre donnée CRM.",
  path: "/ressources/simulateur-roi",
});

export default function Page() {
  return <PageClient />;
}
