import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform, useAnimation } from 'framer-motion';
import { 
  ChevronDown, Star, ArrowRight, ChevronRight,
  Brain, Database, Zap, GraduationCap, 
  Bot, Check, FileText, Layout, Play,
  Network, Share2, Cpu, AlertTriangle, Target, GitMerge,
  Volume2, VolumeX
} from 'lucide-react';
import VideoPlaceholder from '../components/ui/VideoPlaceholder';
import introVideo from '../assets/video/intro_home.mp4';
import marketingManagerVideo from '../assets/video/marketingmanager.mp4';
import salesManagerVideo from '../assets/video/salesmanager.mp4';
import salesman from '../assets/images/salesman.png';
import ceoVideo from '../assets/video/ceo.mp4';
import { casesData } from '../data/cases';

import happyComex from '../assets/images/happy-comex.jpeg';
import happyComexMobile from '../assets/images/happy-comex-mobile.png';
import pipelineImg from '../assets/images/pipeline-b2b.jpeg';
import formationImg from '../assets/images/formationB2B.png';
import transformerCRMImg from '../assets/images/transformerCRM.jpeg';

const caseImages = {
  'pipeline-b2b': pipelineImg,
  'formation-vente': formationImg,
  'crm-industrie': transformerCRMImg,
};

import CardFlip from '../components/ui/flip-card';

import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';
import fonds1 from '../assets/images/fonds1.png';
import fonds2 from '../assets/images/fonds2.png';
import s1 from '../assets/images/service1.png';
import s2 from '../assets/images/service2.png';
import s3 from '../assets/images/service3.png';
import s4 from '../assets/images/service4.png';

// Import Client Icons
import ceaAlsace from '../assets/images/icon/cea-alsace.png';
import ceaAtomique from '../assets/images/icon/cea-atomique.png';
import cofaq from '../assets/images/icon/cofaq.png';
import dell from '../assets/images/icon/dell-technologies.png';
import franceHydrogene from '../assets/images/icon/france-hydrogene.png';
import fujitsu from '../assets/images/icon/fujitsu.png';
import groupama from '../assets/images/icon/groupama.png';
import laPoste from '../assets/images/icon/groupe-la-poste.png';
import inocel from '../assets/images/icon/inocel.png';
import meotec from '../assets/images/icon/meotec.png';
import oracle from '../assets/images/icon/oracle.png';
import ovh from '../assets/images/icon/ovh-cloud.png';
import lyon from '../assets/images/icon/ville-de-lyon.png';
import xerox from '../assets/images/icon/xerox.png';

const getTagColor = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('lead')) return { border: '#2563EB', bg: 'rgba(37, 99, 235, 0.1)', text: '#2563EB' };
  if (t.includes('automatisation')) return { border: '#2563EB', bg: 'rgba(37, 99, 235, 0.1)', text: '#2563EB' };
  if (t.includes('strategie') || t.includes('stratégie')) return { border: '#2563EB', bg: 'rgba(37, 99, 235, 0.1)', text: '#2563EB' };
  if (t.includes('formation')) return { border: '#2563EB', bg: 'rgba(37, 99, 235, 0.1)', text: '#2563EB' };
  return { border: '#4B5563', bg: 'rgba(75, 85, 99, 0.1)', text: '#9CA3AF' };
};

const Tag = ({ children }) => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
  }}>
    {children}
  </span>
);

const caseLabels = {
  'pipeline-b2b': 'Leads',
  'crm-industrie': 'Stratégie',
  'formation-vente': 'Formation',
};

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  const bodyColor = 'rgba(255,255,255,0.6)';
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
          fontWeight: 500,
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
            color: bodyColor
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
        <div style={{ marginTop: '1rem', color: bodyColor, lineHeight: 1.6 }}>
          {answer}
        </div>
      </div>
    </div>
  );
}

