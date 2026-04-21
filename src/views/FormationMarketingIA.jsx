'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, ChevronDown, Globe, Layout, Image, Video, Mic, Calendar, ArrowRight } from 'lucide-react';
import CtaSection from '../components/ui/CtaSection';
const bgMarketing = '/assets/images/formation/marketing.jpeg';
const imgDataClean = '/assets/images/dataclean/data-clean.jpeg';
const imgDataSeg = '/assets/images/dataseg/data-seg.jpeg';
const imgDataLead = '/assets/images/datalead/datalead.jpeg';
import CountdownCard from '../components/ui/CountdownCard';

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
          cursor: 'pointer',
          padding: 0
        }}
      >
        <span>{question}</span>
        <ChevronDown 
          style={{ 
            transition: 'transform 0.3s ease', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: '#9CA3AF'
          }} 
          size={20}
        />
      </button>
      <div 
        style={{ 
          maxHeight: isOpen ? '500px' : '0', 
          overflow: 'hidden', 
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <p style={{ marginTop: '1rem', color: '#9CA3AF', lineHeight: 1.6, fontSize: '1.05rem' }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const DayBlock = ({ title, objective, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: '#0A0A1A', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(68, 204, 255, 0.1)' }}>
      <div style={{ background: 'rgba(68, 204, 255, 0.05)', padding: '2rem 3rem', borderBottom: open ? '1px solid rgba(68, 204, 255, 0.15)' : 'none' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#44CCFF', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: open ? '0' : '1.5rem' }}><strong>Objectif :</strong> {objective}</p>
        {!open && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button onClick={() => setOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid rgba(68,204,255,0.35)', color: '#44CCFF', fontSize: '0.875rem', fontWeight: 600, padding: '10px 24px', borderRadius: '9px', cursor: 'pointer', letterSpacing: '0.04em', transition: 'background 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(68,204,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.6)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(68,204,255,0.35)'; }}
            >
              Voir le programme <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
      <div style={{ maxHeight: open ? '2000px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease-in-out' }}>
        <div style={{ padding: '3rem' }}>
          {children}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button onClick={() => setOpen(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#9CA3AF', fontSize: '0.8rem', fontWeight: 600, padding: '8px 20px', borderRadius: '9px', cursor: 'pointer', transition: 'border-color 0.15s, color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#9CA3AF'; }}
            >
              <ChevronDown size={14} style={{ transform: 'rotate(180deg)' }} /> Réduire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormationMarketingIA = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Formation Marketing & IA : Contenus et campagnes : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia forme vos équipes marketing à l'IA générative pour la création de contenu. Programme 2 jours, outils concrets, ateliers pratiques. PME et ETI.";
    }
    window.scrollTo(0, 0);
  }, []);

  const pipedriveLink = "/contact"; 

  return (
    <div className="formation-marketing-ia" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' }}>
      
      {/* ═══ SECTION 1 : HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Fond pleine page */}
        <img src={bgMarketing} alt="" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0
        }} />
        {/* Overlays pour lisibilité */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: 'rgba(10,10,26,0.50)'
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(to right, rgba(10,10,26,0.9) 0%, rgba(10,10,26,0.6) 50%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(to bottom, transparent, #0A0A1A)',
        }} />

        <div style={{ position: 'relative', zIndex: 3, paddingLeft: '8%', paddingRight: '5%', width: '100%' }}>
          <div className="fade-in" style={{ maxWidth: '750px' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '900px', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 700, color: '#FFFFFF' }}>
              Formation IA marketing : contenus, campagnes et analyse augmentés
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#9CA3AF', maxWidth: '850px', lineHeight: 1.6, marginBottom: '2rem' }}>
              Rédaction, visuels, audio et veille : l'IA révolutionne votre production de contenu. En 2 jours, apprenez à produire plus et mieux sans remplacer l'humain. Une formation 100 % opérationnelle pour maîtriser les meilleurs outils et cas d'usage concrets.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF' }}>
                <Globe size={18} color="#2563EB" />
                <span>Langues disponibles : <strong>FR : EN : ES</strong></span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-primary" style={{ background: '#2563EB', padding: '1.2rem 2.5rem', color: '#fff' }}>Prendre RDV</a>
              <a href="#programme" className="btn btn-outline" style={{ padding: '1.2rem 2.5rem' }}>Voir le programme</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 : À QUI S'ADRESSE CETTE FORMATION ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', fontWeight: 700 }}>À qui s'adresse cette formation ?</h2>
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#9CA3AF', marginBottom: '2rem' }}>
                Responsables marketing, communicants, créateurs de contenu ou dirigeants souhaitant comprendre, tester et intégrer l'intelligence artificielle dans leur production de contenu, tout en respectant le cadre légal et éthique européen.
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: '#0D1A2E', borderLeft: '4px solid #2563EB', borderRadius: '4px' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#F9FAFB' }}>
                <strong>Ce que vos équipes repartent avec :</strong> les bons réflexes, les bons outils, et une première routine de production IA opérationnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 : PROGRAMME ═══ */}
      <section id="programme" className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>Programme : 2 jours</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '3rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* JOUR 1 */}
            <DayBlock title="Jour 1 : Fondamentaux & Premiers Usages" objective="Comprendre les fondamentaux, les limites et les cadres d'usage de l'IA générative pour la création de contenu, tout en découvrant les outils clés et les bonnes pratiques de rédaction.">
              <div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Cadre juridique et éthique :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>limites, risques et responsabilités liés à l'usage de l'IA (IA Act, RGPD, biais, transparence)</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Vigilances et points de contrôle :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>biais, hallucinations, ce qu'on ne délègue pas à l'IA</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Méthode RODEV :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>rédiger avec méthode pour les emails, les posts LinkedIn : rôle, contexte, exemples, itérations</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Panorama des cas d'usage professionnels :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>communication, RH, marketing, formation</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Génération d'images, son et vidéo :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>tour d'horizon des outils (mise à jour permanente)</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Créer son premier GPT personnalisé :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>automatiser une tâche récurrente sans compétence technique</p>
                    </div>
                  </li>
                </ul>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <p style={{ color: '#F9FAFB', lineHeight: 1.6 }}>
                    <strong style={{ color: '#44CCFF' }}>Atelier pratique :</strong> Rédaction et test de prompts IA adaptés à votre activité. Mise en place d'un agent (GPT) pour mieux gérer les tâches répétitives.
                  </p>
                </div>
              </div>
            </DayBlock>

            {/* JOUR 2 */}
            <DayBlock title="Jour 2 : Production Avancée & Automatisation" objective="Appliquer les outils d'IA pour produire, structurer et automatiser des contenus multimédias, en intégrant image, vidéo, podcast et veille intelligente dans une logique de campagne complète.">
              <div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Génération d'images :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>choisir les bons outils, maîtriser les prompts visuels (angle, style, couleurs), retouche et recadrage IA</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Génération de vidéos :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>UGC, communication interne, fidélisation : création de votre avatar vidéo</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Création de podcasts IA :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>dynamiser son contenu sans studio</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Organisation et suivi de production :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>plan d'action, budget, calendrier, suivi via Notion</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Industrialisation de la veille :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>veille commerciale, technologique, concurrentielle : automatisée et à la demande</p>
                    </div>
                  </li>
                </ul>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <p style={{ color: '#F9FAFB', lineHeight: 1.6 }}>
                    <strong style={{ color: '#44CCFF' }}>Atelier pratique :</strong> Création d'une double vidéo. Création d'un podcast en ligne. Prise en main des outils de génération de présentations avec IA. Découverte des outils d'automatisation et de veille.
                  </p>
                </div>
              </div>
            </DayBlock>
          </div>
          {/* STICKY CARD */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <CountdownCard
              title="Formation IA marketing : contenus, campagnes et analyse augmentés."
              dateStart={new Date('2026-06-16')}
              dateLabel="16 & 17 Juin 2026"
              image={bgMarketing}
            />
          </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 : MODALITÉS ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>Formation et suivi</h2>
          <div style={{ background: '#0D1A2E', borderRadius: '24px', padding: '4rem', border: '1px solid rgba(37, 99, 235, 0.1)', position: 'relative', maxWidth: '900px', marginInline: 'auto' }}>
            <div className="grid-2" style={{ gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Durée</span>
                  <span style={{ fontWeight: 700 }}>2 jours</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Référence</span>
                  <span style={{ fontWeight: 700 }}>T-MKT01</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Suivi post-training</span>
                  <span style={{ fontWeight: 700 }}>1 heure en visio</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Langues</span>
                  <span style={{ fontWeight: 700 }}>FR : EN : ES</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'stretch' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ color: '#9CA3AF', fontSize: '0.8rem', marginBottom: '0.4rem' }}>Tarif Inter</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>1 200 € HT / pers.</div>
                </div>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid #2563EB', flex: 1, position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ position: 'absolute', top: '-11px', right: '12px', background: '#2563EB', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700 }}>RECOMMANDÉ</div>
                  <div style={{ color: '#9CA3AF', fontSize: '0.8rem', marginBottom: '0.4rem' }}>Tarif Intra</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>4 390 € HT / groupe</div>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '3rem', color: '#6B7280', fontSize: '0.9rem', textAlign: 'center' }}>
              Note : Tarifs HT, périmètre et objectifs cadrés ensemble avant tout démarrage.
            </p>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <a href={pipedriveLink} className="btn btn-primary" style={{ background: '#2563EB', padding: '1rem 3rem' }}>Nous contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 : BLOC DE RENVOI ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '3rem', fontWeight: 700, textAlign: 'center' }}>Vous formez vos équipes. Et ensuite ?</h2>
          <p style={{ fontSize: '1.2rem', color: '#9CA3AF', maxWidth: '800px', marginInline: 'auto', marginBottom: '4rem', textAlign: 'center' }}>
            Une équipe formée sur les outils IA marketing, c'est le point de départ. Pour que vos campagnes performent vraiment, il faut une base de données fiable, segmentée et enrichie : Squadia intervient sur les trois niveaux.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>

            {/* Carte 1 : Data Clean */}
            <div style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={imgDataClean} alt="Data Clean" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(17,17,30,0.85))' }} />
              </div>
              <div style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem', color: '#F9FAFB' }}>Nettoyez votre base</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', lineHeight: 1.7, flexGrow: 1 }}>Doublons supprimés, champs normalisés, données manquantes comblées : une base propre pour que vos campagnes touchent les bonnes personnes.</p>
                <Link href="/data/data-clean" style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#3B82F6', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  Voir Data Clean <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Carte 2 : Data Seg */}
            <div style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={imgDataSeg} alt="Data Seg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(17,17,30,0.85))' }} />
              </div>
              <div style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem', color: '#F9FAFB' }}>Segmentez pour mieux cibler</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', lineHeight: 1.7, flexGrow: 1 }}>Créez des segments actionnables par secteur, taille, comportement ou stade du cycle : pour personnaliser chaque message et maximiser l'engagement.</p>
                <Link href="/data/data-seg" style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#3B82F6', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  Voir Data Seg <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Carte 3 : Data Lead */}
            <div style={{ backgroundColor: '#11111E', border: '1px solid #1A1A2E', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={imgDataLead} alt="Data Lead" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,26,0.2), rgba(17,17,30,0.85))' }} />
              </div>
              <div style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem', color: '#F9FAFB' }}>Enrichissez vos prospects</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', lineHeight: 1.7, flexGrow: 1 }}>Identifiez vos prospects à fort potentiel, enrichissez leurs profils et alimentez vos campagnes avec des données fraîches et qualifiées.</p>
                <Link href="/data/data-lead" style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: '#3B82F6', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  Voir Data Lead <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 : FAQ ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <div style={{ maxWidth: '800px', marginInline: 'auto' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>Questions fréquentes</h2>
            <div>
              <AccordionItem 
                question="Faut-il avoir des compétences techniques pour suivre cette formation ?" 
                answer="Non. Les outils utilisés sont accessibles sans développement ni code. L'objectif est de rendre les équipes autonomes sur des outils qu'elles peuvent utiliser dès le lendemain."
              />
              <AccordionItem 
                question="Quels outils sont utilisés pendant la formation ?" 
                answer="Les outils varient selon l'évolution rapide du marché IA. On travaille avec les outils les plus pertinents au moment de la session : génération de texte, image, vidéo, podcast, veille. La sélection est mise à jour régulièrement."
              />
              <AccordionItem 
                question="Cette formation est-elle adaptée aux petites équipes marketing ?" 
                answer="Oui. Elle est conçue pour des profils opérationnels, pas des experts. Une personne seule ou une petite équipe de 2 à 3 personnes peut suivre et repartir avec des pratiques directement applicables."
              />
              <AccordionItem 
                question="Le cadre légal est-il vraiment abordé ?" 
                answer="Oui, dès le Jour 1. IA Act, RGPD, droits d'auteur, transparence : les points essentiels sont couverts de façon pratique, pas théorique."
              />
              <AccordionItem 
                question="Quelle différence avec la formation Communication & IA ?" 
                answer="La formation Marketing & IA est centrée sur la production de contenu, les campagnes et la performance. La formation Communication & IA est plus orientée message, positionnement et ligne éditoriale. Les deux sont complémentaires pour des organisations où marketing et communication sont séparés."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 : CTA FINAL ═══ */}
      <CtaSection
        headline="Prêt à accélérer la production de vos équipes marketing avec l'IA ?"
        description="Texte, images, vidéos, podcasts, veille : formez vos équipes aux outils qui multiplient la capacité de production sans sacrifier la qualité."
        cardTitle="Marketing & IA"
        cardSubtitle="Production de contenu accélérée"
        cardDescription="2 jours pour maîtriser l'IA générative appliquée au marketing : création, campagnes, automatisation."
        cardFeatures={[
          "Génération d'images & vidéos",
          "Podcasts IA",
          "Veille automatisée",
          "Plan de contenu opérationnel"
        ]}
        cardColor="#2563EB"
      />

    </div>
  );
};

export default FormationMarketingIA;

