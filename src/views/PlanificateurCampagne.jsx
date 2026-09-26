'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  CalendarClock, Calendar, GanttChart, Mail, Linkedin, Phone, Plus, Trash2, Pencil,
  Eye, EyeOff, X, UserSearch, Play, Info, ChevronLeft, ChevronRight, AlertTriangle
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CtaFinalZoom from '../components/ui/CtaFinalZoom';
const heroImg = '/assets/images/ressources/general_manager_evaluating_the_future_of_ai_for_his_business.jpeg';
const teamSquadia = '/assets/images/notremission/team-squadia.png';

// Canaux disponibles pour une étape de séquence
const CHANNELS = {
  email: { label: 'Email', short: 'Email', plural: 'emails', icon: Mail, defaultCap: 150 },
  visite: { label: 'Visite de profil LinkedIn', short: 'Visite profil', plural: 'visites de profil', icon: UserSearch, defaultCap: 80 },
  linkedin: { label: 'Message LinkedIn', short: 'Message LI', plural: 'messages LinkedIn', icon: Linkedin, defaultCap: 25 },
  appel: { label: 'Appel', short: 'Appel', plural: 'appels', icon: Phone, defaultCap: 40 },
};
const CHANNEL_KEYS = Object.keys(CHANNELS);

// Couleur attribuée à chaque campagne, dans l'ordre de création
const CAMPAIGN_COLORS = ['#1F3A33', '#8A6D3B', '#3F7A5E', '#8A6D3B', '#8A6D3B', '#A0526B', '#A63D2F', '#3F7A5E'];

// Jours affichés du lundi au dimanche, idx = Date.getDay()
const WEEK_DAYS = [
  { idx: 1, short: 'L', long: 'lun.' }, { idx: 2, short: 'M', long: 'mar.' }, { idx: 3, short: 'M', long: 'mer.' },
  { idx: 4, short: 'J', long: 'jeu.' }, { idx: 5, short: 'V', long: 'ven.' }, { idx: 6, short: 'S', long: 'sam.' },
  { idx: 0, short: 'D', long: 'dim.' },
];

const STORAGE_KEY = 'squadia-planificateur-campagnes-v1';

// Garde-fou : on arrête la simulation au-delà de 3 ans
const MAX_DAYS = 1095;

const toInt = (v, min = 0) => Math.max(min, parseInt(v, 10) || 0);
const toNum = (v) => Math.max(0, Number(v) || 0);
const fmtInt = (n) => Math.round(n).toLocaleString('fr-FR');
const fmtEuro = (n) =>
  Math.round(n).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const fmtDate = (d) => d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
const fmtNumDate = (d) => d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
const fmtK = (n) => (Math.abs(n) >= 1000
  ? `${(n / 1000).toLocaleString('fr-FR', { maximumFractionDigits: 1 })}\u00A0k€`
  : `${Math.round(n).toLocaleString('fr-FR')}\u00A0€`);
const fmtShort = (d) => d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });

// Dates locales calées à midi pour éviter les décalages d'heure d'été
const parseDate = (s) => {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d, 12);
};
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n, 12);
const dateKey = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const startOfWeek = (d) => addDays(d, -((d.getDay() + 6) % 7));
const diffDays = (a, b) => Math.round((b - a) / 86400000);
const nextMonday = () => {
  const today = new Date();
  return addDays(today, (8 - today.getDay()) % 7 || 7);
};

// Simule l'envoi jour par jour. Chaque contact avance dans la séquence :
// l'étape k+1 devient disponible `delay` jours après l'envoi de l'étape k.
// La capacité quotidienne est partagée par canal, et les relances passent
// avant les premiers contacts (comportement des outils de séquence).
function simulate({ start, contacts, steps, capacities, allowedDays }) {
  const n = steps.length;
  const queues = steps.map(() => []);
  queues[0].push({ ready: 0, count: contacts });
  const sent = steps.map(() => 0);
  const stepStart = steps.map(() => null);
  const stepEnd = steps.map(() => null);
  const daily = [];
  let remaining = contacts * n;

  for (let day = 0; day < MAX_DAYS && remaining > 0; day++) {
    if (!allowedDays[addDays(start, day).getDay()]) continue;
    const cap = { ...capacities };
    const byStep = {};
    for (let k = n - 1; k >= 0; k--) {
      const ch = steps[k].channel;
      const q = queues[k];
      while (cap[ch] > 0 && q.length && q[0].ready <= day) {
        const take = Math.min(q[0].count, cap[ch]);
        cap[ch] -= take;
        q[0].count -= take;
        if (q[0].count === 0) q.shift();
        sent[k] += take;
        remaining -= take;
        byStep[k] = (byStep[k] || 0) + take;
        if (stepStart[k] === null) stepStart[k] = day;
        stepEnd[k] = day;
        if (k + 1 < n) {
          const ready = day + steps[k + 1].delay;
          const next = queues[k + 1];
          const last = next[next.length - 1];
          if (last && last.ready === ready) last.count += take;
          else next.push({ ready, count: take });
        }
      }
    }
    if (Object.keys(byStep).length) daily.push({ day, byStep });
  }

  const lastDay = stepEnd.reduce((m, d) => (d !== null && d > m ? d : m), 0);
  const totals = {};
  steps.forEach((s, k) => { totals[s.channel] = (totals[s.channel] || 0) + sent[k]; });

  return {
    complete: remaining === 0,
    endDate: addDays(start, lastDay),
    calendarDays: lastDay + 1,
    sendingDays: daily.length,
    stepStart,
    stepEnd,
    daily,
    totals,
    totalTouches: contacts * n,
  };
}

