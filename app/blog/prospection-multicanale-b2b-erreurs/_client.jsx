'use client';
import dynamic from 'next/dynamic';
const BlogProspectionErreurs = dynamic(() => import('@/src/views/BlogProspectionErreurs'));
export default function PageClient() {
  return <BlogProspectionErreurs />;
}
