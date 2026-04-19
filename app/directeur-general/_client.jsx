'use client';
import dynamic from 'next/dynamic';
const LandingDG = dynamic(() => import('@/src/views/LandingDG'), { ssr: false });
export default function PageClient() {
  return <LandingDG />;
}
