'use client';
import dynamic from 'next/dynamic';
const BlogFormationIAVAutom = dynamic(() => import('@/src/views/BlogFormationIAVAutom'), { ssr: false });
export default function PageClient() {
  return <BlogFormationIAVAutom />;
}
