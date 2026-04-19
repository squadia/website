'use client';
import dynamic from 'next/dynamic';
const CasPipelineB2B = dynamic(() => import('@/src/views/CasPipelineB2B'), { ssr: false });
export default function PageClient() {
  return <CasPipelineB2B />;
}
