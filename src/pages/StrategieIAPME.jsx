import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const StrategieIAPME = () => {
  useScrollReveal();
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
    document.title = "Stratégie IA en PME et ETI : séquence et outils — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Découvrez comment mettre en place une stratégie IA efficace pour votre PME ou ETI. Séquence, outils, et premiers résultats concrets.";
    }
  }, []);

  return (
    <div className="blog-article" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh' }}>

      {/* ═══ BARRE DE PROGRESSION DE LECTURE ═══ */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', zIndex: 9999, pointerEvents: 'none' }}>
        <div style={{ height: '100%', width: `${readingProgress}%`, background: 'linear-gradient(90deg, #2563EB 0%, #44CCFF 100%)', transition: 'width 0.1s linear', boxShadow: '0 0 12px rgba(37,99,235,0.8), 0 0 4px rgba(68,204,255,0.5)' }} />
      </div>
      
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="fade-in" style={{ maxWidth: '800px', marginInline: 'auto' }}>
          <Link to="/ressources" style={{ display: 'inline-flex', alignItems: 'center', color: '#6B7280', fontSize: '0.95rem', marginBottom: '2rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F9FAFB'} onMouseLeave={(e) => e.target.style.color = '#6B7280'}>
            <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Retour aux ressources
          </Link>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #2563EB', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563EB' }}>
              Stratégie IA
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
            Comment mettre en place une stratégie IA en PME et ETI : séquence, outils et premiers résultats
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <div>Lecture : 7 min</div>
            <div>•</div>
            <div>Insights Terrain</div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — CONTENU ARTICLE ═══ */}
      <section className="section-padding container" style={{ paddingTop: '0' }}>
        <div className="fade-in" style={{ maxWidth: '800px', marginInline: 'auto', fontSize: '1.15rem', lineHeight: 1.8, color: '#D1D5DB' }}>
          
          <p style={{ marginBottom: '2.5rem', fontSize: '1.25rem', color: '#F9FAFB' }}>
            Tout le monde parle de stratégie IA.<br/><br/>
            Très peu d'entreprises en ont une qui fonctionne réellement.<br/><br/>
            La différence ne vient pas du budget. Elle vient de la séquence.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Ce que tout le monde a vu arriver — et que peu ont vraiment suivi
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Il y a trois ans, GPT-3 était une curiosité de labo. En moins d'un an, GPT-4 était connecté à internet, capable de chercher, de lire, de répondre en temps réel. En parallèle, la génération d'images a évolué à une vitesse que personne n'avait vraiment anticipée. Tout ça en 18 mois.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Puis est arrivée une autre rupture, plus discrète mais plus structurante : l'IA agentique.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Ce n'est plus un outil qu'on interroge. C'est un système qui agit. Un client télécharge un document sur votre site : un agent identifie son rôle, son secteur, son entreprise, rédige un message personnalisé, crée une tâche dans votre CRM, l'assigne à un commercial, et envoie une séquence de suivi adaptée. Sans intervention humaine. En temps réel.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Puis est arrivé le MCP — la capacité de connecter plusieurs applications autour d'un point central intelligent qui ne se contente pas d'exécuter : il comprend le contexte, décide quelle application activer, dans quel ordre, avec quelle logique. L'IA devient architecte de processus, pas seulement exécutant de tâches.
          </p>
          <p style={{ marginBottom: '3rem', padding: '1.5rem', background: '#0D0D25', borderLeft: '4px solid #2563EB', borderRadius: '4px' }}>
            Ce que ça signifie concrètement : <strong>le champ du possible s'est élargi plus vite que la capacité de la plupart des organisations à le cartographier.</strong> Et c'est précisément là que le problème commence.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Pourquoi même les grands groupes se font dépasser
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            On aurait pu penser que les grandes structures, avec leurs budgets et leurs équipes dédiées, auraient l'avantage. C'est souvent l'inverse.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            La séquence typique : un grand cabinet ou une ESN identifie une opportunité IA, constitue une équipe, réfléchit à une offre, la formalise, la valide en interne, la lance sur le marché. Problème : entre le moment où l'offre a été conçue et celui où elle est commercialisée, l'IA a évolué. L'offre est déjà partiellement obsolète à son lancement.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Les structures agiles — qui peuvent pivoter en semaines, pas en trimestres — ont un avantage structurel dans cet environnement. Pas parce qu'elles sont plus intelligentes. Parce qu'elles absorbent le changement plus vite.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Pour une PME ou une ETI qui cherche un partenaire IA, ça a une implication directe : la taille du cabinet n'est pas un indicateur de pertinence dans un domaine qui évolue aussi vite.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Le vrai chiffre qu'il faut avoir en tête
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            80% des déploiements IA en PME n'atteignent jamais le niveau d'impact attendu. Pas parce que la technologie ne fonctionne pas. Parce que les entreprises ont répondu à la mauvaise question.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Elles ont demandé : quel outil utiliser ? Alors que la bonne question est : <strong>où est-ce que l'IA crée réellement de la valeur dans mon organisation, compte tenu de mes processus, de mes données et de mes équipes ?</strong>
          </p>
          <p style={{ marginBottom: '3rem' }}>
            En France, le paradoxe est particulièrement net : 94% des dirigeants déclarent vouloir investir dans l'IA. Seulement 2% estiment avoir obtenu un retour sur investissement réel en 2024. L'écart entre intention et résultat, c'est une question de méthode, pas de budget.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Ce qu'il est déjà possible de faire — et que beaucoup ignorent
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Il n'est pas nécessaire de vouloir aller sur la Lune pour tirer parti de l'IA. Si l'objectif est d'aller de Paris à Limoges dans les meilleures conditions, pas besoin d'une fusée. Il y a besoin du bon train.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Ce qui existe déjà sur l'étagère et fonctionne aujourd'hui en PME et ETI :
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><strong>Agents vocaux et conversationnels</strong> : un agent capable de répondre aux questions des clients, des prospects ou des partenaires en dehors des heures ouvrables, sur vos produits, vos offres, vos tarifs. Squadia l'a mis en place sur sa propre page d'accueil. Ce n'est pas un prototype. C'est en production.</li>
            <li><strong>Automatisation de workflows commerciaux</strong> : téléchargement d'un document, identification du profil, création d'une tâche commerciale, message personnalisé. Ce que des plateformes d'ABM vendaient à des dizaines de milliers d'euros par an, des systèmes d'automatisation modernes permettent de le reproduire pour une fraction du coût.</li>
            <li><strong>Intelligence sur les comptes clés</strong> : suivre l'activité de vos comptes stratégiques, détecter les signaux d'achat, déclencher des actions ciblées. Sans investissement massif en infrastructure. Avec de la créativité dans la conception des workflows.</li>
          </ul>
          <p style={{ marginBottom: '3rem', fontStyle: 'italic', color: '#F9FAFB' }}>
            Le coût réel d'une automatisation bien conçue sur des outils du marché tourne entre 0,05 et 0,10€ par exécution. Ce qui se mesure, c'est la valeur produite par rapport à ce qu'on dépensait avant.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Un signe révélateur que peu de dirigeants prennent au sérieux
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Regardez votre site internet.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Est-il lisible sur mobile ? S'adapte-t-il à toutes les tailles d'écran ? Ressemble-t-il à quelque chose de propre et fonctionnel en 2025 ? Beaucoup d'entreprises françaises ont du retard sur ce point, et ce retard est visible immédiatement par leurs clients et prospects.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Ce n'est pas un détail. Si le niveau de maturité digitale se voit sur la vitrine, il se retrouve généralement dans les processus internes : CRM mal structuré, données dispersées, pas d'automatisation, reporting manuel. Le site est souvent le symptôme d'un retard plus profond.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Et il y a déjà des solutions accessibles pour y remédier, rapidement, sans attendre un projet de transformation à deux ans.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Les 3 questions à se poser avant de choisir un outil
          </h2>
          <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#F9FAFB', marginBottom: '0.8rem' }}>Où perdons-nous le plus de temps sur des tâches à faible valeur ?</h3>
              <p>Pas en théorie. Demandez à vos commerciaux, vos équipes marketing, vos managers. Les réponses sont presque toujours les mêmes : préparation des rendez-vous, mise à jour du CRM, reporting, création de contenus répétitifs, veille. Ce sont les premiers candidats à l'automatisation.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#F9FAFB', marginBottom: '0.8rem' }}>Où nos données sont-elles suffisamment structurées pour qu'une IA s'en serve ?</h3>
              <p>L'IA ne crée pas de valeur sur des données inexistantes ou chaotiques. Avant d'automatiser quoi que ce soit, il faut savoir dans quel état est votre CRM, vos fichiers contacts, vos historiques de campagnes. Si la donnée est mauvaise, l'automatisation amplifie le problème plutôt qu'elle ne le règle.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#F9FAFB', marginBottom: '0.8rem' }}>Quels résultats business veut-on obtenir dans les 90 prochains jours ?</h3>
              <p>Pas dans 3 ans. Dans 90 jours. Si vous ne pouvez pas nommer un indicateur concret qui devra avoir évolué dans trois mois, votre feuille de route est trop vague pour être actionnable.</p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Comment séquencer
          </h2>
          <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', border: '1px solid #1A1A3A', borderRadius: '8px', background: '#0D0D25' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#2563EB', marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#2563EB', borderRadius: '50%', marginRight: '8px' }}></span> Court terme (0–90 jours)</h3>
              <p>Deux ou trois cas d'usage à fort impact et faible complexité : automatisation de la prise de note et mise à jour CRM après les appels commerciaux, génération assistée de contenus marketing sur des formats répétitifs, veille sectorielle automatisée. Ces premiers résultats font gagner du temps immédiatement, et légitiment la démarche auprès des équipes sceptiques.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid #1A1A3A', borderRadius: '8px', background: '#0D0D25' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#2563EB', marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#2563EB', borderRadius: '50%', marginRight: '8px' }}></span> Moyen terme (3–12 mois)</h3>
              <p>Alignement des données marketing et commerciales, mise en place d'agents IA métier, intégration de l'IA dans les processus de décision. C'est à ce stade que la stratégie IA cesse d'être une série d'outils et devient un système cohérent.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid #1A1A3A', borderRadius: '8px', background: '#0D0D25' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#2563EB', marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}><span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#2563EB', borderRadius: '50%', marginRight: '8px' }}></span> Long terme (12 mois et au-delà)</h3>
              <p>Les entreprises exposées à l'IA ont enregistré en 2024 une croissance du chiffre d'affaires par employé trois fois supérieure à celles qui le sont moins. Ce n'est pas une projection. C'est un résultat observé. Les entreprises qui structurent maintenant construisent un avantage que leurs concurrents mettront des années à rattraper.</p>
            </div>
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            La liberté que l'IA offre aujourd'hui à une PME ou une ETI est réelle, et souvent sous-estimée. Pas besoin d'investissement massif. Pas besoin de tout transformer d'un coup. Il faut la bonne séquence, le bon diagnostic, et la capacité à agir sur ce qui existe déjà.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Les entreprises qui font ça correctement ne courent pas après les tendances. Elles construisent un avantage qui dure.
          </p>
          <p style={{ marginBottom: '3rem', fontWeight: 600, color: '#F9FAFB' }}>
            Celles qui brûlent les étapes achètent de l'agitation, pas de la transformation.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #1A1A3A', margin: '3rem 0' }} />

          {/* ══ SECTION ARTICLES (A lire aussi) ══ */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>À lire aussi</h2>
            <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
              <Link to="/blog/formation-ia-ou-automatisation" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #2563EB', backgroundColor: 'rgba(37, 130, 246, 0.1)', color: '#2563EB' }}>Transformation</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Formation IA ou automatisation des process : dans quel ordre transformer son entreprise ?</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#2563EB', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
              <Link to="/blog/prospection-multicanale-b2b-erreurs" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #2563EB', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563EB' }}>Prospection</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#2563EB', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
            </div>
          </div>

          {/* ═══ CTA ARTICLE ═══ */}
          <div style={{ background: 'linear-gradient(145deg, #0A0A1A, #0D0D25)', border: '1px solid #2563EB', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#F9FAFB', marginBottom: '1.5rem' }}>
              Vous voulez définir votre feuille de route IA avec un regard extérieur structurant ?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Squadia accompagne les PME et ETI françaises de la définition de la stratégie à la mise en exécution opérationnelle.
            </p>
            <Link to="/strategie-ia" className="btn btn-primary pulse" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#2563EB', color: '#FFFFFF', border: 'none' }}>
              Découvrir l'offre Stratégie IA <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default StrategieIAPME;
