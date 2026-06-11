'use client';
import dynamic from 'next/dynamic';
const StrategieIAPME = dynamic(() => import('@/src/views/StrategieIAPME'));
export default function PageClient() {
  return <StrategieIAPME />;
}
