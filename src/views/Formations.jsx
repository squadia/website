'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, RefreshCw, Star, ArrowRight, CheckCircle2, Layout, Users, Zap, BookOpen, Award, MessageSquare, Briefcase, Megaphone, PieChart, Check } from 'lucide-react';
import ClientLogosSection from '../components/ui/ClientLogosSection';
const formationBg = '/assets/images/formationB2B.png';
const salesImg = '/assets/images/formation/commercial.png';
const marketingImg = '/assets/images/formation/marketing.jpeg';
const communicationImg = '/assets/images/formation/communication.jpeg';
const Formations = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Formations IA pour équipes commerciales, marketing et communication : Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Squadia forme vos équipes vente, marketing et communication à l'IA appliquée à leur métier. 2 jours, cas pratiques, outils concrets. Inter ou intra, financement OPCO possible.";
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Squadia forme vos équipes vente, marketing et communication à l'IA appliquée à leur métier. 2 jours, cas pratiques, outils concrets. Inter ou intra, financement OPCO possible.";
      document.head.appendChild(meta);
    }
    window.scrollTo(0, 0);

    // SYNERGY COMPONENT LOGIC
    let sqTimer;
    window.sqSet = function(i, el) {
      clearInterval(sqTimer);
      document.querySelectorAll('.sq-tab').forEach(function(t) {
        t.style.background = '';
        t.style.borderLeft = '3px solid transparent';
        var icon = t.querySelector('div:first-child');
        if (icon) icon.style.background = 'rgba(68, 204, 255, 0.07)';
        var title = t.querySelector('.sq-tab-title');
        if (title) title.style.color = 'rgba(255, 255, 255, 0.4)';
        var sub = t.querySelector('.sq-tab-sub');
        if (sub) sub.style.color = 'rgba(255, 255, 255, 0.2)';
      });
      document.querySelectorAll('[id^="sq-panel"]').forEach(function(p) { p.style.display = 'none'; });
      document.querySelectorAll('[id^="sq-pb"]').forEach(function(b) { b.style.width = '0%'; });
      
      el.style.background = 'rgba(68, 204, 255, 0.07)';
      el.style.borderLeft = '3px solid #44CCFF';
      var activeIcon = el.querySelector('div:first-child');
      if (activeIcon) activeIcon.style.background = 'rgba(68, 204, 255, 0.14)';
      var activeTitle = el.querySelector('.sq-tab-title');
      if (activeTitle) activeTitle.style.color = '#fff';
      var activeSub = el.querySelector('.sq-tab-sub');
      if (activeSub) activeSub.style.color = 'rgba(68, 204, 255, 0.6)';
      
      const panel = document.getElementById('sq-panel' + i);
      if (panel) panel.style.display = 'block';
      
      window.sqCur = i;
      window.sqProg = 0;
      window.sqStartTimer();
    };

    window.sqStartTimer = function() {
      sqTimer = setInterval(function() {
        window.sqProg += 1;
        var pb = document.getElementById('sq-pb' + window.sqCur);
        if (pb) pb.style.width = window.sqProg + '%';
        if (window.sqProg >= 100) {
          clearInterval(sqTimer);
          var next = (window.sqCur + 1) % 3;
          var tabs = document.querySelectorAll('.sq-tab');
          if (tabs[next]) window.sqSet(next, tabs[next]);
        }
      }, 100);
    };

    window.sqCur = 0;
    window.sqProg = 0;
    window.sqStartTimer();

    return () => {
      clearInterval(sqTimer);
    };
  }, []);

  const pipedriveLink = "/contact"; 
  const pipedrivePlaceholder = "/contact"; 

