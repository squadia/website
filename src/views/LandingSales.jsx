'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Zap, ArrowRight, Users, BookOpen, ChevronDown, Rocket, CheckCircle2, Star, UserPlus, Mail } from 'lucide-react';
import ClientLogosSection from '../components/ui/ClientLogosSection';
import EnjeuxCarousel from '../components/ui/EnjeuxCarousel';
const fonds2 = '/assets/images/fonds2-CAwYIQyU.jpeg';
import { casesData } from '../data/cases';
import CasesShowcase from '../components/ui/CasesShowcase';
import CtaFinalZoom from '../components/ui/CtaFinalZoom';
const teamSquadia = '/assets/images/notremission/team-squadia.png';
const teamworkImg = '/assets/images/salesdirecteur/teamwork.png';
const pipelineImg = '/assets/images/pipeline-b2b.jpeg';
const formationImg = '/assets/images/formationB2B.png';
const transformerCRMImg = '/assets/images/transformerCRM.jpeg';
const imgSalesManager = '/assets/images/ressources/new-sales-manager.jpeg';
const blogFormationCommercialeImg = '/assets/images/blog/formationcommercialeB2B.jpeg';
const blogProspectionImg = '/assets/images/blog/blog4.jpeg';
const blogDataB2BImg = '/assets/images/blog/cleaningdata.jpeg';
const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
  <div
    onClick={onToggle}
    style={{
      backgroundColor: '#F6F3EC',
      border: '1px solid rgba(176,141,87,0.18)',
      borderRadius: '16px',
      padding: '1.6rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    }}
  >
    <div style={{
      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
      color: '#1C2B27', fontSize: '1.05rem', fontWeight: 600, gap: '1rem'
    }}>
      <span>{question}</span>
      <ChevronDown style={{
        transition: 'transform 0.3s ease',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        color: '#8A6D3B', flexShrink: 0
      }} />
    </div>
    <div style={{
      maxHeight: isOpen ? '400px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.35s ease-in-out, opacity 0.3s ease',
      opacity: isOpen ? 1 : 0
    }}>
      <div style={{ marginTop: '1.1rem', color: 'rgba(28,43,39,0.6)', lineHeight: 1.65, fontSize: '0.98rem' }}>{answer}</div>
    </div>
  </div>
);

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
  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, backgroundColor: '#1F3A33', color: '#F6F3EC', border: 'none' }}>
    {children}
  </span>
);

const methodKicker = { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A6D3B', marginBottom: '0.75rem' };
const methodH2Style = { fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#1C2B27', lineHeight: 1.2 };

const timelineSteps = [
  { week: 'Semaine 1', title: 'Atelier de cadrage', desc: 'Objectifs, cible, périmètre. On aligne la mission sur votre organisation.', image: '/atelier_cadrage.webp' },
  { week: 'Semaine 2', title: 'Construction de la base', desc: 'Extraction sur signal, nettoyage, validation avec vous.', image: '/constructionbase.webp' },
  { week: 'Semaine 3', title: 'Messages et outils', desc: 'Rédaction des séquences, mise en place du CRM et du tableau de bord.', image: '/copywriting.webp' },
  { week: 'Semaine 4 et suite', title: 'Campagnes et appels', desc: 'Les séquences tournent, les appels démarrent, point hebdomadaire.', image: '/coldcall.webp' },
];

const StepText = ({ s }) => (
  <div>
    <p style={{ ...methodKicker, marginBottom: '0.4rem', fontSize: '0.7rem' }}>{s.week}</p>
    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1C2B27', margin: '0 0 0.5rem' }}>{s.title}</p>
    <p style={{ fontSize: '0.95rem', color: 'rgba(28,43,39,0.6)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
  </div>
);

const StepImage = ({ src, label }) => (
  <div style={{ aspectRatio: '4/3', borderRadius: '14px', border: '1px solid rgba(28,43,39,0.16)', overflow: 'hidden' }}>
    <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
  </div>
);

const Timeline = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 80%', 'end 40%'] });
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
  <div ref={timelineRef} style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
    <div className="timeline-spine" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'rgba(176,141,87,0.15)', transform: 'translateX(-50%)' }} />
    <motion.div className="timeline-spine-progress" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: '#1F3A33', x: '-50%', scaleY: spineScale, transformOrigin: 'top', zIndex: 1 }} />
    {timelineSteps.map((s, i) => {
      const imageLeft = i % 2 === 0;
      return (
        <div key={i} className="timeline-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', position: 'relative', marginBottom: i === timelineSteps.length - 1 ? 0 : '6rem' }}>
          <div className="timeline-dot" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '14px', height: '14px', borderRadius: '50%', background: '#F6F3EC', border: '2px solid #B08D57', zIndex: 2 }} />
          {imageLeft ? (
            <>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
                <StepText s={s} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <StepText s={s} />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} />
              </motion.div>
            </>
          )}
        </div>
      );
    })}
  </div>
  );
};

