'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Trash2, Check, X, Loader2 } from 'lucide-react';
import { TESTIMONIALS_ADMIN_FUNCTION_URL, TESTIMONIAL_PAGES, GOOGLE_CLIENT_ID, ADMIN_EMAIL } from '@/src/lib/testimonialsConfig';

const STATUS_TABS = [
  { value: 'pending', label: 'En attente' },
  { value: 'approved', label: 'Publiés' },
  { value: 'rejected', label: 'Rejetés' },
];

const GSI_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

async function callFunction(idToken, action, params = {}) {
  const response = await fetch(TESTIMONIALS_ADMIN_FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, action, ...params }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Erreur inconnue');
  return data;
}

const TemoignageAdmin = () => {
  const buttonRef = useRef(null);
  const [idToken, setIdToken] = useState('');
  const [loginError, setLoginError] = useState('');
  const [gsiReady, setGsiReady] = useState(false);
  const [rows, setRows] = useState([]);
  const [tab, setTab] = useState('pending');
  const [busyId, setBusyId] = useState(null);

  const handleCredential = async (response) => {
    setLoginError('');
    try {
      const data = await callFunction(response.credential, 'list');
      setRows(data.rows || []);
      setIdToken(response.credential);
    } catch (err) {
      setLoginError(
        err.message === 'unauthorized'
          ? `Accès réservé à ${ADMIN_EMAIL}.`
          : err.message
      );
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
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCredential,
    });
    window.google.accounts.id.renderButton(buttonRef.current, {
      theme: 'filled_blue',
      size: 'large',
      text: 'signin_with',
      shape: 'pill',
    });
  }, [gsiReady, idToken]);

  const refresh = async () => {
    const data = await callFunction(idToken, 'list');
    setRows(data.rows || []);
  };

  const updateRow = async (id, patch) => {
    setBusyId(id);
    try {
      await callFunction(idToken, 'update', { id, ...patch });
      await refresh();
    } catch (err) {
      if (err.message === 'unauthorized') setIdToken('');
      else alert(err.message);
    } finally {
      setBusyId(null);
    }
  };

  const deleteRow = async (id) => {
    if (!confirm('Supprimer définitivement ce témoignage ?')) return;
    setBusyId(id);
    try {
      await callFunction(idToken, 'delete', { id });
      await refresh();
    } catch (err) {
      if (err.message === 'unauthorized') setIdToken('');
      else alert(err.message);
    } finally {
      setBusyId(null);
    }
  };

  if (!idToken) {
    return (
      <div style={{ minHeight: '100vh', background: '#050510', color: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '16px', padding: '3rem', width: '100%', maxWidth: '380px', textAlign: 'center' }}>
          <ShieldCheck size={28} color="#44CCFF" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Espace admin</h1>
          <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Réservé à {ADMIN_EMAIL}</p>
          <div ref={buttonRef} style={{ display: 'flex', justifyContent: 'center', minHeight: '44px' }} />
          {!gsiReady && <p style={{ color: '#6B7280', fontSize: '0.8rem', marginTop: '1rem' }}>Chargement...</p>}
          {loginError && <p style={{ color: '#F87171', fontSize: '0.85rem', marginTop: '1rem' }}>{loginError}</p>}
        </div>
      </div>
    );
  }

  const filteredRows = rows.filter((r) => r.status === tab);

  return (
    <div style={{ minHeight: '100vh', background: '#050510', color: '#F9FAFB', padding: '100px 24px 80px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '2rem' }}>Témoignages</h1>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
          {STATUS_TABS.map((t) => (
            <button
              key={t.value}
              onClick={() => setTab(t.value)}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '30px',
                border: tab === t.value ? '1px solid #44CCFF' : '1px solid #1A1A3A',
                background: tab === t.value ? 'rgba(68,204,255,0.1)' : 'transparent',
                color: tab === t.value ? '#44CCFF' : '#9CA3AF',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              {t.label} ({rows.filter((r) => r.status === t.value).length})
            </button>
          ))}
        </div>

        {filteredRows.length === 0 && <p style={{ color: '#9CA3AF' }}>Aucun témoignage ici.</p>}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredRows.map((row) => (
            <div key={row.id} style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '16px', padding: '1.2rem', opacity: busyId === row.id ? 0.5 : 1 }}>
              {row.signed_url ? (
                <video src={row.signed_url} controls style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem', background: '#000' }} />
              ) : (
                <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B7280' }}>Vidéo indisponible</div>
              )}

              <p style={{ fontSize: '0.75rem', color: '#6B7280', marginBottom: '0.75rem' }}>
                {new Date(row.created_at).toLocaleString('fr-FR')}
                {row.email && <> · <a href={`mailto:${row.email}`} style={{ color: '#44CCFF' }}>{row.email}</a></>}
              </p>

              <input
                type="text"
                defaultValue={row.label || ''}
                placeholder="Nom / titre à afficher"
                onBlur={(e) => e.target.value !== (row.label || '') && updateRow(row.id, { label: e.target.value })}
                style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #1A1A3A', background: '#050510', color: '#fff', marginBottom: '0.75rem', fontSize: '0.9rem' }}
              />

              <select
                value={row.assigned_page || ''}
                onChange={(e) => updateRow(row.id, { assigned_page: e.target.value || null })}
                style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #1A1A3A', background: '#050510', color: '#fff', marginBottom: '1rem', fontSize: '0.9rem' }}
              >
                <option value="">Aucune page assignée</option>
                {TESTIMONIAL_PAGES.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {row.status !== 'approved' && (
                  <button onClick={() => updateRow(row.id, { status: 'approved' })} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.6rem', borderRadius: '6px', border: 'none', background: '#166534', color: '#fff', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
                    <Check size={14} /> Publier
                  </button>
                )}
                {row.status !== 'rejected' && (
                  <button onClick={() => updateRow(row.id, { status: 'rejected' })} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.6rem', borderRadius: '6px', border: 'none', background: '#7C2D12', color: '#fff', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
                    <X size={14} /> Rejeter
                  </button>
                )}
                <button onClick={() => deleteRow(row.id)} style={{ padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #1A1A3A', background: 'transparent', color: '#F87171', cursor: 'pointer' }}>
                  <Trash2 size={14} />
                </button>
              </div>

              {busyId === row.id && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <Loader2 size={16} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default TemoignageAdmin;
