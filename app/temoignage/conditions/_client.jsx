'use client';
import dynamic from 'next/dynamic';
const TemoignageConditions = dynamic(() => import('@/src/views/TemoignageConditions'), { ssr: false });
export default function PageClient() {
  return <TemoignageConditions />;
}
