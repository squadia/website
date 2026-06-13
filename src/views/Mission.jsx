'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
const jeromeImg = '/assets/images/notremission/jerome-final.png';
const julienImg = '/assets/images/notremission/julien-final.png';
const kavidaImg = '/assets/images/notremission/kavida_final.png';
const Mission = () => {
  useEffect(() => {
    document.title = "Notre Mission : Squadia, conseil B2B en IA et performance commerciale";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Découvrez la mission de Squadia : réconcilier la strategie et l'exécution pour les équipes commerciales B2B. Notre équipe, nos valeurs et notre engagement.");
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('mfv'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.mfu').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const IconTrend = () => (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <path stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 17l5-5 4 4 9-9"/>
    </svg>
  );
  const IconDoc = () => (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#fb923c" strokeWidth="2"/>
      <path stroke="#fb923c" strokeWidth="2" strokeLinecap="round" d="M8 12h8M8 8h5"/>
    </svg>
  );
  const IconClock = () => (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="#fb923c" strokeWidth="2"/>
      <path stroke="#fb923c" strokeWidth="2" strokeLinecap="round" d="M12 8v4l3 3"/>
    </svg>
  );
  const IconLinkedin = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
  const IconExternal = () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const fj = undefined;
  const fi = undefined;

  return (
    <div style={{ background: '#0c0e12', color: '#e1e2e7' }}>

      <style>{`
        .mfu { opacity: 0; transform: translateY(14px); transition: opacity .5s ease, transform .5s ease; }
        .mfu.mfv { opacity: 1; transform: translateY(0); }
        .glass-card-m { background: rgba(29,32,35,.7); border: 1px solid rgba(255,255,255,.06); border-radius: 14px; transition: border-color .2s; }
        .glass-card-m:hover { border-color: rgba(255,255,255,.1); }
        .glass-card-orange { border-left: 3px solid #ea580c; box-shadow: 0 0 40px -15px rgba(234,88,12,.1); }
        .glass-card-blue-border { border-left: 3px solid #44CCFF; }
        .conv-block { background: #111417; padding: 28px 22px; transition: background .2s; }
        .conv-block:hover { background: #161a1e; }
        .team-card-m { background: rgba(17,20,23,.95); border: 1px solid rgba(255,255,255,.06); border-radius: 14px; overflow: hidden; display: flex; flex-direction: column; transition: border-color .2s, transform .25s; transform: translateZ(0); backface-visibility: hidden; }
        .team-card-m:hover { border-color: rgba(255,255,255,.12); transform: translateY(-3px); }
        .team-card-m.founder-m { border-color: rgba(68,204,255,.18); background: linear-gradient(160deg, rgba(68,204,255,.05) 0%, rgba(17,20,23,.95) 50%); box-shadow: 0 0 40px -15px rgba(68,204,255,.18); }
        .team-photo-m { position: relative; width: 100%; aspect-ratio: 3/4; overflow: hidden; background: rgba(17,20,23,1); flex-shrink: 0; }
        .team-photo-m img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform .4s ease; display: block; }
        .team-card-m:hover .team-photo-m img { transform: scale(1.03); }
        .photo-bw-m { filter: grayscale(1) contrast(1.08) brightness(0.88); }
        .photo-jerome-m { filter: contrast(1.02) brightness(0.9); }
        .team-photo-overlay { position: absolute; bottom: -2px; left: 0; right: 0; height: 55%; background: linear-gradient(to top, rgba(17,20,23,1) 0%, rgba(17,20,23,1) 20%, transparent 100%); z-index: 2; }
        .link-ext { font-size: .75rem; color: #44CCFF; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; opacity: .8; transition: opacity .15s; }
        .link-ext:hover { opacity: 1; color: #fff; }
        .tag-m { font-size: .625rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); color: #bcc8d1; display: inline-block; }
        .tag-blue-m { background: rgba(68,204,255,.08); border-color: rgba(68,204,255,.2); color: #44CCFF; }
        .tag-orange-m { background: rgba(234,88,12,.1); border-color: rgba(234,88,12,.2); color: #fb923c; }
        .btn-primary-m { font-size: 1.1rem; font-weight: 700; background: #44CCFF; color: #060612; padding: 1.1rem 2.2rem; border-radius: 0.5rem; text-decoration: none; display: inline-block; transition: all .15s; }
        .btn-primary-m:hover { background: #7ad0ff; transform: translateY(-1px); }
        .btn-secondary-m { font-size: 1.1rem; font-weight: 700; background: rgba(255,255,255,.05); color: #e1e2e7; border: 1px solid rgba(255,255,255,.1); padding: 1.1rem 2.2rem; border-radius: 0.5rem; text-decoration: none; display: inline-block; transition: all .15s; }
        .btn-secondary-m:hover { background: rgba(255,255,255,.1); transform: translateY(-1px); }
        @media (max-width: 768px) {
          .hero-grid-m { grid-template-columns: 1fr !important; }
          .hero-right-m { display: none !important; }
          .three-col-m { grid-template-columns: 1fr !important; }
          .four-col-m { grid-template-columns: 1fr 1fr !important; }
          .team-grid-m { grid-template-columns: 1fr !important; }
          .hero-left-m { padding: 40px 24px !important; width: 100% !important; position: relative !important; background: #060612; }
          .hero-bg-mission { display: none !important; }
          .hero-grid-m { flex-direction: column !important; min-height: auto !important; max-height: none !important; padding-top: 80px !important; }
          .hero-img-mobile-m { display: block !important; }
          .hero-overlay-m { display: none !important; }
          .hero-gradient-lr-m { display: none !important; }
          .hero-gradient-bottom-m { display: none !important; }
          .hero-left-m .mfu { opacity: 1 !important; transform: none !important; }
        }
        .hero-bg-mission {
          animation: missionBgReveal 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        @keyframes missionBgReveal {
          from { opacity: 0; transform: scale(1.12); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="hero-grid-m" style={{
        minHeight: '100vh', maxHeight: '920px',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: '64px', background: '#060612',
      }}>
        {/* Image de fond — zoom out via backgroundSize pour voir le perso entier */}
        <img src="/assets/images/notremission/notremission_background.png" alt="" className="hero-bg-mission" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', zIndex: 0 }} />
        {/* Overlay global */}
        <div className="hero-overlay-m" style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,26,0.25)', zIndex: 1, pointerEvents: 'none' }} />
        {/* Gradient gauche → droite : assombrit zone texte */}
        <div className="hero-gradient-lr-m" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,6,18,0.88) 0%, rgba(6,6,18,0.60) 40%, rgba(6,6,18,0.10) 65%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
        {/* Gradient bas : transition douce vers section suivante */}
        <div className="hero-gradient-bottom-m" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: 'linear-gradient(to bottom, transparent, #060612)', zIndex: 2, pointerEvents: 'none' }} />
        {/* Image mobile : visible uniquement sur mobile */}
        <div className="hero-img-mobile-m" style={{ display: 'none', width: '100%', height: '280px', overflow: 'hidden', flexShrink: 0 }}>
          <img src="/assets/images/notremission/notremission_background.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, transparent, #060612)' }} />
        </div>

        <div className="hero-left-m" style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          paddingTop: '56px', paddingBottom: '56px', paddingLeft: '8%', paddingRight: '5%', position: 'relative', zIndex: 3, width: '65%',
        }}>
          <span className="mfu" style={{ fontFamily: fj, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Notre mission</span>
          <h1 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(2rem,3.2vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', marginBottom: '20px', transitionDelay: '.06s' }}>
            Ce que nous avons appris,<br />C'est ce que nous partageons.
          </h1>
          <p className="mfu" style={{ fontFamily: fi, fontSize: '1.25rem', lineHeight: 1.65, color: '#bcc8d1', marginBottom: '12px', maxWidth: '70ch', transitionDelay: '.12s' }}>
            Nous avons forgé notre expérience B2B pendant plus de 25 ans,<br />Pour le Mid-Market comme pour les Grands Comptes,<br />Du côté des leaders comme celui des challengers<br />Tous secteurs confondus (Banque/Assurance, Médias, Santé, Privé-Public, etc).
          </p>
          <div className="mfu" style={{ display: 'flex', gap: '12px', marginTop: '28px', transitionDelay: '.22s' }}>
            <a className="btn-primary-m" href="#croyance">Notre croyance</a>
            <a className="btn-secondary-m" href="#equipe">L'équipe</a>
          </div>
        </div>

      </div>

      {/* ── CE QU'ON OBSERVE ── */}
      <section id="croyance" style={{ background: '#060612', padding: '120px 0' }}>
        <div className="container">
          <span className="mfu" style={{ fontFamily: fj, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Notre croyance</span>
          <h2 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: '8px', maxWidth: '620px' }}>Quand une entreprise rencontre des difficultés, ça vient rarement de l'extérieur.</h2>
          <p className="mfu" style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.65, color: '#bcc8d1', maxWidth: '500px', marginBottom: '40px' }}>Mais bien de l'intérieur. Trois causes que nous retrouvons dans presque chaque mission.</p>
          <div className="three-col-m" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', alignItems: 'stretch' }}>
            {[
              { icon: <IconTrend />, title: "Un marketing qui ne produit pas assez de leads pour les commerciaux.", body: "Pas assez de contenu, pas assez de ciblage, pas assez de volume. Le pipeline commercial dépend trop de l'effort individuel.", tag: "Marketing insuffisant", delay: '0s' },
              { icon: <IconDoc />, title: "Des commerciaux qui passent trop de temps sur l'admin.", body: "Reporting manuel, CRM mal renseigné, tâches répétitives. 50 % du temps commercial part ailleurs que sur la vente.", tag: "Temps mal alloué", delay: '.08s' },
              { icon: <IconClock />, title: "Un management qui pilote sans voir les bonnes données.", body: "Tableaux de bord incomplets, KPIs mal définis, décisions prises sur le ressenti. L'IA est là — la méthode pour s'en servir, pas encore.", tag: "Pilotage à l'aveugle", delay: '.16s' },
            ].map((c, i) => (
              <div key={i} style={{ position: 'relative', display: 'flex' }}>
                {i === 2 && (
                  <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.48) 0%, transparent 68%)', filter: 'blur(95px)', pointerEvents: 'none', zIndex: 0 }} />
                )}
                <div className="glass-card-m glass-card-orange mfu" style={{ padding: '36px 28px', transitionDelay: c.delay, position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'rgba(234,88,12,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>{c.icon}</div>
                  <h3 style={{ fontFamily: fj, fontSize: '1rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-.01em', color: '#fb923c', marginBottom: '10px' }}>{c.title}</h3>
                  <p style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.65, color: '#bcc8d1', marginTop: '8px', flex: 1 }}>{c.body}</p>
                  <div style={{ marginTop: '20px' }}><span className="tag-m tag-orange-m">{c.tag}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE EN QUOI ON CROIT ── */}
      <section style={{ background: '#060612', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: '-200px', width: '500px', height: '100%', background: 'radial-gradient(ellipse,rgba(68,204,255,.04) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="mfu" style={{ fontFamily: fj, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Ce que nous apportons</span>
          <h2 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: '8px', maxWidth: '600px' }}>Pour résoudre ça, il faut être équipé.</h2>
          <p className="mfu" style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.65, color: '#bcc8d1', maxWidth: '520px', marginBottom: '40px' }}>Les bonnes méthodes, les bons outils, et aujourd'hui l'IA pour systématiser. C'est ce que nous construisons pour les PME et ETI B2B.</p>
          <div className="four-col-m" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(255,255,255,.05)', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,.05)' }}>
            {[
              { num: '01', title: 'La décision avant l\'outillage.', body: 'On évalue ce qui est le plus pertinent pour atteindre vos objectifs, puis on définit la strategie, les outils et les process.' },
              { num: '02', title: 'Un système cohérent vaut plus que tout.', body: 'Un système cohérent est la clé de la réussite. Stratégie, Data, Automatisation, Formation, alignés et solidaires.' },
              { num: '03', title: 'L\'IA, accélérateur complémentaire.', body: 'En complément d\'une strategie claire, d\'une donnée propre et d\'une méthode solide, l\'IA amplifie ce qui fonctionne déjà.' },
              { num: '04', title: 'Après la strategie, l\'exécution.', body: 'Périmètre, livrables, calendrier, responsabilités. Définis ensemble avant le démarrage, dans l\'ordre des priorités.' },
            ].map((c, i) => (
              <div key={i} className="conv-block mfu" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span style={{ fontFamily: fj, fontSize: '1.875rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#44CCFF', lineHeight: 1, display: 'block', marginBottom: '18px' }}>{c.num}</span>
                <h4 style={{ fontFamily: fj, fontSize: '1rem', fontWeight: 700, lineHeight: 1.25, color: '#fff', marginBottom: '10px' }}>{c.title}</h4>
                <p style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.65, color: '#bcc8d1' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUELQUES CHIFFRES ── */}
      <section style={{ background: '#080a0d', padding: '120px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div className="container">
          <span className="mfu" style={{ fontFamily: fj, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Quelques chiffres</span>
          <h2 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: '40px' }}>Le marché en 2026.</h2>
          <div className="three-col-m" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {[
              { num: '58 %', body: "des dirigeants de PME et ETI considèrent l'IA comme un enjeu de survie.", source: 'Bpifrance 2026', delay: '0s' },
              { num: '50 %', body: "du temps des commerciaux est consacré à des tâches administratives, pas à la vente.", source: 'Salesforce State of Sales', delay: '.08s' },
              { num: '32 %', body: "des PME utilisent l'IA au quotidien. Les autres sont encore en phase d'exploration.", source: 'Bpifrance 2026', delay: '.16s' },
            ].map((s, i) => (
              <div key={i} className="glass-card-m glass-card-blue-border mfu" style={{ padding: '28px 24px', transitionDelay: s.delay }}>
                <div style={{ fontFamily: fj, fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#44CCFF', lineHeight: 1, marginBottom: '10px' }}>{s.num}</div>
                <p style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.65, color: '#bcc8d1' }}>{s.body}</p>
                <div style={{ marginTop: '14px', fontFamily: fi, fontSize: '.625rem', fontWeight: 700, color: '#4b5563', letterSpacing: '.06em', textTransform: 'uppercase' }}>{s.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section id="equipe" style={{ background: '#060612', padding: '120px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <span className="mfu" style={{ fontFamily: fj, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>L'équipe</span>
            <h2 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: '8px' }}>Votre équipe dédiée.</h2>
            <p className="mfu" style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.65, color: '#bcc8d1', maxWidth: '480px', marginTop: '8px' }}>Experts indépendants associés, chacun avec son domaine, sa structure et une complémentarité réelle sur le terrain.</p>
          </div>

          <div className="team-grid-m" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', alignItems: 'stretch' }}>

            {/* KAVIDA : gauche */}
            <div className="team-card-m mfu">
              <div className="team-photo-m">
                <img src={kavidaImg} alt="Kavida Angapin" className="photo-bw-m" style={{ objectPosition: 'center 10%' }} />
                <div className="team-photo-overlay" />
              </div>
              <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ minHeight: '110px' }}>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    <span className="tag-m">Experte associée</span>
                    <span className="tag-m">Transformation</span>
                  </div>
                  <div style={{ fontFamily: fj, fontSize: '1.0625rem', fontWeight: 700, letterSpacing: '-.01em', color: '#fff', marginBottom: '3px', marginTop: '10px' }}>Kavida Angapin</div>
                  <div style={{ fontFamily: fi, fontSize: '.75rem', fontWeight: 500, color: '#7ad0ff', marginBottom: '2px', lineHeight: 1.4 }}>Excellence opérationnelle, transformation</div>
                  <div style={{ fontFamily: fi, fontSize: '.6875rem', color: 'rgba(188,200,209,.45)', lineHeight: 1.4 }}>Fondatrice, Neuroskills</div>
                </div>
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,.05)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.6, color: '#9aabb5', flex: 1 }}>Ex-Directrice Excellence Opérationnelle Cegedim, spécialisée en change management et neurosciences appliquées aux équipes managers et terrain. Expérience internationale.</p>
                  <a className="link-ext" href="https://www.linkedin.com/in/kavida-angapin" target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' }}>
                    <IconLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* JÉRÔME : centre */}
            <div className="team-card-m founder-m mfu" style={{ transitionDelay: '.1s' }}>
              <div className="team-photo-m">
                <img src={jeromeImg} alt="Jérôme DEBRUYNE" className="photo-jerome-m" />
                <div className="team-photo-overlay" />
              </div>
              <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ minHeight: '110px' }}>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    <span className="tag-m tag-blue-m">Stratégie B2B</span>
                    <span className="tag-m tag-blue-m">Expert IA</span>
                  </div>
                  <div style={{ fontFamily: fj, fontSize: '1.0625rem', fontWeight: 700, letterSpacing: '-.01em', color: '#fff', marginBottom: '3px', marginTop: '10px' }}>Jérôme DEBRUYNE</div>
                  <div style={{ fontFamily: fi, fontSize: '.75rem', fontWeight: 500, color: '#44CCFF', marginBottom: '2px', lineHeight: 1.4 }}>Fondateur & CEO</div>
                  <div style={{ fontFamily: fi, fontSize: '.6875rem', color: 'rgba(188,200,209,.45)', lineHeight: 1.4 }}>Squadia</div>
                </div>
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,.05)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.6, color: '#9aabb5', flex: 1 }}>Ex-Xerox, Dell, Oracle. De commercial sédentaire à manager, responsable du go-to-market France. Formateur Cegos et Comundi, IA appliquée aux métiers de la vente, du marketing et de la communication.</p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '10px' }}>
                    <a className="link-ext" href="https://www.comundi.fr/formateurs/8307-debruyne-jerome.html" target="_blank" rel="noopener noreferrer">
                      <IconExternal /> Comundi
                    </a>
                    <a className="link-ext" href="https://www.linkedin.com/in/jdebruyne/" target="_blank" rel="noopener noreferrer">
                      <IconLinkedin /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* JULIEN : droite */}
            <div className="team-card-m mfu" style={{ transitionDelay: '.2s' }}>
              <div className="team-photo-m">
                <img src={julienImg} alt="Julien Le Maguer" className="photo-bw-m" style={{ objectPosition: 'center 8%' }} />
                <div className="team-photo-overlay" />
              </div>
              <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ minHeight: '110px' }}>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    <span className="tag-m">Expert associé</span>
                    <span className="tag-m">Revenue</span>
                  </div>
                  <div style={{ fontFamily: fj, fontSize: '1.0625rem', fontWeight: 700, letterSpacing: '-.01em', color: '#fff', marginBottom: '3px', marginTop: '10px' }}>Julien Le Maguer</div>
                  <div style={{ fontFamily: fi, fontSize: '.75rem', fontWeight: 500, color: '#7ad0ff', marginBottom: '2px', lineHeight: 1.4 }}>Développement commercial, revenue ops</div>
                  <div style={{ fontFamily: fi, fontSize: '.6875rem', color: 'rgba(188,200,209,.45)', lineHeight: 1.4 }}>Fondateur, JLM Consulting</div>
                </div>
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,.05)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.6, color: '#9aabb5', flex: 1 }}>Ex-Inside Sales Manager SaaS. CRM et Customer Experience Trainer, formation sur le cycle de vente complet, BPO et accompagnement commercial terrain.</p>
                  <a className="link-ext" href="https://www.linkedin.com/in/julien-lemaguer/" target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' }}>
                    <IconLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: '#060612', padding: '120px 0' }}>
        <div className="container">
          <div className="mfu" style={{ border: '1px solid rgba(68,204,255,.1)', borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px -20px rgba(68,204,255,.15)', minHeight: '720px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <img src="/assets/images/notremission/team-squadia.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(1) brightness(0.28)', zIndex: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(6,6,18,0.92) 100%)', zIndex: 1, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2, padding: '0 56px 64px' }}>
              <span style={{ fontFamily: fj, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Prochaine étape</span>
              <h2 style={{ fontFamily: fj, fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', marginBottom: '12px' }}>
                Squadia est-il le bon partenaire<br />pour votre organisation ?
              </h2>
              <p style={{ fontFamily: fi, fontSize: '1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '360px', margin: '0 auto 32px' }}>Prenons 30 minutes pour en discuter.</p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link className="btn-primary-m" href="/contact">Prendre RDV</Link>
                <Link className="btn-secondary-m" href="/tarifs">Découvrir nos offres</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mission;
