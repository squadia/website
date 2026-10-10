'use client';
import React, { useEffect, useState } from 'react';
import { Loader2, Send, MessageSquareText, CheckCircle2, Clock3, ChevronDown } from 'lucide-react';
import { ELISA_ADMIN_FUNCTION_URL } from '@/src/lib/testimonialsConfig';

// Onglet « Elisa » de l'espace admin : questions de Claude après l'audit
// hebdomadaire, consignes libres, dernières mises à jour et dernier bilan.
// Les réponses sont intégrées par l'automatisation (tous les jours à 9 h),
// qui confirme ensuite ici chaque intégration.

async function callElisa(idToken, action, params = {}) {
  const response = await fetch(ELISA_ADMIN_FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, action, ...params }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Erreur inconnue');
  return data;
}

// Espaces insécables avant : ; ! ? » et après « (le texte vient de la base)
const fr = (t) => (t || '').replace(/ ([:;!?»])/g, '\u00A0$1').replace(/« /g, '«\u00A0');

const formatDate = (iso) => new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });

const CATEGORY_LABELS = { prompt: 'Discours', connaissances: 'Connaissances', outil: 'Outil', site: 'Site' };
const ISSUE_LABELS = { page: 'Page affichée', technique: 'Technique', langage: 'Langage', reponse: 'Réponse', prix: 'Prix' };
const GRAVITY_COLORS = { haute: '#A63D2F', moyenne: '#8A6D3B', basse: '#6B716C' };

