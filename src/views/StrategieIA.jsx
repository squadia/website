'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  GitMerge, 
  HelpCircle, 
  TrendingDown, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  Star,
  Check
} from 'lucide-react';

const fondIA = '/assets/images/bgdatalead.png';
const iaChar = '/assets/images/dataseg.png';
import CardFlip from '../components/ui/flip-card';
import { Feature1 } from '../components/ui/feature-1';
import VideoPlaceholder from '../components/ui/VideoPlaceholder';

const features = (img1, img2, img3, img4) => [
  {
    id: 1,
    title: 'Diagnostic de maturité IA',
    image: img1,
    description: 'Analyse de votre organisation réelle : processus, usages IA officieux, qualité des données, points de friction. On part de ce qui existe chez vous.',
  },
  {
    id: 2,
    title: 'Priorisation par impact ROI',
    image: img2,
    description: 'On n\'identifie pas tout ce qui est possible : on priorise ce qui a le plus d\'impact sur votre productivité ou vos coûts dans les 90 jours.',
  },
  {
    id: 3,
    title: 'Feuille de route exécutable',
    image: img3,
    description: 'Séquencement, outils adaptés à votre stack, compétences nécessaires et indicateurs de succès. Un plan actionnable, pas un Powerpoint théorique.',
  },
  {
    id: 4,
    title: 'Gouvernance & Prérequis data',
    image: img4,
    description: 'Principes de décision, éthique, sécurité et structure de donnée nécessaire pour faire tourner vos futurs agents IA durablement.',
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
    <section style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem', textAlign: 'center' }}>Livrables</p>
      <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, textAlign: 'center', color: '#F9FAFB', marginBottom: '4rem', letterSpacing: '-0.02em' }}>
        Une strategie <span style={{ color: '#44CCFF' }}>ancrée dans l'exécution.</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '4rem', alignItems: 'start' }}>
        <div>
          {items.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <button
                  onClick={() => setActiveId(item.id)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div style={{ width: '100%', paddingRight: '1rem' }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: 600, color: isOpen ? '#F9FAFB' : 'rgba(255,255,255,0.65)', transition: 'color 0.2s', display: 'block' }}>
                      {item.title}
                    </span>
                    {isOpen && (
                      <div style={{ marginTop: '0.75rem', height: '3px', background: 'rgba(68,204,255,0.1)', width: '100%', borderRadius: '2px', overflow: 'hidden' }}>
                        <div key={`progress-${activeId}`} style={{ height: '100%', background: '#44CCFF', animation: 'drawProgressAccordionIA 4s linear forwards' }} />
                      </div>
                    )}
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#44CCFF' : 'rgba(255,255,255,0.3)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)', flexShrink: 0 }} >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
                <div style={{ height: isOpen ? '160px' : '0', overflow: 'hidden', transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, fontSize: '1rem', paddingBottom: '1.5rem', maxWidth: '460px' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ position: 'sticky', top: '20vh', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', aspectRatio: '4/3', background: '#0D0D25' }}>
          <img key={activeId} src={activeItem.image} alt={activeItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', animation: 'fadeInFeatureIA 0.4s ease' }} />
        </div>
      </div>
      <style>{`
        @keyframes drawProgressAccordionIA { from { width: 0%; } to { width: 100%; } }
        @keyframes fadeInFeatureIA { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </section>
  );
};

export default function StrategieIA() {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    document.title = "Stratégie IA pour PME et ETI : Diagnostic, feuille de route et cas d'usage : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia structure votre strategie IA : diagnostic de maturité, priorisation des cas d'usage à fort ROI et feuille de route exécutable. Premiers livrables en 60 jours.");
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
        
        {/* SECTION 1 : HERO */}
        <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          <img src={fondIA} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'rgba(10,10,26,0.40)' }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(105deg, rgba(10,10,26,0.97) 0%, rgba(10,10,26,0.75) 35%, rgba(10,10,26,0.40) 60%, transparent 100%)', }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(to bottom, transparent, #0A0A1A)', }} />

          {/* Personnage Droite */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', zIndex: 3, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <img src={iaChar} alt="IA Strategist" style={{ width: '85%', height: '95%', objectFit: 'contain', position: 'relative', zIndex: 2 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(10,10,26,0.85) 0%, transparent 100%)', padding: '4rem 0', textAlign: 'center', backdropFilter: 'blur(4px)', zIndex: 3 }}>
              <div style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>IA Strategy Lead</div>
              <div style={{ color: 'rgba(68,204,255,0.7)', fontSize: '13px' }}>AI Policy / Strategy Expert</div>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '8%' }}>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '750px' }}>
              95% des projets IA échouent.<br />Pas pour raisons techniques.<br />Parce qu'ils manquent de cadre.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', marginBottom: '3rem' }}>
              Squadia structure votre strategie IA : diagnostic de maturité, priorisation des cas d'usage ROI et feuille de route exécutable. Pour que l'IA ne soit plus un test, mais un levier.
            </motion.p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={(e) => smoothScroll(e, 'diagnostic')} style={{ backgroundColor: '#2563EB', color: '#fff', padding: '1.3rem 2.5rem', borderRadius: '0.5rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}>RDV avec un expert</button>
            </div>
          </div>
        </section>

        {/* SECTION 2 : DIAGNOSTIC */}
        <section id="diagnostic" style={{ padding: '10rem 2rem', borderBottom: '1px solid #1A1A2E' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>Le constat</p>

                <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '2rem' }}>L'absence de cadre : la première cause d'échec.</h2>
                <div style={{ width: '80px', height: '4px', backgroundColor: '#2563EB', borderRadius: '2px', marginBottom: '2rem' }} />
                
                <VideoPlaceholder />

                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                  57% des dirigeants naviguent à vue : testant des outils sans vision d'ensemble. Le problème n'est pas l'outil. C'est l'absence de strategie en amont.
                </p>
              </motion.div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {[
                  { title: "Outils vs Problèmes", desc: "On déploie ChatGPT sans savoir quel problème métier on cherche à résoudre précisément." },
                  { title: "Shadow IT", desc: "Chaque direction part dans son sens, créant des problèmes de données et de gouvernance à venir." },
                  { title: "Manque de priorisation", desc: "Impossible de savoir quel cas d'usage lancer en premier faute de diagnostic structuré." },
                  { title: "Délai d'exécution", desc: "La feuille de route est théorique et les arbitages traînent pendant que la concurrence avance." }
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

        {/* SECTION 3 : LIVRABLES */}
        <AccordionFeatures 
          img1={fondIA} 
          img2={fondIA} 
          img3={fondIA} 
          img4={fondIA} 
        />

        {/* PRICING SECTION : STYLE TARIFS */}
        <section style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem' }}>
              Une approche modulable par briques.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.45)', maxWidth: '700px', marginInline: 'auto' }}>
              Le périmètre exact est cadré ensemble pour garantir un ROI mesurable.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Stratégie Commerciale',
                subtitle: "Pour structurer votre méthode de vente, fiabiliser votre pipeline et aligner vos équipes.",
                items: [
                  "Sales playbook et méthode",
                  "Rituels de pilotage et indicateurs",
                  "Ateliers terrain équipes",
                  "Feuille de route 30/60/90 jours"
                ],
                price: '3 490 € HT',
                prefix: 'À partir de',
              },
              {
                title: 'Migration CRM',
                subtitle: "Pour déployer un CRM que vos équipes utilisent vraiment : de l'audit à l'adoption.",
                items: [
                  "Audit processus et données",
                  "Configuration cycles de vente",
                  "Migration propre sans perte",
                  "Formation et activation équipes"
                ],
                price: '5 990 € HT',
                prefix: 'À partir de',
              },
              {
                title: 'Stratégie IA',
                subtitle: "Pour décider où et comment déployer l'IA avant d'investir dans des outils.",
                items: [
                  "Diagnostic de maturité IA",
                  "Priorisation cas d'usage ROI",
                  "Roadmap multi-horizons",
                  "Gouvernance et prérequis data"
                ],
                price: 'Sur mesure',
                prefix: '',
                badge: 'RECOMMANDÉ'
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

                <button onClick={(e) => smoothScroll(e, 'hero')} style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', border: card.badge ? 'none' : '1px solid rgba(255,255,255,0.2)', background: card.badge ? '#2563EB' : 'transparent', color: '#FFFFFF', cursor: 'pointer', transition: 'all 0.3s' }}>
                  RDV avec un expert
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '10rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', color: '#F9FAFB' }}>Questions fréquentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'Faut-il déjà avoir des outils IA pour démarrer ?', a: "Non. On intervient à tous les niveaux de maturité : y compris pour les organisations qui partent de zéro et cherchent simplement à comprendre par où commencer." },
              { q: "Quels sont les livrables concrets ?", a: "Diagnostic structuré, cas d'usage priorisés avec ROI projeté, et feuille de route multi-horizons exécutable." },
              { q: "Comment justifier l'investissement ?", a: "Chaque mission produit des livrables mesurables : temps gagné, productivité accrue, réduction de coûts. On construit les KPIs avec vous." }
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

        {/* SECTION 6 : CTA FINAL */}
        <Feature1 
          title="Prêt à transformer vos ambitions IA en résultats mesurables ?"
          description="Fini la navigation à vue. Squadia construit votre système de croissance assisté par l'IA."
          buttonPrimary={{ label: "RDV avec un expert", href: "#calendrier" }}
          buttonSecondary={{ label: "Cas d'usage", href: "/cas-clients/formation-vente" }}
        >
          <CardFlip 
            title="Stratégie IA"
            subtitle="IA pour la vente"
            description="Former votre équipe de vente de la préparation à l'entretien avec les C-levels via des outils IA de pointe."
            features={[
              "Diagnostic de maturité IA",
              "Sélection des meilleurs outils",
              "Proof of Concept (PoC)",
              "Déploiement d'agents IA"
            ]}
            color="#8B5CF6"
            ctaText="RDV IA Expert"
            ctaLink="#calendrier"
            icon={Rocket}
          />
        </Feature1>
      </div>
    </>
  );
}