// Nettoie une campagne saisie et calcule tout ce qui en découle
function analyze(c) {
  const start = parseDate(c.startDate);
  const steps = c.steps.map((s, k) => ({ channel: s.channel, delay: k === 0 ? 0 : toInt(s.delay, 1) }));
  // Capacités saisies par commercial, multipliées par la taille de l'équipe
  const reps = toInt(c.reps, 1);
  const caps = Object.fromEntries(CHANNEL_KEYS.map((k) => [k, toInt(c.capacities[k], 1) * reps]));
  const contacts = toInt(c.contacts, 1);
  const sim = simulate({ start, contacts, steps, capacities: caps, allowedDays: c.allowedDays });
  // Canal qui sature le plus : volume total rapporté à la capacité quotidienne
  const bottleneck = Object.keys(sim.totals)
    .map((ch) => ({ ch, load: sim.totals[ch] / caps[ch] }))
    .sort((a, b) => b.load - a.load)[0];
  const rdv = contacts * toNum(c.rdvRate) / 100;
  const deals = rdv * toNum(c.winRate) / 100;
  const revenue = deals * toNum(c.dealValue);
  const cost = toNum(c.cost);
  const today = diffDays(start, new Date());
  const sentToDate = sim.daily.reduce(
    (sum, d) => (d.day <= today ? sum + Object.values(d.byStep).reduce((a, b) => a + b, 0) : sum), 0
  );
  return {
    ...sim, start, steps, caps, contacts, bottleneck,
    minDays: steps.reduce((sum, s) => sum + s.delay, 0) + 1,
    rdv, deals, revenue, cost, dealValue: toNum(c.dealValue), winRate: toNum(c.winRate), rdvRate: toNum(c.rdvRate), roi: revenue - cost,
    eroi: cost > 0 ? ((revenue - cost) / cost) * 100 : null,
    progress: sim.totalTouches ? (sentToDate / sim.totalTouches) * 100 : 0,
  };
}

const newDraft = (index) => ({
  name: '',
  color: CAMPAIGN_COLORS[index % CAMPAIGN_COLORS.length],
  visible: true,
  startDate: dateKey(nextMonday()),
  contacts: '500',
  reps: '1',
  allowedDays: [false, true, true, true, true, true, false],
  steps: [
    { channel: 'visite', delay: 0 },
    { channel: 'email', delay: '1' },
    { channel: 'linkedin', delay: '2' },
    { channel: 'email', delay: '3' },
    { channel: 'appel', delay: '2' },
  ],
  capacities: Object.fromEntries(CHANNEL_KEYS.map((k) => [k, String(CHANNELS[k].defaultCap)])),
  rdvRate: '3',
  winRate: '25',
  dealValue: '5000',
  cost: '0',
});

// Complète une campagne sauvegardée avec les champs ajoutés depuis (ex. capacité « visite »)
const withDefaults = (c) => ({
  reps: '1',
  ...c,
  capacities: { ...Object.fromEntries(CHANNEL_KEYS.map((k) => [k, String(CHANNELS[k].defaultCap)])), ...c.capacities },
});

const cardStyle = {
  background: '#F6F3EC',
  border: '1px solid rgba(28,43,39,0.224)',
  borderRadius: '14px',
  padding: '1.75rem',
  boxShadow: '0 4px 24px rgba(28,43,39,0.087)'
};

const inputStyle = {
  border: '1px solid #D8D1C2',
  borderRadius: '9px',
  background: '#F6F3EC',
  padding: '10px 12px',
  fontFamily: 'monospace',
  fontSize: '15px',
  fontWeight: 700,
  color: '#1C2B27',
  width: '100%',
  outline: 'none',
  colorScheme: 'dark'
};

const labelStyle = { fontSize: '0.85rem', fontWeight: 600, color: '#6B716C', display: 'block', marginBottom: '8px' };

const iconBtn = {
  background: 'none', border: '1px solid #D8D1C2', borderRadius: '8px', width: '34px', height: '34px',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#4A534F', flexShrink: 0
};

const primaryBtn = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
  background: '#1F3A33', color: '#F6F3EC', fontWeight: 700, fontSize: '0.9rem',
  padding: '0.8rem 1.4rem', borderRadius: '9999px', border: 'none', cursor: 'pointer'
};

