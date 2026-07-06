import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Data B2B — Nettoyage, segmentation et enrichissement — Squadia",
  description: "Squadia prépare vos données B2B : nettoyage du CRM, segmentation des comptes et enrichissement pour des campagnes qui convertissent. Pour PME et ETI en France.",
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data B2B",
  "serviceType": "Préparation et qualité des données B2B",
  "description": "Nettoyage, segmentation et enrichissement des données B2B pour fiabiliser le CRM et préparer des campagnes qui convertissent.",
  "provider": ORGANIZATION_REF,
  "areaServed": { "@type": "Country", "name": "France" },
  "audience": { "@type": "BusinessAudience", "name": "PME et ETI B2B" },
  "url": "https://squadia.io/data",
};

export default function Page() {
  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Data B2B", path: "/data" },
      ])} />
      <PageClient />
    </>
  );
}
