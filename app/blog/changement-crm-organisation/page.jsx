import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { blogPosting, breadcrumb } from '@/src/lib/seo';

const headline = "Pourquoi les entreprises changent de CRM : et ce que ça révèle vraiment sur leur organisation";
const description = "Les vraies raisons pour lesquelles les entreprises changent de CRM, et ce que cette décision révèle sur leur organisation commerciale.";

export const metadata = { title: `${headline} — Squadia`, description };

export default function Page() {
  return (
    <>
      <JsonLd data={blogPosting({ slug: "changement-crm-organisation", headline, description, datePublished: "2026-04-16" })} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/ressources" },
        { name: headline, path: "/blog/changement-crm-organisation" },
      ])} />
      <PageClient />
    </>
  );
}
