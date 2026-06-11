'use client';
import dynamic from 'next/dynamic';
const About = dynamic(() => import('@/src/views/About'));
export default function PageClient() {
  return <About />;
}
