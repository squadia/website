'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

const WEBHOOK_URL = 'https://hook.eu1.make.com/hvspkkwsnirdkb0bwb2fyx2myg42l28h';
const CAL_LINK = 'https://cal.com/squadia/10leads';

const COMPANY_SIZES = [
  'PME (20 à 250 salariés)',
  'ETI (250 à 2 000 salariés)',
  'Grand compte (2 000+ salariés)',
  'Toutes tailles',
  'Autre',
];

const PERSONAS = [
  'Directeur Commercial / Sales Director',
  'DG / Dirigeant',
  'Directeur Marketing',
  'Directeur Digital',
  'CTO',
  'IT Manager',
  'Country Manager / Head of Sales filiale',
  'Autre',
];

const CONTEXTS = [
  'Lancement de produit',
  'Même produit/service, nouveau segment',
  'Autre',
];

const inputStyle = {
  background: 'rgba(255,255,255,0.9)',
  border: '1px solid rgba(17,24,39,0.12)',
  padding: '0.9rem 1rem',
  borderRadius: '10px',
  color: '#111827',
  fontSize: '1rem',
  width: '100%',
};

const textareaStyle = { ...inputStyle, minHeight: '110px', resize: 'vertical', fontFamily: 'inherit' };

const labelStyle = { fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem', display: 'block' };

function OptionList({ options, value, onChange, multi = false }) {
  const isSelected = (opt) => (multi ? value.includes(opt) : value === opt);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          style={{
            textAlign: 'left',
            padding: '1rem 1.25rem',
            borderRadius: '10px',
            border: isSelected(opt) ? '2px solid #2563EB' : '1px solid rgba(17,24,39,0.12)',
            background: isSelected(opt) ? 'rgba(6,6,18,0.92)' : 'rgba(255,255,255,0.55)',
            color: isSelected(opt) ? '#60A5FA' : '#374151',
            fontSize: '0.98rem',
            fontWeight: isSelected(opt) ? 600 : 400,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {opt}
          {multi && (
            <span style={{
              width: '18px', height: '18px', borderRadius: '4px', flexShrink: 0, marginLeft: '0.75rem',
              border: isSelected(opt) ? '1px solid #2563EB' : '1px solid #D1D5DB',
              background: isSelected(opt) ? '#2563EB' : 'transparent',
            }} />
          )}
        </button>
      ))}
    </div>
  );
}

function buildNotesSummary(data) {
  const personaText = data.personas.includes('Autre')
    ? [...data.personas.filter((p) => p !== 'Autre'), data.personaOther].filter(Boolean).join(', ')
    : data.personas.join(', ');
  const companySizeText = data.companySize.includes('Autre')
    ? [...data.companySize.filter((s) => s !== 'Autre'), data.companySizeOther].filter(Boolean).join(', ')
    : data.companySize.join(', ');
  const contextText = data.context === 'Autre' ? data.contextOther : data.context;
  const lines = [
    `Entreprise : ${data.companyName}`,
    `Site web : ${data.website}`,
    `Secteur cible : ${data.sector}`,
    `Taille d'entreprise (ICP) : ${companySizeText}`,
    `Zone géographique : ${data.geography}`,
    `Persona(s) visé(s) : ${personaText}`,
    `Vend : ${data.sells}`,
    `Contexte : ${contextText}`,
  ];
  if (data.extraNotes.trim()) lines.push(`Précisions : ${data.extraNotes.trim()}`);
  return lines.join('\n');
}

