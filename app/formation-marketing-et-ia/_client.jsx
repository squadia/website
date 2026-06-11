'use client';
import dynamic from 'next/dynamic';
const FormationMarketingIA = dynamic(() => import('@/src/views/FormationMarketingIA'));
export default function PageClient() {
  return <FormationMarketingIA />;
}
