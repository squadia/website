'use client';
import dynamic from 'next/dynamic';
const Ressources = dynamic(() => import('@/src/views/Ressources'), { ssr: false });
export default function PageClient() {
  return <Ressources />;
}
