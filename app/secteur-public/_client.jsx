'use client';
import dynamic from 'next/dynamic';
const SecteurPublic = dynamic(() => import('@/src/views/SecteurPublic'));
export default function PageClient() {
  return <SecteurPublic />;
}
