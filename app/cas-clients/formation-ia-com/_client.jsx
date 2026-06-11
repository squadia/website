'use client';
import dynamic from 'next/dynamic';
const CasFormationIACom = dynamic(() => import('@/src/views/CasFormationIACom'));
export default function PageClient() {
  return <CasFormationIACom />;
}
