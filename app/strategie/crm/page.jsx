import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Migration et structuration CRM B2B — Squadia",
  description: "Squadia migre, fiabilise et fait adopter votre CRM pour un pipeline B2B fiable. Accompagnement des PME et ETI en France.",
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Migration et structuration CRM",
  "serviceType": "Conseil et intégration CRM",
  "description": "Migration, fiabilisation et adoption du CRM pour un pipeline commercial B2B fiable et piloté.",
  "provider": ORGANIZATION_REF,
  "areaServed": { "@type": "Country", "name": "France" },
  "audience": { "@type": "BusinessAudience", "name": "PME et ETI B2B" },
  "url": "https://squadia.io/strategie/crm",
};

export default function Page() {
  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Migration CRM", path: "/strategie/crm" },
      ])} />
      <PageClient />
    </>
  );
}
