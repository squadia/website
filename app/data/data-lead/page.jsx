import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Data Lead — Enrichissement et signaux d'achat B2B — Squadia",
  description: "Squadia enrichit vos données B2B et détecte les signaux d'achat pour alimenter votre prospection. Pour PME et ETI en France.",
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Lead — Enrichissement et signaux d'achat",
  "serviceType": "Enrichissement de données B2B",
  "description": "Enrichissement des données B2B et détection des signaux d'achat pour alimenter la prospection commerciale.",
  "provider": ORGANIZATION_REF,
  "areaServed": { "@type": "Country", "name": "France" },
  "audience": { "@type": "BusinessAudience", "name": "PME et ETI B2B" },
  "url": "https://squadia.io/data/data-lead",
};

export default function Page() {
  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Data B2B", path: "/data" },
        { name: "Data Lead", path: "/data/data-lead" },
      ])} />
      <PageClient />
    </>
  );
}
