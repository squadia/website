'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Play, ArrowRight, MessageCircleHeart } from 'lucide-react';

const VIDEO_SRC = '/assets/video/temoignage-intro.mp4';

const TemoignageIntro = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play().catch(() => {});
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsEnded(true);
  };

  const handleVideoError = () => {
    // Vidéo absente/introuvable : on ne bloque pas le visiteur derrière un lecteur cassé.
    setIsEnded(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#050510', color: '#F9FAFB', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-150px', left: '-150px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-150px', right: '-150px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(68, 204, 255, 0.25) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid #44CCFF', padding: '0.4rem 1rem', borderRadius: '30px', color: '#44CCFF', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem' }}>
          <MessageCircleHeart size={16} /> Un dernier mot
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1rem', fontWeight: 800 }}>
          Merci pour votre formation
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', marginBottom: '3rem' }}>
          Cliquez sur la vidéo pour récupérer vos ressources
        </p>

        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #1A1A3A',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
            background: '#0D0D25',
            aspectRatio: '16 / 9',
          }}
        >
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            playsInline
            onEnded={handleEnded}
            onError={handleVideoError}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          {!isPlaying && (
            <button
              onClick={handlePlay}
              aria-label="Lancer la vidéo"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(5, 5, 16, 0.35)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  background: '#44CCFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 40px rgba(68, 204, 255, 0.6)',
                }}
              >
                <Play size={32} color="#050510" fill="#050510" style={{ marginLeft: '4px' }} />
              </span>
            </button>
          )}
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            opacity: isEnded ? 1 : 0,
            transform: isEnded ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            pointerEvents: isEnded ? 'auto' : 'none',
          }}
        >
          <Link
            href="/temoignage/enregistrer/"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '1.1rem 2.6rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            Cliquez ici pour témoigner <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TemoignageIntro;
