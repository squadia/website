import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Zap, BarChart3, ArrowRight, MousePointer2, Percent, ChevronDown, CheckCircle2, ShieldAlert, BookOpen } from 'lucide-react';
import ClientLogosSection from '../components/ui/ClientLogosSection';
import c1 from '../assets/images/c1.png';
import fonds1 from '../assets/images/fonds1.png';
import imgMarketingManager from '../assets/images/ressources/new-marketing-manager.jpeg';
import { casesData } from '../data/cases';
import pipelineImg from '../assets/images/pipeline-b2b.jpeg';
import formationImg from '../assets/images/formationB2B.png';
import transformerCRMImg from '../assets/images/transformerCRM.jpeg';

const caseImagesDG = {
  'pipeline-b2b': pipelineImg,
  'formation-vente': formationImg,
  'crm-industrie': transformerCRMImg,
};

const caseLabelsDG = {
  'pipeline-b2b': 'Leads',
  'crm-industrie': 'Stratégie',
  'formation-vente': 'Formation',
};

const TagDG = ({ children }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, backgroundColor: '#2563EB', color: '#FFFFFF', border: 'none' }}>
    {children}
  </span>
);

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  const borderColor = 'rgba(255,255,255,0.08)';
  return (
    <div style={{ 
      borderBottom: `1px solid ${borderColor}`, 
      padding: '1.5rem 0',
      opacity: isOpen ? 1 : 0.45,
      transition: 'opacity 0.3s ease'
    }}>
      <button 
        onClick={onToggle}
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          textAlign: 'left',
          color: '#FFFFFF',
          fontSize: '1.1rem',
          fontWeight: 700,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0
        }}
      >
        <span>{question}</span>
        <ChevronDown 
          style={{ 
            transition: 'transform 0.3s ease', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: 'rgba(255,255,255,0.4)'
          }} 
        />
      </button>
      <div 
        style={{ 
          maxHeight: isOpen ? '500px' : '0', 
          overflow: 'hidden', 
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

const LandingMarketing = () => {
  useScrollReveal();
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    document.title = "Squadia pour les Directeurs Marketing — Pipeline B2B, leads qualifies et automatisation IA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia aide les directions marketing B2B a structurer un pipeline fiable, qualifier leurs leads et automatiser leurs campagnes. Pour PME et ETI en France.";
    }
  }, []);

  const enjeux = [
    { title: 'Les leads sont générés, mais pas exploités', desc: "Le marketing produit des contacts. Les commerciaux les jugent non qualifiés. Le débat recommence à chaque réunion de pipe review sans que rien ne change vraiment. Le problème n'est pas le volume, c'est le manque de contexte et de timing.", icon: <Target color="#44CCFF" /> },
    { title: 'Les outils ne communiquent pas entre eux', desc: "CRM mal configuré, données éparpillées, séquences marketing déconnectées du pipeline commercial. Chaque outil fonctionne dans son coin. La vision globale n'existe pas et la contribution au chiffre reste impossible à prouver.", icon: <Zap color="#44CCFF" /> },
    { title: 'La pression sur le ROI marketing augmente', desc: "Les budgets sont questionnés. Les équipes sont jugées sur leur contribution au chiffre d'affaires, pas sur leurs impressions ou leur taux d'ouverture. Prouver la valeur du marketing avec des données fiables devient un enjeu stratégique.", icon: <BarChart3 color="#44CCFF" /> },
    { title: 'Les initiatives IA bloquent faute de cadre', desc: "Des idées d'automatisation ou de personnalisation attendent depuis des mois. Sans stratégie validée au bon niveau, l'IT ou la direction générale freinent. Pas parce que les idées sont mauvaises, mais parce qu'elles n'ont pas de cadre.", icon: <ShieldAlert color="#44CCFF" /> },
    { title: 'Le marketing ne parle pas le même langage que les ventes', desc: "Les commerciaux attendent des leads chauds. Le marketing produit du volume. Entre les deux, personne ne s'entend sur ce qu'est un bon lead, ni sur qui fait quoi dans le parcours d'achat.", icon: <Percent color="#44CCFF" /> }
  ];

  const apports = [
    { title: "Des leads avec du contexte, pas juste des contacts", desc: "Signaux d'achat, changements de poste, recrutements stratégiques. Les leads Squadia arrivent avec une raison d'acheter maintenant et un angle d'approche. Vos commerciaux savent exactement pourquoi ils appellent." },
    { title: 'Un pipeline marketing structuré et mesurable', desc: "On aligne les actions marketing sur les objectifs commerciaux réels. Chaque campagne, chaque séquence, chaque lead est connecté à un indicateur de pipeline. La contribution au chiffre devient visible et défendable." },
    { title: 'Une automatisation qui libère du temps pour la stratégie', desc: "Segmentation, nurturing, reporting, mise à jour CRM. On automatise ce qui prend du temps sans valeur ajoutée. Vos équipes se concentrent sur ce qui compte vraiment." },
    { title: 'Une équipe formée pour exploiter les outils en place', desc: "Pas d'adoption en demi-teinte. On forme votre équipe sur les cas concrets de votre organisation pour que les outils servent vraiment, pas qu'ils restent sous-utilisés après 3 mois." }
  ];

  const faqs = [
    { q: 'Comment Squadia aide à qualifier les leads ?', a: "On travaille sur deux niveaux : la détection de signaux d'achat en amont (qui a une vraie raison d'acheter maintenant) et la contextualisation de chaque lead pour que vos commerciaux arrivent préparés, pas à froid." },
    { q: "Est-ce qu'on peut activer une seule brique sans tout restructurer ?", a: "Oui. On peut commencer par les leads, par l'automatisation ou par la formation selon la priorité du moment. Chaque brique fonctionne indépendamment." },
    { q: 'Combien de temps pour voir des résultats ?', a: "Les premiers leads qualifiés arrivent sous 5 à 10 jours après validation du périmètre. Les premiers effets sur le pipeline sont visibles en 30 à 60 jours." },
    { q: 'Comment Squadia se différencie d\'une agence marketing classique ?', a: "Une agence travaille sur un levier isolé, souvent le contenu ou la publicité. Squadia travaille sur le système complet : données, outils, automatisation, formation. L'objectif c'est un pipeline mesurable, pas de la visibilité." }
  ];

  return (
    <div className="landing-marketing" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh' }}>
      
      {/* ═══ SECTION 1 — HERO ═══ */}
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
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2,
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

              {/* Card 1 — Leads qualifiés */}
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
                  <span style={{ color: '#44CCFF' }}>ce mois</span> — qualification +64%
                </div>
              </div>

              {/* Card 2 — Pipeline marketing */}
              <div className="dm-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#FFF' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Pipeline marketing</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>€ 210K</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                  <span style={{ color: '#44CCFF' }}>sur objectif</span> — € 350K
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

              {/* Card 3 — Séquence ICP */}
              <div className="dm-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#FFF' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Séquence ICP active</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.3rem' }}>ETI Industrie</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                  <span style={{ color: '#44CCFF' }}>Taux ouverture</span> — 38%
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

      {/* ═══ SECTION 2 — VOS ENJEUX ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Contraintes du marketing manager en 2026</h2>
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

      {/* ═══ SECTION 3 — CE QUE SQUADIA APPORTE ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Comment Squadia travaille avec les directions marketing.</h2>
          <div className="grid-2" style={{ gap: '2rem' }}>
            {apports.map((item, i) => (
              <div key={i} style={{ padding: '2.5rem', background: '#0D0D25', border: '1px solid #1A1A3A', borderLeft: '4px solid #44CCFF', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#F9FAFB' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3B — GENERER DES LEADS ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container grid-2 fade-in" style={{ gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: 1.2 }}>Le marketing détecte. Les commerciaux convertissent. Encore faut-il que les deux soient alignés.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              <p>La génération de leads B2B ne se résume pas à produire du volume. Ce qui fait la différence c'est le timing et le contexte. Un lead arrive avec une raison d'acheter maintenant, un signal identifié, un angle d'approche. Pas juste un nom et un email.</p>
              <p>On travaille avec les directions marketing sur :</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>La détection de signaux d'achat en amont : recrutements stratégiques, changements de direction, projets en cours</li>
                <li>La qualification des leads avant de les passer aux commerciaux pour éviter le débat éternel sur la qualité</li>
                <li>L'alignement des KPIs marketing sur les objectifs pipeline et non sur des métriques de visibilité</li>
                <li>L'automatisation des séquences de nurturing pour garder le contexte sans mobiliser l'équipe à chaque étape</li>
              </ul>
              <p>Et si vous êtes en prise de poste ou dans les 90 premiers jours d'une nouvelle responsabilité, on a préparé un guide dédié pour structurer vos priorités et obtenir vos premiers quick wins rapidement.</p>
            </div>
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1A1A3A', background: '#0A0A1A', position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #0A0A1A, #111827)', position: 'absolute' }}></div>
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                <Target size={40} color="#44CCFF" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#F9FAFB' }}>Alignement Revenus</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — CAS CLIENTS ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#050510' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem' }}>CAS CLIENTS</p>
            <h2 style={{ fontSize: '2.625rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>Résultats concrets</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: '700px', margin: '0 auto' }}>Actions réelles, impacts mesurables.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {casesData.filter(c => ['crm-industrie', 'pipeline-b2b', 'formation-vente'].includes(c.id)).map((c) => {
              const img = caseImagesDG[c.id];
              return (
                <Link
                  key={c.id}
                  to={`/cas-clients/${c.id}`}
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
                        <div style={{ fontSize: '1.6rem', fontWeight: 700, lineHeight: 1.2, color: '#44CCFF', letterSpacing: '-0.01em' }}>+110 jours de ventes</div>
                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>récupérés par an</div>
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
            <Link to="/cas-clients" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: '#44CCFF', fontWeight: 600, padding: '1rem 2.5rem', borderRadius: '8px', border: '1px solid #44CCFF', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(68,204,255,0.05)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'scale(1)'; }}>
              Voir tous les cas <ArrowRight size={18} style={{ marginLeft: '0.75rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — RESSOURCE ═══ */}
      <section style={{ padding: '10rem 2rem', backgroundColor: '#11111E' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>RESSOURCES</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '3rem', lineHeight: 1.2 }}>Une ressource pour vous.</h2>
          <Link
            to="/ressources/guide-marketing-manager"
            style={{ textDecoration: 'none', display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(68,204,255,0.15)', borderRadius: '16px', overflow: 'hidden', color: '#FFFFFF', transition: 'border-color 0.3s, transform 0.3s', minHeight: '200px' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div className="ressource-img-mobile" style={{ flex: 1, minHeight: '100%', overflow: 'hidden' }}>
              <img src={imgMarketingManager} alt="Guide Marketing Manager" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ flex: 2, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ color: '#44CCFF', fontSize: '13px', fontWeight: 600, marginBottom: '12px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Marketing Manager</span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.25 }}>Mini-guide Marketing Manager B2B : structurer et piloter votre stratégie</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>Stratégie de contenu, pilotage de la demande, outils IA et KPIs marketing pour aligner vos actions sur les objectifs commerciaux.</p>
              <span style={{ alignSelf: 'flex-start', background: '#FFFFFF', color: '#060612', padding: '10px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Télécharger gratuitement →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══ SECTION 6 — FAQ ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <div style={{ maxWidth: '800px', marginInline: 'auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Questions fréquentes</h2>
            <div>
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
          <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>À lire aussi</h2>
          <div className="grid-2" style={{ gap: '2rem', maxWidth: '1000px', marginInline: 'auto' }}>
            <Link to="/blog/prospection-multicanale-b2b-erreurs" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>Prospection</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter</h3>
              <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
            </Link>

            <Link to="/blog/nettoyage-segmentation-enrichissement-donnees-b2b" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>Data B2B</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit</h3>
              <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION NOUVELLE — ILS NOUS FONT CONFIANCE */}
      <ClientLogosSection />

      {/* ═══ SECTION 7 — CTA FINAL ═══ */}
      <section className="section-padding container" style={{ textAlign: 'center' }}>
        <div className="fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', maxWidth: '800px', marginInline: 'auto' }}>
            Prêt à transformer votre marketing en moteur de pipeline ?
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', textDecoration: 'none' }}>Prendre RDV</Link>
            <Link to="/tarifs" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Voir nos offres <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingMarketing;
