'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Zap, BarChart3, ArrowRight, ShieldAlert, Crosshair, Users, BookOpen, ChevronDown, Rocket, CheckCircle2, Star } from 'lucide-react';
import ClientLogosSection from '../components/ui/ClientLogosSection';
const c2 = '/assets/images/c2.png';
const fonds2 = '/assets/images/fonds2.png';
import { casesData } from '../data/cases';
const pipelineImg = '/assets/images/pipeline-b2b.jpeg';
const formationImg = '/assets/images/formationB2B.png';
const transformerCRMImg = '/assets/images/transformerCRM.jpeg';
const imgSalesManager = '/assets/images/ressources/new-sales-manager.jpeg';
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

const LandingSales = () => {
  useScrollReveal();
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    document.title = "Squadia pour Directeurs Commerciaux : CRM et pipeline B2B";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia aide les directions commerciales B2B à fiabiliser leur pipeline, structurer la prospection et exploiter les bons signaux d'achat. CRM et automatisation PME/ETI.";
    }
  }, []);

  const enjeux = [
    { title: 'Un pipe peu fiable et difficile à défendre', desc: "Les opportunités s'accumulent dans le CRM mais peu avancent vraiment. La visibilité sur les prévisions de closing est floue. Chaque fin de trimestre ressemble à une course contre la montre et les chiffres annoncés au COMEX ne correspondent pas à la réalité du terrain.", icon: <BarChart3 color="#44CCFF" /> },
    { title: 'On fait le lièvre sans savoir si on va gagner', desc: "L'équipe répond à des appels d'offres sans avoir été en amont pour influencer le cahier des charges. On investit du temps sur des opportunités déjà perdues avant même d'avoir envoyé la proposition. Personne ne sait exactement quand il faut s'impliquer.", icon: <Target color="#44CCFF" /> },
    { title: "Les seniors n'aiment pas prospecter à froid. Les juniors n'ont pas encore l'expérience.", desc: "Les meilleurs commerciaux veulent closer, pas prospecter à froid. Les juniors décrochent le téléphone mais sans méthode ni signaux, leurs efforts produisent peu de résultats. Entre les deux, les bonnes opportunités passent.", icon: <Users color="#44CCFF" /> },
    { title: 'Un CRM qui ne reflète pas la réalité', desc: "Si mettre à jour un compte après un rendez-vous prend 8 minutes et 15 champs, ça ne se fera pas. Les commerciaux ne voient pas la valeur, ils ne le font pas. Le management n'a pas de visibilité fiable. Les décisions se prennent sur des impressions.", icon: <ShieldAlert color="#44CCFF" /> },
    { title: 'Pas de méthode de vente commune', desc: "Chaque commercial a sa propre approche. Un deal marqué gagné pour l'un ne veut pas dire la même chose pour l'autre. Il n'y a pas de langage commun sur ce qu'est un vrai engagement commercial, ni de visibilité sur les étapes clés pour la supply chain ou le marketing.", icon: <Crosshair color="#44CCFF" /> }
  ];

  const apports = [
    { title: "Des leads avec une vraie raison d'acheter maintenant", desc: "Signaux d'achat, nouveaux C-level en poste, recrutements stratégiques, appels d'offres avant publication. Vos commerciaux arrivent sur des comptes en situation d'achat, pas sur des contacts froids sans contexte." },
    { title: 'Un CRM qui se met à jour sans effort', desc: "Comptes-rendus automatiques après visioconférence, enrichissement des contacts, mise à jour des opportunités en temps réel. Moins de saisie manuelle, plus de temps sur le terrain. Et une visibilité réelle sur le pipeline pour le management." },
    { title: 'Une méthode de vente commune dans le CRM', desc: "MEDDIC, plan de compte, engagement clair sur les deals. Quand'un commercial dit qu'il s'engage sur une opportunité, ça veut dire la même chose pour tout le monde, du terrain au COMEX. La supply chain peut anticiper, le marketing peut s'aligner." },
    { title: 'Des équipes formées pour être en amont plutôt qu\'en réaction', desc: "On donne aux juniors les outils pour prospecter efficacement et aux seniors les bonnes raisons de s'y remettre quand les opportunités sont vraiment qualifiées. Les deux ressortent avec une méthode commune et des réflexes partagés." }
  ];

  const faqs = [
    { q: 'Comment améliorer la fiabilité du pipeline sans tout reconstruire ?', a: "On commence par un diagnostic des points de friction réels : pourquoi le CRM n'est pas mis à jour, pourquoi les prévisions sont floues, pourquoi certains commerciaux closent et d'autres non. Ensuite on structure ce qui manque, sans tout jeter." },
    { q: 'Combien de temps pour avoir un pipeline fiable ?', a: "Les premiers signaux d'amélioration arrivent en 30 à 60 jours. Un CRM bien configuré et des automatisations en place changent les habitudes rapidement quand les commerciaux voient la valeur que ça leur apporte." },
    { q: 'Peut-on travailler uniquement sur la prospection ?', a: "Oui. La brique Data peut être activée indépendamment. On identifie les comptes qui ont une vraie raison d'acheter maintenant, avec les bons interlocuteurs et le bon angle d'approche." },
    { q: 'La formation commerciale, ça s\'adresse à quel niveau d\'expérience ?', a: "À tous les niveaux. Les juniors repartent avec une méthode structurée. Les seniors retrouvent de nouveaux réflexes et des outils qui leur font gagner du temps sur les tâches qu'ils n'aiment pas. Les deux ressortent avec un langage commun." }
  ];

  return (
    <div className="landing-sales" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh' }}>
      
      {/* ═══ SECTION 1 : HERO ═══ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#040710'
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
            background: rgba(8,15,35,0.6);
            border: 1px solid rgba(68,204,255,0.15);
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
            background: linear-gradient(90deg, transparent, rgba(68,204,255,0.3), transparent);
            border-radius: 14px 14px 0 0;
          }
            .dc-kpi-card::after {
              content: '';
              position: absolute;
              top: 50%; left: 50%; width: 150px; height: 150px;
              background: radial-gradient(circle, rgba(68,204,255,0.05) 0%, transparent 70%);
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
          background: 'linear-gradient(to right, rgba(6,10,18,0.98) 0%, rgba(6,10,18,0.85) 45%, rgba(6,10,18,0) 80%)',
          zIndex: 2,
          opacity: 0,
          animation: 'fadeBgS 1s ease 0.2s forwards'
        }} />

        {/* Person Image */}
        <div style={{
          position: 'absolute', bottom: 0, right: '5%',
          width: '45%',
          maxWidth: '800px',
          height: '92vh',
          backgroundImage: `url(${c2})`,
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          zIndex: 3,
          opacity: 0,
          animation: 'slidePersonS 3.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards'
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
          animation: 'fadeGlowS 2.5s ease 2s forwards',
          pointerEvents: 'none'
        }} />


        {/* Gradient fade + label */}
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
            Directeur Commercial
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(68,204,255,0.85)', textAlign: 'center' }}>
            Pipeline, deals et performance
          </div>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 5, display: 'flex', flexWrap: 'wrap', width: '100%', paddingTop: '150px', paddingBottom: '7rem', paddingLeft: '8%', paddingRight: '5%' }}>

          <div style={{ flex: '0 0 65%', maxWidth: '850px', paddingRight: '2rem' }}>

            <h1 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              opacity: 0,
              animation: 'fadeContentS 1.2s ease 0.3s forwards'
            }}>
              <span style={{ display: 'block' }}>Un pipeline fiable.</span>
              <span style={{ display: 'block' }}>Des objectifs tenus :</span>
              <span style={{ display: 'block' }}>Dès les 30 premiers jours.</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.45)',
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
              <div className="dc-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#FFF' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Performance pipeline</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>+23%</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                  <span style={{ color: '#44CCFF' }}>Croissance</span> pipeline
                </div>
                <svg viewBox="0 0 100 32" width="100%" height="34" style={{ display: 'block', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="fillGradS" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#44CCFF" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#44CCFF" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="sparkClipS"><rect x="0" y="0" width="100" height="32" /></clipPath>
                  </defs>
                  <path d="M0 28 L20 24 L40 20 L60 12 L80 16 L100 2 L100 32 L0 32 Z" fill="url(#fillGradS)" stroke="none" clipPath="url(#sparkClipS)" />
                  <path d="M0 28 L20 24 L40 20 L60 12 L80 16 L100 2"
                    fill="none" stroke="#44CCFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="200" strokeDashoffset="200"
                    style={{ animation: 'drawSparklineS 1.6s ease 0.9s forwards' }}
                  />
                  {[[0,28],[20,24],[40,20],[60,12],[80,16],[100,2]].map(([cx,cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r={i === 5 ? 3.5 : 2}
                      fill={i === 5 ? '#44CCFF' : 'rgba(68,204,255,0.7)'}
                      stroke={i === 5 ? 'rgba(68,204,255,0.3)' : 'none'}
                      strokeWidth={i === 5 ? 4 : 0}
                      style={{ opacity: 0, animation: `fadeContentS 0.25s ease ${1.5 + i * 0.08}s forwards` }}
                    />
                  ))}
                </svg>
              </div>

              {/* Card 2 : Deals en closing */}
              <div className="dc-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#FFF', position: 'relative' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Deals en closing</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.3rem' }}>+18</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
                  <span style={{ color: '#44CCFF' }}>ce mois</span> : 3 en final
                </div>
                <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', width: '52px', height: '52px' }}>
                  <svg viewBox="0 0 52 52" width="52" height="52" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="26" cy="26" r="21" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4.5" />
                    <circle cx="26" cy="26" r="21" fill="none" stroke="#44CCFF" strokeWidth="4.5"
                      strokeLinecap="round" strokeDasharray="0 132"
                      style={{ animation: 'drawArcS 1.8s cubic-bezier(0.4,0,0.2,1) 0.9s forwards' }}
                    />
                  </svg>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', fontWeight: 700, color: '#44CCFF' }}>72%</div>
                </div>
              </div>

              {/* Card 3 : Signal détecté */}
              <div className="dc-kpi-card" style={{ flex: '1 1 190px', padding: '1.2rem', color: '#FFF' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Signal détecté</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.3rem' }}>Dir. Achat</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                  <span style={{ color: '#44CCFF' }}>Prise de poste</span> : il y a 3h
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
                      fill={b.accent ? '#44CCFF' : 'rgba(68,204,255,0.25)'}
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
      <section style={{ position: 'relative', overflow: 'hidden', padding: '10rem 2rem', background: '#050510' }}>
        <div style={{ position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(37,99,235,0.65) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '4rem', textAlign: 'center', color: '#F9FAFB' }}>Contraintes du sales manager en 2026</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {enjeux.map((item, i) => (
              <div key={i} style={{ padding: '2.5rem', background: 'linear-gradient(135deg, #0d1b35 0%, #111f3a 60%, #0a1628 100%)', border: '1px solid rgba(68,204,255,0.12)', borderRadius: '16px', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.12)'; }}>
                <div style={{ marginBottom: '1.25rem', padding: '0.75rem', background: 'rgba(37,99,235,0.15)', display: 'inline-flex', borderRadius: '10px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.4, color: '#F9FAFB' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 : CE QUE SQUADIA APPORTE ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '4rem', textAlign: 'center' }}>Comment Squadia travaille avec les directions commerciales.</h2>
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

      {/* ═══ SECTION 3B : FORMATION ET DATA ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '2rem', lineHeight: 1.2 }}>Mettre en place une méthode de vente commune sur les comptes stratégiques.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'justify' }}>
              <p>Sur les comptes complexes, chaque commercial qui travaille à sa façon c'est du chiffre d'affaires qui part. Une méthode commune change ça.</p>
              <p>On travaille avec vos équipes sur la qualification des opportunités, la construction de plans de compte actionnables et l'utilisation des outils IA pour préparer chaque rendez-vous et anticiper vos concurrents.</p>
              <p>Résultat : des commerciaux qui parlent le même langage et des comptes stratégiques vraiment travaillés.</p>
            </div>
          </div>

          {/* Deux Blocs Type Tarifs */}
          <div className="grid-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Bloc 1: Formation */}
            <div style={{
              padding: '3rem 2.5rem',
              background: '#0D0D25',
              border: '1px solid #1A1A3A',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '520px',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#FFF' }}>Formation Vente B2B et IA</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.6 }}>
                Donnez à vos équipes les outils IA et la méthode pour prospecter plus intelligemment, qualifier plus vite et closer plus de deals stratégiques.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', flexGrow: 1 }}>
                {[
                  'Méthode MEDDIC adaptée à vos cycles de vente',
                  'Construction de plans de compte actionnables',
                  'Préparation des RDV avec les outils IA',
                  'Lecture des signaux d\'achat et anticipation concurrentielle',
                  'Langage commun du terrain au COMEX',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    <span style={{ color: '#44CCFF', flexShrink: 0, marginTop: '2px' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/formation-ventes-et-ia" className="btn btn-primary" style={{ marginTop: 'auto', textDecoration: 'none', textAlign: 'center', padding: '1rem' }}>
                Découvrir la formation
              </Link>
            </div>

            {/* Bloc 2: Data Lead */}
            <div style={{
              padding: '3rem 2.5rem',
              background: '#0D0D25',
              border: '1px solid #1A1A3A',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '520px',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#FFF' }}>Data Lead</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.6 }}>
                Construisez une base de prospection ultra-qualifiée sur votre segment cible avec des signaux d'achat réels et des contacts vérifiés.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', flexGrow: 1 }}>
                {[
                  'Ciblage ICP précis sur vos segments prioritaires',
                  'Signaux d\'achat en temps réel (recrutements, levées, changements)',
                  'Contacts décideurs vérifiés et enrichis',
                  'Priorisation des comptes selon leur propension à acheter',
                  'Intégration directe dans votre CRM',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    <span style={{ color: '#44CCFF', flexShrink: 0, marginTop: '2px' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/data/data-lead" className="btn btn-outline" style={{ marginTop: 'auto', textDecoration: 'none', textAlign: 'center', padding: '1rem' }}>
                Voir l'offre Data Lead
              </Link>
            </div>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
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
            <Link href="/cas-clients" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: '#44CCFF', fontWeight: 600, padding: '1rem 2.5rem', borderRadius: '8px', border: '1px solid #44CCFF', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(68,204,255,0.05)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'scale(1)'; }}>
              Voir tous les cas <ArrowRight size={18} style={{ marginLeft: '0.75rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 : RESSOURCE ═══ */}
      <section style={{ padding: '10rem 2rem', backgroundColor: '#11111E' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em', fontSize: '0.85rem' }}>RESSOURCES</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '3rem', lineHeight: 1.2 }}>Une ressource pour vous.</h2>
          <Link
            href="/ressources/guide-sales-manager"
            style={{ textDecoration: 'none', display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(68,204,255,0.15)', borderRadius: '16px', overflow: 'hidden', color: '#FFFFFF', transition: 'border-color 0.3s, transform 0.3s', minHeight: '200px' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(68,204,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div className="ressource-img-mobile" style={{ flex: 1, minHeight: '100%', overflow: 'hidden' }}>
              <img src={imgSalesManager} alt="Guide Sales Manager" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ flex: 2, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ color: '#44CCFF', fontSize: '13px', fontWeight: 600, marginBottom: '12px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sales Manager</span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.25 }}>Mini-guide Sales Manager B2B : réussir vos 90 premiers jours</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>Méthodes éprouvées, plans d'action, IA, outils et conseils pratiques pour réussir votre prise de poste et atteindre vos premiers résultats.</p>
              <span style={{ alignSelf: 'flex-start', background: '#FFFFFF', color: '#060612', padding: '10px 22px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Télécharger gratuitement →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══ SECTION 6 : FAQ ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <div style={{ maxWidth: '800px', marginInline: 'auto' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', textAlign: 'center' }}>Questions fréquentes</h2>
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
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', textAlign: 'center' }}>À lire aussi</h2>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <Link href="/blog/formation-commerciale-b2b-ia" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34D399' }}>Formation commerciale</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Formation commerciale B2B : comment rendre vos équipes autonomes et performantes avec l'IA</h3>
              <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
            </Link>

            <Link href="/blog/prospection-multicanale-b2b-erreurs" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>Prospection</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter</h3>
              <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
            </Link>

            <Link href="/blog/nettoyage-segmentation-enrichissement-données-b2b" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>Data B2B</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit</h3>
              <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION NOUVELLE : ILS NOUS FONT CONFIANCE */}
      <ClientLogosSection />

      {/* ═══ SECTION 8 : CTA FINAL ═══ */}
      <section className="section-padding" style={{ background: '#0A0A1A', textAlign: 'center' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', maxWidth: '800px', marginInline: 'auto' }}>
            Prêt à fiabiliser votre pipeline et sécuriser vos objectifs ?
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', textDecoration: 'none' }}>Prendre RDV</Link>
            <Link href="/tarifs" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Voir nos offres <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingSales;