const StrategyAccordion = ({ s1, s2, s3, s4 }) => {
  const [activeId, setActiveId] = useState(1);
  const items = [
    {
      id: 1,
      title: 'Stratégie',
      subtitle: "Aligner votre méthode et vos outils.",
      icon: <Target size={20} />,
      image: s1,
      link: '/strategie/commerciale',
      cta: "Découvrir nos Stratégies →",
      description: "Audit de vos processus, structuration de votre méthode de vente et architecture de votre CRM. Une base solide pour que l'IA et l'automatisation soient réellement efficaces."
    },
    {
      id: 2,
      title: 'Data B2B',
      subtitle: "Pour que vos données travaillent avant vos commerciaux.",
      icon: <Database size={20} />,
      image: s2,
      link: '/data',
      cta: "Découvrir Data B2B →",
      description: "Nettoyage, segmentation ICP, enrichissement et détection de signaux d'achat. Des contacts vérifiés, contextualisés, exploitables immédiatement."
    },
    {
      id: 3,
      title: 'Automatisation IA',
      subtitle: "Exécuter sans dépendre de ressources supplémentaires.",
      icon: <Zap size={20} />,
      image: s3,
      link: '/automatisation-ia',
      cta: "Découvrir Automatisation IA →",
      description: "CRM, prospection, marketing, contenus. Des workflows documentés, mesurables, que vos équipes maintiennent sans nous."
    },
    {
      id: 4,
      title: 'Formation IA métiers',
      subtitle: "Pour que vos équipes utilisent vraiment ce qu'on met en place.",
      icon: <GraduationCap size={20} />,
      image: s4,
      link: '/formation-ia',
      cta: "Découvrir Formation IA →",
      description: "Vente, marketing, communication. Des cas pratiques sur vos outils, vos enjeux, votre quotidien."
    }
  ];

  const activeItem = items.find(i => i.id === activeId);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveId(prev => (prev === items.length ? 1 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div style={{ padding: '0 2vw', position: 'relative' }}>
      {/* Soft Corner Halo - Bottom Right */}
      <div style={{
          position: 'absolute',
          bottom: '-150px',
          right: '-100px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, transparent 70%)',
          filter: 'blur(110px)',
          zIndex: 0,
          pointerEvents: 'none'
      }} />
      <div style={{ 
        position: 'relative',
        padding: '4rem 4rem', 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: '#0D0D25',
        borderRadius: '32px',
        border: '2px solid #44CCFF',
        color: '#FFFFFF',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem', textAlign: 'center' }}>Notre Système</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700, textAlign: 'center', color: '#FFFFFF', marginBottom: '3.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            De la Stratégie à l'Exécution
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.4fr)', 
            gap: '6rem', 
            alignItems: 'start', 
            minHeight: '480px'
          }}>
          
          {/* Accordion List */}
          <div>
            {items.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <div key={item.id} style={{ padding: '0.2rem 0' }}>
                  {/* Progress Bar (Dynamic) - No Track Background */}
                  <div style={{ 
                    height: '2px', 
                    width: '100%', 
                    background: 'transparent',
                    marginBottom: '10px',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    {isOpen && (
                      <div 
                        key={`bar-${activeId}`}
                        style={{ 
                          height: '100%', 
                          background: '#FFFFFF', 
                          animation: 'drawProgressAccordionHome 10s linear forwards' 
                        }} 
                      />
                    )}
                  </div>

                  <button
                    onClick={() => setActiveId(item.id)}
                    style={{ 
                      width: '100%', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start', 
                      padding: '0.5rem 0 1.2rem', 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer', 
                      textAlign: 'left' 
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: isOpen ? 700 : 400, 
                        color: isOpen ? '#F9FAFB' : 'rgba(255,255,255,0.65)',
                        margin: 0,
                        transition: 'color 0.2s ease, font-weight 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <span style={{ color: isOpen ? '#F9FAFB' : 'rgba(255,255,255,0.4)' }}>{item.icon}</span>
                        {item.title}
                      </h3>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ 
                              fontStyle: 'italic', 
                              color: '#44CCFF', 
                              fontSize: '13px', 
                              marginTop: '4px',
                              overflow: 'hidden'
                            }}
                          >
                            {item.subtitle}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    {isOpen ? (
                      <ChevronDown size={20} color="#2563EB" style={{ marginTop: '0.6rem', transition: 'color 0.2s' }} />
                    ) : (
                      <ChevronRight size={20} color="rgba(255,255,255,0.3)" style={{ marginTop: '0.6rem', transition: 'color 0.2s' }} />
                    )}
                  </button>
                  
                  <div style={{ 
                    maxHeight: isOpen ? '250px' : '0', 
                    overflow: 'hidden', 
                    transition: 'all 0.25s ease',
                    opacity: isOpen ? 1 : 0
                  }}>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.88)',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      marginTop: '8px',
                      paddingBottom: '1.5rem',
                      maxWidth: '90%'
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contextual Image & CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`media-block-${activeId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}
              >
                <div style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  aspectRatio: '16/9', 
                  background: '#0D0D25', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  width: '100%'
                }}>
                  <img 
                    src={activeItem.image} 
                    alt={activeItem.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                
                <Link to={activeItem.link} style={{ 
                  backgroundColor: '#2563EB', 
                  color: '#FFFFFF', 
                  fontWeight: 600, 
                  padding: '1.1rem 2.8rem', 
                  borderRadius: '8px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.25)',
                  transition: 'transform 0.2s ease'
                }}>
                  {activeItem.cta}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
        <style>{`
          @keyframes drawProgressAccordionHome {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
};

const Sparkline = () => (
  <svg width="100" height="30" viewBox="-5 -5 110 40" style={{ marginTop: '8px', overflow: 'visible' }}>
    <defs>
      <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#44CCFF" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#44CCFF" stopOpacity="0" />
      </linearGradient>
    </defs>
    <motion.path 
      d="M0 25 Q 10 25, 20 20 T 50 15 T 80 5 T 100 0 L 100 30 L 0 30 Z" 
      fill="url(#curveGradient)" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.6 }}
    />
    <path d="M0 10 h100 M0 20 h100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
    
    <motion.line x1="20" y1="20" x2="20" y2="30" stroke="rgba(68,204,255,0.25)" strokeDasharray="3,3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
    <motion.line x1="50" y1="15" x2="50" y2="30" stroke="rgba(68,204,255,0.25)" strokeDasharray="3,3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} />
    <motion.line x1="80" y1="5" x2="80" y2="30" stroke="rgba(68,204,255,0.25)" strokeDasharray="3,3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />
    
    <motion.path 
      d="M0 25 Q 10 25, 20 20 T 50 15 T 80 5 T 100 0" 
      stroke="#44CCFF" 
      strokeWidth="2" 
      fill="none" 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
    />
    
    {[20, 50, 80].map((cx, i) => {
      const cy = [20, 15, 5][i];
      const pointDelay = 0.4 + (i + 1) * 0.3;
      return (
        <g key={i}>
          <motion.circle cx={cx} cy={cy} r="7" stroke="#44CCFF" strokeOpacity="0.25" fill="none" 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: pointDelay, duration: 0.3 }} 
          />
          <motion.circle cx={cx} cy={cy} r="4" fill="#44CCFF" 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: pointDelay, duration: 0.3 }} 
          />
        </g>
      );
    })}
  </svg>
);

const ProgressBar = ({ progress = 70 }) => (
  <svg width="100" height="6" viewBox="-5 -5 110 16" style={{ marginTop: '12px', borderRadius: '3px', overflow: 'visible' }}>
    <rect width="100" height="6" fill="rgba(255,255,255,0.1)" rx="3" />
    <motion.rect 
      width="0" 
      height="6" 
      fill="#44CCFF" 
      rx="3" 
      animate={{ width: progress }}
      transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }} 
    />
  </svg>
);

