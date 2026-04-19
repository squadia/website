'use client';
import dynamic from 'next/dynamic';
const Data = dynamic(() => import('@/src/views/Data'), { ssr: false });
export default function PageClient() {
  return <Data />;
}
