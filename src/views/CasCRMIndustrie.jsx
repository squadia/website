'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const bgUseCase = '/assets/images/bgusecase.png';
const directusineImg = '/assets/images/ressources/directusine.png';
const CasCRMIndustrie = () => {
  useEffect(() => {
    document.title = "Cas client : Prospection ciblee, industrie · Squadia";
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '2 800', label: 'contacts nettoyes, segmentes et enrichis', sub: 'dans le CRM' },
    { value: '340', label: "directeurs d'exploitation cibles", sub: "sur un profil d'usine precis" },
    { value: '32', label: 'rendez-vous qualifies', sub: 'obtenus en 5 mois' },
    { value: '1', label: 'guide metier', sub: "deploye comme levier d'acces au decideur" },
  ];

  const actions = [
    {
      step: '01',
      title: 'Data Clean et Data Seg',
      body: "Nettoyage de la base CRM : suppression des doublons, contacts invalides retires, champs entreprise et contact harmonises. Puis segmentation pour identifier le profil d'usine le plus rentable : secteur d'activite, tranche d'effectifs, zone geographique, et signaux recents comme un recrutement, un changement de dirigeant ou un investissement."
    },
    {
      step: '02',
      title: "Ciblage des directeurs d'exploitation",
      body: "Construction d'une base de 340 comptes prioritaires correspondant exactement au profil recherche : directeurs d'exploitation et directeurs d'usine, des profils difficiles a joindre mais decisifs sur les sujets de productivite, maintenance et approvisionnement. Les contacts ont ete enrichis avec emails, telephones directs et profils LinkedIn."
    },
    {
      step: '03',
      title: 'Campagne multicanale et cold call structure',
      body: "Combinaison d'une campagne email et LinkedIn avec un dispositif d'appels sortants. Le declencheur : un guide metier intitule Les 5 leviers de la maintenance predictive pour les directeurs d'exploitation, propose comme ressource avant l'echange. Script adapte aux objections de l'industrie, cadence d'appels sur plusieurs semaines, suivi dans le CRM pour un relais fluide avec le reseau commercial terrain."
    },
  ];

  return (
    <div style={{ background: '#06060F', color: '#F9FAFB', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '140px',
        overflow: 'hidden',
      }}>
        {/* Photo de fond */}
        <img src={directusineImg} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 20%',
          pointerEvents: 'none'
        }} />
        {/* Masque diagonal violet/sombre */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(105deg, rgba(16,10,46,0.92) 0%, rgba(16,10,46,0.80) 38%, rgba(16,10,46,0.50) 58%, rgba(16,10,46,0.08) 72%, transparent 82%)',
        }} />
        {/* Lisere basse */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, #06060F)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <Link href="/cas-clients" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', textDecoration: 'none',
            marginBottom: '2.5rem', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <ArrowLeft size={15} /> Cas clients
          </Link>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.8rem' }}>
            {[
              { label: 'Prospection', color: '#A78BFA', bg: 'rgba(139,92,246,0.1)' },
              { label: 'Data',        color: '#44CCFF', bg: 'rgba(68,204,255,0.1)' },
            ].map(t => (
              <span key={t.label} style={{
                padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem',
                fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                border: `1px solid ${t.color}`, background: t.bg, color: t.color
              }}>{t.label}</span>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Distributeur industriel B2B · Reseau commercial terrain · Plusieurs centaines de comptes actifs en France
          </p>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.15,
            maxWidth: '820px', marginBottom: '2.5rem', letterSpacing: '-0.02em'
          }}>
            De la data brute aux rendez-vous avec les directeurs d'exploitation
          </h1>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.2)',
            borderRadius: '12px', padding: '1rem 1.8rem'
          }}>
            <span style={{ fontSize: '2.6rem', fontWeight: 700, color: '#A78BFA', letterSpacing: '-0.03em' }}>+32</span>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>rendez-vous qualifies</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>avec des directeurs d'exploitation en 5 mois</div>
            </div>
          </div>
        </div>
      </section>

      {/* STAT CARDS */}
      <section style={{ background: '#07070F', padding: '5rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '2rem' }}>Chiffres cles</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(8,15,35,0.6)', border: '1px solid rgba(139,92,246,0.12)',
                borderRadius: '14px', padding: '1.6rem', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.35), transparent)'
                }} />
                <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#A78BFA', lineHeight: 1.1, marginBottom: '0.4rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 500, marginBottom: '0.2rem' }}>{s.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEXTE */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.8rem' }}>Le contexte</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.25, color: '#fff' }}>
              Une base CRM pleine de contacts, mais aucune cible prioritaire.
            </h2>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p>
              Ce distributeur industriel B2B dispose d'un reseau commercial terrain et de plusieurs centaines de comptes actifs en France. La prospection reposait presque entierement sur le portefeuille existant et les salons. La base CRM contenait des milliers de contacts accumules au fil des annees : doublons, fiches incompletes, decideurs partis, entreprises sans historique d'achat clair.
            </p>
            <p style={{ marginTop: '1.4rem' }}>
              Le vrai probleme n'etait pas le volume de contacts. C'etait l'absence de cible prioritaire. Les commerciaux appelaient au feeling, sans savoir qui avait un projet en cours, qui venait de prendre un poste cle, ou quelle usine correspondait au profil d'acheteur le plus rentable. Resultat : beaucoup d'efforts, peu de rendez-vous qualifies, un pipeline qui tenait plus au hasard qu'a une methode.
            </p>
          </div>
        </div>
      </section>

      {/* CE QU'ON A FAIT */}
      <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <img src={bgUseCase} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          pointerEvents: 'none', opacity: 0.12
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(6,10,28,0.7) 0%, rgba(6,10,28,0.5) 50%, rgba(6,10,28,0.85) 100%)'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '3rem' }}>Ce qu'on a fait</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {actions.map((a, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr',
                gap: '2rem', padding: '2.5rem 0',
                borderBottom: i < actions.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                alignItems: 'start'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#A78BFA', letterSpacing: '0.08em', paddingTop: '4px' }}>
                  ETAPE {a.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.8rem' }}>{a.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: '1rem' }}>{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUI A CHANGE */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(6,10,28,0) 60%)',
            border: '1px solid rgba(139,92,246,0.15)',
            borderLeft: '4px solid #8B5CF6',
            borderRadius: '16px', padding: '3rem'
          }}>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.7)', marginBottom: '1.2rem' }}>Ce qui a change</p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: '820px' }}>
              En cinq mois, 32 rendez-vous qualifies ont ete obtenus avec des directeurs d'exploitation et des directeurs d'usine correspondant au profil cible. <strong style={{ color: '#fff' }}>Le reseau commercial dispose desormais d'une base priorisee, d'une methode de prospection reproductible, et d'un support metier qui ouvre la porte du decideur.</strong> La prospection ne depend plus du hasard : elle repose sur un ciblage precis, un message adapte, et un relais operationnel avec les commerciaux de terrain.
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/cas-clients/formation-ia-com" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <ArrowLeft size={16} /> Formation IA Communication
          </Link>
          <Link href="/cas-clients/migration-crm" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#A78BFA', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'opacity 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Cas suivant : Migration CRM <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CasCRMIndustrie;
