import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "À propos de Squadia — Conseil B2B IA et performance commerciale",
  description: "Squadia accompagne les PME et ETI B2B sur la data, la prospection multicanale et la formation IA. Découvrez notre approche.",
  path: "/a-propos",
});

export default function Page() {
  return <PageClient />;
}
