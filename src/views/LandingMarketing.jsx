'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Zap, BarChart3, ArrowRight, MousePointer2, Percent, ChevronDown, CheckCircle2, ShieldAlert, BookOpen } from 'lucide-react';
import ClientLogosSection from '../components/ui/ClientLogosSection';
const c1 = '/assets/images/c1.png';
const fonds1 = '/assets/images/fonds1.png';
const imgMarketingManager = '/assets/images/ressources/new-marketing-manager.jpeg';
import { casesData } from '../data/cases';
const teamSquadia = '/assets/images/notremission/team-squadia.png';
const kickerStyle = { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem', textAlign: 'center' };
const pipelineImg = '/assets/images/pipeline-b2b.jpeg';
const formationImg = '/assets/images/formationB2B.png';
const transformerCRMImg = '/assets/images/transformerCRM.jpeg';
const blogProspectionImg = '/assets/images/blog/blog4.jpeg';
const blogDataB2BImg = '/assets/images/blog/cleaningdata.jpeg';
const marketingAlignementImg = '/assets/images/marketing_alignement.webp';
const caseImagesDG = {
  'pipeline-b2b': pipelineImg,
  'formation-vente': formationImg,
  'crm-industrie': transformerCRMImg,
};

const caseLabelsDG = {
  'pipeline-b2b': 'Leads',
  'crm-industrie': 'Prospection',
  'formation-vente': 'Formation',
};

const TagDG = ({ children }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, backgroundColor: '#44CCFF', color: '#060612', border: 'none' }}>
    {children}
  </span>
);

