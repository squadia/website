'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// End-of-article call to action: team photo under a deep green veil, same look as the site's final CTA
export default function ArticleCta({ kicker = "Passez à l'action", title, text, href, label }) {
  return (
    <div data-no-frame style={{
      marginTop: '5rem', borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      minHeight: '460px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid #D8D1C2',
    }}>
      <img src="/assets/images/notremission/team-squadia.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(31,58,51,0.2) 0%, rgba(31,58,51,0.55) 45%, rgba(31,58,51,0.95) 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(28px, 5vw, 56px)' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#C9A66B', display: 'block', marginBottom: '16px' }}>{kicker}</span>
        <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)', color: '#F6F3EC', marginBottom: '1rem', lineHeight: 1.2 }}>{title}</h2>
        {text && <p style={{ color: 'rgba(246,243,236,0.85)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '560px', marginInline: 'auto', marginBottom: '2rem' }}>{text}</p>}
        <Link href={href} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#C9A66B', color: '#1C2B27',
          padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
        }}>
          {label} <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
