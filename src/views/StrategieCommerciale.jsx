'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  BarChart2,
  Clock,
  Users,
  Target,
  CheckCircle,
  Check,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Activity,
  FileText,
  GraduationCap,
  Database,
  Zap,
  Play,
  VolumeX,
  Volume2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const bgCommercial = '/assets/images/stratcom/ceocommercial.jpeg';
const commercialMeeting = '/assets/images/commerciale-meeting.png';
const comstratVideo = '/assets/video/comstrat.mp4';
const imgSalesManager = '/assets/images/ressources/new-sales-manager.jpeg';
const imgMarketingManager = '/assets/images/ressources/new-marketing-manager.jpeg';
const imgPlanPartenaire = '/assets/images/ressources/plan-partenaire.jpeg';
const s1 = '/assets/images/service1.png';
const s2 = '/assets/images/service2.png';
const s3 = '/assets/images/service3.png';
const s4 = '/assets/images/service4.png';
import CtaSection from '../components/ui/CtaSection';
import ClientLogosSection from '../components/ui/ClientLogosSection';
import VideoPlaceholder from '../components/ui/VideoPlaceholder';

const StrategyAccordionCommerciale = () => {
  const [activeId, setActiveId] = useState(1);
  const items = [
    {
      id: 1,
      title: 'Diagnostic Commercial',
      subtitle: "Comprendre comment ça fonctionne vraiment.",
      icon: <Target size={20} />,
      image: s1,
      link: '/contact',
      cta: "Optimiser votre Stratégie →",
      description: "Audit des processus réels, identification des frictions entre métiers et état de la data existante. On part de ce qui existe chez vous, pas d'un template générique."
    },
    {
      id: 2,
      title: 'Méthode & Playbook',
      subtitle: "Pour que vos commerciaux parlent le même langage.",
      icon: <FileText size={20} />,
      image: s2,
      link: '/contact',
      cta: "Optimiser votre Stratégie →",
      description: "Pipeline structuré, étapes de vente formalisées, rituels managériaux définis. Ce qu'un commercial appelle un \"deal engagé\" veut dire la même chose du terrain au COMEX."
    },
    {
      id: 3,
      title: 'Architecture CRM',
      subtitle: "Un outil que vos équipes utilisent vraiment.",
      icon: <BarChart2 size={20} />,
      image: s3,
      link: '/contact',
      cta: "Optimiser votre Stratégie →",
      description: "Configuration adaptée à vos cycles de vente, automatisations ciblées, tableaux de bord par rôle. Le CRM devient un outil de pilotage, pas une contrainte administrative."
    },
    {
      id: 4,
      title: 'Formation & Adoption',
      subtitle: "Pour que le système vive sans nous.",
      icon: <GraduationCap size={20} />,
      image: s4,
      link: '/contact',
      cta: "Optimiser votre Stratégie →",
      description: "Vos commerciaux et managers formés sur vos cas, vos outils, vos objections réelles. L'autonomie comme objectif, pas la dépendance."
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
      <div style={{
        position: 'absolute', bottom: '-150px', right: '-100px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, transparent 70%)',
        filter: 'blur(110px)', zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'relative', padding: '4rem',
        maxWidth: '1200px', margin: '0 auto',
        backgroundColor: '#0D0D25', borderRadius: '32px',
        border: '2px solid #44CCFF', color: '#FFFFFF',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        zIndex: 1, overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem', textAlign: 'center' }}>Notre Système</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, textAlign: 'center', color: '#FFFFFF', marginBottom: '3.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            De la Stratégie à l'Exécution
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.4fr)', gap: '6rem', alignItems: 'start', minHeight: '480px' }}>
            <div>
              {items.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div key={item.id} style={{ padding: '0.2rem 0' }}>
                    <div style={{ height: '2px', width: '100%', background: 'transparent', marginBottom: '10px', borderRadius: '2px', overflow: 'hidden' }}>
                      {isOpen && (
                        <div key={`bar-${activeId}`} style={{ height: '100%', background: '#FFFFFF', animation: 'drawProgressAccordionCommerciale 10s linear forwards' }} />
                      )}
                    </div>
                    <button
                      onClick={() => setActiveId(item.id)}
                      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.5rem 0 1.2rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                    >
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: isOpen ? 700 : 400, color: isOpen ? '#F9FAFB' : 'rgba(255,255,255,0.65)', margin: 0, transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                              style={{ fontStyle: 'italic', color: '#44CCFF', fontSize: '13px', marginTop: '4px', overflow: 'hidden' }}
                            >
                              {item.subtitle}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                      {isOpen
                        ? <ChevronDown size={20} color="#2563EB" style={{ marginTop: '0.6rem' }} />
                        : <ChevronRight size={20} color="rgba(255,255,255,0.3)" style={{ marginTop: '0.6rem' }} />
                      }
                    </button>
                    <div style={{ maxHeight: isOpen ? '250px' : '0', overflow: 'hidden', transition: 'all 0.25s ease', opacity: isOpen ? 1 : 0 }}>
                      <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, fontSize: '1rem', marginTop: '8px', paddingBottom: '1.5rem', maxWidth: '90%' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`media-${activeId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}
                >
                  <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/9', background: '#0D0D25', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', width: '100%' }}>
                    <img src={activeItem.image} alt={activeItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <Link href={activeItem.link} style={{ backgroundColor: '#2563EB', color: '#FFFFFF', fontWeight: 600, padding: '1.1rem 2.8rem', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', fontSize: '1rem', textDecoration: 'none', boxShadow: '0 10px 25px rgba(37,99,235,0.25)', transition: 'transform 0.2s ease' }}>
                    {activeItem.cta}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <style>{`@keyframes drawProgressAccordionCommerciale { from { width: 0%; } to { width: 100%; } }`}</style>
      </div>
    </div>
  );
};

const StrategieCommercialeCSS = `
@keyframes pulseDotStrat {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(68,204,255,0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(68,204,255,0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(68,204,255,0); }
}
`;

export default function StrategieCommerciale() {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [activeStructureIdx, setActiveStructureIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef(null);

  const structureItems = [
    { 
      short: "Process vente", 
      full: <>Un processus de vente B2B<br />documenté et partagé</>, 
      desc: "De la prospection au closing, chaque étape est définie et reproductible. Les critères de qualification sont clairs. Tout le monde sait ce que signifie 'opportunité qualifiée' dans votre contexte.",
      icon: <Target size={24} />
    },
    { 
      short: "Sales Playbook", 
      full: <>Un sales playbook adapté<br />à vos cycles et cibles</>, 
      desc: "Méthode MEDDIC, plan de compte, gestion des objections, préparation stratégique. Un référentiel commun que vos équipes utilisent vraiment : pas un document oublié.", 
      icon: <FileText size={24} />
    },
    { 
      short: "Vente-Marketing", 
      full: <>Un alignement vente-marketing<br />sur le pipeline</>, 
      desc: "On définit ensemble ce qu'est un lead qualifié. On aligne les KPIs marketing sur les objectifs pipeline réels. Les commerciaux reçoivent des opportunités avec le bon contexte.", 
      icon: <Users size={24} />
    },
    { 
      short: "Pilotage KPI's",
      full: <>Un pilotage par les KPI's,<br />pas par l'instinct</>, 
      desc: "Taux de conversion, durée moyenne du cycle, valeur pondérée. Des indicateurs qui permettent au management d'anticiper, de décider et de corriger sans attendre la fin du mois.", 
      icon: <BarChart2 size={24} />
    }
  ];

  useEffect(() => {
    document.title = "Stratégie Commerciale B2B : Méthode et Performance : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia structure votre développement commercial B2B : pipeline fiable, méthode de vente documentée et alignement vente-marketing. Résultats en 30 jours.");
    }
  }, []);

  // Auto-rotation pour l'accordéon structure (5 secondes)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStructureIdx((prev) => (prev + 1) % structureItems.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [structureItems.length]);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start = null;
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const easing = -(Math.cos(Math.PI * percentage) - 1) / 2;
      window.scrollTo(0, startPosition + distance * easing);
      if (progress < duration) window.requestAnimationFrame(step);
    });
  };

  return (
    <>
      <div style={{ backgroundColor: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', paddingBottom: '4rem', fontFamily: '"Open Sans", Arial, sans-serif' }}>
        
        {/* SECTION 1 : HERO */}
        <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          <style>{StrategieCommercialeCSS}</style>
          <img src={bgCommercial} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,26,0.55)', zIndex: 1 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(10,10,26,0.97) 0%, rgba(10,10,26,0.6) 60%, transparent 100%)', zIndex: 2 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(to bottom, transparent, #0A0A1A)', }} />
          


          <div style={{ position: 'relative', zIndex: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '8%' }}>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '900px' }}>
              Votre organisation commerciale<br />a tout pour réussir.<br />Il manque juste le bon système
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', maxWidth: '700px', marginBottom: '3rem', lineHeight: 1.5 }}>
              Marketing et ventes ne parlent pas le même langage. Le CRM ne reflète pas le terrain. Les prévisions reposent sur de l'optimisme. Vous le savez. La question c'est par où commencer.
            </motion.p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={(e) => smoothScroll(e, 'diagnostic')} style={{ backgroundColor: '#2563EB', color: '#fff', padding: '1.2rem 2.5rem', borderRadius: '0.5rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1.05rem' }}>Notre Constat du Terrain</button>
            </div>
          </div>
        </section>

        {/* SECTION 2 : DIAGNOSTIC */}
        <section id="diagnostic" style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '25vh' }}>
              <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>CE QU'ON OBSERVE SYSTÉMATIQUEMENT</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '2rem', lineHeight: 1.2 }}>Dans vos comptes-rendus, vos meetings et votre CRM.</h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: '#2563EB', borderRadius: '2px', marginBottom: '2rem' }} />
              
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-200px',
                  left: '-150px',
                  width: '500px',
                  height: '500px',
                  background: 'radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, transparent 70%)',
                  filter: 'blur(100px)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
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
                    src={comstratVideo}
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
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingTop: '10rem' }}>
              {[
                { 
                  title: "Discours fragmenté", 
                  desc: "20 commerciaux, 20 versions de l'entreprise. Le discours de marque s'efface derrière les habitudes individuelles." 
                },
                { 
                  title: "Méthode non transmissible", 
                  desc: "Les seniors vendent au feeling, les juniors imitent sans comprendre. La performance dépend des individus, pas du système." 
                },
                { 
                  title: "Pilotage informel", 
                  desc: "Pas de rituels structurés, pas de KPIs partagés. L'information circule mal entre le terrain et le management." 
                },
                { 
                  title: "CRM sous-exploité", 
                  desc: "Saisies incomplètes et données floues. Le management décide sur des intuitions, faute de visibilité réelle." 
                }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ 
                    flexShrink: 0, 
                    width: '40px', 
                    height: '40px', 
                    minWidth: '40px',
                    minHeight: '40px',
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(37, 99, 235, 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid rgba(37, 99, 235, 0.3)'
                  }}>
                    <CheckCircle size={20} color="#2563EB" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.6rem', lineHeight: 1.3 }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2.2 : COMMENT ON TRAVAILLE */}
        <section style={{ backgroundColor: '#0A0A1A', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '8rem 2rem 0' }}>
            {/* En-tête pleine largeur */}
            <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>COMMENT NOUS TRAVAILLONS</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '3rem', lineHeight: 1.2 }}>Immersion sur le terrain avec votre équipe.</h2>
          </div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            {/* Texte à gauche */}
            <div style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
<p><span style={{ color: '#F9FAFB', fontWeight: 600 }}>80% des acheteurs estiment que les commerciaux ne les ont pas compris.</span> Quand on a la tête dans le guidon, s'auto-évaluer est toujours compliqué. Quelques ajustements suffisent souvent à changer les résultats :</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: 0 }}>
                <li>— une présentation mieux préparée,</li>
                <li>— une objection mieux reformulée,</li>
                <li>— une découverte poussée plus loin.</li>
              </ul>
              <p>Encore faut-il les voir depuis l'extérieur.</p>
              <p style={{ color: '#F9FAFB', fontWeight: 600 }}>Ce que nous structurons après, vos équipes l'adoptent. Parce que ça vient de leur réalité, pas d'un template.</p>
            </div>
            {/* Image + texte à droite */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img
                src={commercialMeeting}
                alt="Réunion commerciale"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
              />
              <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontSize: '0.85rem', fontStyle: 'italic' }}>
                Selon le périmètre, nous passons du temps avec vos équipes sur le terrain avant de construire quoi que ce soit. Nous observons, nous identifions ce qui coince et ce qui fonctionne sans avoir jamais été structuré.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 : EXPANDING ACCORDION */}
        <section id="structure" style={{ backgroundColor: '#11111E' }}>
        <div style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, marginBottom: '4rem', textAlign: 'center', color: '#F9FAFB' }}>
            Ce que nous structurons <span style={{ color: '#44CCFF' }}>concrètement.</span>
          </h2>
          
          <div style={{ display: 'flex', gap: '1rem', minHeight: '350px' }}>
            {structureItems.map((item, idx) => {
              const isActive = activeStructureIdx === idx;
              return (
                <motion.div
                  key={idx}
                  layout
                  onClick={() => setActiveStructureIdx(idx)}
                  style={{
                    flex: isActive ? 2.5 : 1,
                    backgroundColor: isActive ? 'rgba(68,204,255,0.05)' : '#11111E',
                    border: isActive ? '2px solid #44CCFF' : '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '1.5rem',
                    padding: isActive ? '2.4rem 1.4rem' : '2.5rem 1.5rem',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'background-color 0.3s'
                  }}
                >
                  <motion.div 
                    layout
                    style={{ 
                      width: '48px', height: '48px', 
                      minWidth: '48px', maxWidth: '48px',
                      minHeight: '48px', maxHeight: '48px',
                      borderRadius: '12px', 
                      background: isActive ? '#44CCFF' : 'rgba(255,255,255,0.05)', 
                      color: isActive ? '#0A0A1A' : '#44CCFF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.5rem',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {isActive ? (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.2rem' }}>{item.full}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.desc}</p>
                    </motion.div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap', marginTop: '0.5rem' }}>{item.short}</h3>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
        </section>

        {/* SECTION : DE LA STRATÉGIE À L'EXÉCUTION */}
        <section style={{ padding: '6rem 0', backgroundColor: '#11111E' }}>
          <StrategyAccordionCommerciale />
        </section>

        {/* SECTION RESSOURCES */}
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
                  title: 'Mini-guide Marketing Manager B2B : structurer et piloter votre stratégie',
                  description: 'Stratégie de contenu, pilotage de la demande, outils IA et KPIs marketing pour aligner vos actions sur les objectifs commerciaux.',
                  link: '/ressources/guide-marketing-manager',
                  image: imgMarketingManager,
                },
                {
                  category: 'Channel Sales',
                  title: 'Channel Sales Plan : structurer et piloter votre réseau de partenaires',
                  description: 'Plan partenaire B2B clé en main : co-marketing, co-selling, KPIs trimestriels et rituels de pilotage pour développer votre channel.',
                  link: '/ressources/channel-sales-plan',
                  image: imgPlanPartenaire,
                },
              ].map((ressource, idx) => (
                <Link
                  key={idx}
                  href={ressource.link}
                  style={{ textDecoration: 'none', display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(68,204,255,0.15)', borderRadius: '16px', overflow: 'hidden', color: '#FFFFFF', transition: 'border-color 0.3s, transform 0.3s', minHeight: '200px' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {/* Image à gauche */}
                  <div style={{ flex: 1, minHeight: '100%', overflow: 'hidden' }}>
                    <img src={ressource.image} alt={ressource.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  {/* Contenu à droite */}
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

        {/* PRICING SECTION : STYLE TARIFS */}
        <section style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>NOS TARIFS</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem' }}>
              Une approche modulable par briques.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.45)', maxWidth: '700px', marginInline: 'auto' }}>
              Chaque mission Squadia commence par un RDV avec un expert pour définir ensemble le périmètre exact avant de démarrer.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Stratégie Commerciale',
                subtitle: "Pour structurer votre méthode de vente, fiabiliser votre pipeline et aligner vos équipes.",
                items: [
                  "Sales playbook et méthode de qualification",
                  "Rituels de pilotage et indicateurs",
                  "Ateliers terrain (cas réels)",
                  "Feuille de route 30/60/90 jours"
                ],
                price: '3 490 € HT',
                prefix: 'À partir de',
                badge: null
              },
              {
                title: 'Migration CRM',
                subtitle: "Pour déployer un CRM que vos équipes utilisent vraiment : de l'audit à l'adoption.",
                items: [
                  "Audit des processus et données",
                  "Configuration cycles de vente",
                  "Migration sans perte de données",
                  "Formation et activation des équipes"
                ],
                price: '5 990 € HT',
                prefix: 'À partir de',
                badge: 'RECOMMANDÉ'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0D0D25',
                  border: card.badge ? '2px solid #2563EB' : '1px solid #1A1A3A',
                  padding: '3rem 2rem',
                  borderRadius: '1rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {card.badge && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#2563EB', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700 }}>
                    {card.badge}
                  </div>
                )}
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '2.5rem', minHeight: '3rem', lineHeight: 1.6 }}>{card.subtitle}</p>

                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#F9FAFB', whiteSpace: 'nowrap' }}>
                    {(() => {
                      let displayPrice = card.price;
                      let prefix = card.prefix;

                      return (
                        <>
                          {prefix && (
                            <span style={{ fontSize: '1.1rem', color: '#9CA3AF', fontWeight: 400, marginRight: '0.4rem' }}>{prefix}</span>
                          )}
                          {displayPrice}
                        </>
                      );
                    })()}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '0.5rem' }}>Périmètre ajusté avant démarrage.</p>
                </div>

                <div style={{ flexGrow: 1, marginBottom: '2.5rem' }}>
                  {card.items.map((li, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'flex-start' }}>
                      <Check size={18} color={card.badge ? "#2563EB" : "#44CCFF"} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>{li}</span>
                    </div>
                  ))}
                </div>

                <button onClick={(e) => smoothScroll(e, 'hero')} style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', border: card.badge ? 'none' : '1px solid rgba(255,255,255,0.2)', background: card.badge ? '#2563EB' : 'transparent', color: '#FFFFFF', cursor: 'pointer', transition: 'all 0.3s' }}>
                  Prendre RDV
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION NOUVELLE : ILS NOUS FONT CONFIANCE */}
        <ClientLogosSection />

        {/* SECTION 7 : FAQ */}
        <section style={{ padding: '10rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem', color: '#F9FAFB' }}>Questions fréquentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: "On a déjà essayé de mettre en place une méthode de vente. Ça n'a pas tenu. Pourquoi ce serait différent cette fois ?",
                a: "Parce que la plupart des méthodes échouent pour la même raison : elles sont imposées de l'extérieur sans partir de ce qui existe déjà dans l'organisation. On commence par comprendre comment vos équipes travaillent vraiment avant de construire quoi que ce soit. Ce qu'on met en place, vos commerciaux le reconnaissent : parce que ça vient d'eux."
              },
              {
                q: "Mes seniors sont là depuis longtemps. Ils ne vont pas accepter qu'on leur dise comment vendre.",
                a: "C'est la résistance la plus fréquente : et la plus légitime. Un senior qui vend depuis 15 ans n'a pas besoin qu'on lui apprenne à vendre. Ce qu'on structure, c'est un référentiel commun qui capitalise sur ce que les meilleurs font déjà. On formalise leurs bons réflexes autant qu'on comble les angles morts. La méthode devient un outil pour eux, pas une contrainte imposée sur eux."
              },
              {
                q: "Est-ce que vous intervenez uniquement sur la méthode de vente ou aussi sur le management commercial ?",
                a: "Les deux sont liés. Une méthode sans rituels de pilotage ne tient pas. On structure les deux en même temps : les étapes de vente et les critères de qualification d'un côté, les weekly, monthly et quarterly de l'autre. Le management a besoin de visibilité pour piloter. Les commerciaux ont besoin d'un cadre pour performer. On ne peut pas faire l'un sans l'autre."
              },
              {
                q: "Comment se passe concrètement le démarrage d'une mission ?",
                a: "On commence par un échange de qualification pour comprendre votre situation réelle : comment votre équipe est organisée, ce qui fonctionne, ce qui coince, ce que vous avez déjà essayé. Si le périmètre fait sens pour les deux parties, on cadre la mission : objectifs, livrables, calendrier : avant de démarrer. Rien ne commence sans un accord clair sur ce qu'on cherche à obtenir ensemble."
              },
              {
                q: "En combien de temps voit-on des résultats ?",
                a: "Les premiers effets visibles arrivent en 30 à 60 jours : un langage commun sur le pipeline, des rituels en place, des critères de qualification partagés. Les effets sur la performance commerciale réelle : taux de conversion, vélocité du cycle, fiabilité des prévisions : se mesurent sur 3 à 6 mois. On intègre les indicateurs de suivi dès le départ pour que vous puissiez mesurer ce qui change."
              },
              {
                q: "On n'a pas de CRM structuré. Est-ce que c'est un prérequis pour travailler avec vous ?",
                a: "Non. On intervient à partir de ce qui existe. Si le CRM n'est pas en place ou mal configuré, ça fait partie du diagnostic. La migration CRM peut être intégrée à la mission ou activée dans un second temps selon les priorités. On ne conditionne pas le démarrage à un outil."
              },
              {
                q: "Quelle est la différence entre ce que vous faites et ce que ferait un consultant RH ou un cabinet de formation commerciale ?",
                a: "Un cabinet de formation arrive avec un programme. Un consultant RH travaille sur les profils et les organisations. Squadia part du terrain commercial réel : comment vos équipes vendent aujourd'hui, où elles perdent du temps, où elles perdent des deals. Ce qu'on construit est spécifique à votre cycle de vente, vos cibles, vos situations. Pas un programme standard adapté à la marge."
              },
              {
                q: "Est-ce que vous pouvez intervenir sur une seule partie : par exemple uniquement les rituels de pilotage ou uniquement le sales playbook ?",
                a: "Oui. Chaque composante peut être activée indépendamment selon ce qui est prioritaire. Si le diagnostic montre que le problème principal est l'absence de rituels, on commence par là. Si c'est le discours commercial qui varie d'un commercial à l'autre, on commence par le playbook. Le périmètre est cadré ensemble avant démarrage."
              }
            ].map((faq, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    padding: '1.5rem 0',
                    opacity: isOpen ? 1 : 0.45,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#F9FAFB',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      textAlign: 'left',
                      padding: 0
                    }}
                  >
                    <span style={{ paddingRight: '1rem' }}>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color={isOpen ? "#44CCFF" : "#9CA3AF"}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease-in-out',
                      color: 'rgba(255,255,255,0.45)',
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}
                  >
                    <div style={{ paddingTop: '1.2rem' }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 8 : CTA FINAL */}
        <CtaSection
          headline="Votre équipe prête à l'action."
          description="Une fois votre stratégie commerciale établie, il vous faut redescendre l'information à vos équipes et aligner avec la même approche de vente."
          cardTitle="IA pour la vente"
          cardSubtitle="Former votre équipe commerciale"
          cardDescription="Méthode de vente, Approche Grands Comptes, Jeu de rôle : formez vos équipes à vendre avec l'IA."
          cardFeatures={[
            "Analyse stratégique compte",
            "Qualification & Meddic",
            "Construction plan de compte",
            "C-level + jeu de rôle"
          ]}
          cardColor="#2563EB"
        />

      </div>
    </>
  );
}

