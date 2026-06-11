'use client';
import dynamic from 'next/dynamic';
const CasFormationVente = dynamic(() => import('@/src/views/CasFormationVente'));
export default function PageClient() {
  return <CasFormationVente />;
}
