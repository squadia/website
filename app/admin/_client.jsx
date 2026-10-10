'use client';
import dynamic from 'next/dynamic';
const AdminHub = dynamic(() => import('@/src/views/AdminHub'), { ssr: false });
export default function PageClient() {
  return <AdminHub />;
}
