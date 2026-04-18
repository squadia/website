import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Search, Clock, ShieldAlert, Cpu, Database, Link as LinkIcon, Users, ArrowRight } from 'lucide-react';

const SecteurITSaaS = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Strategie IA et CRM pour les entreprises IT et SaaS — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia aide les editeurs logiciels, integrateurs et entreprises tech a structurer leur pipeline commercial, automatiser leur prospection et former leurs equipes a l IA.";
    }
  }, []);

  const challenges = [
    {
      title: "On fait le lievre sans savoir si on va gagner",
      description: "On repond a des appels d offres sans avoir ete en amont pour influencer le cahier des charges. On investit du temps sur des opportunites deja perdues avant meme d avoir envoye la proposition.",
      icon: <Target size={24} color="#2563EB" />
    },
    {
      title: "Personne n a la meme vision du pipeline",
      description: "Les commerciaux ont chacun leur methode. Un deal marque gagne pour l un ne veut pas dire la meme chose pour l autre. Le management ne peut pas piloter ce qu il ne comprend pas.",
      icon: <Search size={24} color="#2563EB" />
    },
    {
      title: "La prospection repose sur quelques individus ou personne",
      description: "Les seniors connaissent leur carnet d adresses. Les juniors ne savent pas encore comment penetrer des comptes complexes avec de nombreuses filiales. Entre les deux, les bons comptes passent sans etre vraiment travailles.",
      icon: <Users size={24} color="#2563EB" />
    },
    {
      title: "L IA est testee mais pas structuree",
      description: "Quelques commerciaux utilisent ChatGPT pour rediger des emails. D autres ne touchent pas a l IA. Il n y a pas de methode commune, pas de regle d usage, et personne ne sait ce qui fonctionne vraiment.",
      icon: <Cpu size={24} color="#2563EB" />
    },
    {
      title: "Les initiatives metier se heurtent aux contraintes IT",
      description: "Les equipes ont des idees, l envie d avancer, parfois deja des outils en tete. Mais sans cadre valide en amont, l IT bloque pour des raisons de securite ou de conformite. Pas parce qu ils ont tort, mais parce que personne n a pose les bonnes questions au bon niveau avant de lancer quoi que ce soit.",
      icon: <ShieldAlert size={24} color="#2563EB" />
    }
  ];

  const solutions = [
    {
      title: "Structurer la methode de vente dans le CRM",
      description: "MEDDIC, plan de compte, multi-sequence of events. On traduit la strategie commerciale en processus concret dans le CRM pour que tout le monde parle le meme langage et que le management ait une visibilite reelle.",
      icon: <Database size={24} color="#2563EB" />
    },
    {
      title: "Identifier les bons comptes au bon moment",
      description: "Detection de signaux d achat, recrutements strategiques, changements de direction. On identifie les comptes IT et SaaS qui ont une vraie raison d avancer maintenant, avant que la concurrence ne soit en place.",
      icon: <Search size={24} color="#2563EB" />
    },
    {
      title: "Automatiser ce qui prend du temps sans valeur",
      description: "Comptes-rendus de visioconference automatiques, mise a jour CRM, sequences de nurturing, alertes sur l evolution des opportunites. Vos commerciaux passent moins de temps a saisir et plus de temps a vendre.",
      icon: <Clock size={24} color="#2563EB" />
    },
    {
      title: "Former les equipes sur les cas concrets du metier",
      description: <>Pas une formation generique sur l IA. Une formation sur comment preparer un rendez-vous sur un grand compte avec <a href="http://Humantic.io" target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', textDecoration: 'underline' }}>Humantic.io</a>, comment qualifier une opportunite avec MEDDIC, comment utiliser l IA pour construire un plan de compte solide.</>,
      icon: <Users size={24} color="#2563EB" />
    }
  ];

  const blocks = [
    {
      question: "Vous voulez qualifier vos opportunites avant d investir du temps dessus ?",
      cta: "Voir l offre Data",
      link: "/data"
    },
    {
      question: "Vos commerciaux manquent de methode commune ?",
      cta: "Voir l offre Formation",
      link: "/formation-ia"
    },
    {
      question: "Votre CRM ne reflete pas la realite du terrain ?",
      cta: "Voir l offre Automatisation",
      link: "/automatisation-ia"
    }
  ];

  const clients = ["OVH", "Outsystems", "Xerox", "Dell Technologies", "Fujitsu"];

  return (
    <div className="secteur-it-page" style={{ background: '#0A0A1A', minHeight: '100vh', color: '#F9FAFB' }}>
      
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '900px', marginInline: 'auto', lineHeight: '1.1', marginBottom: '2rem' }}>
            IT et SaaS : quand la methode de vente ne suit pas la complexite du produit.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: '1.6', marginBottom: '3rem' }}>
            Vous vendez des solutions complexes a des organisations qui prennent du temps a decider. Vos commerciaux connaissent le produit. Mais ils n ont pas toujours la methode pour naviguer dans des cycles de vente longs, des interlocuteurs multiples et des appels d offres ou ils arrivent trop tard.
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
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', marginInline: 'auto' }}>
            Ce qu on entend le plus souvent dans les equipes commerciales IT et SaaS.
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
            Comment on travaille avec les equipes IT et SaaS.
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
            Squadia a accompagne des equipes commerciales dans des entreprises IT et tech en France, de la structuration CRM a la formation des equipes.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                style={{ 
                  fontSize: '1.4rem', 
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
          <div className="grid-3" style={{ gap: '2rem' }}>
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
          <h2 style={{ fontSize: '2.5rem', maxWidth: '800px', marginInline: 'auto', marginBottom: '3rem' }}>
            On peut regarder ensemble ou ca coince dans votre cycle de vente.
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

export default SecteurITSaaS;
