'use client';
import dynamic from 'next/dynamic';
const StrategieCommerciale = dynamic(() => import('@/src/views/StrategieCommerciale'), { ssr: false });
export default function PageClient() {
  return <StrategieCommerciale />;
}
