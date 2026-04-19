'use client';
import dynamic from 'next/dynamic';
const CasClients = dynamic(() => import('@/src/views/CasClients'), { ssr: false });
export default function PageClient() {
  return <CasClients />;
}
