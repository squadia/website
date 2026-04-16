import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import nettoyageData from '../assets/images/blog/cleaningdata.jpeg';

const DataB2B = () => {
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
    document.title = "Nettoyage et segmentation de données B2B — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Découvrez comment nettoyer et segmenter vos données B2B pour maximiser l'efficacité de vos campagnes de prospection. Méthode Squadia pour PME et ETI.";
    }
  }, []);

  return (
    <div className="blog-article" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh' }}>

      {/* ═══ BARRE DE PROGRESSION DE LECTURE ═══ */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', zIndex: 9999, pointerEvents: 'none' }}>
        <div style={{ height: '100%', width: `${readingProgress}%`, background: 'linear-gradient(90deg, #2563EB 0%, #44CCFF 100%)', transition: 'width 0.1s linear', boxShadow: '0 0 12px rgba(37,99,235,0.8), 0 0 4px rgba(68,204,255,0.5)' }} />
      </div>
      
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', background: '#0A0A1A', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={nettoyageData} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,26,0.2)', zIndex: 1 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30vh', background: 'linear-gradient(to bottom, transparent, #0A0A1A)', zIndex: 2 }} />
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{ background: 'rgba(10,10,26,0.3)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', padding: '3rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <Link to="/ressources" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF', fontSize: '0.9rem', textDecoration: 'none', marginBottom: '2rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
              <ArrowLeft size={16} /> Retour aux ressources
            </Link>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #2563EB', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#2563EB' }}>
                Data B2B
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '1.5rem', color: '#F9FAFB' }}>
              Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
              <div>Lecture : 5 min</div>
              <div>•</div>
              <div>Insights Terrain</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — CONTENU ARTICLE ═══ */}
      <section className="section-padding container" style={{ paddingTop: '0' }}>
        <div className="fade-in" style={{ maxWidth: '800px', marginInline: 'auto', fontSize: '1.15rem', lineHeight: 1.8, color: '#D1D5DB' }}>
          
          <p style={{ marginBottom: '2.5rem', fontSize: '1.25rem', color: '#F9FAFB' }}>
            Avant de lancer une campagne, avant de construire une séquence de prospection, avant même de choisir un outil — il y a un travail que personne n'a envie de faire et que tout le monde finit par regretter d'avoir sauté.
          </p>
          <p style={{ marginBottom: '1.5rem', fontWeight: 600, color: '#F9FAFB' }}>
            Nettoyer ses données. Les segmenter. Les enrichir.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Ce n'est pas glamour. Mais c'est ce qui sépare une campagne qui tourne de celle qui s'essouffle après deux semaines.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Le nettoyage : la vaisselle de la data
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Le nettoyage, c'est un peu comme faire la vaisselle après un bon repas. Personne n'a envie. Mais si vous ne le faites pas, le prochain dîner sera un cauchemar.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Concrètement, ce que ça veut dire sur un fichier de prospection :
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Un email obsolète, c'est une opportunité qui part à la poubelle avant même d'avoir été lue. Jérémy Duchemin qui a quitté Pollux pour Tartanpion il y a six mois — si votre base ne le sait pas, votre message n'arrivera jamais au bon endroit. Et les doublons, c'est pire : deux commerciaux qui contactent le même décideur à trois jours d'intervalle, ça fait amateur.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Il y a aussi les titres trompeurs. Un "Sales Manager" n'est pas toujours un manager d'équipe — parfois c'est un commercial terrain sans budget ni décision. Envoyer le mauvais message au mauvais niveau hiérarchique, c'est du temps gaspillé des deux côtés.
          </p>
          <p style={{ marginBottom: '3rem', padding: '1.5rem', background: '#0D0D25', borderLeft: '4px solid #2563EB', borderRadius: '4px' }}>
            Et un détail que peu de gens prennent au sérieux : <strong>un nom d'entreprise avec un emoji dans le champ de personnalisation d'un email</strong>, ça casse immédiatement la crédibilité du message. Les outils comme Dropcontact permettent de nettoyer et vérifier tout ça automatiquement, et font gagner un temps considérable.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            La segmentation : parler à tout le monde, c'est parler à personne
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Un email générique n'émeut personne. La vraie efficacité vient du tiering — classer vos comptes selon leur importance et adapter vos efforts en conséquence.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Un compte Tier 1 mérite une approche personnalisée, une recherche préalable, un message construit autour de sa situation spécifique. Un compte Tier 3 peut recevoir une séquence plus automatisée. Ce n'est pas une question de respect — c'est une question d'allocation intelligente du temps de vos équipes.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Le problème que la plupart des organisations rencontrent, c'est la fusion de bases. CRM, fichiers Excel, exports LinkedIn, listes achetées — quand tout ça se retrouve dans la même campagne sans avoir été réconcilié, les commerciaux attendent des semaines leurs listes et la campagne est déjà périmée avant d'avoir commencé. L'automatisation de cette étape n'est pas un luxe, c'est une condition pour que la machine tourne.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            L'enrichissement : vos données sont incomplètes, et ce n'est pas grave
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La plupart des CRM ressemblent à un puzzle avec des pièces manquantes. C'est normal. Ce qui l'est moins, c'est de lancer une campagne sans avoir comblé les trous.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Quelques outils qui fonctionnent bien sur ce sujet :
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><strong>FullEnrich</strong> recoupe plusieurs sources avec un taux d'enrichissement autour de 80% — 8 numéros sur 10 trouvés via LinkedIn — et reste 100% GDPR compliant.</li>
            <li><strong>Cognism</strong> est certifié ISO et fiable sur la conformité, particulièrement utile pour les entreprises qui ont des exigences légales strictes sur leurs données.</li>
            <li><strong>Dropcontact</strong> fait à la fois l'enrichissement, la déduplication et la vérification en un seul outil — pratique quand on veut centraliser.</li>
          </ul>
          <p style={{ marginBottom: '3rem', fontStyle: 'italic', color: '#F9FAFB' }}>
            Un point de vigilance qui ne devrait pas en être un mais l'est encore trop souvent : certains acteurs du marché ne sont pas conformes au RGPD. Les amendes, les pertes de réputation et les complications juridiques qui s'ensuivent ne valent pas le temps gagné sur le prix. Chez Squadia, c'est une ligne qu'on ne franchit pas avec nos clients.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Clay.com : puissant, mais pas pour tout le monde
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Si vous ne connaissez pas <a href="http://Clay.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', textDecoration: 'underline' }}>Clay.com</a>, c'est un peu le Notion de la data commerciale. Vous créez des tableaux intelligents qui vont chercher de l'information automatiquement, la formatent et la rendent exploitable pour vos campagnes.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            C'est puissant. C'est aussi cher et ça demande un certain niveau de maturité pour en tirer de la valeur. Dans les formations que Squadia anime sur ces sujets, on partage également des alternatives plus accessibles qui font 80% du travail pour une fraction du coût — selon la taille de l'équipe et le volume de contacts à traiter.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: '#F9FAFB', marginTop: '3rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Ce que tout ça change réellement
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Le nettoyage évite de passer pour un amateur. La segmentation rend les messages plus justes et les efforts mieux alloués. L'enrichissement donne aux commerciaux les informations dont ils ont besoin pour arriver en rendez-vous préparés.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Ce ne sont pas des étapes techniques optionnelles. Ce sont les conditions de base pour qu'une campagne produise autre chose que du bruit.
          </p>
          <p style={{ marginBottom: '3rem', fontWeight: 600, color: '#F9FAFB' }}>
            Et au fond, c'est la meilleure preuve de respect qu'on puisse donner à un prospect : lui parler correctement, avec les bonnes informations, au bon moment.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #1A1A3A', margin: '3rem 0' }} />

          {/* ══ SECTION ARTICLES (A lire aussi) ══ */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>À lire aussi</h2>
            <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
              <Link to="/blog/prospection-multicanale-b2b-erreurs" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #F97316', backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>Prospection</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
              <Link to="/blog/formation-commerciale-b2b-ia" style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, border-color 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#44CCFF'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1A1A3A'; }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34D399' }}>Formation commerciale</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '2rem', flexGrow: 1, color: '#F9FAFB' }}>Formation commerciale B2B : comment rendre vos équipes autonomes et performantes avec l'IA</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: '#44CCFF', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} /></div>
              </Link>
            </div>
          </div>

          {/* ═══ CTA ARTICLE ═══ */}
          <div style={{ background: 'linear-gradient(145deg, #0A0A1A, #0D0D25)', border: '1px solid #2563EB', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#F9FAFB', marginBottom: '1.5rem' }}>
              Vous voulez savoir si vos données sont prêtes pour votre prochaine campagne ?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Squadia accompagne les équipes marketing et commerciales dans la structuration de leur data, de la segmentation à l'activation.
            </p>
            <Link to="/data" className="btn btn-primary pulse" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#2563EB', color: '#FFFFFF' }}>
              Parler à un expert Data <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DataB2B;
