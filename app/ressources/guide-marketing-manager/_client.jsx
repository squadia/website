'use client';
import dynamic from 'next/dynamic';
const GuideMarketingManager = dynamic(() => import('@/src/views/GuideMarketingManager'));
export default function PageClient() {
  return <GuideMarketingManager />;
}
