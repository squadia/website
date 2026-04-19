'use client';
import dynamic from 'next/dynamic';
const SecteurIndustrie = dynamic(() => import('@/src/views/SecteurIndustrie'), { ssr: false });
export default function PageClient() {
  return <SecteurIndustrie />;
}
