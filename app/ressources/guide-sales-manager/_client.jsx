'use client';
import dynamic from 'next/dynamic';
const GuideSalesManager = dynamic(() => import('@/src/views/GuideSalesManager'));
export default function PageClient() {
  return <GuideSalesManager />;
}
