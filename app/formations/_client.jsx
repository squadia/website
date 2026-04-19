'use client';
import dynamic from 'next/dynamic';
const Formations = dynamic(() => import('@/src/views/Formations'), { ssr: false });
export default function PageClient() {
  return <Formations />;
}
