'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { casesData } from '../../data/cases';
import { RevealHeader } from './RevealHeader';

const Tag = ({ children }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '999px',
    fontSize: '12px', fontWeight: 600, backgroundColor: '#1F3A33', color: '#F6F3EC', border: 'none',
  }}>
    {children}
  </span>
);

// Client cases band shared by the home and landing pages: sand band, white cards, KPI in serif
export default function CasesShowcase({ images = {}, labels = {}, ids = ['crm-industrie', 'pipeline-b2b', 'formation-vente'] }) {
  return (
    <>
    <section className="section-padding" style={{ backgroundColor: '#EFEAE0', borderTop: '1px solid #D8D1C2', borderBottom: '1px solid #D8D1C2', paddingTop: '7rem', paddingBottom: '7rem', marginTop: '3rem' }}>
      <div className="container fade-in">
        <RevealHeader center wrapStyle={{ marginBottom: '5rem' }} kickerText="CAS CLIENTS" title="Résultats concrets" titleStyle={{ marginBottom: '1.5rem' }}
          text={"Actions réelles, impacts mesurables"} textStyle={{ fontSize: '1.2rem', maxWidth: '700px' }} />

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {casesData.filter(c => ids.includes(c.id)).map((c, idx) => {
            const img = images[c.id];
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.18 }}
                style={{ height: '100%' }}
              >
                <Link href={`/cas-clients/${c.id}`} className="case-card" style={{
                  background: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '16px', height: '100%',
                  display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none', transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}>
                  <div style={{ height: '190px', overflow: 'hidden', borderBottom: '1px solid #D8D1C2', flexShrink: 0 }}>
                    {img && (<img src={img} alt="" className="case-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.6s ease' }} />)}
                  </div>
                  <div style={{ padding: '1.75rem 2rem 2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div><Tag>{labels[c.id] || c.tags[0]}</Tag></div>
                    <div style={{ marginTop: '1rem', fontSize: '1rem', fontWeight: 500, color: '#4A534F', minHeight: '3em', lineHeight: 1.5 }}>{c.shortTitle}</div>
                    {(() => { const k = {
                  'crm-industrie': { big: '+32 rendez-vous qualifiés', small: "avec des directeurs d'exploitation en 5 mois" },
                  'formation-vente': { big: 'x3 ROI', small: 'via méthode vente B2B + outils IA' },
                }[c.id] || { big: '+39 opportunités', small: 'en 2 mois' }; return (
                      <div style={{ marginTop: '1rem', minHeight: '4.6rem' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 500, lineHeight: 1.15, color: '#1F3A33' }}>{k.big}</div>
                        <div style={{ fontSize: '13px', color: '#6B716C', marginTop: '6px' }}>{k.small}</div>
                      </div>
                    ); })()}
                    <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #EDE8DD', display: 'flex', alignItems: 'center', gap: '6px', color: '#8A6D3B', fontSize: '0.875rem', fontWeight: 600 }}>
                      Voir l'étude complète <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/cas-clients" style={{
            display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: '#8A6D3B', fontWeight: 600,
            padding: '1rem 2.5rem', borderRadius: '8px', border: '1px solid #8A6D3B', textDecoration: 'none', transition: 'all 0.3s ease'
          }} className="cases-all-link">
            Voir tous les cas <ArrowRight size={18} style={{ marginLeft: '0.75rem' }} />
          </Link>
        </div>
      </div>
    </section>
      <style>{`
        .case-card:hover { border-color: #B08D57 !important; transform: translateY(-4px); }
        .case-card:hover .case-card-img { transform: scale(1.04); }
        .cases-all-link:hover { background-color: #1F3A33 !important; border-color: #1F3A33 !important; color: #F6F3EC !important; }
      `}</style>
    </>
  );
}
