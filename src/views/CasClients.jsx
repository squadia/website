'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { casesData } from '../data/cases';
import ClientLogosSection from '../components/ui/ClientLogosSection';
const pipelineImg = '/assets/images/pipeline-b2b.jpeg';
const formationImg = '/assets/images/formationB2B.png';
const iaComImg = '/assets/images/iaetcom.png';
const hubspotImg = '/assets/images/hubspotcrm.jpeg';
const transformerCRMImg = '/assets/images/transformerCRM.jpeg';
const directusineImg = '/assets/images/ressources/directusine.png';
const caseImages = {
  'pipeline-b2b': pipelineImg,
  'formation-vente': formationImg,
  'formation-ia-com': iaComImg,
  'crm-industrie': directusineImg,
  'migration-crm': hubspotImg,
};

const Tag = ({ children }) => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    backgroundColor: '#1F3A33',
    color: '#F6F3EC',
    border: 'none',
  }}>
    {children}
  </span>
);

const StatCard = ({ stat, small = false }) => {
  const isNumberFirst = /^[0-9+xX]/.test(stat.trim());
  const splitIndex = stat.indexOf(' ');
  const highlight = isNumberFirst && splitIndex > -1 ? stat.substring(0, splitIndex) : isNumberFirst ? stat : '';
  const rest = isNumberFirst && splitIndex > -1 ? stat.substring(splitIndex + 1) : stat;
  
  return (
    <div style={{ 
      background: '#F6F3EC', 
      padding: small ? '1rem' : '1.5rem', 
      borderRadius: '8px', 
      border: '1px solid #D8D1C2', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-start',
      height: '100%' 
    }}>
      {highlight ? (
        <>
          <div style={{ fontSize: small ? '1.8rem' : '2.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
            {highlight}
          </div>
          <div style={{ fontSize: small ? '0.85rem' : '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
            {rest}
          </div>
        </>
      ) : (
        <div style={{ fontSize: small ? '0.85rem' : '1rem', color: 'var(--text-primary)', lineHeight: 1.4, fontWeight: 500, marginTop: small ? 0 : 'auto', marginBottom: small ? 'auto' : 'auto' }}>
          {stat}
        </div>
      )}
    </div>
  );
};

const caseSEO = {
  'pipeline-b2b': {
    title: "Pipeline B2B from scratch : Cas client Squadia",
    description: "Découvrez comment Squadia a construit un pipeline B2B complet sur un marché non cartographié. Stratégie, data et premiers résultats mesurables en 90 jours.",
  },
  'formation-ia-com': {
    title: "Formation IA Communication : Cas client Squadia",
    description: "Comment Squadia a formé des équipes communication à l'IA en partant d'une charte existante. Programme personnalisé, outils concrets, résultats mesurables.",
  },
  'crm-industrie': {
    title: "Prospection ciblée — Industrie : Cas client Squadia",
    description: "Comment Squadia a obtenu 32 rendez-vous qualifiés avec des directeurs d'exploitation et d'usine. Data Clean, ciblage précis, campagne multicanale et cold call avec guide métier.",
  },
  'migration-crm': {
    title: "Migration HubSpot en 3 semaines : Cas client Squadia",
    description: "Comment Squadia a nettoyé 2 500 comptes et déployé HubSpot en 3 semaines. Structuration du pipeline, adoption équipes et premiers résultats immédiats.",
  },
  'formation-vente': {
    title: "Formation Vente B2B : Méthode commune : Cas client Squadia",
    description: "Comment Squadia a aligné juniors et seniors sur une méthode de vente commune. Formation B2B terrain, outils IA, résultats mesurables dès la semaine suivante.",
  },
};

// --- Composant Detail ---
const CaseDetail = ({ caseData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const seo = caseSEO[caseData.id];
    if (seo) {
      document.title = seo.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.content = seo.description;
    }
  }, [caseData]);

  if (!caseData) return null;

  return (
    <div className="fade-in container section-padding" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <Link 
          href="/cas-clients" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: '#4A534F', 
            textDecoration: 'none',
            fontSize: '0.95rem',
            marginBottom: '2rem',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#1C2B27'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#4A534F'}
        >
          <ArrowLeft size={16} /> Retour aux cas clients
        </Link>
      </div>

      <div style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', borderRadius: '12px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', color: '#4A534F', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
            {caseData.client}
          </h2>
          <h1 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '1.5rem', maxWidth: '900px' }}>
            {caseData.subtitle}
          </h1>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {caseData.tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>CHIFFRES CLES</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {caseData.stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} />
            ))}
          </div>
        </div>

        <div className="grid-2" style={{ gap: '3rem' }}>
          <div>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Le contexte</h4>
            {caseData.context.map((p, idx) => (
              <p key={idx} style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {p}
              </p>
            ))}
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Ce qu'on a fait</h4>
              {caseData.action.map((p, idx) => (
                <p key={idx} style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {p}
                </p>
              ))}
            </div>

            <div style={{ background: 'rgba(255,255,255,0.6)', padding: '1.5rem', borderRadius: '8px', borderLeft: `4px solid ${caseData.resultBorderColor}` }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'white' }}>Ce qui a change</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {caseData.result}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══ SECTION ARTICLES (A lire aussi) ══ */}
      {(() => {
        const createCard = (path, tagColor, tagText, title) => (
          <Link href={path} style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', borderRadius: '12px', padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#B08D57'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#D8D1C2'; }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: `1px solid ${tagColor.border}`, backgroundColor: tagColor.bg, color: tagColor.text }}>{tagText}</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#1C2B27' }}>{title}</h3>
            <div style={{ display: 'flex', alignItems: 'center', color: '#8A6D3B', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
          </Link>
        );

        const cardsMap = {
          'strategie-ia-pme-eti': createCard('/blog/strategie-ia-pme-sequence', { border: '#8A6D3B', bg: 'rgba(176,141,87,0.1)', text: '#8A6D3B' }, 'Transformation', 'Comment mettre en place une strategie IA en PME et ETI : séquence, outils et premiers résultats'),
          'formation-ia-ou-automatisation': createCard('/blog/formation-ia-automatisation-ordre', { border: '#B08D57', bg: 'rgba(176,141,87,0.1)', text: '#8A6D3B' }, 'Transformation', 'Formation IA ou automatisation des process : dans quel ordre transformer son entreprise ?'),
          'prospection-multicanale-b2b-erreurs': createCard('/blog/prospection-multicanale-b2b-erreurs', { border: '#B5652A', bg: 'rgba(181,101,42,0.1)', text: '#B5652A' }, 'Prospection', 'Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter'),
          'formation-commerciale-b2b-ia': createCard('/blog/formation-commerciale-b2b-ia', { border: '#B08D57', bg: 'rgba(176,141,87,0.1)', text: '#8A6D3B' }, 'Formation commerciale', 'Formation commerciale B2B : comment rendre vos équipes autonomes et performantes avec l\'IA'),
          'nettoyage-segmentation-enrichissement': createCard('/blog/nettoyage-segmentation-enrichissement-donnees-b2b', { border: '#B5652A', bg: 'rgba(181,101,42,0.1)', text: '#B5652A' }, 'Data B2B', 'Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit')
        };

        const recs = {
          'pipeline-b2b': ['prospection-multicanale-b2b-erreurs', 'nettoyage-segmentation-enrichissement'],
          'formation-ia-com': ['formation-ia-ou-automatisation', 'formation-commerciale-b2b-ia'],
          'crm-industrie': ['nettoyage-segmentation-enrichissement', 'formation-ia-ou-automatisation'],
          'migration-crm': ['formation-commerciale-b2b-ia', 'nettoyage-segmentation-enrichissement'],
          'formation-vente': ['formation-commerciale-b2b-ia', 'formation-ia-ou-automatisation']
        };

        const keysToRender = recs[caseData.id] || [];
        if (keysToRender.length === 0) return null;

        return (
          <div style={{ marginTop: '6rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', textAlign: 'center' }}>À lire aussi</h2>
            <div className="grid-2" style={{ gap: '2rem', maxWidth: '1000px', marginInline: 'auto' }}>
              {keysToRender.map(k => <React.Fragment key={k}>{cardsMap[k]}</React.Fragment>)}
            </div>
          </div>
        );
      })()}

    </div>
  );
};


