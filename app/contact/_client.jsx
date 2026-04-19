'use client';
import dynamic from 'next/dynamic';
const Contact = dynamic(() => import('@/src/views/Contact'), { ssr: false });
export default function PageClient() {
  return <Contact />;
}
