import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Target, Database, Zap, GraduationCap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gmImg from '../../assets/images/gm.png';
import smImg from '../../assets/images/sm.png';
import mmImg from '../../assets/images/mm.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState('strategie');
  const [activeMobileCategory, setActiveMobileCategory] = useState('strategie');
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [showMobileRoles, setShowMobileRoles] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Body scroll lock + ESC key
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  useEffect(() => {
    window.squadSetCat = (name) => setActiveCategory(name);
  }, []);

  const closeMenu = () => { setIsOpen(false); setShowDropdown(false); };

  return (
    <>
    {/* ══════════════════════════════
        NAVBAR
    ══════════════════════════════ */}
    <nav className={`navbar-base ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: isMobile ? '60px' : (scrolled ? '64px' : '80px'),
        paddingLeft: isMobile ? '1.25rem' : (scrolled ? '2.5rem' : '8%'),
        paddingRight: isMobile ? '1rem' : (scrolled ? '2rem' : '5%'),
        width: '100%',
        boxSizing: 'border-box',
        transition: 'all 0.5s ease'
      }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Squadia" className="logo" style={{ height: scrolled ? '28px' : '32px', width: 'auto', transition: 'all 0.5s' }} />
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <motion.div
          className="desktop-nav"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
          transformTemplate={(_, generated) => `translateX(-50%) ${generated}`}
          style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: scrolled ? '1.5rem' : '2rem', alignItems: 'center',
            transition: 'all 0.5s ease'
          }}>
          <div data-dropdown="nos-services" onClick={() => setShowDropdown(!showDropdown)}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer',
              fontSize: scrolled ? '0.95rem' : '1rem', color: '#fff', fontWeight: 500 }}>
            Nos Services <ChevronDown size={14} style={{ transition: 'transform 0.2s' }} />
          </div>
          <Link to="/cas-clients" style={{ fontSize: scrolled ? '0.95rem' : '1rem', color: '#fff', fontWeight: 500, textDecoration: 'none' }}>Cas clients</Link>
          <Link to="/ressources"  style={{ fontSize: scrolled ? '0.95rem' : '1rem', color: '#fff', fontWeight: 500, textDecoration: 'none' }}>Ressources</Link>
          <Link to="/tarifs"      style={{ fontSize: scrolled ? '0.95rem' : '1rem', color: '#fff', fontWeight: 500, textDecoration: 'none' }}>Tarifs</Link>
        </motion.div>

        {/* Desktop CTA */}
        <motion.div
          className="desktop-nav"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
        >
          <Link to="/contact" className="btn-RDV" style={{
            padding: scrolled ? '6px 14px' : '8px 18px',
            fontSize: scrolled ? '12px' : '13px',
            transition: 'all 0.5s ease', textDecoration: 'none', display: 'inline-block'
          }}>Prendre RDV</Link>
        </motion.div>

        {/* Hamburger button animé */}
        <button
          className={`hamburger-btn${isOpen ? ' is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span className="hb-box">
            <span className="hb-line" />
            <span className="hb-line" />
            <span className="hb-line" />
          </span>
        </button>
      </div>

      {/* Desktop dropdown */}
      <div
        className={`squad-dropdown ${showDropdown ? 'open' : ''}`}
        ref={dropdownRef}
        style={{ top: scrolled ? '64px' : '80px', display: showDropdown ? 'block' : 'none' }}
      >
        <div className="squad-dropdown-inner">
          <div className="squad-categories" style={{ position: 'relative' }}>
            <div className="squad-glider-track">
              <div className="squad-glider" style={{ transform: `translateY(${['strategie','data','automatisation','formation'].indexOf(activeCategory) * 100}%)` }}>
                <div className="squad-glider-glow" />
                <div className="squad-glider-trail" />
              </div>
            </div>
            {[
              { id: 'strategie', label: 'Stratégie', icon: <Target size={16} style={{ marginRight: '8px', color: '#fff' }} /> },
              { id: 'data', label: 'Data', icon: <Database size={16} style={{ marginRight: '8px', color: '#fff' }} /> },
              { id: 'automatisation', label: 'Automatisation', icon: <Zap size={16} style={{ marginRight: '8px', color: '#fff' }} /> },
              { id: 'formation', label: 'Formation', icon: <GraduationCap size={16} style={{ marginRight: '8px', color: '#fff' }} /> },
            ].map(cat => (
              <div key={cat.id} className={`squad-cat ${activeCategory === cat.id ? 'active' : ''}`} onClick={() => setActiveCategory(cat.id)}>
                {cat.icon}{cat.label}
              </div>
            ))}
          </div>

          <div className="squad-items-wrap">
            <div style={{ display: activeCategory === 'strategie' ? 'block' : 'none' }}>
              <Link className="squad-item" onClick={() => setShowDropdown(false)} to="/strategie/commerciale">
                <span className="squad-item-title">Stratégie Commerciale</span><span className="squad-tag">Stratégie</span>
                <p className="squad-item-desc">Structurer votre méthode de vente, fiabiliser votre pipeline et aligner vos équipes</p>
              </Link>
              <Link className="squad-item" onClick={() => setShowDropdown(false)} to="/strategie/crm">
                <span className="squad-item-title">Migration CRM</span><span className="squad-tag">Stratégie</span>
                <p className="squad-item-desc">Déployer un CRM que vos équipes utilisent vraiment — de l'audit à l'adoption</p>
              </Link>
            </div>
            <div style={{ display: activeCategory === 'data' ? 'block' : 'none' }}>
              <Link className="squad-item" onClick={() => setShowDropdown(false)} to="/data/data-clean">
                <span className="squad-item-title">Data Clean</span><span className="squad-tag">Data</span>
                <p className="squad-item-desc">Nettoyer et fiabiliser votre base CRM existante en supprimant doublons et erreurs</p>
              </Link>
              <Link className="squad-item" onClick={() => setShowDropdown(false)} to="/data/data-seg">
                <span className="squad-item-title">Data Seg</span><span className="squad-tag">Data</span>
                <p className="squad-item-desc">Segmenter votre base pour cibler les bons comptes au bon moment avec précision</p>
              </Link>
              <Link className="squad-item" onClick={() => setShowDropdown(false)} to="/data/data-lead">
                <span className="squad-item-title">Data Lead</span><span className="squad-tag">Data</span>
                <p className="squad-item-desc">Construire une base de prospection B2B qualifiée, vérifiée et prête à l'emploi</p>
              </Link>
              <Link to="/data" onClick={() => setShowDropdown(false)} className="squad-all-link">Tous nos services Data →</Link>
            </div>
            <div style={{ display: activeCategory === 'automatisation' ? 'block' : 'none' }}>
              <Link className="squad-item" onClick={() => setShowDropdown(false)} to="/automatisation-ia">
                <span className="squad-item-title">Automatisation IA</span><span className="squad-tag">Automatisation</span>
                <p className="squad-item-desc">Plan Starter, Scale ou System adapté à vos besoins et à votre flux d'activité.</p>
              </Link>
            </div>
            <div style={{ display: activeCategory === 'formation' ? 'block' : 'none' }}>
              <div className="squad-formation-grid">
                <Link className="squad-item" onClick={() => setShowDropdown(false)} to="/formation-ventes-et-ia">
                  <span className="squad-item-title">Vente B2B et IA</span>
                  <p className="squad-item-desc">Prospecter, qualifier et closer autrement avec l'IA</p>
                </Link>
                <Link className="squad-item" onClick={() => setShowDropdown(false)} to="/formation-marketing-et-ia">
                  <span className="squad-item-title">Marketing et IA</span>
                  <p className="squad-item-desc">Contenus, campagnes et analyse augmentée avec l'IA</p>
                </Link>
                <Link className="squad-item" onClick={() => setShowDropdown(false)} to="/formation-communication-et-ia">
                  <span className="squad-item-title">Communication et IA</span>
                  <p className="squad-item-desc">Produire plus, mieux, plus vite : l'IA au service de votre message</p>
                </Link>
              </div>
              <Link to="/formations" onClick={() => setShowDropdown(false)} className="squad-all-link">Toutes nos formations →</Link>
            </div>
          </div>

          <div className="squad-personas">
            <h4 style={{ textAlign: 'center' }}>Votre Rôle et l'IA</h4>
            <p style={{ textAlign: 'center' }}>Activez les quick wins et renforcez vos résultats</p>
            <div className="squad-persona-list">
              {[
                { to: '/directeur-general', src: gmImg, name: 'General Manager', sub: 'Vision, cap et transformation' },
                { to: '/directeur-commercial', src: smImg, name: 'Sales Director', sub: 'Pipeline, deals et performance' },
                { to: '/directeur-marketing', src: mmImg, name: 'Marketing Director', sub: 'Acquisition, contenu et pipeline' },
              ].map(p => (
                <Link key={p.to} to={p.to} className="squad-persona" onClick={() => setShowDropdown(false)}>
                  <img src={p.src} alt={p.name} />
                  <div className="squad-persona-info">
                    <span className="squad-persona-name">{p.name}</span>
                    <span className="squad-persona-sub">{p.sub}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── NAVBAR ── */
        .navbar-base {
          position: fixed; z-index: 1000;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 100%;
          background-color: transparent;
          border: 1px solid transparent;
          transition: all 0.5s ease-in-out;
        }
        .navbar-scrolled {
          top: 20px;
          width: min(1200px, 92vw);
          background-color: rgba(6,6,18,0.85);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 60px;
          border: 1px solid rgba(68,204,255,0.2);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .btn-RDV {
          background: #44CCFF; color: #060612;
          padding: 8px 18px; font-size: 13px; font-weight: 700;
          border-radius: 6px; text-decoration: none; transition: transform 0.2s;
        }
        .btn-RDV:hover { transform: translateY(-1px); }

        /* ── HAMBURGER animé ── */
        .hamburger-btn {
          width: 40px; height: 40px;
          align-items: center; justify-content: center;
          cursor: pointer; background: none; border: none;
          position: relative; z-index: 1100; flex-shrink: 0;
        }
        .hb-box {
          width: 24px; height: 18px;
          position: relative;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .hb-line {
          display: block; width: 100%; height: 2px;
          background: #fff; border-radius: 2px;
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.77,0,0.175,1),
                      opacity 0.25s ease,
                      width 0.35s cubic-bezier(0.77,0,0.175,1);
        }
        .hb-line:nth-child(2) { width: 70%; align-self: flex-end; }
        .hamburger-btn.is-open .hb-line:nth-child(1) { transform: translateY(8px) rotate(45deg); width: 100%; }
        .hamburger-btn.is-open .hb-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger-btn.is-open .hb-line:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        /* ── DESKTOP DROPDOWN ── */
        .squad-dropdown {
          position: absolute; left: 50%; transform: translateX(-50%);
          width: min(1200px, 94vw); max-width: 1200px;
          background: #060612; backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(68,204,255,0.13); border-radius: 14px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.55);
          margin-top: 8px; z-index: 9999; animation: squadIn 0.18s ease-out;
        }
        .squad-dropdown::before {
          content: ''; position: absolute; top: -6px; left: 38%;
          width: 12px; height: 12px; background: #060612;
          border-left: 1px solid rgba(68,204,255,0.13);
          border-top: 1px solid rgba(68,204,255,0.13);
          transform: translateX(-50%) rotate(45deg);
        }
        @keyframes squadIn {
          from { opacity:0; transform:translateX(-50%) translateY(-6px); }
          to   { opacity:1; transform:translateX(-50%) translateY(0); }
        }
        .squad-dropdown-inner { display: grid; grid-template-columns: 190px 1fr 400px; gap: 0; padding: 20px; }
        .squad-categories { display: flex; flex-direction: column; gap: 2px; padding-right: 16px; border-right: 1px solid rgba(255,255,255,0.18); }
        .squad-cat { padding: 14px; border-radius: 8px; cursor: pointer; font-size: 14px; color: rgba(255,255,255,0.62); transition: all 0.3s ease; position: relative; z-index: 2; height: 48px; display: flex; align-items: center; }
        .squad-cat:hover { color: rgba(255,255,255,0.8); }
        .squad-cat.active { color: #44CCFF; font-weight: 600; }
        .squad-glider-track { position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent); z-index: 1; }
        .squad-glider { position: relative; height: 48px; width: 100%; background: linear-gradient(to bottom, transparent, #44CCFF, transparent); transition: transform 0.5s cubic-bezier(0.37,1.95,0.66,0.56); }
        .squad-glider-glow { position: absolute; top: 50%; left: 0; transform: translateY(-50%); height: 60%; width: 300px; background: #44CCFF; filter: blur(40px); opacity: 0.12; pointer-events: none; }
        .squad-glider-trail { position: absolute; left: 0; height: 100%; width: 144px; background: linear-gradient(to right, rgba(68,204,255,0.12), transparent); pointer-events: none; }
        .squad-items-wrap { padding: 0 20px; }
        .squad-item { display: block; padding: 11px 12px; border-radius: 8px; text-decoration: none; transition: background 0.13s ease; margin-bottom: 2px; }
        .squad-item:hover { background: rgba(255,255,255,0.04); }
        .squad-item-title { color: #fff; font-size: 14px; font-weight: 500; display: inline; margin-right: 8px; }
        .squad-tag { background: rgba(68,204,255,0.09); border: 1px solid rgba(68,204,255,0.22); color: #44CCFF; font-size: 10px; padding: 2px 8px; border-radius: 20px; vertical-align: middle; }
        .squad-item-desc { color: rgba(255,255,255,0.65); font-size: 13px; margin-top: 3px; line-height: 1.5; }
        .squad-formation-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .squad-all-link { display: block; margin-top: 10px; padding: 8px 12px; color: #44CCFF; font-size: 13px; text-decoration: none; border-top: 1px solid rgba(255,255,255,0.06); }
        .squad-personas { padding: 20px; background: rgba(68,204,255,0.06); border: 1px solid rgba(68,204,255,0.15); border-radius: 10px; margin-left: 20px; }
        .squad-personas h4 { color: #fff; font-size: 18px; font-weight: 600; margin-bottom: 6px; }
        .squad-personas p { color: rgba(255,255,255,0.65); font-size: 13px; margin-bottom: 24px; line-height: 1.5; }
        .squad-persona-list { display: flex; flex-direction: column; gap: 20px; }
        .squad-persona { display: flex; align-items: center; padding: 10px 14px; border-radius: 8px; text-decoration: none; transition: background 0.15s ease; }
        .squad-persona:hover { background: rgba(68,204,255,0.08); }
        .squad-persona img { width: 58px; height: 58px; border-radius: 50%; margin-right: 14px; object-fit: cover; }
        .squad-persona-info { display: flex; flex-direction: column; }
        .squad-persona-name { color: rgba(255,255,255,0.85); font-size: 15px; font-weight: 500; }
        .squad-persona-sub { color: rgba(255,255,255,0.62); font-size: 12px; margin-top: 3px; }
        .squad-persona:hover .squad-persona-name { color: #fff; }

        @media (max-width: 860px) {
          .squad-dropdown-inner { grid-template-columns: 160px 1fr; }
          .squad-personas { display: none; }
        }

        /* ── MOBILE BREAKPOINT ── */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .squad-dropdown { display: none !important; }
          .navbar-scrolled {
            top: 0 !important; width: 100% !important;
            border-radius: 0 !important;
          }
          .navbar-base {
            background-color: rgba(6,6,18,0.95) !important;
            backdrop-filter: blur(16px) !important;
            -webkit-backdrop-filter: blur(16px) !important;
            border-bottom: 1px solid rgba(68,204,255,0.12) !important;
          }
          /* Padding réduit pour garder logo + hamburger dans l'écran */
          .navbar-base > div {
            padding-left: 1.25rem !important;
            padding-right: 1rem !important;
            height: 60px !important;
          }
          /* Logo navbar réduit */
          .navbar-base .logo {
            height: 22px !important;
          }
          /* Logo menu mobile : empêcher height:auto du CSS global */
          .mob-header img {
            height: 26px !important;
            width: auto !important;
            max-width: none !important;
          }
        }

        /* ── MOBILE MENU ── */
        .mob-menu {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100dvh;
          background: #0A0A1A;
          z-index: 1050;
          display: flex; flex-direction: column;
          overflow: hidden;
        }
        .mob-header {
          height: 56px; flex-shrink: 0;
          display: flex; align-items: center;
          padding: 0 16px;
          border-bottom: 1px solid rgba(68,204,255,0.1);
        }
        .mob-body {
          flex: 1; display: flex; flex-direction: column;
          overflow-y: auto;
          padding: 4px 0 8px;
        }
        /* Label NOS SERVICES */
        .mob-section-label {
          padding: 12px 16px 0;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(249,250,251,0.4);
        }
        /* Category tabs — grille 2×2 pour tout afficher sans scroll horizontal */
        .mob-cat-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          padding: 10px 16px;
          flex-shrink: 0;
        }
        .mob-cat-tab {
          padding: 7px 10px; border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.5);
          font-size: 12px; font-weight: 500;
          cursor: pointer; text-align: center;
          transition: all 0.2s ease;
        }
        .mob-cat-tab.active {
          background: rgba(68,204,255,0.08);
          border-color: #44CCFF;
          color: #44CCFF;
        }
        /* Service panels */
        .mob-panels { padding: 0 16px; flex: 1; }
        .mob-service-item {
          display: block; padding: 10px 12px; border-radius: 8px;
          text-decoration: none; margin-bottom: 4px;
          border: 1px solid transparent;
          transition: background 0.15s, border-color 0.15s;
        }
        .mob-service-item:active { background: rgba(255,255,255,0.04); border-color: rgba(68,204,255,0.1); }
        .mob-service-top { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; flex-wrap: wrap; }
        .mob-service-title { font-size: 13px; font-weight: 600; color: #F9FAFB; }
        .mob-service-tag {
          font-size: 9px; font-weight: 500; padding: 2px 7px; border-radius: 20px;
          background: rgba(68,204,255,0.08); border: 1px solid rgba(68,204,255,0.2);
          color: #44CCFF; flex-shrink: 0;
        }
        .mob-service-desc { font-size: 12px; color: rgba(249,250,251,0.45); line-height: 1.45; }
        .mob-all-link {
          display: flex; align-items: center; gap: 6px;
          margin-top: 6px; padding: 3px 0;
          font-size: 12px; color: #44CCFF; text-decoration: none;
        }
        .mob-formation-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; margin-bottom: 4px; }
        .mob-formation-grid .mob-service-item { margin-bottom: 0; }
        .mob-formation-grid .mob-service-desc { font-size: 11px; }
        /* Divider */
        .mob-divider { height: 1px; background: rgba(68,204,255,0.1); margin: 0 16px 12px; flex-shrink: 0; }
        /* Personas */
        .mob-persona-block { padding: 0 16px 12px; flex-shrink: 0; }
        .mob-persona-title { font-size: 13px; font-weight: 700; color: #F9FAFB; margin-bottom: 2px; }
        .mob-persona-sub { font-size: 11px; color: rgba(249,250,251,0.45); margin-bottom: 8px; }
        .mob-persona-list { display: flex; flex-direction: column; gap: 5px; }
        .mob-persona-item {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 10px; border-radius: 8px;
          border: 1px solid rgba(68,204,255,0.1);
          background: rgba(255,255,255,0.02);
          text-decoration: none;
          transition: background 0.15s, border-color 0.15s;
        }
        .mob-persona-item:active { background: rgba(255,255,255,0.05); border-color: rgba(68,204,255,0.2); }
        .mob-persona-avatar {
          width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0;
          border: 1px solid rgba(68,204,255,0.2); overflow: hidden;
          background: linear-gradient(135deg, #1a2a4a, #0d1a30);
        }
        .mob-persona-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .mob-persona-info { flex: 1; }
        .mob-persona-role { font-size: 13px; font-weight: 600; color: #F9FAFB; }
        .mob-persona-desc { font-size: 11px; color: rgba(249,250,251,0.45); }
        .mob-persona-arrow { color: #44CCFF; font-size: 16px; opacity: 0.6; }
        /* Secondary nav */
        .mob-nav-secondary { padding: 0 16px 4px; display: flex; flex-direction: column; gap: 1px; flex-shrink: 0; }
        .mob-nav-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 12px; border-radius: 8px;
          text-decoration: none; color: #F9FAFB;
          font-size: 14px; font-weight: 500;
          transition: background 0.15s;
        }
        .mob-nav-link:active { background: rgba(255,255,255,0.04); }
        .mob-nav-arrow { color: rgba(249,250,251,0.45); font-size: 16px; }
        /* Accordion Nos Services */
        .mob-accordion-section { flex-shrink: 0; }
        .mob-accordion-trigger {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: 10px 28px 10px 24px;
          background: none; border: none; cursor: pointer;
          color: #F9FAFB; font-size: 14px; font-weight: 500;
          text-align: left;
          transition: background 0.15s;
        }
        .mob-accordion-trigger:active { background: rgba(255,255,255,0.04); }

        /* CTA */
        .mob-cta-block {
          flex-shrink: 0;
          padding: 16px 24px 36px;
          background: #0A0A1A;
          border-top: 1px solid rgba(68,204,255,0.1);
        }
        .mob-cta-btn {
          display: block; width: 100%; padding: 14px;
          background: #2563EB; color: #fff; border: none; border-radius: 12px;
          font-size: 15px; font-weight: 700; text-align: center; text-decoration: none;
          box-shadow: 0 4px 20px rgba(37,99,235,0.4);
          transition: background 0.2s, transform 0.15s;
        }
        .mob-cta-btn:active { background: #1d4ed8; transform: scale(0.98); }
      `}</style>
    </nav>

    {/* ══════════════════════════════
        MOBILE MENU — hors du <nav>
    ══════════════════════════════ */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mob-menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.45, ease: [0.77, 0, 0.175, 1] }}
        >
          {/* Header */}
          <div className="mob-header">
            <Link to="/" onClick={closeMenu} style={{ flex: 1 }}>
              <img src="/logo.png" alt="Squadia" style={{ height: '28px', width: 'auto' }} />
            </Link>
            <button
              onClick={closeMenu}
              aria-label="Fermer le menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="mob-body">

            {/* ── 1. NOS SERVICES (accordéon) ── */}
            <div className="mob-accordion-section">
              <button
                className="mob-accordion-trigger"
                onClick={() => setShowMobileServices(!showMobileServices)}
              >
                <span>Nos Services</span>
                <ChevronDown size={15} style={{ transition: 'transform 0.25s', transform: showMobileServices ? 'rotate(180deg)' : 'rotate(0deg)', color: 'rgba(249,250,251,0.5)', flexShrink: 0 }} />
              </button>

              <AnimatePresence initial={false}>
                {showMobileServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    {/* Tabs 2×2 */}
                    <div className="mob-cat-tabs">
                      {[
                        { id: 'strategie', label: 'Stratégie' },
                        { id: 'data', label: 'Data' },
                        { id: 'automatisation', label: 'Automatisation' },
                        { id: 'formation', label: 'Formation' },
                      ].map(tab => (
                        <button
                          key={tab.id}
                          className={`mob-cat-tab${activeMobileCategory === tab.id ? ' active' : ''}`}
                          onClick={() => setActiveMobileCategory(tab.id)}
                        >{tab.label}</button>
                      ))}
                    </div>

                    {/* Panels */}
                    <div className="mob-panels" style={{ paddingBottom: '8px' }}>
                      {activeMobileCategory === 'strategie' && (
                        <>
                          <Link className="mob-service-item" to="/strategie/commerciale" onClick={closeMenu}>
                            <div className="mob-service-top"><span className="mob-service-title">Stratégie Commerciale</span><span className="mob-service-tag">Stratégie</span></div>
                            <p className="mob-service-desc">Structurer votre méthode de vente, fiabiliser votre pipeline et aligner vos équipes</p>
                          </Link>
                          <Link className="mob-service-item" to="/strategie/crm" onClick={closeMenu}>
                            <div className="mob-service-top"><span className="mob-service-title">Migration CRM</span><span className="mob-service-tag">Stratégie</span></div>
                            <p className="mob-service-desc">Déployer un CRM que vos équipes utilisent vraiment — de l'audit à l'adoption</p>
                          </Link>
                        </>
                      )}
                      {activeMobileCategory === 'data' && (
                        <>
                          <Link className="mob-service-item" to="/data/data-clean" onClick={closeMenu}>
                            <div className="mob-service-top"><span className="mob-service-title">Data Clean</span><span className="mob-service-tag">Data</span></div>
                            <p className="mob-service-desc">Nettoyer et fiabiliser votre base CRM existante</p>
                          </Link>
                          <Link className="mob-service-item" to="/data/data-seg" onClick={closeMenu}>
                            <div className="mob-service-top"><span className="mob-service-title">Data Seg</span><span className="mob-service-tag">Data</span></div>
                            <p className="mob-service-desc">Segmenter votre base pour cibler les bons comptes</p>
                          </Link>
                          <Link className="mob-service-item" to="/data/data-lead" onClick={closeMenu}>
                            <div className="mob-service-top"><span className="mob-service-title">Data Lead</span><span className="mob-service-tag">Data</span></div>
                            <p className="mob-service-desc">Construire une base de prospection B2B qualifiée</p>
                          </Link>
                          <Link className="mob-all-link" to="/data" onClick={closeMenu}>Tous nos services Data →</Link>
                        </>
                      )}
                      {activeMobileCategory === 'automatisation' && (
                        <Link className="mob-service-item" to="/automatisation-ia" onClick={closeMenu}>
                          <div className="mob-service-top"><span className="mob-service-title">Automatisation IA</span><span className="mob-service-tag">Automatisation</span></div>
                          <p className="mob-service-desc">Plan Starter, Scale ou System adapté à vos besoins</p>
                        </Link>
                      )}
                      {activeMobileCategory === 'formation' && (
                        <>
                          <div className="mob-formation-grid">
                            <Link className="mob-service-item" to="/formation-ventes-et-ia" onClick={closeMenu}>
                              <div className="mob-service-top"><span className="mob-service-title">Vente B2B et IA</span></div>
                              <p className="mob-service-desc">Prospecter et closer avec l'IA</p>
                            </Link>
                            <Link className="mob-service-item" to="/formation-marketing-et-ia" onClick={closeMenu}>
                              <div className="mob-service-top"><span className="mob-service-title">Marketing et IA</span></div>
                              <p className="mob-service-desc">Contenus et campagnes augmentés</p>
                            </Link>
                            <Link className="mob-service-item" to="/formation-communication-et-ia" onClick={closeMenu}>
                              <div className="mob-service-top"><span className="mob-service-title">Communication et IA</span></div>
                              <p className="mob-service-desc">Produire plus, mieux, plus vite</p>
                            </Link>
                          </div>
                          <Link className="mob-all-link" to="/formations" onClick={closeMenu}>Toutes nos formations →</Link>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mob-divider" />

            {/* ── 2. VOTRE RÔLE ET L'IA (accordéon) ── */}
            <div className="mob-accordion-section">
              <button
                className="mob-accordion-trigger"
                onClick={() => setShowMobileRoles(!showMobileRoles)}
              >
                <span>Votre Rôle et l'IA</span>
                <ChevronDown size={15} style={{ transition: 'transform 0.25s', transform: showMobileRoles ? 'rotate(180deg)' : 'rotate(0deg)', color: 'rgba(249,250,251,0.5)', flexShrink: 0 }} />
              </button>

              <AnimatePresence initial={false}>
                {showMobileRoles && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="mob-persona-block" style={{ paddingTop: '4px' }}>
                      <p className="mob-persona-sub" style={{ marginBottom: '10px' }}>Activez les quick wins selon votre fonction</p>
                      <div className="mob-persona-list">
                        {[
                          { to: '/directeur-general', src: gmImg, role: 'General Manager', desc: 'Vision, cap et transformation' },
                          { to: '/directeur-commercial', src: smImg, role: 'Sales Director', desc: 'Pipeline, deals et performance' },
                          { to: '/directeur-marketing', src: mmImg, role: 'Marketing Director', desc: 'Acquisition, contenu et pipeline' },
                        ].map(p => (
                          <Link key={p.to} className="mob-persona-item" to={p.to} onClick={closeMenu}>
                            <div className="mob-persona-avatar"><img src={p.src} alt={p.role} /></div>
                            <div className="mob-persona-info">
                              <div className="mob-persona-role">{p.role}</div>
                              <div className="mob-persona-desc">{p.desc}</div>
                            </div>
                            <span className="mob-persona-arrow">›</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mob-divider" />

            {/* ── 3. NAV LIENS ── */}
            <div className="mob-nav-secondary">
              {[
                { to: '/cas-clients', label: 'Cas clients' },
                { to: '/tarifs', label: 'Tarifs' },
                { to: '/ressources', label: 'Ressources' },
              ].map(link => (
                <Link key={link.to} className="mob-nav-link" to={link.to} onClick={closeMenu}>
                  {link.label}<span className="mob-nav-arrow">›</span>
                </Link>
              ))}
            </div>

          </div>

          {/* ── CTA — enfant direct de mob-menu, toujours en bas ── */}
          <div className="mob-cta-block">
            <Link className="mob-cta-btn" to="/contact" onClick={closeMenu}>Prendre RDV</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
