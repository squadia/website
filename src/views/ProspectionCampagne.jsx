'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, MessageSquare, Target, RefreshCw, BarChart3, Check, ArrowRight, ZoomIn, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PartnerLogosMarquee from '../components/ui/PartnerLogosMarquee';

const teamSquadia = '/assets/images/notremission/team-squadia.png';

const kicker = { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem' };
const h2Style = { fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 };
const chapo = { fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.6 };

const features = [
  { Icon: Target, title: 'Ciblage structuré', desc: "Nous commençons par un atelier de cadrage pour définir votre ICP, vos personas, leurs pain points et vos critères de priorité. Nous identifions ensuite les contacts qui ont une actualité récente, pour aborder le bon sujet au bon moment." },
  { Icon: MessageSquare, title: 'Messages personnalisés', desc: "Chaque email et chaque message LinkedIn s'appuie sur l'actualité de l'entreprise contactée : recrutement, nomination, projet d'investissement." },
  { Icon: RefreshCw, title: 'Rapidité de réponse', desc: "Sans réponse rapide, le prospect va chercher ailleurs : contacté en 5 minutes, il a 21 fois plus de chances d'être qualifié qu'après 30 minutes d'attente (Harvard Business Review). L'IA nous aide à garder ce momentum en répondant sur LinkedIn en quasi temps réel." },
  { Icon: BarChart3, title: 'Reporting hebdo', desc: "Un Customer Success Manager dédié fait le point avec vous chaque semaine en visioconférence. Il partage tous les retours, côté vente, communication, marketing et produit, pour continuer à adapter l'approche la plus pertinente." },
];

const timelineSteps = [
  { week: 'Semaine 1', title: 'Atelier de cadrage', desc: 'Objectifs, cible, périmètre. On aligne la mission sur votre organisation.', image: '/atelier_cadrage.webp' },
  { week: 'Semaine 2', title: 'Construction de la base', desc: 'Extraction sur signal, nettoyage, validation avec vous.', image: '/constructionbase.webp' },
  { week: 'Semaine 3', title: 'Messages et outils', desc: 'Rédaction des séquences, mise en place du CRM et du tableau de bord.', image: '/copywriting.webp' },
  { week: 'Semaine 4 et suite', title: 'Campagnes et appels', desc: 'Les séquences tournent, les appels démarrent, point hebdomadaire.', image: '/coldcall.webp' },
];

const repliikScreenshots = [
  { src: '/assets/images/repliik/importer vos contacts depuis CRM.png', title: 'Importez contacts (CRM / CSV)' },
  { src: '/assets/images/repliik/enrichir liste de contacts avec IA.png', title: 'Enrichir liste de contacts' },
  { src: '/assets/images/repliik/paramétrez vos séquences multicanale.png', title: 'Paramétrez vos séquences' },
  { src: '/assets/images/repliik/controlez vos séquences avant envoi.png', title: 'Gérer les séquences' },
  { src: '/assets/images/repliik/automatisez vos réponses linkedin avec l IA.png', title: 'Réponses LinkedIn auto. via agent IA' },
];

const deliverables = [
  'Base de contacts ciblés et vérifiés',
  'Séquences email et LinkedIn prêtes à l\'emploi',
  'Tableau de bord de suivi hebdomadaire',
  'Rendez-vous qualifiés transmis à votre CRM',
];

const prospectionCards = [
  { title: 'Campagne multicanale', subtitle: 'Pour lancer des campagnes email et LinkedIn.', items: ['Séquences email et LinkedIn personnalisées', 'Personnalisation contact par contact', 'Traitement des réponses inclus', 'Reporting hebdomadaire'], price: 'À partir de 2 490 € HT', subPrice: 'Périmètre ajusté avant démarrage.', link: '/prospection/campagne' },
  { title: 'Appels sortants', subtitle: 'Pour qualifier et prendre des rendez-vous par téléphone.', items: ['Commercial B2B senior dédié', 'Script construit avec vous', 'Définition écrite du rendez-vous qualifié', 'Reporting hebdomadaire'], price: 'Sur devis', link: '/prospection/cold-call' },
  { title: 'Mission hybride', subtitle: 'Pour combiner campagne multicanale et prospection téléphonique.', items: ['Data + Cold Call combinés', 'Customer Success Manager dédié', 'CRM et Dashboard dédié', 'Reporting hebdomadaire'], price: 'Sur devis', badge: 'RECOMMANDÉ', link: '/contact' },
];

const StepText = ({ s, isMobile }) => (
  <div>
    <p style={{ ...kicker, marginBottom: '0.4rem', fontSize: isMobile ? '0.65rem' : '0.7rem' }}>{s.week}</p>
    <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, color: '#F9FAFB', margin: '0 0 0.5rem' }}>{s.title}</p>
    <p style={{ fontSize: isMobile ? '0.85rem' : '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
  </div>
);

const StepImage = ({ src, label, isMobile }) => (
  <div style={{ aspectRatio: isMobile ? '16/10' : '4/3', borderRadius: isMobile ? '12px' : '14px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
    <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
  </div>
);

const Timeline = ({ isMobile }) => (
  <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', overflow: 'visible', padding: isMobile ? '0 8px' : '0' }}>
    <div className="timeline-spine" style={{ display: isMobile ? 'none' : 'block', position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'rgba(68,204,255,0.15)', transform: 'translateX(-50%)' }} />
    {timelineSteps.map((s, i) => {
      const imageLeft = i % 2 === 0;
      return (
        <div key={i} className="timeline-row" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1rem' : '3rem', alignItems: isMobile ? 'stretch' : 'center', position: 'relative', marginBottom: i === timelineSteps.length - 1 ? 0 : (isMobile ? '2.5rem' : '6rem'), overflow: 'visible' }}>
          <div className="timeline-dot" style={{ display: isMobile ? 'none' : 'block', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '14px', height: '14px', borderRadius: '50%', background: '#050510', border: '2px solid #44CCFF', zIndex: 2 }} />
          {isMobile ? (
            <>
              <motion.div key={`t-${i}-text`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                <StepText s={s} isMobile={isMobile} />
              </motion.div>
              <motion.div key={`t-${i}-img`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} isMobile={isMobile} />
              </motion.div>
            </>
          ) : imageLeft ? (
            <>
              <motion.div key={`d-${i}-img`} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} isMobile={isMobile} />
              </motion.div>
              <motion.div key={`d-${i}-text`} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
                <StepText s={s} isMobile={isMobile} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div key={`d-${i}-text`} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <StepText s={s} isMobile={isMobile} />
              </motion.div>
              <motion.div key={`d-${i}-img`} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} isMobile={isMobile} />
              </motion.div>
            </>
          )}
        </div>
      );
    })}
  </div>
);

const RepliikGallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const open = (src) => setLightbox(src);
  const close = () => setLightbox(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    if (lightbox) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
        {repliikScreenshots.map((shot, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ textAlign: 'center', cursor: 'pointer' }}
            onClick={() => open(shot.src)}
          >
            <div className="repliik-thumb" style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', marginBottom: '0.75rem', background: '#0D0D25' }}>
              <img src={shot.src} alt={shot.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }} />
              <div className="repliik-thumb-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(5,5,16,0.45)', opacity: 0, transition: 'opacity 0.25s ease' }}>
                <ZoomIn size={28} color="#44CCFF" />
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.35 }}>{shot.title}</p>
          </motion.div>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={close}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(5,5,16,0.92)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', cursor: 'zoom-out' }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px' }}
          >
            <X size={28} />
          </button>
          <img src={lightbox} alt="" style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '12px', border: '1px solid rgba(68,204,255,0.25)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', objectFit: 'contain' }} />
        </div>
      )}
    </>
  );
};

