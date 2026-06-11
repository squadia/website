'use client';
import dynamic from 'next/dynamic';
const LandingMarketing = dynamic(() => import('@/src/views/LandingMarketing'));
export default function PageClient() {
  return <LandingMarketing />;
}
