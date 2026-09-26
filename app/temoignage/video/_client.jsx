'use client';
import dynamic from 'next/dynamic';
const TemoignageVideo = dynamic(() => import('@/src/views/TemoignageVideo'), { ssr: false });
export default function PageClient() {
  return <TemoignageVideo />;
}
