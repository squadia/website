import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';
import { FLIPBOOKS, getFlipbook } from '@/src/data/flipbooks';

export function generateStaticParams() {
  return Object.keys(FLIPBOOKS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = getFlipbook(slug);
  return buildMetadata({
    title: config ? `${config.title} — Squadia` : 'Document — Squadia',
    description: 'Accès réservé aux personnes ayant complété le formulaire.',
    path: `/ressources/flipbook/${slug}`,
    noindex: true,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <PageClient slug={slug} />;
}
