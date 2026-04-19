'use client';
import dynamic from 'next/dynamic';
const FormationCommerciale = dynamic(() => import('@/src/views/FormationCommerciale'), { ssr: false });
export default function PageClient() {
  return <FormationCommerciale />;
}