const ArcGauge = ({ value = 72 }) => {
  const r = 17;
  const circumference = 2 * Math.PI * r; // 106.8
  const label = value === 72 ? "7.2/10" : `${value}%`;
  
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" style={{ marginLeft: 'auto', display: 'block', marginTop: '-15px', overflow: 'visible' }}>
      <circle cx="25" cy="25" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
      <motion.circle 
        cx="25" cy="25" r={r} 
        fill="none" 
        stroke="#44CCFF" 
        strokeWidth="5" 
        strokeOpacity="0.85"
        strokeLinecap="round"
        initial={{ strokeDasharray: `0 ${circumference}` }}
        animate={{ strokeDasharray: `${(value / 100) * circumference} ${circumference}` }}
        transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        transform="rotate(-90 25 25)"
      />
      <motion.text x="25" y="29" textAnchor="middle" fontSize="9" fontWeight="700" fill="#44CCFF"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.3 }}
      >
        {label}
      </motion.text>
    </svg>
  );
};

const PulsingDot = () => (
  <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', width: '8px', height: '8px' }}>
    <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(68,204,255,0.7)', animation: 'pulseDot 2s infinite' }} />
    <style>{`
      @keyframes pulseDot {
        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(68, 204, 255, 0.7); }
        70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(68, 204, 255, 0); }
        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(68, 204, 255, 0); }
      }
    `}</style>
  </div>
);

const slidesData = [
  {
    role: "Directeur Général",
    subtitle: "Pour les Directeurs Généraux",
    tagline: "Vision, cap et transformation",
    charImg: '/ceonew.png',
    bgImg: happyComex,
    blocks: [
      { top: "Performance globale", value: "+31%", accent: "Croissance", subtitle: "90 jours", graphic: <Sparkline /> },
      { top: "Alignement équipes", value: "7.2/10", accent: "Marketing", subtitle: "x Ventes", graphic: <ArcGauge value={72} /> },
      { top: "Prochaine initiative", value: "CRM IA", accent: "Démarrage", subtitle: "J+14 — ROI x3" }
    ]
  }
];

