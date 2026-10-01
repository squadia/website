'use client';
import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { showCookiePreferences } from '../components/CookieConsent';

const MentionsLegales = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Mentions Légales : Squadia";
  }, []);

  // Lien direct /mentions-legales/#elisa (message affiché avant un appel avec Elisa) :
  // on descend après le retour en haut de page fait par le layout au changement de page
  useEffect(() => {
    if (window.location.hash !== '#elisa') return;
    const timer = setTimeout(() => {
      document.getElementById('elisa')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const textStyle = { color: 'var(--text-secondary)', lineHeight: '1.8' };
  const linkStyle = { color: 'var(--accent)', textDecoration: 'none' };
  const elisaBlocks = [
    {
      title: "Qui est Elisa",
      body: "Elisa est l'assistante vocale de Squadia. C'est une intelligence artificielle : vous ne parlez pas à un humain. Elle répond à vos questions sur nos offres, peut afficher les pages du site qui vous intéressent et organiser un rendez-vous avec un consultant.",
    },
    {
      title: "Données traitées",
      body: "Votre voix et la transcription de la conversation ; les informations que vous choisissez de donner (nom, entreprise, poste, email, téléphone) ; la page depuis laquelle vous lancez l'appel et, le cas échéant, le nom de la campagne du lien qui vous a amené, sans vous identifier. Lorsque vous donnez le nom de votre entreprise, Elisa consulte les actualités publiques la concernant.",
    },
    {
      title: "Finalités et base légale",
      body: "Répondre à vos questions et vous faire visiter le site, organiser le rendez-vous que vous demandez, assurer le suivi commercial et améliorer la qualité des réponses d'Elisa. Ces traitements reposent sur notre intérêt légitime à répondre aux visiteurs et, pour la prise de rendez-vous, sur les mesures précontractuelles prises à votre demande.",
    },
    {
      title: "Enregistrement et durée de conservation",
      body: "En lançant un appel et en autorisant votre micro, vous acceptez que la conversation soit enregistrée. L'enregistrement audio et la transcription sont supprimés automatiquement au bout de 90 jours. Les coordonnées et informations de rendez-vous sont conservées 3 ans à compter de notre dernier échange.",
    },
    {
      title: "Prestataires",
      body: "ElevenLabs (voix et intelligence artificielle conversationnelle, y compris le modèle de langage utilisé), Cal.com (agenda et prise de rendez-vous), Serper (recherche d'actualités publiques sur le nom de l'entreprise), Supabase (hébergement des données de suivi) et Vercel (hébergement du site). Certains sont situés hors de l'Union européenne, notamment aux États-Unis ; ces transferts sont encadrés par les garanties prévues par le RGPD.",
    },
  ];

  const sections = [
    {
      title: "Éditeur du site",
      content: (
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p><strong>Raison sociale :</strong> Squadia</p>
          <p><strong>Forme juridique :</strong> Entreprise Individuelle</p>
          <p><strong>Adresse :</strong> 193 Avenue de France, 75013 Paris</p>
          <p><strong>SIRET :</strong> 45243901100027</p>
          <p><strong>Téléphone :</strong> +33 7 45 80 49 49</p>
          <p><strong>Email :</strong> contact@squadia.io</p>
          <p style={{ marginTop: '1rem' }}><strong>Directeur de la publication :</strong> Jérôme Debruyne</p>
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
          L'ensemble des contenus présents sur ce site : textes, visuels, structure et éléments graphiques : sont la propriété exclusive de Squadia. Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>
      )
    },
    {
      title: "Données personnelles",
      content: (
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p>Les informations collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont ni cédées ni revendues à des tiers.</p>
          <p style={{ marginTop: '1rem' }}>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit : <a href="mailto:contact@squadia.io" style={{ color: 'var(--accent)', textDecoration: 'none' }}>contact@squadia.io</a></p>
        </div>
      )
    },
    {
      title: "Cookies",
      content: (
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p>Ce site utilise des cookies de mesure d'audience, déposés uniquement après votre consentement, donné via le bandeau affiché lors de votre première visite.</p>
          <p style={{ marginTop: '1rem' }}>
            Vous pouvez modifier votre choix à tout moment :{' '}
            <button
              type="button"
              onClick={showCookiePreferences}
              style={{ color: 'var(--accent)', background: 'none', border: 'none', padding: 0, font: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}
            >
              gérer mes préférences de cookies
            </button>.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="legal-page" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', fontFamily: '"Inter", sans-serif', fontWeight: 300 }}>
      {/* Hero */}
      <section className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="fade-in">
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 400, letterSpacing: '-0.02em' }}>
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
                <div key={index} style={{ borderLeft: '1px solid rgba(28,43,39,0.16)', paddingLeft: '2rem' }}>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 400, marginBottom: '1.5rem', color: '#1C2B27', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{section.title}</h2>
                  <div style={{ fontWeight: 300, opacity: 0.8 }}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {sections.slice(3).map((section, index) => (
                <div key={index} style={{ borderLeft: '1px solid rgba(28,43,39,0.16)', paddingLeft: '2rem' }}>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 400, marginBottom: '1.5rem', color: '#1C2B27', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{section.title}</h2>
                  <div style={{ fontWeight: 300, opacity: 0.8 }}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assistante vocale : cible du lien affiché avant chaque premier appel */}
          <div id="elisa" className="fade-in" style={{ marginTop: '6rem', borderLeft: '1px solid rgba(28,43,39,0.16)', paddingLeft: '2rem', scrollMarginTop: '120px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 400, marginBottom: '1.5rem', color: '#1C2B27', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Assistante vocale Elisa</h2>
            <div className="grid-2" style={{ gap: '2.5rem 4rem', alignItems: 'start', fontWeight: 300, opacity: 0.8 }}>
              {elisaBlocks.map((block) => (
                <div key={block.title} style={textStyle}>
                  <p style={{ fontWeight: 500, color: '#1C2B27', marginBottom: '0.5rem' }}>{block.title}</p>
                  <p>{block.body}</p>
                </div>
              ))}
              <div style={textStyle}>
                <p style={{ fontWeight: 500, color: '#1C2B27', marginBottom: '0.5rem' }}>Vos droits</p>
                <p>
                  Vous pouvez accéder à vos données, les faire rectifier ou supprimer, vous opposer à leur traitement ou en demander la limitation en écrivant à{' '}
                  <a href="mailto:contact@squadia.io" style={linkStyle}>contact@squadia.io</a>.
                  Vous pouvez aussi adresser une réclamation à la{' '}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={linkStyle}>CNIL</a>.
                  Si vous préférez ne pas parler à Elisa, notre <a href="/contact/" style={linkStyle}>page contact</a> reste à votre disposition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