const formatPrice = (price) => {
  let displayPrice = price;
  let prefix = null;
  let suffix = null;
  if (displayPrice.startsWith('À partir de ')) { prefix = 'À partir de'; displayPrice = displayPrice.replace('À partir de ', ''); }
  if (displayPrice.endsWith(' / pers.')) { suffix = '/ pers.'; displayPrice = displayPrice.replace(' / pers.', ''); }
  if (displayPrice.endsWith(' / groupe')) { suffix = '/ groupe'; displayPrice = displayPrice.replace(' / groupe', ''); }
  return (
    <>
      {prefix && <span style={{ fontSize: '1.2rem', color: '#9CA3AF', fontWeight: 400, marginRight: '0.4rem' }}>{prefix}</span>}
      <span style={{ fontWeight: 400 }}>{displayPrice}</span>
      {suffix && <span style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 400, marginLeft: '0.2rem' }}>{suffix}</span>}
    </>
  );
};

const PricingProspection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
      {prospectionCards.map((card, idx) => (
        <div key={idx} style={{
          background: '#0D0D25', border: card.badge ? '2px solid #2563EB' : '1px solid #1A1A3A',
          padding: isMobile ? '24px 18px' : '2.25rem 1.75rem', borderRadius: '1rem', position: 'relative', display: 'flex', flexDirection: 'column'
        }}>
          {card.badge && (
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#2563EB', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.68rem', fontWeight: 700 }}>
              {card.badge}
            </div>
          )}
          <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0 0.75rem', color: '#F9FAFB' }}>{card.title}</h3>
          <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1.25rem', minHeight: isMobile ? 'auto' : '2.6rem' }}>{card.subtitle}</p>
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '1.5rem', color: '#fff' }}>{formatPrice(card.price)}</div>
            {card.subPrice && <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginTop: '0.35rem' }}>{card.subPrice}</div>}
          </div>
          <div style={{ flexGrow: 1, marginBottom: '1.25rem' }}>
            {card.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '0.65rem', fontSize: '0.85rem', lineHeight: 1.4 }}>
                <Check size={15} color={card.badge ? '#2563EB' : '#44CCFF'} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255,255,255,0.75)' }}>{item}</span>
              </div>
            ))}
          </div>
          <Link href={card.link || '/contact'} style={{
            display: 'block', width: '100%', padding: '0.9rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.95rem',
            border: card.badge ? 'none' : '1px solid rgba(255,255,255,0.2)', background: card.badge ? '#2563EB' : 'transparent',
            color: '#FFFFFF', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box'
          }}>
            Prendre RDV
          </Link>
        </div>
      ))}
    </div>
  );
};

