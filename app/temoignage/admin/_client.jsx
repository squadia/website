'use client';
import dynamic from 'next/dynamic';
const TemoignageAdmin = dynamic(() => import('@/src/views/TemoignageAdmin'), { ssr: false });
export default function PageClient() {
  return <TemoignageAdmin />;
}
