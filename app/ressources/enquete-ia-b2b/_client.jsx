'use client';
import dynamic from 'next/dynamic';
const EnqueteIAB2B = dynamic(() => import('@/src/views/EnqueteIAB2B'), { ssr: false });
export default function PageClient() {
  return <EnqueteIAB2B />;
}
