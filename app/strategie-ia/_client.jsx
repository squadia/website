'use client';
import dynamic from 'next/dynamic';
const StrategieIA = dynamic(() => import('@/src/views/StrategieIA'), { ssr: false });
export default function PageClient() {
  return <StrategieIA />;
}
