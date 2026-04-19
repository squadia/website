'use client';
import dynamic from 'next/dynamic';
const Home = dynamic(() => import('@/src/views/Home'), { ssr: false });
export default function PageClient() {
  return <Home />;
}
