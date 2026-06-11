'use client';
import dynamic from 'next/dynamic';
const AutomatisationIA = dynamic(() => import('@/src/views/AutomatisationIA'));
export default function PageClient() {
  return <AutomatisationIA />;
}
