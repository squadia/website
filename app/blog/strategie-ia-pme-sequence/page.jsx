import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { articleSchema, breadcrumbSchema, faqPageSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Séquence d'adoption IA en PME/ETI — Blog Squadia",
  description: "Par où commencer l'IA dans une PME ou ETI ? Une séquence pragmatique pour progresser sans disruption.",
  path: "/blog/strategie-ia-pme-sequence",
});

const article = articleSchema({
  title: "Séquence d'adoption IA en PME/ETI — Blog Squadia",
  description: "Par où commencer l'IA dans une PME ou ETI ? Une séquence pragmatique pour progresser sans disruption.",
  path: "/blog/strategie-ia-pme-sequence",
  image: "/assets/images/blog/blog1.png",
  datePublished: "2026-04-01",
  dateModified: "2026-09-05",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Ressources", path: "/ressources" },
  { name: "Séquence d'adoption IA en PME/ETI", path: "/blog/strategie-ia-pme-sequence" },
]);

const faq = faqPageSchema([
  {
    question: "Où perdons-nous le plus de temps sur des tâches à faible valeur ?",
    answer: "Pas en théorie. Demandez à vos commerciaux, vos équipes marketing, vos managers. Les réponses sont presque toujours les mêmes : préparation des rendez-vous, mise à jour du CRM, reporting, création de contenus répétitifs, veille. Ce sont les premiers candidats à l'automatisation.",
  },
  {
    question: "Où nos données sont-elles suffisamment structurées pour qu'une IA s'en serve ?",
    answer: "L'IA ne crée pas de valeur sur des données inexistantes ou chaotiques. Avant d'automatiser quoi que ce soit, il faut savoir dans quel état est votre CRM, vos fichiers contacts, vos historiques de campagnes. Si la donnée est mauvaise, l'automatisation amplifie le problème plutôt qu'elle ne le règle.",
  },
  {
    question: "Quels résultats business veut-on obtenir dans les 90 prochains jours ?",
    answer: "Pas dans 3 ans. Dans 90 jours. Si vous ne pouvez pas nommer un indicateur concret qui devra avoir évolué dans trois mois, votre feuille de route est trop vague pour être actionnable.",
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
