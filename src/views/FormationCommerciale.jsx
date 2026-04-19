'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const bgFormation = '/assets/images/blog/formationcommercialeB2B.jpeg';
const FormationCommerciale = () => {
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
    document.title = "Formation commerciale B2B : méthode et outils IA — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Découvrez comment structurer une formation commerciale B2B avec méthode de vente complexe, sales awareness et outils IA. Pour équipes PME et ETI.";
    }
  }, []);

  return (
    <div className="blog-article" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh' }}>

      {/* ═══ BARRE DE PROGRESSION DE LECTURE ═══ */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', zIndex: 9999, pointerEvents: 'none' }}>
        <div style={{ height: '100%', width: `${readingProgress}%`, background: 'linear-gradient(90deg, #2563EB 0%, #44CCFF 100%)', transition: 'width 0.1s linear', boxShadow: '0 0 12px rgba(37,99,235,0.8), 0 0 4px rgba(68,204,255,0.5)' }} />
      </div>
      
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Fond pleine page */}
        <img src={bgFormation} alt="" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0
        }} />
        {/* Overlays pour lisibilité */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: 'rgba(10,10,26,0.30)'
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(10,10,26,0.7) 0%, rgba(10,10,26,0.2) 50%, rgba(10,10,26,0.8) 100%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '100px', paddingBottom: '60px' }}>
          <div style={{ maxWidth: '850px', marginInline: 'auto', textAlign: 'center' }}>
            <Link href="/ressources" style={{ display: 'inline-flex', alignItems: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '2.5rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F9FAFB'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>
              <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Retour aux ressources
            </Link>
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', border: '1px solid #2563EB', backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#44CCFF', backdropFilter: 'blur(8px)' }}>
                Formation
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2.5rem', color: '#FFFFFF', letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Formation commerciale B2B : devenir plus autonome et performant avec l'IA
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2563EB' }}></div>
                Lecture : 6 min
              </div>
              <div style={{ width: '1px', height: '14px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              <div>Insights Terrain</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — CONTENU ARTICLE ═══ */}
      <section className="section-padding container" style={{ paddingTop: '0' }}>
        <div className="fade-in" style={{ maxWidth: '800px', marginInline: 'auto', fontSize: '1.15rem', lineHeight: 1.8, color: '#D1D5DB' }}>
          
          <p style={{ marginBottom: '2.5rem', fontSize: '1.25rem', color: '#F9FAFB' }}>
            77% des acheteurs estiment que les commerciaux ne comprennent pas leurs problématiques. C'est un chiffre Forrester qui date un peu, mais qui reste juste. Pas parce que les commerciaux manquent de bonne volonté. Parce qu'ils manquent de méthode, de préparation, et parfois des bons outils pour aller chercher ce qui ne se dit pas spontanément dans un rendez-vous.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Former des équipes commerciales B2B, c'est précisément travailler sur ces trois dimensions à la fois.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            La méthode de vente, socle que beaucoup d'entreprises n'ont pas encore posé
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Challenger Selling chez Dell et d'autres grands noms de l'IT, MEDDIC chez des acteurs de la vente complexe, SPIN Selling pour les phases de découverte approfondies. Ces méthodes ne sont pas des gadgets académiques. Elles répondent à une réalité simple : sans cadre commun, chaque commercial parle son propre langage.
          </p>
          <p style={{ marginBottom: '1.5rem', padding: '1.5rem', background: '#0D0D25', borderLeft: '4px solid #2563EB', borderRadius: '4px' }}>
            MEDDIC en particulier structure ce que trop d'équipes laissent flou. Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion. <strong>Quand un commercial dit qu'il s'engage sur un deal, ça doit vouloir dire la même chose pour tout le monde, du terrain au COMEX.</strong> Si ce n'est pas le cas, le manager ne peut pas piloter, la supply chain ne peut pas anticiper, et les prévisions restent des paris.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Ce qu'on observe dans les entreprises qui n'ont pas encore de méthode installée : les commerciaux font le lièvre sur des propositions commerciales sans savoir s'ils ont vraiment coché les bonnes cases. Ils ont l'impression d'avoir bien travaillé un deal, mais ils ne peuvent pas le démontrer. Et le manager qui a la responsabilité d'un chiffre ne sait pas sur quoi s'appuyer pour défendre ses projections.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Le sales awareness, ce que la méthode seule ne donne pas
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La méthode crée le cadre. Le sales awareness, lui, c'est la conscience commerciale. La capacité à lire une situation en temps réel : comprendre que l'interlocuteur est dans une position politique compliquée en interne, qu'il ne peut pas nous dire tout ce qu'il sait, qu'il est sous pression ou à l'inverse qu'il a les pleins pouvoirs. Savoir quand poser une question de plus et quand s'arrêter. Comprendre ce que le silence signifie.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            C'est ce qui permet à un commercial d'être celui qui débloque les problèmes du client plutôt que celui qui les subit. Montrer de la valeur sans comprendre l'écosystème, les jeux politiques et les contraintes internes d'un compte, c'est souvent impossible.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Le sales awareness ne s'apprend pas dans un manuel. Il se développe par l'exposition à des situations réelles, par le jeu de rôles, par le retour d'expérience structuré. C'est pour ça que nos formations commerciales intègrent des mises en situation concrètes où les participants jouent à tour de rôle l'acheteur, le commercial et le manager. Ce changement de perspective change la façon dont on prépare et conduit les rendez-vous.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Ce que l'IA change dans la préparation et la conduite des rendez-vous B2B
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            L'IA n'est pas là pour remplacer le sales awareness. Elle est là pour le préparer et le prolonger.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Avant le rendez-vous, des outils comme <a href="http://Humantic.io" target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', textDecoration: 'underline' }}>Humantic.io</a> permettent d'analyser le profil comportemental d'un interlocuteur que vous ne connaissez pas encore. En quelques minutes, vous avez une lecture de son style de décision, de ce qui compte pour lui, de la façon dont il préfère recevoir l'information. Ce n'est pas de la divination. C'est de la préparation structurée qui permet d'arriver avec le bon angle plutôt que de l'improviser en salle.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Pendant et après le rendez-vous, des outils comme Claude permettent de structurer rapidement les informations collectées, de préparer un résumé des engagements pris, de rédiger les prochaines étapes avec précision. Ce que certains commerciaux mettaient 45 minutes à faire après chaque rendez-vous peut se faire en 5 minutes avec une bonne méthode d'utilisation des outils.
          </p>
          <p style={{ marginBottom: '3rem', fontStyle: 'italic', color: '#F9FAFB' }}>
            Ce n'est pas une liste d'outils pour faire joli. C'est une façon concrète de récupérer du temps sur les tâches à faible valeur pour le concentrer sur ce qui crée vraiment de la valeur : la relation, la compréhension des enjeux, la construction de la confiance.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Junior et senior n'ont pas besoin de la même chose
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Sur le terrain, ça saute aux yeux : un junior doit apprendre à tenir son premier rendez-vous sans perdre le fil, à qualifier sans brûler les étapes, à gérer le silence. Un senior, lui, doit travailler autre chose. La finesse, l'écoute active, la capacité à challenger un décideur expérimenté sans le braquer, à orchestrer les ressources internes autour d'un compte stratégique.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Les former de la même façon, c'est perdre du temps et frustrer tout le monde. Une formation efficace s'adapte au niveau, aux typologies de comptes travaillés, et aux situations réelles que chaque commercial va rencontrer.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Vendre par les fonctionnalités, l'erreur classique
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Les meilleurs pitchs partent du problème client, pas du produit. Quand on illustre avec des situations concrètes et reconnaissables plutôt que des fonctionnalités, l'interlocuteur s'implique. Il pose des questions. Il commence à projeter.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            C'est valable pour le pitch oral, mais aussi pour la façon dont on prépare une proposition commerciale, dont on structure un plan de compte, dont on anticipe les objections. L'IA peut aider à générer plusieurs angles d'approche sur un compte spécifique en quelques minutes. Ce qui prenait une demi-heure de réflexion peut se faire en itérant rapidement avec le bon outil.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Un deal se gagne rarement seul
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Sur le terrain, un commercial qui gagne ses deals tout seul, ça n'existe presque pas. Il y a presque toujours un moment où il faut embarquer quelqu'un : un collègue du marketing pour une action ciblée sur un compte, un partenaire indirect, une équipe technique pour répondre à une objection précise.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Apprendre à orchestrer les ressources autour de soi sans autorité hiérarchique, c'est l'un des sauts de maturité les plus importants dans une carrière commerciale. Et ça change complètement la façon de gérer un territoire.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Ce que ça change dans les résultats
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La formation commerciale n'est pas un bonus RH. C'est un investissement dans la capacité des équipes à être autonomes sur leur territoire, créatives dans leur approche, et rentables pour l'entreprise.
          </p>
          <p style={{ marginBottom: '3rem', fontWeight: 600, color: '#F9FAFB' }}>
            Ce qu'on a retenu de nos années de vente et de formation : la vraie différence vient de la mise en pratique, de la continuité, et de la capacité à embarquer les autres avec soi. Pas du nombre de slides vues en formation.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #1A1A3A', margin: '3rem 0' }} />

          {/* ══ SECTION ARTICLES (A lire aussi) ══ */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>À lire aussi</h2>
            <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
              <Link href="/blog/formation-ia-ou-automatisation" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #44CCFF', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#44CCFF' }}>Transformation</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Formation IA ou automatisation des process : dans quel ordre transformer son entreprise ?</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
              <Link href="/blog/nettoyage-segmentation-enrichissement-donnees-b2b" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #2563EB', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563EB' }}>Data B2B</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
            </div>
          </div>

          {/* ═══ CTA ARTICLE ═══ */}
          <div style={{ background: 'linear-gradient(145deg, #0A0A1A, #0D0D25)', border: '1px solid #2563EB', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#F9FAFB', marginBottom: '1.5rem' }}>
              Vous voulez structurer une formation commerciale adaptée à vos équipes ?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Squadia conçoit des programmes sur mesure pour les directions commerciales, du junior au manager senior.
            </p>
            <Link href="/formation-ia" className="btn btn-primary pulse" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#2563EB', color: '#FFFFFF' }}>
              Découvrir l'offre Formation <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default FormationCommerciale;