const DiagnosticSignalPanel = ({ open, onClose }) => {
  const [step, setStep] = useState(0);
  const [calNotes, setCalNotes] = useState('');
  const [data, setData] = useState({
    sector: '',
    companySize: [],
    companySizeOther: '',
    geography: '',
    companyName: '',
    website: '',
    personas: [],
    personaOther: '',
    sells: '',
    context: '',
    contextOther: '',
    extraNotes: '',
  });

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(0);
        setCalNotes('');
        setData({ sector: '', companySize: [], companySizeOther: '', geography: '', companyName: '', website: '', personas: [], personaOther: '', sells: '', context: '', contextOther: '', extraNotes: '' });
      }, 400);
    }
  }, [open]);

  const set = (field) => (e) => setData((d) => ({ ...d, [field]: typeof e === 'string' ? e : e.target.value }));
  const togglePersona = (opt) => setData((d) => ({
    ...d,
    personas: d.personas.includes(opt) ? d.personas.filter((p) => p !== opt) : [...d.personas, opt],
  }));
  const toggleCompanySize = (opt) => setData((d) => ({
    ...d,
    companySize: d.companySize.includes(opt) ? d.companySize.filter((s) => s !== opt) : [...d.companySize, opt],
  }));

  const steps = ['Marché', 'Taille cible', 'Zone', 'Votre entreprise', 'Personas', 'Offre', 'Contexte', 'Précisions'];
  const totalSteps = steps.length;
  const progress = step >= totalSteps ? 100 : Math.round((step / totalSteps) * 100);

  const canNext = () => {
    if (step === 0) return data.sector.trim().length > 1;
    if (step === 1) return data.companySize.length > 0 && (!data.companySize.includes('Autre') || data.companySizeOther.trim().length > 1);
    if (step === 2) return data.geography.trim().length > 1;
    if (step === 3) return data.companyName.trim().length > 1 && data.website.trim().length > 1;
    if (step === 4) return data.personas.length > 0 && (!data.personas.includes('Autre') || data.personaOther.trim().length > 1);
    if (step === 5) return data.sells.trim().length > 1;
    if (step === 6) return !!data.context && (data.context !== 'Autre' || data.contextOther.trim().length > 1);
    return true;
  };

  const handleNext = () => {
    if (!canNext()) return;
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
      return;
    }
    const summary = buildNotesSummary(data);
    setCalNotes(summary);
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sector: data.sector,
        companySize: data.companySize.includes('Autre')
          ? [...data.companySize.filter((s) => s !== 'Autre'), data.companySizeOther].filter(Boolean)
          : data.companySize,
        geography: data.geography,
        companyName: data.companyName,
        website: data.website,
        personas: data.personas.includes('Autre')
          ? [...data.personas.filter((p) => p !== 'Autre'), data.personaOther].filter(Boolean)
          : data.personas,
        sells: data.sells,
        context: data.context === 'Autre' ? data.contextOther : data.context,
        extraNotes: data.extraNotes,
        summary,
      }),
    }).catch(() => {});
    setStep(totalSteps);
  };

  const handleBack = () => { if (step > 0 && step < totalSteps) setStep((s) => s - 1); };

  const handleKeyDown = (e) => { if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && step < totalSteps) { e.preventDefault(); handleNext(); } };

  const calSrc = `${CAL_LINK}?notes=${encodeURIComponent(calNotes)}`;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, background: 'rgba(5,5,16,0.62)', zIndex: 1198 }}
          />
          <div style={{
            position: 'fixed', top: 'calc(64px + 1rem)', bottom: '135px', left: 0, right: 0,
            zIndex: 1199, display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            paddingLeft: 'calc(58% + 2rem)', paddingRight: '3rem', pointerEvents: 'none',
          }}>
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.95, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            style={{
              pointerEvents: 'auto',
              width: 'min(440px, calc(42vw - 5rem))', maxHeight: '100%',
              background: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.35)', borderRadius: '20px',
              boxShadow: '0 25px 60px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.35)',
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
            }}
            onKeyDown={handleKeyDown}
          >
            <div style={{ padding: '1.5rem 2rem 0', flexShrink: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#44CCFF', letterSpacing: '0.03em', textTransform: 'uppercase' }}>Vos 10 prospects sur-mesure</span>
                <button onClick={onClose} aria-label="Fermer" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', padding: '0.4rem' }}>
                  <X size={20} />
                </button>
              </div>
              <div style={{ height: '4px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', overflow: 'hidden' }}>
                <motion.div
                  animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, #2563EB, #44CCFF)', borderRadius: '999px' }}
                />
              </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Quel secteur d'activité ciblez-vous ?</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>Le secteur ou marché de vos prospects.</p>
                    <label style={labelStyle} htmlFor="sector">Secteur / marché</label>
                    <input id="sector" autoFocus type="text" value={data.sector} onChange={set('sector')} style={inputStyle} placeholder="Ex : SaaS RH, industrie, cabinet de conseil..." />
                  </motion.div>
                )}
                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Quelle taille d'entreprise ciblez-vous ?</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>Votre ICP en nombre de salariés. Plusieurs choix possibles.</p>
                    <OptionList options={COMPANY_SIZES} value={data.companySize} onChange={toggleCompanySize} multi />
                    {data.companySize.includes('Autre') && (
                      <div style={{ marginTop: '1rem' }}>
                        <label style={labelStyle} htmlFor="companySizeOther">Précisez</label>
                        <input id="companySizeOther" autoFocus type="text" value={data.companySizeOther} onChange={set('companySizeOther')} style={inputStyle} placeholder="Ex : Startup moins de 20 salariés" />
                      </div>
                    )}
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Quelle zone géographique ?</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>France entière, une région, un pays.</p>
                    <label style={labelStyle} htmlFor="geography">Zone géographique</label>
                    <input id="geography" autoFocus type="text" value={data.geography} onChange={set('geography')} style={inputStyle} placeholder="Ex : France entière, Île-de-France..." />
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Parlez-nous de votre entreprise</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>Pour qu'on sache qui vous êtes avant votre RDV.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                      <div>
                        <label style={labelStyle} htmlFor="companyName">Nom de l'entreprise</label>
                        <input id="companyName" autoFocus type="text" value={data.companyName} onChange={set('companyName')} style={inputStyle} placeholder="Votre entreprise" />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="website">Site web</label>
                        <input id="website" type="text" value={data.website} onChange={set('website')} style={inputStyle} placeholder="https://votreentreprise.com" />
                      </div>
                    </div>
                  </motion.div>
                )}
                {step === 4 && (
                  <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Quels personas souhaitez-vous atteindre ?</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>Chez vos prospects, qui contacter en priorité. Plusieurs choix possibles.</p>
                    <OptionList options={PERSONAS} value={data.personas} onChange={togglePersona} multi />
                    {data.personas.includes('Autre') && (
                      <div style={{ marginTop: '1rem' }}>
                        <label style={labelStyle} htmlFor="personaOther">Précisez le rôle</label>
                        <input id="personaOther" autoFocus type="text" value={data.personaOther} onChange={set('personaOther')} style={inputStyle} placeholder="Ex : Responsable Achats" />
                      </div>
                    )}
                  </motion.div>
                )}
                {step === 5 && (
                  <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Que vendez-vous ?</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>Votre produit ou solution, en une phrase.</p>
                    <label style={labelStyle} htmlFor="sells">Produit / solution</label>
                    <input id="sells" autoFocus type="text" value={data.sells} onChange={set('sells')} style={inputStyle} placeholder="Ex : logiciel de paie pour PME" />
                  </motion.div>
                )}
                {step === 6 && (
                  <motion.div key="s6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Quel est le contexte de votre demande ?</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>Ce qui motive cette recherche de leads.</p>
                    <OptionList options={CONTEXTS} value={data.context} onChange={(v) => set('context')(v)} />
                    {data.context === 'Autre' && (
                      <div style={{ marginTop: '1rem' }}>
                        <label style={labelStyle} htmlFor="contextOther">Précisez</label>
                        <input id="contextOther" autoFocus type="text" value={data.contextOther} onChange={set('contextOther')} style={inputStyle} placeholder="Précisez le contexte" />
                      </div>
                    )}
                  </motion.div>
                )}
                {step === 7 && (
                  <motion.div key="s7" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Autre chose à nous dire ?</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>Facultatif. Contexte, contraintes, urgence...</p>
                    <label style={labelStyle} htmlFor="extraNotes">Ce que nous devrions savoir de plus</label>
                    <textarea id="extraNotes" autoFocus value={data.extraNotes} onChange={set('extraNotes')} style={textareaStyle} placeholder="Facultatif" />
                  </motion.div>
                )}
                {step === totalSteps && (
                  <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 700, marginBottom: '0.35rem' }}>Demande bien reçue !</h3>
                    <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Quand préférez-vous en parler ?</h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      Notre équipe analyse vos réponses pour extraire vos 10 contacts sur-mesure. Choisissez un créneau ci-dessous pour notre échange de découverte.
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                      Au programme de cet appel :
                    </p>
                    <ul style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, marginBottom: '1rem', paddingLeft: '1.25rem', listStyleType: 'disc', listStylePosition: 'outside' }}>
                      <li style={{ display: 'list-item' }}>Analyse de vos enjeux d'acquisition actuels.</li>
                      <li style={{ display: 'list-item' }}>Présentation en direct de vos 10 leads cibles et de leurs signaux d'achat.</li>
                    </ul>
                    <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      vérifiez votre mail pour la confirmation de notre échange
                    </p>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(17,24,39,0.12)', background: 'rgba(255,255,255,0.5)', minHeight: '500px' }}>
                      <iframe
                        title="Prendre rendez-vous"
                        src={calSrc}
                        style={{ width: '100%', height: '600px', border: 'none' }}
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {step < totalSteps && (
              <div style={{ padding: '1.5rem 2rem', display: 'flex', gap: '0.75rem', borderTop: '1px solid rgba(17,24,39,0.1)', flexShrink: 0 }}>
                {step > 0 && (
                  <button
                    onClick={handleBack}
                    style={{ padding: '0.9rem 1.25rem', borderRadius: '10px', border: '1px solid rgba(17,24,39,0.15)', background: 'rgba(255,255,255,0.5)', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.95rem' }}
                  >
                    <ArrowLeft size={16} /> Retour
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={!canNext()}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '0.9rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.98rem', opacity: !canNext() ? 0.5 : 1, cursor: !canNext() ? 'not-allowed' : 'pointer' }}
                >
                  {step === totalSteps - 1 ? 'Voir les disponibilités' : 'Continuer'} <ArrowRight size={16} />
                </button>
              </div>
            )}
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DiagnosticSignalPanel;
