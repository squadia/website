'use client';
import dynamic from 'next/dynamic';
const CasMigrationCRM = dynamic(() => import('@/src/views/CasMigrationCRM'), { ssr: false });
export default function PageClient() {
  return <CasMigrationCRM />;
}
