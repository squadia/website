'use client';
import { cn } from '../../lib/utils';
import { ArrowRight, Code2, Copy, Rocket, Zap } from 'lucide-react';
import React, { useState } from 'react';

export default function CardFlip({
  title = 'Build MVPs Fast',
  subtitle = 'Launch your idea in record time',
  description = 'Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.',
  features = [
    'Copy & Paste Ready',
    'Developer-First',
    'MVP Optimized',
    'Zero Setup Required',
  ],
  color = '#2563EB'
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const primary = color ?? '#2563eb';

  return (
    <div
      style={{
        '--primary': primary,
        perspective: '2000px',
        position: 'relative',
        height: '360px',
        width: '100%',
        maxWidth: '300px',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Inner rotating container */}
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ——— FRONT ——— */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '1rem',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #18182a 0%, #14141f 60%, #111827 100%)',
            border: `1px solid rgba(255,255,255,0.07)`,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            transition: 'opacity 0.3s',
            opacity: isFlipped ? 0 : 1,
          }}
        >
          {/* Colored gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse at top left, ${primary}18 0%, transparent 60%)`,
            pointerEvents: 'none',
          }} />

          {/* Animated code blocks */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem' }}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', height: '100px', width: '200px' }}>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: '10px',
                    borderRadius: '4px',
                    background: `linear-gradient(90deg, ${primary}33, ${primary}66, ${primary}33)`,
                    width: `${60 + (i * 7) % 40}%`,
                    marginLeft: `${(i * 11) % 20}%`,
                    animationDelay: `${i * 0.2}s`,
                    animation: 'slideIn 2s ease-in-out infinite',
                    opacity: 0,
                  }}
                />
              ))}

              {/* Central Rocket icon */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  height: '48px', width: '48px', borderRadius: '12px',
                  background: `linear-gradient(135deg, ${primary}, ${primary}cc)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 8px 24px ${primary}44`,
                  animation: 'pulse 2s ease-in-out infinite',
                  transition: 'transform 0.5s',
                }}>
                  <Rocket style={{ height: '24px', width: '24px', color: 'white' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom title */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', margin: 0, fontWeight: 500 }}>
                  {subtitle}
                </p>
              </div>
              <Zap style={{ height: '20px', width: '20px', color: primary, flexShrink: 0 }} />
            </div>
          </div>
        </div>

        {/* ——— BACK ——— */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '1rem',
            padding: '1.25rem',
            background: 'linear-gradient(135deg, #18182a 0%, #14141f 60%, #111827 100%)',
            border: `1px solid ${primary}44`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${primary}22`,
            display: 'flex',
            flexDirection: 'column',
            transition: 'opacity 0.3s',
            opacity: isFlipped ? 1 : 0,
          }}
        >
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '1rem',
            background: `radial-gradient(ellipse at top left, ${primary}18 0%, transparent 60%)`,
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  height: '32px', width: '32px', borderRadius: '8px',
                  background: `linear-gradient(135deg, ${primary}, ${primary}aa)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Code2 style={{ height: '16px', width: '16px', color: '#fff' }} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', margin: 0 }}>
                  {title}
                </h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {description}
              </p>
            </div>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={feature}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)',
                      fontWeight: 500,
                      transform: isFlipped ? 'translateX(0)' : 'translateX(-10px)',
                      opacity: isFlipped ? 1 : 0,
                      transition: `transform 0.5s ease, opacity 0.5s ease`,
                      transitionDelay: `${index * 100 + 200}ms`,
                    }}
                  >
                    <div style={{
                      height: '20px', width: '20px', flexShrink: 0,
                      borderRadius: '6px',
                      background: `${primary}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <IconComponent style={{ height: '12px', width: '12px', color: primary }} />
                    </div>
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer CTA */}
          <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1rem' }}>
            <a
              href="#calendrier"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = `${primary}22`;
                e.currentTarget.style.borderColor = `${primary}66`;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>RDV avec un expert</span>
              <ArrowRight style={{ height: '16px', width: '16px', color: primary }} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          0%   { transform: translateX(-100px); opacity: 0; }
          50%  { transform: translateX(0);       opacity: 0.8; }
          100% { transform: translateX(100px);  opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
