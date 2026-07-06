import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Data Seg — Segmentation des comptes et contacts B2B — Squadia",
  description: "Squadia segmente vos comptes et contacts B2B pour cibler les bons interlocuteurs et prioriser vos efforts commerciaux. Pour PME et ETI en France.",
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Seg — Segmentation B2B",
  "serviceType": "Segmentation de données B2B",
  "description": "Segmentation des comptes et contacts B2B pour cibler les bons interlocuteurs et prioriser les efforts commerciaux.",
  "provider": ORGANIZATION_REF,
  "areaServed": { "@type": "Country", "name": "France" },
  "audience": { "@type": "BusinessAudience", "name": "PME et ETI B2B" },
  "url": "https://squadia.io/data/data-seg",
};

export default function Page() {
  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Data B2B", path: "/data" },
        { name: "Data Seg", path: "/data/data-seg" },
      ])} />
      <PageClient />
    </>
  );
}
