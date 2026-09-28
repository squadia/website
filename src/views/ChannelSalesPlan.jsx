'use client';
import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, Handshake, Send, Loader2 } from 'lucide-react';
import { submitLead } from '../lib/submitLead';
import { buildFlipbookUrl } from '../lib/flipbookAccess';
const planPartenaire = '/assets/images/ressources/plan-partenaire.jpeg';

const MAKE_WEBHOOK_URL = 'https://hook.eu1.make.com/p6lmievgp9ti64bnl1qjajhkyy2jt1zu';

const isValidPhone = (value) => {
  if (!value.trim()) return true;
  const digits = value.replace(/\D/g, '');
  return /^[+]?[0-9\s().-]{6,20}$/.test(value) && digits.length >= 6 && digits.length <= 15;
};

const ChannelSalesPlan = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Plan Partenaire B2B : Structurer et piloter votre réseau de partenaires : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Téléchargez notre Channel Sales Plan pour structurer vos partenariats B2B, développer des synergies de co-marketing et co-selling, et piloter la performance avec des KPIs trimestriels.";
    }
  }, []);

  const [formData, setFormData] = useState({
    FirstName: '',
    Name: '',
    phone: '',
    Email: '',
    Company: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFallbackSuccess, setIsFallbackSuccess] = useState(false);
  const [error, setError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (e.target.name === 'phone') setPhoneError('');
  };

  const handlePhoneBlur = () => {
    if (!isValidPhone(formData.phone)) {
      setPhoneError("Numéro invalide. Utilisez uniquement des chiffres et éventuellement un indicatif pays (ex : +33 6 12 34 56 78 ou +1 555 123 4567).");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidPhone(formData.phone)) {
      setPhoneError("Numéro invalide. Utilisez uniquement des chiffres et éventuellement un indicatif pays (ex : +33 6 12 34 56 78 ou +1 555 123 4567).");
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const result = await submitLead('channel-sales-plan', MAKE_WEBHOOK_URL, formData);

      if (result.ok || result.fallbackUsed) {
        setIsSuccess(true);
        setIsFallbackSuccess(result.fallbackUsed);
        setPhoneError('');
        // Accès au flipbook uniquement via ce lien signé, généré après soumission du formulaire.
        const flipbookUrl = await buildFlipbookUrl('channel-sales-plan', formData);
        setFormData({ FirstName: '', Name: '', phone: '', Email: '', Company: '' });
        window.location.href = flipbookUrl;
      } else {
        setError('Une erreur est survenue lors de la soumission. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez vérifier votre réseau et réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="channel-sales-page" style={{ position: 'relative', minHeight: '100vh', color: '#1C2B27', overflow: 'hidden' }}>
      <img src={planPartenaire} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(246,243,236,0.82)', zIndex: 1 }} />

      <div className="container grid-2 align-center" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '80px', gap: '4rem' }}>
        
        {/* ═══ COLONNE GAUCHE : HERO ET CONTENU ═══ */}
        <div className="fade-in">
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(31,58,51,0.1)', border: '1px solid #B08D57', padding: '0.4rem 1rem', borderRadius: '30px', color: '#8A6D3B', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Handshake size={16} /> Outil gratuit
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            Plan Partenaire : développer votre réseau de partenaires B2B
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3rem' }}>
            Créez ou développez votre réseau de partenaires B2B sans vous éparpiller.
          </p>

          <div style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', borderRadius: '12px', padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Ce que contient le plan</h2>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={22} color="#8A6D3B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', color: '#4A534F', lineHeight: 1.5 }}>
                  Structurer vos partenariats autour d'un plan clair et activable
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={22} color="#8A6D3B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', color: '#4A534F', lineHeight: 1.5 }}>
                  développer des synergies d'actions de co-marketing et de co-selling
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={22} color="#8A6D3B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', color: '#4A534F', lineHeight: 1.5 }}>
                  Piloter la performance avec des indicateurs cles, suivis à chaque trimestre
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* ═══ COLONNE DROITE : FORMULAIRE ═══ */}
        <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
          <div style={{ background: 'rgba(246,243,236,0.25)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(28,43,39,0.16)', borderRadius: '16px', padding: '3rem 2.5rem', boxShadow: '0 25px 50px -12px rgba(28,43,39,0.14)' }}>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
              Recevez-le par email immédiatement
            </h3>

            {isSuccess ? (
              <div style={{ background: 'rgba(63,122,94,0.1)', border: '1px solid #3F7A5E', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                <CheckCircle2 size={48} color="#3F7A5E" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.2rem', color: '#3F7A5E', marginBottom: '0.5rem' }}>{isFallbackSuccess ? 'Demande enregistrée' : 'Plan envoyé !'}</h4>
                <p style={{ color: '#4A534F', fontSize: '0.95rem' }}>
                  {isFallbackSuccess ? "Notre équipe a bien reçu vos coordonnées et vous enverra le guide sous peu." : "Vérifiez votre boîte de réception d'ici quelques instants."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                
                <div className="grid-2" style={{ gap: '1.2rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="FirstName" style={{ fontSize: '0.9rem', color: '#4A534F' }}>Prénom</label>
                    <input 
                      type="text" 
                      id="FirstName" 
                      name="FirstName" 
                      required 
                      value={formData.FirstName}
                      onChange={handleChange}
                      style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', padding: '0.8rem 1rem', borderRadius: '6px', color: 'white', fontSize: '1rem' }}
                      placeholder="Jane"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="Name" style={{ fontSize: '0.9rem', color: '#4A534F' }}>Nom</label>
                    <input 
                      type="text" 
                      id="Name" 
                      name="Name" 
                      required 
                      value={formData.Name}
                      onChange={handleChange}
                      style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', padding: '0.8rem 1rem', borderRadius: '6px', color: 'white', fontSize: '1rem' }}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phone" style={{ fontSize: '0.9rem', color: '#4A534F' }}>Mobile</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handlePhoneBlur}
                    style={{ background: '#F6F3EC', border: phoneError ? '1px solid #A63D2F' : '1px solid #D8D1C2', padding: '0.8rem 1rem', borderRadius: '6px', color: 'white', fontSize: '1rem' }}
                    placeholder="+33 6 00 00 00 00 (ou indicatif international)"
                  />
                  {phoneError && (
                    <span style={{ color: '#A63D2F', fontSize: '0.8rem' }}>{phoneError}</span>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="Company" style={{ fontSize: '0.9rem', color: '#4A534F' }}>Société</label>
                  <input
                    type="text"
                    id="Company"
                    name="Company"
                    value={formData.Company}
                    onChange={handleChange}
                    style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', padding: '0.8rem 1rem', borderRadius: '6px', color: 'white', fontSize: '1rem' }}
                    placeholder="Squadia"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="Email" style={{ fontSize: '0.9rem', color: '#4A534F' }}>Email professionnel</label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    required
                    value={formData.Email}
                    onChange={handleChange}
                    style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', padding: '0.8rem 1rem', borderRadius: '6px', color: 'white', fontSize: '1rem' }}
                    placeholder="jane.doe@entreprise.com"
                  />
                </div>

                {error && (
                  <div style={{ color: '#A63D2F', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary pulse"
                  style={{ width: '100%', marginTop: '0.5rem', padding: '1rem', fontSize: '1.05rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}
                >
                  {isSubmitting ? <Loader2 size={20} className="spin" /> : <><Send size={18} /> Recevoir le plan partenaire</>}
                </button>

                <p style={{ fontSize: '0.75rem', color: '#6B716C', fontStyle: 'italic', textAlign: 'center', marginTop: '1rem', lineHeight: 1.5 }}>
                  En Téléchargeant ce plan, j'accepte de recevoir par email des contenus et communications de la part de Squadia. Il sera possible de se désinscrire à tout moment.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ChannelSalesPlan;
