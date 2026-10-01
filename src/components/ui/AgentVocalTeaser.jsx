'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mic, Check } from 'lucide-react';

// Section de l'accueil qui présente l'offre agent vocal, avec Elisa comme démonstration
const points = [
  'Répond 24 h/24, 7 j/7, de vive voix',
  'Fait visiter votre site page par page',
  'Prend les rendez-vous dans votre agenda',
];

const openElisa = () => window.dispatchEvent(new CustomEvent('squadia:open-elisa'));

export default function AgentVocalTeaser() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F6F3EC', paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="agent-vocal-teaser"
          style={{
            background: 'radial-gradient(120% 120% at 85% 10%, #2B4C43 0%, #1F3A33 55%, #16302A 100%)',
            color: '#F6F3EC', borderRadius: '28px', padding: 'clamp(2rem, 5vw, 4rem)',
            display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '3rem', alignItems: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4B98A', marginBottom: '0.75rem' }}>Nouveau · Agent vocal IA</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.2, margin: '0 0 1rem', color: '#F6F3EC' }}>
              Notre site vous parle.<br />Le vôtre aussi ?
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(246,243,236,0.8)', margin: '0 0 1.5rem', maxWidth: '560px' }}>
              Elisa, l'assistante vocale de ce site, est la démonstration. Nous mettons en place le même agent sur votre site, avec votre savoir, vos outils et, si vous le souhaitez, la voix de votre dirigeant.
            </p>
            <div style={{ display: 'grid', gap: '0.6rem', marginBottom: '2rem' }}>
              {points.map((p) => (
                <div key={p} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.95rem' }}>
                  <Check size={16} color="#D4B98A" style={{ flexShrink: 0 }} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
              <button type="button" onClick={openElisa} className="agent-vocal-teaser-talk" style={{ background: '#F6F3EC', color: '#1F3A33', padding: '0.95rem 1.6rem', borderRadius: '0.5rem', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Mic size={17} /> Parler avec Elisa
              </button>
              <Link href="/agent-vocal-ia" style={{ color: '#F6F3EC', padding: '0.95rem 1.6rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(246,243,236,0.35)' }}>
                Découvrir l'offre
              </Link>
            </div>
          </div>
          <div aria-hidden="true" className="agent-vocal-teaser-wave" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', height: '180px' }}>
            {[0.45, 0.8, 0.55, 1, 0.7, 0.9, 0.5, 0.75, 0.4].map((h, i) => (
              <motion.span
                key={i}
                animate={{ scaleY: [h * 0.35, h, h * 0.55] }}
                transition={{ duration: 0.9 + (i % 4) * 0.12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                style={{ width: 9, height: 150, borderRadius: 6, background: i % 3 === 1 ? '#B08D57' : '#F6F3EC', transformOrigin: 'center' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .agent-vocal-teaser { grid-template-columns: 1fr !important; }
          .agent-vocal-teaser-wave { height: 110px !important; }
        }
        @media (max-width: 768px) { .agent-vocal-teaser-talk { display: none !important; } }
      `}</style>
    </section>
  );
}
