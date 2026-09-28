'use client';
import React, { useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Contact : Prendre rendez-vous avec Squadia";
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
      config: {"layout":"month_view","theme":"light"},
      calLink: "squadia/meeting-decouverte",
    });

    window.Cal.ns["meeting-decouverte"]("ui", {
      "theme":"light",
      "cssVarsPerTheme":{
        "light":{"cal-brand":"#1F3A33","cal-bg":"#FFFFFF","cal-bg-muted":"#F6F3EC","cal-border":"#D8D1C2","cal-border-subtle":"#E4DED2"}, 
        "dark":{"cal-brand":"#1F3A33"}
      },
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  }, []);

  return (
    <div className="contact-page" style={{ background: '#F6F3EC', color: '#1C2B27', minHeight: '100vh' }}>
      
      {/* ═══ HEADER / HERO ═══ */}
      <section className="container" style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="fade-in">
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Parlons de votre prochain<br />palier de croissance.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(28,43,39,0.6)', maxWidth: '650px', marginInline: 'auto', lineHeight: 1.6 }}>
            Choisissez le moment idéal pour un échange de 30 minutes.
          </p>
        </div>
      </section>

      {/* ═══ WIDGET CAL.COM ═══ */}
      <section className="container fade-in" style={{ paddingBottom: '120px' }}>
        <div style={{ 
          maxWidth: '1080px', 
          margin: '0 auto', 
          background: '#F6F3EC', 
          borderRadius: '32px', 
          border: '1px solid rgba(28,43,39,0.14)', 
          overflow: 'hidden',
          minHeight: '750px',
          boxShadow: '0 40px 100px -20px rgba(28,43,39,0.245)',
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
            background: 'transparent',
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
              background: 'rgba(255,255,255,0.6)', 
              border: '1px solid rgba(28,43,39,0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MapPin size={24} color="#1F3A33" />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1C2B27', marginBottom: '4px' }}>Adresse</div>
              <div style={{ fontSize: '0.95rem', color: 'rgba(28,43,39,0.6)' }}>198 Avenue de France, 75013 Paris</div>
            </div>
          </div>

          {/* EMAIL */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              background: 'rgba(255,255,255,0.6)', 
              border: '1px solid rgba(28,43,39,0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Mail size={24} color="#1F3A33" />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1C2B27', marginBottom: '4px' }}>Envoyez nous un mail</div>
              <a href="mailto:contact@squadia.io" style={{ fontSize: '0.95rem', color: 'rgba(28,43,39,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#1C2B27'} onMouseLeave={(e) => e.target.style.color = 'rgba(28,43,39,0.6)'}>
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
              background: 'rgba(255,255,255,0.6)', 
              border: '1px solid rgba(28,43,39,0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Phone size={24} color="#1F3A33" />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1C2B27', marginBottom: '4px' }}>Pour plus d'infos</div>
              <a href="tel:+33745804949" style={{ fontSize: '0.95rem', color: 'rgba(28,43,39,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#1C2B27'} onMouseLeave={(e) => e.target.style.color = 'rgba(28,43,39,0.6)'}>
                +33 (0) 7 45 80 49 49
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
