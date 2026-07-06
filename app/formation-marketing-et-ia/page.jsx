import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Formation Marketing et IA — Squadia",
  description: "Formation Squadia à l'IA appliquée au marketing B2B : génération et qualification de leads, campagnes et contenus. Pour PME et ETI en France.",
};

const course = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Formation Marketing et IA",
  "description": "IA appliquée au marketing B2B : génération et qualification de leads, campagnes et production de contenus.",
  "provider": ORGANIZATION_REF,
  "inLanguage": "fr-FR",
  "url": "https://squadia.io/formation-marketing-et-ia",
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
        { name: "Marketing et IA", path: "/formation-marketing-et-ia" },
      ])} />
      <PageClient />
    </>
  );
}
