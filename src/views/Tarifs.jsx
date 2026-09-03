'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ClientLogosSection from '../components/ui/ClientLogosSection';
const teamSquadia = '/assets/images/notremission/team-squadia.png';

const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
  <div
    onClick={onToggle}
    style={{
      backgroundColor: '#0D0D25',
      border: '1px solid rgba(68, 204, 255, 0.18)',
      borderRadius: '16px',
      padding: '1.6rem',
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

const tabsData = [
  {
    id: 'data',
    label: 'Data',
    pageLink: '/data',
    cards: [
      {
        title: 'Data Clean',
        subtitle: "Pour nettoyer et fiabiliser une base CRM existante.",
        items: [
          "Audit de la base existante",
          "Suppression des doublons et normalisation des champs",
          "Complétion des données manquantes",
          "Segmentation basique opérationnelle",
          "Livrable : CRM nettoyé + rapport d'audit"
        ],
        price: 'À partir de 1 490 € HT',
        subPrice: null,
        badge: null
      },
      {
        title: 'Data Seg',
        subtitle: "Pour transformer votre base en outil de ciblage réel.",
        items: [
          "Définition ou validation de l'ICP",
          "Segmentation avancée et scoring des contacts",
          "Création de variables dynamiques personnalisées",
          "Livrable : base structurée + documentation opérationnelle"
        ],
        price: 'À partir de 2 990 € HT',
        subPrice: null,
        badge: 'RECOMMANDÉ'
      },
      {
        title: 'Data Lead',
        subtitle: "Pour construire une base de prospection B2B sur un marché cible.",
        items: [
          "Cartographie du segment cible",
          "Construction d'un fichier de contacts qualifiés et vérifiés",
          "Enrichissement contacts selon périmètre défini",
          "Livrable : base opérationnelle + intégration CRM (en option)"
        ],
        price: 'À partir de 4 990 € HT',
        subPrice: null,
        badge: null
      }
    ]
  },
  {
    id: 'prospection',
    label: 'Prospection',
    pageLink: '/prospection/campagne',
    cards: [
      {
        title: 'Campagne multicanale',
        subtitle: "Pour lancer des campagnes email et LinkedIn.",
        items: [
          "Séquences email et LinkedIn personnalisées",
          "Personnalisation contact par contact",
          "Traitement des réponses inclus",
          "Reporting hebdomadaire"
        ],
        price: 'À partir de 2 490 € HT',
        subPrice: 'Périmètre ajusté avant démarrage.',
        badge: null
      },
      {
        title: 'Appels sortants',
        subtitle: "Pour qualifier et prendre des rendez-vous par téléphone.",
        items: [
          "Commercial B2B senior dédié",
          "Script construit avec vous",
          "Définition écrite du rendez-vous qualifié",
          "Reporting hebdomadaire"
        ],
        price: 'Sur devis',
        subPrice: null,
        badge: null
      },
      {
        title: 'Mission hybride',
        subtitle: "Pour combiner campagne multicanale et prospection téléphonique.",
        items: [
          "Data + Cold Call combinés",
          "Customer Success Manager dédié",
          "CRM et Dashboard dédié",
          "Reporting hebdomadaire"
        ],
        price: 'Sur devis',
        subPrice: null,
        badge: 'RECOMMANDÉ'
      }
    ]
  },
  {
    id: 'formation',
    label: 'Formation',
    pageLink: '/formation-ia',
    cards: [
      {
        title: 'Inter-entreprises',
        subtitle: "Pour apprendre dans un cadre multi-secteurs, avec d'autres équipes.",
        items: [
          "Fondamentaux IA appliqués aux métiers vente, marketing, communication",
          "Ateliers orientés production : résultats concrets dès la formation",
          "Supports et templates réutilisables inclus"
        ],
        price: 'À partir de 1 500 € HT / pers.',
        subPrice: null,
        badge: null
      },
      {
        title: 'Intra-entreprise',
        subtitle: <>Pour former votre équipe sur vos cas, <span style={{ whiteSpace: 'nowrap' }}>vos outils, votre contexte.</span></>,
        items: [
          "Cas et scénarios proches du métier client",
          "Plan d'action équipe livré en fin de formation",
          "Groupes de 6 à 10 personnes pour plus d'interactivité"
        ],
        price: 'À partir de 4 590 € HT / groupe',
        subPrice: null,
        badge: 'RECOMMANDÉ'
      },
      {
        title: 'Sur mesure',
        subtitle: "Pour construire un programme progressif avec suivi renforcé.",
        items: [
          "Modules progressifs adaptés aux enjeux de l'organisation",
          "Coaching individuel ou collectif et itérations",
          "Plan d'action individualisé et suivi dans le temps"
        ],
        price: 'Sur devis',
        subPrice: null,
        badge: null
      }
    ]
  }
];

const Tarifs = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  useScrollReveal();
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const tabParam = new URLSearchParams(window.location.search).get('tab');
    if (tabParam && tabsData.some(t => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, []);

  useEffect(() => {
    document.title = "Tarifs Squadia : Data et Formation";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Découvrez les tarifs Squadia : data B2B et formation. Périmètre ajusté avant engagement. Pour PME et ETI en France.";
    }
  }, []);

  const activeTabData = tabsData.find(t => t.id === activeTab);

  return (
    <div className="tarifs-page" style={{ background: 'var(--bg-primary)' }}>
      {/* ═══ SECTION 1 : HERO ═══ */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '900px', marginInline: 'auto', lineHeight: '1.1', marginBottom: '2rem' }}>
            Des offres modulables, cadrées avant tout démarrage.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: '1.6', marginBottom: '2rem' }}>
            Chaque mission Squadia commence par un cadrage. On définit ensemble le périmètre, les objectifs et le calendrier avant de démarrer. Les prix indiqués sont des points de départ, pas des forfaits figés.
          </p>
        </div>
      </section>

      {/* ═══ SECTION 2 : ONGLETS PAR BRIQUE ═══ */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <div className="fade-in">
          {/* Tabs Navigation */}
          <div className="tarifs-tabs-nav" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            {tabsData.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.8rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  border: activeTab === tab.id ? '1px solid #2563EB' : '1px solid #1A1A3A',
                  background: activeTab === tab.id ? 'rgba(37, 99, 235, 0.1)' : '#0D0D25',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Display */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              marginInline: 'auto',
              justifyContent: 'center'
            }}
          >
            {activeTabData.cards.map((card, idx) => (
              <div
                key={idx}
                className="pricing-card"
                style={{
                  background: '#0D0D25',
                  border: card.badge ? '2px solid #2563EB' : '1px solid #1A1A3A',
                  padding: isMobile ? '24px 18px' : '3rem 2rem',
                  borderRadius: '1rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {card.badge && (
                  <div className="desktop-only" style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#2563EB',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 700
                  }}>
                    {card.badge}
                  </div>
                )}
                {card.badge && (
                  <div className="mobile-only" style={{ marginBottom: '8px' }}>
                    <span style={{ display: 'inline-block', background: '#2563EB', color: 'white', padding: '3px 8px', borderRadius: '20px', fontSize: '10px', fontWeight: 700, lineHeight: 1.4 }}>
                      {card.badge}
                    </span>
                  </div>
                )}

                <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.8rem', margin: '0 0 1rem 0' }}>{card.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.5rem', minHeight: isMobile ? 'auto' : '3rem' }}>
                  {card.subtitle}
                </p>

                <div style={{ marginBottom: '1.5rem', marginTop: isMobile ? '4px' : 0 }}>
                  <div className="pricing-price-hero" style={{ fontSize: isMobile ? '24px' : '2.2rem', fontWeight: 700, whiteSpace: 'nowrap', color: '#fff' }}>
                    {(() => {
                      let displayPrice = card.price;
                      let prefix = null;
                      let suffix = null;
                      
                      if (displayPrice.startsWith('À partir de ')) {
                        prefix = 'À partir de';
                        displayPrice = displayPrice.replace('À partir de ', '');
                      }
                      if (displayPrice.endsWith(' / pers.')) {
                        suffix = '/ pers.';
                        displayPrice = displayPrice.replace(' / pers.', '');
                      }
                      if (displayPrice.endsWith(' / groupe')) {
                        suffix = '/ groupe';
                        displayPrice = displayPrice.replace(' / groupe', '');
                      }

                      return (
                        <>
                          {prefix && (
                            <span style={{ fontSize: '1.2rem', color: '#9CA3AF', fontWeight: 400, marginRight: '0.4rem' }}>
                              {prefix}
                            </span>
                          )}
                          {displayPrice}
                          {suffix && (
                            <span style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 400, marginLeft: '0.2rem' }}>
                              {suffix}
                            </span>
                          )}
                        </>
                      );
                    })()}
                  </div>
                  {card.subPrice && (
                    <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '0.5rem' }}>
                      {card.subPrice}
                    </div>
                  )}
                </div>
                
                <div style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
                  {card.items.map((item, iIdx) => (
                    <div key={iIdx} style={{ display: 'flex', gap: '10px', marginBottom: isMobile ? '8px' : '0.75rem', fontSize: isMobile ? '14px' : '0.85rem', lineHeight: isMobile ? 1.7 : 1.4 }}>
                      <Check size={16} color={card.badge ? "#2563EB" : "var(--accent)"} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: isMobile ? '14px' : '1rem',
                    borderRadius: '0.5rem',
                    fontWeight: 700,
                    fontSize: '1rem',
                    border: card.badge ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    background: card.badge ? '#2563EB' : 'transparent',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxSizing: 'border-box'
                  }}
                >
                  Prendre RDV
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href={activeTabData.pageLink} style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              En savoir plus sur l'offre {activeTabData.label} →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 : RÉFÉRENCES CLIENTS ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#050510', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container fade-in">
          <ClientLogosSection contained={true} />
        </div>
      </section>

      {/* ═══ CTA FINAL : PROCHAINE ÉTAPE ═══ */}
      <section style={{ background: '#060612', padding: '60px 0 120px' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-160px', bottom: '-160px', width: '840px', height: '840px', background: 'radial-gradient(circle, rgba(68,204,255,0.55) 0%, rgba(68,204,255,0) 70%)', filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none' }} />
          <div style={{ border: '1px solid rgba(68,204,255,.1)', borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px -20px rgba(68,204,255,.15)', minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 1 }}>
            <img src={teamSquadia} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.75) saturate(1.1)', zIndex: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,18,0.75) 0%, transparent 32%, transparent 55%, rgba(6,6,18,0.92) 100%)', zIndex: 1, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2, padding: '56px 56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Prochaine étape</span>
                <p style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.1, color: '#fff', margin: '0 0 8px' }}>Rejoignez-nous :</p>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: 0 }}>Une question<br/>sur nos offres ?</h2>
              </div>
              <div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '420px', margin: '0 auto 32px' }}>On vous répond directement, sans argumentaire commercial.</p>
                <Link href="/contact" style={{ fontSize: '1.1rem', fontWeight: 700, background: '#44CCFF', color: '#060612', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block', margin: '0 auto' }}>Prendre Rendez-Vous</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"],
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          .tarifs-tabs-nav {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          .tarifs-tabs-nav button {
            padding: 8px 12px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Tarifs;
