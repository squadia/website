'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Lock, ArrowLeft } from 'lucide-react';
import FlipbookViewer from '@/src/components/flipbook/FlipbookViewer';
import { getFlipbook } from '@/src/data/flipbooks';
import { verifyFlipbookToken } from '@/src/lib/flipbookAccess';

function DeniedPanel({ formPath }) {
  return (
    <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
      <Lock size={40} color="#EF4444" style={{ margin: '0 auto 1.2rem auto' }} />
      <h1 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#F9FAFB' }}>
        Accès non autorisé
      </h1>
      <p style={{ color: '#9CA3AF', marginBottom: '2rem', lineHeight: 1.6 }}>
        Ce lien est invalide, expiré, ou n'a pas été obtenu via le formulaire.
        Complétez le formulaire pour recevoir votre accès au document.
      </p>
      {formPath && (
        <a
          href={formPath}
          className="btn btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={16} /> Retour au formulaire
        </a>
      )}
    </div>
  );
}

function FlipbookGateInner({ slug }) {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const config = getFlipbook(slug);

  const [access, setAccess] = useState('checking'); // checking | granted | denied

  useEffect(() => {
    if (!config) return;
    let cancelled = false;
    verifyFlipbookToken(slug, token).then((result) => {
      if (!cancelled) setAccess(result.valid ? 'granted' : 'denied');
    });
    return () => { cancelled = true; };
  }, [slug, token, config]);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse 80% 60% at 50% 35%, #1B1B3D 0%, #0D0D25 45%, #03030A 100%)',
        paddingTop: '140px',
        paddingBottom: '80px',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {!config && <DeniedPanel formPath={null} />}
        {config && access === 'checking' && (
          <div style={{ textAlign: 'center', color: '#9CA3AF' }}>Vérification de l'accès…</div>
        )}
        {config && access === 'denied' && <DeniedPanel formPath={config.formPath} />}
        {config && access === 'granted' && (
          <FlipbookViewer
            pdfUrl={config.pdf}
            title={config.title}
            videoPage={config.video?.page}
            videoSrc={config.video?.src}
            videoRect={config.video?.rect}
            trackingId={slug}
          />
        )}
      </div>
    </div>
  );
}

export default function FlipbookGate({ slug }) {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#03030A' }} />}>
      <FlipbookGateInner slug={slug} />
    </Suspense>
  );
}
