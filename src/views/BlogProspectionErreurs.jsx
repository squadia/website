'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
const blog4 = '/assets/images/blog/blog4.jpeg';
export default function BlogProspectionErreurs() {
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
    document.title = "Prospection multicanale B2B : 5 erreurs à éviter : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Découvrez les 5 erreurs les plus courantes en prospection multicanale B2B et comment les corriger. Conseils pour équipes commerciales en PME et ETI.");
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
            src={blog4} 
            alt="Prospection B2B" 
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
            <Link href="/ressources" style={{
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
                Stratégie Commerciale
              </span>
            </div>

            <h1 className="blog-article-h1" style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 900,
              lineHeight: 1.1, color: '#FFFFFF', marginBottom: '2rem',
              letterSpacing: '-0.03em'
            }}>
              Prospection multicanale B2B&nbsp;: 5 erreurs qui font perdre des leads et comment les éviter
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#D1D5DB', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="#2563EB" /> Avril 2025
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color="#2563EB" /> 6 min de lecture
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
          <p>La prospection multicanale, ce n'est pas une question de chance ni de volume. C'est une question de méthode, de timing, et d'alignement entre les équipes qui la portent.</p>
          <p>Voici les cinq erreurs qu'on observe le plus souvent sur le terrain, et ce qui change quand on les corrige.</p>

          <hr />

          <h2>Erreur 1 : confier les emails à des profils sans méthode</h2>
          <p>Écrire un bon email de prospection, ce n'est pas facile. Par email, vous n'avez qu'une seule arme&nbsp;: <strong>vos mots.</strong> Et ça ne s'improvise pas.</p>
          <p>Trop souvent, on confie l'emailing à des profils sans les avoir formés. Résultat&nbsp;: des emails trop longs, des séquences qui s'arrêtent après deux relances sans valeur ajoutée, zéro personnalisation réelle.</p>
          
          <div className="article-pullquote">
            <p>Ce qui marche, c'est l'inverse : des messages courts qui parlent de la douleur de l'interlocuteur, appuyés par un exemple client, et qui ouvrent une conversation.</p>
          </div>

          <hr />

          <h2>Erreur 2 : ignorer la fenêtre de tir</h2>
          <p>Le timing, c'est ce qui fait la différence entre un email ignoré et un rendez-vous décroché.</p>
          <p>Selon Gartner, <strong>60% du budget</strong> d'un manager arrivé depuis moins de 6 mois est engagé dès sa prise de poste. C'est une fenêtre rare&nbsp;: la personne n'a pas encore ses fournisseurs habituels.</p>
          <p>Utilisez LinkedIn et votre CRM pour identifier ces nouveaux entrants. Si vous connaissez leur feuille de route, votre email arrive comme une réponse à un besoin actuel.</p>

          <hr />

          <h2>Erreur 3 : écrire comme un catalogue, pas comme un humain</h2>
          <p><em>"Je vous contacte pour vous présenter notre solution innovante..."</em>&nbsp;: si vous commencez comme ça, vous êtes déjà perdu.</p>
          <p>Un email de prospection est un premier contact humain. Votre prospect doit sentir que vous comprenez ses problématiques. L'outil ne fait pas tout&nbsp;: la compétence relationnelle reste le levier principal.</p>

          <div className="article-highlight-box">
            <h3>Méthodes éprouvées</h3>
            <p>C'est ce que travaillent des approches comme <strong>SPIN Selling, MEDDIC ou Challenger Selling</strong>. Squadia forme les équipes à développer cette intelligence de situation.</p>
          </div>

          <hr />

          <h2>Erreur 4 : vouloir faire du volume sans cadence adaptée</h2>
          <p>Envoyer 1 000 emails peut sembler ambitieux, mais si votre équipe n'est pas calibrée, vous vous épuiserez avant même de pouvoir mesurer l'impact.</p>
          
          <div className="article-pullquote">
            <p>La prospection, ce n'est pas envoyer plus. C'est cadencer intelligemment.</p>
          </div>

          <p>Privilégiez la personnalisation poussée pour vos comptes clés, et automatisez intelligemment le reste pour garder de l'énergie là où l'impact est le plus fort.</p>

          <hr />

          <h2>Erreur 5 : laisser marketing et ventes travailler en silos</h2>
          <p>C'est un classique&nbsp;: le marketing lance une campagne que les commerciaux ne relaient pas. Résultat&nbsp;: double dépense et messages contradictoires.</p>
          <p>Ce qui marche, c'est <strong>l'alignement.</strong> Le marketing prépare du contenu contextualisé, et les commerciaux s'en servent comme levier. Un commercial devient deux à trois fois plus productif quand chaque canal travaille pour lui.</p>

          <hr />

          <p>Eviter ces cinq erreurs, c'est transformer vos campagnes en rendez-vous concrets. Ce n'est pas une question de budget, c'est une <strong>question de méthode et de coordination.</strong></p>
        </div>

        {/* ═══ CTA BLOCK ═══ */}
        <div style={{
          marginTop: '5rem',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(124,58,237,0.08) 100%)',
          border: '1px solid rgba(37,99,235,0.25)',
          borderRadius: '1.25rem', padding: '3rem', textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem' }}>
            Vous voulez analyser vos séquences de prospection et identifier les points bloquants ?
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6, maxWidth: '560px', marginInline: 'auto', marginBottom: '2rem' }}>
            Squadia accompagne les équipes commerciales et marketing dans la structuration de leur prospection multicanale et l'optimisation de leur génération de leads.
          </p>
          <Link
            href="/data/data-lead"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: '#2563EB', color: '#fff',
              padding: '1rem 2rem', borderRadius: '0.5rem',
              fontWeight: 700, fontSize: '1rem', textDecoration: 'none'
            }}
          >
            Découvrir l'offre Data Lead <ArrowRight size={18} />
          </Link>
        </div>

      </article>
    </div>
  );
}
