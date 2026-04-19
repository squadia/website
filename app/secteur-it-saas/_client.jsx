'use client';
import dynamic from 'next/dynamic';
const SecteurITSaaS = dynamic(() => import('@/src/views/SecteurITSaaS'), { ssr: false });
export default function PageClient() {
  return <SecteurITSaaS />;
}
