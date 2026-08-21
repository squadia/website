import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Formations IA pour équipes commerciales et marketing — Squadia",
  description: "Formations pratiques à l'IA pour les équipes vente, marketing et communication. Ateliers, cas réels et plan d'action.",
  path: "/formations",
});

const courses = [
  courseSchema({ name: "Formation IA Ventes B2B", description: "Formez vos commerciaux à l'IA : prospection augmentée, qualification, closing et outils adaptés au cycle de vente B2B.", path: "/formation-ventes-et-ia" }),
  courseSchema({ name: "Formation IA Marketing B2B", description: "Formez vos équipes marketing à l'IA : création de contenus, campagnes multicanal, scoring et analyse de performance.", path: "/formation-marketing-et-ia" }),
  courseSchema({ name: "Formation IA Communication B2B", description: "Formez vos équipes communication à l'IA : charte d'usage, rédaction augmentée, outils et gouvernance.", path: "/formation-communication-et-ia" }),
];

const faq = faqPageSchema([
  { question: "Faut-il avoir des outils IA déjà en place pour suivre une formation ?", answer: "Non. Les formations peuvent démarrer dès lors que les participants ont accès à un outil'IA basique (ChatGPT, Copilot, Gemini). On part de ce que vous avez." },
  { question: "Combien de personnes par session ?", answer: "On privilégie les petits groupes pour garantir plus d'interactivité et une meilleure assimilation des concepts. En intra, on travaille avec des groupes de 6 à 10 personnes en moyenne." },
  { question: "Peut-on former des équipes mélangées (vente + marketing) ?", answer: "Oui. Les formations intra peuvent couvrir plusieurs métiers dans une même session. Le programme est adapté en conséquence." },
  { question: "Est-ce qu'on peut former uniquement sur un outil spécifique ?", answer: "On peut intégrer un outil spécifique dans le programme, mais on ne forme jamais sur un outil seul. L'enjeu c'est toujours de comprendre comment l'outil s'intègre dans une méthode de travail, pas juste de savoir l'utiliser." },
  { question: "Quelle différence avec une formation IA généraliste ?", answer: "On ne forme pas sur l'IA en général. On forme sur l'IA appliquée au métier : comment prospecter mieux, comment préparer un rendez-vous différemment, comment produire du contenu plus vite sans perdre la qualité. L'objectif c'est que chaque participant reparte avec une vision élargie de ce que l'IA peut changer dans son quotidien, une méthode pour l'appliquer, et la posture pour continuer à progresser seul." },
]);

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Formations", path: "/formations" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[...courses, faq, breadcrumb]} />
      <PageClient />
    </>
  );
}
