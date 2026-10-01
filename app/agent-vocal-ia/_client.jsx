'use client';
import dynamic from 'next/dynamic';
const AgentVocalIA = dynamic(() => import('@/src/views/AgentVocalIA'));
export default function PageClient() {
  return <AgentVocalIA />;
}
