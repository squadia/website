import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Database, 
  Settings, 
  LineChart, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  Star,
  Check
} from 'lucide-react';

import fondCrm from '../assets/images/use-crm.jpeg';

import crmVideo from '../assets/video/migration_crm.mp4';
import CtaSection from '../components/ui/CtaSection';
import ClientLogosSection from '../components/ui/ClientLogosSection';
import { Play, VolumeX, Volume2, ArrowRight } from 'lucide-react';

// Import Cases Data
import { casesData } from '../data/cases';
import pipelineImg from '../assets/images/pipeline-b2b.jpeg';
import formationImg from '../assets/images/formationB2B.png';
import transformerCRMImg from '../assets/images/transformerCRM.jpeg';

// Import Tech Logos
import logoHubspot from '../assets/images/migration/logo/logo-hubspot.png';
import logoPipedrive from '../assets/images/migration/logo/logo-pipedrive.webp';
import logoApollo from '../assets/images/migration/logo/logo-apollo.png';
import logoLemlist from '../assets/images/migration/logo/logo-lemlist.png';
import logoGong from '../assets/images/migration/logo/logo-gong.png';
import logoAirtable from '../assets/images/migration/logo/logo-airtable.png';
import logoRingover from '../assets/images/migration/logo/logo-ringover.png';
import logoTally from '../assets/images/migration/logo/logo-tally.png';
import logoVideoask from '../assets/images/migration/logo/logo-videoask.png';
import logoClaude from '../assets/images/migration/logo/logo-claudeai.webp';
import logoFramer from '../assets/images/migration/logo/logo-framer.png';

// Import Migration Images
import migrationProcess from '../assets/images/migration/migration-process.jpeg';
import migrationData from '../assets/images/migration/migration-data.jpeg';
import migrationMeeting from '../assets/images/migration/migration-meeting.jpeg';
import migrationTraining from '../assets/images/migration/migration-training.jpeg';

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

const features = (img1, img2, img3, img4) => [
  {
    id: 1,
    title: 'Audit des processus réels',
    image: img1,
    description: 'On comprend comment vos équipes travaillent vraiment — pas comment elles sont censées travailler. Processus réels, usages actuels, points de friction.',
  },
  {
    id: 2,
    title: 'Migration propre & dédupliquée',
    image: img2,
    description: 'Nettoyage des données avant migration, mapping rigoureux, tests de validation. On ne transfère pas le problème dans un nouvel outil.',
  },
  {
    id: 3,
    title: 'Configuration cycles de vente',
    image: img3,
    description: 'Étapes du pipeline, critères de qualification, champs personnalisés, automatisations. Tout est construit avec les équipes terrain.',
  },
  {
    id: 4,
    title: 'Adoption & Formation terrain',
    image: img4,
    description: 'On implique les commerciaux dès le cadrage. La formation se fait sur vos cas réels. Résultat : le CRM est utilisé par choix, pas par contrainte.',
  }
];

