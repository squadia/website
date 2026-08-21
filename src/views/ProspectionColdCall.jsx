'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserCheck, FileText, Calendar, RefreshCw, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const teamSquadia = '/assets/images/notremission/team-squadia.png';

const kicker = { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '0.75rem' };
const h2Style = { fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 };
const chapo = { fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.6 };

const features = [
  { Icon: UserCheck, title: 'Commercial senior', desc: "Vos appels sont passés par un profil avec plus de dix ans d'expérience en prospection directe B2B." },
  { Icon: FileText, title: 'Script co-construit', desc: 'Nous rédigeons le script ensemble, en partant de vos cas clients réels et des objections que vous rencontrez. Vous validez avant le premier appel.' },
  { Icon: Calendar, title: 'Rendez-vous qualifié', desc: "Nous définissons avec vous ce qu'est un rendez-vous qualifié : bon interlocuteur, intérêt exprimé, créneau confirmé." },
  { Icon: RefreshCw, title: 'Amélioration continue', desc: "Chaque semaine, nous faisons le point avec vous et ajustons le script ou le ciblage si nécessaire. Pas d'engagement figé sur un chiffre, un pilotage vivant de la campagne." },
];

const timelineSteps = [
  { week: 'Semaine 1', title: 'Atelier de cadrage', desc: 'On définit la cible, le message, la définition du RDV qualifié et le calendrier.', image: '/atelier_cadrage.webp' },
  { week: 'Semaine 2', title: 'Construction de la base', desc: 'Sélection sur signal, vérification des numéros directs, préparation des arguments par segment.', image: '/constructionbase.webp' },
  { week: 'Semaine 3', title: 'Validation du script', desc: 'Nous vous présentons le script et les réponses aux objections avant de lancer les appels.', image: '/copywriting.webp' },
  { week: 'Semaine 4 et suite', title: 'Appels et reporting', desc: 'Les appels démarrent, les rendez-vous sont transmis à votre CRM, vous recevez un suivi hebdomadaire.', image: '/coldcall.webp' },
];

const deliverables = [
  'Script de prospection validé ensemble',
  'Base de contacts ciblés et numéros vérifiés',
  'Rendez-vous qualifiés dans votre CRM',
  'Compte-rendu hebdomadaire des appels',
];

const prospectionCards = [
  { title: 'Campagne multicanale', subtitle: 'Pour lancer des campagnes email et LinkedIn.', items: ['Séquences email et LinkedIn personnalisées', 'Personnalisation contact par contact', 'Traitement des réponses inclus', 'Reporting hebdomadaire'], price: 'À partir de 2 490 € HT', subPrice: 'Périmètre ajusté avant démarrage.', link: '/prospection/campagne' },
  { title: 'Appels sortants', subtitle: 'Pour qualifier et prendre des rendez-vous par téléphone.', items: ['Commercial B2B senior dédié', 'Script construit avec vous', 'Définition écrite du rendez-vous qualifié', 'Reporting hebdomadaire'], price: 'Sur devis', link: '/prospection/cold-call' },
  { title: 'Mission hybride', subtitle: 'Pour combiner campagne multicanale et prospection téléphonique.', items: ['Data + Cold Call combinés', 'Customer Success Manager dédié', 'CRM et Dashboard dédié', 'Reporting hebdomadaire'], price: 'Sur devis', badge: 'RECOMMANDÉ', link: '/contact' },
];

const StepText = ({ s }) => (
  <div>
    <p style={{ ...kicker, marginBottom: '0.4rem', fontSize: '0.7rem' }}>{s.week}</p>
    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F9FAFB', margin: '0 0 0.5rem' }}>{s.title}</p>
    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
  </div>
);

const StepImage = ({ src, label }) => (
  <div style={{ aspectRatio: '4/3', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
    <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
  </div>
);

const Timeline = () => (
  <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
    <div className="timeline-spine" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'rgba(68,204,255,0.15)', transform: 'translateX(-50%)' }} />
    {timelineSteps.map((s, i) => {
      const imageLeft = i % 2 === 0;
      return (
        <div key={i} className="timeline-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', position: 'relative', marginBottom: i === timelineSteps.length - 1 ? 0 : '6rem' }}>
          <div className="timeline-dot" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '14px', height: '14px', borderRadius: '50%', background: '#050510', border: '2px solid #44CCFF', zIndex: 2 }} />
          {imageLeft ? (
            <>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
                <StepText s={s} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <StepText s={s} />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
                <StepImage src={s.image} label={s.title} />
              </motion.div>
            </>
          )}
        </div>
      );
    })}
  </div>
);

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

