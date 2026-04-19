'use client';
import dynamic from 'next/dynamic';
const MentionsLegales = dynamic(() => import('@/src/views/MentionsLegales'), { ssr: false });
export default function PageClient() {
  return <MentionsLegales />;
}