const AccordionFeatures = ({ img1, img2, img3, img4 }) => {
  const [activeId, setActiveId] = React.useState(1);
  const items = features(img1, img2, img3, img4);
  const activeItem = items.find(f => f.id === activeId);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveId(prev => prev === items.length ? 1 : prev + 1);
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
      <section style={{ 
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
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem', textAlign: 'center' }}>Livrables</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700, textAlign: 'center', color: '#FFFFFF', marginBottom: '3.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Un CRM que vos équipes <span style={{ textDecoration: 'underline' }}>adoptent.</span>
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', 
            gap: '6rem', 
            alignItems: 'start',
            minHeight: '480px'
          }}>
            <div>
              {items.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div key={item.id} style={{ padding: '0.2rem 0' }}>
                    {/* Progress Bar (Dynamic) */}
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
                          key={`progress-${activeId}`} 
                          style={{ 
                            height: '100%', 
                            background: '#FFFFFF', 
                            animation: 'drawProgressAccordionCrm 10s linear forwards' 
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
                          {item.title}
                        </h3>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#2563EB' : 'rgba(255,255,255,0.3)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)', flexShrink: 0, marginTop: '0.4rem' }} >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
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

            <div style={{ position: 'sticky', top: '20vh', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/9', background: '#0D0D25', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <img key={activeId} src={activeItem.image} alt={activeItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', animation: 'fadeInFeatureCrm 0.4s ease' }} />
            </div>
          </div>
        </div>
        <style>{`
          @keyframes drawProgressAccordionCrm { from { width: 0%; } to { width: 100%; } }
          @keyframes fadeInFeatureCrm { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        `}</style>
      </section>
    </div>
  );
};

const TechOrbitSection = () => {
  const techLogos = [
    { img: logoHubspot, name: 'HubSpot' },
    { img: logoPipedrive, name: 'Pipedrive' },
    { img: logoApollo, name: 'Apollo' },
    { img: logoLemlist, name: 'lemlist' },
    { img: logoGong, name: 'Gong' },
    { img: logoAirtable, name: 'Airtable' },
    { img: logoRingover, name: 'Ringover' },
    { img: logoTally, name: 'Tally' },
    { img: logoVideoask, name: 'Videoask' },
    { img: logoClaude, name: 'Claude' },
    { img: logoFramer, name: 'Framer' },
  ];

  const orbitCount = 3;
  const orbitGap = 6; // rem
  const iconsPerOrbit = Math.ceil(techLogos.length / orbitCount);

  return (
    <section style={{ 
      position: 'relative', 
      maxWidth: '1200px', 
      margin: '8rem auto', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      minHeight: '450px', 
      backgroundColor: '#0D0D25', 
      overflow: 'hidden', 
      borderRadius: '32px',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '4rem'
    }}>
      {/* Background Glow */}
      <div style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'translateY(-50%)'
      }} />

      {/* Left side: Heading and Text */}
      <div style={{ width: '45%', zIndex: 1 }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Stack Technologique</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Des Technologies pour mieux vendre.
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          Nous intégrons les meilleurs outils du marché pour transformer votre CRM en véritable moteur de croissance. Prospection, enrichissement, téléphonie et IA : chaque brique est connectée à votre écosystème.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/contact" style={{ backgroundColor: '#2563EB', color: '#fff', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            Audit de votre stack
          </Link>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/2 */}
      <div style={{ position: 'relative', width: '50%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
        <div style={{ position: 'relative', width: '600px', height: '600px', transform: 'translateX(20%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Center Circle - Using HubSpot as central logo */}
          <div style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            background: 'rgba(255,255,255,0.03)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 0 30px rgba(37, 99, 235, 0.2)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            zIndex: 10
          }}>
            <Database className="w-10 h-10 text-blue-500" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;
            const duration = 20 + orbitIdx * 10;

            return (
              <div
                key={orbitIdx}
                style={{
                  position: 'absolute',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.05)',
                  width: size,
                  height: size,
                  animation: `spinTechOrbit ${duration}s linear infinite`,
                  pointerEvents: 'none'
                }}
              >
                {techLogos
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        style={{
                          position: 'absolute',
                          background: '#FFFFFF',
                          borderRadius: '50%',
                          padding: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          width: '48px',
                          height: '48px',
                          animation: `counterSpinTechOrbit ${duration}s linear infinite`,
                        }}
                      >
                        <img
                          src={cfg.img}
                          alt={cfg.name}
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes spinTechOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterSpinTechOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default function StrategieCrm() {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = React.useRef(null);

  useEffect(() => {
    document.title = "Migration CRM B2B — HubSpot, Pipedrive — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia déploie votre CRM B2B de A à Z : audit, migration des données, structuration du pipeline et adoption par les équipes. HubSpot, Pipedrive, Salesforce.");
    }
  }, []);

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
    const duration = 600;
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
        
        {/* SECTION 1 — HERO */}
        <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          {/* Fond pleine page */}
          <img src={fondCrm} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'rgba(10,10,26,0.40)' }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(105deg, rgba(10,10,26,0.97) 0%, rgba(10,10,26,0.75) 35%, rgba(10,10,26,0.40) 60%, transparent 100%)', }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(to bottom, transparent, #0A0A1A)', }} />



          <div style={{ position: 'relative', zIndex: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '8%' }}>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '750px' }}>
              Un CRM que vos équipes<br />utilisent vraiment.<br />Pas juste un outil.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', marginBottom: '3rem' }}>
              Squadia structure votre projet CRM de bout en bout : audit, migration, configuration et adoption. Pour que le CRM devienne un vrai outil de pilotage, pas une contrainte administrative.
            </motion.p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={(e) => smoothScroll(e, 'diagnostic')} style={{ backgroundColor: '#2563EB', color: '#fff', padding: '1.3rem 2.5rem', borderRadius: '0.5rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}>RDV avec un expert</button>
            </div>
          </div>
        </section>

        {/* SECTION 2 — DIAGNOSTIC */}
        <section id="diagnostic" style={{ padding: '10rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>Le problème</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '2rem' }}>Audit des processus réels.</h2>
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
                      src={crmVideo}
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

              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {[
                  { title: "Ce qu'on migre. Ce qu'on laisse.", desc: "Tout transférer sans trier, c'est déménager le chaos dans un outil neuf." },
                  { title: "Reconnecter sans tout casser.", desc: "ERP, téléphonie, marketing — une intégration mal anticipée et le go-live devient une gestion de crise." },
                  { title: "Remettre les process à plat.", desc: "Changer d'outil sans revoir sa méthode de vente, c'est rater la vraie opportunité." },
                  { title: "Nettoyer la data une bonne fois.", desc: "Une base non nettoyée arrive corrompue de l'autre côté. Ce qui entre sale ressort sale." }
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <CheckCircle size={32} color="#2563EB" style={{ flexShrink: 0 }} />
                      <div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#F9FAFB', marginBottom: '0.5rem' }}>{item.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AccordionFeatures 
          img1={migrationProcess} 
          img2={migrationData} 
          img3={migrationMeeting} 
          img4={migrationTraining} 
        />

        {/* SECTION 3.5 — TECHNOLOGIES */}
        <TechOrbitSection />

        {/* ═══ SECTION 4 — CAS CLIENTS (Imported from DG) ═══ */}
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


        {/* PRICING SECTION — STYLE TARIFS */}
        <section style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>NOS TARIFS</p>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem' }}>
              Une approche modulable par briques.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.45)', maxWidth: '700px', marginInline: 'auto' }}>
              Le périmètre exact est cadré ensemble pour garantir l'impact business immédiat.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Stratégie Commerciale',
                subtitle: "Pour structurer votre méthode de vente, fiabiliser votre pipeline et aligner vos équipes.",
                items: [
                  "Sales playbook et méthode",
                  "Rituels de pilotage et indicateurs",
                  "Ateliers terrain équipes",
                  "Feuille de route 30/60/90 jours"
                ],
                price: '3 490 € HT',
                prefix: 'À partir de',
              },
              {
                title: 'Migration CRM',
                subtitle: "Pour déployer un CRM que vos équipes utilisent vraiment — de l'audit à l'adoption.",
                items: [
                  "Audit processus et données",
                  "Configuration cycles de vente",
                  "Migration propre sans perte",
                  "Formation et activation équipes"
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
                  <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '0.5rem' }}>Périmètre ajusté au cadrage.</p>
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
                  RDV avec un expert
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION NOUVELLE — ILS NOUS FONT CONFIANCE */}
        <ClientLogosSection />

        {/* FAQ */}
        <section style={{ padding: '10rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', color: '#F9FAFB' }}>Questions fréquentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'Quel CRM recommandez-vous pour une PME ?', a: "On travaille principalement avec HubSpot et Pipedrive. Le choix dépend toujours de votre contexte — taille de l'équipe, cycles de vente, intégrations existantes, budget. On ne recommande jamais un outil avant d'avoir compris comment vous vendez vraiment." },
              { q: "On a déjà un CRM, peut-on le restructurer sans tout recommencer ?", a: "Oui. La plupart de nos missions partent d'un CRM existant mal configuré ou sous-utilisé. On audite ce qui est en place, on identifie ce qui peut être conservé, et on restructure sans repartir de zéro." },
              { q: "Comment gérez-vous l'adoption des équipes ?", a: "L'adoption ne se décrète pas, elle se construit. On forme les équipes sur leurs cas réels, pas sur des scénarios génériques. Et on s'assure que l'outil leur facilite la vie plutôt qu'il ne leur en ajoute." },
              { q: "Combien de temps dure un projet CRM ?", a: "Un projet de mise en place structurée prend entre 8 et 20 semaines selon le périmètre — de l'audit des processus au déploiement et à la formation. On cadre le calendrier précisément avant de démarrer." },
              { q: "Est-ce que vous gérez aussi la migration des données depuis l'ancien outil ?", a: "Oui. La migration inclut le nettoyage, la déduplication et la vérification des données avant tout transfert. On ne migre pas du chaos — on le traite d'abord." },
              { q: "Peut-on connecter le CRM à nos outils existants ?", a: "Dans la plupart des cas, oui. HubSpot et Pipedrive disposent de connecteurs natifs pour les outils courants. Pour les intégrations spécifiques — ERP, facturation, téléphonie — on évalue la faisabilité en amont et on intègre ça dans le périmètre de la mission." },
              { q: "Faut-il arrêter l'ancien CRM avant de basculer sur le nouveau ?", a: "Non. On recommande systématiquement une période de coexistence courte entre les deux outils. Ça permet de valider que tout fonctionne avant de couper l'accès à l'ancien système et de ne perdre aucune opportunité en cours." },
              { q: "Quel budget prévoir pour un projet CRM complet ?", a: "Un projet structuré — audit, configuration, migration et formation — démarre à partir de 5 990 € HT selon le périmètre. Les licences CRM viennent en plus et dépendent de l'outil retenu et du nombre d'utilisateurs. On cadre le budget précisément avant tout démarrage." },
              { q: "Comment savoir si notre CRM actuel est vraiment le problème ?", a: "Souvent ce n'est pas l'outil qui est en cause, c'est la façon dont il a été configuré et adopté. On commence toujours par un audit avant de recommander quoi que ce soit — pour ne pas changer d'outil quand ce qu'il faut changer c'est le cadre dans lequel il s'inscrit." }
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
                      color: '#9CA3AF', 
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

        {/* SECTION 6 — CTA FINAL */}
        <CtaSection
          headline="Prêt à faire de votre CRM un vrai outil de pilotage ?"
          description="Fini le temps perdu à saisir des données inutiles. Passez à un CRM qui aide vos commerciaux à vendre."
          cardTitle="Stratégie CRM"
          cardSubtitle="Simplifier pour mieux vendre"
          cardDescription="Audit de vos outils actuels et définition d'un workflow aligné sur vos objectifs de revenus."
          cardFeatures={[
            "Audit de l'existant & Adoption",
            "Schéma de données optimisé",
            "Automatisation des process",
            "Reporting & Prédictivité"
          ]}
          cardColor="#2563EB"
        />
      </div>
    </>
  );
}
