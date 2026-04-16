import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ClientLogosSection from '../components/ui/ClientLogosSection';

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
          fontSize: '1.1rem',
          fontWeight: 700,
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

const tabsData = [
  {
    id: 'strategie',
    label: 'Stratégie',
    pageLink: '/strategie-ia',
    cards: [
      {
        title: 'Stratégie Commerciale',
        subtitle: "Pour structurer votre méthode de vente, fiabiliser votre pipeline et aligner vos équipes sur un objectif commun.",
        items: [
          "Sales playbook et méthode de qualification",
          "Rituels de pilotage et indicateurs",
          "Ateliers terrain avec les équipes commerciales",
          "Feuille de route 30/60/90 jours"
        ],
        price: 'À partir de 3 490 € HT',
        subPrice: null,
        badge: null
      },
      {
        title: 'Migration CRM',
        subtitle: "Pour déployer un CRM que vos équipes utilisent vraiment — de l'audit à l'adoption.",
        items: [
          "Audit des processus réels et des données existantes",
          "Configuration adaptée à vos cycles de vente",
          "Migration propre sans perte de données",
          "Formation et activation des équipes"
        ],
        price: 'À partir de 5 990 € HT',
        subPrice: null,
        badge: 'RECOMMANDÉ'
      }
    ]
  },
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
          "Livrable : CRM nettoyé + rapport d'audit"
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
          "Livrable : base structurée + documentation opérationnelle"
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
          "Livrable : base opérationnelle + intégration CRM (en option)"
        ],
        price: 'À partir de 4 990 € HT',
        subPrice: null,
        badge: null
      }
    ]
  },
  {
    id: 'automatisation',
    label: 'Automatisation',
    pageLink: '/automatisation-ia',
    cards: [
      {
        title: 'Starter',
        subtitle: "Pour automatiser un besoin ciblé avec un impact rapide.",
        items: [
          "1 à 2 workflows principaux",
          "Connecteurs limités, architecture simple",
          "Documentation d'exploitation incluse",
          "2 semaines de support après installation"
        ],
        price: 'À partir de 2 490 € HT',
        subPrice: 'Périmètre ajusté avant démarrage.',
        badge: null
      },
      {
        title: 'Scale',
        subtitle: "Pour structurer plusieurs automatisations cohérentes et interconnectées.",
        items: [
          "3 à 5 workflows interconnectés",
          "Agents IA spécialisés",
          "Documentation complète et guide de maintien",
          "Support dédié 1 mois"
        ],
        price: 'À partir de 5 990 € HT',
        subPrice: 'Périmètre ajusté avant démarrage.',
        badge: 'RECOMMANDÉ'
      },
      {
        title: 'System',
        subtitle: "Pour déployer une architecture d'automatisation transverse et durable.",
        items: [
          "Architecture complète multi-sources, multi-équipes",
          "Sécurité, droits d'accès, gouvernance",
          "Runbook d'exploitation et plan d'évolution"
        ],
        price: 'Sur mesure',
        subPrice: null,
        badge: null
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
          "Ateliers orientés production : résultats concrets dès la formation",
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

  useEffect(() => {
    document.title = "Tarifs Squadia — Stratégie IA, Leads, Automatisation, Formation pour PME et ETI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Découvrez les tarifs Squadia pour la stratégie IA, la détection de leads, l'automatisation et la formation. Périmètre ajusté avant tout engagement. Pour PME et ETI en France.";
    }
  }, []);

  const activeTabData = tabsData.find(t => t.id === activeTab);

  return (
    <div className="tarifs-page" style={{ background: 'var(--bg-primary)' }}>
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', maxWidth: '900px', marginInline: 'auto', lineHeight: '1.1', marginBottom: '2rem' }}>
            Des offres modulables, cadrées avant tout démarrage.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: '1.6', marginBottom: '2rem' }}>
            Chaque mission Squadia commence par un cadrage. On définit ensemble le périmètre, les objectifs et le calendrier avant de démarrer. Les prix indiqués sont des points de départ, pas des forfaits figés.
          </p>
        </div>
      </section>

      {/* ═══ SECTION 2 — ONGLETS PAR BRIQUE ═══ */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <div className="fade-in">
          {/* Tabs Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
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
              gridTemplateColumns: activeTabData.cards.length === 2 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
              gap: '2rem',
              maxWidth: activeTabData.cards.length === 2 ? '900px' : '100%',
              marginInline: 'auto'
            }}
          >
            {activeTabData.cards.map((card, idx) => (
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
                  <div style={{
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
                
                <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{card.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '2rem', minHeight: '3rem' }}>
                  {card.subtitle}
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
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
                
                <div style={{ flexGrow: 1, marginBottom: '2rem' }}>
                  {card.items.map((item, iIdx) => (
                    <div key={iIdx} style={{ display: 'flex', gap: '12px', marginBottom: '0.75rem', fontSize: '0.85rem', lineHeight: 1.4 }}>
                      <Check size={16} color={card.badge ? "#2563EB" : "var(--accent)"} style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '1rem',
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
            <Link to={activeTabData.pageLink} style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              En savoir plus sur l'offre {activeTabData.label} →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — NOTE TARIFAIRE ═══ */}
      <section className="container" style={{ paddingBottom: '60px' }}>
        <div className="fade-in" style={{ background: '#111827', padding: '2rem', borderRadius: '1rem', border: '1px solid #1A1A3A', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '900px', marginInline: 'auto' }}>
            Tous les tarifs sont indicatifs et hors taxes. Le périmètre exact, le calendrier et les livrables sont cadrés ensemble avant tout démarrage. Aucune mission ne commence sans un accord sur les objectifs et les responsabilités de chaque partie.
          </p>
        </div>
      </section>

      {/* ═══ SECTION 4 — RÉFÉRENCES CLIENTS ═══ */}
      <ClientLogosSection />

      {/* ═══ SECTION 5 — CTA FINAL ═══ */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid #1A1A3A' }}>
        <div className="container fade-in" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', maxWidth: '800px', marginInline: 'auto', marginBottom: '1rem' }}>
            Une question sur nos offres ?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            On vous répond directement, sans argumentaire commercial.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', textDecoration: 'none' }}>
              Prendre RDV
            </Link>
            <a href="mailto:contact@squadia.io" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Nous écrire
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Tarifs;
