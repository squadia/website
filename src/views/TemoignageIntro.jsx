'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Play, Pause, ArrowRight, MessageCircleHeart } from 'lucide-react';

const VIDEO_SRC = '/assets/video/temoignage-intro.mp4';
const TEASER_SECONDS = 20;

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

const TemoignageIntro = () => {
  const router = useRouter();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.loop = false;
    video.muted = false;
    video.currentTime = 0;
    video.play().catch(() => {});
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const handleEnded = () => {
    setIsEnded(true);
  };

  const handleVideoError = () => {
    // Vidéo absente/introuvable : on ne bloque pas le visiteur derrière un lecteur cassé.
    setIsEnded(true);
  };

  const remaining = Math.max(duration - currentTime, 0);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#050510', color: '#F9FAFB', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-150px', left: '-150px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-150px', right: '-150px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(68, 204, 255, 0.25) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid #44CCFF', padding: '0.4rem 1rem', borderRadius: '30px', color: '#44CCFF', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem' }}>
          <MessageCircleHeart size={16} /> Allons plus loin encore
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1rem', fontWeight: 800 }}>
          Un bonus gratuit suite à la formation
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', marginBottom: '3rem' }}>
          Cliquez sur la vidéo
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
            autoPlay
            muted
            onEnded={handleEnded}
            onError={handleVideoError}
            onPlay={() => setIsPaused(false)}
            onPause={() => setIsPaused(true)}
            onTimeUpdate={(e) => {
              const video = e.currentTarget;
              if (!isPlaying && video.currentTime >= TEASER_SECONDS) {
                video.currentTime = 0;
              }
              setCurrentTime(video.currentTime);
            }}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
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

        {isPlaying && !isEnded && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '1.25rem',
            }}
          >
            <button
              onClick={togglePlayPause}
              aria-label={isPaused ? 'Reprendre la lecture' : 'Mettre en pause'}
              style={{
                width: '48px',
                height: '48px',
                flexShrink: 0,
                borderRadius: '50%',
                background: 'rgba(68,204,255,0.15)',
                border: '2px solid #44CCFF',
                boxShadow: '0 0 12px rgba(68,204,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {isPaused ? (
                <Play size={20} color="#fff" fill="#fff" style={{ marginLeft: '3px' }} />
              ) : (
                <Pause size={20} color="#fff" fill="#fff" />
              )}
            </button>

            <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: '#44CCFF', transition: 'width 0.15s linear' }} />
            </div>

            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)', fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>
              -{formatTime(remaining)}
            </span>
          </div>
        )}

        <div
          style={{
            marginTop: '2.5rem',
            opacity: isEnded ? 1 : 0,
            transform: isEnded ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            pointerEvents: isEnded ? 'auto' : 'none',
          }}
        >
          <button
            onClick={() => accepted && router.push('/temoignage/enregistrer/')}
            disabled={!accepted}
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '1.1rem 2.6rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1.05rem',
              border: 'none',
              cursor: accepted ? 'pointer' : 'not-allowed',
              opacity: accepted ? 1 : 0.5,
            }}
          >
            Cliquez ici pour témoigner <ArrowRight size={18} />
          </button>

          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1.25rem',
              fontSize: '0.8rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              style={{ marginTop: '2px' }}
            />
            <span>
              J'accepte les conditions d'utilisation (
              <Link href="/temoignage/conditions/" style={{ color: '#44CCFF', textDecoration: 'underline' }}>
                voir le détail
              </Link>
              ).
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TemoignageIntro;
