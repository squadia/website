'use client';
import dynamic from 'next/dynamic';
const StrategieCommerciale = dynamic(() => import('@/src/views/StrategieCommerciale'));
export default function PageClient() {
  return <StrategieCommerciale />;
}
