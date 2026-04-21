'use client';
import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Users, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "À propos de Squadia : Experts B2B en IA, CRM et Automatisation";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia est un cabinet de conseil spécialisé en transformation commerciale B2B : stratégie IA, migration CRM, automatisation et formation. 20 ans d'expertise, basé à Paris.");
    }
  }, []);

  const values = [
    {
      title: 'Obsession de l\'Exécution',
      desc: 'Le conseil ne vaut rien sans la mise en œuvre. Nous ne partons pas tant que le système n\'est pas en production.',
      icon: <Target className="blue-icon" />
    },
    {
      title: 'Pragmatisme Tech',
      desc: 'L\'IA est un levier, pas une fin. Nous choisissons les outils pour leur impact sur votre CA, pas pour la hype.',
      icon: <Zap className="blue-icon" />
    },
    {
      title: 'Expertise B2B',
      desc: '20 ans d\'expertise dans la structuration commerciale. Nous comprenons vos enjeux métiers avant de parler code.',
      icon: <Users className="blue-icon" />
    }
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
        <div className="fade-in">
          <span className="tag-hero">NOTRE MISSION</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '900px' }}>
            Réconcilier la stratégie et l'exécution.
          </h1>
          <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginTop: '2rem', maxWidth: '700px' }}>
            Squadia est né d'un constat simple : 80% des stratégies IA échouent par manque de structuration opérationnelle. Nous sommes là pour être les 20% restants.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="fade-in grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Pourquoi Squadia ?</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                La plupart des cabinets de conseil s'arrêtent au Powerpoint. La plupart des agences marketing s'arrêtent à l'outil. 
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Squadia occupe l'espace entre les deux. Nous structurons votre système de génération de revenus de bout en bout : de la donnée brute à la signature finale, en passant par l'automatisation intelligente de vos process.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)' }}>20+</div>
                  <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Ans d'expertise Sales</p>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)' }}>120+</div>
                  <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Clients accompagnés</p>
                </div>
              </div>
            </div>
            <div style={{ background: '#0D0D25', padding: '4rem', borderRadius: '8px', border: '1px solid #1A1A3A', position: 'relative' }}>
               <ShieldCheck size={80} color="var(--accent)" style={{ opacity: 0.1, position: 'absolute', top: '2rem', right: '2rem' }} />
               <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Notre promesse</h3>
               <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  "Nous ne vendons pas de jours/homme. Nous vendons des systèmes qui tournent. Si nous ne voyons pas de chemin clair vers un ROI positif sous 90 jours, nous ne prenons pas la mission."
               </p>
               <div style={{ marginTop: '2rem', fontWeight: 700 }}>— L'équipe Squadia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Nos piliers fondamentaux</h2>
          <div className="grid-3">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div style={{ marginBottom: '1.5rem' }}>{v.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '2rem' }}>Prêt à passer à l'exécution ?</h2>
          <Link href="/contact" className="btn btn-primary pulse" style={{ padding: '1.2rem 3rem' }}>Planifier un échange</Link>
        </div>
      </section>

      <style>{`
        .blue-icon { color: var(--accent); }
        .value-card {
          padding: 3rem;
          background: #0D0D25;
          border: 1px solid #1A1A3A;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default About;
