'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Maillage interne entre les pages d'offre : cartes cliquables dont le titre
// décrit la page de destination (ancre utile pour les visiteurs et les moteurs).
// items : [{ href, tag, title, desc }]
export default function RelatedLinks({ items, kicker = 'POUR ALLER PLUS LOIN', title = 'Ce qui va avec' }) {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F6F3EC', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A6D3B', marginBottom: '0.75rem' }}>{kicker}</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#1C2B27', lineHeight: 1.2, margin: 0 }}>{title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {items.map((item, idx) => {
            const content = (
              <>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A6D3B' }}>{item.tag}</span>
                <span style={{ display: 'block', fontSize: '1.05rem', fontWeight: 700, color: '#1C2B27', lineHeight: 1.35, margin: '0.55rem 0 0.5rem' }}>{item.title}</span>
                <span style={{ display: 'block', fontSize: '0.88rem', color: 'rgba(28,43,39,0.6)', lineHeight: 1.55 }}>{item.desc}</span>
                <span style={{ marginTop: 'auto', paddingTop: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#8A6D3B', fontSize: '0.85rem', fontWeight: 600 }}>
                  Découvrir <ArrowRight size={14} />
                </span>
              </>
            );
            const style = {
              background: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '16px', padding: '1.5rem 1.6rem', height: '100%',
              display: 'flex', flexDirection: 'column', textDecoration: 'none', boxSizing: 'border-box',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            };
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Les pages statiques (.html) sont hors de l'app Next : lien classique */}
                {item.href.endsWith('.html')
                  ? <a href={item.href} className="related-link-card" style={style}>{content}</a>
                  : <Link href={item.href} className="related-link-card" style={style}>{content}</Link>}
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`.related-link-card:hover { border-color: #B08D57 !important; transform: translateY(-4px); }`}</style>
    </section>
  );
}
