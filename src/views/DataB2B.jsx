'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import ArticleTOC from '../components/blog/ArticleTOC';
import ArticleCta from '../components/blog/ArticleCta';
import RelatedArticles from '../components/blog/RelatedArticles';
const nettoyageData = '/assets/images/blog/cleaningdata.jpeg';

const TOC_SECTIONS = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'nettoyage', label: 'Le nettoyage' },
  { id: 'segmentation', label: 'La segmentation' },
  { id: 'enrichissement', label: "L'enrichissement" },
  { id: 'clay', label: 'Clay.com' },
  { id: 'ce-que-ca-change', label: 'Ce que ça change' },
];

export default function DataB2B() {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = "Nettoyage, segmentation et enrichissement des données B2B : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Découvrez comment nettoyer, segmenter et enrichir vos données B2B pour maximiser l'efficacité de vos campagnes de prospection. Méthode Squadia pour PME et ETI.";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#F6F3EC', color: '#1C2B27', minHeight: '100vh', fontFamily: 'var(--font-main)' }}>

      {/* ═══ BARRE DE PROGRESSION DE LECTURE ═══ */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '5px',
        background: 'rgba(255,255,255,0.8)',
        zIndex: 9999,
        pointerEvents: 'none'
      }}>
        <div style={{
          height: '100%',
          width: `${readingProgress}%`,
          background: 'linear-gradient(90deg, #1F3A33 0%, #1F3A33 100%)',
          transition: 'width 0.1s linear',
          boxShadow: '0 0 12px rgba(31,58,51,0.8), 0 0 4px rgba(176,141,87,0.5)'
        }} />
      </div>

      {/* ═══ HERO PLEINE PAGE ═══ */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#F6F3EC',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src={nettoyageData}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(246,243,236,0.2)', zIndex: 1 }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '30vh',
            background: 'linear-gradient(to bottom, transparent, #F6F3EC)',
            zIndex: 2
          }} />
        </div>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 10,
          width: '100%'
        }}>
          <div style={{
            background: 'rgba(246,243,236,0.3)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            padding: '3rem',
            borderRadius: '2rem',
            border: '1px solid rgba(28,43,39,0.24)',
            boxShadow: '0 10px 30px rgba(28,43,39,0.07)'
          }}>
            <Link href="/ressources" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: '#4A534F', fontSize: '0.9rem',
              textDecoration: 'none', marginBottom: '2rem',
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#8A6D3B'}
              onMouseLeave={e => e.currentTarget.style.color = '#4A534F'}
            >
              <ArrowLeft size={16} /> Retour aux ressources
            </Link>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                background: '#1F3A33',
                color: '#F6F3EC',
                padding: '0.35rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Data B2B
              </span>
            </div>

            <h1 className="blog-article-h1" style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#1C2B27',
              marginBottom: '2rem',
              letterSpacing: '-0.03em'
            }}>
              Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#4A534F', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="#1F3A33" /> Avril 2026
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color="#1F3A33" /> 5 min de lecture
                </span>
              </div>
              <div style={{ width: '80px', height: '4px', background: '#1F3A33', borderRadius: '2px' }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)', zIndex: 10,
          color: '#1C2B27', animation: 'bounce 2s infinite'
        }}>
          <style>{`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
              40% {transform: translateY(-10px) translateX(-50%);}
              60% {transform: translateY(-5px) translateX(-50%);}
            }
          `}</style>
          <div style={{ opacity: 0.6, fontSize: '0.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>Lire l'article</div>
          <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #1F3A33, transparent)', margin: '0 auto' }} />
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '2rem 2rem 8rem', display: 'grid', gridTemplateColumns: 'minmax(180px, 220px) minmax(0, 780px)', gap: '4rem', justifyContent: 'center' }}>
        <ArticleTOC sections={TOC_SECTIONS} />
        <article style={{ maxWidth: '780px', minWidth: 0 }}>

        <style>{`
          .article-body p {
            font-size: 1.05rem;
            line-height: 1.85;
            color: rgba(28,43,39,0.75);
            margin-bottom: 1.6rem;
          }
          .article-body h2 {
            font-size: 1.55rem;
            font-weight: 800;
            color: #1C2B27;
            margin-top: 3.5rem;
            margin-bottom: 1.2rem;
            line-height: 1.25;
            letter-spacing: -0.01em;
            scroll-margin-top: 100px;
          }
          .article-body h2::before {
            content: '';
            display: block;
            width: 36px;
            height: 3px;
            background: #1F3A33;
            border-radius: 2px;
            margin-bottom: 1rem;
          }
          .article-body strong {
            color: #1C2B27;
            font-weight: 700;
          }
          .article-body em {
            color: rgba(28,43,39,0.85);
          }
          .article-body a {
            color: #1F3A33;
            text-decoration: underline;
          }
          .article-body hr {
            border: none;
            border-top: 1px solid #D8D1C2;
            margin: 3rem 0;
          }
          .article-body ul {
            list-style: none;
            margin-bottom: 1.6rem;
          }
          .article-body ul li {
            font-size: 1.05rem;
            line-height: 1.85;
            color: rgba(28,43,39,0.75);
            padding-left: 1.4rem;
            position: relative;
            margin-bottom: 0.5rem;
          }
          .article-body ul li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: #1F3A33;
            font-weight: 700;
          }
          .article-pullquote {
            border-left: 3px solid #1F3A33;
            padding: 1.2rem 1.8rem;
            margin: 2.5rem 0;
            background: rgba(31,58,51,0.06);
            border-radius: 0 0.75rem 0.75rem 0;
          }
          .article-pullquote p {
            font-size: 1.1rem !important;
            color: #4A534F !important;
            font-style: italic;
            margin-bottom: 0 !important;
          }
          .article-highlight-box {
            background: #F6F3EC;
            border: 1px solid #D8D1C2;
            border-radius: 1rem;
            padding: 2rem 2.5rem;
            margin: 2.5rem 0;
          }
          .article-highlight-box h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #8A6D3B;
            margin-bottom: 0.75rem;
          }
          .article-highlight-box p {
            margin-bottom: 0 !important;
          }
        `}</style>

        <div className="article-body">

          <p id="introduction" style={{ scrollMarginTop: '100px' }}><em>Avant de lancer une campagne, avant de construire une séquence de prospection, avant même de choisir un outil : il y a un travail que personne n'a envie de faire et que tout le monde finit par regretter d'avoir sauté.</em></p>

          <div className="article-pullquote">
            <p>Nettoyer ses données. Les segmenter. Les enrichir. Ce n'est pas glamour. Mais c'est ce qui sépare une campagne qui tourne de celle qui s'essouffle après deux semaines.</p>
          </div>

          <hr />

          <h2 id="nettoyage">Le nettoyage : la vaisselle de la data</h2>

          <p>Le nettoyage, c'est un peu comme faire la vaisselle après un bon repas. Personne n'a envie. Mais si vous ne le faites pas, le prochain dîner sera un cauchemar.</p>

          <p>Concrètement, ce que ça veut dire sur un fichier de prospection :</p>

          <p>Un email obsolète, c'est une opportunité qui part à la poubelle avant même d'avoir été lue. Jérémy Duchemin qui a quitté Pollux pour Tartanpion il y a six mois : si votre base ne le sait pas, votre message n'arrivera jamais au bon endroit. Et les doublons, c'est pire : deux commerciaux qui contactent le même décideur à trois jours d'intervalle, ça fait amateur.</p>

          <p>Il y a aussi les titres trompeurs. Un "Sales Manager" n'est pas toujours un manager d'équipe : parfois c'est un commercial terrain sans budget ni décision. Envoyer le mauvais message au mauvais niveau hiérarchique, c'est du temps gaspillé des deux côtés.</p>

          <div className="article-highlight-box">
            <h3>Un détail que peu prennent au sérieux</h3>
            <p>Un nom d'entreprise avec un emoji dans le champ de personnalisation d'un email casse immédiatement la crédibilité du message. Les outils comme Dropcontact permettent de nettoyer et vérifier tout ça automatiquement, et font gagner un temps considérable.</p>
          </div>

          <hr />

          <h2 id="segmentation">La segmentation : parler à tout le monde, c'est parler à personne</h2>

          <p>Un email générique n'émeut personne. La vraie efficacité vient du tiering : classer vos comptes selon leur importance et adapter vos efforts en conséquence. C'est justement le type d'erreur qui plombe une <Link href="/blog/prospection-multicanale-b2b-erreurs" style={{ color: '#1F3A33' }}>campagne de prospection multicanale</Link>, même bien écrite.</p>

          <p>Un compte Tier 1 mérite une approche personnalisée, une recherche préalable, un message construit autour de sa situation spécifique. Un compte Tier 3 peut recevoir une séquence plus automatisée. Ce n'est pas une question de respect : c'est une question d'allocation intelligente du temps de vos équipes.</p>

          <div className="article-pullquote">
            <p>Le problème que la plupart des organisations rencontrent, c'est la fusion de bases. CRM, fichiers Excel, exports LinkedIn, listes achetées : quand tout ça se retrouve dans la même campagne sans avoir été réconcilié, la campagne est déjà périmée avant d'avoir commencé.</p>
          </div>

          <p>L'automatisation de cette étape n'est pas un luxe, c'est une condition pour que la machine tourne.</p>

          <hr />

          <h2 id="enrichissement">L'enrichissement : vos données sont incomplètes, et ce n'est pas grave</h2>

          <p>La plupart des CRM ressemblent à un puzzle avec des pièces manquantes. C'est normal. Ce qui l'est moins, c'est de lancer une campagne sans avoir comblé les trous.</p>

          <p>Quelques outils qui fonctionnent bien sur ce sujet :</p>

          <ul>
            <li><strong>FullEnrich</strong> recoupe plusieurs sources avec un taux d'enrichissement autour de 80% : 8 numéros sur 10 trouvés via LinkedIn, et reste 100% GDPR compliant.</li>
            <li><strong>Cognism</strong> est certifié ISO et fiable sur la conformité, particulièrement utile pour les entreprises qui ont des exigences légales strictes sur leurs données.</li>
            <li><strong>Dropcontact</strong> fait à la fois l'enrichissement, la déduplication et la vérification en un seul outil : pratique quand on veut centraliser.</li>
          </ul>

          <div className="article-highlight-box">
            <h3>Point de vigilance RGPD</h3>
            <p>Certains acteurs du marché ne sont pas conformes au RGPD. Les amendes, les pertes de réputation et les complications juridiques qui s'ensuivent ne valent pas le temps gagné sur le prix. Chez Squadia, c'est une ligne qu'on ne franchit pas avec nos clients.</p>
          </div>

          <hr />

          <h2 id="clay">Clay.com : puissant, mais pas pour tout le monde</h2>

          <p>Si vous ne connaissez pas <a href="http://Clay.com" target="_blank" rel="noopener noreferrer">Clay.com</a>, c'est un peu le Notion de la data commerciale. Vous créez des tableaux intelligents qui vont chercher de l'information automatiquement, la formatent et la rendent exploitable pour vos campagnes.</p>

          <p>C'est puissant. C'est aussi cher et ça demande un certain niveau de maturité pour en tirer de la valeur. Dans les formations que Squadia anime sur ces sujets, on partage également des alternatives plus accessibles qui font 80% du travail pour une fraction du coût : selon la taille de l'équipe et le volume de contacts à traiter.</p>

          <hr />

          <h2 id="ce-que-ca-change">Ce que tout ça change réellement</h2>

          <p>Le nettoyage évite de passer pour un amateur. La segmentation rend les messages plus justes et les efforts mieux alloués. L'enrichissement donne aux commerciaux les informations dont ils ont besoin pour arriver en rendez-vous préparés.</p>

          <p>Ce ne sont pas des étapes techniques optionnelles. Ce sont les conditions de base pour qu'une campagne produise autre chose que du bruit.</p>

          <div className="article-pullquote">
            <p>Et au fond, c'est la meilleure preuve de respect qu'on puisse donner à un prospect : lui parler correctement, avec les bonnes informations, au bon moment.</p>
          </div>

          <hr />


        </div>

        {/* ═══ CTA BLOCK ═══ */}
        <RelatedArticles current="nettoyage-segmentation-enrichissement-donnees-b2b" />
        <ArticleCta kicker={`Passez à l'action`} title={`Vous voulez savoir si vos données sont prêtes pour votre prochaine campagne ?`} text={`Squadia accompagne les équipes marketing et commerciales dans la structuration de leur data, de la segmentation à l'activation.`} href="/data" label={`Parler à un expert Data`} />

        </article>
      </div>
    </div>
  );
}
