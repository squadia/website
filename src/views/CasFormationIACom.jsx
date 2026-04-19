'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const bgUseCase = '/assets/images/bgusecase.png';
const iaComImg = '/assets/images/iaetcom.png';
const CasFormationIACom = () => {
  useEffect(() => {
    document.title = "Cas client — Formation IA Communication · Squadia";
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '25', label: 'personnes formées', sub: 'sur 4 jours' },
    { value: '2', label: 'équipes aux profils distincts', sub: 'généraliste & rédactionnelle' },
    { value: 'x2', label: 'temps gagné', sub: 'compréhension & personnalisation des attentes' },
    { value: '1', label: 'charte d\'usage', sub: 'remise en contexte et actualisée' },
  ];

  const actions = [
    {
      step: '01',
      title: 'Cadrage sur-mesure avant la formation',
      body: 'Avant même de concevoir le programme, un atelier de cadrage avec la responsable communication pour comprendre la séniorité des uns et des autres, les attentes spécifiques de chaque profil, les sujets prioritaires. Deux équipes très différentes : une première généraliste d\'une douzaine de chargés de communication, une deuxième plus rédactionnelle. Pas le même rapport à l\'outil, pas les mêmes blocages.'
    },
    {
      step: '02',
      title: 'Deux jours de formation pratique par équipe',
      body: 'Chaque session construite autour des cas concrets de leur quotidien. Comment identifier quelles tâches confier à l\'IA sans perdre en qualité sur des communications officielles. Comment adapter un même message à des publics très différents — habitants, commerçants, jeunes, seniors — sur des canaux qui n\'ont rien à voir entre eux. Comment choisir entre les outils disponibles selon les besoins métier, de la production de texte à la création d\'images et de vidéos. Comment travailler avec les agences partenaires en exprimant mieux et plus vite les attentes.'
    },
    {
      step: '03',
      title: 'Éthique, sécurité et remise en contexte de la charte',
      body: 'Sur la partie éthique et sécurité, on a remis la charte en perspective : comprendre pourquoi certaines règles existent, comment les appliquer au quotidien, et où s\'arrête l\'autonomie des équipes avant validation IT sur les contenus sensibles.'
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
        <img src={iaComImg} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          pointerEvents: 'none'
        }} />
        {/* Masque diagonal vert/sombre — couvre ~65% depuis la gauche */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(105deg, rgba(14,26,45,0.92) 0%, rgba(14,26,45,0.80) 38%, rgba(14,26,45,0.50) 58%, rgba(14,26,45,0.08) 72%, transparent 82%)',
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
            Grande collectivité urbaine · Top 3 des villes françaises
          </p>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.15,
            maxWidth: '820px', marginBottom: '2.5rem', letterSpacing: '-0.02em'
          }}>
            Former des équipes communication à l'IA quand une charte existe mais que personne ne sait vraiment quoi en faire
          </h1>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '12px', padding: '1rem 1.8rem'
          }}>
            <span style={{ fontSize: '2.6rem', fontWeight: 700, color: '#44CCFF', letterSpacing: '-0.03em' }}>92%</span>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>adoption des outils</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>dès la première semaine après formation</div>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.25, color: '#fff' }}>
              Une charte rédigée, des équipes bloquées.
            </h2>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p>
              La direction communication de cette grande collectivité avait déjà anticipé le sujet : une charte d'usage de l'IA avait été rédigée. Mais entre une charte écrite quelques mois plus tôt et la réalité quotidienne des équipes, il y avait un fossé. Les agents ne savaient pas concrètement ce qu'ils pouvaient faire, ce qu'ils ne pouvaient pas faire, ni pourquoi. Les outils proliféraient sans fil directeur pour choisir, tester ou valider ce qui était vraiment utile dans un contexte institutionnel.
            </p>
            <p style={{ marginTop: '1.4rem' }}>
              Deux équipes très différentes : une première généraliste d'une douzaine de chargés de communication, une deuxième plus rédactionnelle. Pas le même rapport à l'outil, pas les mêmes blocages.
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
              Quelques semaines après les sessions, certains participants ont remonté avoir <strong style={{ color: '#fff' }}>divisé par deux le temps passé à comprendre et exprimer leurs attentes</strong> auprès des agences. La qualité des productions a augmenté, la personnalisation des messages par audience aussi. La formation a aussi ouvert des perspectives sur la prochaine étape : la mise en place de chatbots intelligents et personnalisés pour favoriser l'engagement des administrés, bien loin des simples formulaires de contact existants.
            </p>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/cas-clients/pipeline-b2b" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <ArrowLeft size={16} /> Pipeline B2B
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

export default CasFormationIACom;
