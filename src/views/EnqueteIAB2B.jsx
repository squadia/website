'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, Gift, ExternalLink } from 'lucide-react';

const EnqueteIAB2B = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Enquete IA B2B 2026 — Vos priorites face a l IA — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Participez a l enquete Squadia sur les priorites des Sales et Marketing Managers face a l IA en 2026. Tentez de gagner un bon Relais & Chateaux d une valeur de 350 EUR.";
    }
  }, []);

  return (
    <div className="enquete-page" style={{ background: '#0A0A1A', minHeight: '100vh', color: '#F9FAFB', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '80px', maxWidth: '900px', marginInline: 'auto' }}>
          
          {/* ═══ SECTION 1 — HERO ═══ */}
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid #44CCFF', padding: '0.5rem 1rem', borderRadius: '30px', color: '#44CCFF', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem' }}>
              <Gift size={16} /> Tirage au sort : bon de 350 EUR
            </div>
            
            <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', lineHeight: '1.1', marginBottom: '2rem' }}>
              Sales & Marketing Manager B2B : vos priorites face a l IA
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Dans cette etude, decouvrez comment vos pairs se preparent a adapter l IA et la data en 2026... et tentez de gagner un bon Relais & Chateaux d une valeur de 350 EUR TTC. Date du tirage au sort redéfinie au 31 mars 2026, sous reserve des conditions de participation.
            </p>
          </div>

          {/* ═══ SECTION 2 — CE QU ON RECUEILLE ═══ */}
          <div className="fade-in" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '3rem 2.5rem', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Ce qu'on recueille dans cette étude :</h2>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={24} color="#44CCFF" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.1rem', color: '#E5E7EB', lineHeight: 1.5 }}>
                  Les priorites des Sales & Marketing Managers pour 2026
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={24} color="#44CCFF" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.1rem', color: '#E5E7EB', lineHeight: 1.5 }}>
                  Le role reel de l IA dans la prospection et le marketing B2B
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={24} color="#44CCFF" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.1rem', color: '#E5E7EB', lineHeight: 1.5 }}>
                  Les budgets, defis et leviers de performance identifies par vos pairs
                </span>
              </li>
            </ul>
          </div>

          {/* ═══ SECTION 3 — CTA ═══ */}
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <a 
              href="https://form.typeform.com/to/hUzNwyyR?typeform-source=www.squadia.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary pulse"
              style={{ padding: '1.25rem 3rem', fontSize: '1.15rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Je participe a l etude SQUADIA <ExternalLink size={20} />
            </a>
          </div>

          {/* ═══ SECTION 4 — CONDITIONS (discret) ═══ */}
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <Link 
              href="/ressources/conditions-participation" 
              style={{ color: '#6B7280', fontSize: '0.9rem', textDecoration: 'underline' }}
            >
              Conditions de Participation
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EnqueteIAB2B;
