'use client';
import dynamic from 'next/dynamic';
const ConditionsParticipation = dynamic(() => import('@/src/views/ConditionsParticipation'), { ssr: false });
export default function PageClient() {
  return <ConditionsParticipation />;
}
