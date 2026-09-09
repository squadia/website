'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// Bloc CTA final partagé : l'image s'affiche plein cadre puis se rétrécit
// dans sa taille de carte au fil du scroll, texte et bouton apparaissant
// une fois le rétrécissement bien engagé.
export default function CtaFinalZoom({
  teamSquadia,
  eyebrow = 'Prochaine étape',
  kicker = 'Rejoignez-nous :',
  title = 'Parlons de votre prospection',
  description = <>30 minutes pour comprendre votre contexte<br />et diagnostiquer une approche.</>,
  ctaLabel = 'Prendre Rendez-Vous',
  ctaHref = '/contact',
}) {
  const zoomRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportW, setViewportW] = useState(1280);

  useEffect(() => {
    const onResize = () => { setIsMobile(window.innerWidth <= 768); setViewportW(window.innerWidth); };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const finalWidth = Math.min(1136, viewportW - (isMobile ? 40 : 64));
  const finalHeight = isMobile ? 420 : 600;
  const finalRadius = isMobile ? 16 : 20;
  const scaleStart = Math.max(1.05, viewportW / finalWidth);

  const { scrollYProgress } = useScroll({ target: zoomRef, offset: ['start start', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 0.55], [scaleStart, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.55], [0, finalRadius]);
  const topOpacity = useTransform(scrollYProgress, [0.48, 0.72], [0, 1]);
  const topY = useTransform(scrollYProgress, [0.48, 0.72], [24, 0]);
  const bottomOpacity = useTransform(scrollYProgress, [0.56, 0.8], [0, 1]);
  const bottomY = useTransform(scrollYProgress, [0.56, 0.8], [24, 0]);

  return (
    <section ref={zoomRef} style={{ background: '#060612' }}>
      <div style={{ height: isMobile ? '160vh' : '220vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', left: '-160px', bottom: '-160px', width: '840px', height: '840px', background: 'radial-gradient(circle, rgba(68,204,255,0.4) 0%, rgba(68,204,255,0) 70%)', filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none' }} />
          <motion.div style={{
            width: finalWidth, height: finalHeight, scale, borderRadius: radius,
            border: '1px solid rgba(68,204,255,.1)', textAlign: 'center', position: 'relative', overflow: 'hidden',
            boxShadow: '0 0 60px -20px rgba(68,204,255,.15)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 1
          }}>
            <img src={teamSquadia} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: isMobile ? 'center 20%' : 'center top', filter: isMobile ? 'brightness(0.55) saturate(1.1)' : 'brightness(0.75) saturate(1.1)', zIndex: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: isMobile ? 'linear-gradient(to bottom, rgba(6,6,18,0.85) 0%, rgba(6,6,18,0.55) 35%, rgba(6,6,18,0.75) 70%, rgba(6,6,18,0.95) 100%)' : 'linear-gradient(to bottom, rgba(6,6,18,0.75) 0%, transparent 32%, transparent 55%, rgba(6,6,18,0.92) 100%)', zIndex: 1, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2, padding: isMobile ? '40px 24px 48px' : '56px 56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <motion.div style={{ opacity: topOpacity, y: topY }}>
                <span style={{ fontSize: isMobile ? '0.7rem' : '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>{eyebrow}</span>
                <p style={{ fontSize: 'clamp(1.5rem, 5.5vw, 2.2rem)', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.1, color: '#fff', margin: '0 0 8px' }}>{kicker}</p>
                <h2 style={{ fontSize: 'clamp(1.5rem, 5.5vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: 0 }}>{title}</h2>
              </motion.div>
              <motion.div style={{ opacity: bottomOpacity, y: bottomY }}>
                <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '420px', margin: '0 auto 32px' }}>{description}</p>
                <Link href={ctaHref} style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, background: '#44CCFF', color: '#060612', padding: isMobile ? '1rem 1.8rem' : '1.1rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block', margin: '0 auto' }}>{ctaLabel}</Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
