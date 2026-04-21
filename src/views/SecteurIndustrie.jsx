'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Factory, Clock, Database, Lightbulb, ShieldAlert, LineChart, Server, GraduationCap, ArrowRight } from 'lucide-react';

const SecteurIndustrie = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Strategie IA, CRM et formation pour les entreprises industrielles : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia aide les entreprises industrielles et du secteur de l energie a structurer leur CRM, former leurs équipes terrain et automatiser leur pipeline commercial.";
    }
  }, []);

  const challenges = [
    {
      title: "On repond aux appels d offres au lieu de les anticiper",
      description: "L entreprise attend que l opportunite arrive. Mais quand le cahier des charges est publie, il est souvent deja oriente vers un concurrent. Etre en amont, c'est avoir les bons signaux avant que ca soit officiel.",
      icon: <Clock size={24} color="#2563EB" />
    },
    {
      title: "Les commerciaux ont l experience mais pas les outils",
      description: "Ils connaissent leurs clients, leurs marches, leurs produits. Mais ils travaillent encore sur des fichiers Excel, sans méthode structuree, sans visibilite partagee. Ce qui fonctionne pour l un ne se transmet pas a l autre.",
      icon: <Factory size={24} color="#2563EB" />
    },
    {
      title: "Le CRM est vecu comme une contrainte, pas comme un outil",
      description: "On demande aux commerciaux de remplir des champs sans leur montrer ce que ca leur apporte. Ils ne voient pas la valeur, alors ils ne le font pas. Et le management n a pas de visibilite sur le pipeline.",
      icon: <Database size={24} color="#2563EB" />
    },
    {
      title: "L IA semble loin des réalités du terrain",
      description: "L industrie a souvent du retard sur la digitalisation commerciale. L IA est percue comme un sujet pour les boites tech, pas pour les entreprises qui vendent des produits physiques ou des solutions energetiques. C est souvent faux.",
      icon: <Lightbulb size={24} color="#2563EB" />
    },
    {
      title: "Les initiatives metier se heurtent aux contraintes IT",
      description: "Les équipes ont des idees et l'envie d avancer. Mais sans cadre valide au niveau direction, l'IT bloque pour des raisons de securite ou de conformite. Le probleme n'est pas l IT. C est l'absence de decision strategique en amont qui permettrait aux deux de travailler ensemble plutot que l un contre l autre.",
      icon: <ShieldAlert size={24} color="#2563EB" />
    }
  ];

  const solutions = [
    {
      title: "Detecter les opportunites avant le marche",
      description: "Recrutements strategiques, projets publics, changements de direction, appels d offres avant publication. On identifie les signaux qui indiquent qu un compte est en situation d'achat maintenant, pas dans six mois.",
      icon: <LineChart size={24} color="#2563EB" />
    },
    {
      title: "Structurer le CRM autour de la réalité commerciale du secteur",
      description: "Pas un CRM générique. Un CRM configure pour les cycles de vente longs, les familles de produits avec des saisonnalites differentes, les comptes multi-sites et les specificites du B2B industriel.",
      icon: <Server size={24} color="#2563EB" />
    },
    {
      title: "Aligner les équipes sur une méthode commune",
      description: "MEDDIC adapte au contexte industriel. Plan de compte. Visibilite partagee sur le pipeline. Quand'un commercial s engage sur un deal, ca veut dire la meme chose pour tout le monde, du terrain au COMEX.",
      icon: <Database size={24} color="#2563EB" />
    },
    {
      title: "Former les équipes terrain a l'IA sans les noyer",
      description: "Pas de théorie. Des cas pratiques sur comment préparer un rendez-vous client, comment se tenir informe des actualites d'un compte, comment gagner du temps sur les taches administratives pour passer plus de temps a vendre.",
      icon: <GraduationCap size={24} color="#2563EB" />
    }
  ];

  const blocks = [
    {
      question: "Vous voulez etre en amont sur vos comptes cibles ?",
      cta: "Voir l offre Data",
      link: "/data"
    },
    {
      question: "Votre CRM ne reflete pas la réalité du terrain ?",
      cta: "Voir l offre Strategie IA",
      link: "/strategie-ia"
    },
    {
      question: "Vos équipes ont besoin d'une méthode commune ?",
      cta: "Voir l offre Formation",
      link: "/formation-ia"
    }
  ];

  const clients = ["BestDrive / Continental", "Inocel", "France Hydrogene"];

  return (
    <div className="secteur-industrie-page" style={{ background: '#0A0A1A', minHeight: '100vh', color: '#F9FAFB' }}>
      
      {/* ═══ SECTION 1 : HERO ═══ */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '1000px', marginInline: 'auto', lineHeight: '1.1', marginBottom: '2rem' }}>
            Industrie et energie : prendre de l avance quand le marche change plus vite que l organisation.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: '1.6', marginBottom: '3rem' }}>
            Vos marches sont de niche, vos cycles de vente sont longs et vos concurrents avancent. Vos équipes ont l experience du terrain. Mais les outils, la méthode et la data ne suivent pas toujours. Squadia structure ce qui permet a vos commerciaux d etre en amont plutot qu en reaction.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#calendrier" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Prendre RDV
            </a>
            <Link href="/tarifs" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Voir nos offres
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 : CE QUE VIVENT VOS EQUIPES ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', textAlign: 'center', marginBottom: '4rem', maxWidth: '900px', marginInline: 'auto' }}>
            Ce qu'on observe dans les entreprises industrielles et energetiques.
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

      {/* ═══ SECTION 3 : CE QUE SQUADIA APPORTE ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', textAlign: 'center', marginBottom: '4rem' }}>
            Comment on travaille avec les entreprises industrielles et energetiques.
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

      {/* ═══ SECTION 4 : REFERENCES ═══ */}
      <section className="section-padding" style={{ borderTop: '1px solid #1A1A3A', borderBottom: '1px solid #1A1A3A', background: '#050510' }}>
        <div className="container fade-in" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
            Squadia a accompagne des entreprises industrielles et du secteur de l energie en France.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5rem', alignItems: 'center' }}>
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                style={{ 
                  fontSize: '1.5rem', 
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

      {/* ═══ SECTION 5 : BLOC DE RENVOI ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <div className="grid-3" style={{ gap: '2rem' }}>
            {blocks.map((block, idx) => (
              <div key={idx} style={{ background: '#0D0D25', border: '1px solid #1A1A3A', padding: '2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.5, marginBottom: '2rem', flexGrow: 1 }}>
                  {block.question}
                </p>
                <Link 
                  href={block.link} 
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

      {/* ═══ SECTION 6 : CTA FINAL ═══ */}
      <section className="section-padding" style={{ background: '#050510', borderTop: '1px solid #1A1A3A' }}>
        <div className="container fade-in" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', maxWidth: '800px', marginInline: 'auto', marginBottom: '3rem' }}>
            On peut regarder ensemble ce qui freine votre performance commerciale.
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#calendrier" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Prendre RDV
            </a>
            <Link href="/cas-clients" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Voir nos cas clients
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SecteurIndustrie;
