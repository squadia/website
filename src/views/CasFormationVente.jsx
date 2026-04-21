'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const bgUseCase = '/assets/images/bgusecase.png';
const formationImg = '/assets/images/formationB2B.png';
const CasFormationVente = () => {
  useEffect(() => {
    document.title = "Cas client : Formation Vente B2B · Squadia";
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '2', label: 'jours de formation intensive', sub: 'juniors et seniors formés ensemble' },
    { value: '1', label: 'méthode de vente commune', sub: 'MEDDIC adoptée par toute l\'équipe' },
    { value: '1', label: 'plan de compte', sub: 'rationalisé par commercial sur les comptes clés' },
    { value: '+1M', label: 'collaboration inter-équipe', sub: 'renforcée dès le premier mois' },
  ];

  const actions = [
    {
      step: '01',
      title: 'Atelier de cadrage avec le management',
      body: 'Un atelier préalable avec le management pour adapter chaque cas pratique aux réalités terrain de l\'équipe, aux typologies de comptes B2B visés : souvent des entreprises avec de nombreuses filiales en France et à l\'étranger : et aux jeux de pouvoir internes qui compliquent les cycles de vente. Pas une formation générique, une formation calibrée.'
    },
    {
      step: '02',
      title: 'Deux jours de mises en situation concrètes',
      body: 'Jeux de rôles où les commerciaux tournaient sur différentes postures : acheteur, vendeur, manager : pour comprendre ce que l\'autre ressent et ce qu\'il cherche vraiment dans un échange. Travail sur la méthode MEDDIC pour que tout le monde parle le même langage quand\'un deal progresse. Préparation de rendez-vous avec les outils disponibles, dont des outils IA et de social selling, avec des subtilités que beaucoup connaissaient de nom mais pas en pratique.'
    },
    {
      step: '03',
      title: 'Session dédiée au plan de compte',
      body: 'Comment le construire, comment l\'adapter à chaque commercial, comment le présenter simplement et comment s\'en servir pour aller chercher en interne les ressources marketing et communication nécessaires. L\'objectif : que le commercial soit à l\'initiative des événements sur ses comptes clés, pas qu\'il subisse les actions que le marketing lui impose à la dernière minute.'
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
        <img src={formationImg} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 70%',
          pointerEvents: 'none'
        }} />
        {/* Masque diagonal orange/sombre : couvre ~65% depuis la gauche */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(105deg, rgba(14,26,45,0.92) 0%, rgba(14,26,45,0.82) 38%, rgba(14,26,45,0.52) 58%, rgba(14,26,45,0.08) 72%, transparent 82%)',
        }} />
        {/* Lisière basse */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, #06060F)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

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

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.8rem' }}>
            {[{ label: 'Formation', color: '#44CCFF', bg: 'rgba(37,99,235,0.1)' }].map(t => (
              <span key={t.label} style={{
                padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem',
                fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                border: `1px solid ${t.color}`, background: t.bg, color: t.color
              }}>{t.label}</span>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Filiale française · Groupe technologique international · Équipe commerciale B2B
          </p>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.15,
            maxWidth: '820px', marginBottom: '2.5rem', letterSpacing: '-0.02em'
          }}>
            Aligner juniors et seniors sur une méthode de vente commune
          </h1>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '12px', padding: '1rem 1.8rem'
          }}>
            <span style={{ fontSize: '2.6rem', fontWeight: 700, color: '#44CCFF', letterSpacing: '-0.03em' }}>2 j.</span>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>pour une méthode commune</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>juniors, seniors, SDR et BDR alignés sur MEDDIC</div>
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
              Pas de langage commun, pas de méthode, une accountability floue.
            </h2>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p>
              L'équipe commerciale de cette filiale française d'un grand groupe tech international avait un vrai problème de cohérence interne. Des profils juniors qui arrivaient sans méthode structurée. Des profils seniors avec les bons instincts mais pas toujours les bons réflexes sur les outils et la rigueur de documentation. Et entre les deux, des SDR et BDR qui ne remplissaient pas systématiquement les outils partagés.
            </p>
            <p style={{ marginTop: '1.4rem' }}>
              Pas de langage commun, pas de vision claire sur les comptes, et une accountability floue sur qui fait quoi et à quel stade. L'entreprise voulait remettre tout le monde au même niveau sur la méthode, les outils et la posture commerciale, sans que les seniors y voient une remise en cause de leur expérience et sans que les juniors se sentent perdus dans une formation trop théorique.
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {actions.map((a, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr',
                gap: '2rem', padding: '2.5rem 0',
                borderBottom: i < actions.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                alignItems: 'start'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#44CCFF', letterSpacing: '0.08em', paddingTop: '4px' }}>
                  ÉTAPE {a.step}
                </div>
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
              Un mois après la formation, les managers ont observé une dynamique nouvelle dans l'équipe. Les commerciaux participaient plus, échangeaient plus entre eux et avec les équipes marketing et communication. Ils avaient compris qu'il y avait d'autres leviers à activer que leurs seuls efforts individuels. <strong style={{ color: '#fff' }}>Plusieurs ont commencé à prendre des initiatives sur leurs comptes clés</strong> plutôt que d'attendre des instructions.
            </p>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/cas-clients/migration-crm" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <ArrowLeft size={16} /> Migration CRM
          </Link>
          <Link href="/cas-clients" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#44CCFF', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'opacity 0.2s'
          }}>
            Tous les cas clients <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CasFormationVente;
