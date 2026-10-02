'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Clock, HeartHandshake, BookOpen, Search, MousePointerClick, CalendarCheck,
  FileText, BellRing, Repeat, Check, ChevronDown, Mic, UserRound,
  Building2, CalendarDays, Megaphone, Layers, LifeBuoy, Plug, ShieldCheck, Monitor,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CtaFinalZoom from '../components/ui/CtaFinalZoom';
import { RevealHeader } from '../components/ui/RevealHeader';
import { agentVocalFaqs } from '../data/agentVocalFaqs';

const teamSquadia = '/assets/images/notremission/team-squadia.png';
const heroBackground = '/assets/images/agentvocal/agent_ia_vocal.webp';

const GREEN = '#1F3A33';
const INK = '#1C2B27';
const GOLD = '#8A6D3B';
const CREAM = '#F6F3EC';

const kicker = { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: '0.75rem' };
const h2Style = { fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: INK, lineHeight: 1.2 };
const chapo = { fontSize: '1.1rem', color: 'rgba(28,43,39,0.6)', maxWidth: '680px', lineHeight: 1.6 };
const card = { background: CREAM, border: '1px solid rgba(28,43,39,0.14)', borderRadius: '16px', padding: '1.75rem' };

// Ouvre la bulle d'Elisa (écouteur dans VoiceAgent)
const openElisa = () => window.dispatchEvent(new CustomEvent('squadia:open-elisa'));

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

/* ───────────────────────── Visuels des étapes ───────────────────────── */

const Frame = ({ children }) => (
  <div style={{
    height: '100%', borderRadius: '24px', background: `radial-gradient(120% 90% at 80% 10%, #2B4C43 0%, ${GREEN} 55%, #16302A 100%)`,
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2.5rem', boxSizing: 'border-box',
  }}>
    <div style={{ width: '100%', maxWidth: '380px' }}>{children}</div>
  </div>
);

const Panel = ({ children, style }) => (
  <div style={{ background: CREAM, borderRadius: '16px', padding: '1.1rem 1.25rem', boxShadow: '0 14px 34px rgba(0,0,0,0.22)', color: INK, ...style }}>
    {children}
  </div>
);

const Pill = ({ children, tone = 'gold' }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em',
    padding: '4px 10px', borderRadius: '999px',
    background: tone === 'gold' ? 'rgba(176,141,87,0.16)' : 'rgba(31,58,51,0.1)', color: tone === 'gold' ? GOLD : GREEN,
  }}>{children}</span>
);

const Bubble = ({ from, children }) => (
  <div style={{ display: 'flex', justifyContent: from === 'elisa' ? 'flex-start' : 'flex-end', marginBottom: '0.75rem' }}>
    <div style={{
      maxWidth: '82%', padding: '0.75rem 1rem', borderRadius: '14px', fontSize: '0.9rem', lineHeight: 1.45,
      background: from === 'elisa' ? CREAM : 'rgba(246,243,236,0.14)', color: from === 'elisa' ? INK : CREAM,
      border: from === 'elisa' ? 'none' : '1px solid rgba(246,243,236,0.25)',
    }}>
      {from === 'elisa' && <div style={{ fontSize: '0.7rem', fontWeight: 700, color: GOLD, marginBottom: '0.25rem' }}>Agent vocal</div>}
      {children}
    </div>
  </div>
);

