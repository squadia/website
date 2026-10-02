import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import JsonLd from '@/src/components/ui/JsonLd';
import { serviceSchema, breadcrumbSchema, faqPageSchema } from '@/src/lib/schemas';
import { agentVocalFaqs } from '@/src/data/agentVocalFaqs';

export const metadata = buildMetadata({
  title: "Agent vocal IA pour site B2B : visite guidée et RDV — Squadia",
  description: "Squadia installe sur votre site un agent vocal IA qui accueille vos visiteurs 24 h/24, les guide et réserve vos rendez-vous.",
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
      <JsonLd data={[service, breadcrumb, faqPageSchema(agentVocalFaqs)]} />
      <PageClient />
    </>
  );
}
