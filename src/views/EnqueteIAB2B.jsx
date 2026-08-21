'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, Castle, ExternalLink } from 'lucide-react';

const enqueteBg = '/assets/images/ressources/general_manager_evaluating_the_future_of_ai_for_his_business.jpeg';

const EnqueteIAB2B = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Enquête IA B2B 2026 : Vos priorités face à l'IA — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Participez à l'enquête Squadia sur les priorités des Sales et Marketing Managers face à l'IA en 2026. Tentez de gagner un bon Relais & Châteaux d'une valeur de 350 EUR.";
    }
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#F9FAFB', overflow: 'hidden' }}>
      {/* Image de fond */}
      <img
        src={enqueteBg}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,26,0.82)', zIndex: 1 }} />

      <div className="container grid-2 align-center" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '80px', gap: '4rem' }}>

        {/* ═══ COLONNE GAUCHE : HERO ET CONTENU ═══ */}
        <div className="fade-in">

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid #44CCFF', padding: '0.4rem 1rem', borderRadius: '30px', color: '#44CCFF', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Castle size={16} /> Tirage au sort · Relais & Châteaux
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            Sales & Marketing Manager B2B : vos priorités face à l'IA
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3rem' }}>
            Découvrez comment vos pairs se préparent à intégrer l'IA et la data en 2026. Répondez à l'enquête et tentez de gagner un bon Relais & Châteaux d'une valeur de 350 EUR TTC.
          </p>

          <div style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)', marginBottom: '1.5rem' }}>Ce qu'on recueille dans cette étude :</h2>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="#44CCFF" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#E5E7EB', lineHeight: 1.4 }}>
                  Les priorités des Sales & Marketing Managers pour 2026
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="#44CCFF" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#E5E7EB', lineHeight: 1.4 }}>
                  Le rôle réel de l'IA dans la prospection et le marketing B2B
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="#44CCFF" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#E5E7EB', lineHeight: 1.4 }}>
                  Les budgets, défis et leviers de performance identifiés par vos pairs
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* ═══ COLONNE DROITE : CTA CARD ═══ */}
        <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
          <div style={{ background: 'rgba(17,24,39,0.25)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '3rem 2.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(37,99,235,0.15)', border: '1px solid #44CCFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <Castle size={28} color="#44CCFF" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
                Participez à l'étude
              </h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                5 minutes. Résultats partagés en avant-première.
              </p>
              <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Tirage au sort le <strong style={{ color: '#F9FAFB' }}>31 décembre 2026</strong> parmi les participants.
              </p>
            </div>

            <a
              href="https://form.typeform.com/to/hUzNwyyR?typeform-source=www.squadia.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary pulse"
              style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
            >
              Je participe à l'étude Squadia <ExternalLink size={18} />
            </a>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem', textAlign: 'center' }}>
              <Link
                href="/ressources/conditions-participation"
                style={{ color: '#6B7280', fontSize: '0.85rem', textDecoration: 'underline' }}
              >
                Conditions de participation
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default EnqueteIAB2B;