const visuals = {
  dispo: (
    <Frame>
      <div style={{ textAlign: 'center', color: CREAM }}>
        <div style={{ fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 }}>Dimanche</div>
        <div style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1.1, margin: '0.25rem 0 1rem' }}>23:47</div>
        <Panel style={{ textAlign: 'left' }}>
          <Pill tone="green">● En ligne</Pill>
          <p style={{ margin: '0.7rem 0 0', fontSize: '0.9rem' }}>Un visiteur arrive depuis votre newsletter. L'agent l'accueille, de vive voix.</p>
        </Panel>
      </div>
    </Frame>
  ),
  empathie: (
    <Frame>
      <Bubble from="visitor">Honnêtement, on n'a personne pour passer les appels…</Bubble>
      <Bubble from="elisa">Je comprends, c'est très courant. Regardez, nos commerciaux s'en chargent pour vous.</Bubble>
      <Bubble from="visitor">Ah, ça m'intéresse.</Bubble>
    </Frame>
  ),
  savoir: (
    <Frame>
      {[
        { Icon: BookOpen, t: 'Base de connaissances', d: 'Offres, tarifs, cas clients, FAQ' },
        { Icon: FileText, t: 'Éléments techniques', d: 'Fiches produit, spécifications, prérequis' },
        { Icon: HeartHandshake, t: 'Méthode de vente', d: 'Questions de découverte, objections, arguments' },
      ].map(({ Icon, t, d }, i) => (
        <Panel key={t} style={{ display: 'flex', gap: '0.9rem', alignItems: 'center', marginBottom: i < 2 ? '0.8rem' : 0, marginLeft: `${i * 18}px` }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(176,141,87,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={18} color={GOLD} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{t}</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(28,43,39,0.6)' }}>{d}</div>
          </div>
        </Panel>
      ))}
    </Frame>
  ),
  recherche: (
    <Frame>
      <Panel style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
        <Search size={16} color={GOLD} />
        <span style={{ fontSize: '0.88rem', color: 'rgba(28,43,39,0.7)' }}>actualité de l'entreprise du visiteur</span>
      </Panel>
      <Panel>
        <Pill>Il y a 3 semaines</Pill>
        <p style={{ margin: '0.6rem 0 0.4rem', fontWeight: 700, fontSize: '0.95rem' }}>Lancement d'une nouvelle gamme sur le marché européen</p>
        <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(28,43,39,0.6)' }}>Reprise dans la conversation : « J'ai vu passer votre lancement en Europe, c'est bien ça ? »</p>
      </Panel>
    </Frame>
  ),
  visite: (
    <Frame>
      <div style={{ background: CREAM, borderRadius: '14px', overflow: 'hidden', boxShadow: '0 14px 34px rgba(0,0,0,0.22)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0.6rem 0.8rem', borderBottom: '1px solid rgba(28,43,39,0.1)' }}>
          {['#D8D1C2', '#D8D1C2', '#D8D1C2'].map((c, i) => <span key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
          <span style={{ marginLeft: '0.6rem', fontSize: '0.72rem', color: 'rgba(28,43,39,0.55)' }}>votre-site.fr/offres/</span>
        </div>
        <div style={{ padding: '1rem' }}>
          <div style={{ height: 10, width: '55%', background: 'rgba(28,43,39,0.15)', borderRadius: 6, marginBottom: 10 }} />
          <div style={{ height: 8, width: '85%', background: 'rgba(28,43,39,0.08)', borderRadius: 6, marginBottom: 16 }} />
          <motion.div
            animate={{ boxShadow: ['0 0 0 0 rgba(176,141,87,0)', '0 0 0 8px rgba(176,141,87,0.25)', '0 0 0 0 rgba(176,141,87,0)'] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            style={{ borderRadius: 10, padding: '0.8rem', background: 'rgba(176,141,87,0.12)', border: '1px solid rgba(176,141,87,0.5)' }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: GOLD, marginBottom: 6 }}>Ce que vous obtenez concrètement</div>
            <div style={{ height: 7, width: '90%', background: 'rgba(28,43,39,0.12)', borderRadius: 6, marginBottom: 6 }} />
            <div style={{ height: 7, width: '70%', background: 'rgba(28,43,39,0.12)', borderRadius: 6 }} />
          </motion.div>
          <div style={{ height: 8, width: '75%', background: 'rgba(28,43,39,0.08)', borderRadius: 6, marginTop: 16 }} />
        </div>
      </div>
      <p style={{ color: 'rgba(246,243,236,0.75)', fontSize: '0.82rem', textAlign: 'center', margin: '0.9rem 0 0' }}>« Regardez, juste là… » : la page s'ouvre sur la bonne section.</p>
    </Frame>
  ),
  rdv: (
    <Frame>
      <Panel>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
          <CalendarCheck size={18} color={GOLD} />
          <span style={{ fontWeight: 700 }}>Meeting découverte</span>
        </div>
        <div style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(28,43,39,0.75)' }}>
          Vendredi · 9 h 30 – 10 h 15<br />Visio · avec votre consultant
        </div>
      </Panel>
      <Panel style={{ marginTop: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <Check size={16} color={GREEN} />
        <span style={{ fontSize: '0.88rem' }}>Invitation et email de confirmation envoyés</span>
      </Panel>
    </Frame>
  ),
  crm: (
    <Frame>
      <Panel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.7rem' }}>
          <span style={{ fontWeight: 700 }}>Fiche contact · CRM</span>
          <Pill tone="green">Mis à jour</Pill>
        </div>
        <div style={{ fontSize: '0.82rem', color: 'rgba(28,43,39,0.55)', marginBottom: '0.3rem' }}>Résumé de l'échange</div>
        <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.55 }}>Directeur marketing, lance un nouveau produit. Cherche à générer des rendez-vous sans équipe d'appel. RDV pris vendredi 9 h 30.</p>
      </Panel>
    </Frame>
  ),
  rappel: (
    <Frame>
      <Panel style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(176,141,87,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <BellRing size={18} color={GOLD} />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Rappeler le contact</div>
          <div style={{ fontSize: '0.82rem', color: 'rgba(28,43,39,0.6)', marginTop: 2 }}>Dans 2 jours · assignée au commercial du secteur</div>
        </div>
      </Panel>
      <Panel style={{ marginTop: '0.8rem', marginLeft: '24px', opacity: 0.85 }}>
        <div style={{ fontSize: '0.85rem' }}>Créée automatiquement à la fin de l'appel</div>
      </Panel>
    </Frame>
  ),
  nurturing: (
    <Frame>
      <Panel style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
        <span style={{ fontWeight: 700 }}>Score d'intérêt</span>
        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: GOLD }}>72<span style={{ fontSize: '0.8rem', color: 'rgba(28,43,39,0.5)' }}>/100</span></span>
      </Panel>
      <Panel>
        <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.7rem' }}>Séquence de nurturing</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {['J+1', 'J+5', 'J+12', 'J+21'].map((d, i) => (
            <React.Fragment key={d}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '6px 9px', borderRadius: 8, background: i === 0 ? GREEN : 'rgba(31,58,51,0.08)', color: i === 0 ? CREAM : GREEN }}>{d}</span>
              {i < 3 && <span style={{ flex: 1, height: 2, background: 'rgba(31,58,51,0.15)' }} />}
            </React.Fragment>
          ))}
        </div>
      </Panel>
    </Frame>
  ),
};

