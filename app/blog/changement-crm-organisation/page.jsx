import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema, faqPageSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Changement de CRM et organisation — Blog Squadia",
  description: "Changer de CRM sans échouer : conduite du changement, adoption et alignement des équipes.",
  path: "/blog/changement-crm-organisation",
});

const article = articleSchema({
  title: "Changement de CRM et organisation — Blog Squadia",
  description: "Changer de CRM sans échouer : conduite du changement, adoption et alignement des équipes.",
  path: "/blog/changement-crm-organisation",
  image: "/assets/images/blog/blog2.jpeg",
  datePublished: "2026-04-01",
  dateModified: "2026-09-05",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Changement de CRM et organisation", path: "/blog/changement-crm-organisation" },
]);

const faq = faqPageSchema([
  {
    question: "Qu'est-ce qu'on veut que le CRM rende visible ?",
    answer: "Pas en théorie : dans la pratique quotidienne du dirigeant. Quelles décisions doit-il permettre de prendre ? Si vous ne pouvez pas répondre précisément, le projet partira dans le mauvais sens.",
  },
  {
    question: "Où sont les vrais points de friction dans l'adoption ?",
    answer: "La mise à jour manuelle est chronophage. Aujourd'hui, cette tâche peut être automatisée : transcription d'appel, mise à jour auto du CRM. Identifier ces frictions multiplie le taux d'adoption.",
  },
  {
    question: "Quels process veut-on standardiser ?",
    answer: "Un CRM n'impose pas des process : il les reflète. Définir les étapes du pipeline, les critères de qualification et les règles de routage est un travail indispensable avant tout déploiement.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[article, breadcrumb, faq]} />
      <PageClient />
    </>
  );
}
