'use client';
import dynamic from 'next/dynamic';
const StrategieIA = dynamic(() => import('@/src/views/StrategieIA'));
export default function PageClient() {
  return <StrategieIA />;
}
