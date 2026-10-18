'use client';
import React, { useEffect, useState } from 'react';
import { Loader2, Lightbulb, Zap, CalendarPlus, Archive, BookmarkCheck, Search } from 'lucide-react';
import { CONTENT_ADMIN_FUNCTION_URL } from '@/src/lib/contentConfig';

// Vue « Idées » de l'onglet Contenus : la réserve de sujets (import Notion, sujets propriétaires,
// inspirations notées ici) et la file de production. « À produire » : la production programmée
// du lundi s'en charge. « Produire aujourd'hui » : la production express de midi ou du soir.

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

const STATUS = {
  a_produire: { label: 'À produire', color: '#1F5F8B' },
  en_production: { label: 'En production', color: '#1F5F8B' },
  retenue: { label: 'Retenue', color: '#3F7A5E' },
  idee: { label: 'À trancher', color: '#8A6D3B' },
  utilisee: { label: 'Déjà utilisée', color: '#6B716C' },
  archivee: { label: 'Archivée', color: '#6B716C' },
};
const FILTERS = [
  { value: 'file', label: 'File de production', statuses: ['a_produire', 'en_production'] },
  { value: 'retenue', label: 'Retenues', statuses: ['retenue'] },
  { value: 'idee', label: 'À trancher', statuses: ['idee'] },
  { value: 'utilisee', label: 'Utilisées', statuses: ['utilisee'] },
  { value: 'archivee', label: 'Archivées', statuses: ['archivee'] },
  { value: 'toutes', label: 'Toutes', statuses: null },
];
const PERSONAS = [
  { value: '', label: 'Persona : à choisir' },
  { value: 'sales_manager', label: 'Sales manager' },
  { value: 'dg', label: 'DG' },
  { value: 'marketing_manager', label: 'Marketing manager' },
  { value: 'autre', label: 'Autre' },
];
const PERSONA_LABEL = Object.fromEntries(PERSONAS.filter((p) => p.value).map((p) => [p.value, p.label]));

