'use client';
import dynamic from 'next/dynamic';
const TemoignageEnregistrer = dynamic(() => import('@/src/views/TemoignageEnregistrer'), { ssr: false });
export default function PageClient() {
  return <TemoignageEnregistrer />;
}
