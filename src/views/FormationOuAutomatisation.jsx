'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FormationOuAutomatisation = () => {
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
    document.title = "Formation IA ou automatisation des process — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Découvrez la bonne séquence pour transformer votre PME ou ETI avec l'IA. Formation des équipes ou automatisation des process : par quoi commencer ?";
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
          <Link href="/ressources" style={{ display: 'inline-flex', alignItems: 'center', color: '#6B7280', fontSize: '0.95rem', marginBottom: '2rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F9FAFB'} onMouseLeave={(e) => e.target.style.color = '#6B7280'}>
            <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Retour aux ressources
          </Link>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #44CCFF', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#44CCFF' }}>
              Transformation
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
            Formation IA ou automatisation des process : dans quel ordre transformer son entreprise ?
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <div>Lecture : 6 min</div>
            <div>•</div>
            <div>Insights Terrain</div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — CONTENU ARTICLE ═══ */}
      <section className="section-padding container" style={{ paddingTop: '0' }}>
        <div className="fade-in" style={{ maxWidth: '800px', marginInline: 'auto', fontSize: '1.15rem', lineHeight: 1.8, color: '#D1D5DB' }}>
          
          <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: '#F9FAFB' }}>
            Vos équipes savent utiliser ChatGPT.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: '#F9FAFB' }}>
            Votre entreprise, elle, n'a pas encore commencé sa transformation IA.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: '#F9FAFB' }}>
            Ce n'est pas la même chose. Et la confusion entre les deux coûte cher.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            La transformation IA d'une entreprise repose sur deux piliers : former les talents pour qu'ils comprennent ce que l'IA peut faire dans leur métier, et adapter les process pour que cette compréhension produise quelque chose de concret. L'un sans l'autre ne fonctionne pas. Et pourtant, la plupart des entreprises n'en activent qu'un seul.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            La vraie question que se posent les dirigeants
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La plupart des DG qui abordent le sujet de l'IA arrivent avec la même question implicite : par où est-ce qu'on commence ?
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Pas "quel outil acheter". Pas "combien ça coûte". Mais vraiment : quelle est la bonne séquence pour ne pas se planter ?
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Ce qu'on observe sur le terrain, après avoir accompagné des PME, des ETI, des établissements publics et des groupes nationaux, c'est que la séquence fait tout. L'erreur la plus fréquente n'est pas de choisir le mauvais outil. C'est de brûler les étapes.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Étape 1 : la formation comme outil de découverte
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Avant de savoir ce que l'IA peut faire pour votre entreprise, vos équipes doivent comprendre ce que l'IA peut faire dans leur métier. C'est le point de départ, pas un préalable administratif, mais une condition réelle.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Quand on anime des ateliers de formation avec des équipes commerciales, marketing ou communication, que ce soit à la Mairie de Lyon, chez Groupama, ou dans des PME industrielles, le même phénomène se produit à chaque fois. Au bout de deux jours de pratique sur des cas concrets, les participants ne parlent plus d'IA en général. Ils parlent de leurs processus, de leurs irritants, de leurs tâches répétitives. Ils commencent à voir où ça pourrait changer quelque chose pour eux.
          </p>
          <p style={{ marginBottom: '1.5rem', fontWeight: 600, color: '#F9FAFB' }}>
            C'est exactement l'objectif d'une bonne formation : pas apprendre à utiliser un outil, mais commencer à identifier où l'IA crée de la valeur dans votre contexte précis.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Une formation bien faite produit un état de l'art partagé entre les équipes sur ce qui existe et ce qui est utilisable maintenant, des premières intuitions sur les cas d'usage prioritaires par métier, une culture commune qui évite les débats stériles sur "l'IA oui ou non", et les prémices d'une feuille de route. Pas finalisée, mais dessinée.
          </p>
          <p style={{ marginBottom: '3rem', padding: '1.5rem', background: '#0D0D25', borderLeft: '4px solid #44CCFF', borderRadius: '4px' }}>
            Ce qu'elle ne produit pas : un plan de transformation opérationnel intégré à votre stratégie d'entreprise. Ce n'est pas son rôle, et il faut l'accepter avant d'aller plus loin.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Étape 2 : faire le pont entre compréhension et système
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Une fois que vos équipes ont une première compréhension du potentiel de l'IA dans leur métier, le travail de mise en système peut commencer vraiment.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Son rôle n'est pas de vous expliquer ce qu'est l'IA. C'est de faire le pont entre les attentes métier des uns et des autres et de les traduire en quelque chose d'actionnable.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Les workflows automatisés d'abord :</strong> des chemins qui font que quand une action se produit quelque part dans votre système, une réaction intelligente se déclenche ailleurs. Un visiteur télécharge un document sur votre site ? Le commercial responsable reçoit une alerte, le score du prospect évolue, et si l'activité continue, ce prospect entre automatiquement dans une séquence de nurturing adaptée à son profil. Cela ne se configure pas en une heure. Cela se conçoit, se teste, se documente. Et quand c'est bien fait, ça tourne sans intervention humaine.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            <strong>Les agents IA métier ensuite :</strong> des outils personnalisés qui permettent à vos équipes commerciales, marketing, communication de se démultiplier avec intelligence. Préparer un rendez-vous en 5 minutes au lieu de 45. Générer des variantes de campagne sur un compte spécifique sans repartir de zéro. Faire une veille sectorielle structurée sans y passer une demi-journée. Ce n'est pas de la magie. C'est de la conception rigoureuse d'agents calibrés sur vos processus réels.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Étape 3 : mesurer ce qu'on a mis en place
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Avoir un sentiment sur ce qui fonctionne, c'est utile. Mais c'est encore mieux d'avoir des éléments factuels qui permettent de comprendre ce qui se passe réellement dans la progression des deals et dans l'activité des équipes.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            C'est là que le CRM joue son rôle de colonne vertébrale. Si vous en avez un en place et qu'il vous donne de la visibilité sur les net new meetings, sur la progression des deals d'une étape à l'autre, sur les taux de conversion entre la découverte et la proposition commerciale, alors vous avez des outils de mesure qui permettent de savoir si votre transformation avance ou non.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Ces indicateurs ne sont pas uniquement là pour le manager ou le COMEX. Ils sont là pour que le commercial lui-même comprenne où il en est, ce qui fonctionne dans son approche, et où il peut progresser. Un CRM bien structuré n'est pas un outil de reporting descendant. C'est un miroir qui aide chacun à travailler mieux.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Si ce système n'est pas encore en place, c'est souvent le premier chantier à adresser avant même de parler d'automatisation ou de formation avancée. On ne peut pas piloter ce qu'on ne mesure pas.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Étape 4 : gérer les résistances
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Dans toute équipe, il y a deux types de profils face au changement. Ceux qui sont naturellement ouverts, qui voient dans chaque nouvelle méthode ou outil une occasion de faire mieux, et ceux qui ont construit leurs habitudes sur 10, 15 ou 20 ans de terrain et qui ne voient pas pourquoi ils devraient changer.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Les seconds ne sont pas dans leur tort. Ils ont souvent des résultats, une expérience réelle, une connaissance du marché que les autres n'ont pas. Le problème n'est pas leur compétence. C'est que les conditions dans lesquelles ils vendent ont changé, et que les outils qui les aideraient à être encore plus performants sont là mais pas encore dans leurs mains.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Gérer les résistances, c'est réussir à faire comprendre que ce n'est pas une remise en question de ce qu'ils font bien. C'est une façon de faire moins de ce qui coûte du temps, des efforts, et parfois de l'énergie personnelle pour des résultats qui pourraient être meilleurs. Un commercial qui passe moins de temps sur des tâches répétitives, qui arrive mieux préparé en rendez-vous, qui a une visibilité plus claire sur ses priorités, c'est un commercial qui rentre chez lui plus serein. C'est aussi ça l'enjeu, pas seulement le chiffre d'affaires.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            La meilleure façon d'amorcer le mouvement, c'est souvent de commencer avec les champions. Ceux qui sont déjà les meilleurs dans l'équipe et qui sont ouverts à essayer. Quand ils montrent ce que ça change concrètement dans leur quotidien, les autres suivent. Pas tous, pas tout de suite. Mais le mouvement commence.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Étape 5 : ancrer les habitudes dans la durée
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Rome ne s'est pas faite en un jour, et une transformation commerciale non plus. Ce qui fait la différence entre les entreprises qui progressent vraiment et celles qui stagnent après un premier effort, c'est la capacité à itérer, à ajuster, et à construire des habitudes qui durent.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            C'est souvent à cette étape que la confusion entre outils de performance et outils de surveillance refait surface. Beaucoup d'équipes ont confondu les deux, et le résultat est toujours le même : les commerciaux remplissent les champs du CRM pour satisfaire le manager, pas pour s'en servir eux-mêmes. Le système devient une contrainte de plus plutôt qu'un levier.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            La bonne approche, c'est de rendre visible la valeur que chaque outil apporte à celui qui l'utilise, pas seulement à celui qui supervise. Quand un commercial comprend que bien renseigner un compte dans son CRM lui permet de mieux préparer son prochain rendez-vous sur ce compte, il le fait différemment. Ce n'est plus une case à cocher. C'est une ressource qu'il enrichit pour lui-même.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Les entreprises qui réussissent cette étape ne sont pas celles qui ont mis en place le meilleur outil. Ce sont celles qui ont réussi à créer une culture où l'amélioration continue est considérée comme normale, et où chaque itération, chaque discussion, chaque ajustement est vu comme une progression et non comme une remise en question.
          </p>
          <p style={{ marginBottom: '3rem', fontStyle: 'italic', color: '#F9FAFB' }}>
            Il n'y a pas de méthode parfaite. Il y a en revanche une certitude : si les questions de comment progresser ne sont jamais posées, rien ne s'améliore. Surtout dans un environnement commercial aussi compétitif qu'aujourd'hui.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #1A1A3A', margin: '3rem 0' }} />

          <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: '#F9FAFB' }}>
            La vraie question n'est pas "formation ou automatisation des process".
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: '#F9FAFB', fontWeight: 600 }}>
            C'est "dans quel ordre, pour quels objectifs, avec quelles équipes, et comment on mesure que ça avance".
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            L'IA ne transforme pas une entreprise parce qu'on a signé un contrat avec un prestataire ou envoyé ses équipes en formation. Elle transforme une entreprise quand ces cinq étapes sont articulées intelligemment, avec des objectifs mesurables à chaque jalon.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            C'est à cette condition que l'investissement produit quelque chose de durable et pas juste une ligne dans le bilan de l'année avec la mention "projet IA lancé".
          </p>


          {/* ══ SECTION ARTICLES (A lire aussi) ══ */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>À lire aussi</h2>
            <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
              <Link href="/blog/strategie-ia-pme-eti" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #8B5CF6', backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#A78BFA' }}>Stratégie IA</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Comment mettre en place une stratégie IA en PME et ETI : séquence, outils et premiers résultats</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
              <Link href="/blog/formation-commerciale-b2b-ia" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34D399' }}>Formation commerciale</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Formation commerciale B2B : comment rendre vos équipes autonomes et performantes avec l'IA</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
            </div>
          </div>

          {/* ═══ CTA ARTICLE ═══ */}
          <div style={{ background: 'linear-gradient(145deg, #0A0A1A, #0D0D25)', border: '1px solid #44CCFF', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#F9FAFB', marginBottom: '1.5rem' }}>
              Vous voulez structurer votre stratégie IA et savoir par où commencer ?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Squadia accompagne les directions générales, marketing et commerciales dans la définition et la mise en exécution de leur feuille de route IA.
            </p>
            <Link href="/strategie-ia" className="btn btn-primary pulse" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#44CCFF', color: '#FFFFFF', border: 'none' }}>
              Découvrir l'offre Stratégie IA <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default FormationOuAutomatisation;
