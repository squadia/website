import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Data Clean — Nettoyage des données CRM B2B — Squadia",
  description: "Squadia nettoie et fiabilise les données de votre CRM : dédoublonnage, normalisation et mise en qualité. Pour PME et ETI B2B en France.",
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Clean — Nettoyage des données CRM",
  "serviceType": "Nettoyage de données B2B",
  "description": "Nettoyage et fiabilisation des données du CRM : dédoublonnage, normalisation et mise en qualité des comptes et contacts.",
  "provider": ORGANIZATION_REF,
  "areaServed": { "@type": "Country", "name": "France" },
  "audience": { "@type": "BusinessAudience", "name": "PME et ETI B2B" },
  "url": "https://squadia.io/data/data-clean",
};

export default function Page() {
  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Data B2B", path: "/data" },
        { name: "Data Clean", path: "/data/data-clean" },
      ])} />
      <PageClient />
    </>
  );
}
