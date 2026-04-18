import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, ChevronDown, Globe, Layout, Image, Video, Mic, Calendar, ArrowRight } from 'lucide-react';
import CtaSection from '../components/ui/CtaSection';
import bgMarketing from '../assets/images/formation/marketing.jpeg';
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

const FormationMarketingIA = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Formation Marketing & IA — Contenus et campagnes — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia forme vos équipes marketing à l'IA générative pour la création de contenu. Programme 2 jours, outils concrets, ateliers pratiques. PME et ETI.";
    }
    window.scrollTo(0, 0);
  }, []);

  const pipedriveLink = "/contact"; 

  return (
    <div className="formation-marketing-ia" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' }}>
      
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Fond pleine page */}
        <img src={bgMarketing} alt="" style={{
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

        <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '180px', paddingBottom: '100px' }}>
          <div className="fade-in">
            <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '900px', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 700, color: '#FFFFFF' }}>
              Formation IA marketing : contenus, campagnes et analyse augmentés.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#9CA3AF', maxWidth: '850px', lineHeight: 1.6, marginBottom: '2rem' }}>
              Rédaction, images, vidéos, podcasts, veille — les outils IA transforment la production de contenu. Pas pour remplacer les équipes, mais pour leur permettre de produire plus, mieux et plus vite. Ce programme de 2 jours couvre les fondamentaux, les bons outils et les cas d'usage concrets pour des profils marketing opérationnels.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF' }}>
                <Globe size={18} color="#2563EB" />
                <span>Langues disponibles : <strong>FR — EN — ES</strong></span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-primary" style={{ background: '#2563EB', padding: '1.2rem 2.5rem', color: '#fff' }}>Prendre RDV</a>
              <a href="#programme" className="btn btn-outline" style={{ padding: '1.2rem 2.5rem' }}>Voir le programme</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — À QUI S'ADRESSE CETTE FORMATION ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 700 }}>À qui s'adresse cette formation ?</h2>
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#9CA3AF', marginBottom: '2rem' }}>
                Responsables marketing, communicants, créateurs de contenu ou dirigeants souhaitant comprendre, tester et intégrer l'intelligence artificielle dans leur production de contenu, tout en respectant le cadre légal et éthique européen.
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: '#0D1A2E', borderLeft: '4px solid #2563EB', borderRadius: '4px' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#F9FAFB' }}>
                <strong>Ce que vos équipes repartent avec :</strong> les bons réflexes, les bons outils, et une première routine de production IA opérationnelle.
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
                <h3 style={{ fontSize: '1.8rem', color: '#2563EB', marginBottom: '0.5rem' }}>Jour 1 — Fondamentaux & Premièrs Usages</h3>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}><strong>Objectif :</strong> Comprendre les fondamentaux, les limites et les cadres d'usage de l'IA générative pour la création de contenu, tout en découvrant les outils clés et les bonnes pratiques de rédaction.</p>
              </div>
              <div style={{ padding: '3rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Cadre juridique et éthique :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>limites, risques et responsabilités liés à l'usage de l'IA (IA Act, RGPD, biais, transparence)</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Vigilances et points de contrôle :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>biais, hallucinations, ce qu'on ne délègue pas à l'IA</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Méthode RODEV :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>rédiger avec méthode pour les emails, les posts LinkedIn — rôle, contexte, exemples, itérations</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Panorama des cas d'usage professionnels :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>communication, RH, marketing, formation</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Génération d'images, son et vidéo :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>tour d'horizon des outils (mise à jour permanente)</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Créer son premier GPT personnalisé :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>automatiser une tâche récurrente sans compétence technique</p>
                    </div>
                  </li>
                </ul>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <p style={{ color: '#F9FAFB', lineHeight: 1.6 }}>
                    <strong style={{ color: '#2563EB' }}>Atelier pratique :</strong> Rédaction et test de prompts IA adaptés à votre activité. Mise en place d'un agent (GPT) pour mieux gérer les tâches répétitives.
                  </p>
                </div>
              </div>
            </div>

            {/* JOUR 2 */}
            <div style={{ background: '#0A0A1A', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
              <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '2rem 3rem', borderBottom: '1px solid rgba(37, 99, 235, 0.2)' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#2563EB', marginBottom: '0.5rem' }}>Jour 2 — Production Avancée & Automatisation</h3>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}><strong>Objectif :</strong> Appliquer les outils d'IA pour produire, structurer et automatiser des contenus multimédias, en intégrant image, vidéo, podcast et veille intelligente dans une logique de campagne complète.</p>
              </div>
              <div style={{ padding: '3rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Génération d'images :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>choisir les bons outils, maîtriser les prompts visuels (angle, style, couleurs), retouche et recadrage IA</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Génération de vidéos :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>UGC, communication interne, fidélisation — création de votre avatar vidéo</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Création de podcasts IA :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>dynamiser son contenu sans studio</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Organisation et suivi de production :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>plan d'action, budget, calendrier, suivi via Notion</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Industrialisation de la veille :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>veille commerciale, technologique, concurrentielle — automatisée et à la demande</p>
                    </div>
                  </li>
                </ul>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <p style={{ color: '#F9FAFB', lineHeight: 1.6 }}>
                    <strong style={{ color: '#2563EB' }}>Atelier pratique :</strong> Création d'une double vidéo. Création d'un podcast en ligne. Prise en main des outils de génération de présentations avec IA. Découverte des outils d'automatisation et de veille.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* STICKY CARD */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <CountdownCard
              title="Formation IA marketing : contenus, campagnes et analyse augmentés."
              dateStart={new Date('2026-06-16')}
              dateLabel="16 & 17 Juin 2026"
              image={bgMarketing}
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
                  <span style={{ fontWeight: 700 }}>T-MKT01</span>
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
            Une équipe formée sur les bons outils IA, c'est le point de départ. Pour aller plus loin — automatiser vos flux de contenu, structurer votre stratégie, générer plus de leads — Squadia intervient aussi sur les systèmes.
          </p>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <Link to="/strategie-ia" style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB' } onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A3A' }>
              <h3 style={{ color: '#F9FAFB', marginBottom: '1rem' }}>Voir l'offre Stratégie IA</h3>
              <ArrowRight color="#2563EB" />
            </Link>
            <Link to="/automatisation-ia" style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB' } onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A3A' }>
              <h3 style={{ color: '#F9FAFB', marginBottom: '1rem' }}>Voir l'offre Automatisation</h3>
              <ArrowRight color="#2563EB" />
            </Link>
            <Link to="/data" style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB' } onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A3A' }>
              <h3 style={{ color: '#F9FAFB', marginBottom: '1rem' }}>Voir l'offre Data</h3>
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
                answer="Non. Les outils utilisés sont accessibles sans développement ni code. L'objectif est de rendre les équipes autonomes sur des outils qu'elles peuvent utiliser dès le lendemain."
              />
              <AccordionItem 
                question="Quels outils sont utilisés pendant la formation ?" 
                answer="Les outils varient selon l'évolution rapide du marché IA. On travaille avec les outils les plus pertinents au moment de la session — génération de texte, image, vidéo, podcast, veille. La sélection est mise à jour régulièrement."
              />
              <AccordionItem 
                question="Cette formation est-elle adaptée aux petites équipes marketing ?" 
                answer="Oui. Elle est conçue pour des profils opérationnels, pas des experts. Une personne seule ou une petite équipe de 2 à 3 personnes peut suivre et repartir avec des pratiques directement applicables."
              />
              <AccordionItem 
                question="Le cadre légal est-il vraiment abordé ?" 
                answer="Oui, dès le Jour 1. IA Act, RGPD, droits d'auteur, transparence — les points essentiels sont couverts de façon pratique, pas théorique."
              />
              <AccordionItem 
                question="Quelle différence avec la formation Communication & IA ?" 
                answer="La formation Marketing & IA est centrée sur la production de contenu, les campagnes et la performance. La formation Communication & IA est plus orientée message, positionnement et ligne éditoriale. Les deux sont complémentaires pour des organisations où marketing et communication sont séparés."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — CTA FINAL ═══ */}
      <CtaSection
        headline="Prêt à accélérer la production de vos équipes marketing avec l'IA ?"
        description="Texte, images, vidéos, podcasts, veille — formez vos équipes aux outils qui multiplient la capacité de production sans sacrifier la qualité."
        cardTitle="Marketing & IA"
        cardSubtitle="Production de contenu accélérée"
        cardDescription="2 jours pour maîtriser l'IA générative appliquée au marketing : création, campagnes, automatisation."
        cardFeatures={[
          "Génération d'images & vidéos",
          "Podcasts IA",
          "Veille automatisée",
          "Plan de contenu opérationnel"
        ]}
        cardColor="#2563EB"
      />

    </div>
  );
};

export default FormationMarketingIA;

