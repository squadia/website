import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import blog2 from '../assets/images/blog/blog2.jpeg';

export default function BlogChangementCRM() {
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
    document.title = "Pourquoi les entreprises changent de CRM — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Un projet CRM naît rarement d'un problème d'outil. Découvrez ce que ce changement révèle sur l'organisation et comment structurer votre système commercial.";
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
            src={blog2} 
            alt="Projet CRM" 
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
                Stratégie & CRM
              </span>
            </div>

            <h1 className="blog-article-h1" style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 900,
              lineHeight: 1.1, color: '#FFFFFF', marginBottom: '2rem',
              letterSpacing: '-0.03em'
            }}>
              Pourquoi les entreprises changent de CRM : et ce que ça révèle vraiment sur leur organisation
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
          <p>Un dirigeant ne se réveille pas un matin en disant <em>"je vais changer de CRM"</em>.</p>
          <p>Quelque chose s'est passé avant. Quelque chose de <strong>significatif</strong>. Et ce quelque chose, c'est rarement un problème d'outil.</p>

          <hr />

          <h2>Ce qui déclenche vraiment un projet CRM</h2>
          <p>Dans la plupart des cas, un projet CRM naît d'un événement interne fort : un changement d'actionnaire, une perte de chiffre d'affaires significative, une réorganisation, un départ de dirigeant clé. Un moment de rupture qui force l'entreprise à regarder en face ce qu'elle a vraiment comme assets — et ce qui ne fonctionne pas.</p>
          <p>C'est à ce moment-là que les questions émergent. Pas "quel CRM choisir". Mais : est-ce qu'on a le contrôle qu'on devrait avoir sur nos contrats ? Est-ce qu'on comprend vraiment ce qui se passe sur nos territoires ? Est-ce que nos process sont clairs, fluides, respectés par tout le monde ?</p>
          
          <div className="article-pullquote">
            <p>La réponse est presque toujours non. Et c'est là que le CRM entre dans la conversation — non pas comme solution technique, mais comme réponse à une perte de contrôle.</p>
          </div>
          
          <p>L'alignement marketing et ventes, lui, arrive bien plus tard. C'est une conséquence, pas un déclencheur.</p>

          <hr />

          <h2>Ce que la perte de contrôle ressemble concrètement</h2>
          <p>Voici ce que décrivent les dirigeants quand on creuse vraiment :</p>
          
          <div className="article-highlight-box">
            <h3>"Je n'ai pas la visibilité que je veux sur mon pipeline."</h3>
            <p>Les deals avancent ou stagnent, mais personne ne sait vraiment pourquoi. Le directeur commercial fait ses prévisions à l'intuition. Les engagements pris en CODIR ne reposent sur aucune donnée fiable.</p>
          </div>

          <div className="article-highlight-box">
            <h3>"Mes commerciaux ne travaillent pas tous de la même façon."</h3>
            <p>Certains ont leurs propres méthodes, leurs propres fichiers Excel, leurs propres façons de qualifier un prospect. Il n'y a pas de process commun. Et quand un commercial part, il emporte avec lui toute la connaissance de ses comptes.</p>
          </div>

          <div className="article-highlight-box">
            <h3>"Je ne comprends pas pourquoi on gagne certains deals et pourquoi on en perd d'autres."</h3>
            <p>Pas d'historique structuré, pas d'analyse des raisons de perte, pas de pattern identifiable. Chaque deal est une boîte noire.</p>
          </div>

          <p>Ce n'est pas un problème de CRM. C'est un problème de <strong>système commercial</strong>. Le CRM est l'outil qui peut rendre ce système visible — à condition qu'on sache ce qu'on veut y mettre.</p>

          <hr />

          <h2>L'erreur classique : changer d'outil sans changer les process</h2>
          <p>La tentation est forte : acheter un nouveau CRM, migrer les données, former les équipes, et espérer que les problèmes disparaissent avec l'ancien logiciel.</p>
          <p>Ça ne fonctionne pas. Parce que les problèmes décrits ci-dessus ne viennent pas du CRM. Ils viennent des process — ou de leur absence.</p>
          
          <div className="article-pullquote">
            <p>Un CRM mal structuré installé sur une nouvelle plateforme reste un CRM mal structuré.</p>
          </div>
          
          <p>Des commerciaux qui ne mettaient pas le CRM à jour dans l'ancien outil ne le feront pas davantage dans le nouveau, sauf si on a résolu le vrai problème : pourquoi est-ce un point de friction pour eux ? Et là, on revient à une question de management, pas de technologie.</p>

          <hr />

          <h2>Ce qui doit changer avant le CRM</h2>
          <p>Avant de toucher à l'outil, trois questions structurantes :</p>
          
          <div className="article-highlight-box">
            <h3>1. Qu'est-ce qu'on veut que le CRM rende visible ?</h3>
            <p>Pas en théorie — dans la pratique quotidienne du dirigeant. Quelles décisions doit-il permettre de prendre ? Si vous ne pouvez pas répondre précisément, le projet partira dans le mauvais sens.</p>
          </div>

          <div className="article-highlight-box">
            <h3>2. Où sont les vrais points de friction dans l'adoption ?</h3>
            <p>La mise à jour manuelle est chronophage. Aujourd'hui, cette tâche peut être automatisée : transcription d'appel, mise à jour auto du CRM. Identifier ces frictions multiplie le taux d'adoption.</p>
          </div>

          <div className="article-highlight-box">
            <h3>3. Quels process veut-on standardiser ?</h3>
            <p>Un CRM n'impose pas des process — il les reflète. Définir les étapes du pipeline, les critères de qualification et les règles de routage est un travail indispensable avant tout déploiement.</p>
          </div>

          <hr />

          <h2>Ce que le CRM doit contenir — et ce qui ne sert à rien</h2>
          <p><strong>Ce qui doit être dans le CRM :</strong> la source et le contexte de chaque contact, le signal qui a déclenché la prise de contact commerciale, l'historique des interactions, le stade de maturité réel, et les raisons de perte précises.</p>
          <p><strong>Ce qui encombre le CRM sans valeur :</strong> les champs remplis pour "faire propre", les étapes de pipeline qui reflètent l'interne plutôt que la maturité du prospect, et les imports de masse sans qualification.</p>

          <div className="article-pullquote">
            <p>La règle simple : si une donnée ne permet pas de prendre une meilleure décision commerciale, elle n'a pas sa place dans le CRM.</p>
          </div>

          <hr />

          <h2>Le manager qui tire vraiment parti du CRM</h2>
          <p>Un bon manager commercial donne à son équipe les moyens de travailler mieux — pas plus fort. Le CRM bien structuré permet une visibilité réelle sur le pipeline, d'identifier les deals à risque avant qu'ils soient perdus, et de coacher sur des faits plutôt que des impressions.</p>
          <p>En y ajoutant les outils d'analyse comportementale modernes, le CRM devient un levier de performance réel, pas un outil de reporting subi.</p>

          <hr />

          <h2>En résumé</h2>
          <p>Les entreprises changent de CRM parce qu'elles ont perdu le contrôle de quelque chose d'important — et qu'elles cherchent à le reprendre. L'outil ne résout pas ce problème seul. Ce qui le résout, c'est la clarté sur ce qu'on veut voir, l'élimination des frictions, et la définition des process.</p>
          <p>Faire ça dans le bon ordre transforme un projet CRM en avantage opérationnel durable.</p>
        </div>

        {/* ═══ CTA BLOCK ═══ */}
        <div style={{
          marginTop: '5rem',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(124,58,237,0.08) 100%)',
          border: '1px solid rgba(37,99,235,0.25)',
          borderRadius: '1.25rem', padding: '3rem', textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '1rem' }}>Structurer sa croissance</p>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem' }}>
            Vous êtes en train de reconsidérer votre organisation commerciale et vos outils ?
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6, maxWidth: '560px', marginInline: 'auto', marginBottom: '2rem' }}>
            Squadia accompagne les PME et ETI françaises dans la structuration de leur système de génération de revenus — du diagnostic à la mise en exécution.
          </p>
          <Link
            to="/strategie/crm"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: '#2563EB', color: '#fff',
              padding: '1rem 2rem', borderRadius: '0.5rem',
              fontWeight: 700, fontSize: '1rem', textDecoration: 'none'
            }}
          >
            Découvrir l'offre CRM <ArrowRight size={18} />
          </Link>
        </div>

      </article>
    </div>
  );
}
