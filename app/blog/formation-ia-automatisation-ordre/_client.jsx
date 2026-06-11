'use client';
import dynamic from 'next/dynamic';
const BlogFormationIAVAutom = dynamic(() => import('@/src/views/BlogFormationIAVAutom'));
export default function PageClient() {
  return <BlogFormationIAVAutom />;
}
