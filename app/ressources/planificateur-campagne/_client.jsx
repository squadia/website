'use client';
import dynamic from 'next/dynamic';
const PlanificateurCampagne = dynamic(() => import('@/src/views/PlanificateurCampagne'));
export default function PageClient() {
  return <PlanificateurCampagne />;
}
