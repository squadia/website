'use client';
import dynamic from 'next/dynamic';
const CasCRMIndustrie = dynamic(() => import('@/src/views/CasCRMIndustrie'), { ssr: false });
export default function PageClient() {
  return <CasCRMIndustrie />;
}
