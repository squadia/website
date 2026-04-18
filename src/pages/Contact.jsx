import React, { useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Contact — Prendre rendez-vous avec Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Prenez rendez-vous avec l'équipe Squadia pour discuter de votre projet IA, CRM ou automatisation B2B. Disponible par téléphone, email ou directement en ligne.");
    }
  }, []);

  useEffect(() => {
    // Cal.com embed script initialization
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "meeting-decouverte", {origin:"https://app.cal.com"});

    window.Cal.ns["meeting-decouverte"]("inline", {
      elementOrSelector:"#my-cal-inline-meeting-decouverte",
      config: {"layout":"month_view"},
      calLink: "squadia/meeting-decouverte",
    });

    window.Cal.ns["meeting-decouverte"]("ui", {
      "cssVarsPerTheme":{
        "light":{"cal-brand":"#2563EB"}, 
        "dark":{"cal-brand":"#2563EB"}
      },
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  }, []);

  return (
    <div className="contact-page" style={{ background: '#0A0A1A', color: '#F9FAFB', minHeight: '100vh' }}>
      
      {/* ═══ HEADER / HERO ═══ */}
      <section className="container" style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="fade-in">
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Parlons de votre prochain<br />palier de croissance.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', maxWidth: '650px', marginInline: 'auto', lineHeight: 1.6 }}>
            Choisissez le moment idéal pour un échange stratégique de 30 minutes. 
            Nous analyserons vos bloquages et identifierons vos leviers prioritaires.
          </p>
        </div>
      </section>

      {/* ═══ WIDGET CAL.COM ═══ */}
      <section className="container fade-in" style={{ paddingBottom: '120px' }}>
        <div style={{ 
          maxWidth: '1080px', 
          margin: '0 auto', 
          background: '#0D0D25', 
          borderRadius: '32px', 
          border: '1px solid rgba(255,255,255,0.08)', 
          overflow: 'hidden',
          minHeight: '750px',
          boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.7)',
          position: 'relative'
        }}>
          {/* Subtle Glow behind widget */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />
          
          <div style={{ width: '100%', height: '750px', overflow: 'scroll', position: 'relative', zIndex: 1 }} id="my-cal-inline-meeting-decouverte"></div>
        </div>

        {/* ═══ INFOS DE CONTACT ═══ */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem', 
          maxWidth: '1080px', 
          margin: '5rem auto 0 auto',
          padding: '0 1rem'
        }}>
          {/* ADRESSE */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MapPin size={24} color="#2563EB" />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Adresse</div>
              <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)' }}>198 Avenue de France, 75013 Paris</div>
            </div>
          </div>

          {/* EMAIL */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Mail size={24} color="#2563EB" />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Envoyez nous un mail</div>
              <a href="mailto:contact@squadia.io" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}>
                contact@squadia.io
              </a>
            </div>
          </div>

          {/* TELEPHONE */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Phone size={24} color="#2563EB" />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Pour plus d'infos</div>
              <a href="tel:+33782843564" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}>
                +33 (0) 7 82 84 35 64
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
