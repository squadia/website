'use client';
import dynamic from 'next/dynamic';
const Tarifs = dynamic(() => import('@/src/views/Tarifs'), { ssr: false });
export default function PageClient() {
  return <Tarifs />;
}
