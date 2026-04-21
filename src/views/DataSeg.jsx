'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Search, 
  Target, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle,
  Database,
  SearchCode,
  ListPlus,
  Key,
  Check,
  Play, VolumeX, Volume2
} from 'lucide-react';

const fondDataSeg = '/assets/images/dataseg/data-seg.jpeg';
const icpImg = '/assets/images/dataseg/icpdefinition.jpeg';
const segmentationImg = '/assets/images/dataseg/comptesseg.jpeg';
const scoringImg = '/assets/images/dataseg/segmentation-logic.jpeg';
const architectureImg = '/assets/images/dataseg/regles.jpeg';
const datasegVideo = '/assets/video/data-seg.mp4';
import CtaSection from '../components/ui/CtaSection';
import ClientLogosSection from '../components/ui/ClientLogosSection';

const features = (img1, img2, img3, img4) => [
  {
    id: 1,
    title: 'Audit & Diagnostic ICP',
    image: img1,
    description: 'On part de vos meilleurs clients : ce qui les caractérise, pourquoi ils ont signé, ce qu\'ils ont en commun. On croise avec vos ambitions de développement.',
  },
  {
    id: 2,
    title: 'Critères de segmentation métiers',
    image: img2,
    description: 'On convertit votre strategie en critères de segmentation opérationnelle : secteur, tech stack, actualité business, recrutement en cours.',
  },
  {
    id: 3,
    title: 'Variables de scoring personnalisées',
    image: img3,
    description: 'Mise en place de scores d\'intention et d\'intérêt (ICP score) pour que vos commerciaux ne contactent que les leads à haute probabilité.',
  },
  {
    id: 4,
    title: 'Architecture de données pérenne',
    image: img4,
    description: 'On documente la logique pour que votre CRM reste segmenté sur le long terme, avec ou sans notre intervention.',
  }
];