const card = { background: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '14px', padding: '1.25rem' };
const sectionTitle = { fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' };
const sectionHint = { color: '#4A534F', fontSize: '0.85rem', marginBottom: '1rem' };
const textarea = { width: '100%', padding: '0.7rem 0.8rem', borderRadius: '8px', border: '1px solid #D8D1C2', background: '#F6F3EC', color: '#1C2B27', fontSize: '0.9rem', resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.5 };
const primaryButton = { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1rem', borderRadius: '8px', border: 'none', background: '#1C2B27', color: '#F6F3EC', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 };
const ghostButton = { padding: '0.55rem 0.9rem', borderRadius: '8px', border: '1px solid #D8D1C2', background: 'transparent', color: '#4A534F', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 };
const badge = (color) => ({ display: 'inline-block', padding: '0.15rem 0.55rem', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 700, color, border: `1px solid ${color}`, whiteSpace: 'nowrap' });

const QuestionCard = ({ q, busy, onAnswer, onDismiss }) => {
  const [draft, setDraft] = useState(q.answer || '');
  const [editing, setEditing] = useState(q.status === 'open');
  const isValidation = q.kind === 'validation';

  return (
    <div style={{ ...card, opacity: busy ? 0.6 : 1 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.6rem' }}>
        <span style={{ fontWeight: 800, color: '#8A6D3B' }}>Q{q.ref}</span>
        <span style={badge(isValidation ? '#3F7A5E' : '#8A6D3B')}>{isValidation ? 'À valider' : 'Question de visiteur'}</span>
        {q.status === 'answered' && <span style={badge('#4A534F')}>Répondu, intégration en attente</span>}
      </div>
      <p style={{ fontWeight: 600, lineHeight: 1.5, marginBottom: q.context ? '0.4rem' : '0.9rem' }}>{fr(q.question)}</p>
      {q.context && <p style={{ color: '#6B716C', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '0.9rem' }}>{fr(q.context)}</p>}

      {editing ? (
        <>
          <textarea
            rows={3}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={isValidation ? 'Oui, non, ou tes précisions…' : 'Ta réponse\u00A0: Elisa la reformulera à l’oral.'}
            style={textarea}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.6rem' }}>
            <button disabled={busy || !draft.trim()} onClick={() => onAnswer(q, draft).then((ok) => ok && setEditing(false))} style={{ ...primaryButton, opacity: draft.trim() ? 1 : 0.5 }}>
              <Send size={14} /> Envoyer la réponse
            </button>
            {q.status === 'answered' && <button onClick={() => { setDraft(q.answer || ''); setEditing(false); }} style={ghostButton}>Annuler</button>}
            {q.status === 'open' && <button disabled={busy} onClick={() => onDismiss(q)} style={ghostButton}>Sans objet</button>}
          </div>
        </>
      ) : (
        <div style={{ background: '#F6F3EC', borderRadius: '8px', padding: '0.7rem 0.8rem' }}>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>{fr(q.answer)}</p>
          <button onClick={() => setEditing(true)} style={{ ...ghostButton, marginTop: '0.6rem', padding: '0.35rem 0.7rem', fontSize: '0.78rem' }}>Modifier</button>
        </div>
      )}
    </div>
  );
};

const ElisaAdmin = ({ idToken, onUnauthorized }) => {
  const [data, setData] = useState(null);
  const [busyId, setBusyId] = useState(null);
  const [consigne, setConsigne] = useState('');
  const [sendingConsigne, setSendingConsigne] = useState(false);
  const [showIssues, setShowIssues] = useState(false);

  const handleError = (err) => {
    if (err.message === 'unauthorized') onUnauthorized();
    else alert(err.message);
  };

  const refresh = () => callElisa(idToken, 'dashboard').then(setData).catch(handleError);
  useEffect(() => { refresh(); }, [idToken]);

  const answer = async (q, text) => {
    setBusyId(q.id);
    try {
      await callElisa(idToken, 'answer', { id: q.id, answer: text });
      await refresh();
      return true;
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setBusyId(null);
    }
  };

  const dismiss = async (q) => {
    if (!confirm(`Classer Q${q.ref} sans réponse\u00A0?`)) return;
    setBusyId(q.id);
    try {
      await callElisa(idToken, 'dismiss', { id: q.id });
      await refresh();
    } catch (err) {
      handleError(err);
    } finally {
      setBusyId(null);
    }
  };

  const sendConsigne = async () => {
    setSendingConsigne(true);
    try {
      await callElisa(idToken, 'consigne', { consigne });
      setConsigne('');
      await refresh();
    } catch (err) {
      handleError(err);
    } finally {
      setSendingConsigne(false);
    }
  };

  if (!data) return <p style={{ color: '#4A534F' }}><Loader2 size={14} style={{ animation: 'spin 1s linear infinite', verticalAlign: '-2px' }} /> Chargement…</p>;

  const questions = data.questions.filter((q) => q.kind !== 'consigne' && ['open', 'answered'].includes(q.status));
  const consignes = data.questions.filter((q) => q.kind === 'consigne' && q.status === 'answered');
  const integrated = data.questions.filter((q) => q.status === 'applied').sort((a, b) => b.applied_at.localeCompare(a.applied_at));
  const openCount = questions.filter((q) => q.status === 'open').length;

  return (
    <div style={{ display: 'grid', gap: '2.5rem' }}>
      <section>
        <h2 style={sectionTitle}>
          Questions pour toi {openCount > 0 && <span style={{ ...badge('#A63D2F'), marginLeft: '0.4rem', verticalAlign: '2px' }}>{openCount} sans réponse</span>}
        </h2>
        <p style={sectionHint}>
          Ce qu&apos;Elisa n&apos;a pas su répondre, ou ce que je préfère te faire valider. Réponds ici ou par retour du mail du lundi&nbsp;: j&apos;intègre chaque réponse dans Elisa (tous les jours vers 9&nbsp;h) et je le confirme plus bas.
        </p>
        {questions.length === 0
          ? <p style={{ color: '#6B716C' }}>Aucune question en attente.</p>
          : <div style={{ display: 'grid', gap: '1rem' }}>{questions.map((q) => <QuestionCard key={`${q.id}-${q.status}`} q={q} busy={busyId === q.id} onAnswer={answer} onDismiss={dismiss} />)}</div>}
      </section>

      <section>
        <h2 style={sectionTitle}>Ajouter une consigne pour Elisa</h2>
        <p style={sectionHint}>Un ajustement à faire, une tournure à éviter, une info à ajouter&nbsp;: je l&apos;intègre au prochain passage.</p>
        <div style={card}>
          <textarea rows={3} value={consigne} onChange={(e) => setConsigne(e.target.value)} placeholder={'Ex.\u00A0: quand on lui parle de cold call, préciser que nos commerciaux appellent depuis la France.'} style={textarea} />
          <button disabled={sendingConsigne || !consigne.trim()} onClick={sendConsigne} style={{ ...primaryButton, marginTop: '0.6rem', opacity: consigne.trim() ? 1 : 0.5 }}>
            {sendingConsigne ? <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> : <MessageSquareText size={14} />} Envoyer la consigne
          </button>
          {consignes.length > 0 && (
            <div style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
              {consignes.map((c) => (
                <div key={c.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.85rem', color: '#4A534F' }}>
                  <Clock3 size={14} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>En attente d&apos;intégration</strong> ({formatDate(c.answered_at)})&nbsp;: {fr(c.answer)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 style={sectionTitle}>Dernières mises à jour d&apos;Elisa</h2>
        <p style={sectionHint}>Les 10 derniers changements appliqués à Elisa, en production.</p>
        {data.changes.length === 0
          ? <p style={{ color: '#6B716C' }}>Aucune mise à jour pour l&apos;instant.</p>
          : (
            <div style={{ ...card, padding: 0 }}>
              {data.changes.map((c, i) => (
                <div key={c.id} style={{ padding: '1rem 1.25rem', borderTop: i ? '1px solid #EAE4D8' : 'none' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.78rem', color: '#6B716C' }}>{formatDate(c.created_at)}</span>
                    <span style={badge('#8A6D3B')}>{CATEGORY_LABELS[c.category] || c.category}</span>
                  </div>
                  <p style={{ fontWeight: 600, lineHeight: 1.45 }}>{fr(c.title)}</p>
                  {c.detail && <p style={{ color: '#4A534F', fontSize: '0.85rem', lineHeight: 1.55, marginTop: '0.25rem' }}>{fr(c.detail)}</p>}
                </div>
              ))}
            </div>
          )}
      </section>

      {integrated.length > 0 && (
        <section>
          <h2 style={sectionTitle}>Tes réponses intégrées</h2>
          <p style={sectionHint}>Sur les 30 derniers jours.</p>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {integrated.map((q) => (
              <div key={q.id} style={{ ...card, padding: '1rem 1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.35rem', color: '#3F7A5E', fontSize: '0.8rem', fontWeight: 700 }}>
                  <CheckCircle2 size={14} /> {q.kind === 'consigne' ? 'Consigne' : `Q${q.ref}`} intégrée le {formatDate(q.applied_at)}
                </div>
                {q.question && <p style={{ fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.45 }}>{fr(q.question)}</p>}
                <p style={{ color: '#4A534F', fontSize: '0.85rem', lineHeight: 1.5, marginTop: '0.25rem' }}>{fr(q.answer)}</p>
                {q.applied_note && <p style={{ fontSize: '0.82rem', lineHeight: 1.5, marginTop: '0.5rem' }}><strong>Ce que j&apos;ai fait&nbsp;:</strong> {fr(q.applied_note)}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.audit && (
        <section>
          <h2 style={sectionTitle}>Dernier bilan</h2>
          <p style={sectionHint}>
            {formatDate(data.audit.created_at)}, {data.audit.conversations_count} conversation{data.audit.conversations_count > 1 ? 's' : ''} analysée{data.audit.conversations_count > 1 ? 's' : ''}.
          </p>
          <div style={card}>
            <p style={{ lineHeight: 1.6, fontSize: '0.92rem' }}>{fr(data.audit.summary)}</p>
            {data.audit.issues?.length > 0 && (
              <>
                <button onClick={() => setShowIssues((v) => !v)} style={{ ...ghostButton, marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ChevronDown size={14} style={{ transform: showIssues ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  {showIssues ? 'Masquer' : 'Voir'} les {data.audit.issues.length} problèmes relevés
                </button>
                {showIssues && (
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
                    {data.audit.issues.map((issue, i) => (
                      <li key={i} style={{ borderLeft: `3px solid ${GRAVITY_COLORS[issue.gravite] || '#D8D1C2'}`, paddingLeft: '0.8rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: GRAVITY_COLORS[issue.gravite] || '#6B716C' }}>
                          {ISSUE_LABELS[issue.type] || issue.type} · {issue.gravite}
                        </span>
                        <p style={{ fontSize: '0.86rem', lineHeight: 1.5, color: '#1C2B27' }}>{fr(issue.detail)}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default ElisaAdmin;