// Petit « i » cliquable qui ouvre une bulle d'explication, fermée par un clic ailleurs
function InfoTip({ text, width = 220 }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);
  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline-flex', verticalAlign: 'middle', marginLeft: '6px' }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Plus d'informations"
        aria-expanded={open}
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: open ? '#8A6D3B' : '#6B716C', display: 'inline-flex' }}
      >
        <Info size={14} />
      </button>
      {open && (
        <span
          role="tooltip"
          style={{
            position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)', zIndex: 5,
            width: `${width}px`, padding: '10px 12px', textTransform: 'none', letterSpacing: 'normal', borderRadius: '9px', background: '#FFFFFF', border: '1px solid rgba(176,141,87,0.35)',
            boxShadow: '0 8px 24px rgba(28,43,39,0.14)', fontSize: '0.78rem', fontWeight: 500, lineHeight: 1.5, color: '#4A534F'
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
}

function NumberField({ label, value, onChange, min = 0, step = 1, suffix, info }) {
  return (
    <div>
      <label style={labelStyle}>{label}{info && <InfoTip text={info} />}</label>
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #D8D1C2', borderRadius: '9px', background: '#F6F3EC', overflow: 'hidden' }}>
        <input
          type="number"
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...inputStyle, border: 'none', borderRadius: 0 }}
        />
        {suffix && (
          <span style={{ padding: '10px 12px', fontFamily: 'monospace', fontSize: '13px', color: '#6B716C', borderLeft: '1px solid #D8D1C2', whiteSpace: 'nowrap' }}>
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ n, children }) {
  return (
    <h3 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#1C2B27', margin: '0 0 1rem' }}>
      <span style={{ color: '#8A6D3B', marginRight: '0.4rem' }}>{n}.</span>{children}
    </h3>
  );
}

// ═══ Fenêtre de création / modification d'une campagne ═══
function CampaignModal({ initial, isEdit, onClose, onSave }) {
  const [c, setC] = useState(initial);
  const [error, setError] = useState('');
  const set = (patch) => setC((prev) => ({ ...prev, ...patch }));
  const updateStep = (i, patch) => set({ steps: c.steps.map((s, k) => (k === i ? { ...s, ...patch } : s)) });
  const usedChannels = CHANNEL_KEYS.filter((k) => c.steps.some((s) => s.channel === k));

  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeRef.current(); };
    window.addEventListener('keydown', onKey);
    // Bloque le scroll de la page en fond. Le CSS global met `overflow-x: clip`
    // sur <html>, donc un overflow posé sur <body> seul ne suffit pas.
    const html = document.documentElement;
    const prev = { html: html.style.overflow, body: document.body.style.overflow };
    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      html.style.overflow = prev.html;
      document.body.style.overflow = prev.body;
    };
  }, []);

  // Résultat de la dernière simulation, avec l'état du formulaire au moment du clic
  const [sim, setSim] = useState(null);
  const stale = sim && sim.snapshot !== JSON.stringify(c);

  const validate = ({ requireName }) => {
    if (requireName && !c.name.trim()) return 'Donnez un nom à la campagne.';
    if (!c.startDate) return 'Choisissez une date de lancement.';
    if (!c.allowedDays.some(Boolean)) return "Sélectionnez au moins un jour d'envoi.";
    if ([c.rdvRate, c.winRate, c.dealValue, c.cost].some((v) => String(v ?? '').trim() === '')) {
      return 'Renseignez tous les résultats attendus (point 4).';
    }
    return '';
  };

  const runSimulation = () => {
    const err = validate({ requireName: false });
    setError(err);
    if (!err) setSim({ result: analyze(c), snapshot: JSON.stringify(c) });
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate({ requireName: true });
    if (err) return setError(err);
    onSave({ ...c, name: c.name.trim() });
  };

  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(246,243,236,0.75)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
      }}
    >
      <form
        onSubmit={submit}
        role="dialog"
        aria-modal="true"
        aria-label={isEdit ? 'Modifier la campagne' : 'Nouvelle campagne'}
        style={{
          ...cardStyle, width: '100%', maxWidth: '1080px', maxHeight: 'calc(100vh - 32px)',
          display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderBottom: '1px solid #D8D1C2' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: '#1C2B27' }}>
            {isEdit ? 'Modifier la campagne' : 'Nouvelle campagne'}
          </h2>
          <button type="button" onClick={onClose} aria-label="Fermer" style={{ ...iconBtn, border: 'none' }}><X size={18} /></button>
        </div>

        {/* Deux colonnes : campagne et séquence à gauche, capacité et résultats à droite */}
        <div style={{ overflowY: 'auto', overscrollBehavior: 'contain', padding: '1.25rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem 1.5rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: 0 }}>
          <div>
            <SectionLabel n={1}>Campagne</SectionLabel>
            <label style={labelStyle}>Nom de la campagne</label>
            <input
              autoFocus
              value={c.name}
              onChange={(e) => set({ name: e.target.value })}
              placeholder="Ex. : Sales managers industrie"
              style={{ ...inputStyle, fontFamily: 'inherit' }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <label style={labelStyle}>Date de lancement</label>
                <input type="date" value={c.startDate} onChange={(e) => set({ startDate: e.target.value })} style={inputStyle} />
              </div>
              <NumberField label="Nombre de contacts" value={c.contacts} onChange={(v) => set({ contacts: v })} min={1} />
            </div>
            <div style={{ marginTop: '1rem' }}>
              <label style={labelStyle}>Jours d'envoi autorisés</label>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {WEEK_DAYS.map(({ idx, short }) => {
                  const on = c.allowedDays[idx];
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => set({ allowedDays: c.allowedDays.map((v, k) => (k === idx ? !v : v)) })}
                      aria-pressed={on}
                      style={{
                        width: '40px', height: '40px', borderRadius: '10px', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem',
                        border: `1px solid ${on ? '#8A6D3B' : '#FFFFFF'}`,
                        background: on ? 'rgba(176,141,87,0.12)' : '#F6F3EC',
                        color: on ? '#8A6D3B' : '#6B716C'
                      }}
                    >
                      {short}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <SectionLabel n={2}>Séquence</SectionLabel>
            <p style={{ fontSize: '0.8rem', color: '#6B716C', margin: '-0.5rem 0 1rem' }}>
              Pour chaque étape, choisissez le canal et le délai d'attente depuis l'étape précédente.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {c.steps.map((s, i) => {
                const Icon = CHANNELS[s.channel].icon;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', padding: '8px 10px', border: '1px solid #D8D1C2', borderRadius: '10px', background: '#FFFFFF' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#6B716C', width: '18px' }}>{i + 1}</span>
                    <Icon size={16} color="#8A6D3B" />
                    <select
                      value={s.channel}
                      onChange={(e) => updateStep(i, { channel: e.target.value })}
                      style={{ ...inputStyle, width: 'auto', flex: '1 1 110px', fontFamily: 'inherit', padding: '7px 10px', fontSize: '14px' }}
                    >
                      {CHANNEL_KEYS.map((k) => <option key={k} value={k}>{CHANNELS[k].label}</option>)}
                    </select>
                    {i === 0 ? (
                      <span style={{ fontSize: '0.8rem', color: '#6B716C', flex: '1 1 150px' }}>Jour du lancement</span>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '1 1 150px' }}>
                        <span style={{ fontSize: '0.8rem', color: '#6B716C' }}>+</span>
                        <input
                          type="number"
                          min={1}
                          value={s.delay}
                          onChange={(e) => updateStep(i, { delay: e.target.value })}
                          aria-label={`Délai de l'étape ${i + 1} en jours`}
                          style={{ ...inputStyle, width: '64px', padding: '7px 8px', fontSize: '14px' }}
                        />
                        <span style={{ fontSize: '0.8rem', color: '#6B716C', whiteSpace: 'nowrap' }}>jours après</span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => set({ steps: c.steps.filter((_, k) => k !== i) })}
                      disabled={c.steps.length === 1}
                      aria-label={`Supprimer l'étape ${i + 1}`}
                      style={{ ...iconBtn, border: 'none', width: '28px', height: '28px', opacity: c.steps.length === 1 ? 0.3 : 1, cursor: c.steps.length === 1 ? 'default' : 'pointer' }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                );
              })}
            </div>
            {c.steps.length < 15 && (
              <button
                type="button"
                onClick={() => set({ steps: [...c.steps, { channel: 'email', delay: '3' }] })}
                style={{
                  marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: 'rgba(31,58,51,0.12)', color: '#8A6D3B', border: '1px solid rgba(176,141,87,0.35)',
                  borderRadius: '9999px', padding: '7px 14px', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer'
                }}
              >
                <Plus size={14} /> Ajouter une étape
              </button>
            )}
          </div>
          </div>

          {/* Trait vertical entre les deux colonnes, retiré quand elles s'empilent */}
          <style>{`.plan-modal-right { border-left: 1px solid rgba(28,43,39,0.192); padding-left: 1.5rem; } @media (max-width: 820px) { .plan-modal-right { border-left: none; padding-left: 0; } }`}</style>
          <div className="plan-modal-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: 0 }}>
          <div>
            <SectionLabel n={3}>Capacité d'envoi par jour</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem' }}>
              <NumberField label="Nombre de commerciaux" value={c.reps} onChange={(v) => set({ reps: v })} min={1} />
              {usedChannels.map((k) => (
                <NumberField
                  key={k}
                  label={CHANNELS[k].label}
                  value={c.capacities[k]}
                  onChange={(v) => set({ capacities: { ...c.capacities, [k]: v } })}
                  min={1}
                  suffix="/ jour / com."
                />
              ))}
            </div>
            <p style={{ margin: '0.75rem 0 0', fontSize: '0.8rem', color: '#6B716C', lineHeight: 1.6 }}>
              Volumes par commercial. Soit pour l'équipe&nbsp;: {usedChannels
                .map((k) => `${fmtInt(toInt(c.capacities[k], 1) * toInt(c.reps, 1))} ${CHANNELS[k].plural}`)
                .join(', ')} par jour.
            </p>
          </div>

          <div>
            <SectionLabel n={4}>Résultats attendus</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem' }}>
              <NumberField label="Taux conversion contact en RDV" value={c.rdvRate} onChange={(v) => set({ rdvRate: v })} step={0.5} suffix="%" />
              <NumberField
                label="Taux de signature"
                value={c.winRate}
                onChange={(v) => set({ winRate: v })}
                suffix="%"
                info="25 % signifie que vous transformez en moyenne 1 RDV sur 4 en commande signée."
              />
              <NumberField label="Valeur deal moyen" value={c.dealValue} onChange={(v) => set({ dealValue: v })} step={100} suffix="€" />
              <NumberField
                label="Coût de la campagne"
                value={c.cost}
                onChange={(v) => set({ cost: v })}
                step={100}
                suffix="€"
                info="Total des coûts constatés pour la mise en place de votre campagne."
              />
            </div>

            <button type="button" onClick={runSimulation} style={{ ...primaryBtn, width: '100%', marginTop: '1.25rem', background: 'transparent', border: '1px solid #B08D57', color: '#8A6D3B' }}>
              <Play size={15} /> Simuler
            </button>

            {sim && (
              <div style={{ marginTop: '1rem', padding: '1rem 1.1rem', borderRadius: '12px', background: 'rgba(63,122,94,0.08)', border: '1px solid rgba(63,122,94,0.35)', opacity: stale ? 0.55 : 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr) minmax(0, 1fr)', gap: '0.75rem' }}>
                  {[
                    ['ROI de la campagne', fmtEuro(sim.result.roi), sim.result.roi >= 0 ? '#3F7A5E' : '#A63D2F', (() => {
                      const r = sim.result;
                      const deals = r.deals.toLocaleString('fr-FR', { maximumFractionDigits: 1 });
                      return (
                        <>
                          <span style={{ display: 'block', fontWeight: 700 }}>ROI = chiffre d'affaires − coût de campagne</span>
                          <span style={{ display: 'block', marginTop: '6px', fontStyle: 'italic', textDecoration: 'underline' }}>Exemple</span>
                          <span style={{ display: 'block' }}>{fmtInt(r.contacts)} contacts × {r.rdvRate.toLocaleString('fr-FR')}&nbsp;% de conversion = {fmtInt(r.rdv)} RDV</span>
                          <span style={{ display: 'block' }}>{fmtInt(r.rdv)} RDV × {r.winRate.toLocaleString('fr-FR')}&nbsp;% de signature = {deals} deals</span>
                          <span style={{ display: 'block' }}>{deals} deals × {fmtK(r.dealValue)} deal moyen = {fmtK(r.revenue)}</span>
                          <span style={{ display: 'block' }}>{fmtK(r.revenue)} − {fmtK(r.cost)} de coût de campagne</span>
                          <span style={{ display: 'block', fontWeight: 700, color: r.roi >= 0 ? '#3F7A5E' : '#A63D2F' }}>= {fmtK(r.roi)} de ROI</span>
                        </>
                      );
                    })()],
                    ['Durée', `${fmtInt(sim.result.calendarDays)} jours`, '#1C2B27'],
                    ['Date de fin', fmtNumDate(sim.result.endDate), '#1C2B27'],
                  ].map(([label, value, color, info]) => (
                    <div key={label} style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '0.7rem', color: '#6B716C', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, marginBottom: '4px' }}>
                        {label}{info && <InfoTip text={info} width={310} />}
                      </div>
                      <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1.05rem', color }}>{value}</div>
                    </div>
                  ))}
                </div>
                {(stale || !sim.result.complete) && (
                  <p style={{ margin: '0.75rem 0 0', fontSize: '0.78rem', color: '#6B716C', lineHeight: 1.5 }}>
                    {stale
                      ? 'Paramètres modifiés depuis la dernière simulation, cliquez à nouveau sur Simuler.'
                      : 'Attention\u00A0: la campagne dépasse 3\u00A0ans avec ces capacités.'}
                  </p>
                )}
              </div>
            )}
          </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', flexWrap: 'wrap', padding: '1rem 1.5rem', borderTop: '1px solid #D8D1C2' }}>
          {error && <span style={{ fontSize: '0.8rem', color: '#A63D2F', marginRight: 'auto' }}>{error}</span>}
          <button type="button" onClick={onClose} style={{ ...primaryBtn, background: 'transparent', border: '1px solid #D8D1C2', color: '#4A534F' }}>
            Annuler
          </button>
          <button type="submit" style={primaryBtn}>
            {isEdit ? 'Enregistrer' : 'Créer la campagne'}
          </button>
        </div>
      </form>
    </div>
  );
}

