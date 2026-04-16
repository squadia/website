import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Zap, BarChart3, ArrowRight, ShieldCheck, Rocket, ChevronDown, CheckCircle2, Star } from 'lucide-react';
import ClientLogosSection from '../components/ui/ClientLogosSection';
import { casesData } from '../data/cases';
import pipelineImg from '../assets/images/pipeline-b2b.jpeg';
import formationImg from '../assets/images/formationB2B.png';
import transformerCRMImg from '../assets/images/transformerCRM.jpeg';
import imgSalesManager from '../assets/images/ressources/new-sales-manager.jpeg';
import imgMarketingManager from '../assets/images/ressources/new-marketing-manager.jpeg';
import imgPlanPartenaire from '../assets/images/ressources/plan-partenaire.jpeg';
import ceoMeetingImg from '../assets/images/salesdirecteur/ceomeeting.jpeg';

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
          fontSize: '1rem',
          fontWeight: 600,
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

const LandingDG = () => {
  useScrollReveal();
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    document.title = "Squadia pour les Directeurs Generaux — Strategie IA et systeme de croissance PME ETI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "57% des dirigeants testent des outils IA sans vision d ensemble. Squadia aide les DG de PME et ETI a transformer leur strategie en systeme de generation de revenus mesurable.";
    }
  }, []);

  const enjeux = [
    { title: 'Marketing et Ventes : parler le même langage', desc: "Le marketing produit des leads. Les commerciaux les trouvent mauvais. Le CRM n'est pas à jour. La performance globale souffre de chaque friction entre ces trois mondes, souvent en silence.", icon: <Target color="#44CCFF" /> },
    { title: "Gestion des retards de la Feuille de route", desc: "Les priorités sont posées. Les équipes sont là. Mais entre la vision stratégique et ce qui se passe sur le terrain, quelque chose coince toujours. Et souvent personne ne sait exactement où.", icon: <BarChart3 color="#44CCFF" /> },
    { title: "L'IT freine, Les métiers veulent aller plus vite", desc: "Des projets IA et automatisation attendent depuis des mois. Pas parce que les idées manquent, mais parce que sans cadre validé au niveau COMEX, l'IT bloque pour des raisons de sécurité ou de conformité. C'est le signe qu'il manque une gouvernance IA claire.", icon: <ShieldCheck color="#44CCFF" /> },
    { title: 'Continuer à motiver les troupes', desc: "Les meilleurs profils veulent travailler dans des entreprises qui avancent. Quand les outils sont obsolètes, les process lourds et les perspectives floues, la rétention devient un problème de fond.", icon: <Rocket color="#44CCFF" /> }
  ];

  const apports = [
    { title: 'Un diagnostic avant tout investissement', desc: "On commence par comprendre votre organisation réelle : usages IA existants, qualité des données, frictions entre équipes, maturité des outils. On arbitre ce qui vaut la peine d'être fait maintenant et ce qui peut attendre." },
    { title: 'Une stratégie modernisée, adaptée pour le Comex', desc: "Pas un plan théorique. Une feuille de route avec des cas d'usage priorisés, des pré-requis identifiés, une gouvernance claire et des indicateurs de pilotage. Ce que l'IT peut valider et ce que les métiers peuvent exécuter." },
    { title: 'Un système conçu par des acteurs robustes et fiables', desc: "Stratégie, leads, automatisation, formation. On intervient sur les 4 leviers en même temps ou séparément selon les priorités. L'objectif c'est un système cohérent, pas une accumulation de solutions." },
    { title: 'Des 1ers "quick win" en moins de 30 jours', desc: "Pas de transformation sur 18 mois avant de voir quelque chose. Les premiers livrables actionnables arrivent vite, et on mesure ce qui change." }
  ];

  const faqs = [
    { q: "Par où commencer quand on ne sait pas où l'IA peut vraiment aider ?", a: "On commence par un cadrage. On analyse votre organisation réelle, on identifie les cas d'usage à fort impact, on élimine ce qui ne vaut pas la peine. Ce travail de diagnostic prend 30 à 60 jours et produit une feuille de route exécutable." },
    { q: "Squadia intervient-il uniquement sur l'IA ?", a: "Non. L'IA est un levier parmi d'autres. On travaille sur le système complet : stratégie, génération de leads, automatisation des process, formation des équipes. L'IA n'est pas une finalité, c'est un moyen d'aller plus vite et plus loin." },
    { q: 'Peut-on commencer par une seule brique ?', a: "Oui. Stratégie, Leads, Automatisation et Formation peuvent être activés indépendamment selon les priorités du moment." },
    { q: "Comment justifier l'investissement au board ou aux actionnaires ?", a: "On construit les indicateurs de pilotage avec vous dès le départ. Chaque mission produit des livrables mesurables : temps gagné, pipeline amélioré, coûts réduits, adoption des équipes. Les résultats sont documentables et présentables." }
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
        
        {/* Person Image */}
        <div style={{
          position: 'absolute', bottom: 0, right: '5%',
          width: '45%',
          maxWidth: '800px',
          height: '92vh',
          backgroundImage: 'url("/ceonew.png")',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          zIndex: 3,
          opacity: 0,
          animation: 'slidePerson 3.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards'
        }} />

        {/* Glow Halo behind character */}
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '20%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(68, 204, 255, 0.45) 0%, rgba(68, 204, 255, 0.1) 50%, transparent 80%)',
          filter: 'blur(100px)',
          zIndex: 2,
          opacity: 0,
          animation: 'fadeGlow 2.5s ease 2s forwards',
          pointerEvents: 'none'
        }} />


        {/* Gradient fade + label — élément indépendant bord droit complet */}
        <div style={{
          position: 'absolute',
          bottom: 0, right: 0,
          width: '55%',
          height: '40%',
          background: 'linear-gradient(to top, rgba(6,6,18,0.88) 0%, rgba(6,6,18,0.52) 38%, rgba(6,6,18,0.12) 68%, transparent 100%)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          maskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: '5.5rem',
          pointerEvents: 'none'
        }}>
          <div style={{ fontSize: '1rem', fontWeight: 500, color: '#FFFFFF', marginBottom: '4px', textAlign: 'center' }}>
            Directeur Général
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(68,204,255,0.85)', textAlign: 'center' }}>
            Vision, cap et transformation
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 4, display: 'flex', flexWrap: 'wrap', width: '100%', paddingTop: '150px', paddingBottom: '7rem', paddingLeft: '8%', paddingRight: '5%' }}>

          <div style={{ flex: '0 0 65%', maxWidth: '850px', paddingRight: '2rem' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              opacity: 0,
              animation: 'fadeContent 1.2s ease 0.3s forwards'
            }}>
              <span style={{ display: 'block' }}>Vous avez la vision.</span>
              <span style={{ display: 'block' }}>Ce qui manque, c'est :</span>
              <span style={{ display: 'block' }}>Le système pour l'exécuter.</span>
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
              58% des dirigeants de PME et ETI considèrent l'IA comme un enjeu de survie. Mais 57% naviguent encore à vue, testant des outils sans vision d'ensemble ni méthode claire. Squadia structure ce qui permet de passer de la décision au résultat.
            </p>
            
            {/* Cards container — Glassmorphisme premium + SVG animés */}
            <div style={{
              display: 'flex',
              gap: '1.2rem',
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeContent 1.2s ease 0.5s forwards'
            }}>

              {/* Styles partagés des cartes — identique kpi-card Home */}
              {(() => {
                const glassCard = {
                  flex: '1 1 190px',
                  padding: '1.2rem',
                  color: '#FFF',
                };
                return (
                  <>
                    {/* Card 1 — Performance globale */}
                    <div className="dg-kpi-card" style={glassCard}>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Performance globale</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>+31%</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                        <span style={{ color: '#44CCFF' }}>Croissance</span> 90 jours
                      </div>
                      {/* Sparkline — fill séparé sans stroke, ligne animée */}
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
                        {/* Zone de remplissage — stroke none explicite */}
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

                    {/* Card 2 — Alignement équipes */}
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

                    {/* Card 3 — Prochaine Initiative */}
                    <div className="dg-kpi-card" style={glassCard}>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Prochaine Initiative</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>CRM IA</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                        <span style={{ color: '#44CCFF' }}>Démarrage</span> J+14 — ROI ×3
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

      {/* ═══ SECTION 2 — VOS ENJEUX ═══ */}
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
          <h2 style={{ fontSize: '2.25rem', marginBottom: '4rem', textAlign: 'center' }}>Contraintes du dirigeant en 2026</h2>
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

      {/* ═══ SECTION 3 — CE QUE SQUADIA APPORTE ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: '2.25rem', marginBottom: '4rem', textAlign: 'center' }}>Comment Squadia travaille avec les dirigeants</h2>
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

      {/* ═══ SECTION 3B — LA VISION SYSTEMIQUE ═══ */}
      <section style={{ backgroundColor: '#050510', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '10rem 2rem 0' }}>
          {/* En-tête pleine largeur */}
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>VISION SYSTÉMIQUE</p>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '3rem', lineHeight: 1.2, maxWidth: '900px' }}>
            L'IA, levier de croissance pour les dirigeants de PME ?
          </h2>
        </div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 10rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Texte à gauche */}
          <div style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Un dirigeant a rarement l'IA en tête de ses priorités. Il gère des équipes, des urgences, une concurrence qui s'accélère.
            </p>
            <p>
              Ce qui coûte, c'est de laisser 50% du temps de ses équipes partir en tâches administratives et saisies manuelles. Ce n'est pas un problème de motivation. C'est un problème de système.
            </p>
            <p>
              L'IA règle ça — et va plus loin : des interactions clients plus rapides, des services mieux personnalisés, une capacité à délivrer que vos concurrents ne proposent pas encore.
            </p>
            <p>
              Chez Squadia, on structure ce qui permet d'en tirer un impact réel. Sur vos équipes, vos process et l'expérience que vous offrez à vos clients.
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
              Nous aidons les membres du COMEX à transformer la vision en une feuille de route actionnable, validée par l'IT et adoptée par les métiers.
            </p>
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

      {/* ═══ SECTION GUIDES GRATUITS ═══ */}
      <section style={{ padding: '10rem 2rem', backgroundColor: '#11111E' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>RESSOURCES</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '3rem', lineHeight: 1.2 }}>Guides gratuits pour vos équipes.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                category: 'Sales Manager',
                title: 'Mini-guide Sales Manager B2B : réussir vos 90 premiers jours',
                description: 'Méthodes éprouvées, plans d\'action, IA, outils et conseils pratiques pour réussir votre prise de poste et atteindre vos premiers résultats.',
                link: '/guide-sales-manager',
                image: imgSalesManager,
              },
              {
                category: 'Marketing Manager',
                title: 'Mini-guide Marketing Manager B2B : structurer et piloter votre stratégie',
                description: 'Stratégie de contenu, pilotage de la demande, outils IA et KPIs marketing pour aligner vos actions sur les objectifs commerciaux.',
                link: '/guide-marketing-manager',
                image: imgMarketingManager,
              },
              {
                category: 'Channel Sales',
                title: 'Channel Sales Plan : structurer et piloter votre réseau de partenaires',
                description: 'Plan partenaire B2B clé en main : co-marketing, co-selling, KPIs trimestriels et rituels de pilotage pour développer votre channel.',
                link: '/channel-sales-plan',
                image: imgPlanPartenaire,
              },
            ].map((ressource, idx) => (
              <Link
                key={idx}
                to={ressource.link}
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

      {/* ═══ SECTION 5 — FAQ ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <div style={{ maxWidth: '800px', marginInline: 'auto' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '3rem', textAlign: 'center' }}>Questions fréquentes</h2>
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

      {/* ══ SECTION ARTICLES (À lire aussi) ══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem', textAlign: 'center' }}>RESSOURCES</p>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '3rem', textAlign: 'center', color: '#F9FAFB' }}>À lire aussi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '1000px', marginInline: 'auto' }}>

            <Link to="/blog/strategie-ia-pme-eti" style={{ textDecoration: 'none', background: 'linear-gradient(135deg, #0d1b35 0%, #111f3a 60%, #0a1628 100%)', border: '1px solid rgba(68,204,255,0.12)', borderRadius: '16px', padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.12)'; }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, border: '1px solid rgba(139,92,246,0.4)', backgroundColor: 'rgba(139,92,246,0.12)', color: '#A78BFA', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Stratégie IA</span>
              <h3 style={{ fontSize: '1.25rem', lineHeight: 1.35, marginBottom: '1.5rem', flexGrow: 1, color: '#F9FAFB', fontWeight: 700 }}>Comment mettre en place une stratégie IA en PME et ETI : séquence, outils et premiers résultats</h3>
              <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
            </Link>

            <Link to="/blog/formation-ia-ou-automatisation" style={{ textDecoration: 'none', background: 'linear-gradient(135deg, #0d1b35 0%, #111f3a 60%, #0a1628 100%)', border: '1px solid rgba(68,204,255,0.12)', borderRadius: '16px', padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.12)'; }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, border: '1px solid rgba(68,204,255,0.35)', backgroundColor: 'rgba(37,99,235,0.12)', color: '#44CCFF', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Transformation</span>
              <h3 style={{ fontSize: '1.25rem', lineHeight: 1.35, marginBottom: '1.5rem', flexGrow: 1, color: '#F9FAFB', fontWeight: 700 }}>Formation IA ou automatisation des process : dans quel ordre transformer son entreprise ?</h3>
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
            Vous voulez comprendre ce que Squadia peut changer pour votre organisation ?
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

export default LandingDG;
