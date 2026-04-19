'use client';
import dynamic from 'next/dynamic';
const BlogProspectionErreurs = dynamic(() => import('@/src/views/BlogProspectionErreurs'), { ssr: false });
export default function PageClient() {
  return <BlogProspectionErreurs />;
}
