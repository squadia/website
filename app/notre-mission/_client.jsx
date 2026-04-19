'use client';
import dynamic from 'next/dynamic';
const Mission = dynamic(() => import('@/src/views/Mission'), { ssr: false });
export default function PageClient() {
  return <Mission />;
}
