'use client';
import dynamic from 'next/dynamic';
const FlipbookGate = dynamic(() => import('@/src/views/FlipbookGate'));
export default function PageClient({ slug }) {
  return <FlipbookGate slug={slug} />;
}