const HeroCSS = `
.hero-dynamic {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background: transparent;
}
.hero-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(to right, rgba(5,5,16,0.88) 0%, rgba(5,5,16,0.70) 35%, rgba(5,5,16,0.30) 60%, rgba(5,5,16,0.10) 80%, transparent 100%);
}
.hero-stats-compact {
  position: absolute;
  bottom: 11rem;
  left: 8%;
  display: flex;
  gap: 3rem;
  z-index: 7;
}
.stat-item-compact {
  display: flex;
  flex-direction: column;
}
.stat-num-compact {
  font-size: 22px;
  font-weight: 700;
  color: #44CCFF;
}
.stat-label-compact {
  font-size: 14px;
  color: var(--text-secondary);
}
.hero-dynamic * {
  box-sizing: border-box;
}
.hero-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
  z-index: 1;
}
.hero-bg-mobile  { display: none; }
.hero-bg-desktop { display: block; }
.hero-char-wrapper {
  position: absolute;
  top: 0; right: 0;
  width: 50%; height: 100%;
  z-index: 2;
  pointer-events: none;
}
.hero-char {
  position: absolute;
  left: 0; bottom: 0; width: 100%; height: 100%;
  object-fit: contain;
  object-position: bottom center;
}
.hero-char-entrance {
  animation: slideInFromRight 4s cubic-bezier(0.1, 0.5, 0.1, 1) forwards;
}
@keyframes slideInFromRight {
  0% { opacity: 0; transform: translateX(100%); }
  100% { opacity: 1; transform: translateX(-80px); }
}
.hero-left {
  position: absolute;
  top: 0; left: 0;
  width: 55%; height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 8%;
  padding-top: 18vh;
}
.hero-marquee-inline {
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 6;
  background: rgba(5, 5, 16, 0.15);
  padding: 1.5rem 0;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  mask-image: linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%);
}
.hero-marquee-row {
  display: flex;
  width: max-content;
  animation: heroScrollRight 45s linear infinite;
}
.hero-marquee-logo {
  height: 38px;
  width: auto;
  margin: 0 2.5rem;
  opacity: 0.7;
  transition: opacity 0.3s;
  filter: grayscale(1) brightness(1.8);
  object-fit: contain;
}
.hero-marquee-logo:hover {
  opacity: 1;
  filter: grayscale(0) brightness(1.3) drop-shadow(0 0 15px rgba(68, 204, 255, 0.5));
  transform: scale(1.1);
}
@keyframes heroScrollRight {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.hero-subtitle {
  color: rgba(68,204,255,0.8);
  font-size: 1.5rem;
  font-weight: 500;
  position: absolute;
  top: 0; left: 0;
}
.hero-subtitle-container {
  position: relative;
  height: 40px;
  margin-bottom: 2.5rem;
}
.hero-CTA {
  background: #2563EB;
  color: #fff;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;
}
.hero-CTA:hover {
  background: #1D4ED8;
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(37, 99, 235, 0.4);
}
.hero-kpi-wrapper {
  position: absolute;
  top: 15%; right: 5%;
  z-index: 4;
  width: 320px;
}
.hero-kpi-group {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.kpi-card {
  background: rgba(8,15,35,0.6);
  border: 1px solid rgba(68,204,255,0.15);
  border-radius: 14px;
  padding: 1.2rem;
  position: relative;
  backdrop-filter: blur(10px);
  overflow: visible;
}
.kpi-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(68,204,255,0.3), transparent);
}
.kpi-card::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%; width: 150px; height: 150px;
  background: radial-gradient(circle, rgba(68,204,255,0.05) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.kpi-top { color: #fff; font-weight: 500; font-size: 13px; margin-bottom: 0.5rem; }
.kpi-val { color: #fff; font-size: 1.8rem; font-weight: 600; margin-bottom: 0.2rem; }
.kpi-sub { color: rgba(255,255,255,0.5); font-weight: 400; font-size: 0.85rem; }
.kpi-accent { color: rgba(68,204,255,0.7); }
.hero-nav {
  position: absolute;
  bottom: 50px; left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  gap: 12px;
}
.hero-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(255,255,255,0.2);
  cursor: pointer; transition: background 0.3s ease;
  border: none; padding: 0;
}
.hero-dot.active { background: rgba(68,204,255,0.8); }
.marquee-wrapper-new {
  mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 3rem 0;
}
.marquee-row {
  display: flex;
  width: max-content;
}
.marquee-content-new {
  display: flex;
  gap: 4rem;
  padding-right: 4rem;
  will-change: transform;
}
.marquee-content-left {
  animation: scrollLeftNew 30s linear infinite;
}
.marquee-content-right {
  animation: scrollRightNew 42.8s linear infinite;
}
@keyframes scrollLeftNew {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scrollRightNew {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
.marquee-logo-new {
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--text-primary);
  white-space: nowrap;
}
.marquee-logo-new:hover {
  filter: none;
}

/* ── HERO MOBILE ── */
@media (max-width: 768px) {
  .hero-dynamic {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
  }
  /* Swap fond : version mobile */
  .hero-bg-mobile  { display: block; }
  .hero-bg-desktop { display: none !important; }

  /* Hero : hauteur pleine page fixe pour que l'image couvre tout */
  .hero-dynamic {
    height: 100svh !important;
    min-height: 100svh !important;
  }

  /* Masque renforcé en haut pour lisibilité du texte, léger au centre */
  .hero-mask {
    background: linear-gradient(
      to bottom,
      rgba(5,5,16,0.72) 0%,
      rgba(5,5,16,0.38) 40%,
      rgba(5,5,16,0.55) 70%,
      rgba(5,5,16,0.85) 100%
    ) !important;
  }
  /* Contenu gauche : flex column pleine hauteur → CTA descend en bas */
  .hero-left {
    position: relative !important;
    width: 100% !important;
    flex: 1 !important;
    height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    padding: 90px 1.4rem 1.5rem !important;
    z-index: 3;
  }
  /* KPI cards droite : masquées sur mobile */
  .hero-kpi-wrapper { display: none !important; }
  /* Stats */
  .hero-stats-compact {
    position: relative !important;
    bottom: auto !important;
    left: auto !important;
    padding: 1.5rem 1.4rem !important;
    gap: 0 !important;
    z-index: 5;
    justify-content: space-between !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .stat-item-compact {
    flex: 1;
    align-items: center !important;
    text-align: center !important;
  }
  .stat-num-compact  { font-size: 18px !important; }
  .stat-label-compact {
    font-size: 10px !important;
    line-height: 1.35 !important;
    text-align: center !important;
    white-space: normal !important;
    max-width: 80px;
  }
  /* Marquee logos */
  .hero-marquee-inline {
    position: relative !important;
    bottom: auto !important;
    margin-top: auto !important;
  }
  /* Titre hero */
  .hero-left h1 {
    font-size: clamp(2.2rem, 9vw, 2.8rem) !important;
    margin-bottom: 0 !important;
  }
  /* Sous-titre "Du diagnostic à l'impact." */
  .hero-left h1 .hero-diagnostic-span {
    font-size: 38px !important;
    margin-top: 0.75rem !important;
  }
  /* Texte secondaire "25 ans..." — plus gros et poussé vers le bas */
  .hero-left > div:nth-child(2) {
    font-size: 1.05rem !important;
    line-height: 1.65 !important;
    margin-top: 4.5rem !important;
    margin-bottom: 0 !important;
  }
  /* CTA button */
  .hero-CTA {
    width: 100% !important;
    justify-content: center !important;
    font-size: 1rem !important;
    padding: 0.9rem 1.5rem !important;
  }
  /* Logo marquee images */
  .hero-marquee-logo {
    height: 26px !important;
    margin: 0 1.5rem !important;
  }
  /* Vitesse du défilement logos sur mobile */
  .hero-marquee-row {
    animation-duration: 18s !important;
  }

  /* ── Réduction espacements sections ── */
  .section-padding {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }

  /* Accordion container : hauteur auto sur mobile */
  .container[style*="height: 820px"],
  .container[style*="height:820px"] {
    height: auto !important;
    min-height: 0 !important;
  }

  /* Section approche : padding réduit */
  .container[style*="padding: 10rem"],
  .container[style*="padding:10rem"] {
    padding-top: 2rem !important;
    padding-bottom: 3rem !important;
  }
}
`;

 


