'use client';
import dynamic from 'next/dynamic';
const StrategieCrm = dynamic(() => import('@/src/views/StrategieCrm'));
export default function PageClient() {
  return <StrategieCrm />;
}
