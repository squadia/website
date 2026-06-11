'use client';
import dynamic from 'next/dynamic';
const Contact = dynamic(() => import('@/src/views/Contact'));
export default function PageClient() {
  return <Contact />;
}