const HeroDynamic = React.memo(() => {
  const activeIndex = 0;
  const labelControls = useAnimation();
  const haloControls = useAnimation();

  useEffect(() => {
    // 1. Title Label (1.2s delay)
    labelControls.start({
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.8, ease: "easeOut" }
    });

    // 2. Blue Halo (1.8s delay - arrives last as requested)
    haloControls.start({
      opacity: 1,
      scale: 1,
      transition: { delay: 1.8, duration: 2, ease: "easeOut" }
    });
  }, [labelControls, haloControls]);

  return (
    <section className="hero-dynamic">
      {/* BACKGROUND desktop */}
      <motion.img
        src={slidesData[0].bgImg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-bg hero-bg-desktop"
        alt=""
      />
      {/* BACKGROUND mobile */}
      <img src={happyComexMobile} className="hero-bg hero-bg-mobile" alt="" />

      <div className="hero-mask" />
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '140px',
        pointerEvents: 'none',
        zIndex: 5,
        background: 'linear-gradient(to bottom, transparent, #050510)'
      }} />


      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '2.5rem', maxWidth: '750px' }}>
          Structurez votre système<br />
          de génération de revenus
          <span className="hero-diagnostic-span" style={{ fontFamily: "'Corinthia', cursive", fontSize: '63px', fontWeight: 400, color: '#fff', display: 'block', marginTop: '1.2rem', letterSpacing: '0.02em' }}>
            Du diagnostic à l'impact
          </span>
        </h1>
        
        <div style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', marginBottom: '3rem', fontWeight: 400, maxWidth: '650px', lineHeight: 1.6 }}>
          25 ans de vente B2B terrain. Squadia structure votre système commercial : stratégie, data, automatisation et formation.<br /><strong style={{ color: '#FFFFFF' }}>Premiers résultats en 30 jours.</strong>
        </div>

        <div>
          <a 
            href="#approche" 
            className="hero-CTA"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#approche')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Découvrir l'approche
          </a>
        </div>
      </div>

      <div className="hero-stats-compact">
        <div className="stat-item-compact">
          <div className="stat-num-compact">+20</div>
          <div className="stat-label-compact">ans d'expérience B2B</div>
        </div>
        <div className="stat-item-compact">
          <div className="stat-num-compact">+120</div>
          <div className="stat-label-compact">entreprises accompagnées</div>
        </div>
        <div className="stat-item-compact">
          <div className="stat-num-compact">+450</div>
          <div className="stat-label-compact">professionnels formés</div>
        </div>
      </div>

      <div className="hero-marquee-inline">
        <div className="hero-marquee-row">
          {[dell, xerox, ovh, laPoste, groupama, lyon, ceaAlsace, ceaAtomique, inocel, meotec, oracle, fujitsu, cofaq].map((src, i) => (
            <img key={`H1-${i}`} src={src} className="hero-marquee-logo" alt="Client" />
          ))}
          {[dell, xerox, ovh, laPoste, groupama, lyon, ceaAlsace, ceaAtomique, inocel, meotec, oracle, fujitsu, cofaq].map((src, i) => (
            <img key={`H1-copy-${i}`} src={src} className="hero-marquee-logo" alt="Client" />
          ))}
        </div>
      </div>
    </section>
  );
});

  const Home = () => {
    useScrollReveal();
    const [openFAQ, setOpenFAQ] = useState(0);
    const [bgColor, setBgColor] = useState('#0F2744');
    const [videoStarted, setVideoStarted] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);
    const videoRef = useRef(null);
    const section4Ref = useRef(null);
    const section8Ref = useRef(null);

    useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
      const interpolateColor = (c1, c2, factor) => {
        const r1 = parseInt(c1.substring(1, 3), 16), g1 = parseInt(c1.substring(3, 5), 16), b1 = parseInt(c1.substring(5, 7), 16);
        const r2 = parseInt(c2.substring(1, 3), 16), g2 = parseInt(c2.substring(3, 5), 16), b2 = parseInt(c2.substring(5, 7), 16);
        const r = Math.round(r1 + (r2 - r1) * factor), g = Math.round(g1 + (g2 - g1) * factor), b = Math.round(b1 + (b2 - b1) * factor);
        return `rgb(${r}, ${g}, ${b})`;
      };

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const off4 = (section4Ref.current?.offsetTop || 0) - 100;
        const off8 = (section8Ref.current?.offsetTop || 0) - 200;

        const t1Start = off4 - 400;
        const t1End = off4;
        const t2Start = off8 - 400;
        const t2End = off8;

        if (scrollY < t2Start) {
          setBgColor('#060612');
        } else if (scrollY < t2End) {
          const factor = Math.max(0, Math.min(1, (scrollY - t2Start) / (t2End - t2Start)));
          setBgColor(interpolateColor('#060612', '#050510', factor));
        } else {
          setBgColor('#050510');
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [activeStackIndex, setActiveStackIndex] = useState(0);
    const cardRefs = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index'));
              setActiveStackIndex(index);
            }
          });
        },
        { threshold: 0.5, rootMargin: '-80px 0px 0px 0px' }
      );

      cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
      });

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      document.title = "Squadia — Stratégie IA, CRM et Automatisation pour PME et ETI B2B";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', "Squadia accompagne les PME et ETI B2B dans leur croissance : stratégie IA, migration CRM, automatisation des processus et formation commerciale. Basé à Paris.");
      }
    }, []);

    useEffect(() => {
      // Desktop only — skip on mobile
      if (window.innerWidth <= 768) return;

      // Inject ElevenLabs script once
      if (!document.querySelector('script[src*="elevenlabs/convai-widget-embed"]')) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
        script.async = true;
        script.type = 'text/javascript';
        document.head.appendChild(script);
      }
      // Inject CSS to lift widget above the logos marquee band (~100px)
      if (!document.querySelector('#elevenlabs-widget-style')) {
        const style = document.createElement('style');
        style.id = 'elevenlabs-widget-style';
        style.textContent = `
          elevenlabs-convai {
            --bottom: 110px !important;
            bottom: 110px !important;
          }
        `;
        document.head.appendChild(style);
      }
      // Show widget after 3 seconds
      const timer = setTimeout(() => {
        if (!document.querySelector('elevenlabs-convai')) {
          const widget = document.createElement('elevenlabs-convai');
          widget.setAttribute('agent-id', 'TWYUafGgpOMApu1OinUj');
          document.body.appendChild(widget);
        }
      }, 3000);
      return () => {
        clearTimeout(timer);
        const widget = document.querySelector('elevenlabs-convai');
        if (widget) widget.remove();
      };
    }, []);

    return (
      <div className="home-page" style={{ backgroundColor: bgColor, color: '#F9FAFB', transition: 'background-color 0.1s ease-out' }}>
      {/* ═══ SECTION 1 — HERO ═══ */}
      <style>{HeroCSS}</style>

      <HeroDynamic />

      <section id="approche" ref={section4Ref} style={{ position: 'relative', backgroundColor: 'transparent' }}>
        <div className="container" style={{ padding: '10rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1.35fr', gap: '4rem', alignItems: 'start' }}>
            
            {/* Colonne Gauche (Video + Title Sticky) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              onViewportEnter={() => {
                if (videoRef.current) videoRef.current.play();
              }}
              style={{ position: 'sticky', top: '14vh' }}
            >
              {/* TITRE (Moved inside sticky column) */}
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.12em', fontSize: '0.9rem' }}>Le constat</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                  Vous sentez qu'il manque quelque chose.
                </h2>
                <div style={{ width: '50px', height: '4px', backgroundColor: '#44CCFF', borderRadius: '2px' }} />
              </div>

              <div style={{ position: 'relative' }}>
                {/* Intense Video Halo - Bottom Left */}
                <div style={{
                    position: 'absolute',
                    bottom: '-250px',
                    left: '-250px',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, transparent 70%)',
                    filter: 'blur(110px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <div 
                  onClick={() => {
                    if (videoRef.current) {
                      if (isMuted || videoRef.current.paused) {
                        videoRef.current.currentTime = 0;
                        setIsMuted(false);
                        videoRef.current.play();
                      } else {
                        videoRef.current.pause();
                      }
                    }
                  }}
                  style={{ 
                    maxWidth: '380px',
                    margin: '0',
                    aspectRatio: '3/4', 
                    backgroundColor: '#0D0D25', 
                    borderRadius: '20px', 
                    border: '5px solid #1A1A3A', 
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                    cursor: 'pointer',
                    zIndex: 1
                  }}
                >
                <video
                  ref={videoRef}
                  id="main-intro-video"
                  src={introVideo}
                  muted={isMuted}
                  autoPlay
                  playsInline
                  controls={videoStarted}
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onPlay={(e) => {
                    e.target.parentElement.setAttribute('data-playing', 'true');
                    setVideoStarted(true);
                  }}
                  onPause={(e) => e.target.parentElement.setAttribute('data-playing', 'false')}
                />
                
                {/* MUTE TOGGLE BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isMuted) {
                      if (videoRef.current) videoRef.current.currentTime = 0;
                      setIsMuted(false);
                      if (videoRef.current) videoRef.current.play();
                    } else {
                      setIsMuted(true);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    zIndex: 10,
                    background: 'rgba(5, 5, 16, 0.5)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(68, 204, 255, 0.3)',
                    borderRadius: '50%',
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#fff',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} color="#44CCFF" />}
                </button>

                {/* CENTRAL PLAY BUTTON */}
                <div className="play-button-overlay" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'rgba(68, 204, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(68, 204, 255, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 3
                }}>
                  <Play size={32} fill="#44CCFF" color="#44CCFF" style={{ marginLeft: '4px' }} />
                </div>

                <style>{`
                  [data-playing="true"] .play-button-overlay {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(1.2);
                    pointer-events: none;
                  }
                  .play-button-overlay:hover {
                    background-color: rgba(68, 204, 255, 0.35);
                    transform: translate(-50%, -50%) scale(1.1);
                  }
                `}</style>

                {/* CINEMATIC BLUR BAND (Full Width) */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  height: '100px', 
                  backdropFilter: 'blur(15px) brightness(0.6)',
                  WebkitBackdropFilter: 'blur(15px) brightness(0.6)',
                  maskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 1
                }} />
              </div>
            </div>
            </motion.div>

            {/* Colonne Droite (Stacking blocks) */}
            <div style={{ position: 'relative' }}>
                {[
                { 
                  tag: "IDENTIFICATION", 
                  title: '"On a besoin de quelqu\'un qui comprend le business et qui traduit nos besoins en exigences projet, avant que l\'IT ou l\'intégrateur n\'implémente quoi que ce soit"',
                  desc: "Les initiatives se multiplient, les outils aussi. Sans cadre de décision, chaque direction tire dans son sens et le budget part sans résultat visible.",
                  icon: Target
                },
                { 
                  tag: "ARTICULATION", 
                  title: '"Le marketing génère des leads. Les commerciaux nous disent que ce n\'est pas assez. Le CRM n\'est pas à jour."',
                  desc: "Marketing, ventes et outils ne parlent pas le même langage. Le pipeline souffre de chaque friction entre ces trois mondes, souvent en silence.",
                  icon: GitMerge
                },
                { 
                  tag: "EXÉCUTION", 
                  title: '"On a pris des habitudes avec le temps. Elles ne sont pas toutes bonnes. On doit pouvoir mieux organiser, mieux fédérer et délivrer."',
                  desc: "La feuille de route existe, les équipes sont là. Mais entre la vision et les résultats terrain, quelque chose coince toujours.",
                  icon: Zap
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-10% 0px -25% 0px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                position: isMobile ? 'relative' : 'sticky',
                top: isMobile ? 'auto' : '38vh',
                marginBottom: isMobile ? '1.5rem' : '30vh',
                zIndex: idx + 10,
                overflow: 'visible'
              }}
            >
                  {/* Folder Tab */}
                  <div style={{
                    position: 'absolute',
                    top: '-43px',
                    left: `min(${idx * 180}px, calc(${idx} * min(180px, 28vw)))`,
                    width: 'min(180px, 28vw)',
                    height: '44px',
                    backgroundColor: '#0D0D25',
                    border: '1px solid rgba(68, 204, 255, 0.2)',
                    borderBottom: 'none',
                    borderRadius: '14px 14px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3
                  }}>
                    <span style={{ 
                      fontSize: '0.82rem', 
                      fontWeight: 900, 
                      color: '#44CCFF', 
                      letterSpacing: '0.1em' 
                    }}>
                      {item.tag}
                    </span>
                    {/* Border Eraser: hides the body's top border under the tab */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-1px',
                      left: '0',
                      right: '0',
                      height: '2px',
                      backgroundColor: '#0D0D25',
                      zIndex: 4
                    }} />
                  </div>

                  {/* Folder Body */}
                  <div style={{
                    display: 'flex',
                    gap: '2.5rem',
                    padding: '4.5rem 2.5rem 2.5rem 2.5rem',
                    backgroundColor: '#0D0D25',
                    borderRadius: '0 1.5rem 1.5rem 1.5rem',
                    border: '1px solid rgba(68, 204, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.8)',
                    minHeight: '350px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {idx === 0 && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
                        filter: 'blur(100px)',
                        zIndex: -1,
                        pointerEvents: 'none'
                      }} />
                    )}

                    <div style={{ 
                      width: '64px', 
                      height: '64px', 
                      backgroundColor: 'rgba(68,204,255,0.08)', 
                      borderRadius: '14px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      border: '1px solid rgba(68,204,255,0.2)',
                      marginTop: '0' // Neutralized margin
                    }}>
                      <item.icon size={32} color="#44CCFF" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{ 
                        fontStyle: 'italic', 
                        color: '#F9FAFB', 
                        marginBottom: '1rem', 
                        fontSize: '1.25rem',
                        lineHeight: 1.4,
                        fontWeight: 500,
                        marginTop: '0' // Neutralized margin
                      }}>
                        {item.title}
                      </p>
                      <p style={{ 
                        color: 'rgba(255,255,255,0.45)', 
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                        marginTop: '1.5rem' // Standardized spacing
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div style={{ height: '80vh' }} /> 
            </div>
          </div>
        </div>
      </section>
              {/* ═══ SECTION 5 — STRATÉGIE ET EXÉCUTION (ACCORDION) ═══ */}
      <section id="systeme" className="section-padding" style={{ paddingTop: '5rem', backgroundColor: 'transparent' }}>
        <div className="container" style={{ height: '820px' }}>
          <StrategyAccordion s1={s1} s2={s2} s3={s3} s4={s4} />
        </div>
      </section>

      {/* ═══ SECTION 5B — PERSONAS TRIPTYCH ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#050510' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem' }}>POUR QUI</p>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              Une approche sur mesure selon votre rôle
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                img: c1,
                video: marketingManagerVideo,
                wordReveal: true,
                title: 'Marketing Team',
                subtitle: 'Leads, contenus et pipeline',
                text: "Le marketing qui génère du pipeline, pas juste de la visibilité. On aligne vos actions sur les objectifs commerciaux réels pour que chaque campagne contribue au chiffre.",
                link: '/directeur-marketing',
              },
              {
                img: salesman,
                video: salesManagerVideo,
                wordReveal: true,
                title: 'Sales Team',
                subtitle: 'Pipeline, deals et performance',
                text: "Un pipeline fiable, des commerciaux qui parlent le même langage, un CRM qui reflète la réalité terrain. On structure ce qui permet à vos équipes de vendre mieux, pas juste plus.",
                link: '/directeur-commercial',
              },
              {
                img: c3,
                video: ceoVideo,
                wordReveal: true,
                title: 'Executive Team',
                subtitle: 'Vision, cap et transformation',
                text: "Vous avez la stratégie. Ce qui manque, c'est le système pour l'exécuter. On structure l'ensemble — de la méthode commerciale aux outils — pour que vos décisions se traduisent en résultats mesurables.",
                link: '/directeur-general',
              },
            ].map((persona) => (
              /* Wrapper : contient le halo DERRIÈRE la carte */
              <div
                key={persona.title}
                style={{ position: 'relative' }}
                onMouseEnter={(e) => {
                  const halo = e.currentTarget.querySelector('.persona-halo');
                  const card = e.currentTarget.querySelector('.persona-card');
                  if (halo) halo.style.opacity = '1';
                  if (card) {
                    card.style.transform = 'translateY(-5px)';
                    card.style.borderColor = 'rgba(68,204,255,0.5)';
                    card.style.boxShadow = '0 0 40px 8px rgba(68,204,255,0.15)';
                  }
                  // Révélation mot par mot
                  e.currentTarget.querySelectorAll('.word-reveal-span').forEach((w, i) => {
                    w.style.transitionDelay = `${i * 140}ms`;
                    w.style.opacity = '1';
                  });
                }}
                onMouseLeave={(e) => {
                  const halo = e.currentTarget.querySelector('.persona-halo');
                  const card = e.currentTarget.querySelector('.persona-card');
                  if (halo) halo.style.opacity = '0';
                  if (card) {
                    card.style.transform = 'translateY(0)';
                    card.style.borderColor = 'rgba(255,255,255,0.07)';
                    card.style.boxShadow = 'none';
                  }
                  // Masquer les mots
                  e.currentTarget.querySelectorAll('.word-reveal-span').forEach((w) => {
                    w.style.transitionDelay = '0ms';
                    w.style.opacity = '0';
                  });
                }}
              >
                {/* Halo derrière la carte */}
                <div
                  className="persona-halo"
                  style={{
                    position: 'absolute',
                    top: '-90px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(68,204,255,0.9) 0%, rgba(37,99,235,0.5) 35%, transparent 65%)',
                    filter: 'blur(55px)',
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />

                {/* Carte */}
                <div
                  className="persona-card"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    background: '#0D0D25',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '640px',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                >
                <div
                  style={{ height: '310px', flexShrink: 0, overflow: 'hidden', position: 'relative' }}
                  onMouseEnter={(e) => {
                    if (window.innerWidth <= 768 || !persona.video) return;
                    const vid = e.currentTarget.querySelector('video');
                    if (vid) { vid.play(); vid.style.opacity = '1'; }
                  }}
                  onMouseLeave={(e) => {
                    const vid = e.currentTarget.querySelector('video');
                    if (vid) { vid.pause(); vid.currentTime = 0; vid.style.opacity = '0'; }
                  }}
                >
                  {/* Image statique — visible par défaut */}
                  <img
                    src={persona.img}
                    alt={persona.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  {/* Vidéo hover — desktop uniquement, invisible par défaut */}
                  {persona.video && window.innerWidth > 768 && (
                    <video
                      src={persona.video}
                      muted
                      loop
                      playsInline
                      preload="none"
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center top',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                  {/* Overlay gradient bas */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '80px',
                    background: 'linear-gradient(to top, #0A0A1A 0%, transparent 100%)',
                    zIndex: 3,
                    pointerEvents: 'none',
                  }} />
                </div>
                <div style={{ padding: '1.75rem 2rem 2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.4rem' }}>
                    {persona.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', fontWeight: 300, color: '#44CCFF', marginBottom: '1.2rem' }}>
                    {persona.subtitle}
                  </p>
                  {persona.wordReveal ? (
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, flex: 1 }}>
                      {persona.text.split(' ').map((word, i) => (
                        <span
                          key={i}
                          className="word-reveal-span"
                          style={{ opacity: 0, transition: 'opacity 0.5s ease', display: 'inline' }}
                        >{word}{' '}</span>
                      ))}
                    </p>
                  ) : (
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, flex: 1 }}>
                      {persona.text}
                    </p>
                  )}
                  <Link
                    to={persona.link}
                    style={{
                      marginTop: '1.75rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#44CCFF',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                    }}
                  >
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — CAS CLIENTS ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#050510' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem' }}>CAS CLIENTS</p>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              Résultats concrets
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: '700px', margin: '0 auto' }}>
              Actions réelles, impacts mesurables.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {casesData.filter(c => ['crm-industrie', 'pipeline-b2b', 'formation-vente'].includes(c.id)).map((c) => {
              const img = caseImages[c.id];
              return (
                <Link
                  key={c.id}
                  to={`/cas-clients/${c.id}`}
                  style={{
                    background: c.bgGradient || '#0D0D25',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '340px',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.card-overlay');
                    const image = e.currentTarget.querySelector('.card-img');
                    if (overlay) overlay.style.background = 'linear-gradient(to top, rgba(10,15,46,0.65) 20%, rgba(10,15,46,0.2) 100%)';
                    if (image) image.style.opacity = '0.55';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = 'rgba(68,204,255,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.card-overlay');
                    const image = e.currentTarget.querySelector('.card-img');
                    if (overlay) overlay.style.background = 'linear-gradient(to top, rgba(10,15,46,0.8) 30%, rgba(10,15,46,0.3) 100%)';
                    if (image) image.style.opacity = '0.38';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  }}
                >
                  {img && (
                    <img src={img} alt="" className="card-img" style={{
                      position: 'absolute', inset: 0, width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center',
                      opacity: 0.38, transition: 'opacity 0.4s ease', pointerEvents: 'none'
                    }} />
                  )}
                  <div className="card-overlay" style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,15,46,0.8) 30%, rgba(10,15,46,0.3) 100%)',
                    transition: 'background 0.4s ease', pointerEvents: 'none'
                  }} />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <Tag>{caseLabels[c.id] || c.tags[0]}</Tag>
                    <div style={{ marginTop: '1.2rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)' }}>
                      {c.shortTitle}
                    </div>
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
            <Link to="/cas-clients" style={{
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
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(68, 204, 255, 0.05)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              Voir tous les cas <ArrowRight size={18} style={{ marginLeft: '0.75rem' }} />
            </Link>
          </div>
        </div>
      </section>

      

      {/* ═══ SECTION 7 — FAQ ═══ */}
      <section className="section-padding">
        <div className="container fade-in">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Questions fréquentes</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { 
                q: "Faut-il avoir une stratégie IA définie pour travailler avec Squadia ?", 
                a: "Non. On intervient à toutes les étapes, y compris pour les entreprises qui partent de zéro et cherchent simplement à comprendre par où commencer." 
              },
              { 
                q: "Quelle est la différence entre Squadia et une agence marketing ou une ESN ?", 
                a: "Une agence travaille sur un levier. Une ESN déploie des outils. Squadia travaille sur le système complet : stratégie, données, outils, automatisation, formation. L'impact est toujours mesurable sur le pipeline et le chiffre d'affaires." 
              },
              { 
                q: "Peut-on activer une seule brique sans prendre tout le système ?", 
                a: <>Oui. <Link to="/strategie/commerciale" style={{ color: '#44CCFF', textDecoration: 'underline' }}>Stratégie</Link>, <Link to="/data" style={{ color: '#44CCFF', textDecoration: 'underline' }}>Data</Link>, <Link to="/automatisation-ia" style={{ color: '#44CCFF', textDecoration: 'underline' }}>Automatisation</Link> et <Link to="/formation-ia" style={{ color: '#44CCFF', textDecoration: 'underline' }}>Formation</Link> peuvent être activés indépendamment.</> 
              },
              { 
                q: "En combien de temps voit-on des résultats ?", 
                a: "Les premiers livrables actionnables arrivent en 30 à 60 jours. L'horizon dépend du périmètre et de la maturité de l'organisation." 
              },
              { 
                q: "Squadia travaille-t-il uniquement avec des grands groupes ?", 
                a: "Non. On accompagne des PME et ETI de 20 à 2 000 collaborateurs, en France, en présentiel ou à distance." 
              }
            ].map((faq, idx) => (
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
      </section>

      {/* ═══ SECTION 8 — CTA FINAL ═══ */}
      <section ref={section8Ref} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container fade-in" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', maxWidth: '800px', marginInline: 'auto', marginBottom: '3rem' }}>
            Prêt à transformer votre stratégie en système de génération de revenus ?
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn pulse" style={{ 
              backgroundColor: '#2563EB', 
              color: '#fff', 
              padding: '1rem 2.5rem', 
              fontSize: '1.1rem',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Prendre RDV
            </Link>
          </div>
        </div>
      </section>

      </div>
    );
  };

export default Home;
