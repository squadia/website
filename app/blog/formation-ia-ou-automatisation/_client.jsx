'use client';
import dynamic from 'next/dynamic';
const FormationOuAutomatisation = dynamic(() => import('@/src/views/FormationOuAutomatisation'), { ssr: false });
export default function PageClient() {
  return <FormationOuAutomatisation />;
}
