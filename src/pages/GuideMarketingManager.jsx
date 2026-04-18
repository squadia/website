import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, BookOpen, Send, Loader2 } from 'lucide-react';
import newMarketingManager from '../assets/images/ressources/new-marketing-manager.jpeg';

const GuideMarketingManager = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Mini-guide Marketing Manager B2B — Reussir vos 90 premiers jours — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Methodes eprouvees, plans d action, IA, outils et conseils pratiques pour reussir votre prise de poste de Marketing Manager et transformer votre service en moteur de croissance.";
    }
  }, []);

  const [formData, setFormData] = useState({
    FirstName: '',
    Name: '',
    phone: '',
    Email: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://hook.eu1.make.com/3td32i9lyrpjxn6j2ilxcc5ugot2ahlf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ FirstName: '', Name: '', phone: '', Email: '' });
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
    <div className="guide-marketing-page" style={{ position: 'relative', minHeight: '100vh', color: '#F9FAFB', overflow: 'hidden' }}>
      <img src={newMarketingManager} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,26,0.82)', zIndex: 1 }} />

      <div className="container grid-2 align-center" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '80px', gap: '4rem' }}>
        
        {/* ═══ COLONNE GAUCHE : HERO ET CONTENU ═══ */}
        <div className="fade-in">
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid #44CCFF', padding: '0.4rem 1rem', borderRadius: '30px', color: '#44CCFF', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem' }}>
            <BookOpen size={16} /> Mini-guide gratuit
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            Marketing Manager B2B : reussir vos 90 premiers jours
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3rem' }}>
            Methodes eprouvees, plans d action, IA, outils et conseils pratiques pour reussir votre prise de poste et atteindre vos premiers resultats.
          </p>

          <div style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Ce que vous allez trouver :</h2>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={22} color="#44CCFF" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', color: '#E5E7EB', lineHeight: 1.5 }}>
                  Maitriser une strategie de croissance fondee sur la data et l IA
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={22} color="#44CCFF" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', color: '#E5E7EB', lineHeight: 1.5 }}>
                  Decouvrir les competences cles pour vos equipes en 2025
                </span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={22} color="#44CCFF" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', color: '#E5E7EB', lineHeight: 1.5 }}>
                  Transformer votre service en un centre de profit durable grace a l automatisation
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* ═══ COLONNE DROITE : FORMULAIRE ═══ */}
        <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
          <div style={{ background: 'rgba(17,24,39,0.25)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '3rem 2.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)' }}>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
              Recevez-le par email immédiatement
            </h3>

            {isSuccess ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10B981', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.2rem', color: '#10B981', marginBottom: '0.5rem' }}>Guide envoyé !</h4>
                <p style={{ color: '#D1D5DB', fontSize: '0.95rem' }}>
                  Vérifiez votre boîte de réception d'ici quelques instants.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                
                <div className="grid-2" style={{ gap: '1.2rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="FirstName" style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>Prénom</label>
                    <input 
                      type="text" 
                      id="FirstName" 
                      name="FirstName" 
                      required 
                      value={formData.FirstName}
                      onChange={handleChange}
                      style={{ background: '#03030A', border: '1px solid #374151', padding: '0.8rem 1rem', borderRadius: '6px', color: 'white', fontSize: '1rem' }}
                      placeholder="Jane"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="Name" style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>Nom</label>
                    <input 
                      type="text" 
                      id="Name" 
                      name="Name" 
                      required 
                      value={formData.Name}
                      onChange={handleChange}
                      style={{ background: '#03030A', border: '1px solid #374151', padding: '0.8rem 1rem', borderRadius: '6px', color: 'white', fontSize: '1rem' }}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phone" style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>Mobile</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ background: '#03030A', border: '1px solid #374151', padding: '0.8rem 1rem', borderRadius: '6px', color: 'white', fontSize: '1rem' }}
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="Email" style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>Email professionnel</label>
                  <input 
                    type="email" 
                    id="Email" 
                    name="Email" 
                    required 
                    value={formData.Email}
                    onChange={handleChange}
                    style={{ background: '#03030A', border: '1px solid #374151', padding: '0.8rem 1rem', borderRadius: '6px', color: 'white', fontSize: '1rem' }}
                    placeholder="jane.doe@entreprise.com"
                  />
                </div>

                {error && (
                  <div style={{ color: '#EF4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary pulse"
                  style={{ width: '100%', marginTop: '0.5rem', padding: '1rem', fontSize: '1.05rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}
                >
                  {isSubmitting ? <Loader2 size={20} className="spin" /> : <><Send size={18} /> Recevoir le mini-guide</>}
                </button>

                <p style={{ fontSize: '0.75rem', color: '#6B7280', fontStyle: 'italic', textAlign: 'center', marginTop: '1rem', lineHeight: 1.5 }}>
                  En telechargeant ce guide, j accepte de recevoir par email des contenus et communications de la part de Squadia. Il sera possible de se desinscrire a tout moment.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default GuideMarketingManager;
