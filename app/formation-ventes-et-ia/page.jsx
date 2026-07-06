import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Formation Vente B2B et IA — Squadia",
  description: "Formation Squadia pour rendre les équipes commerciales autonomes et performantes avec l'IA en prospection et en vente B2B. Pour PME et ETI en France.",
};

const course = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Formation Vente B2B et IA",
  "description": "Former les équipes commerciales à l'usage de l'IA en prospection et en vente B2B pour gagner en autonomie et en performance.",
  "provider": ORGANIZATION_REF,
  "inLanguage": "fr-FR",
  "url": "https://squadia.io/formation-ventes-et-ia",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": 1500,
    "availability": "https://schema.org/InStock",
    "category": "Formation professionnelle (tarifs HT)"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": ["onsite", "online"],
    "location": { "@type": "Country", "name": "France" }
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={course} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Formations", path: "/formations" },
        { name: "Vente B2B et IA", path: "/formation-ventes-et-ia" },
      ])} />
      <PageClient />
    </>
  );
}
