'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { FileText, ArrowRight, BarChart, BookOpen, Handshake, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Images ressources
const blog1 = '/assets/images/blog/blog1.png';
const blog2 = '/assets/images/blog/blog2.jpeg';
const nettoyageData = '/assets/images/blog/cleaningdata.jpeg';
const blog3 = '/assets/images/blog/blog3.jpeg';
const blog4 = '/assets/images/blog/blog4.jpeg';
const formationCommercialeImg = '/assets/images/blog/formationcommercialeB2B.jpeg';
export default function Ressources() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Ressources Squadia : Guides, enquêtes et articles B2B";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Guides pratiques, enquêtes exclusives et articles de fond sur la transformation commerciale B2B : IA, CRM, automatisation, prospection et formation.");
    }
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      title: "Enquête IA B2B",
      link: "/ressources/enquête-ia-b2b",
      icon: <BarChart size={24} color="#2563EB" />,
      cta: "Répondre"
    },
    {
      title: "Guide Sales Manager",
      link: "/ressources/guide-sales-manager",
      icon: <BookOpen size={24} color="#2563EB" />,
      cta: "Télécharger"
    },
    {
      title: "Guide Marketing",
      link: "/ressources/guide-marketing-manager",
      icon: <FileText size={24} color="#2563EB" />,
      cta: "Télécharger"
    },
    {
      title: "Channel Sales Plan",
      link: "/ressources/channel-sales-plan",
      icon: <Handshake size={24} color="#2563EB" />,
      cta: "Accéder"
    }
  ];

  const articles = [
    {
      tag: "Stratégie IA",
      title: "Comment mettre en place une stratégie IA en PME",
      link: "/blog/stratégie-ia-pme-sequence",
      image: blog1,
      readTime: "8 min"
    },
    {
      tag: "Transformation IA",
      title: "Formation IA ou automatisation : quel ordre ?",
      link: "/blog/formation-ia-automatisation-ordre",
      image: blog3,
      readTime: "7 min"
    },
    {
      tag: "Data B2B",
      title: "Nettoyage, segmentation et enrichissement des données B2B : comment préparer une campagne qui convertit",
      link: "/blog/nettoyage-segmentation-enrichissement-données-b2b",
      image: nettoyageData,
      readTime: "8 min"
    },
    {
      tag: "Formation",
      title: "Formation commerciale B2B : comment rendre vos équipes autonomes et performantes avec l'IA",
      link: "/blog/formation-commerciale-b2b-ia",
      image: formationCommercialeImg,
      readTime: "7 min"
    },
    {
      tag: "Prospection",
      title: "Prospection multicanale B2B : 5 erreurs qui font perdre des leads et comment les éviter",
      link: "/blog/prospection-multicanale-b2b-erreurs",
      image: blog4,
      readTime: "6 min"
    },
    {
      tag: "Stratégie & CRM",
      title: "Pourquoi les entreprises changent de CRM",
      link: "/blog/changement-crm-organisation",
      image: blog2,
      readTime: "6 min"
    }
  ];

  return (
    <div style={{ background: '#0A0A1A', minHeight: '100vh', color: '#F9FAFB', paddingBottom: '100px' }}>

      {/* ═══ HERO ═══ */}
      <section style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="container fade-in">
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Ressources.
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#9CA3AF', maxWidth: '600px', marginInline: 'auto', lineHeight: '1.6' }}>
            Outils pratiques, guides et analyses pour accélérer votre transformation commerciale et marketing.
          </p>
        </div>
      </section>

      {/* ═══ SECTION OUTILS ═══ */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {resources.map((res, i) => (
            <Link
              key={i}
              href={res.link}
              style={{
                background: '#0D0D25',
                border: '1px solid #1A1A3A',
                borderRadius: '1rem',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              className="resource-card"
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.background = '#111135'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1A1A3A'; e.currentTarget.style.background = '#0D0D25'; }}
            >
              <div style={{
                width: '44px', height: '44px', background: 'rgba(37,99,235,0.1)',
                borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                {res.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F3F4F6', marginBottom: '0.2rem' }}>{res.title}</h3>
                <span style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  {res.cta} <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ SECTION ARTICLES ═══ */}
      <section className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '4px', height: '24px', background: '#44CCFF', borderRadius: '2px' }} />
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#F9FAFB' }}>Articles</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {articles.map((article, i) => (
            <Link
              key={i}
              href={article.link}
              style={{
                position: 'relative',
                height: '400px',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                textDecoration: 'none',
                display: 'block'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 30%, rgba(10,10,26,0.5) 60%, rgba(10,10,26,0.95) 100%)',
                zIndex: 1
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                zIndex: 2
              }}>
                <span style={{
                  background: 'rgba(37,99,235,0.8)',
                  backdropFilter: 'blur(4px)',
                  color: '#FFFFFF',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  display: 'inline-block'
                }}>
                  {article.tag}
                </span>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  marginBottom: '1rem',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>
                  {article.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={14} /> {article.readTime}
                  </span>
                  <div style={{ width: '4px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '50%' }} />
                  <span>Lire l'article</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
