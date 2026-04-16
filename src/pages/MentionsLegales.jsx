import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const MentionsLegales = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Mentions Légales — Squadia";
  }, []);

  const sections = [
    {
      title: "Éditeur du site",
      content: (
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p><strong>Raison sociale :</strong> Squadia</p>
          <p><strong>Forme juridique :</strong> Entreprise Individuelle</p>
          <p><strong>Adresse :</strong> 193 Avenue de France, 75013 Paris</p>
          <p><strong>SIRET :</strong> 45243901100027</p>
          <p><strong>Téléphone :</strong> +33 7 82 84 35 64</p>
          <p><strong>Email :</strong> contact@squadia.io</p>
          <p style={{ marginTop: '1rem' }}><strong>Directeur de la publication :</strong> Jérôme Debruyne</p>
        </div>
      )
    },
    {
      title: "Hébergeur",
      content: (
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p><strong>Vercel Inc.</strong></p>
          <p>440 N Barranca Ave #4133</p>
          <p>Covina, CA 91723</p>
          <p>États-Unis</p>
          <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>vercel.com</a></p>
        </div>
      )
    },
    {
      title: "Propriété intellectuelle",
      content: (
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          L'ensemble des contenus présents sur ce site — textes, visuels, structure et éléments graphiques — sont la propriété exclusive de Squadia. Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>
      )
    },
    {
      title: "Données personnelles",
      content: (
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p>Les informations collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont ni cédées ni revendues à des tiers.</p>
          <p style={{ marginTop: '1rem' }}>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit : <a href="mailto:contact@squadia.io" style={{ color: 'var(--accent)', textDecoration: 'none' }}>contact@squadia.io</a></p>
        </div>
      )
    },
    {
      title: "Cookies",
      content: (
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Ce site utilise des cookies à des fins d'analyse de trafic. En poursuivant votre navigation, vous acceptez leur utilisation.
        </p>
      )
    }
  ];

  return (
    <div className="legal-page" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', fontFamily: '"Inter", sans-serif', fontWeight: 300 }}>
      {/* Hero */}
      <section className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="fade-in">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 400, letterSpacing: '-0.02em' }}>
            Mentions Légales
          </h1>
          <div style={{ width: '40px', height: '2px', background: 'var(--accent)', marginTop: '2rem', opacity: 0.5 }}></div>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="grid-2 fade-in" style={{ gap: '4rem', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {sections.slice(0, 3).map((section, index) => (
                <div key={index} style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '1.5rem', color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{section.title}</h2>
                  <div style={{ fontWeight: 300, opacity: 0.8 }}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {sections.slice(3).map((section, index) => (
                <div key={index} style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '1.5rem', color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{section.title}</h2>
                  <div style={{ fontWeight: 300, opacity: 0.8 }}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
