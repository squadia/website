import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BookOpen, Users, Lock, FastForward, CheckSquare, Target, Settings, Brain, ArrowRight } from 'lucide-react';

const SecteurPublic = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Formation IA pour les collectivites et organismes publics — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia forme les equipes des collectivites, administrations et organismes publics a l IA appliquee a la communication, la gestion et les services aux usagers.";
    }
  }, []);

  const challenges = [
    {
      title: "Une charte IA existe mais personne ne sait vraiment quoi en faire",
      description: "Elle a ete redigee. Elle couvre les grandes lignes. Mais entre la charte et le quotidien des agents, il y a un fosse. Les equipes ne savent pas concretement ce qu elles peuvent faire, ce qu elles ne peuvent pas faire, ni pourquoi.",
      icon: <BookOpen size={24} color="#2563EB" />
    },
    {
      title: "Les outils proliferent sans fil directeur",
      description: "ChatGPT, Copilot, des outils d image... Chacun teste de son cote. Il n y a pas de methode commune, pas de veille structuree, pas de criteres pour choisir ce qui est vraiment utile pour l organisation.",
      icon: <Target size={24} color="#2563EB" />
    },
    {
      title: "Adapter les messages a des publics tres differents prend du temps",
      description: "Habitants, commercants, jeunes, seniors, partenaires institutionnels. Chaque public a ses codes, ses canaux, ses attentes. Produire du contenu adapte a chacun sans perdre en qualite, ca prend beaucoup de temps.",
      icon: <Users size={24} color="#2563EB" />
    },
    {
      title: "La conformite et la securite freinent l adoption",
      description: "RGPD, donnees sensibles, validation IT, risques d usurpation. Les agents ont des contraintes reelles qui ne disparaissent pas avec l IA. Il faut un cadre clair pour avancer sans prendre de risques.",
      icon: <Lock size={24} color="#2563EB" />
    }
  ];

  const solutions = [
    {
      title: "Un programme adapte aux profils et aux enjeux metier",
      description: "Avant chaque formation, un atelier de cadrage avec le responsable de service pour comprendre la seniorite des equipes, les usages existants et les priorites. Le programme est construit sur la realite des agents, pas sur un template generique.",
      icon: <CheckSquare size={24} color="#2563EB" />
    },
    {
      title: "Former sur les outils utiles, pas sur tous les outils",
      description: "Production de contenu, creation d images et de videos, adaptation des messages par canal et par audience, veille structuree. Des cas pratiques tires du quotidien de chaque equipe.",
      icon: <Settings size={24} color="#2563EB" />
    },
    {
      title: "Remettre la charte en perspective",
      description: "Comprendre pourquoi les regles existent, comment les appliquer, ou s arrete l autonomie des agents avant validation. Donner un cadre clair plutot que des interdictions floues.",
      icon: <BookOpen size={24} color="#2563EB" />
    },
    {
      title: "Ouvrir vers les prochaines etapes",
      description: "Apres la formation, les equipes voient ce qu il est possible de faire avec l IA : chatbots intelligents pour les services aux usagers, automatisation des communications recurrentes, personnalisation des echanges avec les partenaires.",
      icon: <FastForward size={24} color="#2563EB" />
    }
  ];

  const blocks = [
    {
      question: "Vous voulez aller plus loin apres la formation ?",
      cta: "Voir l offre Strategie IA",
      link: "/strategie-ia"
    },
    {
      question: "Vous cherchez a automatiser certains services ?",
      cta: "Voir l offre Automatisation",
      link: "/automatisation-ia"
    }
  ];

  const clients = ["Mairie de Lyon", "CEA", "CGSS Guyane"];

  return (
    <div className="secteur-public-page" style={{ background: '#0A0A1A', minHeight: '100vh', color: '#F9FAFB' }}>
      
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '1000px', marginInline: 'auto', lineHeight: '1.1', marginBottom: '2rem' }}>
            Secteur public : former les equipes a l IA sans perdre en qualite ni en conformite.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: '1.6', marginBottom: '3rem' }}>
            Vos equipes produisent du contenu, gerent des communications complexes, servent des publics tres differents. L IA peut les aider a aller plus vite et mieux. Encore faut-il leur donner une methode, un cadre, et des outils adaptes a leur realite, pas a celle d une startup.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#calendrier" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Prendre RDV
            </a>
            <Link to="/tarifs" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Voir nos offres
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — CE QUE VIVENT VOS EQUIPES ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', maxWidth: '900px', marginInline: 'auto' }}>
            Ce qu on observe dans les collectivites et organismes publics.
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {challenges.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#0D0D25', 
                  borderLeft: '4px solid #2563EB', 
                  borderTop: '1px solid #1A1A3A',
                  borderRight: '1px solid #1A1A3A',
                  borderBottom: '1px solid #1A1A3A',
                  padding: '2.5rem', 
                  borderRadius: '0 8px 8px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ background: 'rgba(37, 99, 235, 0.1)', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — CE QUE SQUADIA APPORTE ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>
            Comment on travaille avec les collectivites et organismes publics.
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {solutions.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#0D0D25', 
                  borderLeft: '4px solid #2563EB', 
                  borderTop: '1px solid #1A1A3A',
                  borderRight: '1px solid #1A1A3A',
                  borderBottom: '1px solid #1A1A3A',
                  padding: '2.5rem', 
                  borderRadius: '0 8px 8px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ background: 'rgba(37, 99, 235, 0.1)', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — REFERENCES ═══ */}
      <section className="section-padding" style={{ borderTop: '1px solid #1A1A3A', borderBottom: '1px solid #1A1A3A', background: '#050510' }}>
        <div className="container fade-in" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
            Squadia a forme des equipes dans des collectivites et organismes publics en France.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5rem', alignItems: 'center' }}>
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                style={{ 
                  fontSize: '1.6rem', 
                  fontWeight: 700, 
                  color: '#F9FAFB', 
                  opacity: 0.6,
                  transition: 'opacity 0.3s ease',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0.6}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — BLOC DE RENVOI ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          {/* Note: changed standard grid to center 2 elements beautifully */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '800px', marginInline: 'auto' }}>
            {blocks.map((block, idx) => (
              <div key={idx} style={{ background: '#0D0D25', border: '1px solid #1A1A3A', padding: '2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.5, marginBottom: '2rem', flexGrow: 1 }}>
                  {block.question}
                </p>
                <Link 
                  to={block.link} 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    color: '#2563EB', 
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  {block.cta} <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — CTA FINAL ═══ */}
      <section className="section-padding" style={{ background: '#050510', borderTop: '1px solid #1A1A3A' }}>
        <div className="container fade-in" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', maxWidth: '850px', marginInline: 'auto', marginBottom: '3rem' }}>
            On peut regarder ensemble comment former vos equipes sans perturber leur organisation.
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#calendrier" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Prendre RDV
            </a>
            <Link to="/cas-clients" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Voir nos cas clients
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SecteurPublic;
