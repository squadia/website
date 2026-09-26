'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { NOTION_RESOURCE_URL, AVATAR_VIDEO_BASE_URL } from '@/src/lib/testimonialsConfig';

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const TemoignageVideo = () => {
  const [videoId] = useState(() => {
    const v = new URLSearchParams(window.location.search).get('v') || '';
    return UUID_PATTERN.test(v) ? v : null;
  });
  const [failed, setFailed] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#050510', color: '#F9FAFB', padding: '110px 16px 80px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 800, marginBottom: '0.6rem' }}>
          Un petit message pour toi
        </h1>
        <p style={{ color: '#9CA3AF', marginBottom: '2rem' }}>Merci encore pour ton témoignage&nbsp;!</p>

        {videoId && !failed ? (
          <video
            src={`${AVATAR_VIDEO_BASE_URL}${videoId}.mp4`}
            poster={`${AVATAR_VIDEO_BASE_URL}${videoId}.jpg`}
            controls
            autoPlay
            playsInline
            onError={() => setFailed(true)}
            style={{ width: '100%', borderRadius: '16px', border: '1px solid #1A1A3A', background: '#000', display: 'block' }}
          />
        ) : (
          <p style={{ color: '#9CA3AF', padding: '3rem 0' }}>Cette vidéo n'est pas disponible.</p>
        )}

        <a
          href={NOTION_RESOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', padding: '0.9rem 1.6rem', borderRadius: '30px', background: '#44CCFF', color: '#050510', fontWeight: 700, textDecoration: 'none' }}
        >
          Accéder à ton bonus <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default TemoignageVideo;
