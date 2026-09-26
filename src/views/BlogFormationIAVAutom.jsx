'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import ArticleTOC from '../components/blog/ArticleTOC';
import ArticleCta from '../components/blog/ArticleCta';
import RelatedArticles from '../components/blog/RelatedArticles';
const blog3 = '/assets/images/blog/blog3.jpeg';

const TOC_SECTIONS = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'vraie-question', label: 'La vraie question' },
  { id: 'etape-1', label: 'Étape 1 : formation' },
  { id: 'etape-2', label: 'Étape 2 : mise en système' },
  { id: 'etape-3', label: 'Étape 3 : mesurer' },
  { id: 'etape-4', label: 'Étape 4 : résistances' },
  { id: 'etape-5', label: 'Étape 5 : ancrer' },
];

export default function BlogFormationIAVAutom() {
  const [readingProgress, setReadingProgress] = useState(0);
  const router = useRouter();

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
    document.title = "Formation IA ou Automatisation : quel ordre ? : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Faut-il former ses équipes à l'IA avant d'automatiser, ou l'inverse ? Squadia vous guide pour choisir le bon ordre et maximiser votre ROI.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#F6F3EC', color: '#1C2B27', minHeight: '100vh', fontFamily: 'var(--font-main)' }}>

      {/* ═══ BARRE DE PROGRESSION DE LECTURE ═══ */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '5px',
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
            src={blog3} 
            alt="Formation IA vs Automatisation" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(246,243,236,0.2)', zIndex: 1 }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30vh',
            background: 'linear-gradient(to bottom, transparent, #F6F3EC)',
            zIndex: 2
          }} />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10, width: '100%' }}>
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
              color: '#4A534F', fontSize: '0.9rem', textDecoration: 'none',
              marginBottom: '2rem', transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#8A6D3B'}
              onMouseLeave={e => e.currentTarget.style.color = '#4A534F'}
            >
              <ArrowLeft size={16} /> Retour aux ressources
            </Link>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                background: '#1F3A33', color: '#F6F3EC',
                padding: '0.35rem 1.25rem', borderRadius: '9999px',
                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>
                Transformation IA
              </span>
            </div>

            <h1 className="blog-article-h1" style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 900,
              lineHeight: 1.1, color: '#1C2B27', marginBottom: '2rem',
              letterSpacing: '-0.03em'
            }}>
              Formation IA ou automatisation des process&nbsp;: dans quel ordre transformer son entreprise&nbsp;?
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#4A534F', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="#1F3A33" /> Avril 2026
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color="#1F3A33" /> 7 min de lecture
                </span>
              </div>
              <div style={{ width: '80px', height: '4px', background: '#1F3A33', borderRadius: '2px' }} />
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 10, color: '#1C2B27', animation: 'bounce 2s infinite'
        }}>
          <div style={{ opacity: 0.6, fontSize: '0.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>Lire l'article</div>
          <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #1F3A33, transparent)', margin: '0 auto' }} />
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '6rem 2rem 10rem', display: 'grid', gridTemplateColumns: 'minmax(180px, 220px) minmax(0, 780px)', gap: '4rem', justifyContent: 'center' }}>
        <ArticleTOC sections={TOC_SECTIONS} />
        <article style={{ maxWidth: '780px', minWidth: 0 }}>
        <style>{`
          .article-body p { font-size: 1.05rem; line-height: 1.85; color: rgba(28,43,39,0.75); margin-bottom: 1.6rem; }
          .article-body h2 { font-size: 1.55rem; font-weight: 800; color: #1C2B27; margin-top: 3.5rem; margin-bottom: 1.2rem; line-height: 1.25; scroll-margin-top: 100px; }
          .article-body h2::before { content: ''; display: block; width: 36px; height: 3px; background: #1F3A33; border-radius: 2px; margin-bottom: 1rem; }
          .article-body strong { color: #1C2B27; font-weight: 700; }
          .article-body hr { border: none; border-top: 1px solid #D8D1C2; margin: 3rem 0; }
          .article-pullquote { border-left: 3px solid #1F3A33; padding: 1.2rem 1.8rem; margin: 2.5rem 0; background: rgba(31,58,51,0.06); border-radius: 0 0.75rem 0.75rem 0; }
          .article-pullquote p { font-size: 1.1rem !important; color: #4A534F !important; font-style: italic; margin-bottom: 0 !important; }
          .article-highlight-box { background: #F6F3EC; border: 1px solid #D8D1C2; border-radius: 1rem; padding: 2rem 2.5rem; margin: 2.5rem 0; }
          .article-highlight-box h3 { font-size: 1.1rem; font-weight: 700; color: #8A6D3B; margin-bottom: 0.75rem; }
        `}</style>

        <div className="article-body">
          <p id="introduction" style={{ scrollMarginTop: '100px' }}>Vos équipes savent utiliser ChatGPT. Votre entreprise, elle, n'a pas encore commencé sa transformation IA.</p>
          <p>Ce n'est pas la même chose. Et la confusion entre les deux coûte cher.</p>
          
          <div className="article-pullquote">
            <p>La transformation IA d'une entreprise repose sur deux piliers : former les talents et adapter les process. L'un sans l'autre ne fonctionne pas.</p>
          </div>

          <p>Et pourtant, la plupart des entreprises n'en activent qu'un seul.</p>

          <hr />

          <h2 id="vraie-question">La vraie question que se posent les dirigeants</h2>
          <p>La plupart des DG qui abordent le sujet de l'IA arrivent avec la même question implicite : <strong>par où est-ce qu'on commence ?</strong></p>
          <p>Pas "quel outil acheter". Pas "combien ça coûte". Mais vraiment : quelle est la bonne séquence pour ne pas se planter ?</p>
          <p>Ce qu'on observe sur le terrain, après avoir accompagné des PME, des ETI et des grands groupes, c'est que la séquence fait tout. L'erreur la plus fréquente n'est pas de choisir le mauvais outil. C'est de brûler les étapes.</p>

          <hr />

          <h2 id="etape-1">Étape 1 : la formation comme outil de découverte</h2>
          <p>Avant de savoir ce que l'IA peut faire pour votre entreprise, vos équipes doivent comprendre ce que l'IA peut faire dans leur métier. C'est une condition réelle.</p>
          <p>Quand on anime des ateliers avec des équipes commerciales, marketing ou communication, que ce soit à la Mairie de Lyon, chez Groupama, ou dans des PME industrielles, le même phénomène se produit à chaque fois : au bout de deux jours de pratique sur des cas concrets, les participants ne parlent plus d'IA en général. Ils parlent de leurs processus, de leurs irritants, de leurs tâches répétitives. C'est exactement l'objectif d'une bonne formation.</p>

          <div className="article-highlight-box">
            <h3>Ce qu'une formation bien faite produit :</h3>
            <p>Un état de l'art partagé, des premières intuitions sur les cas d'usage prioritaires, une culture commune et les prémices d'une feuille de route.</p>
          </div>

          <hr />

          <h2 id="etape-2">Étape 2 : faire le pont entre compréhension et système</h2>
          <p>Une fois la compréhension acquise, le travail de mise en système peut commencer. Son rôle est de faire le pont entre les attentes métier et de les traduire en actions.</p>
          
          <div className="article-highlight-box">
            <h3>Les workflows automatisés</h3>
            <p>Concevoir des chemins qui font que quand'une action se produit, une réaction intelligente se déclenche automatiquement ailleurs dans votre système.</p>
          </div>

          <div className="article-highlight-box">
            <h3>Les agents IA métier</h3>
            <p>Des outils personnalisés pour se démultiplier avec intelligence : préparer un rendez-vous en 5 minutes, générer des variantes de campagne ou faire une veille sectorielle structurée.</p>
          </div>

          <hr />

          <h2 id="etape-3">Étape 3 : mesurer ce qu'on a mis en place</h2>
          <p>C'est là que <Link href="/blog/changement-crm-organisation" style={{ color: '#8A6D3B' }}>le CRM joue son rôle de colonne vertébrale</Link>. Si vous avez des outils de mesure (net new meetings, taux de conversion), vous savez si votre transformation avance.</p>
          
          <div className="article-pullquote">
            <p>On ne peut pas piloter ce qu'on ne mesure pas. Si ce système n'est pas en place, c'est souvent le premier chantier à adresser.</p>
          </div>

          <hr />

          <h2 id="etape-4">Étape 4 : gérer les résistances</h2>
          <p>Dans toute équipe, il y a ceux qui sont ouverts et ceux qui ont construit leurs habitudes sur des décennies. Gérer les résistances, c'est faire comprendre que l'IA n'est pas une remise en question de leur compétence, mais un moyen de faire moins de ce qui coûte du temps.</p>
          <p>La meilleure façon d'amorcer le mouvement est de commencer avec les <strong>champions</strong>, ceux qui sont déjà performants et ouverts au changement.</p>

          <hr />

          <h2 id="etape-5">Étape 5 : ancrer les habitudes dans la durée</h2>
          <p>Ce qui fait la différence, c'est la capacité à itérer et à construire des habitudes. Il faut rendre visible la valeur que chaque outil apporte à celui qui l'utilise, pas seulement à celui qui supervise.</p>
          
          <div className="article-highlight-box">
            <h3>La culture de l'amélioration continue</h3>
            <p>Les entreprises qui réussissent sont celles où chaque ajustement est vu comme une progression, et non comme une remise en question perpétuelle.</p>
          </div>

          <hr />
          
          <p>La vraie question n'est pas "formation ou automatisation des process". C'est "dans quel ordre, pour quels objectifs, avec quelles équipes, et comment on mesure que ça avance".</p>
          
          <p>L'IA transforme une entreprise quand ces cinq étapes sont articulées intelligemment, avec des objectifs mesurables à chaque jalon.</p>
        </div>
        {/* ═══ CTA BLOCK ═══ */}
        <RelatedArticles current="formation-ia-automatisation-ordre" />
        <ArticleCta kicker={`Passez à l'action`} title={`Vous voulez former vos équipes à l'IA et savoir par où commencer ?`} text={`Squadia accompagne les directions générales, marketing et commerciales dans la montée en compétence IA de leurs équipes.`} href="/formations" label={`Voir les formations IA`} />

        </article>
      </div>
    </div>
  );
}
