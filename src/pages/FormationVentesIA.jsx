import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, ChevronDown, Globe, Target, Users, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import CtaSection from '../components/ui/CtaSection';
import bgCommercial from '../assets/images/formation/commercial.png';
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

const FormationVentesIA = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Formation IA vente B2B : prospecter, qualifier et closer autrement. — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia forme vos équipes commerciales aux fondamentaux de la vente complexe et aux outils IA qui font la différence sur le terrain. Programme 2 jours, adapté aux profils mixtes juniors / seniors.";
    }
    window.scrollTo(0, 0);
  }, []);

  const pipedriveLink = "/contact"; // Standard project link

  return (
    <div className="formation-ventes-ia" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' }}>
      
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Fond pleine page */}
        <img src={bgCommercial} alt="" style={{
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

        <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="fade-in" style={{ maxWidth: '850px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Formation IA vente B2B : prospecter, qualifier et closer autrement.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              En vente B2B complexe, ce qui fait la différence ne se joue plus seulement sur le produit ou le prix. Ça se joue sur la préparation, la posture, la capacité à lire un compte avant d'y entrer — et à produire quelque chose de convaincant dans la foulée d'un rendez-vous. Ce programme de 2 jours combine fondamentaux de la vente complexe, plan de compte structuré et outils IA concrets. Pas pour remplacer le commercial, mais pour lui donner un avantage réel sur chaque deal.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 500 }}>
                <Globe size={18} color="#44CCFF" />
                <span>Langues disponibles : <strong style={{ color: '#FFFFFF' }}>FR — EN — ES</strong></span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn" style={{ background: '#2563EB', padding: '1.2rem 2.8rem', color: '#fff', borderRadius: '8px', fontWeight: 700, fontSize: '1.05rem', boxShadow: '0 10px 20px rgba(37,99,235,0.2)' }}>Prendre RDV</a>
              <a href="#programme" className="btn btn-outline" style={{ padding: '1.2rem 2.8rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.05rem', backdropFilter: 'blur(8px)' }}>Voir le programme</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — À QUI S'ADRESSE CETTE FORMATION ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 700 }}>À qui s'adresse cette formation ?</h2>
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#9CA3AF', marginBottom: '2rem' }}>
                Directeurs commerciaux et Sales Managers souhaitant structurer leur équipe sur une méthode commune — et leur donner les outils pour gagner plus de deals dans un contexte concurrentiel exigeant. Adaptée aux profils mixtes juniors / seniors : les juniors repartent avec une méthode, les seniors avec des réflexes renforcés et des outils qu'ils transmettent à leur équipe.
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: '#0D1A2E', borderLeft: '4px solid #2563EB', borderRadius: '4px' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#F9FAFB' }}>
                <strong>Ce que vos équipes repartent avec :</strong> une méthode commune, des réflexes de terrain renforcés, et des outils qu'ils utilisent dès le lundi suivant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — PROGRAMME ═══ */}
      <section id="programme" className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>Programme — 2 jours</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '3rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* JOUR 1 */}
            <div style={{ background: '#0A0A1A', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
              <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '2rem 3rem', borderBottom: '1px solid rgba(37, 99, 235, 0.2)' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#2563EB', marginBottom: '0.5rem' }}>Jour 1 — Avant la Salle</h3>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}><strong>Objectif :</strong> Comprendre son compte, structurer son approche, préparer chaque rendez-vous avec un avantage.</p>
              </div>
              <div style={{ padding: '3rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Analyse stratégique du compte :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>lire un compte avant d'y entrer — signaux externes, mouvements d'organisation, détection anticipée des appels d'offres avec outils IA</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Cartographie des acteurs :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>champion, sponsor, allié, opposant — qui décide vraiment, qui influence, qui peut tout bloquer sans qu'on le voie venir. La distinction champion / sponsor, l'erreur la plus coûteuse en vente complexe</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Qualification et langage commun :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>méthode MEDDIC appliquée — ce qu'on sait, ce qu'on ne sait pas encore, ce qu'on doit aller chercher avant de proposer quoi que ce soit</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Construction du plan de compte :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>les 6 sections, comment s'en servir pour mobiliser marketing, avant-vente, partenaires et direction — pas un document administratif, un outil de pilotage et de développement du compte</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Mobiliser son écosystème :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>comment activer les ressources internes et externes pour entrer sur un compte, s'y sécuriser et le développer — partenaires, marketing, événements, introductions</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Préparer un premier RDV avec un prospect C-level :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>recherche pré-call avec IA, lecture du profil comportemental de l'interlocuteur, adapter son angle d'entrée et son registre avant d'être dans la salle</p>
                    </div>
                  </li>
                </ul>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <p style={{ color: '#F9FAFB', lineHeight: 1.6 }}>
                    <strong style={{ color: '#2563EB' }}>Atelier pratique :</strong> Chaque participant travaille sur un compte réel de son portefeuille — analyse, cartographie des acteurs, ébauche du plan de compte et identification des ressources à mobiliser. Restitution et comparaison en groupe.
                  </p>
                </div>
              </div>
            </div>

            {/* JOUR 2 */}
            <div style={{ background: '#0A0A1A', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
              <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '2rem 3rem', borderBottom: '1px solid rgba(37, 99, 235, 0.2)' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#2563EB', marginBottom: '0.5rem' }}>Jour 2 — Dans la Salle et Après</h3>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}><strong>Objectif :</strong> Les réflexes qui font la différence — à l'ouverture, face aux objections, et dans la capacité à convertir après le rendez-vous.</p>
              </div>
              <div style={{ padding: '3rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Ouverture de rendez-vous :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>les 3 premières minutes — cadrage, objectif annoncé, gestion du temps, laisser la parole au bon moment. Ce qui se joue avant qu'on ait présenté quoi que ce soit</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Body language et présence :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>posture, regard, voix, gestion du silence — ce que l'interlocuteur perçoit et retient avant même l'argument commercial</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Écoute active et reformulation :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>comprendre ce que le prospect dit vraiment — les biais d'écoute, la reformulation comme outil de qualification, pas seulement de politesse</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Traitement des objections en vente complexe :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>les objections fréquentes sur le prix, la concurrence, le timing — méthode de traitement, cas réels, ce qu'on ne dit surtout pas</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Gestion du cycle post-RDV :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>produire un compte-rendu utile dans l'heure, construire une relance qui apporte quelque chose, lire les signaux de progression ou de refroidissement — savoir quand accélérer, quand lâcher du lest</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ marginTop: '0.25rem' }}><CheckCircle2 size={22} color="#2563EB" /></div>
                    <div>
                      <strong style={{ color: '#F9FAFB', fontSize: '1.1rem' }}>Claude en situation réelle :</strong>
                      <p style={{ color: '#9CA3AF', marginTop: '0.5rem' }}>utiliser l'IA pendant le call, produire le compte-rendu en 5 minutes, générer un devis ou une présentation d'offre qui reprend les mots et les priorités du prospect — rendu visuel professionnel avec Canva en moins de 20 minutes. Ce que ça prenait 2 heures prend maintenant un quart d'heure.</p>
                    </div>
                  </li>
                </ul>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <p style={{ color: '#F9FAFB', lineHeight: 1.6 }}>
                    <strong style={{ color: '#2563EB' }}>Atelier pratique :</strong> Jeux de rôles en rotation acheteur / vendeur / observateur sur des cas réels — puis production en direct d'un compte-rendu et d'une proposition commerciale sur un prospect réel du participant avec les outils vus en formation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* STICKY CARD */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <CountdownCard
              title="Formation IA vente B2B : prospecter, qualifier et closer autrement."
              dateStart={new Date('2026-06-25')}
              dateLabel="25 & 26 Juin 2026"
              image={bgCommercial}
            />
          </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — MODALITÉS ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>Formation et suivi</h2>
          <div style={{ background: '#0D1A2E', borderRadius: '24px', padding: '4rem', border: '1px solid rgba(37, 99, 235, 0.1)', position: 'relative', maxWidth: '900px', marginInline: 'auto' }}>
            <div className="grid-2" style={{ gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Durée</span>
                  <span style={{ fontWeight: 700 }}>2 jours</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Référence</span>
                  <span style={{ fontWeight: 700 }}>T-VC01</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Suivi post-training</span>
                  <span style={{ fontWeight: 700 }}>1 heure en visio</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Langues</span>
                  <span style={{ fontWeight: 700 }}>FR — EN — ES</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                  <span style={{ color: '#9CA3AF' }}>Groupe</span>
                  <span style={{ fontWeight: 700 }}>8 à 15 participants</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tarif Inter</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>À partir de 1 200 € HT / pers.</div>
                </div>
                <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid #2563EB', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-12px', right: '20px', background: '#2563EB', color: '#fff', padding: '2px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>RECOMMANDÉ</div>
                  <div style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tarif Intra</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>À partir de 4 500 € HT / groupe</div>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '3rem', color: '#6B7280', fontSize: '0.9rem', textAlign: 'center' }}>
              Note : Tarifs HT, périmètre et objectifs cadrés ensemble avant tout démarrage. Les modules s'adaptent au niveau du groupe — juniors en structuration, seniors en renforcement.
            </p>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <a href={pipedriveLink} className="btn btn-primary" style={{ background: '#2563EB', padding: '1rem 3rem' }}>Nous contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — BLOC DE RENVOI ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in text-center">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 700, textAlign: 'center' }}>Vous formez vos équipes. Et ensuite ?</h2>
          <p style={{ fontSize: '1.2rem', color: '#9CA3AF', maxWidth: '800px', marginInline: 'auto', marginBottom: '4rem', textAlign: 'center' }}>
            Une équipe formée sur les bons réflexes commerciaux, c'est le point de départ. Pour aller plus loin — structurer les leads, automatiser les flux, fiabiliser le pipeline — Squadia intervient aussi sur les outils et les systèmes.
          </p>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <Link to="/strategie-ia" style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB' } onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A3A' }>
              <h3 style={{ color: '#F9FAFB', marginBottom: '1rem' }}>Voir l'offre Stratégie IA</h3>
              <ArrowRight color="#2563EB" />
            </Link>
            <Link to="/data" style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB' } onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A3A' }>
              <h3 style={{ color: '#F9FAFB', marginBottom: '1rem' }}>Voir l'offre Data</h3>
              <ArrowRight color="#2563EB" />
            </Link>
            <Link to="/automatisation-ia" style={{ padding: '2.5rem', background: '#0A0A1A', border: '1px solid #1A1A3A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#2563EB' } onMouseLeave={e => e.currentTarget.style.borderColor = '#1A1A3A' }>
              <h3 style={{ color: '#F9FAFB', marginBottom: '1rem' }}>Voir l'offre Automatisation</h3>
              <ArrowRight color="#2563EB" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — FAQ ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <div style={{ maxWidth: '800px', marginInline: 'auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>Questions fréquentes</h2>
            <div>
              <AccordionItem 
                question="Cette formation convient-elle aux équipes avec des niveaux très différents ?" 
                answer="Oui, c'est précisément pour ça qu'elle a été conçue. Les modules sur la méthode et le plan de compte s'adressent à tous les niveaux. Les ateliers et jeux de rôles s'intensifient ou s'allègent selon le groupe. Les seniors ne sont jamais en terrain connu trop longtemps."
              />
              <AccordionItem 
                question="Faut-il avoir un compte client ou prospect réel pour participer ?" 
                answer="C'est fortement recommandé. Les ateliers pratiques sont conçus pour travailler sur des cas réels des participants — pas sur des exercices fictifs. Plus le compte est concret, plus le travail est actionnable."
              />
              <AccordionItem 
                question="Quel niveau d'expérience avec l'IA est requis ?" 
                answer="Aucun. Les modules IA sont construits pour des non-initiés. On part des outils accessibles — Claude, Canva — et on les applique directement aux situations commerciales du quotidien."
              />
              <AccordionItem 
                question="Peut-on suivre seulement l'un des deux jours ?" 
                answer="Les deux jours sont conçus en séquence logique : le Jour 1 prépare le terrain, le Jour 2 met en pratique. Suivre uniquement le Jour 2 sans le Jour 1 est possible mais déconseillé pour les équipes qui n'ont pas encore de méthode commune sur le plan de compte."
              />
              <AccordionItem 
                question="Quelle différence avec une formation commerciale classique ?" 
                answer="Les fondamentaux sont les mêmes — écoute, qualification, objections. Ce qui change : on intègre les outils IA directement dans la méthode, pas en option. Un commercial qui suit cette formation repart avec une façon de préparer ses RDV, de produire ses propositions et de relancer ses prospects qui est concrètement différente de ce qu'il faisait avant."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — CTA FINAL ═══ */}
      <CtaSection
        headline="Prêt à donner à votre équipe commerciale un avantage réel sur le terrain ?"
        description="Une formation qui change la façon de préparer les RDV, de produire des propositions et de relancer les prospects."
        cardTitle="Formation Ventes & IA"
        cardSubtitle="Équipe commerciale renforcée"
        cardDescription="Méthode, plan de compte, jeux de rôle C-level — 2 jours pour changer les réflexes de vente en profondeur."
        cardFeatures={[
          "Analyse stratégique compte",
          "Qualification & Meddic",
          "Jeux de rôle C-level",
          "Outils IA terrain"
        ]}
        cardColor="#2563EB"
      />

    </div>
  );
};

export default FormationVentesIA;
