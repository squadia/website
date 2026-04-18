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
      name: 'Jérôme Alquier',
      role: 'Fondateur & CEO',
      desc: '20 ans d\'expérience en structuration commerciale B2B. Ancien Directeur Commercial de grands comptes, il a fondé Squadia pour combler le fossé entre stratégie et exécution.',
      linkedin: 'https://www.linkedin.com/in/jeromealquier/',
    },
    {
      img: julienImg,
      name: 'Julien',
      role: 'Associé — Stratégie & CRM',
      desc: 'Expert en migration CRM et transformation des organisations de vente. Spécialiste des architectures de données B2B et de l\'alignement Sales-Marketing.',
      linkedin: null,
    },
    {
      img: kavidaImg,
      name: 'Kavida',
      role: 'Responsable Formations IA',
      desc: 'Formatrice certifiée et praticienne IA, Kavida conçoit les parcours de montée en compétences IA pour les équipes commerciales, marketing et communication.',
      linkedin: null,
    },
  ];

  const values = [
    {
      number: '01',
      title: 'L\'exécution avant tout',
      desc: 'Nous ne livrons pas des recommandations. Nous construisons des systèmes opérationnels, testés en production, avec votre équipe — jusqu\'à ce qu\'ils tournent seuls.',
    },
    {
      number: '02',
      title: 'Le pragmatisme technologique',
      desc: 'L\'IA est un levier, pas une fin. Nous choisissons les outils pour leur impact mesurable sur votre chiffre d\'affaires, pas pour la hype du moment.',
    },
    {
      number: '03',
      title: 'L\'expertise métier d\'abord',
      desc: '20 ans dans la vente B2B avant de toucher à l\'IA. Nous comprenons vos contraintes terrain avant de vous proposer une technologie.',
    },
    {
      number: '04',
      title: 'Le ROI sous 90 jours',
      desc: 'Si nous ne voyons pas de chemin clair vers un retour positif en moins de 90 jours, nous ne prenons pas la mission. C\'est notre engagement contractuel.',
    },
  ];

  return (
    <div style={{ background: '#050510', color: '#F9FAFB', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}>
        {/* Background photo */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${jeromeBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.18,
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #050510 45%, transparent 100%)',
          zIndex: 1,
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, #050510)',
          zIndex: 2,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '900px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(68,204,255,0.1)',
            border: '1px solid rgba(68,204,255,0.3)',
            color: '#44CCFF',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '5px 14px',
            borderRadius: '20px',
            marginBottom: '2rem',
          }}>Notre Mission</span>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '2rem',
            maxWidth: '780px',
          }}>
            Réconcilier la stratégie<br />
            <span style={{ color: '#44CCFF' }}>et l'exécution.</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(249,250,251,0.72)',
            maxWidth: '620px',
            lineHeight: 1.75,
            marginBottom: '3rem',
          }}>
            Squadia est né d'un constat simple : 80 % des projets de transformation commerciale échouent non pas par manque de stratégie, mais par manque de mise en œuvre. Nous sommes là pour changer ça.
          </p>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {[
              { value: '20+', label: 'ans d\'expertise commerciale' },
              { value: '120+', label: 'entreprises B2B accompagnées' },
              { value: '< 90j', label: 'ROI mesurable garanti' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#44CCFF' }}>{stat.value}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(249,250,251,0.5)', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI SQUADIA ── */}
      <section style={{ background: '#0A0A1A', padding: '6rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(68,204,255,0.08)',
                border: '1px solid rgba(68,204,255,0.2)',
                color: '#44CCFF',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: '20px',
                marginBottom: '1.5rem',
              }}>Notre histoire</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.25 }}>
                Pourquoi Squadia ?
              </h2>
              <p style={{ color: 'rgba(249,250,251,0.65)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                La plupart des cabinets de conseil livrent des slides. La plupart des agences digitales livrent des outils. Personne ne reste pour s'assurer que les équipes adoptent, utilisent et génèrent des résultats.
              </p>
              <p style={{ color: 'rgba(249,250,251,0.65)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Squadia s'est construit à l'intersection des deux. Nous structurons votre système de génération de revenus de bout en bout — de la donnée brute à la signature finale, en passant par l'automatisation intelligente de vos processus.
              </p>
              <p style={{ color: 'rgba(249,250,251,0.65)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Notre différence : nous ne partons pas tant que le système n'est pas en production et que vos équipes ne l'utilisent pas vraiment.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(68,204,255,0.06), rgba(68,204,255,0.02))',
              border: '1px solid rgba(68,204,255,0.15)',
              borderRadius: '16px',
              padding: '2.5rem',
            }}>
              <div style={{
                fontSize: '3rem',
                color: 'rgba(68,204,255,0.25)',
                fontFamily: 'Georgia, serif',
                lineHeight: 1,
                marginBottom: '1rem',
              }}>"</div>
              <p style={{ color: '#F9FAFB', fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '2rem' }}>
                Nous ne vendons pas des jours/homme. Nous vendons des systèmes qui tournent. Si nous ne voyons pas de chemin clair vers un ROI positif sous 90 jours, nous ne prenons pas la mission.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={jeromeImg} alt="Jérôme Alquier" style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  objectFit: 'cover', border: '2px solid rgba(68,204,255,0.3)',
                }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Jérôme Alquier</div>
                  <div style={{ color: '#44CCFF', fontSize: '0.8rem' }}>Fondateur & CEO, Squadia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section style={{ padding: '6rem 0', background: '#050510' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(68,204,255,0.08)',
              border: '1px solid rgba(68,204,255,0.2)',
              color: '#44CCFF',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '20px',
              marginBottom: '1.5rem',
            }}>Nos valeurs</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700 }}>
              Ce qui guide chaque mission
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {values.map((v, i) => (
              <div key={i} style={{
                background: '#0A0A1A',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'border-color 0.2s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(68,204,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#44CCFF', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                  {v.number}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#F9FAFB' }}>
                  {v.title}
                </h3>
                <p style={{ color: 'rgba(249,250,251,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section style={{ background: '#0A0A1A', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(68,204,255,0.08)',
              border: '1px solid rgba(68,204,255,0.2)',
              color: '#44CCFF',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '20px',
              marginBottom: '1.5rem',
            }}>L'équipe</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, marginBottom: '1rem' }}>
              Des praticiens, pas des théoriciens
            </h2>
            <p style={{ color: 'rgba(249,250,251,0.6)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Chaque membre de l'équipe Squadia a exercé les métiers qu'il accompagne. Pas de junior fraîchement diplômé : uniquement des experts terrain.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {team.map((member, i) => (
              <div key={i} style={{
                background: '#050510',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(68,204,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                }}
              >
                <div style={{
                  height: '260px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #0d1a30, #1a0a20)',
                }}>
                  <img src={member.img} alt={member.name} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px', color: '#F9FAFB' }}>
                    {member.name}
                  </div>
                  <div style={{ color: '#44CCFF', fontSize: '0.82rem', fontWeight: 600, marginBottom: '1rem' }}>
                    {member.role}
                  </div>
                  <p style={{ color: 'rgba(249,250,251,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: member.linkedin ? '1.25rem' : 0 }}>
                    {member.desc}
                  </p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      color: '#44CCFF', fontSize: '0.82rem', textDecoration: 'none',
                      fontWeight: 600,
                    }}>
                      LinkedIn →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '6rem 0',
        background: '#050510',
        textAlign: 'center',
        borderTop: '1px solid rgba(68,204,255,0.08)',
      }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, marginBottom: '1.25rem' }}>
            Prêt à passer à l'exécution ?
          </h2>
          <p style={{ color: 'rgba(249,250,251,0.6)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Discutons de votre contexte et identifions ensemble le chemin le plus court vers des résultats concrets.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block',
            background: '#44CCFF',
            color: '#050510',
            fontWeight: 700,
            fontSize: '1rem',
            padding: '14px 36px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(68,204,255,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Planifier un échange
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Mission;
