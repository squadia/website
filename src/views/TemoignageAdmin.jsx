'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Trash2, Check, X, Loader2, Scissors, Send, RefreshCw } from 'lucide-react';
import TestimonialCutEditor from '@/src/components/ui/TestimonialCutEditor';
import { useSkipCuts } from '@/src/lib/videoCuts';
import { TESTIMONIALS_ADMIN_FUNCTION_URL, TESTIMONIAL_PAGES, GOOGLE_CLIENT_ID, ADMIN_EMAIL, AVATAR_CTA_PAGES, DEFAULT_AVATAR_CTA } from '@/src/lib/testimonialsConfig';

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

const AVATAR_BADGES = {
  queued: { label: 'Vidéo avatar : en file', color: '#FACC15' },
  generating: { label: 'Vidéo avatar : génération HeyGen...', color: '#FACC15' },
  sent: { label: 'Vidéo avatar envoyée', color: '#4ADE80' },
  error: { label: 'Vidéo avatar : erreur', color: '#F87171' },
};

const avatarLocked = (row) => ['sent', 'queued', 'generating'].includes(row.avatar_status);

const AdminVideo = ({ row }) => {
  const videoRef = useRef(null);
  useSkipCuts(videoRef, row.cuts);
  return <video ref={videoRef} src={row.signed_url} controls style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem', background: '#000' }} />;
};

