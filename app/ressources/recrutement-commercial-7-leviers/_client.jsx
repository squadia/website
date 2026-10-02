'use client';
import dynamic from 'next/dynamic';
const RecrutementCommercial = dynamic(() => import('@/src/views/RecrutementCommercial'));
export default function PageClient() {
  return <RecrutementCommercial />;
}
