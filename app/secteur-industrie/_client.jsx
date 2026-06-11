'use client';
import dynamic from 'next/dynamic';
const SecteurIndustrie = dynamic(() => import('@/src/views/SecteurIndustrie'));
export default function PageClient() {
  return <SecteurIndustrie />;
}