const TemoignageAdmin = () => {
  const buttonRef = useRef(null);
  const [idToken, setIdToken] = useState('');
  const [loginError, setLoginError] = useState('');
  const [gsiReady, setGsiReady] = useState(false);
  const [rows, setRows] = useState([]);
  const [tab, setTab] = useState('pending');
  const [busyId, setBusyId] = useState(null);
  const [editingRow, setEditingRow] = useState(null);
  // Mot perso en cours de saisie : envoyé avec « Publier » pour ne pas dépendre de l'ordre blur/clic.
  const [noteDrafts, setNoteDrafts] = useState({});

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
      const result = await callFunction(idToken, 'update', { id, ...patch });
      if (result.avatar && !result.avatar.ok) alert(`Vidéo avatar non lancée : ${result.avatar.error}`);
      await refresh();
    } catch (err) {
      if (err.message === 'unauthorized') setIdToken('');
      else alert(err.message);
    } finally {
      setBusyId(null);
    }
  };

  const saveCuts = async (cuts) => {
    try {
      await callFunction(idToken, 'update', { id: editingRow.id, cuts });
      await refresh();
      setEditingRow(null);
    } catch (err) {
      if (err.message === 'unauthorized') setIdToken('');
      else alert(err.message);
    }
  };

  const sendAvatar = async (row) => {
    if (!confirm(`Générer la vidéo avatar et l'envoyer par email à ${row.email} ?`)) return;
    setBusyId(row.id);
    try {
      await callFunction(idToken, 'avatar_send', { id: row.id });
      await refresh();
    } catch (err) {
      if (err.message === 'unauthorized') setIdToken('');
      else alert(err.message);
    } finally {
      setBusyId(null);
    }
  };

  // Rafraîchit tant qu'une vidéo avatar est en cours de génération.
  const avatarInProgress = rows.some((r) => r.avatar_status === 'queued' || r.avatar_status === 'generating');
  useEffect(() => {
    if (!idToken || !avatarInProgress) return;
    const timer = setInterval(() => {
      callFunction(idToken, 'list').then((data) => setRows(data.rows || [])).catch(() => {});
    }, 20000);
    return () => clearInterval(timer);
  }, [idToken, avatarInProgress]);

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
                <>
                  <AdminVideo row={row} />
                  <button
                    onClick={() => setEditingRow(row)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.55rem', borderRadius: '6px', border: '1px solid #1A1A3A', background: 'transparent', color: '#44CCFF', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, marginTop: '-0.4rem', marginBottom: '1rem' }}
                  >
                    <Scissors size={14} /> Couper des scènes
                    {row.cuts?.length > 0 && <span style={{ color: '#9CA3AF', fontWeight: 500 }}>({row.cuts.length} coupure{row.cuts.length > 1 ? 's' : ''})</span>}
                  </button>
                </>
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

              <div style={{ border: '1px solid #1A1A3A', borderRadius: '10px', padding: '0.75rem', marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '0.4rem' }}>
                  Mot perso pour l'avatar HeyGen (lu dans la vidéo de remerciement)
                </label>
                <textarea
                  defaultValue={row.avatar_note || ''}
                  placeholder="Ex. : Ton passage sur la prospection LinkedIn m'a vraiment marqué."
                  rows={3}
                  disabled={avatarLocked(row)}
                  onChange={(e) => setNoteDrafts((d) => ({ ...d, [row.id]: e.target.value }))}
                  onBlur={(e) => e.target.value.trim() !== (row.avatar_note || '') && updateRow(row.id, { avatar_note: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #1A1A3A', background: '#050510', color: '#fff', fontSize: '0.85rem', resize: 'vertical', fontFamily: 'inherit' }}
                />
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#9CA3AF', margin: '0.75rem 0 0.4rem' }}>
                  Bouton de la page vidéo : page vers laquelle renvoyer
                </label>
                <select
                  value={row.cta_page || DEFAULT_AVATAR_CTA}
                  disabled={avatarLocked(row)}
                  onChange={(e) => updateRow(row.id, { cta_page: e.target.value })}
                  style={{ width: '100%', padding: '0.55rem 0.8rem', borderRadius: '6px', border: '1px solid #1A1A3A', background: '#050510', color: '#fff', fontSize: '0.85rem' }}
                >
                  {AVATAR_CTA_PAGES.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
                <input
                  type="text"
                  key={`cta-label-${row.id}-${row.cta_page || DEFAULT_AVATAR_CTA}`}
                  defaultValue={row.cta_label || ''}
                  maxLength={60}
                  disabled={avatarLocked(row)}
                  placeholder={`Texte du bouton (par défaut : ${(AVATAR_CTA_PAGES.find((p) => p.value === (row.cta_page || DEFAULT_AVATAR_CTA)) || AVATAR_CTA_PAGES[0]).defaultLabel})`}
                  onBlur={(e) => e.target.value.trim() !== (row.cta_label || '') && updateRow(row.id, { cta_label: e.target.value })}
                  style={{ width: '100%', padding: '0.55rem 0.8rem', borderRadius: '6px', border: '1px solid #1A1A3A', background: '#050510', color: '#fff', fontSize: '0.85rem', marginTop: '0.5rem' }}
                />
                {row.avatar_status && (
                  <p style={{ fontSize: '0.78rem', fontWeight: 600, color: AVATAR_BADGES[row.avatar_status]?.color, marginTop: '0.5rem' }}>
                    {AVATAR_BADGES[row.avatar_status]?.label}
                    {row.avatar_status === 'sent' && row.avatar_sent_at && (
                      <span style={{ color: '#6B7280', fontWeight: 400 }}> le {new Date(row.avatar_sent_at).toLocaleString('fr-FR')}</span>
                    )}
                    {row.avatar_status === 'error' && row.avatar_error && (
                      <span style={{ display: 'block', color: '#9CA3AF', fontWeight: 400 }}>{row.avatar_error}</span>
                    )}
                  </p>
                )}
                {row.avatar_video_url && (
                  <video src={row.avatar_video_url} controls preload="metadata" style={{ width: '100%', borderRadius: '8px', marginTop: '0.5rem', background: '#000' }} />
                )}
                {row.status === 'approved' && row.avatar_note && (!row.avatar_status || row.avatar_status === 'error') && (
                  <button
                    onClick={() => sendAvatar(row)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.55rem', borderRadius: '6px', border: '1px solid #44CCFF', background: 'rgba(68,204,255,0.1)', color: '#44CCFF', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.6rem' }}
                  >
                    {row.avatar_status === 'error' ? <RefreshCw size={14} /> : <Send size={14} />}
                    {row.avatar_status === 'error' ? 'Relancer la vidéo avatar' : 'Envoyer la vidéo avatar'}
                  </button>
                )}
                {row.status !== 'approved' && row.avatar_note && !row.avatar_status && (
                  <p style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '0.5rem' }}>
                    Envoyée automatiquement à {row.email || 'la personne'} lors de la publication.
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {row.status !== 'approved' && (
                  <button
                    onClick={() => {
                      const note = (noteDrafts[row.id] ?? row.avatar_note ?? '').trim();
                      const willSendAvatar = note && !row.avatar_status && row.email;
                      if (willSendAvatar && !confirm(`Publier et envoyer la vidéo avatar à ${row.email} ?`)) return;
                      updateRow(row.id, { status: 'approved', ...(note !== (row.avatar_note || '') && { avatar_note: note }) });
                    }} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.6rem', borderRadius: '6px', border: 'none', background: '#166534', color: '#fff', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
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
      {editingRow && (
        <TestimonialCutEditor row={editingRow} onClose={() => setEditingRow(null)} onSave={saveCuts} />
      )}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default TemoignageAdmin;
