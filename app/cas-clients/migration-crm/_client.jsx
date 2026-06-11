'use client';
import dynamic from 'next/dynamic';
const CasMigrationCRM = dynamic(() => import('@/src/views/CasMigrationCRM'));
export default function PageClient() {
  return <CasMigrationCRM />;
}