/* ───────────────────────── Pendant / après l'appel ───────────────────────── */

const storySteps = [
  { phase: "Pendant l'appel", Icon: Clock, title: 'Disponible 24 h/24, 7 j/7', desc: "Soirs, week-ends, pics de trafic : chaque visiteur est accueilli de vive voix, au moment où il a une question. Pas de formulaire, pas d'attente.", visual: visuals.dispo },
  { phase: "Pendant l'appel", Icon: HeartHandshake, title: 'Toujours patiente, toujours empathique', desc: "Elle écoute, reformule, s'adapte au rythme de chacun. Jamais de mauvaise journée, jamais pressée de raccrocher.", visual: visuals.empathie },
  { phase: "Pendant l'appel", Icon: BookOpen, title: 'Votre savoir, pas celui d’Internet', desc: "Elle s'appuie sur ce que vous lui confiez : base de connaissances, éléments techniques, méthode de vente. Si l'information manque, elle propose d'en parler avec votre équipe plutôt que d'inventer.", visual: visuals.savoir },
  { phase: "Pendant l'appel", Icon: Search, title: 'Elle se renseigne en direct', desc: "Pendant l'appel, elle consulte le web, par exemple l'actualité de l'entreprise de votre visiteur, pour engager la conversation sur ce qui le concerne.", visual: visuals.recherche },
  { phase: "Pendant l'appel", Icon: MousePointerClick, title: 'Elle fait visiter votre site', desc: "Elle change de page, descend jusqu'à la bonne section et la met en évidence, sans couper la conversation. Votre visiteur voit exactement ce dont elle parle.", visual: visuals.visite },
  { phase: "Pendant l'appel", Icon: CalendarCheck, title: 'Elle prend le rendez-vous', desc: "Elle propose de vrais créneaux libres de votre agenda, réserve, et l'invitation part par email dans la foulée.", visual: visuals.rdv },
  { phase: "Après l'appel", Icon: FileText, title: "Le résumé arrive dans votre CRM", desc: "Rôle, besoin, actualité de l'entreprise, rendez-vous : votre commercial sait tout avant même de décrocher.", visual: visuals.crm },
  { phase: "Après l'appel", Icon: BellRing, title: 'Une tâche de rappel se crée toute seule', desc: "Pas de rendez-vous ce jour-là ? Une relance est planifiée et assignée au bon commercial, automatiquement.", visual: visuals.rappel },
  { phase: "Après l'appel", Icon: Repeat, title: 'Le contact entre en nurturing', desc: "Selon son intérêt, avec ou sans scoring, il rejoint la bonne séquence. Rien ne se perd entre deux échanges.", visual: visuals.nurturing },
];

const StepText = ({ step }) => (
  <div>
    <p style={{ ...kicker, marginBottom: '1rem' }}>{step.phase}</p>
    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(176,141,87,0.1)', border: '1px solid rgba(176,141,87,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
      <step.Icon size={22} color={GOLD} />
    </div>
    <h3 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: 700, color: INK, lineHeight: 1.2, margin: '0 0 1rem' }}>{step.title}</h3>
    <p style={{ fontSize: '1.05rem', color: 'rgba(28,43,39,0.65)', lineHeight: 1.65, margin: 0, maxWidth: '460px' }}>{step.desc}</p>
  </div>
);

