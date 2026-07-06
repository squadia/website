import PageClient from './_client';
import JsonLd from '@/src/components/seo/JsonLd';
import { blogPosting, breadcrumb } from '@/src/lib/seo';

const headline = "Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter";
const description = "Les 5 erreurs les plus fréquentes en prospection multicanale B2B qui font perdre des leads, et comment les corriger.";

export const metadata = { title: `${headline} — Squadia`, description };

export default function Page() {
  return (
    <>
      <JsonLd data={blogPosting({ slug: "prospection-multicanale-b2b-erreurs", headline, description, datePublished: "2026-04-16", image: "/assets/images/blog/blog4.jpeg" })} />
      <JsonLd data={breadcrumb([
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/ressources" },
        { name: headline, path: "/blog/prospection-multicanale-b2b-erreurs" },
      ])} />
      <PageClient />
    </>
  );
}
