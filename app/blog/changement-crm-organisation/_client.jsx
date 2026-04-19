'use client';
import dynamic from 'next/dynamic';
const BlogChangementCRM = dynamic(() => import('@/src/views/BlogChangementCRM'), { ssr: false });
export default function PageClient() {
  return <BlogChangementCRM />;
}
