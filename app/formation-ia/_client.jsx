'use client';
import dynamic from 'next/dynamic';
const Formation = dynamic(() => import('@/src/views/Formation'));
export default function PageClient() {
  return <Formation />;
}
