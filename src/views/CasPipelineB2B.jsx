'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const pipelineImg = '/assets/images/pipeline-b2b.jpeg';
const bgUseCase = '/assets/images/bgusecase.png';
const CasPipelineB2B = () => {
  useEffect(() => {
    document.title = "Cas client : Pipeline B2B from scratch · Squadia";
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '35', label: 'leads qualifiés', sub: 'premier mois' },
    { value: '30', label: 'leads qualifiés', sub: 'deuxième mois' },
    { value: '10', label: 'engagements de commandes', sub: 'en 6 semaines' },
    { value: '5→10', label: 'objectif initial dépassé', sub: '2× l\'objectif en moins de temps' },
  ];

  const actions = [
    {
      step: '01',
      title: 'Construction de la base de données',
      body: 'Six sources de data scraping croisées, une qualification manuelle de chaque entreprise selon des critères précis de chiffre d\'affaires et de présence physique, un enrichissement complet des contacts avec noms, emails et numéros directs. Le fichier final a été segmenté par priorité d\'approche.'
    },
    {
      step: '02',
      title: 'Structuration du CRM HubSpot',
      body: 'Mise en place d\'un CRM dédié sur HubSpot avec les dashboards nécessaires pour suivre l\'avancement du pipeline et comprendre ce qui progressait. Une vraie visibilité commerciale là où il n\'y avait rien avant.'
    },
    {
      step: '03',
      title: 'Stratégie d\'activation LinkedIn',
      body: 'Conception d\'une strategie LinkedIn qui positionnait l\'initiative comme une co-construction avec les futurs clients, pas une vente frontale. Les entreprises ciblées se sont senties impliquées dans quelque chose qui les concernait directement, avec la force de frappe d\'un groupe à 35 milliards derrière. Le site de présentation de l\'offre a aussi été produit dans le cadre de la mission.'
    },
  ];

  return (
    <div style={{ background: '#06060F', color: '#F9FAFB', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}>
        {/* Photo de fond */}
        <img src={pipelineImg} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top',
          pointerEvents: 'none'
        }} />
        {/* Masque diagonal bleu : couvre ~65% depuis la gauche */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(105deg, rgba(14,26,45,0.97) 0%, rgba(14,26,45,0.93) 38%, rgba(14,26,45,0.72) 58%, rgba(14,26,45,0.15) 72%, transparent 82%)',
        }} />
        {/* Lisière basse pour transition vers la section suivante */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, #06060F)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Retour */}
          <Link href="/cas-clients" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', textDecoration: 'none',
            marginBottom: '2.5rem', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <ArrowLeft size={15} /> Cas clients
          </Link>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.8rem' }}>
            {[
              { label: 'Leads',         color: '#44CCFF', bg: 'rgba(37,99,235,0.1)' },
              { label: 'Automatisation', color: '#44CCFF', bg: 'rgba(37,99,235,0.1)' },
              { label: 'Stratégie',      color: '#44CCFF', bg: 'rgba(37,99,235,0.1)' },
            ].map(t => (
              <span key={t.label} style={{
                padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem',
                fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                border: `1px solid ${t.color}`, background: t.bg, color: t.color
              }}>{t.label}</span>
            ))}
          </div>

          {/* Client */}
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Grand groupe français de services · 35 Mds CA · 200 000 collaborateurs
          </p>

          {/* Titre */}
          <h1 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.15,
            maxWidth: '820px', marginBottom: '2.5rem', letterSpacing: '-0.02em'
          }}>
            Pipeline B2B from scratch sur un marché que personne n'avait encore cartographié
          </h1>

          {/* KPI hero */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '12px', padding: '1rem 1.8rem'
          }}>
            <span style={{ fontSize: '2.6rem', fontWeight: 700, color: '#44CCFF', letterSpacing: '-0.03em' }}>+39</span>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>opportunités générées</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>en 2 mois : objectif initial doublé</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT CARDS ── */}
      <section style={{ background: '#07070F', padding: '5rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '2rem' }}>Chiffres clés</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(8,15,35,0.6)', border: '1px solid rgba(37,99,235,0.12)',
                borderRadius: '14px', padding: '1.6rem', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)'
                }} />
                <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#44CCFF', lineHeight: 1.1, marginBottom: '0.4rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 500, marginBottom: '0.2rem' }}>{s.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTE ── */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.8rem' }}>Le contexte</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.25, color: '#fff' }}>
              Un marché inexploré, sans base, sans méthode, sans visibilité.
            </h2>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p>
              Ce groupe, connu du grand public sur ses activités historiques, cherchait à lancer une offre SaaS B2B sur un segment qu'il ne maîtrisait pas encore : les enseignes du commerce figital, ces marques nées en ligne qui ont aussi une présence physique. Pas de base de données, pas de fichier prospect, pas de visibilité sur qui cibler ni comment approcher ces entreprises au nom d'un groupe dont l'image n'était pas associée à ce type d'offre tech.
            </p>
            <p style={{ marginTop: '1.4rem' }}>
              La direction digitale et marketing voulait valider rapidement si le marché existait vraiment, avant d'engager des ressources plus lourdes.
            </p>
          </div>
        </div>
      </section>

      {/* ── CE QU'ON A FAIT ── */}
      <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <img src={bgUseCase} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          pointerEvents: 'none', opacity: 0.12
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(6,10,28,0.7) 0%, rgba(6,10,28,0.5) 50%, rgba(6,10,28,0.85) 100%)'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '3rem' }}>Ce qu'on a fait</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {actions.map((a, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr',
                gap: '2rem', padding: '2.5rem 0',
                borderBottom: 'none',
                alignItems: 'start'
              }}>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 700, color: '#44CCFF',
                  letterSpacing: '0.08em', paddingTop: '4px'
                }}>ÉTAPE {a.step}</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.8rem' }}>{a.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: '1rem' }}>{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUI A CHANGÉ ── */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(6,10,28,0) 60%)',
            border: '1px solid rgba(37,99,235,0.15)',
            borderLeft: '4px solid #44CCFF',
            borderRadius: '16px', padding: '3rem'
          }}>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(37,99,235,0.7)', marginBottom: '1.2rem' }}>Ce qui a changé</p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: '820px' }}>
              En deux mois, la direction avait un pipeline structuré, une base de données qualifiée et les premières preuves que le marché répondait favorablement à l'offre. Les <strong style={{ color: '#fff' }}>10 engagements de commandes obtenus en six semaines</strong> ont largement dépassé l'objectif initial de 5 commandes pilotes sur 3 mois.
            </p>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION CAS ── */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/cas-clients" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <ArrowLeft size={16} /> Tous les cas clients
          </Link>
          <Link href="/cas-clients/crm-industrie" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#44CCFF', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'opacity 0.2s'
          }}>
            Cas suivant : Transformation CRM <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CasPipelineB2B;
