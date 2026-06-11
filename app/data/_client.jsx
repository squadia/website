'use client';
import dynamic from 'next/dynamic';
const Data = dynamic(() => import('@/src/views/Data'));
export default function PageClient() {
  return <Data />;
}
