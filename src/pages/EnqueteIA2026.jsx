import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BarChart3, TrendingUp, Users, ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnqueteIA2026 = () => {
  useScrollReveal();

  const keyFindings = [
    { label: 'Adoption IA', value: '74%', desc: 'des PME françaises ont lancé au moins un pilote IA en 2025.' },
    { label: 'Impact ROI', value: 'x3.2', desc: 'de retour sur investissement moyen pour les projets orientés leads.' },
    { label: 'Goulots d\'étranglement', value: '82%', desc: 'citent l\'exécution comme principal frein à la mise en production.' },
  ];

  return (
    <div className="enquete-page">
      {/* Hero */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '100px', textAlign: 'center' }}>
        <div className="fade-in">
          <span className="tag-hero" style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)' }}>RAPPORT EXCLUSIF</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', maxWidth: '1000px', marginInline: 'auto' }}>
            L'État de l'IA dans les PME & ETI Françaises
          </h1>
          <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginTop: '2rem', maxWidth: '750px', marginInline: 'auto' }}>
            Enquête 2026 : Comment les leaders transforment leur exécution commerciale grâce à l'IA générative.
          </p>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="fade-in grid-3">
            {keyFindings.map((finding, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '4rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>{finding.value}</div>
                <div style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{finding.label}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{finding.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding container">
        <div className="fade-in grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2>Ce que vous apprendrez dans ce rapport de 54 pages</h2>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Nous avons interrogé 500 décideurs (DG, Dir. Co, CMO) pour comprendre les réalités du terrain. Loin du "bruit" médiatique, découvrez les chiffres réels de l'adoption.
            </p>
            <ul style={{ marginTop: '2.5rem', listStyle: 'none', padding: 0 }}>
              {[
                'La stack technologique gagnante des entreprises à haute croissance.',
                'Les 5 cas d\'usage IA qui génèrent du ROI en moins de 90 jours.',
                'Pourquoi la plupart des SSII échouent sur les projets d\'exécution IA.',
                'Grille de maturité : où se situe votre entreprise par rapport à vos concurrents ?'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 color="var(--accent)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              width: '100%', 
              maxWidth: '450px', 
              aspectRatio: '3/4', 
              background: 'linear-gradient(135deg, #0D0D25 0%, #050510 100%)', 
              border: '1px solid #1A1A3A',
              borderRadius: '8px',
              padding: '4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
              transform: 'rotate(-2deg)'
            }}>
               <div>
                 <BarChart3 size={60} color="var(--accent)" style={{ marginBottom: '2rem' }} />
                 <h3 style={{ fontSize: '2rem' }}>ENQUÊTE IA 2026</h3>
                 <p style={{ color: '#6B7280', marginTop: '1rem' }}>Rapport Annuel Squadia</p>
               </div>
               <div style={{ borderTop: '1px solid #1A1A3A', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700 }}>PREMIUM ACCESS</span>
                  <span style={{ color: 'var(--accent)' }}>PDF FREE</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form / Download */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container fade-in" style={{ textAlign: 'center', maxWidth: '600px', marginInline: 'auto' }}>
          <h2>Recevoir le rapport complet par email</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', marginBottom: '3rem' }}>
            L'accès est gratuit pour les professionnels. Le lien de téléchargement vous sera envoyé instantanément.
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>Prénom</label>
                <input type="text" placeholder="Jean" style={inputStyle} />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>Nom</label>
                <input type="text" placeholder="Dupont" style={inputStyle} />
              </div>
            </div>
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>Email Professionnel</label>
              <input type="email" placeholder="jean@entreprise.com" style={inputStyle} />
            </div>
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>Fonction</label>
              <select style={inputStyle}>
                 <option>Directeur Général</option>
                 <option>Directeur Commercial</option>
                 <option>Directeur Marketing</option>
                 <option>Autre</option>
              </select>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '1rem', padding: '1.2rem' }}>
              Télécharger maintenant <Download size={18} style={{ marginLeft: '10px' }} />
            </button>
            <p style={{ fontSize: '0.75rem', color: '#6B7280', textAlign: 'center', marginTop: '1rem' }}>
              Vos données sont protégées. Aucune revente à des tiers.
            </p>
          </form>
        </div>
      </section>

      <style>{`
        .enquete-page { background: var(--bg-primary); }
      `}</style>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: '#0D0D25',
  border: '1px solid #1A1A3A',
  borderRadius: '4px',
  color: 'white',
  outline: 'none',
  fontSize: '0.95rem'
};

export default EnqueteIA2026;
