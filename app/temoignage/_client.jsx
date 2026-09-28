'use client';
import dynamic from 'next/dynamic';
const TemoignageIntro = dynamic(() => import('@/src/views/TemoignageIntro'), { ssr: false });
export default function PageClient() {
  return <TemoignageIntro />;
}