const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
  <div
    onClick={onToggle}
    style={{
      backgroundColor: '#0D0D25',
      border: '1px solid rgba(68, 204, 255, 0.18)',
      borderRadius: '16px',
      padding: '1.6rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    }}
  >
    <div style={{
      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
      color: '#F9FAFB', fontSize: '1.05rem', fontWeight: 600, gap: '1rem'
    }}>
      <span>{question}</span>
      <ChevronDown style={{
        transition: 'transform 0.3s ease',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        color: '#44CCFF', flexShrink: 0
      }} />
    </div>
    <div style={{
      maxHeight: isOpen ? '400px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.35s ease-in-out, opacity 0.3s ease',
      opacity: isOpen ? 1 : 0
    }}>
      <div style={{ marginTop: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, fontSize: '0.98rem' }}>{answer}</div>
    </div>
  </div>
);

const LandingMarketing = () => {
  useScrollReveal();
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    document.title = "Squadia pour Directeurs Marketing : Pipeline B2B et IA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia aide les directions marketing B2B à structurer un pipeline fiable, qualifier leurs leads et automatiser leurs campagnes. Pour PME et ETI en France.";
    }
  }, []);

  const enjeux = [
    { title: 'Les leads sont générés, mais pas exploités', desc: "Le marketing produit des contacts. Les commerciaux les jugent non qualifiés. Le débat recommence à chaque réunion de pipe review sans que rien ne change vraiment. Le problème n'est pas le volume, c'est le manque de contexte et de timing.", icon: <Target color="#44CCFF" /> },
    { title: 'Les outils ne communiquent pas entre eux', desc: "CRM mal configuré, données éparpillées, séquences marketing déconnectées du pipeline commercial. Chaque outil fonctionne dans son coin. La vision globale n'existe pas et la contribution au chiffre reste impossible à prouver.", icon: <Zap color="#44CCFF" /> },
    { title: 'La pression sur le ROI marketing augmente', desc: "Les budgets sont questionnés. Les équipes sont jugées sur leur contribution au chiffre d'affaires, pas sur leurs impressions ou leur taux d'ouverture. Prouver la valeur du marketing avec des données fiables devient un enjeu stratégique.", icon: <BarChart3 color="#44CCFF" /> },
    { title: 'Les initiatives IA bloquent faute de cadre', desc: "Des idées d'automatisation ou de personnalisation attendent depuis des mois. Sans strategie validée au bon niveau, l'IT ou la direction générale freinent. Pas parce que les idées sont mauvaises, mais parce qu'elles n'ont pas de cadre.", icon: <ShieldAlert color="#44CCFF" /> },
    { title: 'Le marketing ne parle pas le même langage que les ventes', desc: "Les commerciaux attendent des leads chauds. Le marketing produit du volume. Entre les deux, personne ne s'entend sur ce qu'est un bon lead, ni sur qui fait quoi dans le parcours d'achat.", icon: <Percent color="#44CCFF" /> }
  ];

  const apports = [
    { title: "Des leads avec du contexte, pas juste des contacts", desc: "Signaux d'achat, changements de poste, recrutements stratégiques. Les leads Squadia arrivent avec une raison d'acheter maintenant et un angle d'approche. Vos commerciaux savent exactement pourquoi ils appellent.", icon: <Target color="#44CCFF" /> },
    { title: 'Un pipeline marketing structuré et mesurable', desc: "On aligne les actions marketing sur les objectifs commerciaux réels. Chaque campagne, chaque séquence, chaque lead est connecté à un indicateur de pipeline. La contribution au chiffre devient visible et défendable.", icon: <BarChart3 color="#44CCFF" /> },
    { title: 'Une automatisation qui libère du temps pour la strategie', desc: "Segmentation, nurturing, reporting, mise à jour CRM. On automatise ce qui prend du temps sans valeur ajoutée. Vos équipes se concentrent sur ce qui compte vraiment.", icon: <Zap color="#44CCFF" />, link: { href: '/automatisation-ia.html', label: 'Découvrir nos automatisations' } },
    { title: 'Une équipe formée pour exploiter les outils en place', desc: "Pas d'adoption en demi-teinte. On forme votre équipe sur les cas concrets de votre organisation pour que les outils servent vraiment, pas qu'ils restent sous-utilisés après 3 mois.", icon: <CheckCircle2 color="#44CCFF" /> }
  ];

  const faqs = [
    { q: 'Comment Squadia aide à qualifier les leads ?', a: "On travaille sur deux niveaux : la détection de signaux d'achat en amont (qui a une vraie raison d'acheter maintenant) et la contextualisation de chaque lead pour que vos commerciaux arrivent préparés, pas à froid." },
    { q: "Est-ce qu'on peut activer une seule brique sans tout restructurer ?", a: "Oui. On peut commencer par les leads, par l'automatisation ou par la formation selon la priorité du moment. Chaque brique fonctionne indépendamment." },
    { q: 'Combien de temps pour voir des résultats ?', a: "Les premiers leads qualifiés arrivent sous 5 à 10 jours après validation du périmètre. Les premiers effets sur le pipeline sont visibles en 30 à 60 jours." },
    { q: 'Comment Squadia se différencie d\'une agence marketing classique ?', a: "Une agence travaille sur un levier isolé, souvent le contenu ou la publicité. Squadia travaille sur le système complet : données, outils, automatisation, formation. L'objectif c'est un pipeline mesurable, pas de la visibilité." }
  ];

  return (
    <div className="landing-marketing" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh' }}>
      
      {/* ═══ SECTION 1 : HERO ═══ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#040710'
      }}>
        <style>{`
          @keyframes fadeBgM { 0% { opacity: 0; } 100% { opacity: 1; } }
          @keyframes slidePersonM {
            0%   { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeContentM {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes drawSparklineM { 0% { stroke-dashoffset: 200; } 100% { stroke-dashoffset: 0; } }
          @keyframes drawArcM {
            0%   { stroke-dasharray: 0 132; }
            100% { stroke-dasharray: 84 132; }
          }
          @keyframes growBarM {
            0%   { stroke-dasharray: 0 100; }
            100% { stroke-dasharray: 60 100; }
          }
          .dm-kpi-card {
            background: rgba(8,15,35,0.6);
            border: 1px solid rgba(68,204,255,0.15);
            border-radius: 14px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            position: relative;
            overflow: visible;
          }
          .dm-kpi-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(68,204,255,0.3), transparent);
            border-radius: 14px 14px 0 0;
          }
            .dm-kpi-card::after {
              content: '';
              position: absolute;
              top: 50%; left: 50%; width: 150px; height: 150px;
              background: radial-gradient(circle, rgba(68,204,255,0.05) 0%, transparent 70%);
              transform: translate(-50%, -50%);
              pointer-events: none;
            }
            @keyframes fadeGlowM { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
        `}</style>

        {/* Background */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url(${fonds1})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0, animation: 'fadeBgM 1s ease 0.2s forwards', zIndex: 1
        }} />

        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to right, rgba(6,10,18,0.98) 0%, rgba(6,10,18,0.85) 45%, rgba(6,10,18,0) 80%)',
          zIndex: 2, opacity: 0, animation: 'fadeBgM 1s ease 0.2s forwards'
        }} />

        {/* Person Image */}
        <div style={{
          position: 'absolute', bottom: 0, right: '5%',
          width: '45%', maxWidth: '800px', height: '92vh',
          backgroundImage: `url(${c1})`,
          backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
          zIndex: 3, opacity: 0,
          animation: 'slidePersonM 3.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards'
        }} />

        {/* Glow Halo behind character */}
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '12%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(68, 204, 255, 0.45) 0%, rgba(68, 204, 255, 0.1) 50%, transparent 80%)',
          filter: 'blur(100px)',
          zIndex: 2,
          opacity: 0,
          animation: 'fadeGlowM 2.5s ease 2s forwards',
          pointerEvents: 'none'
        }} />


        {/* Fade bas : transition douce vers la section suivante (#050510), évite la coupe nette de l'image */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, width: '100%', height: '260px',
          background: 'linear-gradient(to bottom, transparent 0%, #050510 100%)',
          zIndex: 4,
          pointerEvents: 'none'
        }} />

        {/* Gradient fade + label */}
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: '55%', height: '40%',
          background: 'linear-gradient(to top, rgba(6,6,18,0.88) 0%, rgba(6,6,18,0.52) 38%, rgba(6,6,18,0.12) 68%, transparent 100%)',
          backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
          maskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)',
          zIndex: 4, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'flex-end',
          paddingBottom: '5.5rem', pointerEvents: 'none'
        }}>
          <div style={{ fontSize: '1rem', fontWeight: 500, color: '#FFFFFF', marginBottom: '4px', textAlign: 'center' }}>
            Directrice Marketing
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(68,204,255,0.85)', textAlign: 'center' }}>
            Acquisition, contenu et pipeline
          </div>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 5, display: 'flex', flexWrap: 'wrap', width: '100%', paddingTop: '150px', paddingBottom: '7rem', paddingLeft: '8%', paddingRight: '5%' }}>
          <div style={{ flex: '0 0 65%', maxWidth: '850px', paddingRight: '2rem' }}>

            <h1 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, lineHeight: 1.2,
              marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#FFFFFF',
              opacity: 0, animation: 'fadeContentM 1.2s ease 0.3s forwards'
            }}>
              <span style={{ display: 'block' }}>Du marketing qui génère</span>
              <span style={{ display: 'block' }}>du pipeline, pas</span>
              <span style={{ display: 'block' }}>juste de la visibilité.</span>
            </h1>

            <p style={{
              fontSize: '1.25rem', color: 'rgba(255,255,255,0.45)',
              marginBottom: '3.5rem', maxWidth: '800px', lineHeight: 1.6, fontWeight: 400,
              opacity: 0, animation: 'fadeContentM 1.2s ease 0.4s forwards'
            }}>
              La pression sur la contribution au chiffre d'affaires n'a jamais été aussi forte. Squadia structure les systèmes qui transforment vos actions marketing en opportunités commerciales réelles et mesurables.
            </p>

            {/* KPI Cards */}
            <div style={{
              display: 'flex', gap: '1.2rem', flexWrap: 'wrap',
              opacity: 0, animation: 'fadeContentM 1.2s ease 0.5s forwards'
            }}>

              {/* Card 1 : Leads qualifiés */}
              <div className="dm-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#FFF' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Leads qualifiés</div>
                {/* Valeur + arc gauge sur la même ligne */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1 }}>+127</div>
                  <div style={{ position: 'relative', width: '52px', height: '52px', flexShrink: 0 }}>
                    <svg viewBox="0 0 52 52" width="52" height="52" style={{ transform: 'rotate(-90deg)' }}>
                      <circle cx="26" cy="26" r="21" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4.5" />
                      <circle cx="26" cy="26" r="21" fill="none" stroke="#44CCFF" strokeWidth="4.5"
                        strokeLinecap="round" strokeDasharray="0 132"
                        style={{ animation: 'drawArcM 1.8s cubic-bezier(0.4,0,0.2,1) 0.9s forwards' }}
                      />
                    </svg>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.52rem', fontWeight: 700, color: '#44CCFF' }}>+64%</div>
                  </div>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
                  <span style={{ color: '#44CCFF' }}>ce mois</span> : qualification +64%
                </div>
              </div>

              {/* Card 2 : Pipeline marketing */}
              <div className="dm-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#FFF' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Pipeline marketing</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>€ 210K</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                  <span style={{ color: '#44CCFF' }}>sur objectif</span> : € 350K
                </div>
                {/* Barre de progression 60% */}
                <div style={{ position: 'relative', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, height: '100%',
                    background: '#44CCFF', borderRadius: '3px', width: '0%',
                    animation: 'none',
                    transition: 'width 1.6s cubic-bezier(0.4,0,0.2,1) 0.9s'
                  }}
                  ref={el => { if (el) setTimeout(() => { el.style.width = '60%'; }, 50); }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>0</span>
                  <span style={{ fontSize: '0.7rem', color: '#44CCFF', fontWeight: 600 }}>60%</span>
                </div>
              </div>

              {/* Card 3 : Séquence ICP */}
              <div className="dm-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#FFF' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Séquence ICP active</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.3rem' }}>ETI Industrie</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                  <span style={{ color: '#44CCFF' }}>Taux ouverture</span> : 38%
                </div>
                {/* Barres de réponse email */}
                <svg viewBox="0 0 90 30" width="90" height="30" style={{ display: 'block' }}>
                  {[
                    { x: 0,  h: 14, accent: false },
                    { x: 16, h: 20, accent: false },
                    { x: 32, h: 12, accent: false },
                    { x: 48, h: 28, accent: true  },
                    { x: 64, h: 18, accent: false },
                  ].map((b, i) => (
                    <rect key={i} x={b.x} y={30 - b.h} width="12" height={b.h} rx="3"
                      fill={b.accent ? '#44CCFF' : 'rgba(68,204,255,0.25)'}
                      style={{ opacity: 0, animation: `fadeContentM 0.35s ease ${0.9 + i * 0.12}s forwards` }}
                    />
                  ))}
                </svg>
              </div>

            </div>


          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 : VOS ENJEUX ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <p style={kickerStyle}>Principaux freins</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '4rem', textAlign: 'center' }}>Contraintes du marketing manager en 2026</h2>
          <div className="grid-3" style={{ gap: '2rem' }}>
            {enjeux.map((item, i) => (
              <div key={i} style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', transition: 'transform 0.3s ease, border-color 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(37, 99, 235, 0.1)', display: 'inline-flex', borderRadius: '8px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: 1.4 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 : NOTRE SOLUTION (bento) ═══ */}
      <section className="section-padding" style={{ background: '#0A0A1A' }}>
        <style>{`
          .dc-bento { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 220px 220px auto; gap: 1.5rem; }
          .dc-bento-hero { grid-column: 1 / 3; grid-row: 1 / 3; }
          .dc-bento-stat-top { grid-column: 3; grid-row: 1; }
          .dc-bento-feature { grid-column: 3; grid-row: 2; }
          .dc-bento-bottom-1 { grid-column: 1; grid-row: 3; }
          .dc-bento-bottom-2 { grid-column: 2; grid-row: 3; }
          .dc-bento-bottom-3 { grid-column: 3; grid-row: 3; }
          .dc-bento-card { border-radius: 22px; padding: 1.8rem; transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease; }
          .dc-bento-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); filter: brightness(1.15); }
          @media (max-width: 900px) {
            .dc-bento { grid-template-columns: 1fr; grid-template-rows: auto; }
            .dc-bento-hero, .dc-bento-stat-top, .dc-bento-feature, .dc-bento-bottom-1, .dc-bento-bottom-2, .dc-bento-bottom-3 { grid-column: 1; grid-row: auto; }
            .dc-bento-hero { min-height: 380px; }
          }
        `}</style>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={kickerStyle}>Notre solution</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>Transformer votre marketing en moteur de pipeline</h2>
          </div>
          <div className="dc-bento">

            {/* Carte héro : présentation de la solution */}
            <div className="dc-bento-card dc-bento-hero" style={{
              position: 'relative', overflow: 'hidden',
              border: '1px solid rgba(68,204,255,0.18)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            }}>
              <img src={teamSquadia} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', opacity: 0.32, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,18,0.95) 15%, rgba(6,6,18,0.55) 60%, rgba(6,6,18,0.3) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.9rem', lineHeight: 1.2 }}>Le marketing comme moteur de pipeline</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.65, maxWidth: '460px', margin: 0 }}>Générer du volume ne suffit plus. Squadia structure vos actions marketing pour qu'elles se traduisent en opportunités commerciales réelles, mesurables et alignées avec les objectifs de vente.</p>
              </div>
            </div>

            {/* Stat : leviers activés */}
            <div className="dc-bento-card dc-bento-stat-top" style={{
              background: 'linear-gradient(135deg, #44CCFF 0%, #1D4ED8 100%)', color: '#fff',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BarChart3 size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 700, lineHeight: 1 }}>4</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', marginTop: '0.3rem' }}>leviers activés en parallèle</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.3rem' }}>Leads · Pipeline · Automatisation · Formation</div>
              </div>
            </div>

            {/* Feature : équipe formée */}
            <div className="dc-bento-card dc-bento-feature" style={{
              background: 'rgba(68,204,255,0.07)', border: '1px solid rgba(68,204,255,0.3)', boxShadow: '0 0 40px -12px rgba(68,204,255,0.25)', color: '#F9FAFB',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(68,204,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                {apports[3].icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.3, color: '#F9FAFB' }}>{apports[3].title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '0.88rem', margin: 0 }}>{apports[3].desc}</p>
            </div>

            {/* Bottom 1 : leads avec contexte */}
            <div className="dc-bento-card dc-bento-bottom-1" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.9rem', width: '40px', height: '40px', background: 'rgba(68,204,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                {apports[0].icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.3, color: '#F9FAFB' }}>{apports[0].title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, fontSize: '0.88rem', margin: 0 }}>{apports[0].desc}</p>
            </div>

            {/* Bottom 2 : pipeline structuré */}
            <div className="dc-bento-card dc-bento-bottom-2" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.9rem', width: '40px', height: '40px', background: 'rgba(68,204,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                {apports[1].icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.3, color: '#F9FAFB' }}>{apports[1].title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, fontSize: '0.88rem', margin: 0 }}>{apports[1].desc}</p>
            </div>

            {/* Bottom 3 : automatisation */}
            <div className="dc-bento-card dc-bento-bottom-3" style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #0A0A1A 100%)', border: '1px solid rgba(68,204,255,0.2)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.9rem', width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                {apports[2].icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.3, color: '#F9FAFB' }}>{apports[2].title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, fontSize: '0.88rem', margin: 0 }}>{apports[2].desc}</p>
              {apports[2].link && (
                <a href={apports[2].link.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', color: '#44CCFF', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem' }}>
                  {apports[2].link.label} <ArrowRight size={14} />
                </a>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 3B : ALIGNER VENTES ET MARKETING ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>+ Efficace ensemble</p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2.2rem)', marginBottom: '3rem', lineHeight: 1.2, whiteSpace: 'nowrap' }}>Aligner les ventes et le marketing</h2>

          <div className="grid-2" style={{ gap: '4rem', alignItems: 'start', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
              Même alimentés en leads, les commerciaux peinent souvent à exécuter le suivi, qu'il s'agisse de relancer des contacts ou d'identifier des invités. Nous structurons le travail de fond sur vos territoires grâce à nos outils d'automatisation, à l'IA et à notre expérience auprès de grands comptes (Xerox, Dell, Oracle).
            </p>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1A1A3A', background: '#0A0A1A', position: 'relative', height: '340px' }}>
              <img src={marketingAlignementImg} alt="Aligner les ventes et le marketing" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', position: 'absolute', inset: 0 }} />
            </div>
          </div>

          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>On travaille avec les directions marketing sur :</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  'Détection de signaux d\'achats',
                  'Qualification des leads',
                  'Automatisation séquence',
                  'Enrichissement des contacts',
                ].map((label, i) => (
                  <div key={i} style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '8px', padding: '1rem', fontSize: '0.9rem', fontWeight: 600, color: '#F9FAFB' }}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <a href="/automatisation-ia.html" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#44CCFF', color: '#060612', padding: '1rem 1.8rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
                L'IA pour le marketing <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 : CAS CLIENTS ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#050510' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem' }}>CAS CLIENTS</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>Résultats concrets</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: '700px', margin: '0 auto' }}>Actions réelles, impacts mesurables.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {casesData.filter(c => ['crm-industrie', 'pipeline-b2b', 'formation-vente'].includes(c.id)).map((c) => {
              const img = caseImagesDG[c.id];
              return (
                <Link
                  key={c.id}
                  href={`/cas-clients/${c.id}`}
                  style={{ background: c.bgGradient || '#0D0D25', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '2.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '340px', position: 'relative', overflow: 'hidden', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.card-overlay-dg');
                    const image = e.currentTarget.querySelector('.card-img-dg');
                    if (overlay) overlay.style.background = 'linear-gradient(to top, rgba(10,15,46,0.65) 20%, rgba(10,15,46,0.2) 100%)';
                    if (image) image.style.opacity = '0.55';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = 'rgba(68,204,255,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.card-overlay-dg');
                    const image = e.currentTarget.querySelector('.card-img-dg');
                    if (overlay) overlay.style.background = 'linear-gradient(to top, rgba(10,15,46,0.8) 30%, rgba(10,15,46,0.3) 100%)';
                    if (image) image.style.opacity = '0.38';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  }}
                >
                  {img && (
                    <img src={img} alt="" className="card-img-dg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.38, transition: 'opacity 0.4s ease', pointerEvents: 'none' }} />
                  )}
                  <div className="card-overlay-dg" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,46,0.8) 30%, rgba(10,15,46,0.3) 100%)', transition: 'background 0.4s ease', pointerEvents: 'none' }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <TagDG>{caseLabelsDG[c.id] || c.tags[0]}</TagDG>
                    <div style={{ marginTop: '1.2rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)' }}>{c.shortTitle}</div>
                    {c.id === 'crm-industrie' ? (
                      <div style={{ marginBottom: '1.4rem' }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 700, lineHeight: 1.2, color: '#44CCFF', letterSpacing: '-0.01em' }}>+185 opportunités</div>
                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>injectées en pipeline en 4 mois</div>
                      </div>
                    ) : c.id === 'formation-vente' ? (
                      <div style={{ marginBottom: '1.4rem' }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 700, lineHeight: 1.2, color: '#44CCFF', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>x3 ROI</div>
                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>via méthode vente B2B + outils IA</div>
                      </div>
                    ) : (
                      <div style={{ marginBottom: '1.4rem' }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 700, lineHeight: 1.2, color: '#44CCFF', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>+39 opportunités</div>
                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>en 2 mois</div>
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', fontWeight: 500 }}>
                      Voir l'étude complète <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/cas-clients" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: '#44CCFF', fontWeight: 600, padding: '1rem 2.5rem', borderRadius: '8px', border: '1px solid #44CCFF', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(68,204,255,0.05)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'scale(1)'; }}>
              Voir tous les cas <ArrowRight size={18} style={{ marginLeft: '0.75rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 : RESSOURCE ═══ */}
      <section style={{ padding: '10rem 2rem', backgroundColor: '#11111E' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>RESSOURCES</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '3rem', lineHeight: 1.2 }}>Une ressource pour vous.</h2>
          <Link
            href="/ressources/guide-marketing-manager"
            className="ressource-card-link"
            style={{ textDecoration: 'none', display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(68,204,255,0.15)', borderRadius: '16px', overflow: 'hidden', color: '#FFFFFF', transition: 'border-color 0.3s, transform 0.3s', minHeight: '200px' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div className="ressource-img-mobile" style={{ flex: 1, minHeight: '100%', overflow: 'hidden' }}>
              <img src={imgMarketingManager} alt="Guide Marketing Manager" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ flex: 2, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ color: '#44CCFF', fontSize: '13px', fontWeight: 600, marginBottom: '12px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Marketing Manager</span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.25 }}>Mini-guide Marketing Manager B2B : structurer et piloter votre strategie</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>Stratégie de contenu, pilotage de la demande, outils IA et KPIs marketing pour aligner vos actions sur les objectifs commerciaux.</p>
              <span style={{ alignSelf: 'flex-start', background: '#FFFFFF', color: '#060612', padding: '10px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Télécharger gratuitement →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══ SECTION 6 : FAQ ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
            <p style={kickerStyle}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', textAlign: 'center' }}>Questions fréquentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  question={faq.q} 
                  answer={faq.a} 
                  isOpen={openFAQ === idx}
                  onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION ARTICLES (A lire aussi) ══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', textAlign: 'center' }}>À lire aussi</h2>
          <div className="grid-2" style={{ gap: '2rem', maxWidth: '1200px', marginInline: 'auto' }}>
            <Link href="/blog/prospection-multicanale-b2b-erreurs" style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={blogProspectionImg} alt="Prospection multicanale B2B" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(17,17,30,0.85))' }} />
              </div>
              <div style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>Prospection</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', lineHeight: 1.3, marginBottom: '1.5rem', flexGrow: 1, color: '#F9FAFB' }}>Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter</h3>
                <div style={{ marginTop: 'auto' }}>
                  <span style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#3B82F6', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Lire l'article <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/blog/nettoyage-segmentation-enrichissement-donnees-b2b" style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={blogDataB2BImg} alt="Nettoyage et segmentation des données B2B" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(17,17,30,0.85))' }} />
              </div>
              <div style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>Data B2B</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', lineHeight: 1.3, marginBottom: '1.5rem', flexGrow: 1, color: '#F9FAFB' }}>Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit</h3>
                <div style={{ marginTop: 'auto' }}>
                  <span style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#3B82F6', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Lire l'article <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION NOUVELLE : ILS NOUS FONT CONFIANCE */}
      <section className="section-padding" style={{ backgroundColor: '#050510', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container fade-in">
          <ClientLogosSection contained={true} />
        </div>
      </section>

      {/* ═══ CTA FINAL : PROCHAINE ÉTAPE ═══ */}
      <section style={{ background: '#060612', padding: '60px 0 120px' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-160px', bottom: '-160px', width: '840px', height: '840px', background: 'radial-gradient(circle, rgba(68,204,255,0.55) 0%, rgba(68,204,255,0) 70%)', filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none' }} />
          <div style={{ border: '1px solid rgba(68,204,255,.1)', borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px -20px rgba(68,204,255,.15)', minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 1 }}>
            <img src={teamSquadia} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.75) saturate(1.1)', zIndex: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,18,0.75) 0%, transparent 32%, transparent 55%, rgba(6,6,18,0.92) 100%)', zIndex: 1, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2, padding: '56px 56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Prochaine étape</span>
                <p style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.1, color: '#fff', margin: '0 0 8px' }}>Rejoignez-nous :</p>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: 0 }}>Prêt à transformer votre marketing<br/>en moteur de pipeline ?</h2>
              </div>
              <div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '420px', margin: '0 auto 32px' }}>30 minutes pour évaluer votre potentiel de génération de leads.</p>
                <Link href="/contact" style={{ fontSize: '1.1rem', fontWeight: 700, background: '#44CCFF', color: '#060612', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block', margin: '0 auto' }}>Prendre Rendez-Vous</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingMarketing;
