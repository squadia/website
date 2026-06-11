'use client';
import dynamic from 'next/dynamic';
const DataSeg = dynamic(() => import('@/src/views/DataSeg'));
export default function PageClient() {
  return <DataSeg />;
}
