'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ChevronDown, ChevronRight, ArrowRight, Database, Mail, Phone, GraduationCap,
  Briefcase, UserPlus, FileSignature, RefreshCw,
  Play, Volume2, VolumeX, Check, X
} from 'lucide-react';
import DiagnosticSignalPanel from '../components/ui/DiagnosticSignalPanel';
import PartnerLogosMarquee from '../components/ui/PartnerLogosMarquee';
import { casesData } from '../data/cases';
const introVideo = '/assets/video/intro_home.mp4';
const teamSquadia = '/assets/images/notremission/team-squadia.png';
const formationVente = '/assets/images/formation/commercial.png';
const formationMarketing = '/assets/images/formation/marketing.jpeg';
const formationCommunication = '/assets/images/formation/communication.jpeg';
const logoHubspot = '/assets/images/icon_hubspot.png';
const logoPipedrive = '/assets/images/icon_pipedrive.png';
const logoSalesforce = '/assets/images/icon_salesforce.jpeg';
const logoFullenrich = '/assets/images/icon_fullenrich.webp';
const logoRepliik = null;
const pipelineImg = '/assets/images/pipeline-b2b.jpeg';
const formationImg = '/assets/images/formationB2B.png';
const transformerCRMImg = '/assets/images/transformerCRM.jpeg';
const directusineImg = '/assets/images/ressources/directusine.png';
const caseImages = {
  'pipeline-b2b': pipelineImg,
  'formation-vente': formationImg,
  'crm-industrie': directusineImg,
};

// Import Client Icons (hero marquee)
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
const clientLogos = [
  { src: dell, alt: 'Dell Technologies' },
  { src: xerox, alt: 'Xerox' },
  { src: ovh, alt: 'OVHcloud' },
  { src: laPoste, alt: 'Groupe La Poste' },
  { src: groupama, alt: 'Groupama' },
  { src: lyon, alt: 'Ville de Lyon' },
  { src: ceaAlsace, alt: 'CEA Alsace' },
  { src: ceaAtomique, alt: 'CEA' },
  { src: inocel, alt: 'Inocel' },
  { src: meotec, alt: 'Meotec' },
  { src: oracle, alt: 'Oracle' },
  { src: fujitsu, alt: 'Fujitsu' },
  { src: cofaq, alt: 'Cofaq' },
  { src: franceHydrogene, alt: 'France Hydrogène' }
];

const CTA_LABEL = "Découvrez 10 prospects en phase d'achat";
const CTA_HREF = '/contact';

const Tag = ({ children }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '999px',
    fontSize: '12px', fontWeight: 600, backgroundColor: '#2563EB', color: '#FFFFFF', border: 'none',
  }}>
    {children}
  </span>
);

const caseLabels = { 'pipeline-b2b': 'Prospection', 'crm-industrie': 'Prospection', 'formation-vente': 'Formation' };

