import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import bgUseCase from '../assets/images/bgusecase.png';
import transformerCRMImg from '../assets/images/transformerCRM.jpeg';

const CasCRMIndustrie = () => {
  useEffect(() => {
    document.title = "Cas client — Transformation CRM · Squadia";
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '110', label: 'jours de ventes perdus', sub: 'couverts par les nouvelles initiatives' },
    { value: '10', label: 'ateliers de cadrage', sub: 'sur 1 mois, toutes parties prenantes' },
    { value: '6', label: 'initiatives IA & automatisation', sub: 'en cours de déploiement' },
    { value: '1', label: 'méthode de vente commune', sub: 'adoptée par l\'ensemble des équipes' },
  ];

  const actions = [
    {
      step: '01',
      title: 'Diagnostic complet avec toutes les parties prenantes',
      body: 'Une dizaine d\'ateliers de cadrage sur un mois, avec management, équipes commerciales terrain B2B et B2C, marketing, communication. L\'objectif : comprendre les points de friction réels de chacun, pas plaquer une solution standard. On a cartographié les usages actuels, identifié les quick wins, et construit une feuille de route validée par le COMEX avec un budget et une temporalité maîtrisés.'
    },
    {
      step: '02',
      title: 'Structuration du CRM et méthode de vente commune',
      body: 'Refonte du CRM pour que chaque commercial sache exactement ce qui est obligatoire, ce qui est optionnel, et pourquoi. Mise en place d\'une méthode de vente commune pour que "je m\'engage sur ce deal" veuille dire la même chose du terrain au COMEX — et que la supply chain puisse anticiper les commandes à venir.'
    },
    {
      step: '03',
      title: 'Marketing multicanal et automatisation IA',
      body: 'Déploiement d\'une approche marketing multicanal intégrant email, LinkedIn, Instagram et WhatsApp. Plusieurs initiatives d\'automatisation dont un système de réponse IA aux sollicitations clients en dehors des heures de bureau — réduisant les délais de réponse de plusieurs heures à quelques minutes.'
    },
  ];

  return (
    <div style={{ background: '#06060F', color: '#F9FAFB', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '140px',
        overflow: 'hidden',
      }}>
        {/* Photo de fond */}
        <img src={transformerCRMImg} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 20%',
          pointerEvents: 'none'
        }} />
        {/* Masque diagonal violet/sombre */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(105deg, rgba(16,10,46,0.92) 0%, rgba(16,10,46,0.80) 38%, rgba(16,10,46,0.50) 58%, rgba(16,10,46,0.08) 72%, transparent 82%)',
        }} />
        {/* Lisière basse */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, #06060F)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <Link to="/cas-clients" style={{
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
            {[
              { label: 'Stratégie',      color: '#A78BFA', bg: 'rgba(139,92,246,0.1)' },
              { label: 'Automatisation', color: '#44CCFF', bg: 'rgba(68,204,255,0.1)' },
              { label: 'Formation',      color: '#34D399', bg: 'rgba(16,185,129,0.1)' },
            ].map(t => (
              <span key={t.label} style={{
                padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem',
                fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                border: `1px solid ${t.color}`, background: t.bg, color: t.color
              }}>{t.label}</span>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Équipementier automobile · Réseau B2B & B2C · Plusieurs centaines de points de vente en France
          </p>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.15,
            maxWidth: '820px', marginBottom: '2.5rem', letterSpacing: '-0.02em'
          }}>
            Transformer un CRM contrainte en outil de croissance
          </h1>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.2)',
            borderRadius: '12px', padding: '1rem 1.8rem'
          }}>
            <span style={{ fontSize: '2.6rem', fontWeight: 700, color: '#A78BFA', letterSpacing: '-0.03em' }}>+110</span>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>jours de ventes récupérés</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>par an grâce aux nouvelles initiatives</div>
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
                background: 'rgba(8,15,35,0.6)', border: '1px solid rgba(139,92,246,0.12)',
                borderRadius: '14px', padding: '1.6rem', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.35), transparent)'
                }} />
                <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#A78BFA', lineHeight: 1.1, marginBottom: '0.4rem' }}>{s.value}</div>
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
              Un CRM vécu comme une contrainte. Un business en décroissance sans explication claire.
            </h2>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p>
              Nouveau contexte actionnarial, nouvelle feuille de route au COMEX. L'entreprise avait grandi avec un CRM fait maison, conçu il y a plusieurs années pour répondre aux besoins très spécifiques d'un client du groupe. Résultat : un outil devenu trop complexe à maintenir, avec des limitations techniques et de sécurité qui freinaient son adoption. Les commerciaux ne savaient plus ce qui était obligatoire à remplir de ce qui était optionnel. Les managers n'avaient pas de visibilité fiable sur le pipeline.
            </p>
            <p style={{ marginTop: '1.4rem' }}>
              Il n'y avait pas non plus de méthode de vente commune. Quand un commercial disait qu'il s'engageait sur un deal, cet engagement ne voulait pas dire la même chose pour tout le monde. La supply chain n'avait aucune visibilité sur les commandes à venir. Et le marketing travaillait avec des agences externes sur des budgets qui auraient pu être mieux contrôlés avec un CRM bien configuré.
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
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#A78BFA', letterSpacing: '0.08em', paddingTop: '4px' }}>
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
            background: 'linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(6,10,28,0) 60%)',
            border: '1px solid rgba(139,92,246,0.15)',
            borderLeft: '4px solid #8B5CF6',
            borderRadius: '16px', padding: '3rem'
          }}>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.7)', marginBottom: '1.2rem' }}>Ce qui a changé</p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: '820px' }}>
              Dès la mise en place du nouveau CRM, les commerciaux ont commencé à retrouver de la valeur dans l'outil. Des deals oubliés ou hors radar ont été réactivés. La direction a <strong style={{ color: '#fff' }}>une visibilité réelle sur le pipeline pour la première fois</strong>. Et sur des sollicitations clients qui prenaient parfois jusqu'à une journée entière pour obtenir une réponse, le délai est passé à quelques heures grâce aux systèmes d'alerte et de notification mis en place.
            </p>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/cas-clients/formation-ia-com" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <ArrowLeft size={16} /> Formation IA Communication
          </Link>
          <Link to="/cas-clients/migration-crm" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#A78BFA', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'opacity 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Cas suivant : Migration CRM <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CasCRMIndustrie;