export default function ProspectionColdCall() {
  useScrollReveal();
  useEffect(() => {
    document.title = "Prospection phoning B2B — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Prenez des rendez-vous qualifiés par téléphone avec un commercial B2B senior. Script construit avec vous, définition du rendez-vous qualifié, reporting hebdomadaire.");
    }
  }, []);

  return (
    <div style={{ background: '#050510', color: '#F9FAFB', minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <img src="/assets/images/campagne/prospectionteam.png" alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'rgba(5,5,16,0.35)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(105deg, rgba(5,5,16,0.97) 0%, rgba(5,5,16,0.80) 35%, rgba(5,5,16,0.40) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(to bottom, transparent, #050510)' }} />

        <div style={{ position: 'relative', zIndex: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '8%' }}>
          <p style={{ color: '#44CCFF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.12em', fontSize: '0.9rem' }}>Prospection</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '750px' }}
          >
            Des rendez-vous qualifiés<br />
            pris par téléphone
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}
          >
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#44CCFF' }}>78 %</span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', maxWidth: '260px', lineHeight: 1.3 }}>des décideurs ont déjà pris rendez-vous suite à un cold call <span style={{ color: 'rgba(255,255,255,0.35)' }}>(HubSpot)</span></span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', marginBottom: '3rem' }}
          >
            Le téléphone reste le canal le plus direct pour engager un décideur. Nos commerciaux seniors appellent vos prospects sur signal, utilisent un script validé avec vous et ne s'arrêtent qu'au rendez-vous qualifié.
          </motion.p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ backgroundColor: '#2563EB', color: '#fff', padding: '1.3rem 2.5rem', borderRadius: '0.5rem', fontWeight: 600, border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Prendre RDV
            </Link>
            <a href="#approche" style={{ background: 'transparent', color: '#44CCFF', padding: '1.3rem 2.5rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', border: '1px solid #44CCFF' }}>
              Découvrir notre approche
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="approche" style={{ padding: '80px 0', background: '#0A0A1A' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={kicker}>GESTION DES APPELS SORTANTS</p>
            <h2 style={h2Style}>Une méthode rigoureuse, pilotée avec vous</h2>
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

      {/* MÉTHODE */}
      <section style={{ padding: '80px 0' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={kicker}>MÉTHODE</p>
            <h2 style={h2Style}>Comment nous travaillons ensemble</h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* DELIVERABLES */}
      <section style={{ padding: '80px 0', background: '#0A0A1A' }}>
        <div className="container fade-in">
          <div style={{ background: '#0D0D25', border: '1px solid rgba(68,204,255,0.2)', borderRadius: '24px', padding: '3rem', overflow: 'hidden' }}>
            <p style={{ ...kicker, textAlign: 'center' }}>LIVRABLES</p>
            <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: '1.25rem' }}>Ce que vous récupérez</h2>
            <p style={{ ...chapo, textAlign: 'justify', maxWidth: '960px', margin: '0 auto 2.5rem' }}>
              Le playbook est l'espace que nous mettons à votre disposition pour récupérer l'intégralité des livrables de la mission : les résultats de nos ateliers de découverte, le script d'appel que nous vous avons partagé pour accord, et l'ensemble de notre stratégie d'approche. Ces documents vous appartiennent : vous pouvez les réutiliser pour d'autres initiatives ou les partager avec votre équipe.
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
      <section style={{ background: '#060612', padding: '60px 0 120px' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-160px', bottom: '-160px', width: '840px', height: '840px', background: 'radial-gradient(circle, rgba(68,204,255,0.55) 0%, rgba(68,204,255,0) 70%)', filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none' }} />
          <div style={{ border: '1px solid rgba(68,204,255,.1)', borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px -20px rgba(68,204,255,.15)', minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 1 }}>
            <img src={teamSquadia} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.75) saturate(1.1)', zIndex: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,18,0.75) 0%, transparent 32%, transparent 55%, rgba(6,6,18,0.92) 100%)', zIndex: 1, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2, padding: '56px 56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Prochaine étape</span>
                <p style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.1, color: '#fff', margin: '0 0 8px' }}>Rejoignez-nous :</p>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: 0 }}>Parlons de votre prospection téléphonique</h2>
              </div>
              <div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '420px', margin: '0 auto 32px' }}>30 minutes pour voir si le téléphone<br />est le bon levier pour vos rendez-vous qualifiés.</p>
                <Link href="/contact" style={{ fontSize: '1.1rem', fontWeight: 700, background: '#44CCFF', color: '#060612', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block', margin: '0 auto' }}>Prendre Rendez-Vous</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .timeline-row { grid-template-columns: 1fr !important; gap: 1.25rem !important; margin-bottom: 2.5rem !important; }
          .timeline-spine, .timeline-dot { display: none !important; }
          .deliverables-two-col { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
