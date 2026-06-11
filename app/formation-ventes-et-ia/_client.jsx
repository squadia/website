'use client';
import dynamic from 'next/dynamic';
const FormationVentesIA = dynamic(() => import('@/src/views/FormationVentesIA'));
export default function PageClient() {
  return <FormationVentesIA />;
}
