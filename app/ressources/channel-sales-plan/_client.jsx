'use client';
import dynamic from 'next/dynamic';
const ChannelSalesPlan = dynamic(() => import('@/src/views/ChannelSalesPlan'));
export default function PageClient() {
  return <ChannelSalesPlan />;
}
