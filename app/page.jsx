import PageClient from './_client';
import JsonLd from '@/src/components/ui/JsonLd';
import { websiteSchema } from '@/src/lib/schemas';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Squadia — Data, prospection multicanale et formation IA B2B",
  description: "Squadia accompagne les PME et ETI B2B : data ciblée, campagnes de prospection multicanale et formations IA pour équipes commerciales, marketing et communication. Basé à Paris.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <PageClient />
    </>
  );
}
