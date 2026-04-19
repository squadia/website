'use client';
import dynamic from 'next/dynamic';
const DataSeg = dynamic(() => import('@/src/views/DataSeg'), { ssr: false });
export default function PageClient() {
  return <DataSeg />;
}