const AccordionFeatures = ({ img1, img2, img3, img4 }) => {
  const [activeId, setActiveId] = React.useState(1);
  const items = features(img1, img2, img3, img4);
  const activeItem = items.find(f => f.id === activeId);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveId(prev => prev === items.length ? 1 : prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeId, items.length]);

  return (
    <div style={{ padding: '2.5rem 2vw', position: 'relative' }}>
      {/* Halo behind the card - precisely in the corner */}
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
        zIndex: 1,
        padding: '4rem 4rem', 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: '#0D0D25',
        borderRadius: '32px',
        border: '2px solid #44CCFF',
        color: '#FFFFFF',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem', textAlign: 'center' }}>Livrables</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, textAlign: 'center', color: '#FFFFFF', marginBottom: '2.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Une donnée <span style={{ textDecoration: 'underline', color: '#FFFFFF' }}>intelligente</span> pour vos équipes.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: '3rem', alignItems: 'start' }}>
            <div>
              {items.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <button
                      onClick={() => setActiveId(item.id)}
                      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                    >
                      <div style={{ width: '100%', paddingRight: '1rem' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 700, color: isOpen ? '#FFFFFF' : 'rgba(255,255,255,0.65)', transition: 'color 0.2s', display: 'block' }}>
                          {item.title}
                        </span>
                        {isOpen && (
                          <div style={{ marginTop: '0.6rem', height: '3px', background: 'rgba(255,255,255,0.1)', width: '100%', borderRadius: '2px', overflow: 'hidden' }}>
                            <div key={`progress-${activeId}`} style={{ height: '100%', background: '#2563EB', animation: 'drawProgressAccordionSeg 4s linear forwards' }} />
                          </div>
                        )}
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#FFFFFF' : 'rgba(255,255,255,0.3)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)', flexShrink: 0 }} >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                    <div style={{ height: isOpen ? '110px' : '0', overflow: 'hidden', transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1)' }}>
                      <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, fontSize: '1rem', fontWeight: 500, paddingBottom: '1.2rem', maxWidth: '440px' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ position: 'sticky', top: '20vh', borderRadius: '20px', overflow: 'hidden', border: '5px solid rgba(255,255,255,0.08)', aspectRatio: '16/9', background: '#0A0A1A', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' }}>
              <img key={activeId} src={activeItem.image} alt={activeItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', animation: 'fadeInFeatureSeg 0.4s ease' }} />
            </div>
          </div>
        </div>
        <style>{`
          @keyframes drawProgressAccordionSeg { from { width: 0%; } to { width: 100%; } }
          @keyframes fadeInFeatureSeg { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        `}</style>
      </section>
    </div>
  );
};

const DataSegCSS = `
@keyframes pulseDotSeg {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(68,204,255,0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(68,204,255,0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(68,204,255,0); }
}
`;

export default function DataSeg() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = "Data Seg : Segmentation CRM et scoring ICP : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia structure votre segmentation CRM : définition ICP, variables de scoring et architecture de données actionnable. Résultats en 30 jours pour PME et ETI.");
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
        
        {/* SECTION 1 : HERO */}
        <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          <style>{DataSegCSS}</style>

          {/* Fond pleine page */}
          <img src={fondDataSeg} alt="" style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0
          }} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
            background: 'rgba(10,10,26,0.40)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
            background: 'linear-gradient(105deg, rgba(10,10,26,0.97) 0%, rgba(10,10,26,0.75) 35%, rgba(10,10,26,0.40) 60%, transparent 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2,
            background: 'linear-gradient(to bottom, transparent, #0A0A1A)',
          }} />



          <div style={{ position: 'relative', zIndex: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '8%' }}>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '750px' }}>
              Ne parlez plus à tout le monde.<br />
              Parlez aux bons prospects.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', marginBottom: '3rem' }}>
              Data Seg transforme votre base de données en un moteur de ciblage. Nous identifions votre ICP pour que vos équipes se concentrent sur les opportunités à fort potentiel.
            </motion.p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact" style={{ backgroundColor: '#2563EB', color: '#fff', padding: '1.3rem 2.5rem', borderRadius: '0.5rem', fontWeight: 600, border: 'none', cursor: 'pointer', textDecoration: 'none' }}>RDV avec un expert</Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 : DIAGNOSTIC */}
        <section id="diagnostic" style={{ padding: '10rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>Segmentation</p>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '2rem' }}>La fin du "spray and pray".</h2>
                <div style={{ width: '80px', height: '4px', backgroundColor: '#2563EB', borderRadius: '2px', marginBottom: '2rem' }} />
                
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
                    src={datasegVideo}
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {[
                  { title: "Ciblage flou", desc: "Vos messages marketing et sales sont trop génériques pour engager vos prospects." },
                  { title: "Priorités aléatoires", desc: "Vos commerciaux traitent les leads par ordre d'arrivée plutôt que par potentiel réel." },
                  { title: "Data non exploitée", desc: "Vous avez des milliers de contacts mais aucune info pour les segmenter finement." },
                  { title: "ROI incertain", desc: "Difficile d'évaluer vos actions quand vous ne savez pas quel segment transforme le mieux." }
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

        {/* SECTION 3 : LIVRABLES */}
        <AccordionFeatures 
          img1={icpImg} 
          img2={segmentationImg} 
          img3={scoringImg} 
          img4={architectureImg} 
        />

        {/* SECTION 5 : LE DÉROULÉ */}
        <section style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', color: '#F9FAFB' }}>
            Le déroulé de Data Seg.
          </h2>
          <div style={{ position: 'relative', borderLeft: '2px solid #44CCFF', marginLeft: '1rem', paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {[
              { step: '1', title: 'Étape 1 : Audit ICP', desc: 'Analyse des données historiques et définition de votre profil client idéal. RDV de 30 minutes.' },
              { step: '2', title: 'Étape 2 : Architecture', desc: 'On définit ensemble les variables de ciblage et les rituels de scoring dans le CRM.' },
              { step: '3', title: 'Étape 3 : Implémentation', desc: 'Mise en place des champs, des filtres et des automatisations de segmentation.' },
              { step: '4', title: 'Étape 4 : Mise en route', desc: 'Lignes directrices pour les équipes sales/marketing et documentation des variables.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px" }}
                variants={{
                  hidden: { opacity: 0, y: 50, backgroundColor: 'rgba(37, 99, 235, 0)', borderColor: 'rgba(255,255,255,0.05)' },
                  visible: { opacity: 1, y: 0, backgroundColor: 'rgba(37, 99, 235, 0.04)', borderColor: 'rgba(37, 99, 235, 0.4)' }
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ position: 'relative', padding: '2rem', borderRadius: '1rem', border: '1px solid' }}
              >
                <motion.div 
                  variants={{ hidden: { backgroundColor: '#11111E', borderColor: '#1A1A2E', color: 'rgba(255,255,255,0.2)' }, visible: { backgroundColor: '#2563EB', borderColor: '#2563EB', color: '#FFFFFF' } }}
                  transition={{ duration: 0.8 }}
                  style={{ position: 'absolute', left: '-3.65rem', top: '2rem', width: '2.2rem', height: '2.2rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', border: '2px solid', zIndex: 10 }}
                >{item.step}</motion.div>
                <motion.h3 variants={{ hidden: { color: 'rgba(255,255,255,0.1)' }, visible: { color: '#E5E7EB' } }} style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</motion.h3>
                <motion.p variants={{ hidden: { color: 'rgba(156,163,175,0.1)' }, visible: { color: '#6B7280' } }} style={{ lineHeight: 1.6 }}>{item.desc}</motion.p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING SECTION : STYLE TARIFS */}
        <section style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem' }}>
              Une approche modulable par briques.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.45)', maxWidth: '700px', marginInline: 'auto' }}>
              Le périmètre exact est cadré ensemble pour garantir l'impact business immédiat.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Data Clean',
                subtitle: "Pour nettoyer et fiabiliser une base CRM existante.",
                items: [
                  "Audit de la base existante",
                  "Suppression des doublons et normalisation des champs",
                  "Complétion des données manquantes",
                  "Segmentation basique opérationnelle",
                  "Livrable : CRM nettoyé + rapport d'audit"
                ],
                price: '1 490 € HT',
                prefix: 'À partir de',
                badge: null
              },
              {
                title: 'Data Seg',
                subtitle: "Pour transformer votre base en outil de ciblage réel.",
                items: [
                  "Définition ou validation de l'ICP",
                  "Segmentation avancée et scoring des contacts",
                  "Création de variables dynamiques personnalisées",
                  "Livrable : base structurée + documentation opérationnelle"
                ],
                price: '2 990 € HT',
                prefix: 'À partir de',
                badge: 'RECOMMANDÉ'
              },
              {
                title: 'Data Lead',
                subtitle: "Pour construire une base de prospection B2B sur un marché cible.",
                items: [
                  "Cartographie du segment cible",
                  "Construction d'un fichier de contacts qualifiés et vérifiés",
                  "Enrichissement contacts selon périmètre défini",
                  "Livrable : base opérationnelle + intégration CRM (en option)"
                ],
                price: '4 990 € HT',
                prefix: 'À partir de',
                badge: null
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

                <Link href="/contact" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', border: card.badge ? 'none' : '1px solid rgba(255,255,255,0.2)', background: card.badge ? '#2563EB' : 'transparent', color: '#FFFFFF', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none', textAlign: 'center', display: 'block', boxSizing: 'border-box' }}>
                  RDV avec un expert
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION NOUVELLE : ILS NOUS FONT CONFIANCE */}
        <ClientLogosSection />

        {/* FAQ */}
        <section style={{ padding: '10rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', color: '#F9FAFB' }}>Questions fréquentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: "À quoi sert Data Seg ?", a: "À structurer votre base pour cibler les bons prospects avec les bons messages." },
              { q: "Quelle est la différence avec Data Clean ?", a: "Data Clean nettoie. Data Seg nettoie + enrichit + segmente finement." },
              { q: "Qu’est-ce que vous ajoutez en plus ?", a: "ICP, critères de ciblage, enrichissement (emails, téléphones en option), segmentation avancée." },
              { q: "Est-ce que vous pouvez définir mon ICP ?", a: "Oui, on le construit ou on l’affine avec vous ainsi que les personas." },
              { q: "D’où viennent les données enrichies ?", a: "Nous utilisons jusqu’à 5 sources de données différentes. Ce sont des sources fiables type bases B2B, LinkedIn, outils spécialisés." },
              { q: "Est-ce que la base est prête à être utilisée en prospection ?", a: "Oui, elle est directement exploitable pour des campagnes ciblées." },
              { q: "Est-ce que je peux connecter ça à mes outils marketing ?", a: "Oui, export ou intégration directe dans votre CRM / outils de campagne." },
              { q: "Dans quel cas choisir Data Seg ?", a: "Quand vous savez que c’est impossible de segmenter vos envoies de campagnes en fonction de type de comptes et qu’il est difficile dans votre système actuel d’en mesurer la progression." }
            ].map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '0.75rem', overflow: 'hidden' }}>
                <button onClick={() => toggleFAQ(idx)} style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: '#F9FAFB', fontWeight: 600, textAlign: 'left' }}>
                  <span style={{ paddingRight: '1rem' }}>{faq.q}</span>
                  {openFAQ === idx ? <ChevronUp size={20} color="#9CA3AF" /> : <ChevronDown size={20} color="#9CA3AF" />}
                </button>
                {openFAQ === idx && (
                  <div style={{ padding: '0 1.5rem 1.5rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6 : CTA FINAL */}
        <CtaSection
          headline="Votre base est prête pour la prospection active."
          description="Fini le temps perdu à chercher le bon contact. Vos commerciaux se concentrent sur ce qu'ils font de mieux : vendre."
          cardTitle="Data Seg"
          cardSubtitle="Cibler les bons comptes"
          cardDescription="Transformez votre CRM en une machine de guerre marketing avec une segmentation par ICP et des personas définis."
          cardFeatures={[
            "Définition précise de l'ICP",
            "Segmentation par types de comptes",
            "Enrichissement LinkedIn & Emails",
            "Variables de personnalisation IA"
          ]}
          cardColor="#2563EB"
        />
      </div>
    </>
  );
}