// --- Composant Liste ---
const CasesList = () => {
  const [filter, setFilter] = useState('Tous');
  const [isMobile, setIsMobile] = useState(false);
  const filters = ['Tous', 'Data', 'Prospection', 'Formation'];
  const router = useRouter();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const filteredCases = casesData.filter(c => {
    if (filter === 'Tous') return true;
    const filterNormalized = filter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return c.tags.some(tag => tag.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(filterNormalized));
  });

  const CaseCard = ({ c, large = false }) => {
    const img = caseImages[c.id] || null;
    const [hovered, setHovered] = React.useState(false);

    if (isMobile) {
      return (
        <div
          onClick={() => router.push(`/cas-clients/${c.id}`)}
          style={{
            background: '#F6F3EC',
            border: '1px solid rgba(28,43,39,0.16)',
            borderRadius: '14px',
            cursor: 'pointer',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {img && (
            <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
              <img src={img} alt={c.shortTitle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          <div style={{ padding: '16px' }}>
            <Tag>{c.tags[0]}</Tag>
            <p style={{ marginTop: '10px', fontSize: '18px', fontWeight: 700, color: '#1C2B27', lineHeight: 1.3, marginBottom: '6px' }}>
              {c.shortTitle}
            </p>
            {c.kpiLabel && (
              <p style={{ fontSize: '14px', color: 'rgba(28,43,39,0.6)', lineHeight: 1.5, marginBottom: '12px',
                overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                <span style={{ color: '#8A6D3B', fontWeight: 700 }}>{c.kpi}</span> {c.kpiLabel}
              </p>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#8A6D3B', fontSize: '14px', fontWeight: 600 }}>
              Lire le cas <ArrowRight size={13} />
            </div>
          </div>
        </div>
      );
    }

    return (
    <div
      onClick={() => router.push(`/cas-clients/${c.id}`)}
      style={{
        background: '#FFFFFF',
        border: '1px solid',
        borderColor: hovered ? '#B08D57' : '#D8D1C2',
        borderRadius: '16px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: '150px', overflow: 'hidden', borderBottom: '1px solid #D8D1C2', flexShrink: 0, background: '#EFEAE0' }}>
        {img && (
          <img src={img} alt={`Cas client ${c.shortTitle}`} style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block',
            transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.6s ease',
          }} />
        )}
      </div>
      <div style={{ padding: '1.5rem 1.8rem 1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div><Tag>{c.tags[0]}</Tag></div>
        <div style={{ marginTop: '0.9rem', fontSize: '1rem', fontWeight: 500, color: '#4A534F', lineHeight: 1.5 }}>
          {c.shortTitle}
        </div>
        <div style={{ marginTop: '0.9rem', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.1, color: '#1F3A33' }}>
          {c.kpi}
        </div>
        {c.kpiLabel && (
          <div style={{ fontSize: '0.8rem', color: '#6B716C', marginTop: '0.35rem' }}>
            {c.kpiLabel}
          </div>
        )}
        <div style={{ marginTop: 'auto', paddingTop: '1.1rem' }}>
          <div style={{ borderTop: '1px solid #EDE8DD', paddingTop: '1.1rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#8A6D3B', fontSize: '0.875rem', fontWeight: 600 }}>
            Voir l'étude complète <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
  };

  // Grille bento : card[0] grande, card[1] petite à droite, puis row de 3
  const [first, second, ...rest] = filteredCases;

  return (
    <div className="container section-padding" style={{ paddingTop: '140px', paddingBottom: '80px' }}>

      <div className="fade-in" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '900px', marginInline: 'auto', lineHeight: 1.1, marginBottom: '2rem' }}>
          Ce qu'on a fait,<br />et ce que ça a changé.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6, marginBottom: '1rem' }}>
          Pas de promesses génériques.<br />Des situations réelles, des actions concrètes, des résultats mesurables.
        </p>
      </div>

      {/* Filtres */}
      <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: '0.5rem 1.1rem', borderRadius: '30px',
            border: filter === f ? '1px solid #B08D57' : '1px solid rgba(28,43,39,0.192)',
            background: filter === f ? 'rgba(176,141,87,0.08)' : 'transparent',
            color: filter === f ? '#8A6D3B' : 'rgba(28,43,39,0.6)',
            fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease'
          }}>{f}</button>
        ))}
      </div>

      {/* Grille bento */}
      <div className="fade-in">
        {/* Ligne 1 : grande + petite */}
        {filteredCases.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '3fr 2fr', gap: '1rem', marginBottom: '1rem' }}>
            {first && <CaseCard c={first} large={!isMobile} />}
            {second && <CaseCard c={second} large={false} />}
          </div>
        )}

        {/* Ligne 2 : 3 cartes égales */}
        {rest.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1rem' }}>
            {rest.map(c => <CaseCard key={c.id} c={c} large={false} />)}
          </div>
        )}

        {filteredCases.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(28,43,39,0.6)' }}>
            Aucun cas client pour ce filtre.
          </div>
        )}
      </div>
    </div>
  );
};


// --- Main Component ---
const CasClients = () => {
  useScrollReveal();
  const { caseId } = useParams();

  useEffect(() => {
    document.title = "Cas clients Squadia : CRM, IA et Formation B2B";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Découvrez comment Squadia a aidé des PME, ETI et grands groupes à structurer leur pipeline, automatiser leurs process et former leurs équipes à l'IA.";
    }
  }, []);

  const selectedCase = caseId ? casesData.find(c => c.id === caseId) : null;

  return (
    <div className="cas-clients-page" style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: '#1C2B27' }}>
      {selectedCase ? (
        <CaseDetail caseData={selectedCase} />
      ) : (
        <>
          <CasesList />
          <section className="section-padding" style={{ backgroundColor: '#F6F3EC', paddingTop: '3rem', paddingBottom: '4rem' }}>
            <div className="container fade-in">
              <ClientLogosSection contained={true} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CasClients;
