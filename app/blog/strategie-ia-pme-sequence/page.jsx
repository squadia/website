import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { blogPosting, breadcrumb } from '@/src/lib/seo';

const headline = "Comment mettre en place une stratégie IA en PME et ETI : séquence, outils et premiers résultats";
const description = "La séquence pour déployer une stratégie IA en PME et ETI : par où commencer, quels outils et quels premiers résultats attendre.";

export const metadata = { title: `${headline} — Squadia`, description };

export default function Page() {
  return (
    <>
      <JsonLd data={blogPosting({ slug: "strategie-ia-pme-sequence", headline, description, datePublished: "2026-04-16" })} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/ressources" },
        { name: headline, path: "/blog/strategie-ia-pme-sequence" },
      ])} />
      <PageClient />
    </>
  );
}