const FormationCard = ({ category, title, forWho, description, link, image, delay }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`formation-card-horizontal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="card-image-wrap">
        <img src={image} alt={title} />
      </div>
      <div className="card-content-wrap">
        <span className="card-category-new">{category}</span>
        <h3 className="card-title-new">{title}</h3>
        <div className="card-target-new">
          <Users size={16} />
          <span>{forWho}</span>
        </div>
        <p className="card-description-new">{description}</p>
        <Link href={link} className="btn-discover-new">
          Découvrir cette formation <ArrowRight size={16} style={{ marginLeft: '8px' }} />
        </Link>
      </div>
    </div>
  );
};


  return (
    <div className="formations-page" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' }}>
      
      {/* ═══ SECTION 1 : HERO ═══ */}
      <section className="hero" style={{ position: 'relative', minHeight: '85vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Fond pleine page */}
        <img src={formationBg} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'rgba(10,10,26,0.60)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2, background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,26,0.85) 100%)', }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2, background: 'linear-gradient(to bottom, transparent, #0A0A1A)', }} />

        <div className="container fade-in" style={{ position: 'relative', zIndex: 4, textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', maxWidth: '1000px', marginInline: 'auto', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 700 }}>
            Former vos équipes, c'est la condition pour que tout le reste fonctionne.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.75)', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6, marginBottom: '4rem' }}>
            Vous pouvez avoir les meilleurs outils, les meilleures automatisations, les meilleures données. Si vos équipes ne savent pas quoi en faire, tout ça ne sert à rien. La formation n'est pas la dernière étape, c'est souvent la première.
          </p>
          
          <div className="grid-3" style={{ maxWidth: '900px', marginInline: 'auto', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(68, 204, 255, 0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#44CCFF', marginBottom: '0.5rem' }}>+25%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.4 }}>d'autonomie gagnée sur les tâches de l'équipe</div>
            </div>
            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(68, 204, 255, 0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#44CCFF', marginBottom: '0.5rem' }}>95%</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.4 }}>de satisfaction apprenants</div>
            </div>
            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(68, 204, 255, 0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#44CCFF', marginBottom: '0.5rem' }}>2 jours</div>
              <div style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.4 }}>pour changer vraiment les habitudes</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 : SYNERGIE MÉTIERS (DYNAMIC COMPONENT) ═══ */}
      <section className="section-padding" style={{ background: '#060612', padding: '48px 32px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#44CCFF', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Générer plus de traction
            </h2>
            <div style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '850px', marginInline: 'auto', fontWeight: 400, lineHeight: 1.5 }}>
              En alignant vos équipes Vente, Marketing et Communication sur les bons outils IA
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', maxWidth: '1200px', margin: '0 auto', background: 'rgba(10,10,25,0.4)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '18px', overflow: 'hidden', backdropFilter: 'blur(10px)' }}>
            {/* Sidebar Tabs */}
            <div id="sq-tabs" style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}>
              
              <div className="sq-tab" onClick={(e) => window.sqSet(0, e.currentTarget)} style={{ padding: '24px 20px', cursor: 'pointer', transition: 'all 0.3s', borderLeft: '3px solid #44CCFF', background: 'rgba(68,204,255,0.07)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(68,204,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M2.5 13.5H13.5V12.5H2.5V13.5ZM2.5 11.5H13.5V10.5H2.5V11.5ZM2.5 9.5H13.5V8.5H2.5V9.5ZM2.5 7.5H13.5V6.5H2.5V7.5Z" fill="#44CCFF"/></svg>
                </div>
                <div className="sq-tab-title" style={{ fontSize: '15px', fontWeight: 500, color: '#fff', marginBottom: '3px' }}>Marketing</div>
                <div className="sq-tab-sub" style={{ fontSize: '12px', color: 'rgba(68,204,255,0.6)', lineHeight: 1.4 }}>Pipeline entrant & conversion</div>
                <div style={{ height: '2px', background: 'rgba(255,255,255,0.05)', marginTop: '10px', borderRadius: '2px', overflow: 'hidden' }}>
                  <div id="sq-pb0" style={{ height: '100%', background: '#44CCFF', width: '0%', transition: 'width 0.1s linear' }}></div>
                </div>
              </div>

              <div className="sq-tab" onClick={(e) => window.sqSet(1, e.currentTarget)} style={{ padding: '24px 20px', cursor: 'pointer', transition: 'all 0.3s', borderLeft: '3px solid transparent' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(68,204,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#44CCFF" stroke-width="1.5"/></svg>
                </div>
                <div className="sq-tab-title" style={{ fontSize: '15px', fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}>Ventes</div>
                <div className="sq-tab-sub" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', lineHeight: 1.4 }}>Approche comptes stratégiques</div>
                <div style={{ height: '2px', background: 'rgba(255,255,255,0.05)', marginTop: '10px', borderRadius: '2px', overflow: 'hidden' }}>
                  <div id="sq-pb1" style={{ height: '100%', background: '#44CCFF', width: '0%', transition: 'width 0.1s linear' }}></div>
                </div>
              </div>

              <div className="sq-tab" onClick={(e) => window.sqSet(2, e.currentTarget)} style={{ padding: '24px 20px', cursor: 'pointer', transition: 'all 0.3s', borderLeft: '3px solid transparent' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(68,204,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><rect x="2.75" y="2.75" width="10.5" height="10.5" rx="1.5" stroke="#44CCFF" stroke-width="1.5"/></svg>
                </div>
                <div className="sq-tab-title" style={{ fontSize: '15px', fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}>Communication</div>
                <div className="sq-tab-sub" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', lineHeight: 1.4 }}>Autorité de marque</div>
                <div style={{ height: '2px', background: 'rgba(255,255,255,0.05)', marginTop: '10px', borderRadius: '2px', overflow: 'hidden' }}>
                  <div id="sq-pb2" style={{ height: '100%', background: '#44CCFF', width: '0%', transition: 'width 0.1s linear' }}></div>
                </div>
              </div>

            </div>

            {/* Content Panels */}
            <div style={{ padding: '60px', background: 'rgba(255,255,255,0.01)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div id="sq-panel0">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(68,204,255,0.09)', border: '1px solid rgba(68,204,255,0.18)', borderRadius: '20px', padding: '6px 16px', fontSize: '11px', color: '#44CCFF', marginBottom: '24px' }}>
                  Marketing & IA
                </div>
                <div style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '20px', lineHeight: 1.3 }}>
                  Formation IA marketing : contenus, campagnes et analyse augmentés.
                </div>
                <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '32px' }}>
                  Vos équipes produisent des contenus qui attirent les bons prospects avant même que la vente décroche son téléphone. Le marketing arrête de produire pour produire. Il commence à produire pour convertir.
                </div>
                <div style={{ background: 'rgba(68,204,255,0.04)', border: '1px solid rgba(68,204,255,0.1)', borderRadius: '12px', padding: '16px 20px', marginTop: '12px' }}>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(68,204,255,0.6)', marginBottom: '8px', fontWeight: 700 }}>Résultat observé</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontStyle: 'italic' }}>
                    Le marketing devient mesurable sur le chiffre. Les commerciaux reçoivent des prospects déjà contextualisés.
                  </div>
                </div>
              </div>

              <div id="sq-panel1" style={{ display: 'none' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(68,204,255,0.09)', border: '1px solid rgba(68,204,255,0.18)', borderRadius: '20px', padding: '6px 16px', fontSize: '11px', color: '#44CCFF', marginBottom: '24px' }}>
                  Ventes & IA
                </div>
                <div style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '20px', lineHeight: 1.3 }}>
                  Formation IA vente B2B : prospecter, qualifier et closer autrement.
                </div>
                <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '32px' }}>
                  Méthode MEDDIC, plan de compte, préparation C-level avec l'IA, traitement des objections. Vos commerciaux repartent avec des réflexes qu'ils appliquent dès la semaine suivante sur les comptes qui comptent vraiment.
                </div>
                <div style={{ background: 'rgba(68,204,255,0.04)', border: '1px solid rgba(68,204,255,0.1)', borderRadius: '12px', padding: '16px 20px', marginTop: '12px' }}>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(68,204,255,0.6)', marginBottom: '8px', fontWeight: 700 }}>Résultat observé</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontStyle: 'italic' }}>
                    L'énergie commerciale se concentre là où la fenêtre est ouverte. Moins de deals perdus.
                  </div>
                </div>
              </div>

              <div id="sq-panel2" style={{ display: 'none' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(68,204,255,0.09)', border: '1px solid rgba(68,204,255,0.18)', borderRadius: '20px', padding: '6px 16px', fontSize: '11px', color: '#44CCFF', marginBottom: '24px' }}>
                  Communication & IA
                </div>
                <div style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '20px', lineHeight: 1.3 }}>
                  Communication et IA : produire plus, mieux, plus vite.
                </div>
                <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '32px' }}>
                  Battle cards, veille automatisée, messages clés par persona. La communication structure ce dont les ventes ont besoin en RDV, renforce l'image de l'entreprise et génère de l inbound. Elle cesse d être réactive.
                </div>
                <div style={{ background: 'rgba(68,204,255,0.04)', border: '1px solid rgba(68,204,255,0.1)', borderRadius: '12px', padding: '16px 20px', marginTop: '12px' }}>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(68,204,255,0.6)', marginBottom: '8px', fontWeight: 700 }}>Résultat observé</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontStyle: 'italic' }}>
                    Les commerciaux entrent mieux armés. L'entreprise est reconnue avant le premier contact.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.22)', marginTop: '48px', fontStyle: 'italic', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto' }}>
            Ces trois formations peuvent être suivies séparément ou dans l'ordre. Elles partagent une vision commune : l'IA comme levier de performance humaine, pas comme remplacement.
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 : NOS FORMATIONS MÉTIERS (HORIZONTAL CARDS) ═══ */}
      <section className="section-padding" style={{ background: '#0A0A1A' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', textAlign: 'center', marginBottom: '4.5rem', color: '#FFFFFF', fontWeight: 700 }}>Une formation pour chaque métier.</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            <FormationCard 
              category="Vente"
              title="Formation IA vente B2B : prospecter, qualifier et closer autrement."
              forWho="Sales Managers souhaitant structurer leur équipe sur une méthode commune"
              description="Méthode MEDDIC, plan de compte structuré et IA en situation réelle. Vos commerciaux repartent avec des réflexes de terrain renforcés et des outils qu'ils utilisent dès le lundi suivant."
              link="/formation-ventes-et-ia"
              image={salesImg}
              delay={0}
            />

            <FormationCard 
              category="Marketing"
              title="Formation IA marketing : contenus, campagnes et analyse augmentés."
              forWho="Responsables marketing et créateurs de contenu souhaitant produire avec l'IA"
              description="Prompting efficace, production images vidéos podcasts et automatisation de la veille. Les bons réflexes, les bons outils, et une routine de production IA opérationnelle dès la fin de la formation."
              link="/formation-marketing-et-ia"
              image={marketingImg}
              delay={0.15}
            />

            <FormationCard 
              category="Communication"
              title="Communication et IA : produire plus, mieux, plus vite."
              forWho="Managers et équipes communication cherchant plus d'impact sur tous les canaux"
              description="Stratégie éditoriale structurée, prompting adapté à la voix de la marque et organisation de la production de contenu. Un plan éditorial opérationnel à l issue des 2 jours."
              link="/formation-communication-et-ia"
              image={communicationImg}
              delay={0.30}
            />

          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 : TABLEAU COMPARATIF ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Choisissez votre programme</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Même durée, même exigence, même suivi. Ce qui change c'est votre métier.</p>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0', background: '#0A0A1A', border: '1px solid rgba(68, 204, 255, 0.15)', borderRadius: '12px', overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: 'rgba(68, 204, 255, 0.06)' }}>
                  <th style={{ padding: '2rem', textAlign: 'left', borderBottom: '2px solid rgba(68, 204, 255, 0.2)', width: '25%' }}></th>
                  <th style={{ padding: '2rem', textAlign: 'left', borderBottom: '2px solid rgba(68, 204, 255, 0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF', fontWeight: 700 }}>
                      Vente 
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid #44CCFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#44CCFF', fontSize: '14px' }}>+</div>
                      <span style={{ color: '#44CCFF' }}>IA</span>
                    </div>
                  </th>
                  <th style={{ padding: '2rem', textAlign: 'left', borderBottom: '2px solid rgba(68, 204, 255, 0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF', fontWeight: 700 }}>
                      Marketing 
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid #44CCFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#44CCFF', fontSize: '14px' }}>+</div>
                      <span style={{ color: '#44CCFF' }}>IA</span>
                    </div>
                  </th>
                  <th style={{ padding: '2rem', textAlign: 'left', borderBottom: '2px solid rgba(68, 204, 255, 0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF', fontWeight: 700 }}>
                      Communication 
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid #44CCFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#44CCFF', fontSize: '14px' }}>+</div>
                      <span style={{ color: '#44CCFF' }}>IA</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '1.5rem 2rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>Cible principale</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Sales Managers</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Responsables marketing, créateurs</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Managers et équipes communication</td>
                </tr>
                <tr style={{ background: 'rgba(255,255,255,0.00)' }}>
                  <td style={{ padding: '1.5rem 2rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>Ce qu'on règle</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Réflexes terrain, méthode commune</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Production de contenu, veille</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Stratégie éditoriale, ligné de message</td>
                </tr>
                <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '1.5rem 2rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>Méthode clé</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>MEDDIC + plan de compte</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Prompting multiformat</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Organisation production de contenu</td>
                </tr>
                <tr style={{ background: 'rgba(68,204,255,0.05)' }}>
                  <td style={{ padding: '1.5rem 2rem', fontWeight: 700, color: '#44CCFF', fontSize: '13px', verticalAlign: 'top' }}>ROI observé</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'disc', lineHeight: 1.8 }}>
                      <li><span style={{ color: '#44CCFF', fontWeight: 600 }}>+34%</span> de taux de closing après formation</li>
                      <li>Préparation RDV divisée par <span style={{ color: '#44CCFF', fontWeight: 600 }}>3</span> avec l'IA</li>
                      <li>Plan de compte opérationnel dès J+1</li>
                      <li>Objections traitées avec une méthode commune</li>
                    </ul>
                  </td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'disc', lineHeight: 1.8 }}>
                      <li><span style={{ color: '#44CCFF', fontWeight: 600 }}>+40%</span> de production de contenu sans ressource supplémentaire</li>
                      <li>Veille concurrentielle automatisée en moins d'une heure</li>
                      <li>Routine de production IA tenue 3 mois</li>
                      <li>Temps de brief réduit de moitié par campagne</li>
                    </ul>
                  </td>
                  <td style={{ padding: '1.5rem 2rem', color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyleType: 'disc', lineHeight: 1.8 }}>
                      <li>Plan éditorial structuré et tenu sur 3 mois</li>
                      <li><span style={{ color: '#44CCFF', fontWeight: 600 }}>3h économisées</span> par semaine sur les contenus</li>
                      <li>Ligne éditoriale applicable par toute l'équipe</li>
                      <li>Veille sectorielle automatisée sans outil ajouté</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '2rem' }}></td>
                  <td style={{ padding: '2rem' }}><Link href="/formation-ventes-et-ia" style={{ color: '#44CCFF', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>Voir le programme <ArrowRight size={16} /></Link></td>
                  <td style={{ padding: '2rem' }}><Link href="/formation-marketing-et-ia" style={{ color: '#44CCFF', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>Voir le programme <ArrowRight size={16} /></Link></td>
                  <td style={{ padding: '2rem' }}><Link href="/formation-communication-et-ia" style={{ color: '#44CCFF', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>Voir le programme <ArrowRight size={16} /></Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>



      {/* ═══ SECTION 6 : MODALITÉS ET TARIFS ═══ */}
      <section className="section-padding" style={{ background: '#050510' }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '5rem', textAlign: 'center', fontWeight: 700 }}>Formats et tarifs</h2>
          
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '2rem',
              maxWidth: '1200px',
              marginInline: 'auto'
            }}
          >
            {[
              {
                title: 'Inter-entreprises',
                subtitle: "Pour apprendre dans un cadre multi-secteurs, avec d'autres équipes.",
                items: [
                  "Fondamentaux IA appliqués aux métiers vente, marketing, communication",
                  "Ateliers orientés production : résultats concrets dès la formation",
                  "Supports et templates réutilisables inclus",
                  "Suivi 1h coaching visio inclus"
                ],
                price: 'À partir de 1 500 € HT / pers.',
                badge: null
              },
              {
                title: 'Intra-entreprise',
                subtitle: <>Pour former votre équipe sur vos cas, <span style={{ whiteSpace: 'nowrap' }}>vos outils, votre contexte.</span></>,
                items: [
                  "Cas et scénarios proches du métier client",
                  "Plan d'action équipe livré en fin de formation",
                  "Groupes de 6 à 10 personnes pour plus d'interactivité",
                  "Suivi 1h coaching visio / pers. inclus"
                ],
                price: 'À partir de 4 590 € HT / groupe',
                badge: 'RECOMMANDÉ'
              },
              {
                title: 'Sur mesure',
                subtitle: "Pour construire un programme progressif avec suivi renforcé.",
                items: [
                  "Modules progressifs adaptés aux enjeux de l'organisation",
                  "Coaching individuel ou collectif et itérations",
                  "Plan d'action individualisé et suivi dans le temps",
                  "Livrables et méthodes co-construits"
                ],
                price: 'Sur devis',
                badge: null
              }
            ].map((card, idx) => (
              <div 
                key={idx} 
                style={{
                  background: '#0D0D25',
                  border: card.badge ? '2px solid #44CCFF' : '1px solid #1A1A3A',
                  padding: '3rem 2rem',
                  borderRadius: '1rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {card.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#44CCFF',
                    color: '#060612',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 700
                  }}>
                    {card.badge}
                  </div>
                )}
                
                <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{card.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '2rem', minHeight: '3rem' }}>
                  {card.subtitle}
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 700, whiteSpace: 'nowrap', color: '#fff' }}>
                    {(() => {
                      let displayPrice = card.price;
                      let prefix = null;
                      let suffix = null;
                      
                      if (displayPrice.startsWith('À partir de ')) {
                        prefix = 'À partir de';
                        displayPrice = displayPrice.replace('À partir de ', '');
                      }
                      if (displayPrice.endsWith(' / pers.')) {
                        suffix = '/ pers.';
                        displayPrice = displayPrice.replace(' / pers.', '');
                      }
                      if (displayPrice.endsWith(' / groupe')) {
                        suffix = '/ groupe';
                        displayPrice = displayPrice.replace(' / groupe', '');
                      }

                      return (
                        <>
                          {prefix && (
                            <span style={{ fontSize: '1.2rem', color: '#9CA3AF', fontWeight: 400, marginRight: '0.4rem' }}>
                              {prefix}
                            </span>
                          )}
                          {displayPrice}
                          {suffix && (
                            <span style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 400, marginLeft: '0.2rem' }}>
                              {suffix}
                            </span>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
                
                <div style={{ flexGrow: 1, marginBottom: '2rem' }}>
                  {card.items.map((item, iIdx) => (
                    <div key={iIdx} style={{ display: 'flex', gap: '12px', marginBottom: '0.75rem', fontSize: '0.85rem', lineHeight: 1.4, color: 'rgba(255,255,255,0.7)' }}>
                      <Check size={16} color="#44CCFF" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={pipedrivePlaceholder}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontWeight: 700,
                    fontSize: '1rem',
                    border: card.badge ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    background: card.badge ? '#44CCFF' : 'transparent',
                    color: card.badge ? '#060612' : '#FFFFFF',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxSizing: 'border-box'
                  }}
                >
                  Prendre RDV
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: '#6B7280', fontSize: '0.95rem', maxWidth: '800px', marginInline: 'auto', lineHeight: 1.6 }}>
              Tous les prix sont donnés à titre indicatif hors taxes et peuvent faire l'objet de modification selon le volume, la complexité et les contraintes spécifiques.
            </p>
            <p style={{ color: '#44CCFF', fontSize: '0.95rem', fontWeight: 600, maxWidth: '800px', marginInline: 'auto' }}>
              Financement OPCO possible selon votre organisme paritaire. Nous contacter pour vérifier votre éligibilité.
            </p>
          </div>
        </div>
      </section>


      {/* SECTION NOUVELLE : ILS NOUS FONT CONFIANCE */}
      <ClientLogosSection />

      {/* ═══ SECTION 7 : CE QUE NOUS APPORTONS DE DIFFÉRENT ═══ */}
      <section className="section-padding container">
        <div className="fade-in">
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '6rem', textAlign: 'center', fontWeight: 700 }}>Ce que nous apportons de différent</h2>
          <div className="grid-3" style={{ gap: '4rem' }}>
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ width: '72px', height: '72px', background: 'rgba(68, 204, 255, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem', boxShadow: '0 10px 20px rgba(68, 204, 255, 0.1)' }}>
                <Target color="#44CCFF" size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 700 }}>Formation personnalisable</h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.7, fontSize: '1.05rem' }}>Le programme s'adapte à votre secteur, vos outils et le niveau de votre équipe. Pas de contenu générique : on part de vos cas réels, vos prospects, vos contenus, votre quotidien.</p>
            </div>
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ width: '72px', height: '72px', background: 'rgba(68, 204, 255, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem', boxShadow: '0 10px 20px rgba(68, 204, 255, 0.1)' }}>
                <RefreshCw color="#44CCFF" size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 700 }}>Coaching post-formation</h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.7, fontSize: '1.05rem' }}>1 heure en visio après la formation pour faire le point sur ce qui a changé, débloquer ce qui coince, ajuster ce qui peut être amélioré. On ne disparaît pas le soir du Jour 2.</p>
            </div>
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ width: '72px', height: '72px', background: 'rgba(68, 204, 255, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem', boxShadow: '0 10px 20px rgba(68, 204, 255, 0.1)' }}>
                <Star color="#44CCFF" size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 700 }}>Supports opérationnels</h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.7, fontSize: '1.05rem' }}>Chaque participant repart avec des templates, des prompts prêts à l'emploi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 : INTERNAL LINKING (NEW) ═══ */}
      <section className="section-padding" style={{ background: '#0A0A1A', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container fade-in" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>La formation n'est que le début</h3>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
            Squadia intervient aussi sur les systèmes qui font travailler vos équipes au quotidien.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
            <Link href="/stratégie-ia" className="pill-link">Structurer votre stratégie IA</Link>
            <Link href="/data" className="pill-link">Détecter vos leads qualifiés</Link>
            <Link href="/automatisation-ia" className="pill-link">Automatiser vos processus</Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 : CTA FINAL ═══ */}
      <section className="section-padding" style={{ background: 'linear-gradient(rgba(10,10,26,1) 0%, rgba(5,5,16,1) 100%)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container fade-in" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', marginBottom: '1.5rem', fontWeight: 700 }}>Vous ne savez pas encore quelle formation correspond à votre équipe ?</h2>
          <p style={{ fontSize: '1.3rem', color: '#9CA3AF', marginBottom: '4rem' }}>On cadre ça ensemble en 20 minutes.</p>
          <a href={pipedrivePlaceholder} className="btn btn-primary pulse" style={{ padding: '1.5rem 3.5rem', fontSize: '1.2rem', fontWeight: 700, borderRadius: '8px' }}>
            Prendre RDV
          </a>
        </div>
      </section>

      <style>{`
        .formation-card-horizontal {
          display: flex;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(68, 204, 255, 0.15);
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          color: #FFFFFF;
        }
        .formation-card-horizontal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .card-image-wrap {
          flex: 1;
          min-height: 100%;
        }
        .card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-content-wrap {
          flex: 2;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .card-category-new {
          color: #44CCFF;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 12px;
          display: block;
        }
        .card-title-new {
          color: #FFFFFF;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.25;
        }
        .card-target-new {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 13px;
          margin: 16px 0;
        }
        .card-target-new span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card-description-new {
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .btn-discover-new {
          align-self: flex-start;
          background: #FFFFFF;
          color: #060612;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        .btn-discover-new:hover {
          background: #44CCFF;
          color: #060612;
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .card-content-wrap { padding: 30px; }
          .card-title-new { fontSize: 24px; }
        }
        @media (max-width: 768px) {
          .card-image-wrap { flex: 0.4; }
          .card-content-wrap { flex: 0.6; }
        }
        @media (max-width: 480px) {
          .formation-card-horizontal { flex-direction: column; }
          .card-image-wrap { height: 220px; width: 100%; }
          .card-content-wrap { padding: 24px; }
        }



        .pill-link {
          border: 1px solid rgba(68, 204, 255, 0.2);
          color: rgba(255, 255, 255, 0.6);
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 13px;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .pill-link:hover {
          border-color: #44CCFF;
          color: #44CCFF;
          transform: translateY(-2px);
        }
        .desktop-only {
          display: block;
        }
        @media (max-width: 991px) {
          .desktop-only { display: none; }
          .synergy-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>

    </div>
  );
};

export default Formations;