const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
  <div
    onClick={onToggle}
    style={{
      backgroundColor: '#0D0D25',
      border: '1px solid rgba(68, 204, 255, 0.18)',
      borderRadius: '16px',
      padding: isOpen ? '1.6rem' : '1.6rem',
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

const kicker = { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem' };
const h2Style = { fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 };
const chapo = { fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.6 };

const HomeCSS = `
.hero-dynamic { position: relative; overflow: hidden; width: 100%; min-height: 100vh; background: #050510; }
.hero-mask {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2; pointer-events: none;
  background: linear-gradient(to right, rgba(5,5,16,0.88) 0%, rgba(5,5,16,0.70) 35%, rgba(5,5,16,0.30) 60%, rgba(5,5,16,0.10) 80%, transparent 100%);
}
.hero-stats-compact { display: flex; gap: 3rem; z-index: 7; margin-top: 2.5rem; }
.stat-item-compact { display: flex; flex-direction: column; }
.stat-num-compact { font-size: 22px; font-weight: 700; color: #44CCFF; }
.stat-label-compact { font-size: 14px; color: var(--text-secondary); }
.hero-dynamic * { box-sizing: border-box; }
.hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; z-index: 1; }
.hero-bg-mobile { display: none; }
.hero-bg-desktop { display: block; animation: heroReveal 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
.hero-bg-video { animation: heroRevealScale 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
@keyframes heroReveal { from { opacity: 0; transform: scale(1.12); } to { opacity: 1; transform: scale(1); } }
@keyframes heroRevealScale { from { transform: translateY(-100px) scale(1.2); } to { transform: translateY(-100px) scale(1.08); } }
.hero-left { position: absolute; top: 0; left: 0; width: 58%; height: 100%; z-index: 3; display: flex; flex-direction: column; justify-content: flex-start; padding-left: 8%; padding-top: 20vh; }
.hero-marquee-inline {
  position: absolute; bottom: 2rem; left: 0; width: 100%; overflow: hidden; z-index: 6;
  background: rgba(5, 5, 16, 0.15); padding: 1.5rem 0; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.05); border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  mask-image: linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%);
}
.hero-marquee-row { display: flex; width: max-content; animation: heroScrollRight 45s linear infinite; }
.hero-marquee-logo { height: 38px; width: auto; margin: 0 2.5rem; opacity: 0.7; transition: opacity 0.3s; filter: grayscale(1) brightness(1.8); object-fit: contain; }
.hero-marquee-logo:hover { opacity: 1; filter: grayscale(0) brightness(1.3) drop-shadow(0 0 15px rgba(68, 204, 255, 0.5)); transform: scale(1.1); }
@keyframes heroScrollRight { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.hero-CTA {
  background: #2563EB; color: #fff; border: none; padding: 1rem 2.2rem; border-radius: 8px; font-size: 1.05rem; font-weight: 600;
  text-decoration: none; display: inline-flex; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3); transition: all 0.3s ease;
}
.hero-CTA:hover { background: #1D4ED8; transform: translateY(-2px); box-shadow: 0 15px 30px rgba(37, 99, 235, 0.4); }

.brique-card:hover { border-color: rgba(68,204,255,0.5) !important; }
.brique-card:hover .brique-card-title { color: #44CCFF !important; }
.formation-thumb { border: 2px solid transparent; transition: border-color 0.2s ease; }
.formation-link:hover .formation-thumb { border-color: #44CCFF; }
.formation-link:hover .formation-label { color: #44CCFF !important; }
.formation-label { transition: color 0.2s ease; }
.play-button-overlay { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
[data-playing="true"] .play-button-overlay { opacity: 0; transform: translate(-50%, -50%) scale(1.2); pointer-events: none; }
.play-button-overlay:hover { background-color: rgba(68, 204, 255, 0.35); transform: translate(-50%, -50%) scale(1.1); }

.partner-logo-band { overflow: hidden; position: relative; }
.partner-logo-track { display: flex; width: max-content; gap: 3rem; align-items: center; }
.partner-logo-track.scroll-left { animation: partnerScrollLeft 30s linear infinite; }
@keyframes partnerScrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.partner-logo-item { height: 44px; width: auto; object-fit: contain; filter: brightness(1.4) grayscale(0.2); opacity: 0.9; transition: all 0.3s ease; }
.partner-logo-item:hover { opacity: 1; filter: brightness(1.6) grayscale(0) drop-shadow(0 0 14px rgba(68,204,255,0.45)); transform: scale(1.08); }
.partner-logo-label { font-size: 1rem; font-weight: 700; color: #fff; letter-spacing: -0.01em; }

@keyframes drawProgressAccordionHome { from { width: 0%; } to { width: 100%; } }

.zoom-cta-img { width: 100% !important; height: 100% !important; }

.grid-3col-divider { border-left: 1px solid rgba(255,255,255,0.1); padding-left: 2rem; }
@media (max-width: 900px) { .grid-3col-avant { grid-template-columns: 1fr !important; } }

.notre-service-grid { position: relative; }
.service-divider {
  position: absolute;
  top: 0;
  width: 1px;
  height: 0;
  background: #44CCFF;
  z-index: 1;
  transition: height 1.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.notre-service-section.is-in-view .service-divider-1 { height: 100%; transition-delay: 0.3s; }
.notre-service-section.is-in-view .service-divider-2 { height: 100%; transition-delay: 1.1s; }
.service-divider-1 { left: calc((100% - 4rem) / 3 + 1rem); }
.service-divider-2 { left: calc(2 * (100% - 4rem) / 3 + 3rem); }

@media (max-width: 768px) {
  .hero-dynamic { min-height: 100svh; height: auto !important; display: flex; flex-direction: column; }
  .hero-bg-mobile { display: block; }
  .hero-bg-desktop { display: none !important; }
  .hero-mask { background: linear-gradient(to bottom, rgba(5,5,16,0.72) 0%, rgba(5,5,16,0.38) 40%, rgba(5,5,16,0.55) 70%, rgba(5,5,16,0.85) 100%) !important; }
  .hero-left {
    position: relative !important; width: 100% !important; flex: 1 !important; height: auto !important;
    display: flex !important; flex-direction: column !important; justify-content: space-between !important;
    padding: 88px 1.4rem 32px !important; z-index: 3;
  }
  .hero-stats-compact { position: relative !important; padding: 1.5rem 0 !important; gap: 0 !important; z-index: 5; justify-content: space-between !important; width: 100% !important; }
  .stat-item-compact { flex: 1; align-items: center !important; text-align: center !important; }
  .stat-num-compact { font-size: 18px !important; }
  .stat-label-compact { font-size: 12px !important; line-height: 1.35 !important; text-align: center !important; max-width: 96px; }
  .hero-marquee-inline { position: relative !important; bottom: auto !important; margin-top: auto !important; }
  .hero-left h1 { font-size: clamp(2.1rem, 9vw, 2.85rem) !important; }
  .hero-subtitle-text { font-size: 0.9rem !important; margin-bottom: 1.5rem !important; }
  .hero-CTA { width: auto !important; max-width: 260px !important; justify-content: center !important; text-align: center !important; white-space: normal !important; line-height: 1.3 !important; font-size: 16px !important; padding: 16px 24px !important; }
  .hero-cta-block { flex-direction: column !important; gap: 12px !important; width: 100% !important; justify-content: center !important; align-items: center !important; }
  .hero-marquee-logo { height: 26px !important; margin: 0 1.5rem !important; }
  .hero-marquee-row { animation-duration: 14s !important; }
  .section-padding { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }
  .grid-4, .grid-3, .grid-2, .grid-3col-avant { grid-template-columns: 1fr !important; }
  .grid-3col-divider { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem; margin-top: 0.5rem; }
  .service-divider { display: none; }
  .timeline-row { grid-template-columns: 1fr !important; gap: 1.25rem !important; margin-bottom: 2.5rem !important; }
  .timeline-spine, .timeline-dot { display: none !important; }
}

@media (max-width: 1440px) {
  .hero-left { padding-top: 17vh !important; }
  .hero-marquee-inline { padding: 0.75rem 0 !important; }
  .hero-marquee-logo { height: 26px !important; margin: 0 2rem !important; }
}
`;

// Séquence d'images qui se substitue à la vidéo, dans le même cadre, au fil du scroll.
const SCROLL_FRAME_COUNT = 120;
const scrollFramePath = (i) => `/assets/images/images-scroll/frame-${String(i).padStart(3, '0')}.png`;

const HERO_SCROLL_VH = 600; // hauteur totale de la zone de scroll-jack (desktop uniquement)
const CROSSFADE_END = 0.06; // portion du "progrès de contenu" sur laquelle la vidéo cède la place au canvas
const DWELL_START = 0.85;   // au-delà, on tient l'état final (CTA visible, image figée) le temps que le visiteur clique

// Textes narratifs qui remplacent le sous-titre dans la colonne de gauche (pas centrés sur l'image).
// Bornes en "progrès de contenu" (0 à 1), indépendant du nombre d'images.
const heroTextBeats = [
  { text: 'Comprenez plus vite le potentiel de leur territoire', from: 0.03, to: 0.16 },
  { text: 'Offrez-leur des outils modernes pour démultiplier leurs actions', from: 0.19, to: 0.32 },
  { text: 'Accélérez leurs résultats, donnez-leur des rendez-vous', from: 0.35, to: 0.48 },
  {
    text: "Offrez-leur une équipe qui s'occupe de ça", from: 0.51, to: 0.80,
    sub: { text: "Boostée à l'IA avec Squadia", from: 0.62, to: 0.80 },
  },
];
const FINAL_REVEAL_FROM = 0.83; // le sous-titre original + CTA + stats reviennent
const FINAL_REVEAL_TO = 0.95;   // pleinement visible, puis maintenu jusqu'à la fin du dwell

const beatOpacity = (p, from, to, fade = 0.025) => {
  if (p < from || p > to) return 0;
  const inO = Math.min(1, (p - from) / fade);
  const outO = Math.min(1, (to - p) / fade);
  return Math.max(0, Math.min(inO, outO));
};

const HeroDynamic = React.memo(({ onOpenDiagnostic }) => {
  const heroVideoRef = useRef(null);
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameRef = useRef(1);
  const dirtyRef = useRef(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => { heroVideoRef.current?.play().catch(() => {}); }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const draw = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[frameIndex - 1];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext('2d');
    const cw = canvas.width;
    const ch = canvas.height;
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  }, []);

  useEffect(() => {
    if (isMobile) return undefined;
    let cancelled = false;
    let loadedCount = 0;
    const imgs = new Array(SCROLL_FRAME_COUNT);
    for (let i = 1; i <= SCROLL_FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = scrollFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === SCROLL_FRAME_COUNT && !cancelled) setLoaded(true);
      };
      imgs[i - 1] = img;
    }
    imagesRef.current = imgs;
    return () => { cancelled = true; };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(frameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [draw, loaded, isMobile]);

  useEffect(() => {
    if (isMobile || !loaded) return undefined;
    const onScroll = () => { dirtyRef.current = true; };
    window.addEventListener('scroll', onScroll, { passive: true });

    let rafId;
    const tick = () => {
      if (dirtyRef.current) {
        dirtyRef.current = false;
        const wrapper = wrapperRef.current;
        if (wrapper) {
          const rect = wrapper.getBoundingClientRect();
          const total = rect.height - window.innerHeight;
          const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
          setProgress(p);
          const cp = Math.min(1, p / DWELL_START);
          const idx = Math.min(SCROLL_FRAME_COUNT, Math.max(1, Math.round(cp * (SCROLL_FRAME_COUNT - 1)) + 1));
          if (idx !== frameRef.current) {
            frameRef.current = idx;
            draw(idx);
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    draw(frameRef.current);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [loaded, draw, isMobile]);

  const contentProgress = isMobile ? 0 : Math.min(1, progress / DWELL_START);
  const videoOpacity = isMobile ? 1 : 1 - Math.min(1, contentProgress / CROSSFADE_END);
  const canvasOpacity = isMobile ? 0 : Math.min(1, contentProgress / CROSSFADE_END);
  const finalOpacity = isMobile ? 1 : Math.max(0, Math.min(1, (contentProgress - FINAL_REVEAL_FROM) / (FINAL_REVEAL_TO - FINAL_REVEAL_FROM)));
  const h1Shift = isMobile ? 0 : 44 * (1 - Math.min(1, contentProgress / 0.05));

  const subtitleBlock = (
    <>
      <div className="hero-subtitle-text" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.78)', marginBottom: '2.5rem', fontWeight: 400, maxWidth: '860px', lineHeight: 1.65 }}>
        Co-construisons votre stratégie de croissance. Nous associons 20 ans d'expertise vente sur les comptes Mid-Market et Stratégiques à la puissance de la Data et de l'IA pour générer vos futurs rendez-vous. Testez la précision de notre ciblage dès maintenant.
      </div>
      <div className="hero-cta-block" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1rem' }}>
        <button type="button" onClick={onOpenDiagnostic} className="hero-CTA" style={{ cursor: 'pointer' }}>{CTA_LABEL}</button>
      </div>
      <div className="hero-stats-compact" style={{ marginTop: '2rem' }}>
        <div className="stat-item-compact"><div className="stat-num-compact">+20 ans</div><div className="stat-label-compact">de vente B2B terrain</div></div>
        <div className="stat-item-compact"><div className="stat-num-compact">+120</div><div className="stat-label-compact">entreprises accompagnées</div></div>
        <div className="stat-item-compact"><div className="stat-num-compact">+450</div><div className="stat-label-compact">professionnels formés</div></div>
      </div>
    </>
  );

  return (
    <section ref={wrapperRef} style={!isMobile ? { position: 'relative', height: `${HERO_SCROLL_VH}vh`, minHeight: `${HERO_SCROLL_VH}vh`, background: '#050510' } : undefined}>
      <div className="hero-dynamic" style={!isMobile ? { position: 'sticky', top: 0, height: '100vh' } : undefined}>
        <video ref={heroVideoRef} className="hero-bg hero-bg-video" src="/assets/video/mainvideo.mp4?v=2" poster="/assets/video/mainvideo-poster.webp" preload="auto" fetchPriority="high" autoPlay loop muted playsInline style={{ opacity: videoOpacity, objectPosition: 'center top' }} />
        {!isMobile && (
          <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', opacity: canvasOpacity, zIndex: 1 }} />
        )}
        <div className="hero-mask" />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 5, background: 'linear-gradient(to bottom, transparent, #050510)' }} />
        <div className="hero-left">
          <div style={{ transform: `translateY(${h1Shift}px)` }}>
            <motion.h1
              initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
              style={{ color: '#F9FAFB', fontSize: 'clamp(2rem, 3.1vw, 2.9rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: 0, maxWidth: '860px' }}
            >
              Ne laissez plus vos commerciaux<br />seuls face à la prospection
            </motion.h1>
          </div>

          {isMobile ? (
            <div style={{ marginTop: '1.75rem' }}>{subtitleBlock}</div>
          ) : (
            <div style={{ position: 'relative', marginTop: '1.75rem', minHeight: '280px' }}>
              {heroTextBeats.map((beat, i) => {
                const op = beatOpacity(contentProgress, beat.from, beat.to);
                const subOp = beat.sub ? beatOpacity(contentProgress, beat.sub.from, beat.sub.to) : 0;
                return (
                  <div key={i} style={{ position: 'absolute', top: 0, left: 0, right: 0, opacity: op, pointerEvents: 'none' }}>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.78)', fontWeight: 400, lineHeight: 1.65, maxWidth: '860px', margin: 0 }}>{beat.text}</p>
                    {beat.sub && (
                      <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.78)', fontWeight: 400, lineHeight: 1.65, maxWidth: '860px', marginTop: '0.85rem', opacity: subOp }}>
                        {beat.sub.text}
                      </p>
                    )}
                  </div>
                );
              })}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, opacity: finalOpacity, pointerEvents: finalOpacity < 0.05 ? 'none' : 'auto' }}>
                {subtitleBlock}
              </div>
            </div>
          )}
        </div>

        <motion.div className="hero-marquee-inline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.7, ease: 'easeOut' }}>
          <div className="hero-marquee-row">
            {clientLogos.map(({ src, alt }, i) => (
              <img key={`H1-${i}`} src={src} className="hero-marquee-logo" alt={alt} />
            ))}
            {clientLogos.map(({ src, alt }, i) => (
              <img key={`H1-copy-${i}`} src={src} className="hero-marquee-logo" alt={alt} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});
HeroDynamic.displayName = 'HeroDynamic';

// ═══ 02 — LE PROBLÈME (contenu des cartes empilées) ═══
const problemes = [
  { tag: 'Temps', Icon: Briefcase, title: "Vos commerciaux gèrent l'existant.", desc: "Les renouvellements, le suivi de portefeuille, les litiges et dossiers complexes occupent la majorité de leur semaine. La prospection passe après, donc elle n'a pas ou pas assez souvent lieu.", stat: '30 %', statLabel: "du temps d'un commercial est réellement consacré à la prospection et à la vente.", statSource: 'Salesforce' },
  { tag: 'Data', Icon: Database, title: 'Vos équipes travaillent sur des listes incomplètes.', desc: "Sans numéros directs, sans emails vérifiés et sans signaux d'achat (reasons to call), certains de vos commerciaux appellent au hasard et d'autres passent trop de temps en préparation.", stat: '25 %', statLabel: 'des bases de données B2B deviennent obsolètes chaque année, ce qui génère de la perte de temps et du découragement.', statSource: 'HubSpot' },
  { tag: 'Canaux', Icon: Mail, title: 'Vos actions reposent sur un seul canal.', desc: "LinkedIn et l'emailing sont souvent sous-exploités ou jugés trop complexes pour votre marché de « niche », ce qui vous prive de nombreux points de contact.", stat: '8 à 12', statLabel: 'points de contact sur des canaux différents sont nécessaires aujourd\'hui pour obtenir un premier échange avec un décideur.' },
  { tag: 'Recrutement', Icon: UserPlus, title: "Décrocher un rendez-vous avec un prospect froid est un métier à part entière.", desc: "Entre la recherche de candidats et la montée en compétence (ramp-up), structurer une équipe interne prend du temps.", stat: '3 mois', statLabel: "sont nécessaires en moyenne pour qu'un nouveau commercial soit prêt à échanger avec des prospects.", statSource: 'RAIN Group' },
];
// largeur de chaque onglet calculée sur la longueur du mot, pour que les fiches s'emboîtent sans creux ni chevauchement
const tabWidths = problemes.map(p => Math.round(p.tag.length * 8.5) + 58);
const tabOffsets = tabWidths.reduce((acc, w, i) => { acc.push(i === 0 ? 0 : acc[i - 1] + tabWidths[i - 1]); return acc; }, []);

// ═══ 03 — CE QUE NOUS DÉTECTONS (accordion dynamique) ═══
const signaux = [
  { id: 1, tint: '#44CCFF', Icon: Briefcase, title: 'Recrutement (persona)', subtitle: "Le signe qu'il se passe quelque chose", description: "Une entreprise qui recrute le persona que vous ciblez est souvent le signe qu'il se passe quelque chose sur le sujet de votre produit ou de votre solution." },
  { id: 2, tint: '#2563EB', Icon: UserPlus, title: 'Nouveau C-level', subtitle: 'Budget engagé sous 3 mois, 6 fois sur 10', description: "Un C-level qui vient d'être nommé engage un budget dans les trois premiers mois de sa prise de poste dans 60 % des cas : c'est aussi un moment pour vous." },
  { id: 3, tint: '#8350e8', Icon: FileSignature, title: "Projet d'investissement", subtitle: 'Signal issu du BODACC', description: "Le BODACC, source publique de l'État français, répertorie les changements de structure, de siège ou de commissaire aux comptes des entreprises : souvent le signe d'une levée de fonds ou d'un investissement à venir." },
  { id: 4, tint: '#fb923c', Icon: RefreshCw, title: 'Reprise de gestion', subtitle: 'Nouvelle direction', description: 'Le dirigeant reprend la gestion : un signal du BODACC, souvent le signe d\'une nouvelle direction et de méthodes commerciales réexaminées.' },
];

const SignalAccordion = () => {
  const [activeId, setActiveId] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  useEffect(() => {
    if (isMobile) return;
    const timer = setInterval(() => setActiveId(prev => (prev === signaux.length ? 1 : prev + 1)), 8000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const activeItem = signaux.find(i => i.id === activeId);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', bottom: '-150px', right: '-100px', width: '600px', height: '600px',
        background: `radial-gradient(circle, ${activeItem.tint}55 0%, transparent 70%)`, transition: 'background 0.6s ease',
        filter: isMobile ? 'blur(40px)' : 'blur(110px)', zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'relative', width: '100%', padding: isMobile ? '24px 16px' : '3rem 3.5rem',
        backgroundColor: '#0D0D25', borderRadius: isMobile ? '18px' : '32px',
        border: isMobile ? '1px solid #44CCFF' : '2px solid #44CCFF', color: '#FFFFFF',
        boxShadow: isMobile ? 'none' : '0 25px 50px -12px rgba(0, 0, 0, 0.5)', zIndex: 1, overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: isMobile ? 'flex' : 'grid', flexDirection: isMobile ? 'column' : undefined, gridTemplateColumns: isMobile ? undefined : 'minmax(0, 1.15fr) minmax(0, 1fr)', gap: isMobile ? '24px' : '5rem', alignItems: 'center', minHeight: isMobile ? 'auto' : '400px' }}>
            <div>
              {signaux.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div key={item.id} style={{ padding: '0.2rem 0' }}>
                    <div style={{ height: '2px', width: '100%', background: 'transparent', marginBottom: '10px', borderRadius: '2px', overflow: 'hidden' }}>
                      {isOpen && (<div key={`bar-${activeId}`} style={{ height: '100%', background: item.tint, animation: 'drawProgressAccordionHome 8s linear forwards' }} />)}
                    </div>
                    <button onClick={() => setActiveId(item.id)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.5rem 0 1.2rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: isMobile ? '16px' : '1.15rem', fontWeight: isOpen ? 700 : 400, color: isOpen ? '#F9FAFB' : 'rgba(255,255,255,0.65)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ color: isOpen ? item.tint : 'rgba(255,255,255,0.4)' }}><item.Icon size={18} /></span>
                          {item.title}
                        </h3>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
                              style={{ fontStyle: 'italic', color: item.tint, fontSize: '13px', marginTop: '4px', overflow: 'hidden' }}>
                              {item.subtitle}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                      {isOpen ? <ChevronDown size={20} color={item.tint} style={{ marginTop: '0.4rem' }} /> : <ChevronRight size={20} color="rgba(255,255,255,0.3)" style={{ marginTop: '0.4rem' }} />}
                    </button>
                    <div style={{ maxHeight: isOpen ? '150px' : '0', overflow: 'hidden', transition: 'all 0.25s ease', opacity: isOpen ? 1 : 0 }}>
                      <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, fontSize: isMobile ? '14px' : '0.95rem', marginTop: '8px', paddingBottom: '1.5rem', maxWidth: '95%' }}>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div key={`icon-${activeId}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
                  style={{ width: '100%', aspectRatio: '1/1', maxWidth: '280px', borderRadius: '20px', background: `linear-gradient(135deg, ${activeItem.tint}22, transparent)`, border: `1px solid ${activeItem.tint}44`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <activeItem.Icon size={80} color={activeItem.tint} strokeWidth={1.25} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══ 04 — COMMENT ÇA MARCHE ═══
const ToolBadge = ({ src, label, isMobile }) => (
  src ? (
    isMobile ? (
      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#fff', border: '1px solid rgba(68,204,255,0.35)', borderRadius: '6px', padding: '4px 10px', background: 'rgba(68,204,255,0.08)', whiteSpace: 'nowrap' }}>{label}</span>
    ) : (
      <img src={src} alt={label} title={label} style={{ height: '28px', width: 'auto', maxWidth: '90px', objectFit: 'contain', borderRadius: '4px', filter: 'brightness(1.25)' }} />
    )
  ) : (
    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', border: '1px solid rgba(68,204,255,0.35)', borderRadius: '6px', padding: '4px 10px', background: 'rgba(68,204,255,0.08)' }}>{label}</span>
  )
);

const BriqueCard = ({ Icon, title, desc, link, tools, isMobile }) => (
  <div className={link ? 'brique-card' : undefined} style={{
    background: '#0D0D25', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: isMobile ? '1.25rem' : '1.5rem', transition: 'border-color 0.2s ease'
  }}>
    <div style={{ width: isMobile ? '40px' : '44px', height: isMobile ? '40px' : '44px', borderRadius: '12px', background: 'rgba(68,204,255,0.08)', border: '1px solid rgba(68,204,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
      <Icon size={isMobile ? 18 : 20} color="#44CCFF" />
    </div>
    <h3 className="brique-card-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#F9FAFB', margin: '0 0 0.5rem', transition: 'color 0.2s ease' }}>{title}</h3>
    <p style={{ fontSize: isMobile ? '0.85rem' : '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
    {tools && tools.length > 0 && (
      <div className="brique-tools" style={{ marginTop: '1.1rem', display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '0.6rem', flexWrap: 'wrap' }}>
        {tools.map((t, i) => <ToolBadge key={i} {...t} isMobile={isMobile} />)}
      </div>
    )}
    {link && (
      <Link href={link} style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#44CCFF', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
        Découvrir <ArrowRight size={14} />
      </Link>
    )}
  </div>
);

const timelineSteps = [
  { week: 'Semaine 1', title: 'Atelier de cadrage', desc: 'Objectifs, cible, périmètre. On aligne la mission sur votre organisation.', image: '/atelier_cadrage.webp' },
  { week: 'Semaine 2', title: 'Construction de la base', desc: 'Extraction sur signal, nettoyage, validation avec vous.', image: '/constructionbase.webp' },
  { week: 'Semaine 3', title: 'Messages et outils', desc: 'Rédaction des séquences, mise en place du CRM et du tableau de bord.', image: '/copywriting.webp' },
  { week: 'Semaine 4 et suite', title: 'Campagnes et appels', desc: 'Les séquences tournent, les appels démarrent, point hebdomadaire.', image: '/coldcall.webp' },
];

const StepText = ({ s, isMobile }) => (
  <div>
    <p style={{ ...kicker, marginBottom: '0.4rem', fontSize: isMobile ? '0.65rem' : '0.7rem' }}>{s.week}</p>
    <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, color: '#F9FAFB', margin: '0 0 0.5rem' }}>{s.title}</p>
    <p style={{ fontSize: isMobile ? '0.85rem' : '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
  </div>
);

const StepImage = ({ src, label, isMobile }) => (
  <div style={{
    aspectRatio: isMobile ? '16/10' : '4/3', borderRadius: isMobile ? '12px' : '14px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden',
  }}>
    <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
  </div>
);

const Timeline = ({ isMobile }) => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 80%', 'end 40%'] });
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
  <div ref={timelineRef} style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', overflow: 'visible', padding: isMobile ? '0 8px' : '0' }}>
    <div className="timeline-spine" style={{ display: isMobile ? 'none' : 'block', position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(68,204,255,0.15)', transform: 'translateX(-50%)' }} />
    {!isMobile && (
      <motion.div className="timeline-spine-progress" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: '#44CCFF', x: '-50%', scaleY: spineScale, transformOrigin: 'top', zIndex: 1 }} />
    )}
    {timelineSteps.map((s, i) => {
      const imageLeft = i % 2 === 0;
      return (
        <div key={i} className="timeline-row" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1rem' : '5rem', alignItems: isMobile ? 'stretch' : 'center', position: 'relative', marginBottom: i === timelineSteps.length - 1 ? 0 : (isMobile ? '2.5rem' : '6rem'), overflow: 'visible' }}>
          <div className="timeline-dot" style={{ display: isMobile ? 'none' : 'block', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '14px', height: '14px', borderRadius: '50%', background: '#050510', border: '2px solid #44CCFF', zIndex: 2 }} />
          {isMobile ? (
            <>
              <motion.div key={`t-${i}-text`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                <StepText s={s} isMobile={isMobile} />
              </motion.div>
              <motion.div key={`t-${i}-img`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} isMobile={isMobile} />
              </motion.div>
            </>
          ) : imageLeft ? (
            <>
              <motion.div key={`d-${i}-img`} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} isMobile={isMobile} />
              </motion.div>
              <motion.div key={`d-${i}-text`} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
                <StepText s={s} isMobile={isMobile} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div key={`d-${i}-text`} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <StepText s={s} isMobile={isMobile} />
              </motion.div>
              <motion.div key={`d-${i}-img`} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} isMobile={isMobile} />
              </motion.div>
            </>
          )}
        </div>
      );
    })}
  </div>
  );
};

// ═══ 07 — COMBIEN ÇA COÛTE (cartes tarifaires, reprend le format de /tarifs) ═══
const pricingTabs = [
  {
    id: 'data', label: 'Data B2B', pageLink: '/data',
    cards: [
      { title: 'Data Clean', subtitle: 'Pour nettoyer et fiabiliser une base CRM existante.', items: ['Audit de la base existante', 'Suppression des doublons et normalisation des champs', 'Complétion des données manquantes', "Livrable : CRM nettoyé + rapport d'audit"], price: 'À partir de 1 490 € HT', link: '/data/data-clean' },
      { title: 'Data Seg', subtitle: 'Pour transformer votre base en outil de ciblage réel.', items: ["Définition ou validation de l'ICP", 'Segmentation avancée et scoring des contacts', 'Livrable : base structurée + documentation'], price: 'À partir de 2 990 € HT', badge: 'RECOMMANDÉ', link: '/data/data-seg' },
      { title: 'Data Lead', subtitle: 'Pour construire une base de prospection B2B sur signal.', items: ['Cartographie du segment cible', 'Détection de signaux (BODACC, LinkedIn, recrutement)', 'Livrable : base opérationnelle + intégration CRM'], price: 'À partir de 4 990 € HT', link: '/data/data-lead' },
    ]
  },
  {
    id: 'prospection', label: 'Prospection', pageLink: '/prospection/campagne',
    cards: [
      { title: 'Campagne multicanale', subtitle: 'Pour lancer des campagnes email et LinkedIn, sans les appels.', items: ['Séquences email et LinkedIn personnalisées', 'Personnalisation contact par contact', 'Traitement des réponses inclus', 'Reporting hebdomadaire'], price: 'À partir de 2 490 € HT', subPrice: 'Périmètre ajusté avant démarrage.', link: '/prospection/campagne' },
      { title: 'Appels sortants', subtitle: 'Pour qualifier et prendre des rendez-vous par téléphone.', items: ['Commercial B2B senior dédié', 'Script construit avec vous', 'Définition écrite du rendez-vous qualifié', 'Reporting hebdomadaire'], price: 'Sur devis', badge: 'RECOMMANDÉ', link: '/prospection/cold-call' },
      { title: 'Mission hybride', subtitle: 'Pour combiner campagnes, appels et transmission.', items: ['Data + prospection + transmission', 'Garantie de prolongation', 'Point hebdomadaire'], price: 'Sur devis', link: '/contact' },
    ]
  },
  {
    id: 'formation', label: 'Formation', pageLink: '/formations',
    cards: [
      { title: 'Inter-entreprises', subtitle: 'Pour apprendre dans un cadre multi-secteurs.', items: ['Fondamentaux IA appliqués aux métiers vente, marketing, communication', 'Ateliers orientés production', 'Supports et templates réutilisables'], price: 'À partir de 1 500 € HT / pers.', link: '/formations' },
      { title: 'Intra-entreprise', subtitle: 'Pour former votre équipe sur vos cas, vos outils.', items: ['Cas et scénarios proches du métier client', "Plan d'action équipe livré en fin de formation", 'Groupes de 6 à 10 personnes'], price: 'À partir de 4 590 € HT / gpe', badge: 'RECOMMANDÉ', link: '/formations' },
      { title: 'Sur mesure', subtitle: 'Pour construire un programme progressif avec suivi renforcé.', items: ['Modules progressifs adaptés aux enjeux', 'Coaching individuel ou collectif', "Plan d'action individualisé"], price: 'Sur devis', link: '/formations' },
    ]
  },
];

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState('data');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const activeTabData = pricingTabs.find(t => t.id === activeTab);

  const formatPrice = (price) => {
    let displayPrice = price;
    let prefix = null;
    let suffix = null;
    if (displayPrice.startsWith('À partir de ')) { prefix = 'À partir de'; displayPrice = displayPrice.replace('À partir de ', ''); }
    if (displayPrice.endsWith(' / pers.')) { suffix = '/ pers.'; displayPrice = displayPrice.replace(' / pers.', ''); }
    if (displayPrice.endsWith(' / gpe')) { suffix = '/ gpe'; displayPrice = displayPrice.replace(' / gpe', ''); }
    return (
      <>
        {prefix && <span style={{ fontSize: '1.2rem', color: '#9CA3AF', fontWeight: 400, marginRight: '0.4rem' }}>{prefix}</span>}
        <span style={{ fontWeight: 400 }}>{displayPrice}</span>
        {suffix && <span style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 400, marginLeft: '0.2rem' }}>{suffix}</span>}
      </>
    );
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '0.5rem' : '1rem', flexWrap: 'nowrap', marginBottom: '3rem' }}>
        {pricingTabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: isMobile ? '0.6rem 0.85rem' : '0.75rem 1.4rem', borderRadius: '9999px', fontWeight: 700, fontSize: isMobile ? '0.78rem' : '0.95rem',
            whiteSpace: 'nowrap', flex: isMobile ? '1 1 0' : 'none', textAlign: 'center',
            border: activeTab === tab.id ? '1px solid #2563EB' : '1px solid #1A1A3A',
            background: activeTab === tab.id ? 'rgba(37, 99, 235, 0.1)' : '#0D0D25',
            color: activeTab === tab.id ? '#FFFFFF' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.2s ease'
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {activeTabData.cards.map((card, idx) => (
          <div key={idx} style={{
            background: '#0D0D25', border: card.badge ? '2px solid #2563EB' : '1px solid #1A1A3A',
            padding: isMobile ? '24px 18px' : '2.25rem 1.75rem', borderRadius: '1rem', position: 'relative', display: 'flex', flexDirection: 'column'
          }}>
            {card.badge && (
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#2563EB', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.68rem', fontWeight: 700 }}>
                {card.badge}
              </div>
            )}
            <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0 0.75rem', color: '#F9FAFB' }}>{card.title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1.25rem', minHeight: isMobile ? 'auto' : '2.6rem' }}>{card.subtitle}</p>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '1.5rem', color: '#fff' }}>{formatPrice(card.price)}</div>
              {card.subPrice && <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginTop: '0.35rem' }}>{card.subPrice}</div>}
            </div>
            <div style={{ flexGrow: 1, marginBottom: '1.25rem' }}>
              {card.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '0.65rem', fontSize: '0.85rem', lineHeight: 1.4 }}>
                  <Check size={15} color={card.badge ? '#2563EB' : '#44CCFF'} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                </div>
              ))}
            </div>
            <Link href={card.link || '/contact'} style={{
              display: 'block', width: '100%', padding: '0.9rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.95rem',
              border: card.badge ? 'none' : '1px solid rgba(255,255,255,0.2)', background: card.badge ? '#2563EB' : 'transparent',
              color: '#FFFFFF', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box'
            }}>
              Prendre RDV
            </Link>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link href={activeTabData.pageLink} style={{ color: '#44CCFF', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          En savoir plus sur l'offre {activeTabData.label} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

const faqItems = [
  { q: 'Pourquoi les appels ne commencent-ils qu\'en semaine 4 ?', a: "Les trois premières semaines servent à construire la base, la valider avec vous et écrire les messages. Appeler avant, c'est appeler des contacts non qualifiés avec un discours non testé. Le temps gagné au départ se perd trois fois ensuite." },
  { q: 'Comment définissez-vous un rendez-vous qualifié ?', a: "Nous l'écrivons avec vous avant de commencer. Trois critères minimum : le bon interlocuteur, un intérêt exprimé, un créneau confirmé. Vous validez la définition, nous nous engageons dessus." },
  { q: "Que se passe-t-il si l'objectif n'est pas atteint ?", a: 'Nous poursuivons la mission sans facturation jusqu\'à l\'atteindre. Nous ne remboursons pas, nous livrons.' },
  { q: "En quoi êtes-vous différent d'une agence de prospection ?", a: "Deux points. Nous partons d'un signal, pas d'une base achetée : nous contactons les entreprises au moment où quelque chose vient de changer chez elles. Et c'est un commercial senior qui appelle, pas un profil junior formé au script." },
  { q: 'Peut-on activer une seule brique, data, prospection ou transmission ?', a: "Oui. Chacune peut être prise indépendamment selon votre besoin : uniquement la base sur signal, uniquement les appels, ou la mission hybride." },
  { q: 'Travaillez-vous uniquement avec de grandes entreprises ?', a: 'Non. Nous accompagnons des PME et ETI de 20 à 2 000 collaborateurs, en France, en présentiel ou à distance.' },
];

const formationTeasers = [
  {
    label: 'Vente',
    image: formationVente,
    href: '/formation-ventes-et-ia',
    title: 'Formation Ventes & IA B2B',
    description: "Squadia forme vos équipes commerciales à la vente complexe et aux outils IA. 2 jours, cas pratiques, pour profils juniors et seniors.",
    bullets: [
      { title: 'Jour 1 : Avant la salle', desc: "Comprendre son compte, structurer son approche, préparer chaque rendez-vous avec un avantage." },
      { title: 'Jour 2 : Dans la salle et après', desc: "Les réflexes qui font la différence : à l'ouverture, face aux objections, et dans la capacité à convertir après le rendez-vous." },
    ],
  },
  {
    label: 'Marketing',
    image: formationMarketing,
    href: '/formation-marketing-et-ia',
    title: 'Formation Marketing & IA',
    description: "Squadia forme vos équipes marketing à l'IA générative pour la création de contenu et les campagnes. 2 jours, outils concrets, ateliers pratiques.",
    bullets: [
      { title: 'Jour 1 : Fondamentaux et premiers usages', desc: "Comprendre les fondamentaux, les limites et les cadres d'usage de l'IA générative, et découvrir les outils clés." },
      { title: 'Jour 2 : Production avancée et automatisation', desc: "Produire, structurer et automatiser des contenus multimédias : image, vidéo, podcast et veille intelligente." },
    ],
  },
  {
    label: 'Communication',
    image: formationCommunication,
    href: '/formation-communication-et-ia',
    title: 'Formation Communication & IA',
    description: "Squadia forme vos équipes communication à l'IA appliquée au message et à la production éditoriale. 2 jours, outils concrets, ateliers pratiques.",
    bullets: [
      { title: 'Jour 1 : Stratégie, message et prompting', desc: "Comprendre et structurer sa stratégie de contenu en exploitant les bons outils IA." },
      { title: 'Jour 2 : Production, visuels et organisation éditoriale', desc: "Automatiser la veille, optimiser l'organisation éditoriale et générer des visuels IA impactants." },
    ],
  },
];

const FormationTeaserModal = ({ data, onClose }) => (
  <AnimatePresence>
    {data && (
      <>
        <motion.div
          key="formation-backdrop"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'fixed', inset: 0, background: 'rgba(5,5,16,0.7)', zIndex: 1198 }}
        />
        <div style={{ position: 'fixed', inset: 0, zIndex: 1199, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', pointerEvents: 'none' }}>
          <motion.div
            key="formation-panel"
            initial={{ opacity: 0, scale: 0.95, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            style={{
              pointerEvents: 'auto', width: '100%', maxWidth: '520px', maxHeight: '90vh', overflowY: 'auto',
              background: '#0D0D25', border: '1px solid rgba(68,204,255,0.18)', borderRadius: '20px',
              boxShadow: '0 25px 60px -12px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ position: 'relative', height: '200px', borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
              <img src={data.image} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,13,37,0.1), rgba(13,13,37,0.9))' }} />
              <motion.button
                onClick={onClose} aria-label="Fermer"
                initial={{ rotate: -720, backgroundColor: '#44CCFF' }}
                animate={{ rotate: 0, backgroundColor: 'rgba(5,5,16,0.5)' }}
                transition={{ rotate: { duration: 1.1, ease: 'easeOut' }, backgroundColor: { duration: 0.7, delay: 0.55, ease: 'easeOut' } }}
                style={{ position: 'absolute', top: '1rem', right: '1rem', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}
              >
                <X size={18} />
              </motion.button>
            </div>
            <div style={{ padding: '2rem 2.25rem 2.25rem' }}>
              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.45 }}
                style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem' }}
              >Formation {data.label}</motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 1.25 }}
                style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem', lineHeight: 1.25 }}
              >{data.title}</motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 1.4 }}
                style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '1.75rem' }}
              >{data.description}</motion.p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
                {data.bullets.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2.15 + i * 0.28 }}
                    style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.1rem' }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.3rem' }}>{b.title}</div>
                    <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{b.desc}</div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 3.5, ease: 'easeOut' }}
              >
                <Link href={data.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '1rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.98rem', background: '#44CCFF', color: '#060612', textDecoration: 'none', boxSizing: 'border-box' }}>
                  Voir le programme complet <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>
);

// ═══ 09 — CTA FINAL : l'image passe du plein écran au bloc arrondi au fil du scroll ═══
const ZOOM_CTA_VH = 180; // distance de scroll sur laquelle se joue le "zoom" (plein écran → bloc)

const ZoomRevealCTA = ({ isMobile, ctaRef }) => {
  const wrapperRef = useRef(null);
  const containerMeasureRef = useRef(null);
  const dirtyRef = useRef(true);
  const [progress, setProgress] = useState(0);
  const [viewport, setViewport] = useState({ w: 1200, h: 800 });
  const [containerWidth, setContainerWidth] = useState(1200);

  useEffect(() => {
    const measure = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
      if (containerMeasureRef.current) setContainerWidth(containerMeasureRef.current.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const onScroll = () => { dirtyRef.current = true; };
    window.addEventListener('scroll', onScroll, { passive: true });
    let rafId;
    const tick = () => {
      if (dirtyRef.current) {
        dirtyRef.current = false;
        const wrapper = wrapperRef.current;
        if (wrapper) {
          const rect = wrapper.getBoundingClientRect();
          const total = rect.height - window.innerHeight;
          const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
          setProgress(p);
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, []);

  const eased = progress * progress * (3 - 2 * progress); // smoothstep : démarre et termine en douceur
  const endHeight = isMobile ? 420 : 600;
  const cardWidth = viewport.w - (viewport.w - containerWidth) * eased;
  const cardHeight = viewport.h - (viewport.h - endHeight) * eased;
  const cardRadius = (isMobile ? 16 : 20) * eased;
  const textOpacity = Math.max(0, Math.min(1, (progress - 0.6) / 0.35));

  return (
    <section
      ref={(node) => { wrapperRef.current = node; if (ctaRef) ctaRef.current = node; }}
      style={{ position: 'relative', height: `${ZOOM_CTA_VH}vh`, background: '#060612' }}
    >
      <div ref={containerMeasureRef} className="container" style={{ height: 0, overflow: 'hidden', visibility: 'hidden' }} aria-hidden="true" />
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: '-160px', bottom: '-160px', width: '840px', height: '840px', background: 'radial-gradient(circle, rgba(68,204,255,0.55) 0%, rgba(68,204,255,0) 70%)', filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none', opacity: 0.25 + eased * 0.75 }} />
        <div style={{ position: 'relative', width: `${cardWidth}px`, height: `${cardHeight}px`, borderRadius: `${cardRadius}px`, overflow: 'hidden', border: '1px solid rgba(68,204,255,.1)', boxShadow: '0 0 60px -20px rgba(68,204,255,.15)', zIndex: 1 }}>
          <img className="zoom-cta-img" src={teamSquadia} alt="" style={{ position: 'absolute', inset: 0, objectFit: 'cover', objectPosition: isMobile ? 'center 20%' : 'center top', filter: isMobile ? 'brightness(0.55) saturate(1.1)' : 'brightness(0.75) saturate(1.1)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, background: isMobile ? 'linear-gradient(to bottom, rgba(6,6,18,0.85) 0%, rgba(6,6,18,0.55) 35%, rgba(6,6,18,0.75) 70%, rgba(6,6,18,0.95) 100%)' : 'linear-gradient(to bottom, rgba(6,6,18,0.75) 0%, transparent 32%, transparent 55%, rgba(6,6,18,0.92) 100%)', opacity: textOpacity, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, textAlign: 'center', padding: isMobile ? '40px 24px 48px' : '56px 56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', opacity: textOpacity, transform: `translateY(${(1 - textOpacity) * 16}px)`, pointerEvents: textOpacity > 0.05 ? 'auto' : 'none' }}>
            <div>
              <span style={{ fontSize: isMobile ? '0.7rem' : '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Prochaine étape</span>
              <p style={{ fontSize: 'clamp(1.5rem, 5.5vw, 2.2rem)', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.1, color: '#fff', margin: '0 0 8px' }}>Rejoignez-nous :</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 5.5vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: 0 }}>Parlons de votre prospection</h2>
            </div>
            <div>
              <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '420px', margin: '0 auto 32px' }}>30 minutes pour comprendre votre contexte<br />et diagnostiquer une approche.</p>
              <Link href="/contact" style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, background: '#44CCFF', color: '#060612', padding: isMobile ? '1rem 1.8rem' : '1.1rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block' }}>Prendre Rendez-Vous</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  useScrollReveal();
  const [openFAQ, setOpenFAQ] = useState(0);
  const [formationModalIdx, setFormationModalIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [bgColor, setBgColor] = useState('#0F2744');
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const [serviceInView, setServiceInView] = useState(false);
  const videoRef = useRef(null);
  const problemRef = useRef(null);
  const ctaRef = useRef(null);
  const serviceSectionRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const section = serviceSectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setServiceInView(true); },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interpolateColor = (c1, c2, factor) => {
      const r1 = parseInt(c1.substring(1, 3), 16), g1 = parseInt(c1.substring(3, 5), 16), b1 = parseInt(c1.substring(5, 7), 16);
      const r2 = parseInt(c2.substring(1, 3), 16), g2 = parseInt(c2.substring(3, 5), 16), b2 = parseInt(c2.substring(5, 7), 16);
      const r = Math.round(r1 + (r2 - r1) * factor), g = Math.round(g1 + (g2 - g1) * factor), b = Math.round(b1 + (b2 - b1) * factor);
      return `rgb(${r}, ${g}, ${b})`;
    };
    let rafId;
    let lastScrollY = -1;
    const tick = () => {
      const scrollY = window.scrollY;
      if (scrollY !== lastScrollY) {
        lastScrollY = scrollY;
        const offProblem = (problemRef.current?.offsetTop || 0) - 100;
        const offCta = (ctaRef.current?.offsetTop || 0) - 200;
        const t1End = offProblem;
        const t2Start = offCta - 400;
        const t2End = offCta;
        if (scrollY < t1End) {
          const factor = Math.max(0, Math.min(1, scrollY / Math.max(t1End, 1)));
          setBgColor(interpolateColor('#0F2744', '#060612', factor));
        } else if (scrollY < t2Start) {
          setBgColor('#060612');
        } else if (scrollY < t2End) {
          const factor = Math.max(0, Math.min(1, (scrollY - t2Start) / (t2End - t2Start)));
          setBgColor(interpolateColor('#060612', '#050510', factor));
        } else {
          setBgColor('#050510');
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    document.title = "Squadia : rendez-vous qualifiés par email, LinkedIn et téléphone";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia détecte les entreprises qui s'apprêtent à bouger, les adresse par email et LinkedIn, les appelle, et livre les rendez-vous qualifiés. Basé à Paris.");
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    if (!document.querySelector('script[src*="elevenlabs/convai-widget-embed"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }
    if (!document.querySelector('#elevenlabs-widget-style')) {
      const style = document.createElement('style');
      style.id = 'elevenlabs-widget-style';
      style.textContent = `
        elevenlabs-convai { --bottom: 180px !important; bottom: 180px !important; }
        @media (max-width: 768px) {
          elevenlabs-convai { --bottom: 110px !important; bottom: 110px !important; }
        }
      `;
      document.head.appendChild(style);
    }
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
    <div className="home-page" style={{ backgroundColor: bgColor, color: '#F9FAFB', transition: 'background-color 0.4s ease-out' }}>
      <style>{HomeCSS}</style>

      {/* ═══ 01 — HERO ═══ */}
      <HeroDynamic onOpenDiagnostic={() => setDiagnosticOpen(true)} />
      <DiagnosticSignalPanel open={diagnosticOpen} onClose={() => setDiagnosticOpen(false)} />
      <FormationTeaserModal data={formationModalIdx !== null ? formationTeasers[formationModalIdx] : null} onClose={() => setFormationModalIdx(null)} />

      {/* ═══ 02 — LE PROBLÈME (vidéo + cartes empilées au scroll) ═══ */}
      <section id="probleme" ref={problemRef} style={{ position: 'relative', backgroundColor: 'transparent' }}>
        <div className="container" style={{ padding: '8rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1.15fr', gap: '4rem', alignItems: 'start' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              onViewportEnter={() => { if (videoRef.current) videoRef.current.play(); }}
              style={{ position: 'sticky', top: '14vh' }}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={kicker}>LE PROBLÈME DU PIPELINE</p>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Les 4 freins qui bloquent votre acquisition B2B
                </h2>
                <div style={{ width: '50px', height: '4px', backgroundColor: '#44CCFF', borderRadius: '2px' }} />
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: '-250px', left: '-250px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, transparent 70%)', filter: 'blur(110px)', zIndex: 0, pointerEvents: 'none' }} />
                <div onClick={() => {
                  if (videoRef.current) {
                    if (isMuted || videoRef.current.paused) {
                      videoRef.current.currentTime = 0; setIsMuted(false); videoRef.current.play();
                    } else { videoRef.current.pause(); }
                  }
                }} style={{
                  maxWidth: '380px', margin: '0', aspectRatio: '3/4', backgroundColor: '#0D0D25', borderRadius: '20px',
                  border: '5px solid #1A1A3A', overflow: 'hidden', position: 'relative', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', cursor: 'pointer', zIndex: 1
                }}>
                  <video ref={videoRef} src={introVideo} muted={isMuted} autoPlay playsInline controls={videoStarted}
                    controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onPlay={(e) => { e.target.parentElement.setAttribute('data-playing', 'true'); setVideoStarted(true); }}
                    onPause={(e) => e.target.parentElement.setAttribute('data-playing', 'false')}
                  />
                  <button onClick={(e) => {
                    e.stopPropagation();
                    if (isMuted) { if (videoRef.current) videoRef.current.currentTime = 0; setIsMuted(false); if (videoRef.current) videoRef.current.play(); }
                    else { setIsMuted(true); }
                  }} style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 10, background: 'rgba(5, 5, 16, 0.5)',
                    backdropFilter: 'blur(8px)', border: '1px solid rgba(68, 204, 255, 0.3)', borderRadius: '50%', width: '44px', height: '44px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff'
                  }}>
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} color="#44CCFF" />}
                  </button>
                  <div className="play-button-overlay" style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px',
                    backgroundColor: 'rgba(68, 204, 255, 0.2)', backdropFilter: 'blur(8px)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(68, 204, 255, 0.4)', zIndex: 3
                  }}>
                    <Play size={32} fill="#44CCFF" color="#44CCFF" style={{ marginLeft: '4px' }} />
                  </div>
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', backdropFilter: 'blur(15px) brightness(0.6)',
                    WebkitBackdropFilter: 'blur(15px) brightness(0.6)',
                    maskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.5) 50%, transparent 100%)', pointerEvents: 'none', zIndex: 1
                  }} />
                </div>
              </div>
            </motion.div>

            <div style={{ position: 'relative' }}>
              {problemes.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-10% 0px -25% 0px' }} transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{ position: isMobile ? 'relative' : 'sticky', top: isMobile ? 'auto' : '38vh', marginBottom: isMobile ? '64px' : '42vh', zIndex: idx + 10, overflow: 'visible' }}
                >
                  <div style={{
                    position: 'absolute', top: isMobile ? '-40px' : '-43px', left: isMobile ? '20px' : `${tabOffsets[idx]}px`,
                    width: isMobile ? 'auto' : `${tabWidths[idx]}px`, minWidth: isMobile ? '88px' : undefined, padding: isMobile ? '0 14px' : '0 16px', whiteSpace: 'nowrap', height: isMobile ? '40px' : '44px', backgroundColor: '#0D0D25', border: '1px solid rgba(68, 204, 255, 0.2)',
                    borderBottom: 'none', borderRadius: isMobile ? '14px 14px 0 0' : '14px 14px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3, gap: '6px'
                  }}>
                    <item.Icon size={isMobile ? 12 : 14} color="#44CCFF" />
                    <span style={{ fontSize: isMobile ? '0.75rem' : '0.82rem', fontWeight: 900, color: '#44CCFF', letterSpacing: '0.06em' }}>{item.tag}</span>
                    <div style={{ position: 'absolute', bottom: '-1px', left: '0', right: '0', height: '2px', backgroundColor: '#0D0D25', zIndex: 4 }} />
                  </div>
                  <div style={{
                    display: 'flex', gap: '2.5rem', padding: isMobile ? '38px 18px 20px 18px' : '4.5rem 2.5rem 2.5rem 2.5rem', backgroundColor: '#0D0D25',
                    borderRadius: isMobile ? '0 16px 16px 16px' : '0 1.5rem 1.5rem 1.5rem', border: '1px solid rgba(68, 204, 255, 0.2)', backdropFilter: 'blur(20px)',
                    boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.8)', height: isMobile ? 'auto' : '400px', position: 'relative', zIndex: 2
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{ fontStyle: 'italic', color: '#F9FAFB', marginBottom: '1rem', fontSize: isMobile ? '16px' : '1.1rem', lineHeight: 1.4, fontWeight: 500, marginTop: 0 }}>{item.title}</p>
                      <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: isMobile ? '14px' : '1rem', margin: 0 }}>{item.desc}</p>
                      {item.stat && (
                        <div style={{ marginTop: '2.25rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div style={{ flex: 1, height: '2px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
                            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>Source en chiffre</span>
                            <div style={{ flex: 1, height: '2px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
                          </div>
                          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'baseline', gap: '0.75rem', flexDirection: isMobile ? 'column' : 'row' }}>
                            <span style={{ fontSize: isMobile ? '1.5rem' : '1.9rem', fontWeight: 800, color: '#44CCFF', lineHeight: 1, whiteSpace: 'nowrap', display: 'inline-block', flexShrink: 0 }}>{item.stat}</span>
                            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: isMobile ? '0.82rem' : '0.88rem', lineHeight: 1.5 }}>
                              {item.statLabel}{item.statSource && <> <span style={{ color: 'rgba(255,255,255,0.35)' }}>(Source : {item.statSource})</span></>}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div style={{ height: isMobile ? '2rem' : '40vh' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 03 — NOTRE SERVICE (ex "comment ça marche") ═══ */}
      <section ref={serviceSectionRef} className={`section-padding notre-service-section ${serviceInView ? 'is-in-view' : ''}`} style={{ backgroundColor: 'transparent' }}>
        <div className="container fade-in">
          <div style={{ marginBottom: '3.5rem', maxWidth: '760px' }}>
            <p style={kicker}>NOTRE SERVICE</p>
            <h2 style={{ ...h2Style, marginBottom: '1.25rem' }}>Data, prospection, transmission</h2>
            <p style={chapo}>Trois étapes d'un même travail : trouver les bonnes entreprises, les adresser et les appeler, puis transmettre à vos équipes les outils et méthodes pour qu'elles prennent le relais si elles le souhaitent.</p>
          </div>

          <div className="notre-service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', position: 'relative' }}>
            <div className="service-divider service-divider-1" />
            <div className="service-divider service-divider-2" />

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, ease: 'easeOut' }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <span style={{ ...kicker, display: 'inline-block', marginBottom: '0.4rem' }}>AVANT</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F9FAFB', margin: 0 }}>Data B2B</h3>
              </div>
              <BriqueCard Icon={Database} title="Data" desc="Nous construisons la base sur signal, nous la nettoyons, nous l'enrichissons en emails, téléphones et profils LinkedIn, et vous livrons la donnée à jour dans votre CRM." link="/data" isMobile={isMobile}
                tools={[{ src: logoHubspot, label: 'HubSpot' }, { src: logoPipedrive, label: 'Pipedrive' }, { src: logoSalesforce, label: 'Salesforce' }, { src: logoFullenrich, label: 'Full Enrich' }]} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <span style={{ ...kicker, display: 'inline-block', marginBottom: '0.4rem' }}>PENDANT</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F9FAFB', margin: 0 }}>Prospection</h3>
              </div>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <BriqueCard Icon={Mail} title="Campagnes" link="/prospection/campagne" tools={[{ label: 'Repliik' }]}
                  desc={<>Nous avons développé <a href="https://repliik.com" target="_blank" rel="noopener noreferrer" style={{ color: '#44CCFF' }}>Repliik.com</a>, notre solution d'enrichissement de contacts et d'envoi de messages multicanal, emails et LinkedIn inclus. Chaque message est personnalisé pour chaque contact.</>} />
                <BriqueCard Icon={Phone} title="Téléphone" desc="Les appels sont passés par un commercial B2B avec plus de dix ans d'expérience en prospection directe." link="/prospection/cold-call" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <span style={{ ...kicker, display: 'inline-block', marginBottom: '0.4rem' }}>APRÈS</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F9FAFB', margin: 0 }}>Transmission</h3>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: '-250px', left: '-250px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, transparent 70%)', filter: 'blur(110px)', zIndex: 0, pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <BriqueCard Icon={GraduationCap} title="Transmission" desc="Transmettre ce qui marche : SPIN Selling, outils IA, Automatisation Veille et Outbound, Production contenu. Vos équipes sont formées à la prospection, au marketing et à la communication avec l'IA." link="/formations" />
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.78rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.75rem' }}>Formations avec l'IA :</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem' }}>
                  {formationTeasers.map((f, idx) => (
                    <button key={f.label} type="button" onClick={() => setFormationModalIdx(idx)} className="formation-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                      <img src={f.image} alt={f.label} className="formation-thumb" style={{ width: '112px', height: '112px', borderRadius: '14px', objectFit: 'cover' }} />
                      <span className="formation-label" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>{f.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 04B — EXEMPLE DE STRUCTURE D'ACCOMPAGNEMENT ═══ */}
      <section className="section-padding" style={{ backgroundColor: 'transparent' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={kicker}>MÉTHODE</p>
            <h2 style={{ ...h2Style, marginBottom: '1rem' }}>Structure d'accompagnement</h2>
            <p style={{ ...chapo, margin: '0 auto' }}>Voici un exemple de la méthodologie avec laquelle nous accompagnons les entreprises, que nous adaptons à chaque fois au contexte.</p>
          </div>
          <Timeline isMobile={isMobile} />
        </div>
      </section>

      {/* ═══ 05 — CAS CLIENTS ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#050510', paddingTop: '3rem' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p style={kicker}>CAS CLIENTS</p>
            <h2 style={{ ...h2Style, marginBottom: '1.5rem' }}>Résultats concrets</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: '700px', margin: '0 auto' }}>Actions réelles, impacts mesurables</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {casesData.filter(c => ['crm-industrie', 'pipeline-b2b', 'formation-vente'].includes(c.id)).map((c, idx) => {
              const img = caseImages[c.id];
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.18 }}
                >
                  <Link href={`/cas-clients/${c.id}`} style={{
                    background: c.bgGradient || '#0D0D25', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '2.5rem',
                    cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '340px',
                    position: 'relative', overflow: 'hidden', textDecoration: 'none', transition: 'all 0.3s ease'
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
                    {img && (<img src={img} alt="" className="card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.38, transition: 'opacity 0.4s ease', pointerEvents: 'none' }} />)}
                    <div className="card-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,46,0.8) 30%, rgba(10,15,46,0.3) 100%)', transition: 'background 0.4s ease', pointerEvents: 'none' }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <Tag>{caseLabels[c.id] || c.tags[0]}</Tag>
                      <div style={{ marginTop: '1.2rem', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)' }}>{c.shortTitle}</div>
                      {c.id === 'crm-industrie' ? (
                        <div style={{ marginBottom: '1.4rem' }}>
                          <div style={{ fontSize: '1.6rem', fontWeight: 700, lineHeight: 1.2, color: '#44CCFF', letterSpacing: '-0.01em' }}>+32 rendez-vous qualifiés</div>
                          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>avec des directeurs d'exploitation en 5 mois</div>
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
                </motion.div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/cas-clients" style={{
              display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: '#44CCFF', fontWeight: 600,
              padding: '1rem 2.5rem', borderRadius: '8px', border: '1px solid #44CCFF', textDecoration: 'none', transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(68, 204, 255, 0.05)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'scale(1)'; }}>
              Voir tous les cas <ArrowRight size={18} style={{ marginLeft: '0.75rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 06 — COMBIEN ÇA COÛTE ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#050510', paddingBottom: '3rem', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '-180px', right: '-120px', width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.55) 0%, transparent 70%)', filter: 'blur(110px)', zIndex: 0, pointerEvents: 'none' }} />
        <div className="container fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={kicker}>COMBIEN ÇA COÛTE</p>
            <h2 style={h2Style}>Nos services adaptés à vos besoins</h2>
          </div>

          <PricingTabs />
        </div>
      </section>

      {/* ═══ 07 — FAQ ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#050510', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={kicker}>F.A.Q.</p>
            <h2 style={{ ...h2Style, textAlign: 'center' }}>Questions fréquentes</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqItems.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.q} answer={faq.a} isOpen={openFAQ === idx} onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 08 — ILS NOUS FONT CONFIANCE (logos) ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#050510', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container fade-in">
          <PartnerLogosMarquee description="Nous avons aidé ces entreprises à générer des rendez-vous qualifiés et à structurer durablement leur prospection sortante." contained={true} />
        </div>
      </section>

      {/* ═══ 09 — CTA FINAL ═══ */}
      <ZoomRevealCTA isMobile={isMobile} ctaRef={ctaRef} />

    </div>
  );
};

export default Home;
