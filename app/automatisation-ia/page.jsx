import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Automatisation IA B2B — CRM, vente et marketing — Squadia",
  description: "Squadia automatise vos processus commerciaux et marketing avec l'IA. Workflows documentés, mesurables, maintenables par vos équipes. Pour PME et ETI en France.",
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatisation IA B2B",
  "serviceType": "Automatisation des processus avec l'IA",
  "description": "Automatisation des processus commerciaux et marketing avec l'IA : workflows documentés, mesurables et maintenables par vos équipes.",
  "provider": ORGANIZATION_REF,
  "areaServed": { "@type": "Country", "name": "France" },
  "audience": { "@type": "BusinessAudience", "name": "PME et ETI B2B" },
  "url": "https://squadia.io/automatisation-ia",
};

export default function Page() {
  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Automatisation IA", path: "/automatisation-ia" },
      ])} />
      <PageClient />
    </>
  );
}
