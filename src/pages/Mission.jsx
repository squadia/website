import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jeromeImg from '../assets/images/notremission/jerome-final.png';
import julienImg from '../assets/images/notremission/julien-final.png';
import kavidaImg from '../assets/images/notremission/kavida_final.png';
import jeromeBgImg from '../assets/images/notremission/jerome-background.png';

const Mission = () => {
  useEffect(() => {
    document.title = "Notre Mission — Squadia, conseil B2B en IA et performance commerciale";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Découvrez la mission de Squadia : réconcilier la stratégie et l'exécution pour les équipes commerciales B2B. Notre équipe, nos valeurs et notre engagement.");
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

  const fj = "'Plus Jakarta Sans', sans-serif";
  const fi = "'Inter', sans-serif";

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
        .team-card-m { background: rgba(17,20,23,.95); border: 1px solid rgba(255,255,255,.06); border-radius: 14px; overflow: hidden; display: flex; flex-direction: column; transition: border-color .2s, transform .25s; }
        .team-card-m:hover { border-color: rgba(255,255,255,.12); transform: translateY(-3px); }
        .team-card-m.founder-m { border-color: rgba(68,204,255,.18); background: linear-gradient(160deg, rgba(68,204,255,.05) 0%, rgba(17,20,23,.95) 50%); box-shadow: 0 0 40px -15px rgba(68,204,255,.18); }
        .team-photo-m { position: relative; width: 100%; aspect-ratio: 3/4; overflow: hidden; background: #0a0c10; flex-shrink: 0; }
        .team-photo-m img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform .4s ease; }
        .team-card-m:hover .team-photo-m img { transform: scale(1.03); }
        .photo-bw-m { filter: grayscale(1) contrast(1.08) brightness(0.88); }
        .photo-jerome-m { filter: contrast(1.02) brightness(0.9); }
        .team-photo-overlay { position: absolute; bottom: 0; left: 0; right: 0; height: 42%; background: linear-gradient(to top, rgba(17,20,23,1) 0%, transparent 100%); z-index: 1; }
        .link-ext { font-family: ${fi}; font-size: .75rem; color: #44CCFF; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; opacity: .8; transition: opacity .15s; }
        .link-ext:hover { opacity: 1; color: #fff; }
        .tag-m { font-family: ${fi}; font-size: .625rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); color: #bcc8d1; display: inline-block; }
        .tag-blue-m { background: rgba(68,204,255,.08); border-color: rgba(68,204,255,.2); color: #44CCFF; }
        .tag-orange-m { background: rgba(234,88,12,.1); border-color: rgba(234,88,12,.2); color: #fb923c; }
        .btn-primary-m { font-family: ${fj}; font-size: .875rem; font-weight: 700; background: #44CCFF; color: #003549; padding: 11px 26px; border-radius: 9px; text-decoration: none; display: inline-block; transition: all .15s; }
        .btn-primary-m:hover { background: #7ad0ff; transform: translateY(-1px); }
        .btn-secondary-m { font-family: ${fj}; font-size: .875rem; font-weight: 700; background: rgba(255,255,255,.05); color: #e1e2e7; border: 1px solid rgba(255,255,255,.1); padding: 11px 26px; border-radius: 9px; text-decoration: none; display: inline-block; transition: all .15s; }
        .btn-secondary-m:hover { background: rgba(255,255,255,.1); transform: translateY(-1px); }
        @media (max-width: 768px) {
          .hero-grid-m { grid-template-columns: 1fr !important; }
          .hero-right-m { display: none !important; }
          .three-col-m { grid-template-columns: 1fr !important; }
          .four-col-m { grid-template-columns: 1fr 1fr !important; }
          .team-grid-m { grid-template-columns: 1fr !important; }
          .hero-left-m { padding: 40px 24px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="hero-grid-m" style={{
        minHeight: '100vh', maxHeight: '920px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        position: 'relative', overflow: 'hidden', paddingTop: '64px',
      }}>
        <div className="hero-left-m" style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '56px 48px 56px 72px', position: 'relative', zIndex: 2,
        }}>
          <div style={{ position: 'absolute', right: '-100px', top: 0, bottom: 0, width: '180px', background: 'linear-gradient(to right,#0c0e12 20%,transparent 100%)', zIndex: 3, pointerEvents: 'none' }} />
          <span className="mfu" style={{ fontFamily: fj, fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Notre mission</span>
          <h1 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(2rem,3.2vw,2.75rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.03em', color: '#fff', marginBottom: '20px', transitionDelay: '.06s' }}>
            Ce qu'on a appris<br />Ce qu'on a décidé d'en faire
          </h1>
          <p className="mfu" style={{ fontFamily: fi, fontSize: '.9375rem', lineHeight: 1.72, color: '#bcc8d1', marginBottom: '12px', maxWidth: '46ch', transitionDelay: '.12s' }}>
            Vingt-cinq ans dans la vente B2B complexe. Ce qui fait gagner une entreprise sur le terrain, c'est rarement l'outil. C'est la méthode, la donnée et la capacité à faire fonctionner ces trois choses ensemble.
          </p>
          <p className="mfu" style={{ fontFamily: fi, fontSize: '.9375rem', lineHeight: 1.72, color: '#bcc8d1', marginBottom: '12px', maxWidth: '46ch', transitionDelay: '.17s' }}>
            J'ai créé Squadia pour transmettre ça ; aider les ETI et PME à structurer un système commercial qui tient dans la durée.
          </p>
          <div className="mfu" style={{ fontFamily: fj, fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px', transitionDelay: '.22s' }}>
            <span style={{ display: 'block', width: '28px', height: '2px', background: '#44CCFF', flexShrink: 0 }} />
            Jérôme, Fondateur
          </div>
          <div className="mfu" style={{ display: 'flex', gap: '12px', marginTop: '28px', transitionDelay: '.27s' }}>
            <a className="btn-primary-m" href="#constat">Constat terrain</a>
            <a className="btn-secondary-m" href="#equipe">L'équipe</a>
          </div>
        </div>

        <div className="hero-right-m" style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={jeromeBgImg} alt="Jérôme DEBRUYNE" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', filter: 'contrast(1.04) brightness(0.88)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,#0c0e12 0%,rgba(12,14,18,.55) 28%,rgba(12,14,18,.08) 55%,transparent 100%)', zIndex: 1 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top,#0c0e12 0%,transparent 100%)', zIndex: 1 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '12%', background: 'linear-gradient(to bottom,rgba(12,14,18,.45) 0%,transparent 100%)', zIndex: 1 }} />
        </div>
      </div>

      {/* ── CE QU'ON OBSERVE ── */}
      <section id="constat" style={{ background: '#080a0d', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div className="container">
          <span className="mfu" style={{ fontFamily: fj, fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Ce qu'on observe</span>
          <h2 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#fff', marginBottom: '8px', maxWidth: '560px' }}>Ce qui coince dans la plupart des organisations commerciales.</h2>
          <p className="mfu" style={{ fontFamily: fi, fontSize: '.875rem', lineHeight: 1.65, color: '#bcc8d1', maxWidth: '500px', marginBottom: '40px' }}>Trois réalités observées dans presque chaque mission.</p>
          <div className="three-col-m" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {[
              { icon: <IconTrend />, title: "La vente reste un art là où elle devrait devenir une science.", body: "Pipeline sur sentiment, pas sur des faits. Pas d'étapes définies, pas d'indicateurs. Un retard structurel, pas technologique.", tag: "Retard structurel", delay: '0s' },
              { icon: <IconDoc />, title: "Peu d'outils. Encore moins de méthode.", body: "Reporting Excel, pas de coordination éditoriale, contribution marketing immesurable. Quand les outils existent, la méthode est rarement là.", tag: "Déficit opérationnel", delay: '.08s' },
              { icon: <IconClock />, title: "L'IA est en phase d'adoption, pas encore en phase d'impact.", body: "50 % du temps commercial part en administratif. L'IA est déjà dans les outils ; les équipes ne savent pas encore vraiment s'en servir.", tag: "Adoption en cours", delay: '.16s' },
            ].map((c, i) => (
              <div key={i} className="glass-card-m glass-card-orange mfu" style={{ padding: '26px', transitionDelay: c.delay }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'rgba(234,88,12,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>{c.icon}</div>
                <h3 style={{ fontFamily: fj, fontSize: '.9375rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-.01em', color: '#fb923c', marginBottom: '8px' }}>{c.title}</h3>
                <p style={{ fontFamily: fi, fontSize: '.8125rem', lineHeight: 1.65, color: '#bcc8d1', marginTop: '8px' }}>{c.body}</p>
                <div style={{ marginTop: '16px' }}><span className="tag-m tag-orange-m">{c.tag}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE EN QUOI ON CROIT ── */}
      <section style={{ background: '#0c0e12', padding: '80px 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ position: 'absolute', top: 0, right: '-200px', width: '500px', height: '100%', background: 'radial-gradient(ellipse,rgba(68,204,255,.04) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="mfu" style={{ fontFamily: fj, fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Ce en quoi on croit</span>
          <h2 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#fff', marginBottom: '8px', maxWidth: '540px' }}>Quatre convictions qui guident chaque mission.</h2>
          <p className="mfu" style={{ fontFamily: fi, fontSize: '.875rem', lineHeight: 1.65, color: '#bcc8d1', maxWidth: '460px', marginBottom: '40px' }}>Des positions opérationnelles, pas des valeurs d'affichage.</p>
          <div className="four-col-m" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(255,255,255,.05)', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,.05)' }}>
            {[
              { num: '01', title: 'La décision avant l\'outillage.', body: 'On évalue ce qui est le plus pertinent pour atteindre vos objectifs, puis on définit la stratégie, les outils et les process.' },
              { num: '02', title: 'Un système cohérent vaut plus que tout.', body: 'Un système cohérent est la clé de la réussite. Stratégie, Data, Automatisation, Formation, alignés et solidaires.' },
              { num: '03', title: 'L\'IA, accélérateur complémentaire.', body: 'En complément d\'une stratégie claire, d\'une donnée propre et d\'une méthode solide, l\'IA amplifie ce qui fonctionne déjà.' },
              { num: '04', title: 'Après la stratégie, l\'exécution.', body: 'Périmètre, livrables, calendrier, responsabilités. Définis ensemble avant le démarrage, dans l\'ordre des priorités.' },
            ].map((c, i) => (
              <div key={i} className="conv-block">
                <span style={{ fontFamily: fj, fontSize: '1.875rem', fontWeight: 800, letterSpacing: '-.04em', color: '#44CCFF', lineHeight: 1, display: 'block', marginBottom: '18px' }}>{c.num}</span>
                <h4 style={{ fontFamily: fj, fontSize: '.9375rem', fontWeight: 700, lineHeight: 1.25, color: '#fff', marginBottom: '10px' }}>{c.title}</h4>
                <p style={{ fontFamily: fi, fontSize: '.8125rem', lineHeight: 1.65, color: '#bcc8d1' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUELQUES CHIFFRES ── */}
      <section style={{ background: '#080a0d', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div className="container">
          <span className="mfu" style={{ fontFamily: fj, fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Quelques chiffres</span>
          <h2 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#fff', marginBottom: '40px' }}>Le marché en 2026.</h2>
          <div className="three-col-m" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {[
              { num: '58 %', body: "des dirigeants de PME et ETI considèrent l'IA comme un enjeu de survie.", source: 'Bpifrance 2026', delay: '0s' },
              { num: '50 %', body: "du temps des commerciaux est consacré à des tâches administratives, pas à la vente.", source: 'Salesforce State of Sales', delay: '.08s' },
              { num: '32 %', body: "des PME utilisent l'IA au quotidien. Les autres sont encore en phase d'exploration.", source: 'Bpifrance 2026', delay: '.16s' },
            ].map((s, i) => (
              <div key={i} className="glass-card-m glass-card-blue-border mfu" style={{ padding: '28px 24px', transitionDelay: s.delay }}>
                <div style={{ fontFamily: fj, fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-.04em', color: '#44CCFF', lineHeight: 1, marginBottom: '10px' }}>{s.num}</div>
                <p style={{ fontFamily: fi, fontSize: '.8125rem', lineHeight: 1.65, color: '#bcc8d1' }}>{s.body}</p>
                <div style={{ marginTop: '14px', fontFamily: fi, fontSize: '.625rem', fontWeight: 700, color: '#4b5563', letterSpacing: '.06em', textTransform: 'uppercase' }}>{s.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section id="equipe" style={{ background: '#0c0e12', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <span className="mfu" style={{ fontFamily: fj, fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>L'équipe</span>
            <h2 className="mfu" style={{ fontFamily: fj, fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#fff', marginBottom: '8px' }}>Votre équipe dédiée.</h2>
            <p className="mfu" style={{ fontFamily: fi, fontSize: '.875rem', lineHeight: 1.65, color: '#bcc8d1', maxWidth: '480px', marginTop: '8px' }}>Experts indépendants associés, chacun avec son domaine, sa structure et une complémentarité réelle sur le terrain.</p>
          </div>

          <div className="team-grid-m" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', alignItems: 'stretch' }}>

            {/* KAVIDA — gauche */}
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
                  <p style={{ fontFamily: fi, fontSize: '.8125rem', lineHeight: 1.6, color: '#9aabb5', flex: 1 }}>Ex-Directrice Excellence Opérationnelle Cegedim, spécialisée en change management et neurosciences appliquées aux équipes managers et terrain. Expérience internationale.</p>
                  <a className="link-ext" href="https://www.linkedin.com/in/kavida-angapin" target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' }}>
                    <IconLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* JÉRÔME — centre */}
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
                  <p style={{ fontFamily: fi, fontSize: '.8125rem', lineHeight: 1.6, color: '#9aabb5', flex: 1 }}>Ex-Xerox, Dell, Oracle. De commercial sédentaire à manager, responsable du go-to-market France. Formateur Cegos et Comundi, IA appliquée aux métiers de la vente, du marketing et de la communication.</p>
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

            {/* JULIEN — droite */}
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
                  <div style={{ fontFamily: fi, fontSize: '.6875rem', color: 'rgba(188,200,209,.45)', lineHeight: 1.4 }}>Fondateur</div>
                </div>
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,.05)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontFamily: fi, fontSize: '.8125rem', lineHeight: 1.6, color: '#9aabb5', flex: 1 }}>Ex-Inside Sales Manager SaaS. CRM et Customer Experience Trainer, formation sur le cycle de vente complet, BPO et accompagnement commercial terrain.</p>
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
      <section style={{ background: '#080a0d', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div className="container">
          <div style={{ background: 'rgba(20,24,30,.8)', border: '1px solid rgba(68,204,255,.1)', borderRadius: '20px', padding: '64px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px -20px rgba(68,204,255,.15)' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(68,204,255,.05) 0%,transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ fontFamily: fj, fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Prochaine étape</span>
              <h2 style={{ fontFamily: fj, fontSize: 'clamp(1.75rem,3.2vw,2.625rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.03em', color: '#fff', marginBottom: '12px' }}>
                Squadia est-il le bon partenaire<br />pour votre organisation ?
              </h2>
              <p style={{ fontFamily: fi, fontSize: '.9375rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '360px', margin: '0 auto 32px' }}>Prenons 30 minutes pour en discuter.</p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link className="btn-primary-m" to="/contact">Prendre RDV</Link>
                <Link className="btn-secondary-m" to="/tarifs">Découvrir nos offres</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mission;
