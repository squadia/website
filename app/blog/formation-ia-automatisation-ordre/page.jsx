import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { blogPosting, breadcrumb } from '@/src/lib/seo';

const headline = "Formation IA ou automatisation des process : dans quel ordre transformer son entreprise ?";
const description = "Faut-il d'abord former à l'IA ou automatiser ses processus ? L'ordre à suivre pour transformer une entreprise B2B sans se tromper.";

export const metadata = { title: `${headline} — Squadia`, description };

export default function Page() {
  return (
    <>
      <JsonLd data={blogPosting({ slug: "formation-ia-automatisation-ordre", headline, description, datePublished: "2026-04-16" })} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/ressources" },
        { name: headline, path: "/blog/formation-ia-automatisation-ordre" },
      ])} />
      <PageClient />
    </>
  );
}