// ═══ Vue calendrier (semaine ou mois) ═══
function CalendarTab({ analyzed }) {
  const [mode, setMode] = useState('month');
  const firstStart = analyzed.length ? analyzed.reduce((m, a) => (a.start < m ? a.start : m), analyzed[0].start) : new Date();
  const [cursor, setCursor] = useState(firstStart);

  // Envois regroupés par jour : { 'yyyy-mm-dd': [{ campaign, step, channel, count }] }
  const events = useMemo(() => {
    const map = {};
    analyzed.forEach((a) => {
      a.daily.forEach((d) => {
        const key = dateKey(addDays(a.start, d.day));
        Object.entries(d.byStep).forEach(([k, count]) => {
          (map[key] = map[key] || []).push({ campaign: a.campaign, step: Number(k), channel: a.steps[k].channel, count });
        });
      });
    });
    return map;
  }, [analyzed]);

  let rangeStart;
  let rangeEnd;
  if (mode === 'week') {
    rangeStart = startOfWeek(cursor);
    rangeEnd = addDays(rangeStart, 6);
  } else {
    const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1, 12);
    const last = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0, 12);
    rangeStart = startOfWeek(first);
    rangeEnd = addDays(startOfWeek(last), 6);
  }
  const days = Array.from({ length: diffDays(rangeStart, rangeEnd) + 1 }, (_, i) => addDays(rangeStart, i));
  const move = (dir) => setCursor(mode === 'week'
    ? addDays(cursor, 7 * dir)
    : new Date(cursor.getFullYear(), cursor.getMonth() + dir, 1, 12));
  const todayKey = dateKey(new Date());
  const title = mode === 'week'
    ? `${fmtShort(rangeStart)} au ${fmtDate(rangeEnd)}`
    : cursor.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  const maxChips = mode === 'week' ? 12 : 3;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button type="button" onClick={() => move(-1)} aria-label="Période précédente" style={iconBtn}><ChevronLeft size={16} /></button>
          <span style={{ fontWeight: 700, fontSize: '0.95rem', minWidth: '170px', textAlign: 'center', textTransform: 'capitalize' }}>{title}</span>
          <button type="button" onClick={() => move(1)} aria-label="Période suivante" style={iconBtn}><ChevronRight size={16} /></button>
          <button type="button" onClick={() => setCursor(new Date())} style={{ ...iconBtn, width: 'auto', padding: '0 12px', fontSize: '0.8rem', fontWeight: 600 }}>
            Aujourd'hui
          </button>
        </div>
        <div style={{ display: 'flex', border: '1px solid #D8D1C2', borderRadius: '9px', overflow: 'hidden' }}>
          {[['week', 'Semaine'], ['month', 'Mois']].map(([m, label]) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              style={{
                padding: '7px 14px', fontSize: '0.8rem', fontWeight: 600, border: 'none', cursor: 'pointer',
                background: mode === m ? 'rgba(176,141,87,0.12)' : 'transparent', color: mode === m ? '#8A6D3B' : '#4A534F'
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: '640px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0,1fr))', gap: '6px', marginBottom: '6px' }}>
            {WEEK_DAYS.map((d) => (
              <div key={d.idx} style={{ fontSize: '0.72rem', color: '#6B716C', textAlign: 'center', textTransform: 'uppercase', fontWeight: 700 }}>{d.long}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0,1fr))', gap: '6px' }}>
            {days.map((day) => {
              const key = dateKey(day);
              const list = events[key] || [];
              const outside = mode === 'month' && day.getMonth() !== cursor.getMonth();
              const isToday = key === todayKey;
              return (
                <div
                  key={key}
                  style={{
                    minHeight: mode === 'week' ? '220px' : '104px', padding: '6px', borderRadius: '9px',
                    background: outside ? 'transparent' : '#F6F3EC',
                    border: `1px solid ${isToday ? '#8A6D3B' : '#FFFFFF'}`,
                    opacity: outside ? 0.45 : 1, display: 'flex', flexDirection: 'column', gap: '4px'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isToday ? '#8A6D3B' : '#4A534F', paddingLeft: '2px' }}>{day.getDate()}</span>
                  {list.slice(0, maxChips).map((ev, i) => {
                    const Icon = CHANNELS[ev.channel].icon;
                    return (
                      <div
                        key={i}
                        title={`${ev.campaign.name} · étape ${ev.step + 1} (${CHANNELS[ev.channel].label}) · ${fmtInt(ev.count)} envois`}
                        style={{
                          background: `${ev.campaign.color}26`, borderLeft: `3px solid ${ev.campaign.color}`,
                          borderRadius: '5px', padding: '3px 5px', minWidth: 0
                        }}
                      >
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#1C2B27', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {ev.campaign.name}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', color: '#4A534F', whiteSpace: 'nowrap' }}>
                          <Icon size={10} /> É{ev.step + 1} · {fmtInt(ev.count)}
                        </div>
                      </div>
                    );
                  })}
                  {list.length > maxChips && (
                    <span style={{ fontSize: '0.68rem', color: '#6B716C', paddingLeft: '2px' }}>+{list.length - maxChips} autres</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══ Vue chronologie : une barre par étape, toutes campagnes sur le même axe ═══
function TimelineTab({ analyzed }) {
  const min = analyzed.reduce((m, a) => (a.start < m ? a.start : m), analyzed[0].start);
  const max = analyzed.reduce((m, a) => (a.endDate > m ? a.endDate : m), analyzed[0].endDate);
  const span = diffDays(min, max) + 1;
  const pos = (d) => (diffDays(min, d) / span) * 100;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {analyzed.map((a) => (
        <div key={a.campaign.id}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: a.campaign.color }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{a.campaign.name}</span>
            <span style={{ fontSize: '0.75rem', color: '#6B716C', fontFamily: 'monospace' }}>
              {fmtShort(a.start)} au {fmtDate(a.endDate)} · {fmtInt(a.calendarDays)} j
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {a.steps.map((s, k) => {
              if (a.stepStart[k] === null) return null;
              const from = addDays(a.start, a.stepStart[k]);
              const to = addDays(a.start, a.stepEnd[k]);
              const Icon = CHANNELS[s.channel].icon;
              return (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px minmax(0,1fr)', alignItems: 'center', gap: '10px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#4A534F', whiteSpace: 'nowrap' }}>
                    <Icon size={12} /> {k + 1}. {CHANNELS[s.channel].short}
                  </span>
                  <div style={{ position: 'relative', height: '16px', background: '#F6F3EC', borderRadius: '5px' }}>
                    <div
                      title={`${fmtDate(from)} au ${fmtDate(to)}`}
                      style={{
                        position: 'absolute', top: 0, bottom: 0, left: `${pos(from)}%`,
                        width: `${Math.max(((diffDays(from, to) + 1) / span) * 100, 0.8)}%`,
                        background: a.campaign.color, borderRadius: '5px', opacity: 0.9
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div style={{ display: 'grid', gridTemplateColumns: '120px minmax(0,1fr)', gap: '10px' }}>
        <span />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#6B716C', fontFamily: 'monospace' }}>
          <span>{fmtDate(min)}</span>
          <span>{fmtDate(max)}</span>
        </div>
      </div>
    </div>
  );
}

// ═══ Carte d'une campagne dans le bloc « Mes campagnes » ═══
function CampaignCard({ a, onToggle, onEdit, onDelete }) {
  const c = a.campaign;
  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #D8D1C2', borderRadius: '12px', padding: '1.1rem', opacity: c.visible ? 1 : 0.75, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: c.color, marginTop: '5px', flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1C2B27', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
          <div style={{ fontSize: '0.78rem', color: '#4A534F', marginTop: '2px' }}>
            {fmtShort(a.start)} → {fmtDate(a.endDate)}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button type="button" onClick={onEdit} aria-label="Modifier" title="Modifier" style={iconBtn}><Pencil size={15} /></button>
          <button type="button" onClick={onDelete} aria-label="Supprimer" title="Supprimer" style={{ ...iconBtn, color: '#A63D2F' }}><Trash2 size={15} /></button>
        </div>
      </div>

      {/* Visibilité dans le calendrier et la chronologie, libellée pour lever toute ambiguïté */}
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={c.visible}
        style={{
          alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer',
          fontSize: '0.75rem', fontWeight: 600, borderRadius: '9999px', padding: '4px 10px',
          border: `1px solid ${c.visible ? 'rgba(176,141,87,0.4)' : '#FFFFFF'}`,
          background: c.visible ? 'rgba(176,141,87,0.08)' : '#F6F3EC',
          color: c.visible ? '#8A6D3B' : '#4A534F'
        }}
      >
        {c.visible ? <><Eye size={13} /> Affichée dans le calendrier</> : <><EyeOff size={13} /> Masquée · cliquer pour afficher</>}
      </button>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {a.steps.map((s, k) => {
          const Icon = CHANNELS[s.channel].icon;
          return (
            <span key={k} title={k === 0 ? 'Lancement' : `+${s.delay} j`} style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '0.7rem', color: '#4A534F', background: '#F6F3EC', border: '1px solid #D8D1C2', borderRadius: '6px', padding: '2px 6px' }}>
              <Icon size={11} />{k > 0 && <span style={{ color: '#6B716C' }}>+{s.delay}j</span>}
            </span>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.78rem', color: '#4A534F', fontFamily: 'monospace' }}>
        <span><strong style={{ color: '#1C2B27' }}>{fmtInt(a.calendarDays)}</strong> jours</span>
        <span><strong style={{ color: '#1C2B27' }}>{fmtInt(a.totalTouches)}</strong> envois</span>
        <span>ROI <strong style={{ color: a.roi >= 0 ? '#3F7A5E' : '#A63D2F' }}>{fmtEuro(a.roi)}</strong></span>
      </div>

      {a.bottleneck && (
        <div style={{ fontSize: '0.75rem', color: '#6B716C' }}>
          Canal limitant&nbsp;: <span style={{ color: '#8A6D3B', fontWeight: 600 }}>{CHANNELS[a.bottleneck.ch].label}</span> ({fmtInt(a.caps[a.bottleneck.ch])}/j), plancher sans limite {fmtInt(a.minDays)} j
        </div>
      )}
      {!a.complete && (
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '0.75rem', color: '#8A6D3B' }}>
          <AlertTriangle size={13} /> Dépasse 3&nbsp;ans, augmentez la capacité.
        </div>
      )}

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#6B716C', marginBottom: '4px' }}>
          <span>Progression</span><span>{a.progress.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}&nbsp;%</span>
        </div>
        <div style={{ height: '6px', borderRadius: '3px', background: '#F6F3EC', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${Math.min(100, a.progress)}%`, background: c.color }} />
        </div>
      </div>
    </div>
  );
}

export default function PlanificateurCampagne() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Planificateur de campagne multicanale : combien de temps dure votre séquence ? | Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content =
        "Estimez la durée réelle d'une campagne de prospection multicanale (email, LinkedIn, appel) selon vos contacts, vos délais de relance et vos capacités d'envoi quotidiennes.";
    }
    window.scrollTo(0, 0);
  }, []);

  const [campaigns, setCampaigns] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [modal, setModal] = useState(null); // { draft, editId }
  const [tab, setTab] = useState('calendar');

  // Chargement côté client : campagnes sauvegardées, sinon un exemple pour démarrer
  useEffect(() => {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch { /* stockage indisponible */ }
    setCampaigns(Array.isArray(saved) ? saved.map(withDefaults) : [{ ...newDraft(0), id: 'exemple', name: 'Exemple : sales managers' }]);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns)); } catch { /* stockage indisponible */ }
  }, [campaigns, loaded]);

  const analyzed = useMemo(
    () => campaigns.map((c) => ({ ...analyze(c), campaign: c })),
    [campaigns]
  );
  const visible = analyzed.filter((a) => a.campaign.visible);

  const saveCampaign = (c) => {
    if (modal.editId) setCampaigns(campaigns.map((x) => (x.id === modal.editId ? { ...c, id: x.id } : x)));
    else setCampaigns([...campaigns, { ...c, id: Math.random().toString(36).slice(2, 10) }]);
    setModal(null);
  };
  const openNew = () => setModal({ draft: newDraft(campaigns.length), editId: null });

  const TABS = [
    ['calendar', 'Calendrier', Calendar],
    ['timeline', 'Chronologie', GanttChart],
  ];

  return (
    <div style={{ background: '#F6F3EC', minHeight: '100vh', color: '#1C2B27', paddingBottom: '100px' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '56vh', overflow: 'hidden' }}>
        <img src={heroImg} alt="" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '68% 20%', pointerEvents: 'none', zIndex: 0
        }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'rgba(246,243,236,0.4)' }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(105deg, rgba(246,243,236,0.97) 0%, rgba(246,243,236,0.8) 35%, rgba(246,243,236,0.45) 60%, transparent 100%)'
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(to bottom, transparent, #F6F3EC)'
        }} />

        <div style={{ position: 'relative', zIndex: 4, minHeight: '56vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '160px 8% 40px' }}>
          <div
            className="fade-in"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start',
              background: 'rgba(31,58,51,0.1)', border: '1px solid #B08D57',
              padding: '0.4rem 1rem', borderRadius: '30px', color: '#8A6D3B',
              fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem'
            }}
          >
            <CalendarClock size={16} /> Outil gratuit
          </div>
          <h1 className="fade-in" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 900, marginBottom: '1.25rem', letterSpacing: '-0.02em', maxWidth: '720px', lineHeight: 1.15 }}>
            Planificateur de campagne&nbsp;: simuler le temps et le ROI d'une campagne
          </h1>
          <p className="fade-in" style={{ fontSize: '1.1rem', color: 'rgba(28,43,39,0.78)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '1.1rem' }}>
            Savoir estimer le temps nécessaire pour qu'une campagne multicanale atteigne votre cible, c'est essentiel pour garder le contrôle des coûts et de la rentabilité attendue.
          </p>
        </div>
      </section>

      {/* OUTIL */}
      <section className="container" style={{ paddingTop: '3rem', paddingBottom: '8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, margin: 0 }}>Vos campagnes planifiées</h2>
            <p style={{ fontSize: '0.9rem', color: '#4A534F', margin: '0.35rem 0 0' }}>
              Chaque contact passe à l'étape suivante après le délai choisi, dans la limite de votre capacité d'envoi quotidienne.
            </p>
          </div>
          <button type="button" onClick={openNew} style={primaryBtn}>
            <Plus size={16} /> Nouvelle campagne
          </button>
        </div>

        {/* Vues */}
        <div style={cardStyle}>
          <div role="tablist" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px', background: '#F6F3EC', border: '1px solid #D8D1C2', borderRadius: '10px', padding: '4px', marginBottom: '1.5rem' }}>
            {TABS.map(([id, label, Icon]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '9px 8px',
                  borderRadius: '7px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
                  background: tab === id ? '#FFFFFF' : 'transparent', color: tab === id ? '#1C2B27' : '#6B716C'
                }}
              >
                <Icon size={15} /> {label}
              </button>
            ))}
          </div>

          {!loaded ? null : visible.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#4A534F' }}>
              <p style={{ margin: '0 0 1.25rem' }}>
                {campaigns.length ? 'Toutes vos campagnes sont masquées.' : 'Aucune campagne pour le moment.'}
              </p>
              {campaigns.length > 0 && (
                <button type="button" onClick={() => setCampaigns(campaigns.map((x) => ({ ...x, visible: true })))} style={primaryBtn}>
                  <Eye size={16} /> Réafficher toutes les campagnes
                </button>
              )}
              {!campaigns.length && (
                <button type="button" onClick={openNew} style={primaryBtn}><Plus size={16} /> Créer ma première campagne</button>
              )}
            </div>
          ) : tab === 'calendar' ? (
            <CalendarTab analyzed={visible} />
          ) : (
            <TimelineTab analyzed={visible} />
          )}
        </div>

        {/* Mes campagnes */}
        <div style={{ ...cardStyle, marginTop: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, margin: 0 }}>
              Mes campagnes <span style={{ color: '#6B716C', fontWeight: 600 }}>({campaigns.length})</span>
            </h2>
            <button type="button" onClick={openNew} style={{ ...iconBtn, width: 'auto', padding: '0 12px', gap: '6px', color: '#8A6D3B', fontSize: '0.8rem', fontWeight: 600 }}>
              <Plus size={14} /> Ajouter
            </button>
          </div>
          {campaigns.length === 0 ? (
            <p style={{ color: '#6B716C', fontSize: '0.9rem', margin: 0 }}>Les campagnes créées apparaîtront ici.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1rem' }}>
              {analyzed.map((a) => (
                <CampaignCard
                  key={a.campaign.id}
                  a={a}
                  onToggle={() => setCampaigns(campaigns.map((x) => (x.id === a.campaign.id ? { ...x, visible: !x.visible } : x)))}
                  onEdit={() => setModal({ draft: a.campaign, editId: a.campaign.id })}
                  onDelete={() => {
                    if (window.confirm(`Supprimer la campagne « ${a.campaign.name} » ?`)) {
                      setCampaigns(campaigns.filter((x) => x.id !== a.campaign.id));
                    }
                  }}
                />
              ))}
            </div>
          )}
          <p style={{ margin: '1.25rem 0 0', fontSize: '0.75rem', color: '#6B716C' }}>
            Vos campagnes sont enregistrées uniquement dans ce navigateur.
          </p>
        </div>
      </section>

      {modal && (
        <CampaignModal
          initial={modal.draft}
          isEdit={!!modal.editId}
          onClose={() => setModal(null)}
          onSave={saveCampaign}
        />
      )}

      {/* ═══ CTA FINAL : PROCHAINE ÉTAPE ═══ */}
      <CtaFinalZoom
        teamSquadia={teamSquadia}
        eyebrow="Prochaine étape"
        kicker="Rejoignez-nous :"
        title={<>Accélérez vos campagnes<br />sans sacrifier la qualité.</>}
        description="Nos équipes construisent vos séquences multicanales et dimensionnent la capacité d'envoi pour tenir vos délais."
      />

    </div>
  );
}
