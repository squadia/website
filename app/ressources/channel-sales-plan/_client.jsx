'use client';
import dynamic from 'next/dynamic';
const ChannelSalesPlan = dynamic(() => import('@/src/views/ChannelSalesPlan'), { ssr: false });
export default function PageClient() {
  return <ChannelSalesPlan />;
}
