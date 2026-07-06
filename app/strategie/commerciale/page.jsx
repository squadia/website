import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Stratégie commerciale B2B — Squadia",
  description: "Squadia structure votre système de génération de revenus B2B : go-to-market, pilotage de la performance commerciale et exécution pour PME et ETI en France.",
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Stratégie commerciale B2B",
  "serviceType": "Conseil en stratégie commerciale",
  "description": "Structuration du système de génération de revenus B2B : go-to-market, organisation commerciale et pilotage de la performance pour PME et ETI.",
  "provider": ORGANIZATION_REF,
  "areaServed": { "@type": "Country", "name": "France" },
  "audience": { "@type": "BusinessAudience", "name": "PME et ETI B2B" },
  "url": "https://squadia.io/strategie/commerciale",
};

export default function Page() {
  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Stratégie commerciale", path: "/strategie/commerciale" },
      ])} />
      <PageClient />
    </>
  );
}
