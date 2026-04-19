'use client';
import dynamic from 'next/dynamic';
const Formation = dynamic(() => import('@/src/views/Formation'), { ssr: false });
export default function PageClient() {
  return <Formation />;
}
