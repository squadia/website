import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Formation IA Ventes B2B — Prospection, closing, efficacité — Squadia",
  description: "Formez vos commerciaux à l'IA : prospection augmentée, qualification, closing et outils adaptés au cycle de vente B2B.",
  path: "/formation-ventes-et-ia",
});

const course = courseSchema({
  name: "Formation IA Ventes B2B",
  description: "Formez vos commerciaux à l'IA : prospection augmentée, qualification, closing et outils adaptés au cycle de vente B2B.",
  path: "/formation-ventes-et-ia",
});

const faq = faqPageSchema([
  { question: "Cette formation convient-elle aux équipes avec des niveaux très différents ?", answer: "Oui, c'est précisément pour ça qu'elle a été conçue. Les modules sur la méthode et le plan de compte s'adressent à tous les niveaux. Les ateliers et jeux de rôles s'intensifient ou s'allègent selon le groupe. Les seniors ne sont jamais en terrain connu trop longtemps." },
  { question: "Faut-il avoir un compte client ou prospect réel pour participer ?", answer: "C'est fortement recommandé. Les ateliers pratiques sont conçus pour travailler sur des cas réels des participants : pas sur des exercices fictifs. Plus le compte est concret, plus le travail est actionnable." },
  { question: "Quel niveau d'expérience avec l'IA est requis ?", answer: "Aucun. Les modules IA sont construits pour des non-initiés. On part des outils accessibles : Claude, Canva : et on les applique directement aux situations commerciales du quotidien." },
  { question: "Peut-on suivre seulement l'un des deux jours ?", answer: "Les deux jours sont conçus en séquence logique : le Jour 1 prépare le terrain, le Jour 2 met en pratique. Suivre uniquement le Jour 2 sans le Jour 1 est possible mais déconseillé pour les équipes qui n'ont pas encore de méthode commune sur le plan de compte." },
  { question: "Quelle différence avec une formation commerciale classique ?", answer: "Les fondamentaux sont les mêmes : écoute, qualification, objections. Ce qui change : on intègre les outils IA directement dans la méthode, pas en option. Un commercial qui suit cette formation repart avec une façon de préparer ses RDV, de produire ses propositions et de relancer ses prospects qui est concrètement différente de ce qu'il faisait avant." },
]);

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Formations", path: "/formations" },
  { name: "Formation IA Ventes B2B", path: "/formation-ventes-et-ia" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[course, faq, breadcrumb]} />
      <PageClient />
    </>
  );
}
