'use client';
import dynamic from 'next/dynamic';
const BlogStrategieIAPME = dynamic(() => import('@/src/views/BlogStrategieIAPME'), { ssr: false });
export default function PageClient() {
  return <BlogStrategieIAPME />;
}
