'use client';
import dynamic from 'next/dynamic';
const EnqueteIAB2B = dynamic(() => import('@/src/views/EnqueteIAB2B'));
export default function PageClient() {
  return <EnqueteIAB2B />;
}
