'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Loader2, CalendarClock, Upload, FileText, Check, Archive, RotateCcw, ExternalLink, Save } from 'lucide-react';
import { CONTENT_ADMIN_FUNCTION_URL, CONTENT_STATUSES, LINKEDIN_FOLD, LINKEDIN_MAX } from '@/src/lib/contentConfig';
import ContentIdeas from '@/src/views/ContentIdeas';

// Onglet « Contenus » de l'espace admin : les posts LinkedIn préparés par Claude,
// à relire, illustrer, valider et programmer. La publication part toute seule à l'heure
// prévue (fonction content-publisher, toutes les 5 minutes).

async function callContent(idToken, action, params = {}) {
  const response = await fetch(CONTENT_ADMIN_FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, action, ...params }),
  });
  const data = await response.json();
  if (!response.ok) {
    const error = new Error(data.error || 'Erreur inconnue');
    error.status = response.status;
    throw error;
  }
  return data;
}

const FILTERS = [
  { value: 'actifs', label: 'À traiter', statuses: ['brouillon', 'a_valider', 'valide', 'echec'] },
  { value: 'programme', label: 'Programmés', statuses: ['programme', 'publication'] },
  { value: 'publie', label: 'Publiés', statuses: ['publie'] },
  { value: 'tous', label: 'Tous', statuses: null },
];

