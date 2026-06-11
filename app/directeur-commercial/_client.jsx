'use client';
import dynamic from 'next/dynamic';
const LandingSales = dynamic(() => import('@/src/views/LandingSales'));
export default function PageClient() {
  return <LandingSales />;
}
