import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { blogPosting, breadcrumb } from '@/src/lib/seo';

const headline = "Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit";
const description = "Nettoyage, segmentation et enrichissement des données B2B : la méthode pour préparer une campagne commerciale qui convertit.";

export const metadata = { title: `${headline} — Squadia`, description };

export default function Page() {
  return (
    <>
      <JsonLd data={blogPosting({ slug: "nettoyage-segmentation-enrichissement-donnees-b2b", headline, description, datePublished: "2026-04-16", image: "/assets/images/blog/cleaningdata.jpeg" })} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/ressources" },
        { name: headline, path: "/blog/nettoyage-segmentation-enrichissement-donnees-b2b" },
      ])} />
      <PageClient />
    </>
  );
}
