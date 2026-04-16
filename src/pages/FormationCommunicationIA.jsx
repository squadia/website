import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, ChevronDown, Globe, MessageSquare, Layout, Activity, Search, ArrowRight } from 'lucide-react';
import CtaSection from '../components/ui/CtaSection';
import bgCommunication from '../assets/images/formation/communication.jpeg';
import CountdownCard from '../components/ui/CountdownCard';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #1A1A3A', padding: '1.5rem 0' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          textAlign: 'left',
          color: '#F9FAFB',
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
            color: '#9CA3AF'
          }} 
          size={20}
        />
      </button>
      <div 
        style={{ 
          maxHeight: isOpen ? '500px' : '0', 
          overflow: 'hidden', 
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <p style={{ marginTop: '1rem', color: '#9CA3AF', lineHeight: 1.6, fontSize: '1.05rem' }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const FormationCommunicationIA = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Communication et IA : produire plus, mieux, plus vite. — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia forme vos équipes communication à l’IA appliquée au message, au positionnement et à la production éditoriale. Programme 2 jours, outils concrets, ateliers pratiques.";
    }
    window.scrollTo(0, 0);
  }, []);

  const pipedriveLink = "/contact"; 

  return (
    <div className="formation-communication-ia" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' }}>
      
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Fond pleine page */}
        <img src={bgCommunication} alt="" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0
        }} />
        {/* Overlays pour lisibilité */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: 'rgba(10,10,26,0.50)'
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(to right, rgba(10,10,26,0.9) 0%, rgba(10,10,26,0.6) 50%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(to bottom, transparent, #0A0A1A)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="fade-in" style={{ maxWidth: '850px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Communication et IA : produire plus, mieux, plus vite.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Les équipes communication font face à une demande croissante de contenus, sur plus de canaux, avec moins de temps. Ce programme de 2 jours leur donne les outils IA et les méthodes pour structurer leur stratégie éditoriale, produire plus efficacement et automatiser ce qui peut l’être — sans perdre la qualité ni la voix de la marque.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 500 }}>
                <Globe size={18} color="#44CCFF" />
                <span>Langues disponibles : <strong style={{ color: '#FFFFFF' }}>FR — EN — ES</strong></span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn" style={{ background: '#2563EB', padding: '1.2rem 2.8rem', color: '#fff', borderRadius: '8px', fontWeight: 700, fontSize: '1.05rem', boxShadow: '0 10px 20px rgba(37,99,235,0.2)' }}>Prendre RDV</a>
              <a href="#programme" className="btn btn-outline" style={{ padding: '1.2rem 2.8rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.05rem', backdropFilter: 'blur(8px)' }}>Voir le programme</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — À QUI S’ADRESSE CETTE FORMATION ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 700 }}>À qui s’adresse cette formation ?</h2>
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#9CA3AF', marginBottom: '2rem' }}>
                Managers et communicants cherchant à créer des messages clairs et engageants dans un environnement saturé. Adaptée aux équipes communication internes, aux chargés de communication et aux directions souhaitant structurer leur production éditoriale avec les outils IA.
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: '#0D1A2E', borderLeft: '4px solid #2563EB', borderRadius: '4px' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#F9FAFB' }}>
                <strong>Ce que vos équipes repartent avec :</strong> une stratégie de contenu structurée, un plan éditorial opérationnel et les outils pour produire plus vite sans sacrifier la qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — PROGRAMME ═══ */}
      <section id="programme" className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>Programme — 2 jours</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '3rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* JOUR 1 */}
            <div style={{ background: '#0A0A1A', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
              <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '2rem 3rem', borderBottom: '1px solid rgba(37, 99, 235, 0.2)' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#2563EB', marginBottom: '0.5rem' }}>Jour 1 — Stratégie, Message & Prompting</h3>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}><strong>Objectif :</strong> Comprendre et structurer sa stratégie de contenu en exploitant les bons outils IA.</p>
              </div>
              <div style={{ padding: '3rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Fondamentaux IA et GPT :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>comment ça fonctionne, ce qu’on peut en attendre, ce qu’on ne délègue pas</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Définir ses objectifs et ses personas :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>construire une base solide avant de produire</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Prompting efficace :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>obtenir des résultats exploitables, adapter le ton et le style à sa marque</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Génération de contenus structurés :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>posts, emails, landing pages — méthode et exemples</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Adapter le message par canal et par audience :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>ne pas produire un seul format pour tout le monde</p>
                    </div>
                  </li>
                </ul>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <p style={{ color: '#F9FAFB', lineHeight: 1.6 }}>
                    <strong style={{ color: '#2563EB' }}>Atelier pratique :</strong> Création et lancement d’une mini campagne — définition des personas, rédaction des messages, adaptation par canal.
                  </p>
                </div>
              </div>
            </div>

            {/* JOUR 2 */}
            <div style={{ background: '#0A0A1A', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
              <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '2rem 3rem', borderBottom: '1px solid rgba(37, 99, 235, 0.2)' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#2563EB', marginBottom: '0.5rem' }}>Jour 2 — Production, Visuels & Organisation Éditoriale</h3>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}><strong>Objectif :</strong> Structurer une production de contenus fluide et innovante en automatisant la veille, en optimisant l’organisation éditoriale et en générant des visuels IA impactants.</p>
              </div>
              <div style={{ padding: '3rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Automatiser sa veille :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>veille technologique, concurrentielle, tendances — automatisée avec les bons outils</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Organisation éditoriale :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>utiliser Notion et FeedHive pour structurer et planifier la production</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Générer des visuels IA :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>Dall·E, Kling, Fal.ai et autres — choisir le bon outil selon l’usage</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Optimisation SEO :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>intégrer les outils d’analyse pour créer du contenu visible</p>
                    </div>
                  </li>
                </ul>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <p style={{ color: '#F9FAFB', lineHeight: 1.6 }}>
                    <strong style={{ color: '#2563EB' }}>Cas pratique :</strong> Production d’un plan éditorial personnalisé — calendrier, formats, canaux, ressources.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* STICKY CARD */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <CountdownCard
              title="Communication et IA : produire plus, mieux, plus vite."
              dateStart={new Date('2026-06-22')}
              dateLabel="22 & 23 Juin 2026"
              image={bgCommunication}
            />
          </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — MODALITÉS ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>Formation et suivi</h2>
          <div style={{ background: '#0D1A2E', borderRadius: '24px', padding: '4rem', border: '1px solid rgba(37, 99, 235, 0.1)', position: 'relative', maxWidth: '900px', marginInline: 'auto' }}>
            <div className="grid-2" style={{ gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Durée</span>
                  <span style={{ fontWeight: 700 }}>2 jours</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Référence</span>
                  <span style={{ fontWeight: 700 }}>T-COM01</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Suivi post-training</span>
                  <span style={{ fontWeight: 700 }}>1 heure en visio</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Langues</span>
                  <span style={{ fontWeight: 700 }}>FR — EN — ES</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tarif Inter</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>À partir de 1 200 € HT / pers.</div>
                </div>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid #2563EB', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-12px', right: '20px', background: '#2563EB', color: '#fff', padding: '2px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>RECOMMANDÉ</div>
                  <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tarif Intra</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>À partir de 4 500 € HT / groupe</div>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '3rem', color: '#6B7280', fontSize: '0.9rem', textAlign: 'center' }}>
              Note : Tarifs HT, périmètre et objectifs cadrés ensemble avant tout démarrage.
            </p>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <a href={pipedriveLink} className="btn btn-primary" style={{ background: '#2563EB', padding: '1rem 3rem' }}>Nous contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — BLOC DE RENVOI ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in text-center">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 700, textAlign: 'center' }}>Vous formez vos équipes. Et ensuite ?</h2>
          <p style={{ fontSize: '1.2rem', color: '#9CA3AF', maxWidth: '800px', marginInline: 'auto', marginBottom: '4rem', textAlign: 'center' }}>
            Une équipe formée sur la stratégie de contenu et les outils IA, c’est le point de départ. Pour aller plus loin — automatiser vos flux, structurer votre stratégie globale, générer plus de leads — Squadia intervient aussi sur les systèmes.
          </p>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <Link to="/strategie-ia" style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB' } onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A3A' }>
              <h3 style={{ color: '#F9FAFB', marginBottom: '1rem' }}>Voir l’offre Stratégie IA</h3>
              <ArrowRight color="#2563EB" />
            </Link>
            <Link to="/automatisation-ia" style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB' } onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A3A' }>
              <h3 style={{ color: '#F9FAFB', marginBottom: '1rem' }}>Voir l’offre Automatisation</h3>
              <ArrowRight color="#2563EB" />
            </Link>
            <Link to="/data" style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB' } onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A3A' }>
              <h3 style={{ color: '#F9FAFB', marginBottom: '1rem' }}>Voir l’offre Data</h3>
              <ArrowRight color="#2563EB" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — FAQ ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <div style={{ maxWidth: '800px', marginInline: 'auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>Questions fréquentes</h2>
            <div>
              <AccordionItem 
                question="Faut-il avoir des compétences techniques pour suivre cette formation ?" 
                answer="Non. Les outils utilisés sont accessibles sans développement ni code. L’objectif est de rendre les équipes autonomes sur des outils opérationnels dès le lendemain de la formation."
              />
              <AccordionItem 
                question="Est-ce que cette formation couvre la partie SEO ?" 
                answer="Oui, le Jour 2 intègre les outils d’analyse et d’optimisation SEO dans la logique de production de contenu. L’objectif n’est pas de former des experts SEO, mais de produire du contenu qui se positionne."
              />
              <AccordionItem 
                question="Quelle différence avec la formation Marketing & IA ?" 
                answer="La formation Communication & IA est centrée sur le message, le positionnement et la ligne éditoriale. La formation Marketing & IA est plus orientée production de contenu, campagnes et performance. Les deux sont complémentaires."
              />
              <AccordionItem 
                question="Peut-on former une équipe mixte communication + marketing ?" 
                answer="Oui. En format intra, le programme peut être adapté pour couvrir les enjeux des deux pôles. On cadre ça ensemble en amont."
              />
              <AccordionItem 
                question="Les outils mentionnés sont-ils inclus dans le tarif de la formation ?" 
                answer="Les outils utilisés en formation sont généralement disponibles en version gratuite ou en essai. Aucun abonnement n’est requis pour participer. Si des outils payants sont recommandés, c’est indiqué clairement avec les alternatives disponibles."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — CTA FINAL ═══ */}
      <CtaSection
        headline="Prêt à structurer la communication de votre organisation avec l'IA ?"
        description="Message clair, production accélérée, ligne éditoriale cohérente — formez vos équipes communication aux outils qui font la différence."
        cardTitle="Communication & IA"
        cardSubtitle="Équipe éditoriale renforcée"
        cardDescription="Stratégie de contenu, prompting avancé, visuels IA et organisation éditoriale — 2 jours pour transformer la production."
        cardFeatures={[
          "Stratégie de contenu",
          "Prompting & ligne éditoriale",
          "Visuels IA (Dall·E, Kling)",
          "Plan éditorial opérationnel"
        ]}
        cardColor="#2563EB"
      />

    </div>
  );
};

export default FormationCommunicationIA;

