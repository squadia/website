'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProspectionErreurs = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Prospection multicanale B2B : 5 erreurs qui font perdre des leads : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "La prospection multicanale B2B est une question de méthode. Découvrez les 5 erreurs les plus fréquentes et nos conseils pour obtenir plus de rendez-vous qualifiés.";
    }
  }, []);

  return (
    <div className="blog-article" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh' }}>
      
      {/* ═══ SECTION 1 : HERO ═══ */}
      <section className="hero container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="fade-in" style={{ maxWidth: '800px', marginInline: 'auto' }}>
          <Link href="/ressources" style={{ display: 'inline-flex', alignItems: 'center', color: '#6B7280', fontSize: '0.95rem', marginBottom: '2rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F9FAFB'} onMouseLeave={(e) => e.target.style.color = '#6B7280'}>
            <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Retour aux ressources
          </Link>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #2563EB', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563EB' }}>
              Prospection
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
            Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <div>Lecture : 4 min</div>
            <div>•</div>
            <div>Insights Terrain</div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 : CONTENU ARTICLE ═══ */}
      <section className="section-padding container" style={{ paddingTop: '0' }}>
        <div className="fade-in" style={{ maxWidth: '800px', marginInline: 'auto', fontSize: '1.15rem', lineHeight: 1.8, color: '#D1D5DB' }}>
          
          <p style={{ marginBottom: '2.5rem', fontSize: '1.25rem', color: '#F9FAFB' }}>
            La prospection multicanale, ce n'est pas une question de chance ni de volume. C'est une question de méthode, de timing, et d'alignement entre les équipes qui la portent.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Voici les cinq erreurs qu'on observe le plus souvent sur le terrain, et ce qui change quand on les corrige.
          </p>

          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Erreur 1 : confier les emails à des profils sans méthode
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Écrire un bon email de prospection, ce n'est pas facile. Sur Instagram, une image peut attirer l'oeil en un instant. Sur LinkedIn, un post peut être liké sans même être lu. Par email, vous n'avez qu'une seule arme : vos mots. Et ça ne s'improvise pas.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Trop souvent, on confie l'emailing à des stagiaires ou à des profils juniors sans les avoir formés sur ce que ça demande. Résultat : des emails trop longs où l'on balance toutes les fonctionnalités du produit, des séquences qui s'arrêtent après deux relances sans valeur ajoutée, zéro personnalisation réelle.
          </p>
          <p style={{ marginBottom: '3rem', padding: '1.5rem', background: '#0D0D25', borderLeft: '4px solid #44CCFF', borderRadius: '4px' }}>
            <strong>Ce qui marche, c'est l'inverse.</strong> Des messages courts qui parlent de la douleur de l'interlocuteur, appuyés par un exemple client, et qui ouvrent une conversation. Le premier email n'a pas besoin de tout dire. Il a besoin de donner envie de répondre.
          </p>

          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Erreur 2 : ignorer la fenêtre de tir
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Le timing, c'est ce qui fait la différence entre un email ignoré et un rendez-vous décroché.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Selon Gartner, 60% du budget d'un manager arrivé depuis moins de 6 mois est engagé dès sa prise de poste. C'est une fenêtre rare : la personne n'a pas encore ses fournisseurs habituels, elle doit prendre des décisions rapides et visibles, et elle est plus ouverte à de nouvelles solutions.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Sur le terrain, ça se traduit concrètement : utilisez LinkedIn et votre CRM pour identifier ces nouveaux entrants. Croisez avec leurs publications, leurs chantiers annoncés. Si vous connaissez leur feuille de route, votre email n'arrive plus dans le vide. Il arrive comme une réponse à un besoin actuel.
          </p>

          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Erreur 3 : écrire comme un catalogue, pas comme un humain
          </h2>
          <p style={{ marginBottom: '1.5rem', fontStyle: 'italic' }}>
            "Je vous contacte pour vous présenter notre solution innovante..." : si vous commencez comme ça, vous êtes déjà perdu.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Un email ou un appel de prospection, c'est un premier contact humain. Votre prospect doit sentir que vous l'écoutez, que vous comprenez ses problématiques. Et quand'un prospect s'ouvre, c'est le moment de pratiquer l'écoute active : questions précises, reformulation, empathie.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            C'est ce que travaillent des méthodes comme SPIN Selling, MEDDIC ou Challenger Selling. L'outil ne fait pas tout. La compétence relationnelle du commercial reste le levier principal. C'est pour ça qu'on forme les équipes chez Squadia à développer cette intelligence de situation, pas seulement à remplir des séquences.
          </p>

          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Erreur 4 : vouloir faire du volume sans cadence adaptée
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Envoyer 1 000 emails peut sembler ambitieux. Mais si votre équipe en envoie 50 par jour, il vous faudra trois semaines pour adresser votre cible. 10 000 contacts ? Comptez soixante semaines.
          </p>
          <p style={{ marginBottom: '1.5rem', fontWeight: 600, color: '#F9FAFB' }}>
            La prospection, ce n'est pas envoyer plus. C'est cadencer intelligemment.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Sur un petit territoire, privilégiez la personnalisation poussée, quitte à envoyer moins. En phase de chasse large, automatisez une partie des séquences mais gardez du temps et de l'énergie pour vos comptes Tier 1. Sinon, vous vous épuisez avant même de pouvoir mesurer l'impact.
          </p>

          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Erreur 5 : laisser marketing et ventes travailler en silos
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            On le voit souvent : le marketing lance une campagne, mais les commerciaux ne la relaient pas. Ou les commerciaux prospectent, mais sans contenu ni support cohérent fourni par le marketing. Résultat : double dépense, zéro cohérence, et des prospects qui reçoivent des messages contradictoires.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Ce qui marche, c'est l'alignement. Le marketing prépare des séquences et du contenu contextualisé. Les commerciaux s'en servent comme levier dans leurs interactions. Les deux équipes partagent les mêmes indicateurs : rendez-vous obtenus, taux d'engagement, opportunités créées.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Quand cette synergie existe, l'impact est démultiplié. Un commercial devient deux à trois fois plus productif parce que chaque canal travaille pour lui au lieu de travailler à côté de lui.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #1A1A3A', margin: '3rem 0' }} />

          <p style={{ marginBottom: '3rem', fontSize: '1.25rem', color: '#F9FAFB', fontWeight: 500 }}>
            Eviter ces cinq erreurs, c'est déjà transformer vos campagnes en rendez-vous concrets. Ce n'est pas une question de budget ni de stack technologique. C'est une question de méthode et de coordination.
          </p>

          {/* ══ SECTION ARTICLES (A lire aussi) ══ */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '2rem', textAlign: 'center' }}>À lire aussi</h2>
            <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
              <Link href="/blog/nettoyage-segmentation-enrichissement-données-b2b" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>Data B2B</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
              <Link href="/blog/strategie-ia-pme-eti" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #8B5CF6', backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#A78BFA' }}>Stratégie IA</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Comment mettre en place une strategie IA en PME et ETI : séquence, outils et premiers résultats</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
            </div>
          </div>

          {/* ═══ CTA ARTICLE ═══ */}
          <div style={{ background: 'linear-gradient(145deg, #0A0A1A, #0D0D25)', border: '1px solid #44CCFF', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#F9FAFB', marginBottom: '1.5rem' }}>
              Vous voulez analyser vos séquences de prospection et identifier les points bloquants ?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Squadia accompagne les équipes commerciales et marketing dans la structuration de leur prospection multicanale.
            </p>
            <Link href="/data" className="btn btn-primary pulse" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Découvrir l'offre Data <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProspectionErreurs;
