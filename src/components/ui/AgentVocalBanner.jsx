'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Pastille d'annonce en haut de l'accueil : invite à tester l'agent vocal.
// Visible tant qu'on reste en haut de page ; la fermeture n'est gardée qu'en
// mémoire (rien n'est écrit dans le navigateur).
export default function AgentVocalBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const onScroll = () => setAtTop(window.scrollY < 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, []);

  const shown = visible && !dismissed && atTop;

  return (
    <>
    <AnimatePresence>
      {shown && (
        <motion.div
          key="agent-vocal-banner"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="agent-vocal-banner"
          style={{
            position: 'fixed', top: '96px', left: '50%', x: '-50%', zIndex: 900,
            display: 'flex', alignItems: 'center', gap: '0.75rem', maxWidth: 'calc(100vw - 32px)',
            background: '#1F3A33', color: '#F6F3EC', borderRadius: '999px', padding: '0.55rem 0.6rem 0.55rem 1rem',
            boxShadow: '0 12px 30px rgba(31,58,51,0.25)', fontSize: '0.88rem',
          }}
        >
          <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1F3A33', background: '#D4B98A', borderRadius: '999px', padding: '3px 8px', flexShrink: 0 }}>Nouveau</span>
          <span className="agent-vocal-banner-text" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Elisa vous répond et vous guide.</span>
          <Link href="/agent-vocal-ia" style={{ color: '#F6F3EC', fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid #B08D57', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Découvrir →
          </Link>
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setDismissed(true)}
            style={{ background: 'rgba(246,243,236,0.12)', border: 'none', color: '#F6F3EC', width: 26, height: 26, borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', lineHeight: 1, flexShrink: 0 }}
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    <style>{`
      @media (max-width: 520px) { .agent-vocal-banner-text { display: none; } }
    `}</style>
    </>
  );
}
