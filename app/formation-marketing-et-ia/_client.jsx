'use client';
import dynamic from 'next/dynamic';
const FormationMarketingIA = dynamic(() => import('@/src/views/FormationMarketingIA'), { ssr: false });
export default function PageClient() {
  return <FormationMarketingIA />;
}
