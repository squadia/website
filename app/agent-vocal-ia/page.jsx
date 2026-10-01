import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/src/lib/schemas';

export const metadata = buildMetadata({
  title: "Agent vocal IA pour site B2B : il parle, guide et prend rendez-vous — Squadia",
  description: "Un agent vocal IA qui accueille vos visiteurs 24 h/24, les guide de page en page, se renseigne en direct et réserve des rendez-vous dans votre agenda. Mise en place et suivi par Squadia.",
  path: "/agent-vocal-ia",
});

const service = serviceSchema({
  name: "Agent vocal IA pour site web",
  description: "Mise en place d'un agent vocal IA sur votre site : accueil des visiteurs, visite guidée, prise de rendez-vous et intégration à vos outils.",
  path: "/agent-vocal-ia",
});

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Agent vocal IA", path: "/agent-vocal-ia" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={[service, breadcrumb]} />
      <PageClient />
    </>
  );
}
