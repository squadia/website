'use client';
import dynamic from 'next/dynamic';
// Ancienne adresse de l'admin : même espace, ouvert sur l'onglet Témoignages
const AdminHub = dynamic(() => import('@/src/views/AdminHub'), { ssr: false });
export default function PageClient() {
  return <AdminHub initialTab="temoignages" />;
}
