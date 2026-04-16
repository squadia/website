import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Activity, 
  FileText,
  Check,
  ShieldCheck,
  RefreshCw,
  Search,
  Database,
  Play, VolumeX, Volume2
} from 'lucide-react';

import fondDataClean from '../assets/images/dataclean/data-clean.jpeg';

import datacleanVideo from '../assets/video/data-clean.mp4';
import ctaImg from '../assets/images/cta.png';
import CtaSection from '../components/ui/CtaSection';
import ClientLogosSection from '../components/ui/ClientLogosSection';

// Import Deliverables Images
import baseUnifiee from '../assets/images/dataclean/baseunifiee.jpeg';
import dataEnrich from '../assets/images/dataclean/dataenrich.jpeg';
import segmentationImg from '../assets/images/dataclean/segmentation.jpeg';
import reglesImg from '../assets/images/dataclean/regles.jpeg';

const features = (img1, img2, img3, img4) => [
  {
    id: 1,
    title: 'Base unifiée & dédupliquée',
    image: img1,
    description: 'On fusionne vos doublons, normalise les champs et harmonise les formats. Fini les entreprises orthographiées de 5 façons différentes et les fiches en triple exemplaire.',
  },
  {
    id: 2,
    title: 'Données simplifiées & enrichies',
    image: img2,
    description: 'On complète vos fiches prioritaires avec les emails vérifiés, les intitulés de poste réels et les informations de segmentation manquantes.',
  },
  {
    id: 3,
    title: 'Segmentation active prête à l\'emploi',
    image: img3,
    description: 'Mise en place de filtres opérationnels dans votre CRM pour que vos équipes puissent filtrer leur base en 2 clics selon leurs besoins.',
  },
  {
    id: 4,
    title: 'Documentation & Règles de maintenance',
    image: img4,
    description: 'Un guide de référence détaillant les corrections effectuées et les règles à suivre pour que votre CRM reste propre durablement.',
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
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700, textAlign: 'center', color: '#FFFFFF', marginBottom: '2.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Une donnée <span style={{ textDecoration: 'underline', color: '#FFFFFF' }}>actionnable</span> dès demain.
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
                            <div key={`progress-${activeId}`} style={{ height: '100%', background: '#2563EB', animation: 'drawProgressAccordionDataClean 4s linear forwards' }} />
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
              <img key={activeId} src={activeItem.image} alt={activeItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', animation: 'fadeInFeatureDataClean 0.4s ease' }} />
            </div>
          </div>
        </div>
        <style>{`
          @keyframes drawProgressAccordionDataClean { from { width: 0%; } to { width: 100%; } }
          @keyframes fadeInFeatureDataClean { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        `}</style>
      </section>
    </div>
  );
};

const DataCleanCSS = `
@keyframes pulseDotClean {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(68,204,255,0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(68,204,255,0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(68,204,255,0); }
}
`;

export default function DataClean() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = "Data Clean — Nettoyer et normaliser votre CRM B2B — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia nettoie, déduplique et normalise votre base CRM. Préparez vos données pour la segmentation et la prospection active. Pour PME et ETI en France.");
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
          <style>{DataCleanCSS}</style>

          {/* Fond pleine page */}
          <img src={fondDataClean} alt="" style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0
          }} />
          {/* Overlay sombre global */}
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
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '750px' }}>
              Votre CRM est plein.<br />
              Mais est-il vraiment<br />
              exploitable ?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', marginBottom: '3rem' }}>
              Doublons, emails invalides, structures incohérentes. Squadia nettoie et normalise votre base pour en faire le moteur de votre croissance.
            </motion.p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: '#2563EB', color: '#fff', padding: '1.3rem 2.5rem', borderRadius: '0.5rem', fontWeight: 600, border: 'none', cursor: 'pointer', textDecoration: 'none' }}>RDV avec un expert</Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 — DIAGNOSTIC */}
        <section id="diagnostic" style={{ padding: '10rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'start' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: 'sticky', top: '25vh' }}>
                <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>Audit Data</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '2rem' }}>Le coût caché de la "Bad Data".</h2>
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
                    src={datacleanVideo}
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingTop: '10rem' }}>
                {[
                  { title: "Performance dégradée", desc: "Vos commerciaux perdent 30% de leur temps à chercher ou corriger des données." },
                  { title: "Délivrabilité en risque", desc: "Des emails invalides ou mal formatés bloquent vos campagnes marketing." },
                  { title: "Marketing inefficace", desc: "Impossible de segmenter ou scorer vos leads sur une base incohérente." },
                  { title: "Reporting faussé", desc: "Vos prédictions de vente ne sont pas fiables si la donnée source est sale." }
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

        {/* SECTION 3 — LIVRABLES */}
        <AccordionFeatures 
          img1={baseUnifiee} 
          img2={dataEnrich} 
          img3={segmentationImg} 
          img4={reglesImg} 
        />

        {/* SECTION 5 — LE DÉROULÉ */}
        <section style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', color: '#F9FAFB' }}>
            Une mission de nettoyage cadrée.
          </h2>
          <div style={{ position: 'relative', borderLeft: '2px solid #44CCFF', marginLeft: '1rem', paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {[
              { step: '1', title: 'Étape 1 — Audit gratuit', desc: 'Analyse du volume et de l\'état de santé de votre base. RDV de 30 minutes.' },
              { step: '2', title: 'Étape 2 — Mapping logic', desc: 'On définit ensemble les règles de traitement : formats, priorités, fusions.' },
              { step: '3', title: 'Étape 3 — Production', desc: 'Normalisation, dédoublonnage, enrichissement et validation des emails par nos experts.' },
              { step: '4', title: 'Étape 4 — Export & Training', desc: 'Livraison de la base propre et formation rapide aux bonnes pratiques HubSpot.' }
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

        {/* PRICING SECTION — STYLE TARIFS */}
        <section style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem' }}>
              Une approche modulable par briques.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.45)', maxWidth: '700px', marginInline: 'auto' }}>
              Parce que chaque CRM est unique, nos offres s'adaptent à vos enjeux réels.
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

                <Link to="/contact" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', border: card.badge ? 'none' : '1px solid rgba(255,255,255,0.2)', background: card.badge ? '#2563EB' : 'transparent', color: '#FFFFFF', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none', textAlign: 'center', display: 'block', boxSizing: 'border-box' }}>
                  RDV avec un expert
                </Link>
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
              { q: "À quoi sert Data Clean ?", a: "À fiabiliser votre CRM en supprimant les doublons, les erreurs et les champs inutiles pour repartir sur une base exploitable." },
              { q: "Quels types de problèmes sont corrigés ?", a: "Doublons, données incohérentes, champs vides, formats hétérogènes, erreurs de saisie." },
              { q: "Est-ce que vous modifiez les données existantes ?", a: "Oui, mais de manière contrôlée : nettoyage + normalisation sans perte d'information utile." },
              { q: "Est-ce que ça fonctionne avec tous les CRM ?", a: "Oui (HubSpot, Pipedrive, Salesforce, fichiers Excel, etc.)." },
              { q: "Combien de temps ça prend ?", a: "Quelques jours à quelques semaines selon le volume et la qualité initiale." },
              { q: "Est-ce que je garde la main sur mes données ?", a: "Oui, validation possible avant toute modification critique." },
              { q: "Que vais-je recevoir concrètement ?", a: "Un CRM nettoyé + un rapport des actions réalisées." },
              { q: "Est-ce que ça inclut de la segmentation ?", a: "Uniquement basique (tri simple). La segmentation avancée est dans Data Seg." },
              { q: "Est-ce que ça améliore mes performances commerciales ?", a: "Oui, indirectement : meilleure délivrabilité, moins de pertes, base plus exploitable." },
              { q: "Quand faut-il lancer un Data Clean ?", a: "Après une migration CRM, un changement d'équipe ou avant une campagne marketing." }
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

        {/* SECTION 6 — CTA FINAL */}
        <CtaSection
          headline="Prêt à faire de votre CRM un outil que vos équipes utilisent vraiment ?"
          description="Fini le temps perdu sur des fichiers sales. Passez à une donnée qui aide vos commerciaux à vendre."
          cardTitle="Data Clean"
          cardSubtitle="Repartez sur une base saine"
          cardDescription="Le diagnostic est gratuit. Nous analysons l'état de votre base et vous proposons un plan d'action immédiat."
          cardFeatures={[
            "Détection et fusion automatique des doublons",
            "Normalisation des champs (Siret, adresse, CA)",
            "Audit de santé CRM complet",
            "Protocoles de saisie durables"
          ]}
          cardColor="#2563EB"
        />
      </div>
    </>
  );
}
