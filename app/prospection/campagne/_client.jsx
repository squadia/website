'use client';
import dynamic from 'next/dynamic';
const ProspectionCampagne = dynamic(() => import('@/src/views/ProspectionCampagne'));
export default function PageClient() {
  return <ProspectionCampagne />;
}
