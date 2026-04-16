import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import blog1 from '../assets/images/blog/blog1.png';

export default function BlogStrategieIAPME() {
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
    document.title = "Comment mettre en place une stratégie IA en PME et ETI — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Séquence, outils et premiers résultats : comment les PME et ETI françaises peuvent structurer leur stratégie IA pour obtenir un retour concret en 90 jours.";
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
        {/* L'image de fond - Plus lumineuse */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}>
          <img 
            src={blog1} 
            alt="" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', // Remplit l'écran pour l'effet "pleine page"
              opacity: 1 // Luminosité maximale
            }} 
          />
          {/* Overlay global très léger pour lier l'image au design sombre */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(10,10,26,0.2)', // Très subtil
            zIndex: 1
          }} />
          {/* Gradient de bas de page pour transition vers l'article */}
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

        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          padding: '0 2rem', 
          position: 'relative', 
          zIndex: 10,
          width: '100%'
        }}>
          {/* Bloc de texte avec effet Glassmorphism - Allégé */}
          <div style={{
            background: 'rgba(10, 10, 26, 0.3)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            padding: '3rem',
            borderRadius: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            {/* Back link */}
            <Link to="/ressources" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#9CA3AF',
              fontSize: '0.9rem',
              textDecoration: 'none',
              marginBottom: '2rem',
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#44CCFF'}
              onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
            >
              <ArrowLeft size={16} /> Retour aux ressources
            </Link>

            {/* Tag */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                background: '#2563EB',
                color: '#FFFFFF',
                padding: '0.35rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Stratégie IA
              </span>
            </div>

            {/* Title */}
            <h1 className="blog-article-h1" style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: '2rem',
              letterSpacing: '-0.03em'
            }}>
              Comment mettre en place une stratégie IA en PME et ETI : séquence, outils et premiers résultats
            </h1>

            {/* Meta & Divider */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#D1D5DB', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="#2563EB" /> Avril 2025
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color="#2563EB" /> 8 min de lecture
                </span>
              </div>
              <div style={{ width: '80px', height: '4px', background: '#2563EB', borderRadius: '2px' }} />
            </div>
          </div>
        </div>

        {/* Petit indicateur de scroll en bas */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          color: '#FFFFFF',
          animation: 'bounce 2s infinite'
        }}>
          <style>{`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
              40% {transform: translateY(-10px) translateX(-50%);}
              60% {transform: translateY(-5px) translateX(-50%);}
            }
          `}</style>
          <div style={{ opacity: 0.6, fontSize: '0.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>Lire l'article</div>
          <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #2563EB, transparent)', margin: '0 auto' }} />
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <article style={{ maxWidth: '820px', margin: '0 auto', padding: '2rem 2rem 8rem' }}>

        {/* Article styles inline via a wrapper */}
        <style>{`
          .article-body p {
            font-size: 1.05rem;
            line-height: 1.85;
            color: rgba(249,250,251,0.75);
            margin-bottom: 1.6rem;
          }
          .article-body h2 {
            font-size: 1.55rem;
            font-weight: 800;
            color: #F9FAFB;
            margin-top: 3.5rem;
            margin-bottom: 1.2rem;
            line-height: 1.25;
            letter-spacing: -0.01em;
          }
          .article-body h2::before {
            content: '';
            display: block;
            width: 36px;
            height: 3px;
            background: #2563EB;
            border-radius: 2px;
            margin-bottom: 1rem;
          }
          .article-body strong {
            color: #F9FAFB;
            font-weight: 700;
          }
          .article-body hr {
            border: none;
            border-top: 1px solid #1A1A3A;
            margin: 3rem 0;
          }
          .article-body ul {
            list-style: none;
            margin-bottom: 1.6rem;
          }
          .article-body ul li {
            font-size: 1.05rem;
            line-height: 1.85;
            color: rgba(249,250,251,0.75);
            padding-left: 1.4rem;
            position: relative;
            margin-bottom: 0.5rem;
          }
          .article-body ul li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: #2563EB;
            font-weight: 700;
          }
          .article-pullquote {
            border-left: 3px solid #2563EB;
            padding: 1.2rem 1.8rem;
            margin: 2.5rem 0;
            background: rgba(37,99,235,0.06);
            border-radius: 0 0.75rem 0.75rem 0;
          }
          .article-pullquote p {
            font-size: 1.1rem !important;
            color: #E5E7EB !important;
            font-style: italic;
            margin-bottom: 0 !important;
          }
          .article-highlight-box {
            background: #0D0D25;
            border: 1px solid #1A1A3A;
            border-radius: 1rem;
            padding: 2rem 2.5rem;
            margin: 2.5rem 0;
          }
          .article-highlight-box h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #60A5FA;
            margin-bottom: 0.75rem;
          }
          .article-highlight-box p {
            margin-bottom: 0 !important;
          }
          .article-stat {
            display: flex;
            gap: 1.5rem;
            background: rgba(37,99,235,0.06);
            border: 1px solid rgba(37,99,235,0.2);
            border-radius: 1rem;
            padding: 1.5rem 2rem;
            margin: 2rem 0;
            align-items: center;
          }
          .article-stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            color: #60A5FA;
            line-height: 1;
            flex-shrink: 0;
          }
          .article-stat-label {
            font-size: 0.95rem;
            color: rgba(249,250,251,0.65);
            line-height: 1.5;
          }
        `}</style>

        <div className="article-body">

          <p><em>Tout le monde parle de stratégie IA.</em></p>
          <p><em>Très peu d'entreprises en ont une qui fonctionne réellement.</em></p>

          <div className="article-pullquote">
            <p>La différence ne vient pas du budget. Elle vient de la séquence.</p>
          </div>

          <hr />

          <h2>Ce que tout le monde a vu arriver — et que peu ont vraiment suivi</h2>

          <p>Il y a trois ans, GPT-3 était une curiosité de labo. En moins d'un an, GPT-4 était connecté à internet, capable de chercher, de lire, de répondre en temps réel. En parallèle, la génération d'images a évolué à une vitesse que personne n'avait vraiment anticipée. Tout ça en 18 mois.</p>

          <p>Puis est arrivée une autre rupture, plus discrète mais plus structurante : <strong>l'IA agentique</strong>.</p>

          <p>Ce n'est plus un outil qu'on interroge. C'est un système qui agit. Un client télécharge un document sur votre site : un agent identifie son rôle, son secteur, son entreprise, rédige un message personnalisé, crée une tâche dans votre CRM, l'assigne à un commercial, et envoie une séquence de suivi adaptée. Sans intervention humaine. En temps réel.</p>

          <p>Puis est arrivé le MCP — la capacité de connecter plusieurs applications autour d'un point central intelligent qui ne se contente pas d'exécuter : il comprend le contexte, décide quelle application activer, dans quel ordre, avec quelle logique. <strong>L'IA devient architecte de processus, pas seulement exécutant de tâches.</strong></p>

          <p>Ce que ça signifie concrètement : le champ du possible s'est élargi plus vite que la capacité de la plupart des organisations à le cartographier. Et c'est précisément là que le problème commence.</p>

          <hr />

          <h2>Pourquoi même les grands groupes se font dépasser</h2>

          <p>On aurait pu penser que les grandes structures, avec leurs budgets et leurs équipes dédiées, auraient l'avantage. C'est souvent l'inverse.</p>

          <p>La séquence typique : un grand cabinet ou une ESN identifie une opportunité IA, constitue une équipe, réfléchit à une offre, la formalise, la valide en interne, la lance sur le marché. Problème : entre le moment où l'offre a été conçue et celui où elle est commercialisée, l'IA a évolué. <strong>L'offre est déjà partiellement obsolète à son lancement.</strong></p>

          <p>Les structures agiles — qui peuvent pivoter en semaines, pas en trimestres — ont un avantage structurel dans cet environnement. Pas parce qu'elles sont plus intelligentes. Parce qu'elles absorbent le changement plus vite.</p>

          <div className="article-highlight-box">
            <h3>Pour une PME ou une ETI qui cherche un partenaire IA</h3>
            <p>La taille du cabinet n'est pas un indicateur de pertinence dans un domaine qui évolue aussi vite.</p>
          </div>

          <hr />

          <h2>Le vrai chiffre qu'il faut avoir en tête</h2>

          <div className="article-stat">
            <div className="article-stat-number">80%</div>
            <div className="article-stat-label">des déploiements IA en PME n'atteignent jamais le niveau d'impact attendu. Pas parce que la technologie ne fonctionne pas — parce que les entreprises ont répondu à la mauvaise question.</div>
          </div>

          <p>Elles ont demandé : <em>quel outil utiliser ?</em> Alors que la bonne question est : <strong>où est-ce que l'IA crée réellement de la valeur dans mon organisation, compte tenu de mes processus, de mes données et de mes équipes ?</strong></p>

          <div className="article-stat">
            <div className="article-stat-number">94%</div>
            <div className="article-stat-label">des dirigeants français déclarent vouloir investir dans l'IA. Seulement <strong>2%</strong> estiment avoir obtenu un retour sur investissement réel en 2024. L'écart entre intention et résultat, c'est une question de méthode, pas de budget.</div>
          </div>

          <hr />

          <h2>Ce qu'il est déjà possible de faire — et que beaucoup ignorent</h2>

          <p>Il n'est pas nécessaire de vouloir aller sur la Lune pour tirer parti de l'IA. Si l'objectif est d'aller de Paris à Limoges dans les meilleures conditions, pas besoin d'une fusée. Il y a besoin du bon train.</p>

          <p>Ce qui existe déjà sur l'étagère et fonctionne aujourd'hui en PME et ETI :</p>

          <div className="article-highlight-box">
            <h3>Agents vocaux et conversationnels</h3>
            <p>Un agent capable de répondre aux questions des clients, des prospects ou des partenaires en dehors des heures ouvrables, sur vos produits, vos offres, vos tarifs. Squadia l'a mis en place sur sa propre page d'accueil. Ce n'est pas un prototype. C'est en production.</p>
          </div>

          <div className="article-highlight-box">
            <h3>Automatisation de workflows commerciaux</h3>
            <p>Téléchargement d'un document, identification du profil, création d'une tâche commerciale, message personnalisé. Ce que des plateformes d'ABM vendaient à des dizaines de milliers d'euros par an, des systèmes d'automatisation modernes permettent de le reproduire pour une fraction du coût.</p>
          </div>

          <div className="article-highlight-box">
            <h3>Intelligence sur les comptes clés</h3>
            <p>Suivre l'activité de vos comptes stratégiques, détecter les signaux d'achat, déclencher des actions ciblées. Sans investissement massif en infrastructure. Avec de la créativité dans la conception des workflows.</p>
          </div>

          <p>Le coût réel d'une automatisation bien conçue sur des outils du marché tourne entre <strong>0,05 et 0,10€ par exécution</strong>. Ce qui se mesure, c'est la valeur produite par rapport à ce qu'on dépensait avant.</p>

          <hr />

          <h2>Un signe révélateur que peu de dirigeants prennent au sérieux</h2>

          <p>Regardez votre site internet.</p>

          <p>Est-il lisible sur mobile ? S'adapte-t-il à toutes les tailles d'écran ? Ressemble-t-il à quelque chose de propre et fonctionnel en 2025 ? Beaucoup d'entreprises françaises ont du retard sur ce point, et ce retard est visible immédiatement par leurs clients et prospects.</p>

          <div className="article-pullquote">
            <p>Le site est souvent le symptôme d'un retard plus profond : CRM mal structuré, données dispersées, pas d'automatisation, reporting manuel.</p>
          </div>

          <p>Et il y a déjà des solutions accessibles pour y remédier, rapidement, sans attendre un projet de transformation à deux ans.</p>

          <hr />

          <h2>Les 3 questions à se poser avant de choisir un outil</h2>

          <div className="article-highlight-box">
            <h3>1. Où perdons-nous le plus de temps sur des tâches à faible valeur ?</h3>
            <p>Pas en théorie. Demandez à vos commerciaux, vos équipes marketing, vos managers. Les réponses sont presque toujours les mêmes : préparation des rendez-vous, mise à jour du CRM, reporting, création de contenus répétitifs, veille. Ce sont les premiers candidats à l'automatisation.</p>
          </div>

          <div className="article-highlight-box">
            <h3>2. Où nos données sont-elles suffisamment structurées pour qu'une IA s'en serve ?</h3>
            <p>L'IA ne crée pas de valeur sur des données inexistantes ou chaotiques. Avant d'automatiser quoi que ce soit, il faut savoir dans quel état est votre CRM, vos fichiers contacts, vos historiques de campagnes. Si la donnée est mauvaise, l'automatisation amplifie le problème plutôt qu'elle ne le règle.</p>
          </div>

          <div className="article-highlight-box">
            <h3>3. Quels résultats business veut-on obtenir dans les 90 prochains jours ?</h3>
            <p>Pas dans 3 ans. Dans 90 jours. Si vous ne pouvez pas nommer un indicateur concret qui devra avoir évolué dans trois mois, votre feuille de route est trop vague pour être actionnable.</p>
          </div>

          <hr />

          <h2>Comment séquencer</h2>

          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2rem 0' }}>
            {[
              {
                period: '0 – 90 jours',
                color: '#2563EB',
                label: 'Court terme',
                content: 'Deux ou trois cas d\'usage à fort impact et faible complexité : automatisation de la prise de note et mise à jour CRM après les appels commerciaux, génération assistée de contenus marketing sur des formats répétitifs, veille sectorielle automatisée. Ces premiers résultats font gagner du temps immédiatement, et légitiment la démarche auprès des équipes sceptiques.'
              },
              {
                period: '3 – 12 mois',
                color: '#7C3AED',
                label: 'Moyen terme',
                content: 'Alignement des données marketing et commerciales, mise en place d\'agents IA métier, intégration de l\'IA dans les processus de décision. C\'est à ce stade que la stratégie IA cesse d\'être une série d\'outils et devient un système cohérent.'
              },
              {
                period: '12 mois et au-delà',
                color: '#44CCFF',
                label: 'Long terme',
                content: 'Les entreprises exposées à l\'IA ont enregistré en 2024 une croissance du chiffre d\'affaires par employé trois fois supérieure à celles qui le sont moins. Ce n\'est pas une projection. C\'est un résultat observé. Les entreprises qui structurent maintenant construisent un avantage que leurs concurrents mettront des années à rattraper.'
              }
            ].map((step, i) => (
              <div key={i} style={{
                display: 'flex', gap: '1.5rem',
                background: '#0D0D25', border: '1px solid #1A1A3A',
                borderRadius: '1rem', padding: '1.75rem 2rem'
              }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: `${step.color}22`, border: `2px solid ${step.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.8rem', color: step.color
                  }}>{i + 1}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: step.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{step.period}</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.75rem' }}>{step.label}</div>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(249,250,251,0.65)', lineHeight: 1.7, margin: 0 }}>{step.content}</p>
                </div>
              </div>
            ))}
          </div>

          <hr />

          <p>La liberté que l'IA offre aujourd'hui à une PME ou une ETI est réelle, et souvent sous-estimée. Pas besoin d'investissement massif. Pas besoin de tout transformer d'un coup. Il faut la bonne séquence, le bon diagnostic, et la capacité à agir sur ce qui existe déjà.</p>

          <div className="article-pullquote">
            <p>Les entreprises qui font ça correctement ne courent pas après les tendances. Elles construisent un avantage qui dure.</p>
          </div>

          <p><em>Celles qui brûlent les étapes achètent de l'agitation, pas de la transformation.</em></p>

        </div>

        {/* ═══ CTA BLOCK ═══ */}
        <div style={{
          marginTop: '5rem',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(124,58,237,0.08) 100%)',
          border: '1px solid rgba(37,99,235,0.25)',
          borderRadius: '1.25rem',
          padding: '3rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: '1rem' }}>Passez à l'action</p>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1rem', lineHeight: 1.2 }}>
            Vous voulez définir votre feuille de route IA avec un regard extérieur structurant ?
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6, maxWidth: '560px', marginInline: 'auto', marginBottom: '2rem' }}>
            Squadia accompagne les PME et ETI françaises de la définition de la stratégie à la mise en exécution opérationnelle.
          </p>
          <Link
            to="/strategie-ia"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: '#2563EB', color: '#fff',
              padding: '1rem 2rem', borderRadius: '0.5rem',
              fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.background = '#2563EB'}
          >
            Découvrir l'offre Stratégie IA <ArrowRight size={18} />
          </Link>
        </div>

      </article>
    </div>
  );
}
