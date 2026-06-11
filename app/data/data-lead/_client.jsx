'use client';
import dynamic from 'next/dynamic';
const DataLead = dynamic(() => import('@/src/views/DataLead'));
export default function PageClient() {
  return <DataLead />;
}
