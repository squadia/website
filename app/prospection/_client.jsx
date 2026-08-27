'use client';
import dynamic from 'next/dynamic';
const Prospection = dynamic(() => import('@/src/views/Prospection'));
export default function PageClient() {
  return <Prospection />;
}
