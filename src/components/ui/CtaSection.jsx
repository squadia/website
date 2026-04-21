import React from 'react';
import CardFlip from './flip-card';

/**
 * CtaSection : Section CTA finale réutilisable avec CardFlip 3D
 * Props:
 *   - headline:    Titre principal (h2)
 *   - description: Sous-titre explicatif
 *   - cardTitle:   Titre de la carte flip
 *   - cardSubtitle: Sous-titre de la carte flip
 *   - cardDescription: Description do dos de carte
 *   - cardFeatures: tableau de strings
 *   - cardColor:   Couleur primaire de la carte (hex)
 */
export default function CtaSection({
  headline,
  description,
  cardTitle,
  cardSubtitle,
  cardDescription,
  cardFeatures = [],
  cardColor = '#2563EB',
}) {
  return (
    <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '4rem',
        background: 'linear-gradient(145deg, rgba(37, 99, 235, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '2rem',
        padding: '4rem',
      }}>

        {/* Gauche : Texte + CTA */}
        <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: '#F9FAFB',
            marginBottom: '1.5rem',
            lineHeight: 1.25,
          }}>
            {headline}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#9CA3AF',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}>
            {description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.875rem 1.5rem',
                backgroundColor: '#2563EB',
                color: '#FFF',
                fontWeight: 600,
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
                fontSize: '1rem',
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#1D4ED8'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#2563EB'}
            >
              RDV avec un expert
            </a>
          </div>
        </div>

        {/* Droite : CardFlip */}
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <CardFlip
            title={cardTitle}
            subtitle={cardSubtitle}
            description={cardDescription}
            features={cardFeatures}
            color={cardColor}
          />
        </div>

      </div>
    </section>
  );
}
