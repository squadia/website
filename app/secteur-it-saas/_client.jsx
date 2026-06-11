'use client';
import dynamic from 'next/dynamic';
const SecteurITSaaS = dynamic(() => import('@/src/views/SecteurITSaaS'));
export default function PageClient() {
  return <SecteurITSaaS />;
}
