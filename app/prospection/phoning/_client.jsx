'use client';
import dynamic from 'next/dynamic';
const ProspectionColdCall = dynamic(() => import('@/src/views/ProspectionColdCall'));
export default function PageClient() {
  return <ProspectionColdCall />;
}
