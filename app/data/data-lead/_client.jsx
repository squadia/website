'use client';
import dynamic from 'next/dynamic';
const DataLead = dynamic(() => import('@/src/views/DataLead'), { ssr: false });
export default function PageClient() {
  return <DataLead />;
}
