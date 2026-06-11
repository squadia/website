'use client';
import dynamic from 'next/dynamic';
const DataB2B = dynamic(() => import('@/src/views/DataB2B'));
export default function PageClient() {
  return <DataB2B />;
}