const LandingSales = () => {
  useScrollReveal();
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    document.title = "Squadia pour Directeurs Commerciaux : CRM et pipeline B2B";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia aide les directions commerciales B2B à fiabiliser leur pipeline, structurer la prospection et exploiter les bons signaux d'achat. CRM et automatisation PME/ETI.";
    }
  }, []);

  const enjeux = [
    { short: 'Big Deals', title: 'Gagner les Big Deals', desc: "Pour anticiper les gros dossiers, il faut les signaux (projet, recrutement, réorganisation) qui permettent d'être en amont, d'influencer le cahier des charges et de devancer les concurrents.", icon: <Target color="#8A6D3B" />, image: '/assets/images/salesdirecteur/statscall.webp' },
    { short: 'Équipe disparate', title: 'Manager une équipe disparate', desc: "Les seniors excellent en closing mais évitent la prospection à froid. Les juniors appellent sans méthode ni signaux pour prioriser leurs cibles.", icon: <Users color="#8A6D3B" />, image: '/assets/images/dg/recrutement.webp' },
    { short: 'Marketing inadapté', title: 'Un marketing pas toujours adapté', desc: "Salons, webinars ou marketing décentralisé qui ne tient pas compte des spécificités du marché français : ça n'aide pas toujours à apporter les leads dont vous avez besoin.", icon: <Zap color="#8A6D3B" />, image: '/assets/images/dg/pbfichier.webp' },
    { short: "Faire grandir l'équipe", title: "Faire grandir l'équipe", desc: "En France, il faut environ 3 mois pour qu'un commercial rejoigne l'équipe, puis 3 mois de plus pour être pleinement opérationnel. Les objectifs de l'année n'attendent pas.", icon: <UserPlus color="#8A6D3B" />, image: '/assets/images/salesdirecteur/entretien.webp' }
  ];


  const piliers = [
    { title: 'Expérience vente complexe', desc: "Mid-market ou grands comptes stratégiques : nos consultants ont géré ce type de cycle de vente pendant 25 ans avant de rejoindre Squadia.", icon: <Star color="#8A6D3B" /> },
    { title: "Signaux d'achats", desc: "Des signaux d'achat réels (recrutement, levée, changement d'organisation) qui indiquent qu'un compte est prêt à acheter maintenant, pas juste dans votre cible théorique.", icon: <Target color="#8A6D3B" /> },
    { title: 'Automatisation séquence', desc: "Le temps est la ressource la plus rare en transformation. C'est pour ça qu'on a construit nos propres outils plutôt que d'attendre ceux du marché.", icon: <Rocket color="#8A6D3B" /> },
    { title: <>Réagir plus vite<br />grâce à l'IA</>, desc: "Grâce à notre agent d'IA embarqué, on répond quasi instantanément sur vos campagnes LinkedIn, au moment où le prospect exprime son intérêt.", icon: <CheckCircle2 color="#8A6D3B" /> }
  ];

  const faqs = [
    { q: 'Comment améliorer la fiabilité du pipeline sans tout reconstruire ?', a: "On commence par un diagnostic des points de friction réels : pourquoi le CRM n'est pas mis à jour, pourquoi les prévisions sont floues, pourquoi certains commerciaux closent et d'autres non. Ensuite on structure ce qui manque, sans tout jeter." },
    { q: 'Combien de temps pour avoir un pipeline fiable ?', a: "Les premiers signaux d'amélioration arrivent en 30 à 60 jours. Un CRM bien configuré et des automatisations en place changent les habitudes rapidement quand les commerciaux voient la valeur que ça leur apporte." },
    { q: 'Peut-on travailler uniquement sur la prospection ?', a: "Oui. La brique Data peut être activée indépendamment. On identifie les comptes qui ont une vraie raison d'acheter maintenant, avec les bons interlocuteurs et le bon angle d'approche." },
    { q: 'La formation commerciale, ça s\'adresse à quel niveau d\'expérience ?', a: "À tous les niveaux. Les juniors repartent avec une méthode structurée. Les seniors retrouvent de nouveaux réflexes et des outils qui leur font gagner du temps sur les tâches qu'ils n'aiment pas. Les deux ressortent avec un langage commun." }
  ];

  return (
    <div className="landing-sales" style={{ background: '#F6F3EC', color: '#1C2B27', minHeight: '100vh' }}>
      
      {/* ═══ SECTION 1 : HERO ═══ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#F6F3EC'
      }}>
        <style>{`
          @keyframes fadeBgS {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slidePersonS {
            0%   { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeContentS {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes drawSparklineS {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes drawArcS {
            0% { stroke-dasharray: 0 132; }
            100% { stroke-dasharray: 95 132; }
          }
          .dc-kpi-card {
            background: rgba(246,243,236,0.6);
            border: 1px solid rgba(176,141,87,0.15);
            border-radius: 14px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            position: relative;
            overflow: visible;
          }
          .dc-kpi-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(176,141,87,0.3), transparent);
            border-radius: 14px 14px 0 0;
          }
            .dc-kpi-card::after {
              content: '';
              position: absolute;
              top: 50%; left: 50%; width: 150px; height: 150px;
              background: radial-gradient(circle, rgba(176,141,87,0.05) 0%, transparent 70%);
              transform: translate(-50%, -50%);
              pointer-events: none;
            }
            @keyframes fadeGlowS { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
        `}</style>

        {/* Background */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url(${fonds2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0,
          animation: 'fadeBgS 1s ease 0.2s forwards',
          zIndex: 1
        }} />

        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to right, rgba(246,243,236,0.98) 0%, rgba(246,243,236,0.85) 45%, rgba(246,243,236,0.0) 80%)',
          zIndex: 2,
          opacity: 0,
          animation: 'fadeBgS 1s ease 0.2s forwards'
        }} />

        {/* Fade bas : transition douce vers la section suivante (#F6F3EC), évite la coupe nette de l'image */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, width: '100%', height: '260px',
          background: 'linear-gradient(to bottom, transparent 0%, #F6F3EC 100%)',
          zIndex: 3,
          pointerEvents: 'none'
        }} />

        {/* Gradient fade : transition douce vers la section suivante, sans photo ni titre en overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0, right: 0,
          width: '55%',
          height: '40%',
          background: 'linear-gradient(to top, rgba(246,243,236,0.88) 0%, rgba(246,243,236,0.52) 38%, rgba(246,243,236,0.12) 68%, transparent 100%)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          maskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)',
          zIndex: 4,
          pointerEvents: 'none'
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 5, display: 'flex', flexWrap: 'wrap', width: '100%', paddingTop: '150px', paddingBottom: '7rem', paddingLeft: '8%', paddingRight: '5%' }}>

          <div style={{ flex: '0 0 65%', maxWidth: '850px', paddingRight: '2rem' }}>

            <h1 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              color: '#1C2B27',
              opacity: 0,
              animation: 'fadeContentS 1.2s ease 0.3s forwards'
            }}>
              <span style={{ display: 'block' }}>Un pipeline fiable.</span>
              <span style={{ display: 'block' }}>Des objectifs tenus :</span>
              <span style={{ display: 'block' }}>Dès les 30 premiers jours.</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(28,43,39,0.6)',
              marginBottom: '3.5rem',
              maxWidth: '800px',
              lineHeight: 1.6,
              fontWeight: 400,
              opacity: 0,
              animation: 'fadeContentS 1.2s ease 0.4s forwards'
            }}>
              Trop de pipelines reposent sur de l'optimisme plutôt que sur de la réalité. Squadia structure les systèmes qui donnent à vos équipes les bons leads au bon moment, avec la méthode pour les convertir.
            </p>

            {/* KPI Cards */}
            <div style={{
              display: 'flex',
              gap: '1.2rem',
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeContentS 1.2s ease 0.5s forwards'
            }}>
              {/* Card 1 : Performance pipeline */}
              <div className="dc-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#1C2B27' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(28,43,39,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Performance pipeline</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>+23%</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(28,43,39,0.6)', marginBottom: '1rem' }}>
                  <span style={{ color: '#8A6D3B' }}>Croissance</span> pipeline
                </div>
                <svg viewBox="0 0 100 32" width="100%" height="34" style={{ display: 'block', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="fillGradS" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8A6D3B" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#8A6D3B" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="sparkClipS"><rect x="0" y="0" width="100" height="32" /></clipPath>
                  </defs>
                  <path d="M0 28 L20 24 L40 20 L60 12 L80 16 L100 2 L100 32 L0 32 Z" fill="url(#fillGradS)" stroke="none" clipPath="url(#sparkClipS)" />
                  <path d="M0 28 L20 24 L40 20 L60 12 L80 16 L100 2"
                    fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="200" strokeDashoffset="200"
                    style={{ animation: 'drawSparklineS 1.6s ease 0.9s forwards' }}
                  />
                  {[[0,28],[20,24],[40,20],[60,12],[80,16],[100,2]].map(([cx,cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r={i === 5 ? 3.5 : 2}
                      fill={i === 5 ? '#8A6D3B' : 'rgba(176,141,87,0.7)'}
                      stroke={i === 5 ? 'rgba(176,141,87,0.3)' : 'none'}
                      strokeWidth={i === 5 ? 4 : 0}
                      style={{ opacity: 0, animation: `fadeContentS 0.25s ease ${1.5 + i * 0.08}s forwards` }}
                    />
                  ))}
                </svg>
              </div>

              {/* Card 2 : Deals en closing */}
              <div className="dc-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#1C2B27', position: 'relative' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(28,43,39,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Deals en closing</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>+18</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(28,43,39,0.6)' }}>
                  <span style={{ color: '#8A6D3B' }}>ce mois</span> : 3 en final
                </div>
                <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', width: '52px', height: '52px' }}>
                  <svg viewBox="0 0 52 52" width="52" height="52" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="26" cy="26" r="21" fill="none" stroke="rgba(28,43,39,0.14)" strokeWidth="4.5" />
                    <circle cx="26" cy="26" r="21" fill="none" stroke="#B08D57" strokeWidth="4.5"
                      strokeLinecap="round" strokeDasharray="0 132"
                      style={{ animation: 'drawArcS 1.8s cubic-bezier(0.4,0,0.2,1) 0.9s forwards' }}
                    />
                  </svg>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', fontWeight: 700, color: '#8A6D3B' }}>72%</div>
                </div>
              </div>

              {/* Card 3 : Signal détecté */}
              <div className="dc-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#1C2B27' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(28,43,39,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Signal détecté</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.3rem' }}>Dir. Achat</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(28,43,39,0.6)', marginBottom: '1rem' }}>
                  <span style={{ color: '#8A6D3B' }}>Prise de poste</span> : il y a 3h
                </div>
                <svg viewBox="0 0 90 30" width="90" height="30" style={{ display: 'block' }}>
                  {[
                    { x: 0,  h: 10, accent: false },
                    { x: 16, h: 18, accent: false },
                    { x: 32, h: 14, accent: false },
                    { x: 48, h: 30, accent: true  },
                    { x: 64, h: 22, accent: false },
                  ].map((b, i) => (
                    <rect key={i} x={b.x} y={30 - b.h} width="12" height={b.h} rx="3"
                      fill={b.accent ? '#8A6D3B' : 'rgba(176,141,87,0.25)'}
                      style={{ opacity: 0, animation: `fadeContentS 0.35s ease ${0.9 + i * 0.12}s forwards` }}
                    />
                  ))}
                </svg>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 : VOS ENJEUX ═══ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '10rem 2rem', background: '#F6F3EC' }}>
        <div style={{ position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)', width: '550px', height: '550px', background: 'transparent', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ ...methodKicker, textAlign: 'center' }}>Principaux freins</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', textAlign: 'center', color: '#1C2B27' }}>Contraintes du sales manager en 2026</h2>
          <EnjeuxCarousel items={enjeux} />
        </div>
      </section>

      {/* ═══ SECTION 2B : NOTRE SOLUTION (bento) ═══ */}
      <section className="section-padding" style={{ background: '#F6F3EC' }}>
        <style>{`
          .dc-bento { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 220px 220px auto; gap: 1.5rem; }
          .dc-bento-hero { grid-column: 1 / 3; grid-row: 1 / 3; }
          .dc-bento-stat-top { grid-column: 3; grid-row: 1; }
          .dc-bento-feature { grid-column: 3; grid-row: 2; }
          .dc-bento-bottom-1 { grid-column: 1; grid-row: 3; }
          .dc-bento-bottom-2 { grid-column: 2; grid-row: 3; }
          .dc-bento-bottom-3 { grid-column: 3; grid-row: 3; }
          .dc-bento-card { border-radius: 22px; padding: 1.8rem; transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease; }
          .dc-bento-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(28,43,39,0.122); }
          @media (max-width: 900px) {
            .dc-bento { grid-template-columns: 1fr; grid-template-rows: auto; }
            .dc-bento-hero, .dc-bento-stat-top, .dc-bento-feature, .dc-bento-bottom-1, .dc-bento-bottom-2, .dc-bento-bottom-3 { grid-column: 1; grid-row: auto; }
            .dc-bento-hero { min-height: 380px; }
          }
        `}</style>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={methodKicker}>Notre solution</p>
            <h2 style={methodH2Style}>Agrandir votre impact auprès de votre cible</h2>
          </div>
          <div className="dc-bento">

            {/* Carte héro : présentation de la solution */}
            <div className="dc-bento-card dc-bento-hero" style={{
              position: 'relative', overflow: 'hidden',
              border: '1px solid rgba(176,141,87,0.18)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            }}>
              <img src={teamworkImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', opacity: 0.32, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(246,243,236,0.95) 15%, rgba(246,243,236,0.55) 60%, rgba(246,243,236,0.3) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1C2B27', marginBottom: '0.9rem', lineHeight: 1.2 }}>Démultiplier l'équipe en place</h3>
                <p style={{ color: 'rgba(28,43,39,0.65)', fontSize: '1rem', lineHeight: 1.65, maxWidth: '460px', margin: 0 }}>Recruter, comprendre un nouveau territoire, tenir les objectifs de l'année : un sales manager ne peut pas tout mener de front. Squadia allège cette charge en démultipliant les actions de l'équipe déjà en place.</p>
              </div>
            </div>

            {/* Stat : canaux activés */}
            <div className="dc-bento-card dc-bento-stat-top" style={{
              background: 'linear-gradient(135deg, #1F3A33 0%, #16302A 100%)', color: '#F6F3EC',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(246,243,236,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={20} color="#F6F3EC" />
              </div>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 700, lineHeight: 1 }}>4</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(246,243,236,0.85)', marginTop: '0.3rem' }}>canaux activés en parallèle</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(246,243,236,0.72)', marginTop: '0.3rem' }}>Email · LinkedIn · Téléphone · Courrier</div>
              </div>
            </div>

            {/* Feature : IA embarquée */}
            <div className="dc-bento-card dc-bento-feature" style={{
              background: 'rgba(176,141,87,0.07)', border: '1px solid rgba(176,141,87,0.3)', boxShadow: '0 0 40px -12px rgba(176,141,87,0.25)', color: '#1C2B27',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(176,141,87,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                {piliers[3].icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.3, color: '#1C2B27' }}>{piliers[3].title}</h3>
              <p style={{ color: 'rgba(28,43,39,0.6)', lineHeight: 1.6, fontSize: '0.88rem', margin: 0 }}>{piliers[3].desc}</p>
            </div>

            {/* Bottom 1 : Expérience vente complexe */}
            <div className="dc-bento-card dc-bento-bottom-1" style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.9rem', width: '40px', height: '40px', background: 'rgba(176,141,87,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                {piliers[0].icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.3, color: '#1C2B27' }}>{piliers[0].title}</h3>
              <p style={{ color: 'rgba(28,43,39,0.6)', lineHeight: 1.6, fontSize: '0.88rem', margin: 0 }}>{piliers[0].desc}</p>
            </div>

            {/* Bottom 2 : Signaux d'achats */}
            <div className="dc-bento-card dc-bento-bottom-2" style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.9rem', width: '40px', height: '40px', background: 'rgba(176,141,87,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                {piliers[1].icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.3, color: '#1C2B27' }}>{piliers[1].title}</h3>
              <p style={{ color: 'rgba(28,43,39,0.6)', lineHeight: 1.6, fontSize: '0.88rem', margin: 0 }}>{piliers[1].desc}</p>
            </div>

            {/* Bottom 3 : Automatisation séquence */}
            <div className="dc-bento-card dc-bento-bottom-3" style={{ background: '#1F3A33', border: '1px solid #1F3A33', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.9rem', width: '40px', height: '40px', background: 'rgba(246,243,236,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                {piliers[2].icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.3, color: '#F6F3EC' }}>{piliers[2].title}</h3>
              <p style={{ color: 'rgba(246,243,236,0.72)', lineHeight: 1.6, fontSize: '0.88rem', margin: 0 }}>{piliers[2].desc}</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 : MÉTHODE ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={methodKicker}>MÉTHODE</p>
            <h2 style={methodH2Style}>Comment nous travaillons ensemble</h2>
          </div>
          <Timeline />
        </div>
      </section>


      {/* ═══ SECTION 4 : CAS CLIENTS ═══ */}
      <CasesShowcase images={caseImagesDG} />

      {/* ═══ SECTION 5 : RESSOURCE ═══ */}
      <section style={{ padding: '10rem 2rem', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#8A6D3B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>RESSOURCES</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#1C2B27', marginBottom: '3rem', lineHeight: 1.2 }}>Une ressource pour vous.</h2>
          <Link
            href="/ressources/guide-sales-manager"
            className="ressource-card-link"
            style={{ textDecoration: 'none', display: 'flex', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(176,141,87,0.15)', borderRadius: '16px', overflow: 'hidden', color: '#1C2B27', transition: 'border-color 0.3s, transform 0.3s', minHeight: '200px' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(176,141,87,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(176,141,87,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div className="ressource-img-mobile" style={{ flex: 1, minHeight: '100%', overflow: 'hidden' }}>
              <img src={imgSalesManager} alt="Guide Sales Manager" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ flex: 2, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ color: '#8A6D3B', fontSize: '13px', fontWeight: 600, marginBottom: '12px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sales Manager</span>
              <h3 style={{ color: '#1C2B27', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.25 }}>Mini-guide Sales Manager B2B : réussir vos 90 premiers jours</h3>
              <p style={{ color: 'rgba(28,43,39,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>Méthodes éprouvées, plans d'action, IA, outils et conseils pratiques pour réussir votre prise de poste et atteindre vos premiers résultats.</p>
              <span style={{ alignSelf: 'flex-start', background: '#1F3A33', color: '#F6F3EC', padding: '10px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
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
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', textAlign: 'center' }}>À lire aussi</h2>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <Link href="/blog/formation-commerciale-b2b-ia" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={blogFormationCommercialeImg} alt="Formation commerciale B2B" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #3F7A5E', backgroundColor: 'rgba(63,122,94,0.1)', color: '#3F7A5E' }}>Formation commerciale</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '1.5rem', flexGrow: 1, color: '#1C2B27' }}>Formation commerciale B2B : comment rendre vos équipes autonomes et performantes avec l'IA</h3>
                <div style={{ marginTop: 'auto' }}>
                  <span style={{ backgroundColor: 'rgba(31,58,51,0.1)', color: '#1F3A33', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Lire l'article <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/blog/prospection-multicanale-b2b-erreurs" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={blogProspectionImg} alt="Prospection multicanale B2B" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #B5652A', backgroundColor: 'rgba(181,101,42,0.1)', color: '#B5652A' }}>Prospection</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '1.5rem', flexGrow: 1, color: '#1C2B27' }}>Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter</h3>
                <div style={{ marginTop: 'auto' }}>
                  <span style={{ backgroundColor: 'rgba(31,58,51,0.1)', color: '#1F3A33', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Lire l'article <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/blog/nettoyage-segmentation-enrichissement-donnees-b2b" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={blogDataB2BImg} alt="Nettoyage et segmentation des données B2B" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #B5652A', backgroundColor: 'rgba(181,101,42,0.1)', color: '#B5652A' }}>Data B2B</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '1.5rem', flexGrow: 1, color: '#1C2B27' }}>Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit</h3>
                <div style={{ marginTop: 'auto' }}>
                  <span style={{ backgroundColor: 'rgba(31,58,51,0.1)', color: '#1F3A33', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Lire l'article <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION NOUVELLE : ILS NOUS FONT CONFIANCE */}
      <section className="section-padding" style={{ backgroundColor: '#F6F3EC', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container fade-in">
          <ClientLogosSection contained={true} />
        </div>
      </section>

      {/* ═══ CTA FINAL : PROCHAINE ÉTAPE ═══ */}
      <CtaFinalZoom
        teamSquadia={teamSquadia}
        eyebrow="Prochaine étape"
        kicker="Rejoignez-nous :"
        title={<>Prêt à fiabiliser votre pipeline<br />et sécuriser vos objectifs ?</>}
        description="30 minutes pour identifier ce qui freine votre pipeline."
      />

    </div>
  );
};

export default LandingSales;
