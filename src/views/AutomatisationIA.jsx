'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Check, ChevronDown, ChevronUp, FileText, Target, Network, Activity, 
  RefreshCw, BarChart, PenTool, Bell, Users, Radar 
} from 'lucide-react';
import CtaSection from '../components/ui/CtaSection';
import ClientLogosSection from '../components/ui/ClientLogosSection';

const fondAutoIA = '/assets/images/automatisation/automatisationbg.jpeg';
const auto1 = '/assets/images/automatisation/auto1.webp';
const auto2 = '/assets/images/automatisation/auto2.webp';
const auto3 = '/assets/images/automatisation/auto3.webp';
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #1A1A3A', padding: '1.5rem 0' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          textAlign: 'left',
          color: '#F9FAFB',
          fontSize: '1.1rem',
          fontWeight: 700,
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <span>{question}</span>
        <ChevronDown 
          style={{ 
            transition: 'transform 0.3s ease', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: '#6B7280'
          }} 
        />
      </button>
      <div 
        style={{ 
          maxHeight: isOpen ? '500px' : '0', 
          overflow: 'hidden', 
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

const renderPrice = (priceString) => {
  let displayPrice = priceString;
  let prefix = null;
  
  if (displayPrice.startsWith('À partir de ')) {
    prefix = 'À partir de';
    displayPrice = displayPrice.replace('À partir de ', '');
  }

  return (
    <>
      {prefix && (
        <span style={{ fontSize: '1.2rem', color: '#9CA3AF', fontWeight: 400, marginRight: '0.4rem' }}>
          {prefix}
        </span>
      )}
      {displayPrice}
    </>
  );
};

const AutomatisationIA = () => {
  useEffect(() => {
    document.title = "Automatisation IA B2B : CRM, vente et marketing : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Squadia automatise vos processus commerciaux et marketing avec l'IA. Workflows documentés, mesurables, maintenables par vos équipes. Pour PME et ETI en France.");
    }
  }, []);

  const [openFAQ, setOpenFAQ] = useState(null);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 600;
    let start = null;
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const easing = -(Math.cos(Math.PI * percentage) - 1) / 2;
      window.scrollTo(0, startPosition + distance * easing);
      if (progress < duration) window.requestAnimationFrame(step);
    });
  };

  return (
    <div style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' }}>
      
      {/* SECTION 1 : HERO PREMIUM */}
      <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        
        {/* BACKGROUND */}
        <img src={fondAutoIA} alt="" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0
        }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'rgba(10,10,26,0.40)' }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(105deg, rgba(10,10,26,0.97) 0%, rgba(10,10,26,0.75) 35%, rgba(10,10,26,0.40) 60%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(to bottom, transparent, #0A0A1A)',
        }} />

        {/* TEXT CONTENT */}
        <div style={{ position: 'relative', zIndex: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '8%' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, color: '#F9FAFB', marginBottom: '1.5rem', maxWidth: '750px' }}>
            Libérez-vous de l'administratif,<br />
            Concentrez-vous sur les priorités.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', marginBottom: '3rem' }}>
            Vos équipes passent trop de temps sur des tâches répétitives qui ne génèrent rien. Squadia structure des systèmes qui tournent pendant que vos experts font leur vrai travail.
          </motion.p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/contact" style={{ backgroundColor: '#2563EB', color: '#FFFFFF', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
              Prendre RDV
            </Link>
            <a href="#forfaits" onClick={(e) => smoothScroll(e, 'forfaits')} style={{ backgroundColor: 'transparent', color: '#2563EB', border: '1px solid #2563EB', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
              Voir les forfaits
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 : CONCRÈTEMENT */}
      <section style={{ padding: '10rem 2rem', backgroundColor: '#050510', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(37,99,235,0.65) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>Ce que vous obtenez concrètement.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {[
              { icon: <FileText size={22} color="#44CCFF" />, title: 'Workflows documentés', desc: 'Six mois après la mise en place, vos équipes comprennent encore ce qui tourne et pourquoi. Tout est documenté, testé et transmissible.' },
              { icon: <Target size={22} color="#44CCFF" />, title: 'Systèmes orientés résultat', desc: "On n'automatise pas pour automatiser. Chaque workflow est construit autour d'un objectif concret : temps gagné, erreurs réduites, pipeline accéléré." },
              { icon: <Network size={22} color="#44CCFF" />, title: 'Architecture ouverte', desc: "Pas de dépendance à un seul éditeur. Les systèmes sont pensés pour évoluer avec votre stack technique, pas contre elle." },
              { icon: <Activity size={22} color="#44CCFF" />, title: 'Pilotage par KPIs', desc: "Chaque livraison inclut ses indicateurs de suivi. Vous savez exactement ce qui fonctionne et ce qui doit être optimisé." },
            ].map((item, i) => (
              <div key={i} style={{ padding: '2.5rem', background: 'linear-gradient(135deg, #0d1b35 0%, #111f3a 60%, #0a1628 100%)', border: '1px solid rgba(68,204,255,0.12)', borderRadius: '16px', transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.35)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.12)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)'; }}
              >
                <div style={{ marginBottom: '1.5rem', width: '44px', height: '44px', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(68,204,255,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.9rem', lineHeight: 1.4, color: '#F9FAFB' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, fontSize: '1rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3A : CYCLE DE VENTE (image gauche, texte droite) */}
      <section style={{ padding: '8rem 2rem', backgroundColor: '#0A0A1A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
            <img src={auto1} alt="Automatisation du cycle de vente" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Automatisation</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.25rem', lineHeight: 1.3 }}>Automatisation du cycle de vente</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
              De l'avant-vente à l'après-vente, chaque étape du cycle commercial est automatisée pour accélérer la conversion sans actions manuelles.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Avant-vente et vente</div>
                <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Qualification, scoring, prise de rendez-vous, relances multicanales.</div>
              </div>
              <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Après-vente et support</div>
                <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Relances post-RDV, suivis clients, nurturing automatisé et messages personnalisés.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3B : MARKETING & SITE WEB (texte gauche, image droite) */}
      <section style={{ padding: '8rem 2rem', backgroundColor: '#050510' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Automatisation</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.25rem', lineHeight: 1.3 }}>Automatisation marketing & site web</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
              Les signaux comportementaux de vos prospects déclenchent automatiquement les bonnes actions au moment opportun.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Interactions web</div>
                <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Téléchargements, visites clés, formulaires ou commandes déclenchent du scoring et des notifications en temps réel.</div>
              </div>
              <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Scénarios marketing</div>
                <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Campagnes, nurturing, relances et suivi des interactions selon le niveau d'engagement.</div>
              </div>
            </div>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
            <img src={auto2} alt="Automatisation marketing & site web" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* SECTION 3C : COMMUNICATION & CONTENUS (image gauche, texte droite) */}
      <section id="automatisation-communication-contenus" style={{ padding: '8rem 2rem', backgroundColor: '#0A0A1A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
            <img src={auto3} alt="Automatisation communication & contenus" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#44CCFF', marginBottom: '1rem' }}>Automatisation</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.25rem', lineHeight: 1.3 }}>Automatisation communication & contenus</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
              Créez et diffusez des contenus à grande échelle sans perdre en cohérence ni en personnalisation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Production de contenus</div>
                <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Création assistée de posts, images et vidéos générés à partir de vos données métier.</div>
              </div>
              <div style={{ borderLeft: '3px solid #44CCFF', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.35rem' }}>Personnalisation</div>
                <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Envoi automatique de messages, emails et vidéos personnalisées pour renforcer l'impact.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : FORFAITS */}
      <section id="forfaits" style={{ padding: '10rem 2rem', backgroundColor: '#050510' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>Le périmètre adapté à votre situation.</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            
            {/* Forfait 1 */}
            <div style={{ background: '#0D0D25', border: '1px solid #1A1A3A', padding: '3rem 2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 1rem 0', color: '#fff' }}>Starter</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', minHeight: '3rem', fontStyle: 'italic' }}>
                Pour automatiser un besoin ciblé avec un impact rapide.
              </p>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#fff' }}>
                  {renderPrice('À partir de 2 490 € HT')}
                </div>
              </div>

              <div style={{ flexGrow: 1, marginBottom: '2.5rem' }}>
                {[
                  "1 à 2 workflows principaux",
                  "Connecteurs standards",
                  "Documentation complète",
                  "Plan de tests et validation",
                  "Support post-installation"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '1rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>
                    <Check size={18} color="#2563EB" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center', fontWeight: 700, textDecoration: 'none' }}>
                Choisir Starter
              </Link>
            </div>

            {/* Forfait 2 (Recommandé) */}
            <div style={{ background: '#0D0D25', border: '2px solid #2563EB', padding: '3rem 2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                background: '#2563EB', color: 'white', padding: '6px 16px', borderRadius: '20px',
                fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em'
              }}>
                RECOMMANDÉ
              </div>
              
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 1rem 0', color: '#fff' }}>Scale</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', minHeight: '3rem', fontStyle: 'italic' }}>
                Pour structurer des systèmes cohérents et interconnectés.
              </p>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#fff' }}>
                  {renderPrice('À partir de 5 990 € HT')}
                </div>
              </div>

              <div style={{ flexGrow: 1, marginBottom: '2.5rem' }}>
                {[
                  "3 à 5 workflows interconnectés",
                  "Gestion d'erreurs et logs",
                  "Agents IA spécialisés",
                  "Passage de relais Humain-IA",
                  "Support expert 1 mois"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '1rem', fontSize: '0.95rem', color: '#fff' }}>
                    <Check size={18} color="#2563EB" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" style={{ background: '#2563EB', color: '#fff', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center', fontWeight: 700, textDecoration: 'none' }}>
                Choisir Scale
              </Link>
            </div>

            {/* Forfait 3 */}
            <div style={{ background: '#0D0D25', border: '1px solid #1A1A3A', padding: '3rem 2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 1rem 0', color: '#fff' }}>System</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', minHeight: '3rem', fontStyle: 'italic' }}>
                Pour déployer une architecture d'automatisation transverse.
              </p>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#fff' }}>
                  {renderPrice('Sur mesure')}
                </div>
              </div>

              <div style={{ flexGrow: 1, marginBottom: '2.5rem' }}>
                {[
                  "Architecture multi-sources",
                  "Gouvernance et sécurité",
                  "Scripts custom et intégrations API",
                  "Runbook d'exploitation",
                  "Accompagnement annuel"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '1rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>
                    <Check size={18} color="#2563EB" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center', fontWeight: 700, textDecoration: 'none' }}>
                Choisir System
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION NOUVELLE : ILS NOUS FONT CONFIANCE */}
      <ClientLogosSection />

      {/* SECTION 5 : FAQ */}
      <section style={{ padding: '10rem 2rem', maxWidth: '850px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>Questions fréquentes.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <AccordionItem 
            question="Faut-il avoir un CRM déjà en place ?" 
            answer={<>Oui, idéalement. L'automatisation connecte des briques existantes. Si votre CRM n'est pas prêt, nous pouvons vous accompagner sur la phase <Link href="/stratégie-crm" style={{ color: '#2563EB', textDecoration: 'underline' }}>Stratégie CRM</Link> au préalable.</>}
          />
          <AccordionItem 
            question="Mes équipes pourront-elles maintenir les process ?" 
            answer="C'est le coeur de notre approche. On ne livre pas une boîte noire. Chaque workflow est documenté avec un guide d'exploitation pour que vous soyez autonome à 100%."
          />
          <AccordionItem 
            question="Quels outils utilisez-vous ?" 
            answer="Make.com, Zapier, n8n, Clay et tout outil déjà présent dans votre stack. On favorise les solutions maintenables sans code, mais on ajoute des scripts custom quand la performance l'exige."
          />
          <AccordionItem 
            question="Combien de temps avant d'être opérationnel ?" 
            answer="Pour une brique Starter, comptez 2 à 3 semaines. Pour des systèmes Scale, prévoyez 4 à 8 semaines selon la complexité des intégrations."
          />
        </div>
      </section>

      {/* SECTION 6 : CTA FINAL */}
      <CtaSection
        headline="Prêt à libérer vos experts des tâches sans valeur ?"
        description="Fini le temps gaspillé sur des tâches répétitives. Vos équipes se concentrent sur ce qui génère de la valeur."
        cardTitle="Automatisation IA"
        cardSubtitle="Libérez vos équipes"
        cardDescription="Workflows documentés, mesurables et maintenables par vos équipes. Zéro dépendance externalisée."
        cardFeatures={[
          "Workflows CRM & vente",
          "Agents IA spécialisés",
          "Architecture ouverte",
          "Documentation complète"
        ]}
        cardColor="#2563EB"
      />

    </div>
  );
};

export default AutomatisationIA;
