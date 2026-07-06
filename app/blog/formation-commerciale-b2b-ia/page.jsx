import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { blogPosting, breadcrumb } from '@/src/lib/seo';

const headline = "Formation commerciale B2B : devenir plus autonome et performant avec l'IA";
const description = "Comment une formation commerciale B2B rend les équipes plus autonomes et performantes grâce à l'IA en prospection et en vente.";

export const metadata = { title: `${headline} — Squadia`, description };

export default function Page() {
  return (
    <>
      <JsonLd data={blogPosting({ slug: "formation-commerciale-b2b-ia", headline, description, datePublished: "2026-04-16", image: "/assets/images/blog/formationcommercialeB2B.jpeg" })} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/ressources" },
        { name: headline, path: "/blog/formation-commerciale-b2b-ia" },
      ])} />
      <PageClient />
    </>
  );
}
