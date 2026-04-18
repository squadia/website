import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { casesData } from '../data/cases';
import ClientLogosSection from '../components/ui/ClientLogosSection';
import pipelineImg from '../assets/images/pipeline-b2b.jpeg';
import formationImg from '../assets/images/formationB2B.png';
import iaComImg from '../assets/images/iaetcom.png';
import hubspotImg from '../assets/images/hubspotcrm.jpeg';
import transformerCRMImg from '../assets/images/transformerCRM.jpeg';

const caseImages = {
  'pipeline-b2b': pipelineImg,
  'formation-vente': formationImg,
  'formation-ia-com': iaComImg,
  'crm-industrie': transformerCRMImg,
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
    backgroundColor: '#44CCFF',
    color: '#FFFFFF',
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
      background: '#0D0D25', 
      padding: small ? '1rem' : '1.5rem', 
      borderRadius: '8px', 
      border: '1px solid #1A1A3A', 
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
    title: "Pipeline B2B from scratch — Cas client Squadia",
    description: "Découvrez comment Squadia a construit un pipeline B2B complet sur un marché non cartographié. Stratégie, data et premiers résultats mesurables en 90 jours.",
  },
  'formation-ia-com': {
    title: "Formation IA Communication — Cas client Squadia",
    description: "Comment Squadia a formé des équipes communication à l'IA en partant d'une charte existante. Programme personnalisé, outils concrets, résultats mesurables.",
  },
  'crm-industrie': {
    title: "CRM Industrie : de la contrainte à la croissance — Squadia",
    description: "Comment Squadia a transformé un CRM perçu comme une contrainte en moteur commercial. Migration, structuration du pipeline et adoption par les équipes.",
  },
  'migration-crm': {
    title: "Migration HubSpot en 3 semaines — Cas client Squadia",
    description: "Comment Squadia a nettoyé 2 500 comptes et déployé HubSpot en 3 semaines. Structuration du pipeline, adoption équipes et premiers résultats immédiats.",
  },
  'formation-vente': {
    title: "Formation Vente B2B — Méthode commune — Cas client Squadia",
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
          to="/cas-clients" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: '#9CA3AF', 
            textDecoration: 'none',
            fontSize: '0.95rem',
            marginBottom: '2rem',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#F9FAFB'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
        >
          <ArrowLeft size={16} /> Retour aux cas clients
        </Link>
      </div>

      <div style={{ background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
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

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '8px', borderLeft: `4px solid ${caseData.resultBorderColor}` }}>
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
          <Link to={path} style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: `1px solid ${tagColor.border}`, backgroundColor: tagColor.bg, color: tagColor.text }}>{tagText}</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>{title}</h3>
            <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
          </Link>
        );

        const cardsMap = {
          'strategie-ia-pme-eti': createCard('/blog/strategie-ia-pme-eti', { border: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.1)', text: '#A78BFA' }, 'Stratégie IA', 'Comment mettre en place une stratégie IA en PME et ETI : séquence, outils et premiers résultats'),
          'formation-ia-ou-automatisation': createCard('/blog/formation-ia-ou-automatisation', { border: '#44CCFF', bg: 'rgba(68, 204, 255, 0.1)', text: '#44CCFF' }, 'Transformation', 'Formation IA ou automatisation des process : dans quel ordre transformer son entreprise ?'),
          'prospection-multicanale-b2b-erreurs': createCard('/blog/prospection-multicanale-b2b-erreurs', { border: '#F97316', bg: 'rgba(249, 115, 22, 0.1)', text: '#F97316' }, 'Prospection', 'Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter'),
          'formation-commerciale-b2b-ia': createCard('/blog/formation-commerciale-b2b-ia', { border: '#44CCFF', bg: 'rgba(68, 204, 255, 0.1)', text: '#44CCFF' }, 'Formation commerciale', 'Formation commerciale B2B : comment rendre vos équipes autonomes et performantes avec l\'IA'),
          'nettoyage-segmentation-enrichissement': createCard('/blog/nettoyage-segmentation-enrichissement-donnees-b2b', { border: '#F97316', bg: 'rgba(249, 115, 22, 0.1)', text: '#F97316' }, 'Data B2B', 'Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit')
        };

        const recs = {
          'pipeline-b2b': ['prospection-multicanale-b2b-erreurs', 'nettoyage-segmentation-enrichissement'],
          'formation-ia-com': ['formation-ia-ou-automatisation', 'formation-commerciale-b2b-ia'],
          'crm-industrie': ['strategie-ia-pme-eti', 'formation-ia-ou-automatisation'],
          'migration-crm': ['strategie-ia-pme-eti', 'nettoyage-segmentation-enrichissement'],
          'formation-vente': ['formation-commerciale-b2b-ia', 'formation-ia-ou-automatisation']
        };

        const keysToRender = recs[caseData.id] || [];
        if (keysToRender.length === 0) return null;

        return (
          <div style={{ marginTop: '6rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>À lire aussi</h2>
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
  const filters = ['Tous', 'Stratégie', 'Data', 'Automatisation', 'Formation'];
  const navigate = useNavigate();

  const filteredCases = casesData.filter(c => {
    if (filter === 'Tous') return true;
    const filterNormalized = filter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return c.tags.some(tag => tag.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(filterNormalized));
  });

  const CaseCard = ({ c, large = false }) => {
    const img = caseImages[c.id] || null;
    const [hovered, setHovered] = React.useState(false);
    return (
    <div
      onClick={() => navigate(`/cas-clients/${c.id}`)}
      style={{
        background: c.bgGradient || '#0D0D25',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        padding: large ? '2.8rem' : '2rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: large ? '320px' : '220px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        borderColor: hovered ? 'rgba(68,204,255,0.35)' : 'rgba(255,255,255,0.07)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background photo */}
      {img && (
        <img src={img} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          borderRadius: '16px',
          opacity: hovered ? 0.55 : 0.38,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none'
        }} />
      )}
      {/* Gradient overlay to keep text readable */}
      {img && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '16px',
          background: hovered
            ? 'linear-gradient(to top, rgba(10,15,46,0.55) 20%, rgba(10,15,46,0.1) 100%)'
            : 'linear-gradient(to top, rgba(10,15,46,0.75) 30%, rgba(10,15,46,0.25) 100%)',
          transition: 'background 0.4s ease',
          pointerEvents: 'none'
        }} />
      )}
      {/* Subtle noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '16px',
        background: 'radial-gradient(ellipse at top right, rgba(68,204,255,0.06) 0%, transparent 65%)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Tag>{c.tags[0]}</Tag>

        <div style={{ marginTop: '1.2rem', marginBottom: '0.5rem', fontSize: large ? '1.25rem' : '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)' }}>
          {c.shortTitle}
        </div>

        <div style={{ fontSize: large ? '2.8rem' : '2rem', fontWeight: 700, lineHeight: 1.1, color: '#44CCFF', marginBottom: '0.3rem', letterSpacing: '-0.02em' }}>
          {c.kpi}
        </div>
        {c.kpiLabel && (
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.4rem' }}>
            {c.kpiLabel}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}>
          Voir l'étude complète <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
  };

  // Grille bento : card[0] grande, card[1] petite à droite, puis row de 3
  const [first, second, ...rest] = filteredCases;

  return (
    <div className="container section-padding" style={{ paddingTop: '160px', paddingBottom: '80px' }}>

      <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '900px', marginInline: 'auto', lineHeight: 1.1, marginBottom: '2rem' }}>
          Ce qu'on a fait,<br />et ce que ça a changé.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6, marginBottom: '3rem' }}>
          Pas de promesses génériques. Des situations réelles, des actions concrètes, des résultats mesurables.
        </p>
      </div>

      {/* Filtres */}
      <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: '0.5rem 1.1rem', borderRadius: '30px',
            border: filter === f ? '1px solid #44CCFF' : '1px solid rgba(255,255,255,0.12)',
            background: filter === f ? 'rgba(68,204,255,0.08)' : 'transparent',
            color: filter === f ? '#44CCFF' : 'rgba(255,255,255,0.5)',
            fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease'
          }}>{f}</button>
        ))}
      </div>

      {/* Grille bento */}
      <div className="fade-in">
        {/* Ligne 1 : grande + petite */}
        {filteredCases.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '1rem', marginBottom: '1rem' }}>
            {first && <CaseCard c={first} large={true} />}
            {second && <CaseCard c={second} large={false} />}
          </div>
        )}

        {/* Ligne 2 : 3 cartes égales */}
        {rest.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {rest.map(c => <CaseCard key={c.id} c={c} large={false} />)}
          </div>
        )}

        {filteredCases.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.3)' }}>
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
    document.title = "Cas clients Squadia — CRM, IA et Formation B2B";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Découvrez comment Squadia a aidé des PME, ETI et grands groupes à structurer leur pipeline, automatiser leurs process et former leurs équipes à l'IA.";
    }
  }, []);

  const selectedCase = caseId ? casesData.find(c => c.id === caseId) : null;

  return (
    <div className="cas-clients-page" style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: '#F9FAFB' }}>
      {selectedCase ? (
        <CaseDetail caseData={selectedCase} />
      ) : (
        <>
          <CasesList />
          <ClientLogosSection />
        </>
      )}
    </div>
  );
};

export default CasClients;
