import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Tarifs Squadia — Data, prospection multicanale et formation IA",
  description: "Découvrez les tarifs Squadia : data B2B, campagnes de prospection multicanale et formation IA. Périmètre ajusté avant engagement. Pour PME et ETI en France.",
  path: "/tarifs",
});

const services = [
  serviceSchema({ name: "Data Clean B2B", description: "Pour nettoyer et fiabiliser une base CRM existante.", path: "/tarifs" }),
  serviceSchema({ name: "Data Seg B2B", description: "Pour transformer votre base en outil de ciblage réel.", path: "/tarifs" }),
  serviceSchema({ name: "Data Lead B2B", description: "Pour construire une base de prospection B2B sur un marché cible.", path: "/tarifs" }),
  serviceSchema({ name: "Campagne multicanale B2B", description: "Pour lancer des campagnes email et LinkedIn.", path: "/prospection/campagne" }),
  serviceSchema({ name: "Appels sortants B2B", description: "Pour qualifier et prendre des rendez-vous par téléphone.", path: "/prospection/campagne" }),
  serviceSchema({ name: "Mission hybride Squadia", description: "Pour combiner campagne multicanale et prospection téléphonique.", path: "/prospection/campagne" }),
  serviceSchema({ name: "Formation inter-entreprises IA", description: "Pour apprendre dans un cadre multi-secteurs, avec d'autres équipes.", path: "/formations" }),
  serviceSchema({ name: "Formation intra-entreprise IA", description: "Pour former votre équipe sur vos cas, vos outils, votre contexte.", path: "/formations" }),
  serviceSchema({ name: "Formation sur mesure IA", description: "Pour construire un programme progressif avec suivi renforcé.", path: "/formations" }),
];

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Tarifs", path: "/tarifs" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[...services, breadcrumb]} />
      <PageClient />
    </>
  );
}
