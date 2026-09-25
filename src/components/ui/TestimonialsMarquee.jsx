'use client';
import React, { useEffect, useRef, useState } from 'react';
import { fetchApprovedTestimonials } from '@/src/lib/testimonials';
import { useSkipCuts } from '@/src/lib/videoCuts';

const DEMO_ITEMS = ['A', 'B', 'C', 'D'].map((label) => ({ id: `demo-${label}`, demo: true, label }));

function MarqueeVideo({ item }) {
  const videoRef = useRef(null);
  useSkipCuts(videoRef, item.cuts);
  return (
    <video
      ref={videoRef}
      src={item.url}
      className="testimonials-marquee-video"
      muted
      loop
      autoPlay
      playsInline
    />
  );
}

export default function TestimonialsMarquee({ page }) {
  const [testimonials, setTestimonials] = useState([]);
  const [isDemo, setIsDemo] = useState(false);

  useEffect(() => {
    const demo = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('demo') === '1';
    setIsDemo(demo);
    if (demo) return;

    let cancelled = false;
    fetchApprovedTestimonials(page).then((rows) => {
      if (!cancelled) setTestimonials(rows);
    });
    return () => {
      cancelled = true;
    };
  }, [page]);

  const items = isDemo ? DEMO_ITEMS : testimonials;

  if (items.length === 0) return null;

  const looped = [...items, ...items];

  return (
    <section className="section-padding" style={{ background: '#050510' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
            Ce qu'ils en disent
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            Des retours vidéo de personnes formées par Squadia
          </p>
        </div>

        <div
          style={{
            maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
            overflow: 'hidden',
          }}
        >
          <div className="testimonials-marquee-row">
            {looped.map((item, idx) =>
              item.demo ? (
                <div key={`${item.id}-${idx}`} className="testimonials-marquee-card">
                  <div className="testimonials-marquee-video testimonials-marquee-demo">{item.label}</div>
                </div>
              ) : (
                <div key={`${item.id}-${idx}`} className="testimonials-marquee-card">
                  <MarqueeVideo item={item} />
                  {item.label && <p className="testimonials-marquee-caption">{item.label}</p>}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-marquee-row {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: testimonialsScroll 40s linear infinite;
        }
        .testimonials-marquee-card {
          flex-shrink: 0;
        }
        .testimonials-marquee-video {
          width: 220px;
          height: 340px;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid #1A1A3A;
          background: #0D0D25;
          display: block;
        }
        .testimonials-marquee-caption {
          margin-top: 0.6rem;
          text-align: center;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.6);
        }
        .testimonials-marquee-demo {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          font-weight: 800;
          color: #44CCFF;
          background: linear-gradient(160deg, #0D0D25 0%, #14143a 100%);
        }
        @keyframes testimonialsScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .testimonials-marquee-video {
            width: 150px;
            height: 230px;
          }
        }
      `}</style>
    </section>
  );
}
