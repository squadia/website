'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, AudioLines, Video, Newspaper } from 'lucide-react';
import ElisaAdmin from '@/src/views/ElisaAdmin';
import TemoignageAdmin from '@/src/views/TemoignageAdmin';
import ContentAdmin from '@/src/views/ContentAdmin';
import { ELISA_ADMIN_FUNCTION_URL, GOOGLE_CLIENT_ID, ADMIN_EMAIL } from '@/src/lib/testimonialsConfig';

// Espace admin du site : une seule connexion Google (réservée à ADMIN_EMAIL,
// vérifiée côté serveur par chaque fonction), puis un onglet par sujet.
// L'onglet actif est dans l'ancre (#elisa, #temoignages, #contenus) pour les liens des emails.

const GSI_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

const TABS = [
  { value: 'elisa', label: 'Elisa', icon: <AudioLines size={16} /> },
  { value: 'temoignages', label: 'Témoignages', icon: <Video size={16} /> },
  { value: 'contenus', label: 'Contenus', icon: <Newspaper size={16} /> },
];

const AdminHub = ({ initialTab = 'elisa' }) => {
  const buttonRef = useRef(null);
  const [idToken, setIdToken] = useState('');
  const [loginError, setLoginError] = useState('');
  const [gsiReady, setGsiReady] = useState(false);
  const [tab, setTab] = useState(initialTab);

  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    if (TABS.some((t) => t.value === fromHash)) setTab(fromHash);
  }, []);

  const selectTab = (value) => {
    setTab(value);
    window.history.replaceState(null, '', `#${value}`);
  };

  const handleCredential = async (response) => {
    setLoginError('');
    try {
      const res = await fetch(ELISA_ADMIN_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: response.credential, action: 'dashboard' }),
      });
      if (res.status === 401) throw new Error(`Accès réservé à ${ADMIN_EMAIL}.`);
      if (!res.ok) throw new Error('Connexion impossible, réessaie dans un instant.');
      setIdToken(response.credential);
    } catch (err) {
      setLoginError(err.message);
    }
  };

  useEffect(() => {
    if (idToken) return;
    const script = document.createElement('script');
    script.src = GSI_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => setGsiReady(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [idToken]);

  useEffect(() => {
    if (!gsiReady || idToken || !window.google || !buttonRef.current) return;
    window.google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleCredential });
    window.google.accounts.id.renderButton(buttonRef.current, {
      theme: 'filled_blue',
      size: 'large',
      text: 'signin_with',
      shape: 'pill',
    });
  }, [gsiReady, idToken]);

  // Jeton Google expiré (1 h) : retour à l'écran de connexion
  const onUnauthorized = () => setIdToken('');

  if (!idToken) {
    return (
      <div style={{ minHeight: '100vh', background: '#F6F3EC', color: '#1C2B27', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', borderRadius: '16px', padding: '3rem 1.5rem', width: '100%', maxWidth: '380px', textAlign: 'center' }}>
          <ShieldCheck size={28} color="#8A6D3B" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Espace admin</h1>
          <p style={{ color: '#4A534F', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Réservé à {ADMIN_EMAIL}</p>
          <div ref={buttonRef} style={{ display: 'flex', justifyContent: 'center', minHeight: '44px' }} />
          {!gsiReady && <p style={{ color: '#6B716C', fontSize: '0.8rem', marginTop: '1rem' }}>Chargement...</p>}
          {loginError && <p style={{ color: '#A63D2F', fontSize: '0.85rem', marginTop: '1rem' }}>{loginError}</p>}
        </div>
      </div>
    );
  }

  return (
    // data-no-enhance : pas d'animations d'apparition du site sur un outil de travail
    <div data-no-enhance style={{ minHeight: '100vh', background: '#F6F3EC', color: '#1C2B27', padding: '100px 16px 80px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1.25rem' }}>Espace admin</h1>
        <div role="tablist" style={{ display: 'flex', gap: '0.25rem', borderBottom: '1px solid #D8D1C2', marginBottom: '2rem' }}>
          {TABS.map(({ value, label, icon }) => (
            <button
              key={value}
              role="tab"
              aria-selected={tab === value}
              onClick={() => selectTab(value)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.7rem 1rem', marginBottom: '-1px', border: 'none', background: 'transparent', cursor: 'pointer',
                borderBottom: tab === value ? '2px solid #8A6D3B' : '2px solid transparent',
                color: tab === value ? '#1C2B27' : '#6B716C', fontWeight: 700, fontSize: '0.95rem',
              }}
            >
              {icon} {label}
            </button>
          ))}
        </div>
        {tab === 'elisa' && <ElisaAdmin idToken={idToken} onUnauthorized={onUnauthorized} />}
        {tab === 'temoignages' && <TemoignageAdmin idToken={idToken} onUnauthorized={onUnauthorized} />}
        {tab === 'contenus' && <ContentAdmin idToken={idToken} onUnauthorized={onUnauthorized} />}
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default AdminHub;
