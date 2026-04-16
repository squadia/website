import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import blog3 from '../assets/images/blog/blog3.jpeg';

export default function BlogFormationIAVAutom() {
  const [readingProgress, setReadingProgress] = useState(0);
  const navigate = useNavigate();

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
    document.title = "Formation IA ou Automatisation : quel ordre ? — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Faut-il former ses équipes à l'IA avant d'automatiser, ou l'inverse ? Squadia vous guide pour choisir le bon ordre et maximiser votre ROI.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' }}>

      {/* ═══ BARRE DE PROGRESSION DE LECTURE ═══ */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '5px',
        background: 'rgba(255,255,255,0.08)',
        zIndex: 9999,
        pointerEvents: 'none'
      }}>
        <div style={{
          height: '100%',
          width: `${readingProgress}%`,
          background: 'linear-gradient(90deg, #2563EB 0%, #44CCFF 100%)',
          transition: 'width 0.1s linear',
          boxShadow: '0 0 12px rgba(37,99,235,0.8), 0 0 4px rgba(68,204,255,0.5)'
        }} />
      </div>

      {/* ═══ HERO PLEINE PAGE ═══ */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#0A0A1A',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src={blog3} 
            alt="Formation IA vs Automatisation" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,26,0.2)', zIndex: 1 }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30vh',
            background: 'linear-gradient(to bottom, transparent, #0A0A1A)',
            zIndex: 2
          }} />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{
            background: 'rgba(10, 10, 26, 0.3)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            padding: '3rem',
            borderRadius: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <Link to="/ressources" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: '#9CA3AF', fontSize: '0.9rem', textDecoration: 'none',
              marginBottom: '2rem', transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#44CCFF'}
              onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
            >
              <ArrowLeft size={16} /> Retour aux ressources
            </Link>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                background: '#2563EB', color: '#FFFFFF',
                padding: '0.35rem 1.25rem', borderRadius: '9999px',
                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>
                Transformation IA
              </span>
            </div>

            <h1 className="blog-article-h1" style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900,
              lineHeight: 1.1, color: '#FFFFFF', marginBottom: '2rem',
              letterSpacing: '-0.03em'
            }}>
              Formation IA ou automatisation des process&nbsp;: dans quel ordre transformer son entreprise&nbsp;?
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#D1D5DB', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="#2563EB" /> Avril 2025
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color="#2563EB" /> 7 min de lecture
                </span>
              </div>
              <div style={{ width: '80px', height: '4px', background: '#2563EB', borderRadius: '2px' }} />
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 10, color: '#FFFFFF', animation: 'bounce 2s infinite'
        }}>
          <div style={{ opacity: 0.6, fontSize: '0.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>Lire l'article</div>
          <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #2563EB, transparent)', margin: '0 auto' }} />
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <article style={{ maxWidth: '820px', margin: '0 auto', padding: '6rem 2rem 10rem' }}>
        <style>{`
          .article-body p { font-size: 1.05rem; line-height: 1.85; color: rgba(249,250,251,0.75); margin-bottom: 1.6rem; }
          .article-body h2 { font-size: 1.55rem; font-weight: 800; color: #F9FAFB; margin-top: 3.5rem; margin-bottom: 1.2rem; line-height: 1.25; }
          .article-body h2::before { content: ''; display: block; width: 36px; height: 3px; background: #2563EB; border-radius: 2px; margin-bottom: 1rem; }
          .article-body strong { color: #F9FAFB; font-weight: 700; }
          .article-body hr { border: none; border-top: 1px solid #1A1A3A; margin: 3rem 0; }
          .article-pullquote { border-left: 3px solid #2563EB; padding: 1.2rem 1.8rem; margin: 2.5rem 0; background: rgba(37,99,235,0.06); border-radius: 0 0.75rem 0.75rem 0; }
          .article-pullquote p { font-size: 1.1rem !important; color: #E5E7EB !important; font-style: italic; margin-bottom: 0 !important; }
          .article-highlight-box { background: #0D0D25; border: 1px solid #1A1A3A; border-radius: 1rem; padding: 2rem 2.5rem; margin: 2.5rem 0; }
          .article-highlight-box h3 { font-size: 1.1rem; font-weight: 700; color: #60A5FA; margin-bottom: 0.75rem; }
        `}</style>

        <div className="article-body">
          <p>Vos équipes savent utiliser ChatGPT. Votre entreprise, elle, n'a pas encore commencé sa transformation IA.</p>
          <p>Ce n'est pas la même chose. Et la confusion entre les deux coûte cher.</p>
          
          <div className="article-pullquote">
            <p>La transformation IA d'une entreprise repose sur deux piliers : former les talents et adapter les process. L'un sans l'autre ne fonctionne pas.</p>
          </div>

          <p>Et pourtant, la plupart des entreprises n'en activent qu'un seul.</p>

          <hr />

          <h2>La vraie question que se posent les dirigeants</h2>
          <p>La plupart des DG qui abordent le sujet de l'IA arrivent avec la même question implicite : <strong>par où est-ce qu'on commence ?</strong></p>
          <p>Pas "quel outil acheter". Pas "combien ça coûte". Mais vraiment : quelle est la bonne séquence pour ne pas se planter ?</p>
          <p>Ce qu'on observe sur le terrain, après avoir accompagné des PME, des ETI et des grands groupes, c'est que la séquence fait tout. L'erreur la plus fréquente n'est pas de choisir le mauvais outil. C'est de brûler les étapes.</p>

          <hr />

          <h2>Étape 1 : la formation comme outil de découverte</h2>
          <p>Avant de savoir ce que l'IA peut faire pour votre entreprise, vos équipes doivent comprendre ce que l'IA peut faire dans leur métier. C'est une condition réelle.</p>
          <p>Au bout de deux jours de pratique sur des cas concrets, les participants commencent à identifier où l'IA crée de la valeur dans leur contexte précis. C'est exactement l'objectif d'une bonne formation.</p>

          <div className="article-highlight-box">
            <h3>Ce qu'une formation bien faite produit :</h3>
            <p>Un état de l'art partagé, des premières intuitions sur les cas d'usage prioritaires, une culture commune et les prémices d'une feuille de route.</p>
          </div>

          <hr />

          <h2>Étape 2 : faire le pont entre compréhension et système</h2>
          <p>Une fois la compréhension acquise, le travail de mise en système peut commencer. Son rôle est de faire le pont entre les attentes métier et de les traduire en actions.</p>
          
          <div className="article-highlight-box">
            <h3>Les workflows automatisés</h3>
            <p>Concevoir des chemins qui font que quand une action se produit, une réaction intelligente se déclenche automatiquement ailleurs dans votre système.</p>
          </div>

          <div className="article-highlight-box">
            <h3>Les agents IA métier</h3>
            <p>Des outils personnalisés pour se démultiplier avec intelligence : préparer un rendez-vous en 5 minutes, générer des variantes de campagne ou faire une veille sectorielle structurée.</p>
          </div>

          <hr />

          <h2>Étape 3 : mesurer ce qu'on a mis en place</h2>
          <p>C'est là que le CRM joue son rôle de colonne vertébrale. Si vous avez des outils de mesure (net new meetings, taux de conversion), vous savez si votre transformation avance.</p>
          
          <div className="article-pullquote">
            <p>On ne peut pas piloter ce qu'on ne mesure pas. Si ce système n'est pas en place, c'est souvent le premier chantier à adresser.</p>
          </div>

          <hr />

          <h2>Étape 4 : gérer les résistances</h2>
          <p>Dans toute équipe, il y a ceux qui sont ouverts et ceux qui ont construit leurs habitudes sur des décennies. Gérer les résistances, c'est faire comprendre que l'IA n'est pas une remise en question de leur compétence, mais un moyen de faire moins de ce qui coûte du temps.</p>
          <p>La meilleure façon d'amorcer le mouvement est de commencer avec les <strong>champions</strong>, ceux qui sont déjà performants et ouverts au changement.</p>

          <hr />

          <h2>Étape 5 : ancrer les habitudes dans la durée</h2>
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
        <div style={{
          marginTop: '5rem',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(68,204,255,0.1) 100%)',
          border: '1px solid rgba(37,99,235,0.3)',
          borderRadius: '1.25rem', padding: '3.5rem', textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.2rem' }}>
            Vous voulez structurer votre stratégie IA et savoir par où commencer ?
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '600px', marginInline: 'auto', marginBottom: '2.5rem' }}>
            Squadia accompagne les directions générales, marketing et commerciales dans la définition et la mise en exécution de leur feuille de route IA.
          </p>
          <Link
            to="/strategie-ia"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: '#2563EB', color: '#fff',
              padding: '1.1rem 2.2rem', borderRadius: '0.6rem',
              fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(37,99,235,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Découvrir l'offre Stratégie IA <ArrowRight size={20} />
          </Link>
        </div>

      </article>
    </div>
  );
}