const card = { background: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '14px', padding: '1.1rem 1.25rem' };
const input = { width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', border: '1px solid #D8D1C2', background: '#F6F3EC', color: '#1C2B27', fontSize: '0.9rem', fontFamily: 'inherit', lineHeight: 1.5 };
const label = { display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#4A534F', marginBottom: '0.35rem' };
const primaryButton = { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1rem', borderRadius: '8px', border: 'none', background: '#1C2B27', color: '#F6F3EC', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 };
const ghostButton = { display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.8rem', borderRadius: '8px', border: '1px solid #D8D1C2', background: 'transparent', color: '#4A534F', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 };
const badge = (color) => ({ display: 'inline-block', padding: '0.12rem 0.5rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700, color, border: `1px solid ${color}`, whiteSpace: 'nowrap' });

const emptyForm = { title: '', notes: '', source_url: '', persona: '', production_note: '' };

const NewIdea = ({ busy, onCreate }) => {
  const [form, setForm] = useState(emptyForm);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = async (produce) => {
    if (await onCreate({ ...form, produce })) setForm(emptyForm);
  };
  return (
    <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Lightbulb size={18} color="#8A6D3B" />
        <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Une idée, une inspiration ?</h3>
      </div>
      <div>
        <label style={label} htmlFor="idea-title">L’idée en une phrase</label>
        <input id="idea-title" style={input} value={form.title} onChange={set('title')} placeholder="Ex : à 500 comptes par semaine, personne ne prépare ses appels" />
      </div>
      <div>
        <label style={label} htmlFor="idea-notes">Ce que tu veux dire, ce qui t’a inspiré (texte collé, anecdote, chiffre…)</label>
        <textarea id="idea-notes" rows={4} style={input} value={form.notes} onChange={set('notes')} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem' }}>
        <div>
          <label style={label} htmlFor="idea-link">Lien (article, post…)</label>
          <input id="idea-link" style={input} value={form.source_url} onChange={set('source_url')} placeholder="https://…" />
        </div>
        <div>
          <label style={label} htmlFor="idea-persona">Pour qui</label>
          <select id="idea-persona" style={input} value={form.persona} onChange={set('persona')}>
            {PERSONAS.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label style={label} htmlFor="idea-note">Consigne pour la production (facultatif)</label>
        <input id="idea-note" style={input} value={form.production_note} onChange={set('production_note')} placeholder="Ex : raconter notre erreur, format carrousel, mettre une capture de Repliik" />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <button style={primaryButton} disabled={busy || !form.title.trim()} onClick={() => submit('express')}><Zap size={15} /> Produire aujourd’hui</button>
        <button style={{ ...ghostButton, padding: '0.55rem 0.9rem', fontSize: '0.85rem' }} disabled={busy || !form.title.trim()} onClick={() => submit('normale')}><CalendarPlus size={15} /> Produire lundi</button>
        <button style={{ ...ghostButton, padding: '0.55rem 0.9rem', fontSize: '0.85rem' }} disabled={busy || !form.title.trim()} onClick={() => submit(null)}><BookmarkCheck size={15} /> Garder pour plus tard</button>
      </div>
      <p style={{ color: '#6B716C', fontSize: '0.78rem', lineHeight: 1.5 }}>
        Pour la travailler avec Claude, étape par étape : dans Claude, dis « on travaille l’idée » suivie de son titre.
      </p>
    </div>
  );
};

const IdeaRow = ({ idea, busy, onPatch }) => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState(idea.production_note || '');
  const s = STATUS[idea.status] || { label: idea.status, color: '#6B716C' };
  const queued = idea.status === 'a_produire';
  const locked = idea.status === 'en_production';
  return (
    <div style={{ ...card, opacity: busy ? 0.6 : 1, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
        <span style={badge(s.color)}>{s.label}</span>
        {queued && idea.priority === 'express' && <span style={badge('#A63D2F')}>Aujourd’hui</span>}
        {idea.theme && <span style={{ color: '#6B716C', fontSize: '0.75rem' }}>{idea.theme}</span>}
        {idea.persona && <span style={{ color: '#6B716C', fontSize: '0.75rem' }}>· {PERSONA_LABEL[idea.persona] || idea.persona}</span>}
        {idea.items.length > 0 && <span style={{ color: '#3F7A5E', fontSize: '0.75rem', fontWeight: 600 }}>· {idea.items.length} post{idea.items.length > 1 ? 's' : ''} produit{idea.items.length > 1 ? 's' : ''}</span>}
      </div>
      <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem', color: '#1C2B27', lineHeight: 1.4 }}>
        {idea.title}
      </button>
      {idea.triage_note && <p style={{ color: '#6B716C', fontSize: '0.8rem', lineHeight: 1.45 }}>{idea.triage_note}</p>}
      {open && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.2rem' }}>
          {idea.notes && <p style={{ fontSize: '0.85rem', lineHeight: 1.5, whiteSpace: 'pre-wrap', color: '#4A534F' }}>{idea.notes}</p>}
          {idea.source_url && <a href={idea.source_url} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: '#1F5F8B' }}>{idea.source_url}</a>}
          {!locked && (
            <div>
              <label style={label} htmlFor={`note-${idea.id}`}>Consigne pour la production</label>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <input id={`note-${idea.id}`} style={input} value={note} onChange={(e) => setNote(e.target.value)} />
                <button style={ghostButton} disabled={busy || note === (idea.production_note || '')} onClick={() => onPatch(idea.id, { production_note: note })}>Enregistrer</button>
              </div>
            </div>
          )}
        </div>
      )}
      {!locked && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {!(queued && idea.priority === 'express') && (
            <button style={ghostButton} disabled={busy} onClick={() => onPatch(idea.id, { status: 'a_produire', priority: 'express' })}><Zap size={14} /> Aujourd’hui</button>
          )}
          {!(queued && idea.priority === 'normale') && (
            <button style={ghostButton} disabled={busy} onClick={() => onPatch(idea.id, { status: 'a_produire', priority: 'normale' })}><CalendarPlus size={14} /> Lundi</button>
          )}
          {idea.status !== 'retenue' && (
            <button style={ghostButton} disabled={busy} onClick={() => onPatch(idea.id, { status: 'retenue', priority: 'normale' })}><BookmarkCheck size={14} /> {queued ? 'Retirer de la file' : 'Retenir'}</button>
          )}
          {idea.status !== 'archivee' && (
            <button style={{ ...ghostButton, marginLeft: 'auto' }} disabled={busy} onClick={() => onPatch(idea.id, { status: 'archivee' })}><Archive size={14} /> Archiver</button>
          )}
        </div>
      )}
    </div>
  );
};

const ContentIdeas = ({ idToken, onUnauthorized }) => {
  const [ideas, setIdeas] = useState(null);
  const [filter, setFilter] = useState('file');
  const [query, setQuery] = useState('');
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState('');

  const handleError = (err) => {
    if (err.status === 401) onUnauthorized();
    else setError(err.message);
  };

  useEffect(() => {
    callContent(idToken, 'ideas_list').then((d) => setIdeas(d.ideas)).catch(handleError);
  }, [idToken]); // eslint-disable-line react-hooks/exhaustive-deps

  const create = async (idea) => {
    setBusyId('new'); setError('');
    try {
      const d = await callContent(idToken, 'idea_create', { idea });
      setIdeas(d.ideas);
      setFilter(idea.produce ? 'file' : 'retenue');
      return true;
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setBusyId(null);
    }
  };

  const patch = async (id, values) => {
    setBusyId(id); setError('');
    try {
      const d = await callContent(idToken, 'idea_update', { id, patch: values });
      setIdeas(d.ideas);
    } catch (err) {
      handleError(err);
    } finally {
      setBusyId(null);
    }
  };

  const current = FILTERS.find((f) => f.value === filter);
  const q = query.trim().toLowerCase();
  const visible = (ideas || [])
    .filter((i) => !current.statuses || current.statuses.includes(i.status))
    .filter((i) => !q || `${i.title} ${i.theme || ''} ${i.notes || ''}`.toLowerCase().includes(q))
    .sort((a, b) => (a.priority === 'express' ? -1 : 0) - (b.priority === 'express' ? -1 : 0));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      <NewIdea busy={busyId === 'new'} onCreate={create} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
        {FILTERS.map((f) => (
          <button key={f.value} onClick={() => setFilter(f.value)}
            style={{ ...ghostButton, background: filter === f.value ? '#1C2B27' : 'transparent', color: filter === f.value ? '#F6F3EC' : '#4A534F' }}>
            {f.label} {ideas && <span style={{ opacity: 0.7 }}>({ideas.filter((i) => !f.statuses || f.statuses.includes(i.status)).length})</span>}
          </button>
        ))}
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginLeft: 'auto', ...input, width: 'auto', padding: '0.35rem 0.6rem' }}>
          <Search size={14} color="#6B716C" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Chercher" style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', width: '140px' }} />
        </label>
      </div>

      {filter === 'file' && (
        <p style={{ color: '#4A534F', fontSize: '0.82rem', lineHeight: 1.5 }}>
          « Aujourd’hui » : produit à 12 h 30 ou 18 h 30 (jours ouvrés). « Lundi » : produit le lundi à 7 h. Les posts arrivent dans « Posts », à valider.
        </p>
      )}
      {error && <p style={{ color: '#A63D2F', fontSize: '0.85rem' }}>{error}</p>}
      {!ideas && !error && <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4A534F' }}><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Chargement…</p>}
      {ideas && visible.length === 0 && <p style={{ color: '#6B716C', fontSize: '0.9rem' }}>Aucune idée ici.</p>}
      {visible.map((idea) => <IdeaRow key={idea.id} idea={idea} busy={busyId === idea.id} onPatch={patch} />)}
    </div>
  );
};

export default ContentIdeas;
