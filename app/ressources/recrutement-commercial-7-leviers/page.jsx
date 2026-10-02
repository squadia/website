import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Recruter un commercial : 7 leviers avant l'onboarding — Squadia",
  description: "Guide opérationnel : 7 leviers à lancer pendant le recrutement pour que votre recrue commerciale hérite d'un portefeuille actif dès le jour 1.",
  path: "/ressources/recrutement-commercial-7-leviers",
});

export default function Page() {
  return <PageClient />;
}
