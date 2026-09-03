'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Zap, BarChart3, ArrowRight, ShieldCheck, Rocket, ChevronDown, CheckCircle2, Star } from 'lucide-react';
import ClientLogosSection from '../components/ui/ClientLogosSection';
import { casesData } from '../data/cases';
const teamSquadia = '/assets/images/notremission/team-squadia.png';
const pipelineImg = '/assets/images/pipeline-b2b.jpeg';
const formationImg = '/assets/images/formationB2B.png';
const transformerCRMImg = '/assets/images/transformerCRM.jpeg';
const imgSalesManager = '/assets/images/ressources/new-sales-manager.jpeg';
const imgMarketingManager = '/assets/images/ressources/new-marketing-manager.jpeg';
const imgPlanPartenaire = '/assets/images/ressources/plan-partenaire.jpeg';
const blogStrategieIAImg = '/assets/images/blog/blog1.png';
const blogFormationAutomImg = '/assets/images/blog/blog3.jpeg';
const ceoMeetingImg = '/assets/images/salesdirecteur/ceomeeting.jpeg';
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

const LandingDG = () => {
  useScrollReveal();
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    document.title = "Squadia pour les DG : data, prospection et formation IA pour la croissance PME/ETI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "57% des dirigeants testent l'IA sans vision d'ensemble. Squadia aide les DG de PME/ETI à bâtir un système de génération de revenus mesurable en 90 jours.";
    }
  }, []);

  const enjeux = [
    { title: 'Prouver que la croissance est pilotée, pas subie', desc: "Un board ou un investisseur ne juge pas une intention, il juge un chiffre. Sans dashboard commun entre marketing et ventes, impossible de montrer une trajectoire claire de vos revenus.", icon: <Target color="#44CCFF" /> },
    { title: "Recruter un commercial senior sans garantie qu'il performe", desc: "Un bon closer met souvent plusieurs mois à devenir productif. Sans pipeline déjà structuré ni système d'onboarding, chaque recrutement commercial reste un pari coûteux.", icon: <BarChart3 color="#44CCFF" /> },
    { title: "Des données commerciales qui ne servent à personne", desc: "CRM mal renseigné, fichiers parallèles, contacts dans la tête des commerciaux. Cette donnée a de la valeur, mais seulement si elle est propre et centralisée : pour piloter, pour recruter, pour convaincre un investisseur.", icon: <ShieldCheck color="#44CCFF" /> },
    { title: 'Garder la confiance du board en période tendue', desc: "Quand les résultats ralentissent, le discours ne suffit plus. Ce qui rassure un board, ce sont des indicateurs qui montrent que la machine reste sous contrôle, même dans la difficulté.", icon: <Rocket color="#44CCFF" /> }
  ];

  const apports = [
    { title: 'Un diagnostic avant tout investissement', desc: "On commence par comprendre votre organisation réelle : qualité des données, frictions entre équipes, maturité des outils. On arbitre ce qui vaut la peine d'être fait avant de recruter, lever ou investir davantage." },
    { title: 'Une strategie modernisée, présentable en Comex', desc: "Pas un plan théorique. Une feuille de route avec des cas d'usage priorisés, une gouvernance claire et des indicateurs de pilotage. Ce que vous pouvez défendre devant votre board." },
    { title: 'Un système conçu par des acteurs robustes et fiables', desc: "Data, prospection multicanale et formation IA. On intervient sur les 3 leviers en même temps ou séparément selon les priorités. L'objectif c'est un système cohérent, pas une accumulation de solutions." },
    { title: 'Des 1ers "quick win" en moins de 30 jours', desc: "Pas de transformation sur 18 mois avant de voir quelque chose. Les premiers résultats mesurables arrivent avant votre prochain comité." }
  ];

  const faqs = [
    { q: "Par où commencer quand on ne sait pas où l'IA peut vraiment aider ?", a: "On commence par un cadrage. On analyse votre organisation réelle, on identifie les cas d'usage à fort impact, on élimine ce qui ne vaut pas la peine. Ce travail de diagnostic prend 30 à 60 jours et produit une feuille de route exécutable." },
    { q: "Squadia intervient-il uniquement sur l'IA ?", a: "Non. L'IA est un levier parmi d'autres. On travaille sur le système complet : données, prospection multicanale et formation des équipes. L'IA n'est pas une finalité, c'est un moyen d'aller plus vite et plus loin." },
    { q: 'Peut-on commencer par une seule brique ?', a: "Oui. Stratégie, Leads, Automatisation et Formation peuvent être activés indépendamment selon les priorités du moment." },
    { q: "Comment justifier l'investissement au board ou aux actionnaires ?", a: "On construit les indicateurs de pilotage avec vous dès le départ. Chaque mission produit des livrables mesurables : temps gagné, pipeline amélioré, coûts réduits, adoption des équipes. Les résultats sont documentables et présentables." },
    { q: "Nos données commerciales peuvent-elles être présentées à un investisseur ou un repreneur ?", a: "Oui, c'est souvent l'un des livrables : un CRM propre, une donnée centralisée et fiable, un reporting qui tient la route face à un board, dans le cadre d'une levée, d'une cession ou d'un rachat." }
  ];

  return (
    <div className="landing-dg" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' }}>
      
      {/* ═══ MODERN B2B AI REVENUE HEADER V1 (STITCH VISUAL) ═══ */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh',
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden',
        background: '#040710'
      }}>
        <style>
          {`
            @keyframes fadeBg {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes slidePerson {
              0%   { opacity: 0; transform: translateX(40px); }
              100% { opacity: 1; transform: translateX(0);    }
            }
            @keyframes fadeContent {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes drawSparkline {
              0% { stroke-dashoffset: 120; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes drawArc {
              0% { stroke-dasharray: 0 132; }
              100% { stroke-dasharray: 120 132; }
            }
            @keyframes popDot {
              0% { opacity: 0; r: 0; }
              70% { r: 4px; }
              100% { opacity: 1; r: 3px; }
            }
            @keyframes growBar {
              0% { height: 0; y: 30px; opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes glassShimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            .dg-kpi-card {
              background: rgba(8,15,35,0.6);
              border: 1px solid rgba(68,204,255,0.15);
              border-radius: 14px;
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              position: relative;
              overflow: visible;
            }
            .dg-kpi-card::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; height: 1px;
              background: linear-gradient(90deg, transparent, rgba(68,204,255,0.3), transparent);
              border-radius: 14px 14px 0 0;
            }
            .dg-kpi-card::after {
              content: '';
              position: absolute;
              top: 50%; left: 50%; width: 150px; height: 150px;
              background: radial-gradient(circle, rgba(68,204,255,0.05) 0%, transparent 70%);
              transform: translate(-50%, -50%);
              pointer-events: none;
            }
            @keyframes fadeGlow {
              0% { opacity: 0; transform: scale(0.8); }
              100% { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
        
        {/* Background Layer: ceofonds.png appears at 200ms */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("/ceofonds.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0,
          animation: 'fadeBg 1s ease 0.2s forwards',
          zIndex: 1
        }} />
        
        {/* Dark Gradient Overlay for text readability (matches left side of image) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to right, rgba(6,10,18,0.98) 0%, rgba(6,10,18,0.85) 45%, rgba(6,10,18,0) 80%)',
          zIndex: 2,
          opacity: 0,
          animation: 'fadeBg 1s ease 0.2s forwards'
        }} />
        
        {/* Fade bas : transition douce vers la section suivante (#050510), évite la coupe nette de l'image */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, width: '100%', height: '260px',
          background: 'linear-gradient(to bottom, transparent 0%, #050510 100%)',
          zIndex: 3,
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 4, display: 'flex', flexWrap: 'wrap', width: '100%', paddingTop: '150px', paddingBottom: '7rem', paddingLeft: '8%', paddingRight: '5%' }}>

          <div style={{ flex: '0 0 65%', maxWidth: '850px', paddingRight: '2rem' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              opacity: 0,
              animation: 'fadeContent 1.2s ease 0.3s forwards'
            }}>
              <span style={{ display: 'block' }}>Board, investisseurs, actionnaires</span>
              <span style={{ display: 'block' }}>Ce qu'ils jugent, c'est :</span>
              <span style={{ display: 'block' }}>Un système qu'on peut prouver.</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.78)',
              marginBottom: '3.5rem',
              maxWidth: '800px',
              lineHeight: 1.7,
              fontWeight: 400,
              opacity: 0,
              animation: 'fadeContent 1.2s ease 0.4s forwards'
            }}>
              Un board ou un investisseur ne juge pas une intention, il juge un chiffre. Squadia structure votre système de génération de revenus pour qu'il produise une preuve : pipeline fiable, données propres, résultats mesurables trimestre après trimestre.
            </p>
            
            {/* Cards container : Glassmorphisme premium + SVG animés */}
            <div style={{
              display: 'flex',
              gap: '1.2rem',
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeContent 1.2s ease 0.5s forwards'
            }}>

              {/* Styles partagés des cartes : identique kpi-card Home */}
              {(() => {
                const glassCard = {
                  flex: '1 1 190px',
                  padding: '1.2rem',
                  color: '#FFF',
                };
                return (
                  <>
                    {/* Card 1 : Performance globale */}
                    <div className="dg-kpi-card" style={glassCard}>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Performance globale</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>+31%</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                        <span style={{ color: '#44CCFF' }}>Croissance</span> 90 jours
                      </div>
                      {/* Sparkline : fill séparé sans stroke, ligne animée */}
                      <svg viewBox="0 0 100 32" width="100%" height="34" style={{ display: 'block', overflow: 'visible' }}>
                        <defs>
                          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#44CCFF" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#44CCFF" stopOpacity="0" />
                          </linearGradient>
                          <clipPath id="sparkClip">
                            <rect x="0" y="0" width="100" height="32" />
                          </clipPath>
                        </defs>
                        {/* Zone de remplissage : stroke none explicite */}
                        <path
                          d="M0 25 L20 28 L40 22 L60 14 L80 18 L100 0 L100 32 L0 32 Z"
                          fill="url(#fillGrad)"
                          stroke="none"
                          clipPath="url(#sparkClip)"
                        />
                        {/* Ligne principale animée */}
                        <path
                          d="M0 25 L20 28 L40 22 L60 14 L80 18 L100 0"
                          fill="none"
                          stroke="#44CCFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="200"
                          strokeDashoffset="200"
                          style={{ animation: 'drawSparkline 1.6s ease 0.9s forwards' }}
                        />
                        {/* Points séquentiels */}
                        {[[0,25],[20,28],[40,22],[60,14],[80,18],[100,0]].map(([cx,cy], i) => (
                          <circle key={i} cx={cx} cy={cy} r={i === 5 ? 3.5 : 2}
                            fill={i === 5 ? '#44CCFF' : 'rgba(68,204,255,0.7)'}
                            stroke={i === 5 ? 'rgba(68,204,255,0.3)' : 'none'}
                            strokeWidth={i === 5 ? 4 : 0}
                            style={{ opacity: 0, animation: `fadeContent 0.25s ease ${1.5 + i * 0.08}s forwards` }}
                          />
                        ))}
                      </svg>
                    </div>

                    {/* Card 2 : Alignement équipes */}
                    <div className="dg-kpi-card" style={{ ...glassCard, position: 'relative' }}>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Alignement équipes</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>9.1/10</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
                        <span style={{ color: '#44CCFF' }}>Marketing</span> × Ventes
                      </div>
                      {/* Arc gauge animé */}
                      <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', width: '52px', height: '52px' }}>
                        <svg viewBox="0 0 52 52" width="52" height="52" style={{ transform: 'rotate(-90deg)' }}>
                          <circle cx="26" cy="26" r="21" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4.5" />
                          <circle cx="26" cy="26" r="21" fill="none" stroke="#44CCFF" strokeWidth="4.5"
                            strokeLinecap="round"
                            strokeDasharray="0 132"
                            style={{ animation: 'drawArc 1.8s cubic-bezier(0.4,0,0.2,1) 0.9s forwards' }}
                          />
                        </svg>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 700, color: '#44CCFF', letterSpacing: '-0.03em' }}>9.1</div>
                      </div>
                    </div>

                    {/* Card 3 : Prochaine Initiative */}
                    <div className="dg-kpi-card" style={glassCard}>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Prochaine Initiative</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>CRM IA</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                        <span style={{ color: '#44CCFF' }}>Démarrage</span> J+14 : ROI ×3
                      </div>
                      {/* Barres animées avec hauteurs croissantes */}
                      <svg viewBox="0 0 90 30" width="90" height="30" style={{ display: 'block' }}>
                        {[
                          { x: 0,  h: 10, accent: false },
                          { x: 16, h: 16, accent: false },
                          { x: 32, h: 22, accent: false },
                          { x: 48, h: 30, accent: true  },
                          { x: 64, h: 18, accent: false },
                        ].map((b, i) => (
                          <rect key={i}
                            x={b.x} y={30 - b.h} width="12" height={b.h} rx="3"
                            fill={b.accent ? '#44CCFF' : 'rgba(68,204,255,0.25)'}
                            style={{ opacity: 0, animation: `fadeContent 0.35s ease ${0.9 + i * 0.12}s forwards` }}
                          />
                        ))}
                      </svg>
                    </div>
                  </>
                );
              })()}

            </div>


          </div>


        </div>
      </section>

      {/* ═══ SECTION 2 : VOS ENJEUX ═══ */}
      <section className="section-padding" style={{ background: '#050510', position: 'relative', overflow: 'hidden' }}>
        {/* Halo lumineux côté droit */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translateY(-50%)',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.65) 0%, transparent 65%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div className="container fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '4rem', textAlign: 'center' }}>Contraintes du dirigeant en 2026</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {enjeux.map((item, i) => (
              <div key={i} style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, #0d1b35 0%, #111f3a 60%, #0a1628 100%)',
                border: '1px solid rgba(68,204,255,0.12)',
                borderRadius: '16px',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.35)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.12)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)'; }}
              >
                <div style={{ marginBottom: '1.5rem', width: '44px', height: '44px', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(68,204,255,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.9rem', lineHeight: 1.4, color: '#F9FAFB' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, fontSize: '1rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 : CE QUE SQUADIA APPORTE ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '4rem', textAlign: 'center' }}>Comment Squadia travaille avec les dirigeants</h2>
          <div className="grid-2" style={{ gap: '2rem' }}>
            {apports.map((item, i) => (
              <div key={i} style={{ padding: '2.5rem', background: '#0D0D25', border: '1px solid #1A1A3A', borderLeft: '4px solid #44CCFF', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#F9FAFB' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, fontSize: '1rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3B : LA VISION SYSTEMIQUE ═══ */}
      <section style={{ backgroundColor: '#050510', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '10rem 2rem 0' }}>
          {/* En-tête pleine largeur */}
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>VISION SYSTÉMIQUE</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '3rem', lineHeight: 1.2, maxWidth: '900px' }}>
            Le système, avant l'outil
          </h2>
        </div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 10rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Texte à gauche */}
          <div style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Un dirigeant a rarement l'IA en tête de ses priorités. Il doit surtout prouver, trimestre après trimestre, que l'entreprise avance dans la bonne direction.
            </p>
            <p>
              Ce qui coûte cher, ce n'est pas l'absence d'outils. C'est l'absence de système : des données éparpillées, un pipeline invisible, des résultats difficiles à démontrer devant un board.
            </p>
            <p>
              L'IA accélère ce système une fois qu'il existe. Elle ne le remplace pas : sans base propre, elle amplifie le désordre au lieu de le résoudre.
            </p>
            <p>
              Chez Squadia, on structure ce système en premier. Ensuite, l'IA devient un accélérateur, pas un pari.
            </p>
          </div>

          {/* Visuel / Image à droite */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <img 
              src={ceoMeetingImg} 
              alt="Réunion stratégique COMEX" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '16px', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                display: 'block'
              }} 
            />
            <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontSize: '0.9rem', fontStyle: 'italic' }}>
              Nous aidons les dirigeants à transformer leur activité commerciale en un système qu'ils peuvent présenter à leur board en toute confiance.
            </p>
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

      {/* ═══ SECTION GUIDES GRATUITS ═══ */}
      <section style={{ padding: '10rem 2rem', backgroundColor: '#11111E' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>RESSOURCES</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '3rem', lineHeight: 1.2 }}>Guides gratuits pour vos équipes.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                category: 'Sales Manager',
                title: 'Mini-guide Sales Manager B2B : réussir vos 90 premiers jours',
                description: 'Méthodes éprouvées, plans d\'action, IA, outils et conseils pratiques pour réussir votre prise de poste et atteindre vos premiers résultats.',
                link: '/ressources/guide-sales-manager',
                image: imgSalesManager,
              },
              {
                category: 'Marketing Manager',
                title: 'Mini-guide Marketing Manager B2B : structurer et piloter votre strategie',
                description: 'Stratégie de contenu, pilotage de la demande, outils IA et KPIs marketing pour aligner vos actions sur les objectifs commerciaux.',
                link: '/ressources/guide-marketing-manager',
                image: imgMarketingManager,
              },
              {
                category: 'Channel Sales',
                title: 'Channel Sales Plan : structurer et piloter votre réseau de partenaires',
                description: 'Plan partenaire B2B clé en main : co-marketing, co-selling, KPIs trimestriels et rituels de pilotage pour développer votre channel.',
                link: '/ressources/channel-sales-plan',
                image: imgPlanPartenaire,
              },
            ].map((ressource, idx) => (
              <Link
                key={idx}
                href={ressource.link}
                className="ressource-card-link"
                style={{ textDecoration: 'none', display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(68,204,255,0.15)', borderRadius: '16px', overflow: 'hidden', color: '#FFFFFF', transition: 'border-color 0.3s, transform 0.3s', minHeight: '200px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div className="ressource-img-mobile" style={{ flex: 1, minHeight: '100%', overflow: 'hidden' }}>
                  <img src={ressource.image} alt={ressource.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ flex: 2, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ color: '#44CCFF', fontSize: '13px', fontWeight: 600, marginBottom: '12px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{ressource.category}</span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.25 }}>{ressource.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>{ressource.description}</p>
                  <span style={{ alignSelf: 'flex-start', background: '#FFFFFF', color: '#060612', padding: '10px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Télécharger gratuitement →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 : FAQ ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
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

      {/* ══ SECTION ARTICLES (À lire aussi) ══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem', textAlign: 'center' }}>RESSOURCES</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', textAlign: 'center', color: '#F9FAFB' }}>À lire aussi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '1200px', marginInline: 'auto' }}>

            <Link href="/blog/strategie-ia-pme-eti" className="cta-card" style={{ textDecoration: 'none', backgroundColor: '#0D0D25', border: '1px solid rgba(68,204,255,0.12)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.12)'; }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={blogStrategieIAImg} alt="Stratégie IA en PME et ETI" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(13,13,37,0.85))' }} />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, border: '1px solid rgba(139,92,246,0.4)', backgroundColor: 'rgba(139,92,246,0.12)', color: '#A78BFA', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Stratégie IA</span>
                <h3 style={{ fontSize: '1.25rem', lineHeight: 1.35, marginBottom: '1.5rem', flexGrow: 1, color: '#F9FAFB', fontWeight: 700 }}>Comment mettre en place une strategie IA en PME et ETI : séquence, outils et premiers résultats</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </div>
            </Link>

            <Link href="/blog/formation-ia-ou-automatisation" className="cta-card" style={{ textDecoration: 'none', backgroundColor: '#0D0D25', border: '1px solid rgba(68,204,255,0.12)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.12)'; }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={blogFormationAutomImg} alt="Formation IA ou automatisation" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(13,13,37,0.85))' }} />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, border: '1px solid rgba(68,204,255,0.35)', backgroundColor: 'rgba(37,99,235,0.12)', color: '#44CCFF', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Transformation</span>
                <h3 style={{ fontSize: '1.25rem', lineHeight: 1.35, marginBottom: '1.5rem', flexGrow: 1, color: '#F9FAFB', fontWeight: 700 }}>Formation IA ou automatisation des process : dans quel ordre transformer son entreprise ?</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION NOUVELLE : ILS NOUS FONT CONFIANCE */}
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
                <p style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.1, color: '#fff', margin: '0 0 8px' }}>Rejoignez-nous :</p>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: 0 }}>Découvrez comment nous pouvons aider<br/>à dynamiser votre organisation</h2>
              </div>
              <div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '420px', margin: '0 auto 32px' }}>30 minutes pour comprendre votre contexte et diagnostiquer une approche.</p>
                <Link href="/contact" style={{ fontSize: '1.1rem', fontWeight: 700, background: '#44CCFF', color: '#060612', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block', margin: '0 auto' }}>Prendre Rendez-Vous</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingDG;
