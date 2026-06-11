'use client';
import dynamic from 'next/dynamic';
const FormationCommunicationIA = dynamic(() => import('@/src/views/FormationCommunicationIA'));
export default function PageClient() {
  return <FormationCommunicationIA />;
}
