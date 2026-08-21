import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Formation IA Communication B2B — Charte, rédaction, outils — Squadia",
  description: "Formez vos équipes communication à l'IA : charte d'usage, rédaction augmentée, outils et gouvernance.",
  path: "/formation-communication-et-ia",
});

const course = courseSchema({
  name: "Formation IA Communication B2B",
  description: "Formez vos équipes communication à l'IA : charte d'usage, rédaction augmentée, outils et gouvernance.",
  path: "/formation-communication-et-ia",
});

const faq = faqPageSchema([
  { question: "Faut-il avoir des compétences techniques pour suivre cette formation ?", answer: "Non. Les outils utilisés sont accessibles sans développement ni code. L'objectif est de rendre les équipes autonomes sur des outils opérationnels dès le lendemain de la formation." },
  { question: "Est-ce que cette formation couvre la partie SEO ?", answer: "Oui, le Jour 2 intègre les outils d'analyse et d'optimisation SEO dans la logique de production de contenu. L'objectif n'est pas de former des experts SEO, mais de produire du contenu qui se positionne." },
  { question: "Quelle différence avec la formation Marketing & IA ?", answer: "La formation Communication & IA est centrée sur le message, le positionnement et la ligne éditoriale. La formation Marketing & IA est plus orientée production de contenu, campagnes et performance. Les deux sont complémentaires." },
  { question: "Peut-on former une équipe mixte communication + marketing ?", answer: "Oui. En format intra, le programme peut être adapté pour couvrir les enjeux des deux pôles. On cadre ça ensemble en amont." },
  { question: "Les outils mentionnés sont-ils inclus dans le tarif de la formation ?", answer: "Les outils utilisés en formation sont généralement disponibles en version gratuite ou en essai. Aucun abonnement n'est requis pour participer. Si des outils payants sont recommandés, c'est indiqué clairement avec les alternatives disponibles." },
]);

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Formations", path: "/formations" },
  { name: "Formation IA Communication B2B", path: "/formation-communication-et-ia" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[course, faq, breadcrumb]} />
      <PageClient />
    </>
  );
}
