'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, ChevronDown, UserX, AlertTriangle, Compass, Briefcase, Megaphone, PieChart, GraduationCap, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
const imgVente = '/assets/images/formation/commercial.png';
const imgMarketing = '/assets/images/formation/marketing.jpeg';
const imgCommunication = '/assets/images/formation/communication.jpeg';
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
          color: 'var(--text-primary)',
          fontSize: '1.1rem',
          fontWeight: 700
        }}
      >
        <span>{question}</span>
        <ChevronDown 
          style={{ 
            transition: 'transform 0.3s ease', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: 'var(--text-secondary)'
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
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

const renderPrice = (priceString) => {
  let displayPrice = priceString;
  let prefix = null;
  let suffix = null;
  
  if (displayPrice.startsWith('À partir de ')) {
    prefix = 'À partir de';
    displayPrice = displayPrice.replace('À partir de ', '');
  }

  if (displayPrice.includes(' / pers.')) {
    suffix = '/ pers.';
    displayPrice = displayPrice.replace(' / pers.', '');
  } else if (displayPrice.includes(' / groupe')) {
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
};

const FormationCard = ({ category, title, forWho, description, link, image, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`formation-card-horizontal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="card-image-wrap">
        <img src={image} alt={title} />
      </div>
      <div className="card-content-wrap">
        <span className="card-category-new">{category}</span>
        <h3 className="card-title-new">{title}</h3>
        <p className="card-for-who-new">{forWho}</p>
        <p className="card-description-new">{description}</p>
        <Link href={link} className="btn-discover-new">
          Découvrir cette formation <ArrowRight size={16} style={{ marginLeft: '8px' }} />
        </Link>
      </div>
    </div>
  );
};

const Formation = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Formation IA pour les équipes vente, marketing et communication : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia forme vos équipes à l'IA appliquée à leur métier. Cas pratiques, outils réels, autonomie durable. Pour PME et ETI en France.";
    }
  }, []);

  return (
    <div className="formation-page" style={{ background: 'var(--bg-primary)' }}>
      {/* ═══ SECTION 1 : HERO ═══ */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '900px', marginInline: 'auto', lineHeight: '1.1', marginBottom: '2rem' }}>
            Former vos équipes, c'est la condition pour que tout le reste fonctionne.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: '1.6', marginBottom: '3rem' }}>
            Vous pouvez avoir les meilleurs outils, les meilleures automatisations, les meilleures données. Si vos équipes ne savent pas quoi en faire, tout ça ne sert à rien. La formation n'est pas la dernière étape, c'est souvent la première.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#calendrier" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Prendre RDV
            </a>
            <a href="#formats" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Voir les formats
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 : LE PROBLÈME ═══ */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', textAlign: 'center', marginBottom: '1.5rem' }}>Ce qu'on observe dans la plupart des entreprises.</h2>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '800px', textAlign: 'center', marginInline: 'auto', lineHeight: '1.6', marginBottom: '4rem' }}>
            <strong style={{ color: 'white', fontWeight: 600 }}>66% des entreprises qui réussissent leur transformation IA ont formé leurs équipes en amont</strong> (Bpifrance, 2026). Et pourtant, c'est encore l'étape que la plupart sautent.
          </p>

          <div className="grid-3">
            
            <div style={{ background: '#0A0A1A', padding: '2.5rem', borderRadius: '8px', border: '1px solid #1A1A3A', borderLeft: '4px solid #2563EB' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: '#2563EB', marginBottom: '1rem', lineHeight: 1 }}>32%</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Des outils adoptés par quelques-uns, ignorés par le reste</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                32% des PME et ETI utilisent l'IA au quotidien. Dans les autres, l'outil est installé, deux ou trois personnes s'en servent, les autres attendent de voir. Sans formation, le taux d'adoption plafonne vite.
              </p>
            </div>

            <div style={{ background: '#0A0A1A', padding: '2.5rem', borderRadius: '8px', border: '1px solid #1A1A3A', borderLeft: '4px solid #2563EB' }}>
              <AlertTriangle size={40} color="#2563EB" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Des usages fragmentés, pas des pratiques communes</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Chacun utilise l'IA dans son coin, différemment, sans méthode partagée. Le gain individuel est réel. Le gain collectif, lui, n'arrive jamais.
              </p>
            </div>

            <div style={{ background: '#0A0A1A', padding: '2.5rem', borderRadius: '8px', border: '1px solid #1A1A3A', borderLeft: '4px solid #2563EB' }}>
              <UserX size={40} color="#2563EB" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Une équipe qui subit les décisions plutôt que de les porter</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Sans compréhension des outils, chaque choix d'outillage est vécu comme une contrainte imposée. Avec une équipe formée, les décisions passent mieux et s'appliquent vraiment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 : CE QU'ON FORME (NEW DESIGN) ═══ */}
      <section className="section-padding" style={{ background: '#0A0A1A' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', textAlign: 'center', marginBottom: '4.5rem', color: '#F9FAFB' }}>Une formation pour chaque métier.</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            <FormationCard
              category="Vente"
              title="Ventes & IA : Méthode, plan de compte et outils pour équipes commerciales B2B"
              forWho="Pour qui : Directeurs commerciaux et Sales Managers souhaitant structurer leur équipe sur une méthode commune"
              description="Méthode MEDDIC, plan de compte structuré et IA en situation réelle. Vos commerciaux repartent avec des réflexes de terrain renforcés et des outils qu'ils utilisent dès le lundi suivant."
              link="/formation-ventes-et-ia"
              image={imgVente}
              delay={0}
            />

            <FormationCard
              category="Marketing"
              title="Marketing & IA : Créer, produire et automatiser ses contenus avec l'IA"
              forWho="Pour qui : Responsables marketing et créateurs de contenu souhaitant produire plus vite sans sacrifier la qualité"
              description="Prompting efficace, production images vidéos podcasts et automatisation de la veille. Les bons réflexes, les bons outils, et une routine de production IA opérationnelle dès la fin de la formation."
              link="/formation-marketing-et-ia"
              image={imgMarketing}
              delay={0.15}
            />

            <FormationCard
              category="Communication"
              title="Communication & IA : Structurer sa strategie éditoriale et produire avec l'IA"
              forWho="Pour qui : Directeurs communication, managers et équipes com cherchant à produire plus et mieux sur tous les canaux"
              description="Stratégie éditoriale structurée, prompting adapté à la voix de la marque et organisation de la production de contenu. Un plan éditorial opérationnel à l issue des 2 jours."
              link="/formation-communication-et-ia"
              image={imgCommunication}
              delay={0.30}
            />

          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 : LES FORMATS ═══ */}
      <section id="formats" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', textAlign: 'center', marginBottom: '4rem' }}>Choisissez le format adapté à votre organisation.</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            
            {/* Forfait 1 */}
            <div style={{ background: '#0D0D25', border: '1px solid #1A1A3A', padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0' }}>Inter-entreprises</h3>
              <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '2rem', minHeight: '3rem', fontStyle: 'italic' }}>
                Pour apprendre dans un cadre multi-secteurs, avec d'autres équipes.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {renderPrice('À partir de 1 500 € HT / pers.')}
                </div>
              </div>

              <div style={{ flexGrow: 1, marginBottom: '2rem' }}>
                {[
                  "Fondamentaux IA appliqués aux métiers commerciaux et marketing",
                  "Méthodes de prompt et d'organisation",
                  "Ateliers orientés production : résultats concrets dès la formation",
                  "Supports et templates réutilisables inclus"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '0.75rem', fontSize: '0.85rem', lineHeight: 1.4 }}>
                    <Check size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <a href="#calendrier" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Choisir ce format
              </a>
            </div>

            {/* Forfait 2 (Recommandé) */}
            <div style={{ background: '#0D0D25', border: '1px solid #2563EB', padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                background: '#2563EB', color: 'white', padding: '4px 12px', borderRadius: '20px',
                fontSize: '0.7rem', fontWeight: 700
              }}>
                RECOMMANDÉ
              </div>
              
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0' }}>Intra-entreprise</h3>
              <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '2rem', minHeight: '3rem', fontStyle: 'italic' }}>
                Pour former votre équipe sur vos cas, <span style={{ whiteSpace: 'nowrap' }}>vos outils, votre contexte.</span>
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {renderPrice('À partir de 4 590 € HT / groupe')}
                </div>
              </div>

              <div style={{ flexGrow: 1, marginBottom: '2rem' }}>
                {[
                  "Cas et scénarios proches du métier et de l'environnement client",
                  "Mise en place de routines et règles d'usage communes",
                  "Plan d'action équipe livré en fin de formation",
                  "Coaching post-formation possible"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '0.75rem', fontSize: '0.85rem', lineHeight: 1.4 }}>
                    <Check size={16} color="white" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <a href="#calendrier" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Choisir ce format
              </a>
            </div>

            {/* Forfait 3 */}
            <div style={{ background: '#0D0D25', border: '1px solid #1A1A3A', padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0' }}>Parcours sur mesure</h3>
              <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '2rem', minHeight: '3rem', fontStyle: 'italic' }}>
                Pour construire un programme progressif avec suivi renforcé.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {renderPrice('Sur devis')}
                </div>
              </div>

              <div style={{ flexGrow: 1, marginBottom: '2rem' }}>
                {[
                  "Modules progressifs adaptés aux enjeux de l'organisation",
                  "Ateliers sur cas internes réels",
                  "Coaching individuel ou collectif et itérations",
                  "Plan d'action individualisé et suivi dans le temps"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '0.75rem', fontSize: '0.85rem', lineHeight: 1.4 }}>
                    <Check size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <a href="#calendrier" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Choisir ce format
              </a>
            </div>

          </div>

          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '0.95rem' }}>
            Tarifs HT, périmètre et objectifs cadrés ensemble avant tout démarrage.
          </p>
        </div>
      </section>

      {/* ═══ SECTION 5 : BLOC DE RENVOI ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', textAlign: 'center', marginBottom: '4rem' }}>Et ensuite ?</h2>
          
          <div style={{ background: '#0D0D25', padding: '3.5rem', borderRadius: '12px', border: '1px solid #1A1A3A', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', marginInline: 'auto' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Vos équipes sont formées. L'étape suivante, c'est structurer les bons outils et les bons process pour aller plus loin.</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '1.1rem' }}>
              Une feuille de route IA adaptée à votre organisation, avec les cas d'usage qui font vraiment sens pour vous.
            </p>
            <Link href="/strategie-ia" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
              Voir l'offre Stratégie IA <Compass size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 : FAQ ═══ */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid #111' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', margin: '0 0 0.5rem 0' }}>Questions fréquentes</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--accent)', margin: 0 }}>sur l'offre Formation</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <AccordionItem 
              question="Faut-il avoir des outils IA déjà en place pour suivre une formation ?" 
              answer="Non. Les formations peuvent démarrer dès lors que les participants ont accès à un outil'IA basique (ChatGPT, Copilot, Gemini). On part de ce que vous avez."
            />
            <AccordionItem 
              question="Combien de personnes par session ?" 
              answer="On privilégie les petits groupes pour garantir plus d'interactivité et une meilleure assimilation des concepts. En intra, on travaille avec des groupes de 6 à 10 personnes en moyenne."
            />
            <AccordionItem 
              question="Peut-on former des équipes mélangées (vente + marketing) ?" 
              answer="Oui. Les formations intra peuvent couvrir plusieurs métiers dans une même session. Le programme est adapté en conséquence."
            />
            <AccordionItem 
              question="Est-ce qu'on peut former uniquement sur un outil spécifique ?" 
              answer="On peut intégrer un outil spécifique dans le programme, mais on ne forme jamais sur un outil seul. L'enjeu c'est toujours de comprendre comment l'outil s'intègre dans une méthode de travail, pas juste de savoir l'utiliser."
            />
            <AccordionItem 
              question="Quelle différence avec une formation IA généraliste ?" 
              answer="On ne forme pas sur l'IA en général. On forme sur l'IA appliquée au métier : comment prospecter mieux, comment préparer un rendez-vous différemment, comment produire du contenu plus vite sans perdre la qualité. L'objectif c'est que chaque participant reparte avec une vision élargie de ce que l'IA peut changer dans son quotidien, une méthode pour l'appliquer, et la posture pour continuer à progresser seul."
            />
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 : CTA FINAL ═══ */}
      <section className="section-padding" style={{ background: '#050510', borderTop: '1px solid #1A1A3A' }}>
        <div className="container fade-in" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', maxWidth: '800px', marginInline: 'auto', marginBottom: '3rem' }}>
            Prêt à rendre vos équipes vraiment autonomes sur l'IA ?
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#calendrier" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Prendre RDV
            </a>
            <Link href="/tarifs" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Découvrir nos autres offres
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .formation-card-horizontal {
          display: flex;
          background: #FFFFFF;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .formation-card-horizontal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .card-image-wrap {
          flex: 1;
          min-height: 100%;
        }
        .card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-content-wrap {
          flex: 2;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .card-category-new {
          color: #2563EB;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 12px;
          display: block;
        }
        .card-title-new {
          color: #060612;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.25;
        }
        .card-for-who-new {
          color: rgba(0,0,0,0.4);
          font-size: 13px;
          margin-bottom: 16px;
        }
        .card-description-new {
          color: rgba(0,0,0,0.6);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .btn-discover-new {
          align-self: flex-start;
          background: #060612;
          color: #FFFFFF;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        .btn-discover-new:hover {
          background: #2563EB;
          color: #FFFFFF;
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .card-content-wrap { padding: 30px; }
          .card-title-new { fontSize: 24px; }
        }
        @media (max-width: 768px) {
          .card-image-wrap { flex: 0.4; }
          .card-content-wrap { flex: 0.6; }
        }
        @media (max-width: 480px) {
          .formation-card-horizontal { flex-direction: column; }
          .card-image-wrap { height: 220px; width: 100%; }
          .card-content-wrap { padding: 24px; }
        }
      `}</style>

    </div>
  );
};

export default Formation;
