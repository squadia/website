'use client';
import dynamic from 'next/dynamic';
const CasFormationIACom = dynamic(() => import('@/src/views/CasFormationIACom'), { ssr: false });
export default function PageClient() {
  return <CasFormationIACom />;
}
