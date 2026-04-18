import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jeromeImg from '../assets/images/notremission/jerome-final.png';
import julienImg from '../assets/images/notremission/julien-final.png';
import kavidaImg from '../assets/images/notremission/kavida_final.png';
import jeromeBgImg from '../assets/images/notremission/jerome-background.png';

const Mission = () => {
  useEffect(() => {
    document.title = "Notre Mission — Squadia, conseil B2B en IA et performance commerciale";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Découvrez la mission de Squadia : réconcilier la stratégie et l'exécution pour les équipes commerciales B2B. Notre équipe, nos valeurs et notre engagement.");
    }
  }, []);

  const team = [
    {
      img: jeromeImg,
      isFounder: true,
      name: 'Jérôme DEBRUYNE',
      role: 'Fondateur & CEO',
      company: 'Squadia',
      desc: 'Ex-Xerox, Dell, Oracle. De commercial sédentaire à manager, responsable du go-to-market France. Formateur Cegos et Comundi, IA appliquée aux métiers de la vente, du marketing et de la communication.',
      linkedin: 'https://www.linkedin.com/in/jdebruyne/',
      extra: { label: 'Comundi', url: 'https://www.comundi.fr/formateurs/8307-debruyne-jerome.html' },
    },
    {
      img: julienImg,
      isFounder: false,
      name: 'Julien Lemaguer',
      role: 'CRM & Sales Expert',
      company: null,
      desc: 'Ex-Inside Sales Manager SaaS. CRM et Customer Experience Trainer, formation sur le cycle de vente complet, BPO et accompagnement commercial terrain.',
      linkedin: 'https://www.linkedin.com/in/julien-lemaguer/',
      extra: null,
    },
    {
      img: kavidaImg,
      isFounder: false,
      name: 'Kavida Angapin',
      role: 'Change Management & Neurosciences',
      company: null,
      desc: 'Ex-Directrice Excellence Opérationnelle Cegedim, spécialisée en change management et neurosciences appliquées aux équipes managers et terrain. Expérience internationale.',
      linkedin: 'https://www.linkedin.com/in/kavida-angapin',
      extra: null,
    },
  ];

  return (
    <div style={{ background: '#0c0e12', color: '#e1e2e7', minHeight: '100vh' }}>

      {/* ── HERO — grid 2 colonnes ── */}
      <section style={{
        height: '100vh',
        minHeight: '620px',
        maxHeight: '920px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '64px',
      }}>

        {/* Colonne gauche — texte */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '56px 48px 56px 72px',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Fondu droit pour fondre dans la photo */}
          <div style={{
            position: 'absolute',
            right: '-100px',
            top: 0,
            bottom: 0,
            width: '180px',
            background: 'linear-gradient(to right, #0c0e12 20%, transparent 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }} />

          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#44CCFF',
            display: 'block',
            marginBottom: '16px',
          }}>Notre mission</span>

          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: '20px',
          }}>
            Ce qu'on a appris<br />
            Ce qu'on a décidé d'en faire
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 400,
            lineHeight: 1.72,
            color: '#bcc8d1',
            marginBottom: '12px',
            maxWidth: '46ch',
          }}>
            Vingt-cinq ans dans la vente B2B complexe. Ce qui fait gagner une entreprise sur le terrain, c'est rarement l'outil. C'est la méthode, la donnée et la capacité à faire fonctionner ces trois choses ensemble.
          </p>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 400,
            lineHeight: 1.72,
            color: '#bcc8d1',
            marginBottom: '12px',
            maxWidth: '46ch',
          }}>
            J'ai créé Squadia pour transmettre ça ; aider les ETI et PME à structurer un système commercial qui tient dans la durée.
          </p>

          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '24px',
            marginBottom: '28px',
          }}>
            <span style={{ display: 'block', width: '28px', height: '2px', background: '#44CCFF', flexShrink: 0 }} />
            Jérôme, Fondateur
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#constat" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 700,
              background: '#44CCFF',
              color: '#003549',
              padding: '11px 26px',
              borderRadius: '9px',
              textDecoration: 'none',
              transition: 'all 0.15s',
              display: 'inline-block',
            }}>Constat terrain</a>
            <a href="#equipe" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 700,
              background: 'rgba(255,255,255,0.05)',
              color: '#e1e2e7',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '11px 26px',
              borderRadius: '9px',
              textDecoration: 'none',
              transition: 'all 0.15s',
              display: 'inline-block',
            }}>L'équipe</a>
          </div>
        </div>

        {/* Colonne droite — photo */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={jeromeBgImg}
            alt="Jérôme DEBRUYNE"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              filter: 'contrast(1.04) brightness(0.88)',
            }}
          />
          {/* overlay gauche (fondu vers le texte) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #0c0e12 0%, rgba(12,14,18,0.55) 28%, rgba(12,14,18,0.08) 55%, transparent 100%)',
            zIndex: 1,
          }} />
          {/* overlay bas */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '30%',
            background: 'linear-gradient(to top, #0c0e12 0%, transparent 100%)',
            zIndex: 1,
          }} />
          {/* overlay haut */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '12%',
            background: 'linear-gradient(to bottom, rgba(12,14,18,0.45) 0%, transparent 100%)',
            zIndex: 1,
          }} />
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section id="equipe" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '2px 8px',
              borderRadius: '999px',
              background: 'rgba(68,204,255,0.08)',
              border: '1px solid rgba(68,204,255,0.2)',
              color: '#44CCFF',
              display: 'inline-block',
              marginBottom: '16px',
            }}>L'équipe</span>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#fff',
              marginBottom: '12px',
            }}>
              Votre équipe dédiée.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              lineHeight: 1.72,
              color: '#bcc8d1',
              maxWidth: '52ch',
              margin: '0 auto',
            }}>
              Experts indépendants associés, chacun avec son domaine, sa structure et une complémentarité réelle sur le terrain.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            alignItems: 'stretch',
          }}>
            {team.map((member, i) => (
              <div key={i} style={{
                background: member.isFounder
                  ? 'linear-gradient(160deg, rgba(68,204,255,0.05) 0%, rgba(17,20,23,0.95) 50%)'
                  : 'rgba(17,20,23,0.95)',
                border: member.isFounder
                  ? '1px solid rgba(68,204,255,0.18)'
                  : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: member.isFounder ? '0 0 40px -15px rgba(68,204,255,0.18)' : 'none',
                transition: 'border-color 0.2s, transform 0.25s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = member.isFounder ? 'rgba(68,204,255,0.35)' : 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = member.isFounder ? 'rgba(68,204,255,0.18)' : 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Photo */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  background: '#0a0c10',
                  flexShrink: 0,
                }}>
                  <img src={member.img} alt={member.name} style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: member.isFounder ? 'contrast(1.02) brightness(0.9)' : 'grayscale(1) contrast(1.08) brightness(0.88)',
                    transition: 'transform 0.4s ease',
                  }} />
                  {/* overlay bas */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '42%',
                    background: 'linear-gradient(to top, rgba(17,20,23,1) 0%, transparent 100%)',
                    zIndex: 1,
                  }} />
                </div>

                {/* Contenu */}
                <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {member.isFounder && (
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.625rem', fontWeight: 700,
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                        padding: '2px 8px', borderRadius: '999px',
                        background: 'rgba(68,204,255,0.08)',
                        border: '1px solid rgba(68,204,255,0.2)',
                        color: '#44CCFF',
                      }}>Fondateur</span>
                    )}
                  </div>

                  <div style={{ minHeight: '110px' }}>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '1.0625rem', fontWeight: 700,
                      letterSpacing: '-0.01em', color: '#fff',
                      marginBottom: '3px', marginTop: '10px',
                    }}>{member.name}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem', fontWeight: 500,
                      color: '#44CCFF', marginBottom: '2px', lineHeight: 1.4,
                    }}>{member.role}</div>
                    {member.company && (
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.6875rem',
                        color: 'rgba(188,200,209,0.45)', lineHeight: 1.4,
                      }}>{member.company}</div>
                    )}
                  </div>

                  <div style={{
                    marginTop: '14px',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8125rem', lineHeight: 1.6,
                      color: '#9aabb5', flex: 1,
                    }}>{member.desc}</p>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '10px' }}>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.75rem', color: '#44CCFF',
                          textDecoration: 'none', display: 'inline-flex',
                          alignItems: 'center', gap: '5px',
                          opacity: 0.8, transition: 'opacity 0.15s',
                        }}>
                          LinkedIn →
                        </a>
                      )}
                      {member.extra && (
                        <a href={member.extra.url} target="_blank" rel="noopener noreferrer" style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.75rem', color: '#bcc8d1',
                          textDecoration: 'none', display: 'inline-flex',
                          alignItems: 'center', gap: '5px',
                          opacity: 0.8, transition: 'opacity 0.15s',
                        }}>
                          {member.extra.label} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.75rem, 3.2vw, 2.625rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: '16px',
          }}>
            Prêt à passer à l'action ?
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            lineHeight: 1.72,
            color: '#bcc8d1',
            marginBottom: '32px',
          }}>
            Discutons de votre contexte et voyons ensemble comment structurer un système commercial qui tient dans la durée.
          </p>
          <Link to="/contact" style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 700,
            background: '#44CCFF',
            color: '#003549',
            padding: '11px 26px',
            borderRadius: '9px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.15s',
          }}>Prendre RDV</Link>
        </div>
      </section>

    </div>
  );
};

export default Mission;
