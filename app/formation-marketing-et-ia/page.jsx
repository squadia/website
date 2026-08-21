import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Formation IA Marketing B2B — Contenus, campagnes, analyse — Squadia",
  description: "Formez vos équipes marketing à l'IA : création de contenus, campagnes multicanal, scoring et analyse de performance.",
  path: "/formation-marketing-et-ia",
});

const course = courseSchema({
  name: "Formation IA Marketing B2B",
  description: "Formez vos équipes marketing à l'IA : création de contenus, campagnes multicanal, scoring et analyse de performance.",
  path: "/formation-marketing-et-ia",
});

const faq = faqPageSchema([
  { question: "Faut-il avoir des compétences techniques pour suivre cette formation ?", answer: "Non. Les outils utilisés sont accessibles sans développement ni code. L'objectif est de rendre les équipes autonomes sur des outils qu'elles peuvent utiliser dès le lendemain." },
  { question: "Quels outils sont utilisés pendant la formation ?", answer: "Les outils varient selon l'évolution rapide du marché IA. On travaille avec les outils les plus pertinents au moment de la session : génération de texte, image, vidéo, podcast, veille. La sélection est mise à jour régulièrement." },
  { question: "Cette formation est-elle adaptée aux petites équipes marketing ?", answer: "Oui. Elle est conçue pour des profils opérationnels, pas des experts. Une personne seule ou une petite équipe de 2 à 3 personnes peut suivre et repartir avec des pratiques directement applicables." },
  { question: "Le cadre légal est-il vraiment abordé ?", answer: "Oui, dès le Jour 1. IA Act, RGPD, droits d'auteur, transparence : les points essentiels sont couverts de façon pratique, pas théorique." },
  { question: "Quelle différence avec la formation Communication & IA ?", answer: "La formation Marketing & IA est centrée sur la production de contenu, les campagnes et la performance. La formation Communication & IA est plus orientée message, positionnement et ligne éditoriale. Les deux sont complémentaires pour des organisations où marketing et communication sont séparés." },
]);

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Formations", path: "/formations" },
  { name: "Formation IA Marketing B2B", path: "/formation-marketing-et-ia" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[course, faq, breadcrumb]} />
      <PageClient />
    </>
  );
}
