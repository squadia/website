'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { articles } from '../../data/articles';

// "À lire aussi": photo thumbnail cards, same finish as the case cards
export default function RelatedArticles({ current, slugs }) {
  const list = slugs
    ? slugs.map((s) => articles.find((a) => a.slug === s)).filter(Boolean)
    : articles.filter((a) => a.slug !== current).slice(0, 3);
  return (
    <section data-no-frame style={{ marginTop: '5rem' }}>
      <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A6D3B', marginBottom: '0.75rem', textAlign: 'center' }}>Pour aller plus loin</p>
      <h2 style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: '#1C2B27', textAlign: 'center', marginBottom: '2.5rem' }}>À lire aussi</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {list.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="related-card" style={{
            background: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '16px', overflow: 'hidden',
            display: 'flex', flexDirection: 'column', textDecoration: 'none', transition: 'border-color 0.3s ease, transform 0.3s ease',
          }}>
            <div style={{ height: '150px', overflow: 'hidden', borderBottom: '1px solid #D8D1C2' }}>
              <img src={a.image} alt="" className="related-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }} />
            </div>
            <div style={{ padding: '1.4rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.9rem' }}>
                <span style={{ background: '#1F3A33', color: '#F6F3EC', padding: '3px 10px', borderRadius: '999px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{a.tag}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#6B716C' }}><Clock size={12} />{a.readTime}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.08rem', lineHeight: 1.35, color: '#1C2B27', margin: '0 0 1.2rem', flex: 1 }}>{a.title}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#8A6D3B', fontWeight: 600, fontSize: '0.85rem' }}>Lire l'article <ArrowRight size={14} /></span>
            </div>
          </Link>
        ))}
      </div>
      <style>{`
        .related-card:hover { border-color: #B08D57 !important; transform: translateY(-4px); }
        .related-card:hover .related-card-img { transform: scale(1.04); }
      `}</style>
    </section>
  );
}
