import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { ORGANIZATION_REF, breadcrumb } from '@/src/lib/seo';

export const metadata = {
  title: "Formation Communication et IA — Squadia",
  description: "Formation Squadia à l'IA au service de la communication et du contenu B2B. Pour PME et ETI en France.",
};

const course = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Formation Communication et IA",
  "description": "IA au service de la communication et de la production de contenus B2B.",
  "provider": ORGANIZATION_REF,
  "inLanguage": "fr-FR",
  "url": "https://squadia.io/formation-communication-et-ia",
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
        { name: "Communication et IA", path: "/formation-communication-et-ia" },
      ])} />
      <PageClient />
    </>
  );
}