const card = { background: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '14px', padding: '1.25rem' };
const label = { display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#4A534F', marginBottom: '0.4rem' };
const input = { width: '100%', padding: '0.7rem 0.8rem', borderRadius: '8px', border: '1px solid #D8D1C2', background: '#F6F3EC', color: '#1C2B27', fontSize: '0.9rem', fontFamily: 'inherit', lineHeight: 1.5 };
const primaryButton = { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1rem', borderRadius: '8px', border: 'none', background: '#1C2B27', color: '#F6F3EC', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 };
const ghostButton = { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 0.9rem', borderRadius: '8px', border: '1px solid #D8D1C2', background: 'transparent', color: '#4A534F', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 };
const badge = (color) => ({ display: 'inline-block', padding: '0.15rem 0.55rem', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 700, color, border: `1px solid ${color}`, whiteSpace: 'nowrap' });

const formatWhen = (iso) => (iso ? new Date(iso).toLocaleString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : 'Pas de date');
// <input type="datetime-local"> travaille en heure locale, la base en UTC
const toLocalInput = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
};
const StatusBadge = ({ status }) => {
  const s = CONTENT_STATUSES[status] || { label: status, color: '#6B716C' };
  return <span style={badge(s.color)}>{s.label}</span>;
};

const Editor = ({ idToken, id, onUnauthorized, onChanged }) => {
  const [data, setData] = useState(null);
  const [form, setForm] = useState({ body: '', first_comment: '', publish_at: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const fileRef = useRef(null);

  const apply = (result) => {
    setData(result);
    setForm({ body: result.item.body || '', first_comment: result.item.first_comment || '', publish_at: toLocalInput(result.item.publish_at) });
  };

  const run = async (fn, okMessage) => {
    setBusy(true); setError(''); setNotice('');
    try {
      const result = await fn();
      if (result?.item) apply(result);
      if (okMessage) setNotice(okMessage);
      onChanged();
    } catch (err) {
      if (err.status === 401) onUnauthorized();
      else setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  // L'éditeur est monté avec key={id} : un nouveau contenu repart d'un état vide
  useEffect(() => {
    callContent(idToken, 'get', { id }).then(apply).catch((err) => {
      if (err.status === 401) onUnauthorized();
      else setError(err.message);
    });
  }, [idToken, id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!data) return <div style={{ ...card, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Chargement…</div>;

  const { item, assets } = data;
  const locked = ['publication', 'publie'].includes(item.status);
  const selected = assets.find((a) => a.selected);
  const others = assets.filter((a) => !a.selected && a.status === 'pret');
  const patch = () => ({
    body: form.body,
    first_comment: form.first_comment,
    publish_at: form.publish_at ? new Date(form.publish_at).toISOString() : null,
  });

  const save = () => run(() => callContent(idToken, 'update', { id, patch: patch() }), 'Enregistré.');
  const setStatus = (status, message) => run(() => callContent(idToken, 'update', { id, patch: { ...patch(), status } }), message);

  const replaceVisual = async (file) => {
    if (!file) return;
    await run(async () => {
      const up = await callContent(idToken, 'upload_url', { id, filename: file.name, contentType: file.type });
      const put = await fetch(up.signed_url, { method: 'PUT', headers: { 'Content-Type': file.type }, body: file });
      if (!put.ok) throw new Error('L’envoi du fichier a échoué.');
      return callContent(idToken, 'register_asset', { assetId: up.asset_id });
    }, 'Nouveau visuel en place. L’ancien reste disponible plus bas.');
    if (fileRef.current) fileRef.current.value = '';
  };

  const images = (selected?.urls || []).filter((u) => /\.(png|jpe?g|webp)$/i.test(u.file));
  const pdf = (selected?.urls || []).find((u) => /\.pdf$/i.test(u.file));
  const video = (selected?.urls || []).find((u) => /\.mp4$/i.test(u.file));
  const fold = form.body.slice(0, LINKEDIN_FOLD);

  return (
    <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: '1.4rem', opacity: busy ? 0.7 : 1 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
        <StatusBadge status={item.status} />
        <span style={{ color: '#6B716C', fontSize: '0.82rem' }}>LinkedIn, profil de Jérôme</span>
        {item.fingerprint?.structure && <span style={{ color: '#6B716C', fontSize: '0.82rem' }}>· {item.fingerprint.angle?.replace('ang:', '')} · {item.fingerprint.structure.replace('str:', '')}</span>}
        {item.external_url && <a href={item.external_url} target="_blank" rel="noreferrer" style={{ ...ghostButton, padding: '0.3rem 0.6rem' }}><ExternalLink size={14} /> Voir le post</a>}
      </div>
      {item.error && <p style={{ color: '#A63D2F', fontSize: '0.85rem' }}>Dernière erreur : {item.error}</p>}

      <div>
        <label style={label} htmlFor="post-body">Texte du post</label>
        <textarea id="post-body" rows={16} style={input} value={form.body} disabled={locked}
          onChange={(e) => setForm({ ...form, body: e.target.value })} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: form.body.length > LINKEDIN_MAX ? '#A63D2F' : '#6B716C', marginTop: '0.3rem' }}>
          <span>Avant le « …plus » sur mobile : « {fold.split('\n').join(' / ')}{form.body.length > LINKEDIN_FOLD ? '…' : ''} »</span>
          <span>{form.body.length} / {LINKEDIN_MAX}</span>
        </div>
      </div>

      <div>
        <label style={label} htmlFor="post-comment">Premier commentaire (le lien va ici, jamais dans le post)</label>
        <textarea id="post-comment" rows={2} style={input} value={form.first_comment} disabled={locked}
          onChange={(e) => setForm({ ...form, first_comment: e.target.value })} />
      </div>

      <div>
        <span style={label}>Visuel</span>
        {images.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '0.5rem', marginBottom: '0.6rem' }}>
            {images.map((u) => (
              <a key={u.file} href={u.url} target="_blank" rel="noreferrer">
                <img src={u.url} alt={u.file} style={{ width: '100%', borderRadius: '8px', border: '1px solid #D8D1C2', display: 'block' }} />
              </a>
            ))}
          </div>
        )}
        {video && <video src={video.url} controls style={{ width: '100%', maxWidth: '420px', borderRadius: '8px', marginBottom: '0.6rem' }} />}
        {!selected && <p style={{ color: '#6B716C', fontSize: '0.85rem', marginBottom: '0.6rem' }}>Pas de visuel : le post partira en texte seul.</p>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {pdf && <a href={pdf.url} target="_blank" rel="noreferrer" style={ghostButton}><FileText size={15} /> Ouvrir le PDF</a>}
          {!locked && (
            <label style={{ ...ghostButton, cursor: 'pointer' }}>
              <Upload size={15} /> Remplacer le visuel
              <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,application/pdf,video/mp4" style={{ display: 'none' }}
                onChange={(e) => replaceVisual(e.target.files?.[0])} />
            </label>
          )}
        </div>
        {others.length > 0 && !locked && (
          <details style={{ marginTop: '0.7rem' }}>
            <summary style={{ cursor: 'pointer', fontSize: '0.82rem', color: '#4A534F' }}>Visuels précédents ({others.length})</summary>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.6rem' }}>
              {others.map((a) => {
                const thumb = (a.urls || []).find((u) => /\.(png|jpe?g|webp)$/i.test(u.file));
                return (
                  <button key={a.id} onClick={() => run(() => callContent(idToken, 'select_asset', { assetId: a.id }), 'Visuel rétabli.')} style={{ ...ghostButton, flexDirection: 'column', padding: '0.4rem' }}>
                    {thumb ? <img src={thumb.url} alt="" style={{ width: '90px', borderRadius: '6px' }} /> : <FileText size={20} />}
                    <span style={{ fontSize: '0.72rem' }}>Utiliser celui-ci</span>
                  </button>
                );
              })}
            </div>
          </details>
        )}
      </div>

      <div>
        <label style={label} htmlFor="post-when">Date et heure de publication (heure de Paris)</label>
        <input id="post-when" type="datetime-local" style={{ ...input, maxWidth: '260px' }} value={form.publish_at} disabled={locked}
          onChange={(e) => setForm({ ...form, publish_at: e.target.value })} />
      </div>

      {error && <p style={{ color: '#A63D2F', fontSize: '0.85rem' }}>{error}</p>}
      {notice && <p style={{ color: '#3F7A5E', fontSize: '0.85rem' }}>{notice}</p>}

      {!locked && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <button style={ghostButton} disabled={busy} onClick={save}><Save size={15} /> Enregistrer</button>
          {item.status !== 'valide' && item.status !== 'programme' && (
            <button style={ghostButton} disabled={busy} onClick={() => setStatus('valide', 'Validé. Il reste à choisir une date pour le programmer.')}><Check size={15} /> Valider</button>
          )}
          {item.status !== 'programme' ? (
            <button style={primaryButton} disabled={busy || !form.publish_at} onClick={() => setStatus('programme', 'Programmé. Il partira tout seul à l’heure prévue.')}>
              <CalendarClock size={15} /> Programmer
            </button>
          ) : (
            <button style={ghostButton} disabled={busy} onClick={() => setStatus('valide', 'Déprogrammé : le post reste validé.')}><RotateCcw size={15} /> Déprogrammer</button>
          )}
          {item.status !== 'brouillon' && item.status !== 'programme' && (
            <button style={ghostButton} disabled={busy} onClick={() => setStatus('brouillon', 'Repassé en brouillon.')}><RotateCcw size={15} /> Brouillon</button>
          )}
          <button style={{ ...ghostButton, marginLeft: 'auto' }} disabled={busy} onClick={() => setStatus('archive', 'Archivé.')}><Archive size={15} /> Archiver</button>
        </div>
      )}
    </div>
  );
};

const PostsView = ({ idToken, onUnauthorized }) => {
  const [items, setItems] = useState(null);
  const [filter, setFilter] = useState('actifs');
  const [openId, setOpenId] = useState(null);
  const [error, setError] = useState('');

  const load = () => callContent(idToken, 'list')
    .then((data) => { setItems(data.items); setError(''); })
    .catch((err) => {
      if (err.status === 401) onUnauthorized();
      else setError(err.message);
    });

  useEffect(() => { load(); }, [idToken]); // eslint-disable-line react-hooks/exhaustive-deps

  const current = FILTERS.find((f) => f.value === filter);
  const visible = (items || []).filter((i) => !current.statuses || current.statuses.includes(i.status));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <p style={{ color: '#4A534F', fontSize: '0.85rem' }}>
        Les posts préparés par Claude. Relis, ajuste le texte ou le visuel, choisis une date, puis programme : la publication part toute seule.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {FILTERS.map((f) => (
          <button key={f.value} onClick={() => setFilter(f.value)}
            style={{ ...ghostButton, padding: '0.35rem 0.8rem', background: filter === f.value ? '#1C2B27' : 'transparent', color: filter === f.value ? '#F6F3EC' : '#4A534F' }}>
            {f.label} {items && <span style={{ opacity: 0.7 }}>({(items || []).filter((i) => !f.statuses || f.statuses.includes(i.status)).length})</span>}
          </button>
        ))}
      </div>

      {error && <p style={{ color: '#A63D2F', fontSize: '0.85rem' }}>{error}</p>}
      {!items && !error && <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4A534F' }}><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Chargement…</p>}
      {items && visible.length === 0 && <p style={{ color: '#6B716C', fontSize: '0.9rem' }}>Rien ici pour l’instant.</p>}

      {visible.map((i) => (
        <div key={i.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button onClick={() => setOpenId(openId === i.id ? null : i.id)}
            style={{ ...card, display: 'flex', gap: '1rem', alignItems: 'center', textAlign: 'left', cursor: 'pointer', width: '100%', borderColor: openId === i.id ? '#8A6D3B' : '#D8D1C2' }}>
            {i.thumb
              ? <img src={i.thumb} alt="" style={{ width: '64px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #D8D1C2', flexShrink: 0 }} />
              : <div style={{ width: '64px', height: '80px', borderRadius: '8px', background: '#F6F3EC', border: '1px solid #D8D1C2', flexShrink: 0 }} />}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.35rem' }}>
                <StatusBadge status={i.status} />
                <span style={{ color: '#6B716C', fontSize: '0.8rem' }}>{formatWhen(i.publish_at || i.published_at)}</span>
              </div>
              <p style={{ fontWeight: 600, lineHeight: 1.4, color: '#1C2B27', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{i.title || 'Sans titre'}</p>
            </div>
          </button>
          {openId === i.id && <Editor key={i.id} idToken={idToken} id={i.id} onUnauthorized={onUnauthorized} onChanged={load} />}
        </div>
      ))}
    </div>
  );
};

const VIEWS = [
  { value: 'posts', label: 'Posts' },
  { value: 'idees', label: 'Idées' },
];

// Deux vues : les posts produits (à relire, programmer) et la réserve d'idées (file de production)
const ContentAdmin = ({ idToken, onUnauthorized }) => {
  const [view, setView] = useState('posts');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Contenus LinkedIn</h2>
        <div role="tablist" style={{ display: 'inline-flex', border: '1px solid #D8D1C2', borderRadius: '10px', overflow: 'hidden' }}>
          {VIEWS.map((v) => (
            <button key={v.value} role="tab" aria-selected={view === v.value} onClick={() => setView(v.value)}
              style={{ padding: '0.45rem 1rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', background: view === v.value ? '#1C2B27' : '#FFFFFF', color: view === v.value ? '#F6F3EC' : '#4A534F' }}>
              {v.label}
            </button>
          ))}
        </div>
      </div>
      {view === 'posts'
        ? <PostsView idToken={idToken} onUnauthorized={onUnauthorized} />
        : <ContentIdeas idToken={idToken} onUnauthorized={onUnauthorized} />}
    </div>
  );
};

export default ContentAdmin;