// Texte à gauche en fondu, visuels empilés à droite qui montent d'un cran à chaque étape
const CallStory = () => {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(storySteps.length - 1, Math.max(0, Math.floor(v * storySteps.length))));
  });

  if (isMobile) {
    return (
      <div className="container" style={{ display: 'grid', gap: '3rem', padding: '0 1.25rem' }}>
        {storySteps.map((step) => (
          <div key={step.title}>
            <StepText step={step} />
            <div style={{ height: 320, marginTop: '1.5rem' }}>{step.visual}</div>
          </div>
        ))}
      </div>
    );
  }

  const phaseStart = storySteps.findIndex((s) => s.phase === "Après l'appel");
  return (
    <div ref={ref} style={{ height: `${storySteps.length * 75}vh`, position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%' }}>
          <div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '2.5rem' }}>
              {storySteps.map((s, i) => (
                <span key={s.title} style={{
                  height: 4, flex: 1, borderRadius: 4, transition: 'background 0.3s ease',
                  background: i <= active ? (i >= phaseStart ? GOLD : GREEN) : 'rgba(28,43,39,0.12)',
                }} />
              ))}
            </div>
            <div style={{ position: 'relative', minHeight: 330 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <StepText step={storySteps[active]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div style={{ height: '62vh', maxHeight: 520, overflow: 'hidden', borderRadius: '24px' }}>
            <motion.div
              animate={{ y: `-${active * 100}%` }}
              transition={{ type: 'spring', stiffness: 70, damping: 18 }}
              style={{ height: '100%' }}
            >
              {storySteps.map((step) => (
                <div key={step.title} style={{ height: '100%' }}>{step.visual}</div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────── Données des sections ───────────────────────── */

const frictions = [
  { title: 'Ils repartent sans demander', desc: "Vos visiteurs ont des questions. Très peu remplissent un formulaire pour les poser." },
  { title: 'Le formulaire fait attendre', desc: 'Réponse sous 24 h : entre-temps, le prospect a refroidi, ou il est chez un concurrent.' },
  { title: 'La bonne page est introuvable', desc: "Vos offres sont riches. Votre visiteur, lui, ne sait pas par où commencer." },
  { title: 'Le chatbot répond à côté', desc: 'Des réponses toutes faites, en texte, qui ne connaissent ni votre métier ni votre façon de vendre.' },
];

const useCases = [
  { Icon: Building2, title: 'Votre site B2B', short: 'Accueil, qualification et prise de rendez-vous, 24 h/24.', details: "L'agent répond aux questions sur vos offres, oriente vers la bonne page, qualifie le besoin avec vos questions de découverte et réserve le rendez-vous avec le bon interlocuteur." },
  { Icon: CalendarDays, title: 'Votre événement phare', short: 'Summit, salon, convention : guider des centaines de participants.', details: "Avant et pendant l'événement, l'agent répond à tous : accès, plan, stands, programme, animations, inscriptions aux ateliers. Vos équipes se concentrent sur l'accueil, pas sur les mêmes questions répétées cent fois." },
  { Icon: Megaphone, title: 'Après vos campagnes', short: "La page d'arrivée où la conversation continue.", details: "Le lien de votre email ou de votre publicité mène vers une page où l'agent sait de quelle campagne vient le visiteur et reprend le sujet du message, au lieu de repartir de zéro." },
  { Icon: Layers, title: 'Une offre riche ou un catalogue', short: 'Orienter vers la bonne offre et comparer.', details: "Formations, gammes, services : l'agent pose deux ou trois questions, recommande l'offre adaptée, l'affiche et explique les différences avec les autres options." },
  { Icon: LifeBuoy, title: 'Vos clients', short: 'Prise en main, support de premier niveau, documentation.', details: "L'agent accompagne vos clients dans votre documentation ou votre produit, répond aux questions fréquentes et passe la main à votre équipe quand c'est nécessaire." },
];

const methodSteps = [
  { title: 'Cadrage', desc: 'Objectifs, parcours visés, indicateurs de réussite. On définit ce que l’agent doit accomplir, et ce qu’il ne doit jamais faire.' },
  { title: 'Base de connaissances et guide de visite', desc: "On structure ce qu'il sait et ce qu'il montre : offres, arguments, objections, sections du site à mettre en avant." },
  { title: 'Personnalité et voix', desc: 'Script, ton, phrases clés. Voix standard, ou double de la voix de votre dirigeant.' },
  { title: 'Intégrations', desc: 'Agenda, CRM, n8n, nurturing, scoring : on branche l’agent sur vos outils et on coordonne le tout.' },
  { title: 'Réglages sur de vraies conversations', desc: 'On écoute les premiers appels, on corrige le ton, le rythme, les enchaînements. C’est là que tout se joue.' },
  { title: 'Mise en ligne et suivi', desc: 'Analyse mensuelle des échanges, mises à jour de la base, nouvelles idées d’automatisation.' },
];

const prerequisites = [
  { Icon: Plug, title: 'Compatible avec votre site', desc: "WordPress, Webflow, Wix, Shopify ou site sur-mesure : l'agent s'installe en une ligne de code." },
  { Icon: Monitor, title: 'Visite guidée sans coupure', desc: "Changer de page sans couper la conversation demande un site moderne de type application. Sinon, on réalise un audit technique et on vous propose l'alternative adaptée." },
  { Icon: ShieldCheck, title: 'RGPD et AI Act intégrés', desc: "Information du visiteur, nature IA annoncée, durées de conservation, mentions légales : la conformité fait partie de la mise en place." },
];

const pricingCards = [
  {
    title: 'Mise en place', subtitle: 'Pour lancer votre agent vocal sur votre site.', price: 'À partir de 2 990 € HT', subPrice: 'Périmètre ajusté au cadrage.', badge: 'POUR DÉMARRER',
    items: ['Cadrage et parcours', 'Base de connaissances et guide de visite', 'Personnalité et voix', 'Agenda et prise de rendez-vous', 'Réglages sur les premiers appels et mise en ligne'],
  },
  {
    title: 'Suivi mensuel', subtitle: 'Pour faire progresser l’agent dans la durée.', price: 'À partir de 490 € HT / mois', subPrice: 'Minutes de conversation refacturées au réel.',
    items: ['Analyse mensuelle des conversations', 'Réglages du ton et des enchaînements', 'Mises à jour de la base de connaissances', 'Rapport : appels, entreprises, rendez-vous'],
  },
  {
    title: 'Options', subtitle: 'Pour aller plus loin.', price: 'Sur devis',
    items: ['Double de la voix de votre dirigeant', 'Intégration CRM, tâches de rappel, nurturing', 'Scoring des contacts', 'Parcours reconnu pour vos contacts'],
  },
];

const faqs = agentVocalFaqs.map(({ question, answer }) => ({ q: question, a: answer }));

/* ───────────────────────── Sous-composants ───────────────────────── */

const formatPrice = (price) => {
  let display = price;
  let prefix = null;
  let suffix = null;
  if (display.startsWith('À partir de ')) { prefix = 'À partir de'; display = display.replace('À partir de ', ''); }
  if (display.endsWith(' / mois')) { suffix = '/ mois'; display = display.replace(' / mois', ''); }
  return (
    <>
      {prefix && <span style={{ fontSize: '1.2rem', color: '#4A534F', fontWeight: 400, marginRight: '0.4rem' }}>{prefix}</span>}
      <span style={{ fontWeight: 400 }}>{display}</span>
      {suffix && <span style={{ fontSize: '0.85rem', color: '#4A534F', fontWeight: 400, marginLeft: '0.2rem' }}>{suffix}</span>}
    </>
  );
};

const UseCaseCard = ({ uc, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="usecase-card"
      style={{ ...card, background: '#FFFFFF', border: '1px solid #D8D1C2', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s ease, transform 0.3s ease' }}
    >
      <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(176,141,87,0.08)', border: '1px solid rgba(176,141,87,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
        <uc.Icon size={20} color={GOLD} />
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: INK, margin: '0 0 0.5rem' }}>{uc.title}</h3>
      <p style={{ fontSize: '0.92rem', color: 'rgba(28,43,39,0.65)', lineHeight: 1.6, margin: 0 }}>{uc.short}</p>
      <div style={{ maxHeight: open ? '320px' : 0, opacity: open ? 1 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease, opacity 0.3s ease' }}>
        <p style={{ fontSize: '0.9rem', color: 'rgba(28,43,39,0.6)', lineHeight: 1.65, margin: '0.9rem 0 0' }}>{uc.details}</p>
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ marginTop: 'auto', paddingTop: '1rem', background: 'none', border: 'none', color: GOLD, fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', alignSelf: 'flex-start', padding: '1rem 0 0' }}
      >
        {open ? 'Masquer' : 'Détails'}
        <ChevronDown size={16} style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
    </motion.div>
  );
};

// Orbe vocal de l'accroche : anneaux qui respirent et barres d'onde, posé sur l'image de fond
const VoiceOrb = () => (
  <div style={{ position: 'relative', width: 'min(420px, 80vw)', aspectRatio: '1', margin: '0 auto' }}>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        animate={{ scale: [1, 1.08, 1], opacity: [0.55 - i * 0.12, 0.2, 0.55 - i * 0.12] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: `${i * 11}%`, borderRadius: '50%', border: '1.5px solid rgba(212,185,138,0.9)' }}
      />
    ))}
    <div style={{ position: 'absolute', inset: '30%', borderRadius: '50%', background: `radial-gradient(circle at 35% 30%, #2B4C43, ${GREEN} 60%, #16302A)`, boxShadow: '0 24px 50px rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
      {[0.5, 0.9, 0.6, 1, 0.7, 0.4, 0.8].map((h, i) => (
        <motion.span
          key={i}
          animate={{ scaleY: [h * 0.4, h, h * 0.5] }}
          transition={{ duration: 0.9 + i * 0.07, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          style={{ width: 6, height: 54, borderRadius: 4, background: i % 3 === 1 ? '#B08D57' : CREAM, transformOrigin: 'center' }}
        />
      ))}
    </div>
  </div>
);

/* ───────────────────────── Page ───────────────────────── */

export default function AgentVocalIA() {
  useScrollReveal();
  const isMobile = useIsMobile();
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    document.title = "Agent vocal IA pour site B2B : visite guidée et RDV — Squadia";
  }, []);

  return (
    <div style={{ background: CREAM, color: INK, minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        {/* Fond : même traitement que les pages Data et Prospection */}
        <img src={heroBackground} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '78% center', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'rgba(246,243,236,0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(105deg, rgba(246,243,236,0.97) 0%, rgba(246,243,236,0.75) 35%, rgba(246,243,236,0.4) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(to bottom, transparent, #F6F3EC)' }} />

        <div className="container hero-grid" style={{ position: 'relative', zIndex: 4, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center', padding: '140px 0 80px' }}>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, color: INK, marginBottom: '1.5rem', maxWidth: '640px' }}
            >
              <span style={{ display: 'block', color: GOLD, fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.12em', fontSize: '0.9rem', lineHeight: 1.4 }}>Agent vocal IA</span>
              <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}> : </span>
              Votre site parle, guide{' '}<br />et prend rendez-vous.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: GOLD }}>24/7</span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(28,43,39,0.6)', maxWidth: '170px', lineHeight: 1.3 }}>disponible, soirs et week-ends compris</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: GOLD }}>0,7 s</span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(28,43,39,0.6)', maxWidth: '200px', lineHeight: 1.3 }}>pour afficher la bonne page pendant la conversation <span style={{ whiteSpace: 'nowrap' }}>(mesuré sur ce site)</span></span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              style={{ fontSize: '1.2rem', color: 'rgba(28,43,39,0.78)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6 }}
            >
              Un agent vocal IA qui accueille vos visiteurs de vive voix, les guide de page en page et les invite à prendre rendez-vous avec vous. 24 h/24, 7 j/7.
            </motion.p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {!isMobile && (
                <button type="button" onClick={openElisa} style={{ backgroundColor: GREEN, color: CREAM, padding: '1.2rem 2.2rem', borderRadius: '0.5rem', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
                  <Mic size={18} /> Parlez-lui maintenant
                </button>
              )}
              <Link href="/contact" style={{ background: 'transparent', color: GOLD, padding: '1.2rem 2.2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', border: '1px solid #B08D57' }}>
                Prendre RDV
              </Link>
            </div>
            {isMobile && <p style={{ fontSize: '0.85rem', color: 'rgba(28,43,39,0.55)', marginTop: '1rem' }}>La démonstration en direct est disponible sur ordinateur.</p>}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2 }}>
            <VoiceOrb />
          </motion.div>
        </div>
      </section>

      {/* CONSTAT */}
      <section style={{ padding: '80px 0' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={kicker}>LE CONSTAT</p>
            <h2 style={h2Style}>Votre site attire. Il ne converse pas.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {frictions.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: i * 0.08 }} style={card}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: INK, margin: '0 0 0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(28,43,39,0.6)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉMO EN DIRECT */}
      <section id="demo" style={{ padding: '40px 0 100px' }}>
        <div className="container fade-in">
          <div className="demo-box" style={{ background: GREEN, color: CREAM, borderRadius: '28px', padding: 'clamp(2rem, 5vw, 4rem)', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ ...kicker, color: '#D4B98A' }}>DÉMONSTRATION EN DIRECT</p>
              <h2 style={{ ...h2Style, color: CREAM, marginBottom: '1.25rem' }}>Vous êtes déjà en train de la tester.</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(246,243,236,0.8)', margin: '0 0 1.5rem' }}>
                Elisa, notre agent vocal, est sur cette page. Elle sait où vous êtes, peut vous faire visiter le site sans couper la conversation, retrouve l'actualité de votre entreprise et réserve un vrai créneau dans notre agenda.
              </p>
              {!isMobile ? (
                <button type="button" onClick={openElisa} style={{ background: CREAM, color: GREEN, padding: '1rem 1.8rem', borderRadius: '0.5rem', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <Mic size={18} /> Parler avec Elisa
                </button>
              ) : (
                <p style={{ fontSize: '0.9rem', color: 'rgba(246,243,236,0.7)', margin: 0 }}>Ouvrez cette page sur ordinateur pour lui parler.</p>
              )}
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D4B98A', margin: '0 0 0.9rem' }}>Essayez de lui dire</p>
              {['« Montrez-moi vos tarifs. »', '« Vous faites aussi de la prospection ? »', '« Je voudrais un rendez-vous jeudi. »', '« Je peux avoir la même chose sur mon site ? »'].map((t) => (
                <div key={t} style={{ background: 'rgba(246,243,236,0.08)', border: '1px solid rgba(246,243,236,0.18)', borderRadius: '12px', padding: '0.8rem 1rem', marginBottom: '0.6rem', fontSize: '0.95rem' }}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PENDANT / APRÈS L'APPEL */}
      <section style={{ paddingTop: '60px' }}>
        <div className="container fade-in" style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : 0 }}>
          <p style={kicker}>CE QU'ELLE FAIT</p>
          <h2 style={h2Style}>Pendant l'appel, et juste après</h2>
        </div>
        <CallStory />
      </section>

      {/* OPTIONS : VOIX ET PARCOURS RECONNU */}
      <section style={{ padding: '100px 0 80px' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={kicker}>ALLER PLUS LOIN</p>
            <h2 style={h2Style}>Une voix et un accueil à votre image</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <div style={{ ...card, padding: '2.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(176,141,87,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <UserRound size={22} color={GOLD} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem' }}>La voix de votre dirigeant</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(28,43,39,0.68)', lineHeight: 1.65, margin: '0 0 1rem' }}>
                Une personne de l'entreprise, votre CEO par exemple, crée un double de sa voix. L'agent l'utilise pour discuter avec les visiteurs du site : votre incarnation, votre ton, à toute heure.
              </p>
              <p style={{ fontSize: '0.82rem', color: 'rgba(28,43,39,0.5)', lineHeight: 1.55, margin: 0 }}>
                Réalisé avec l'accord écrit de la personne. L'agent précise qu'il s'agit d'une voix générée par IA, comme l'exige l'AI Act.
              </p>
            </div>
            <div style={{ ...card, padding: '2.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(176,141,87,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <HeartHandshake size={22} color={GOLD} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem' }}>Un parcours reconnu pour vos contacts</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(28,43,39,0.68)', lineHeight: 1.65, margin: '0 0 1rem' }}>
                Pour vos clients, vos inscrits ou vos leads entrants qui l'ont accepté : l'agent les accueille par leur prénom et reprend là où vous en étiez, sans leur reposer les mêmes questions.
              </p>
              <p style={{ fontSize: '0.82rem', color: 'rgba(28,43,39,0.5)', lineHeight: 1.55, margin: 0 }}>
                Mis en place dans le respect du RGPD et des recommandations de la CNIL sur le suivi des emails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAS D'USAGE : même bande sable que « Cas clients » sur l'accueil */}
      <section className="section-padding" style={{ backgroundColor: '#EFEAE0', borderTop: '1px solid #D8D1C2', borderBottom: '1px solid #D8D1C2', paddingTop: '7rem', paddingBottom: '7rem', marginTop: '3rem' }}>
        <div className="container fade-in">
          <RevealHeader center wrapStyle={{ marginBottom: '4rem' }} kickerText="CAS D'USAGE" title="Là où un agent vocal change la donne" titleStyle={{ marginBottom: '1.5rem' }}
            text="Un même agent, des usages très différents" textStyle={{ fontSize: '1.2rem', maxWidth: '700px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {useCases.map((uc, i) => <UseCaseCard key={uc.title} uc={uc} index={i} />)}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section style={{ padding: '80px 0' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={kicker}>MÉTHODE</p>
            <h2 style={h2Style}>Comment nous travaillons ensemble</h2>
            <p style={{ ...chapo, margin: '1rem auto 0' }}>Nous mettons en place l'agent, coordonnons vos outils et le faisons progresser sur de vraies conversations.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {methodSteps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: i * 0.06 }} style={{ ...card, display: 'flex', gap: '1.1rem' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'rgba(176,141,87,0.55)', lineHeight: 1, minWidth: '2.2rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: INK, margin: '0 0 0.45rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(28,43,39,0.6)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÉREQUIS */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container fade-in">
          <div style={{ border: '1px solid rgba(176,141,87,0.25)', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <p style={{ ...kicker, textAlign: 'center' }}>EN TOUTE TRANSPARENCE</p>
            <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: '2.5rem' }}>Les prérequis</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {prerequisites.map((p) => (
                <div key={p.title}>
                  <p.Icon size={22} color={GOLD} />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: INK, margin: '0.75rem 0 0.45rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(28,43,39,0.6)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRIX ET COMPARAISON */}
      <section style={{ padding: '80px 0' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={kicker}>COMBIEN ÇA COÛTE</p>
            <h2 style={h2Style}>Notre offre agent vocal</h2>
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {pricingCards.map((c) => (
              <div key={c.title} style={{ background: CREAM, border: c.badge ? `2px solid ${GREEN}` : '1px solid #D8D1C2', padding: isMobile ? '24px 18px' : '2.25rem 1.75rem', borderRadius: '1rem', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                {c.badge && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: GREEN, color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.68rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{c.badge}</div>
                )}
                <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0 0.75rem', color: INK }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#4A534F', marginBottom: '1.25rem', minHeight: isMobile ? 'auto' : '2.6rem' }}>{c.subtitle}</p>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '1.5rem', color: INK }}>{formatPrice(c.price)}</div>
                  {c.subPrice && <div style={{ fontSize: '0.78rem', color: '#4A534F', marginTop: '0.35rem' }}>{c.subPrice}</div>}
                </div>
                <div style={{ flexGrow: 1, marginBottom: '1.25rem' }}>
                  {c.items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '10px', marginBottom: '0.65rem', fontSize: '0.85rem', lineHeight: 1.4 }}>
                      <Check size={15} color={c.badge ? GREEN : GOLD} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(28,43,39,0.75)' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display: 'block', width: '100%', padding: '0.9rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.95rem', border: c.badge ? 'none' : '1px solid rgba(28,43,39,0.32)', background: c.badge ? GREEN : 'transparent', color: c.badge ? CREAM : INK, textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}>
                  Prendre RDV
                </Link>
              </div>
            ))}
          </div>

          {/* Comparaison avec un poste humain */}
          <div className="compare-box" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'stretch' }}>
            <div style={{ ...card, background: 'transparent' }}>
              <p style={{ ...kicker, color: 'rgba(28,43,39,0.5)' }}>Un assistant commercial</p>
              <div style={{ fontSize: '1.9rem', fontWeight: 700, color: INK }}>~ 4 500 €<span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#4A534F' }}> / mois chargés</span></div>
              <ul style={{ margin: '1rem 0 0', paddingLeft: '1.1rem', color: 'rgba(28,43,39,0.65)', lineHeight: 1.8, fontSize: '0.92rem' }}>
                <li>35 h par semaine</li>
                <li>Absent le soir, le week-end et en congés</li>
                <li>Un appel à la fois</li>
              </ul>
            </div>
            <div className="compare-vs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: GOLD, fontSize: '1.1rem' }}>vs</div>
            <div style={{ ...card, background: GREEN, color: CREAM, border: 'none' }}>
              <p style={{ ...kicker, color: '#D4B98A' }}>Un agent vocal Squadia</p>
              <div style={{ fontSize: '1.9rem', fontWeight: 700 }}>dès 490 €<span style={{ fontSize: '0.9rem', fontWeight: 400, color: 'rgba(246,243,236,0.7)' }}> / mois + minutes</span></div>
              <ul style={{ margin: '1rem 0 0', paddingLeft: '1.1rem', color: 'rgba(246,243,236,0.8)', lineHeight: 1.8, fontSize: '0.92rem' }}>
                <li>24 h/24, 7 j/7</li>
                <li>Plusieurs conversations en même temps</li>
                <li>Mise en place à partir de 2 990 € HT</li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'rgba(28,43,39,0.5)', margin: '1.25rem auto 0', maxWidth: '640px' }}>
            Un complément à vos équipes, pas un remplaçant : l'agent couvre les soirs, les week-ends et les pics de trafic, et transmet à vos commerciaux des rendez-vous préparés.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 2rem 120px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ ...h2Style, marginBottom: '3rem', textAlign: 'center' }}>Questions fréquentes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              style={{ backgroundColor: CREAM, border: '1px solid rgba(176,141,87,0.18)', borderRadius: '16px', padding: '1.6rem', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: INK, fontSize: '1.05rem', fontWeight: 600, gap: '1rem' }}>
                <span>{faq.q}</span>
                <ChevronDown style={{ transition: 'transform 0.3s ease', transform: openFAQ === idx ? 'rotate(180deg)' : 'none', color: GOLD, flexShrink: 0 }} />
              </div>
              <div style={{ maxHeight: openFAQ === idx ? '400px' : 0, overflow: 'hidden', transition: 'max-height 0.35s ease-in-out, opacity 0.3s ease', opacity: openFAQ === idx ? 1 : 0 }}>
                <div style={{ marginTop: '1.1rem', color: 'rgba(28,43,39,0.6)', lineHeight: 1.65, fontSize: '0.98rem' }}>{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaFinalZoom
        teamSquadia={teamSquadia}
        eyebrow="Prochaine étape"
        kicker="Rejoignez-nous :"
        title={<>Testez-la,<br />puis parlons de la vôtre.</>}
        description="30 minutes pour cadrer votre agent vocal : parcours, voix, outils."
      />

      <style>{`
        .usecase-card:hover { border-color: #B08D57 !important; transform: translateY(-4px); }
        @media (max-width: 900px) {
          .hero-grid, .demo-box { grid-template-columns: 1fr !important; }
          .compare-box { grid-template-columns: 1fr !important; }
          .compare-vs { padding: 0.5rem 0; }
        }
        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr !important; }
          .hero-grid { padding: 120px 0 60px !important; }
        }
      `}</style>
    </div>
  );
}
