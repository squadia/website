'use client';
import dynamic from 'next/dynamic';
const SimulateurROI = dynamic(() => import('@/src/views/SimulateurROI'));
export default function PageClient() {
  return <SimulateurROI />;
}
