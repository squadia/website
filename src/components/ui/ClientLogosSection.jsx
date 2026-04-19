import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Import Client Icons
const ceaAlsace = '/assets/images/icon/cea-alsace.png';
const ceaAtomique = '/assets/images/icon/cea-atomique.png';
const cofaq = '/assets/images/icon/cofaq.png';
const dell = '/assets/images/icon/dell-technologies.png';
const franceHydrogene = '/assets/images/icon/france-hydrogene.png';
const fujitsu = '/assets/images/icon/fujitsu.png';
const groupama = '/assets/images/icon/groupama.png';
const laPoste = '/assets/images/icon/groupe-la-poste.png';
const inocel = '/assets/images/icon/inocel.png';
const meotec = '/assets/images/icon/meotec.png';
const oracle = '/assets/images/icon/oracle.png';
const ovh = '/assets/images/icon/ovh-cloud.png';
const lyon = '/assets/images/icon/ville-de-lyon.png';
const xerox = '/assets/images/icon/xerox.png';
const allLogos = [
  dell, xerox, ovh, laPoste, groupama, lyon, 
  ceaAlsace, ceaAtomique, inocel, meotec, oracle, 
  fujitsu, cofaq, franceHydrogene
];

export default function ClientLogosSection() {
  const row1Logos = allLogos.slice(0, 7);
  const row2Logos = allLogos.slice(7, 14);
  const row3Logos = [...allLogos].reverse().slice(0, 7);

  return (
    <section className="client-logos-section" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <div className="client-section-grid" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.6fr)',
        gap: '4rem',
        alignItems: 'center',
        backgroundColor: '#0D0D25',
        borderRadius: '32px',
        border: '2px solid #1A1A3A',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '480px'
      }}>
        {/* Left Side: Text */}
        <div style={{ position: 'relative', zIndex: 1, padding: '4rem 0 4rem 4rem' }}>
          <p style={{ 
            fontSize: '0.75rem', 
            fontWeight: 800, 
            letterSpacing: '0.12em', 
            textTransform: 'uppercase', 
            color: '#44CCFF', 
            marginBottom: '1rem' 
          }}>
            entreprises clientes
          </p>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
            fontWeight: 800, 
            color: '#FFFFFF', 
            marginBottom: '1.5rem', 
            letterSpacing: '-0.02em', 
            lineHeight: 1.1 
          }}>
            Ils nous font <br />
            <span style={{ color: '#44CCFF' }}>confiance</span>
          </h2>
          <p style={{ 
            fontSize: '1.05rem', 
            color: 'rgba(255,255,255,0.7)', 
            lineHeight: 1.6, 
            marginBottom: '3rem' 
          }}>
            Pour tout ou partie de leur stratégie de ventes, nous avons accompagnés ces entreprises à x3 leur Chiffres d'affaires, à réduire le Churn de 30% ou encore à rendre plus confiant et autonome leur forces de vente.
          </p>

          <Link href="/cas-clients" className="hover-btn-transparent" style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            color: '#44CCFF',
            fontWeight: 600,
            padding: '1rem 2.5rem',
            borderRadius: '8px',
            border: '1px solid #44CCFF',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            Découvrir les cas clients <ArrowRight size={18} style={{ marginLeft: '0.75rem' }} />
          </Link>
        </div>

        {/* Right Side: 3 Logo Bands */}
        <div style={{ 
          position: 'relative', 
          zIndex: 1,
          maskImage: 'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2.5rem',
          padding: '4rem 0',
          borderLeft: 'none',
          background: 'transparent',
          height: '100%'
        }}>
          
          {/* Row 1: Right to left, slow */}
          <div className="marquee-row-custom">
            <div className="marquee-content-custom scroll-left-slow">
              {row1Logos.map((src, idx) => <img key={idx} src={src} alt="Client" className="marquee-logo-custom" />)}
              {row1Logos.map((src, idx) => <img key={`dup-${idx}`} src={src} alt="Client" className="marquee-logo-custom" />)}
            </div>
          </div>

          {/* Row 2: Left to right, faster */}
          <div className="marquee-row-custom">
            <div className="marquee-content-custom scroll-right-fast">
              {row2Logos.map((src, idx) => <img key={idx} src={src} alt="Client" className="marquee-logo-custom" />)}
              {row2Logos.map((src, idx) => <img key={`dup-${idx}`} src={src} alt="Client" className="marquee-logo-custom" />)}
            </div>
          </div>

          {/* Row 3: Right to left, slower */}
          <div className="marquee-row-custom">
            <div className="marquee-content-custom scroll-left-slower">
              {row3Logos.map((src, idx) => <img key={idx} src={src} alt="Client" className="marquee-logo-custom" />)}
              {row3Logos.map((src, idx) => <img key={`dup-${idx}`} src={src} alt="Client" className="marquee-logo-custom" />)}
            </div>
          </div>

        </div>

        {/* Background Decorative Halos */}
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(68, 204, 255, 0.25) 0%, transparent 70%)',
          filter: 'blur(90px)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <style>{`
          .marquee-row-custom {
            display: flex;
            width: max-content;
          }
          .marquee-content-custom {
            display: flex;
            gap: 4rem;
            padding-right: 4rem;
            will-change: transform;
          }
          .marquee-logo-custom {
            height: 38px;
            width: auto;
            object-fit: contain;
            opacity: 1;
            filter: grayscale(0) brightness(1.2) drop-shadow(0 0 12px rgba(68, 204, 255, 0.5));
            transform: scale(1.05);
            transition: all 0.3s ease;
          }
          .scroll-left-slow {
            animation: scrollLeftCustom 35s linear infinite;
          }
          .scroll-right-fast {
            animation: scrollRightCustom 25s linear infinite;
          }
          .scroll-left-slower {
            animation: scrollLeftCustom 45s linear infinite;
          }
          @keyframes scrollLeftCustom {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRightCustom {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          
          .hover-btn-transparent:hover {
            background-color: rgba(68, 204, 255, 0.05) !important;
            transform: scale(1.02);
          }
          
          @media (max-width: 900px) {
            .client-section-grid {
              grid-template-columns: 1fr !important;
            }
            .client-section-grid > div:first-child {
              padding: 3rem 2rem 1rem 2rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
