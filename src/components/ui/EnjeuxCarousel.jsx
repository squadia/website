'use client';
import React, { useState, useEffect } from 'react';

const ENJEUX_TAB_DURATION = 6000;

const EnjeuxCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const id = setInterval(() => {
      const pct = Math.min(((Date.now() - start) / ENJEUX_TAB_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }
    }, 30);
    return () => clearInterval(id);
  }, [activeIndex, items.length]);

  const active = items[activeIndex];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <style>{`
        .enjeux-panel { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        @media (max-width: 768px) {
          .enjeux-panel { grid-template-columns: 1fr; gap: 2rem; }
          .enjeux-image { order: -1; }
        }
      `}</style>
      <div
        role="tablist"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2.5rem',
          borderBottom: '1px solid #D8D1C2',
        }}
      >
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={activeIndex === i}
            onClick={() => setActiveIndex(i)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0 1.1rem 0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: activeIndex === i ? '#1C2B27' : 'rgba(28,43,39,0.6)',
              fontWeight: 600,
              fontSize: '0.92rem',
              position: 'relative',
              transition: 'color 0.25s ease',
            }}
          >
            <span style={{ width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: activeIndex === i ? 1 : 0.6 }}>
              {React.cloneElement(item.icon, { size: 16 })}
            </span>
            {item.short}
            <span style={{
              position: 'absolute',
              left: 0, right: 0, bottom: -1,
              height: '2px',
              background: 'transparent',
              overflow: 'hidden',
              borderRadius: '2px',
            }}>
              <span style={{
                display: 'block',
                height: '100%',
                width: activeIndex === i ? `${progress}%` : '0%',
                background: '#8A6D3B',
                transition: activeIndex === i ? 'width 0.05s linear' : 'none',
              }} />
            </span>
          </button>
        ))}
      </div>

      <div
        className="enjeux-panel"
        style={{
          background: '#FFFFFF',
          border: '1px solid #D8D1C2',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 4px 24px rgba(28,43,39,0.105)',
          minHeight: '360px',
        }}
      >
        <div>
          <div style={{ marginBottom: '1.5rem', width: '44px', height: '44px', background: '#F6F3EC', border: '1px solid #D8D1C2', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {active.icon}
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.4, color: '#1C2B27' }}>{active.title}</h3>
          <p style={{ color: 'rgba(28,43,39,0.78)', lineHeight: 1.7, fontSize: '1rem', margin: 0 }}>{active.desc}</p>
        </div>
        <div className="enjeux-image" style={{
          position: 'relative',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(176,141,87,0.18)',
          boxShadow: '0 12px 40px rgba(28,43,39,0.14)',
          aspectRatio: '4 / 3',
        }}>
          <img src={active.image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default EnjeuxCarousel;