export default function ProspectionCampagne() {
  useScrollReveal();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  useEffect(() => {
    document.title = "Prospection marketing B2B — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Lancez des campagnes de prospection multicanale personnalisées. Séquences email et LinkedIn, traitement des réponses, enrichissement des contacts avec Repliik.");
    }
  }, []);

  return (
    <div style={{ background: '#050510', color: '#F9FAFB', minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <img src="/assets/images/campagne/campagne.png" alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: isMobile ? '70% top' : 'center top', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: isMobile ? 'rgba(5,5,16,0.55)' : 'rgba(5,5,16,0.35)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2, background: isMobile ? 'linear-gradient(160deg, rgba(5,5,16,0.98) 0%, rgba(5,5,16,0.88) 45%, rgba(5,5,16,0.55) 100%)' : 'linear-gradient(105deg, rgba(5,5,16,0.97) 0%, rgba(5,5,16,0.80) 35%, rgba(5,5,16,0.40) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(to bottom, transparent, #050510)' }} />

        <div style={{ position: 'relative', zIndex: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: isMobile ? '1.5rem' : '8%', paddingRight: isMobile ? '1.5rem' : '8%' }}>
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.12em', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Campagne multicanale</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{ fontSize: 'clamp(1.75rem, 6vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '750px' }}
          >
            La stratégie qui donne envie de vous rencontrer
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}
          >
            <span style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: 800, color: '#44CCFF' }}>8 à 12</span>
            <span style={{ fontSize: isMobile ? '0.8rem' : '0.85rem', color: 'rgba(255,255,255,0.85)', maxWidth: '280px', lineHeight: 1.3 }}>points de contact en moyenne nécessaires pour obtenir un premier rendez-vous avec un décideur</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ fontSize: isMobile ? '1.05rem' : '1.25rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', marginBottom: '3rem' }}
          >
            Nous construisons des séquences personnalisées à partir des signaux d'achat de vos prospects. Les réponses sont traitées pour transformer l'intérêt en rendez-vous qualifiés.
          </motion.p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row' }}>
            <Link href="/contact" style={{ backgroundColor: '#2563EB', color: '#fff', padding: isMobile ? '1rem 1.5rem' : '1.3rem 2.5rem', borderRadius: '0.5rem', fontWeight: 600, border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              Prendre RDV
            </Link>
            <a href="#features" style={{ background: 'transparent', color: '#44CCFF', padding: isMobile ? '1rem 1.5rem' : '1.3rem 2.5rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #44CCFF' }}>
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '80px 0', background: '#0A0A1A' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={kicker}>CE QUE NOUS FAISONS</p>
            <h2 style={h2Style}>Une campagne : de la cible au rendez-vous</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ background: '#0D0D25', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '1.75rem' }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(68,204,255,0.08)', border: '1px solid rgba(68,204,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <f.Icon size={20} color="#44CCFF" />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '80px 0' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={kicker}>MÉTHODE</p>
            <h2 style={h2Style}>Comment nous travaillons ensemble</h2>
          </div>
          <Timeline isMobile={isMobile} />
        </div>
      </section>

      {/* REPLIIK */}
      <section id="repliik" style={{ padding: '80px 0', background: '#0A0A1A' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={kicker}>OUTIL INTERNE</p>
            <h2 style={h2Style}>Repliik : notre arme secrète</h2>
          </div>

          <div className="repliik-two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', alignItems: 'start', marginBottom: '3rem' }}>
            <div>
              <p style={{ ...chapo, marginBottom: '1.5rem' }}>
                Après avoir accompagné de nombreux clients sur l'automatisation de leurs campagnes, nous utilisions un empilement d'outils : <a href="https://www.clay.com" target="_blank" rel="noopener noreferrer" style={{ color: '#44CCFF', textDecoration: 'none' }}>Clay</a> ou <a href="https://www.fullenrich.com" target="_blank" rel="noopener noreferrer" style={{ color: '#44CCFF', textDecoration: 'none' }}>FullEnrich</a> pour l'enrichissement, <a href="https://www.lemlist.com" target="_blank" rel="noopener noreferrer" style={{ color: '#44CCFF', textDecoration: 'none' }}>Lemlist</a> ou <a href="https://www.waalaxy.com" target="_blank" rel="noopener noreferrer" style={{ color: '#44CCFF', textDecoration: 'none' }}>Waalaxy</a> pour l'envoi, d'autres pour le suivi. Repliik rassemble ce qui fonctionne dans un seul flux.
              </p>
              <p style={{ ...chapo, marginBottom: '1.5rem' }}>
                <span style={{ color: '#F9FAFB', fontWeight: 700 }}>Résultat :</span> 45% de réduction du temps de préparation des campagnes, avec plus de personnalisation et davantage de rendez-vous générés. À la fin de la mission, nous pouvons si vous le souhaitez vous former à l'utilisation de l'outil en toute autonomie.
              </p>
              <a href="https://repliik.com" target="_blank" rel="noopener noreferrer" style={{ color: '#44CCFF', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Visiter repliik.com ↗
              </a>
            </div>

            <div style={{ display: 'grid', gap: '1.8rem' }}>
              {[
                'Import des listes de contacts depuis votre CRM',
                'Enrichissement des contacts avec l\'IA (Clay / FullEnrich)',
                'Préparation et automatisation des séquences',
                'Envoi multicanal LinkedIn et email',
                'Automatisation des réponses et agents d\'IA LinkedIn',
                'Et bien plus',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <Check size={20} color="#44CCFF" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <RepliikGallery />
        </div>
      </section>

      {/* DELIVERABLES */}
      <section style={{ padding: '80px 0' }}>
        <div className="container fade-in">
          <div style={{ background: '#0D0D25', border: '1px solid rgba(68,204,255,0.2)', borderRadius: '24px', padding: '3rem', overflow: 'hidden' }}>
            <p style={{ ...kicker, textAlign: 'center' }}>LIVRABLES</p>
            <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: '1.25rem' }}>Ce que vous récupérez</h2>
            <p style={{ ...chapo, textAlign: 'justify', maxWidth: '960px', margin: '0 auto 2.5rem' }}>
              Le playbook est l'espace que nous mettons à votre disposition pour récupérer l'intégralité des livrables de la mission : les résultats de nos ateliers de découverte, le copywriting que nous vous avons partagé pour accord, et l'ensemble de notre stratégie d'approche, scripts d'appel dynamiques inclus. Ces documents vous appartiennent : vous pouvez les réutiliser pour d'autres initiatives ou les partager avec votre équipe.
            </p>
            <div className="deliverables-two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem', alignItems: 'center' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                <img src="/assets/images/campagne/playbookclient.png" alt="Exemple de livrable Squadia" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {deliverables.map((d, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Check size={20} color="#44CCFF" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>{d}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginTop: '0.75rem' }}>
                  <img src="/assets/images/campagne/logonotion.webp" alt="Notion" style={{ width: '48px', height: '48px', objectFit: 'contain', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>Partagé via Notion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS CLIENTS */}
      <section className="section-padding" style={{ backgroundColor: '#050510', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container fade-in">
          <PartnerLogosMarquee description="Nous avons aidé ces entreprises à générer des rendez-vous qualifiés et à structurer durablement leur prospection sortante." contained={true} />
        </div>
      </section>

      {/* PRICING PROSPECTION */}
      <section style={{ padding: '80px 0', background: '#050510' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={kicker}>COMBIEN ÇA COÛTE</p>
            <h2 style={h2Style}>Nos offres de prospection</h2>
          </div>
          <PricingProspection />
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: '#060612', padding: isMobile ? '40px 0 80px' : '60px 0 120px' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-160px', bottom: '-160px', width: '840px', height: '840px', background: 'radial-gradient(circle, rgba(68,204,255,0.55) 0%, rgba(68,204,255,0) 70%)', filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none' }} />
          <div style={{ border: '1px solid rgba(68,204,255,.1)', borderRadius: isMobile ? '16px' : '20px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px -20px rgba(68,204,255,.15)', minHeight: isMobile ? '420px' : '600px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 1 }}>
            <img src={teamSquadia} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: isMobile ? 'center 20%' : 'center top', filter: isMobile ? 'brightness(0.55) saturate(1.1)' : 'brightness(0.75) saturate(1.1)', zIndex: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: isMobile ? 'linear-gradient(to bottom, rgba(6,6,18,0.85) 0%, rgba(6,6,18,0.55) 35%, rgba(6,6,18,0.75) 70%, rgba(6,6,18,0.95) 100%)' : 'linear-gradient(to bottom, rgba(6,6,18,0.75) 0%, transparent 32%, transparent 55%, rgba(6,6,18,0.92) 100%)', zIndex: 1, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2, padding: isMobile ? '40px 24px 48px' : '56px 56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Prochaine étape</span>
                <p style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.1, color: '#fff', margin: '0 0 8px' }}>Rejoignez-nous :</p>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: 0 }}>Parlons de votre prospection</h2>
              </div>
              <div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '420px', margin: '0 auto 32px' }}>30 minutes pour comprendre votre contexte<br />et diagnostiquer une approche.</p>
                <Link href="/contact" style={{ fontSize: '1.1rem', fontWeight: 700, background: '#44CCFF', color: '#060612', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block', margin: '0 auto' }}>Prendre Rendez-Vous</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .repliik-thumb:hover { border-color: rgba(68,204,255,0.5) !important; box-shadow: 0 0 20px rgba(68,204,255,0.15); }
        .repliik-thumb:hover img { transform: scale(1.05); }
        .repliik-thumb:hover .repliik-thumb-overlay { opacity: 1 !important; }
        @media (max-width: 768px) {
          .timeline-row { grid-template-columns: 1fr !important; gap: 1.25rem !important; margin-bottom: 2.5rem !important; }
          .timeline-spine, .timeline-dot { display: none !important; }
          .repliik-two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .deliverables-two-col { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
