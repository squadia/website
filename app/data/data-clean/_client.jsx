'use client';
import dynamic from 'next/dynamic';
const DataClean = dynamic(() => import('@/src/views/DataClean'), { ssr: false });
export default function PageClient() {
  return <DataClean />;
}
