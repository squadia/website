'use client';
import dynamic from 'next/dynamic';
const CasClients = dynamic(() => import('@/src/views/CasClients'));
export default function PageClient() {
  return <CasClients />;
}
