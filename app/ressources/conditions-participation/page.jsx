import PageClient from './_client';
import { buildMetadata } from '@/src/lib/metadata';

export const metadata = buildMetadata({
  title: "Conditions de participation — Squadia",
  description: "Conditions de participation aux ateliers, formations et événements organisés par Squadia.",
  path: "/ressources/conditions-participation",
});

export default function Page() {
  return <PageClient />;
}
