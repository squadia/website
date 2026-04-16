import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import bgUseCase from '../assets/images/bgusecase.png';
import hubspotImg from '../assets/images/hubspotcrm.jpeg';

const CasMigrationCRM = () => {
  useEffect(() => {
    document.title = "Cas client — Migration CRM HubSpot · Squadia";
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '+2 500', label: 'comptes nettoyés', sub: 'en moins de 3 semaines' },
    { value: '–15%', label: 'doublons éliminés', sub: 'contacts invalides supprimés' },
    { value: '+200', label: 'activités réintégrées', sub: 'par compte, historique complet' },
    { value: '+10', label: 'automatisations déployées', sub: 'inside & outside CRM' },
  ];

  const statsBis = [
    { value: '1', label: 'CRM HubSpot déployé', sub: 'adopté immédiatement par toutes les équipes' },
    { value: 'Multi', label: 'pays couverts', sub: 'dashboards de suivi internationaux' },
    { value: 'IA', label: 'agents en déploiement', sub: 'pour accélérer la prospection' },
  ];

  const actions = [
    {
      step: '01',
      title: 'Nettoyage et restructuration des données',
      body: 'Reprise de toutes les données existantes issues des fichiers Excel épars : agrégation, nettoyage, suppression des doublons et contacts invalides, recréation des liens entre les dossiers et réintégration de l\'historique des activités sur chaque compte. Un travail de fond pour que le CRM parte sur une base propre et exploitable dès le premier jour.'
    },
    {
      step: '02',
      title: 'Déploiement HubSpot et dashboards internationaux',
      body: 'Configuration de HubSpot avec les bons dashboards pour suivre le développement sur les différents pays cibles. Mise en place des automatisations nécessaires à l\'intérieur et à l\'extérieur du CRM pour alerter les bonnes personnes au bon moment — deals qui progressent, seuils de valeur atteints, relances à déclencher.'
    },
    {
      step: '03',
      title: 'Formation de l\'ensemble des équipes',
      body: 'Formation de l\'intégralité des équipes, du management aux commerciaux en passant par le marketing, pour qu\'elles s\'approprient l\'outil sans avoir besoin d\'être expertes en marketing digital. L\'objectif : une adoption immédiate, pas une migration qui s\'enlise.'
    },
    {
      step: '04',
      title: 'Agents IA pour accélérer la prospection',
      body: 'La mission se poursuit avec le déploiement d\'agents IA qui permettent à chaque commercial de se démultiplier sur un marché international qui n\'attend pas. Identification des comptes chauds, préparation des rendez-vous, suivi automatique des interactions.'
    },
  ];

  return (
    <div style={{ background: '#06060F', color: '#F9FAFB', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}>
        {/* Photo de fond */}
        <img src={hubspotImg} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top',
          pointerEvents: 'none'
        }} />
        {/* Masque diagonal teal/sombre */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(105deg, rgba(7,26,26,0.92) 0%, rgba(7,26,26,0.80) 38%, rgba(7,26,26,0.50) 58%, rgba(7,26,26,0.08) 72%, transparent 82%)',
        }} />
        {/* Lisière basse */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, #06060F)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <Link to="/cas-clients" style={{
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
              { label: 'Stratégie',      color: '#A78BFA', bg: 'rgba(139,92,246,0.1)' },
              { label: 'Automatisation', color: '#44CCFF', bg: 'rgba(68,204,255,0.1)' },
              { label: 'Formation',      color: '#34D399', bg: 'rgba(16,185,129,0.1)' },
            ].map(t => (
              <span key={t.label} style={{
                padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem',
                fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                border: `1px solid ${t.color}`, background: t.bg, color: t.color
              }}>{t.label}</span>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Startup deeptech · Grenoble · Nouvelles énergies · Marchés maritimes, routiers et aériens
          </p>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.15,
            maxWidth: '820px', marginBottom: '2.5rem', letterSpacing: '-0.02em'
          }}>
            Nettoyer 2 500 comptes et déployer HubSpot en 3 semaines
          </h1>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            background: 'rgba(68,204,255,0.06)', border: '1px solid rgba(68,204,255,0.2)',
            borderRadius: '12px', padding: '1rem 1.8rem'
          }}>
            <span style={{ fontSize: '2.6rem', fontWeight: 700, color: '#44CCFF', letterSpacing: '-0.03em' }}>3 sem.</span>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>de zéro à CRM opérationnel</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>2 500 comptes nettoyés, équipes formées, adopté immédiatement</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT CARDS ── */}
      <section style={{ background: '#07070F', padding: '5rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '2rem' }}>Chiffres clés</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(8,15,35,0.6)', border: '1px solid rgba(68,204,255,0.12)',
                borderRadius: '14px', padding: '1.6rem', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(68,204,255,0.3), transparent)'
                }} />
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#44CCFF', lineHeight: 1.1, marginBottom: '0.4rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 500, marginBottom: '0.2rem' }}>{s.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem' }}>
            {statsBis.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(8,15,35,0.6)', border: '1px solid rgba(68,204,255,0.12)',
                borderRadius: '14px', padding: '1.6rem', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(68,204,255,0.3), transparent)'
                }} />
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#44CCFF', lineHeight: 1.1, marginBottom: '0.4rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 500, marginBottom: '0.2rem' }}>{s.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTE ── */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.8rem' }}>Le contexte</p>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.25, color: '#fff' }}>
              Une force de vente sur Excel, un marché international qui n'attend pas.
            </h2>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p>
              Cette startup grenobloise développe une technologie de pile à combustible applicable aux transports maritimes, routiers et aériens. Marché en forte croissance, concurrence internationale intense, beaucoup investi en R&D. Quand ils arrivent avec leur projet, leur force de vente travaille encore sur des fichiers Excel. Les données sont éparpillées, sans cohérence entre elles. Certaines colonnes sont renseignées d'un côté et vides de l'autre. Aucun système d'alerte quand un deal progresse ou atteint un certain niveau de valeur. Et surtout, aucune méthode de vente commune pour que tout le monde parle le même langage en interne.
            </p>
            <p style={{ marginTop: '1.4rem' }}>
              Ils savaient qu'ils voulaient HubSpot. Ils avaient déjà une idée du budget. Ce qu'ils n'avaient pas encore, c'était la structure pour en tirer de la valeur rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* ── CE QU'ON A FAIT ── */}
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
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#44CCFF', letterSpacing: '0.08em', paddingTop: '4px' }}>
                  ÉTAPE {a.step}
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

      {/* ── CE QUI A CHANGÉ ── */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(68,204,255,0.05) 0%, rgba(6,10,28,0) 60%)',
            border: '1px solid rgba(68,204,255,0.15)',
            borderLeft: '4px solid #44CCFF',
            borderRadius: '16px', padding: '3rem'
          }}>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(68,204,255,0.7)', marginBottom: '1.2rem' }}>Ce qui a changé</p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: '820px' }}>
              En quelques jours après le déploiement, l'équipe travaillait déjà sur un CRM propre, avec une visibilité réelle sur son activité. Les commerciaux ont trouvé dans l'outil <strong style={{ color: '#fff' }}>ce qu'ils cherchaient jusque-là dans des tableaux Excel épars</strong>. Aujourd'hui, la mission se poursuit avec des agents IA qui permettent à chaque commercial de se démultiplier sur un marché qui n'attend pas.
            </p>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/cas-clients/crm-industrie" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <ArrowLeft size={16} /> Transformation CRM
          </Link>
          <Link to="/cas-clients/formation-vente" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#44CCFF', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'opacity 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Cas suivant : Formation Grand Compte <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CasMigrationCRM;
