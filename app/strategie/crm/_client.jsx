'use client';
import dynamic from 'next/dynamic';
const StrategieCrm = dynamic(() => import('@/src/views/StrategieCrm'), { ssr: false });
export default function PageClient() {
  return <StrategieCrm />;
}
