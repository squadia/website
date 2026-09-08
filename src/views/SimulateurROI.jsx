'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Calculator, SlidersHorizontal } from 'lucide-react';
const simulateurRoiImg = '/assets/images/ressources/manager_reflexion_simulation_cout_externalisation_squadia.png';
const teamSquadia = '/assets/images/notremission/team-squadia.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

const fmtInt = (n) => Math.round(n).toLocaleString('fr-FR');
const fmtEuro = (n) =>
  Math.round(n).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const fmtEuroK = (n) => {
  if (n >= 1000) return (n / 1000).toLocaleString('fr-FR', { maximumFractionDigits: 1 }) + ' k€';
  return Math.round(n) + ' €';
};
const fmtDec = (n) => n.toLocaleString('fr-FR', { maximumFractionDigits: 1 });

const sliderStyle = {
  width: '100%',
  appearance: 'none',
  WebkitAppearance: 'none',
  height: '4px',
  borderRadius: '2px',
  background: '#1A1A3A',
  marginTop: '14px',
  accentColor: '#44CCFF',
  cursor: 'pointer'
};

const fieldRowStyle = {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: '12px',
  padding: '18px 0',
  borderTop: '1px solid #1A1A3A'
};

const valuePillStyle = {
  fontFamily: 'monospace',
  fontWeight: 700,
  fontSize: '14px',
  color: '#44CCFF',
  background: 'rgba(68,204,255,0.1)',
  padding: '3px 10px',
  borderRadius: '7px',
  whiteSpace: 'nowrap'
};

function Field({ label, hint, value, valueLabel, min, max, step, onChange }) {
  return (
    <div style={{ padding: '0' }}>
      <div style={{ ...fieldRowStyle, borderTop: 'none', paddingTop: 0, paddingBottom: 0 }}>
        <label style={{ fontSize: '0.95rem', fontWeight: 600, color: '#F3F4F6' }}>{label}</label>
        <span style={valuePillStyle}>{valueLabel}</span>
      </div>
      {hint && (
        <span style={{ display: 'block', fontSize: '0.8rem', color: '#6B7280', marginTop: '4px' }}>{hint}</span>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={sliderStyle}
      />
    </div>
  );
}

function FunnelRow({ label, value, barColor, barPct, minPct = 3, barHeight = 8 }) {
  const pct = Math.min(100, Math.max(barPct, minPct));
  return (
    <div style={{ padding: '12px 0', borderTop: '1px solid #1A1A3A' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
        <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{label}</span>
        <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.95rem', color: '#F9FAFB' }}>{value}</span>
      </div>
      {barColor && (
        <div style={{ marginTop: '8px', height: `${barHeight}px`, borderRadius: `${barHeight / 2}px`, background: '#0D0D25', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              borderRadius: `${barHeight / 2}px`,
              width: `${pct}%`,
              background: barColor,
              transition: 'width .25s ease'
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function SimulateurROI() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Simulateur ROI : combien vaut le temps récupéré en process ? — Squadia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content =
        "Estimez en 30 secondes le pipeline et le revenu additionnel que votre équipe commerciale peut générer grâce au nettoyage et à l'enrichissement de votre donnée CRM.";
    }
    window.scrollTo(0, 0);
  }, []);

  const [team, setTeam] = useState(3);
  const [calls, setCalls] = useState(60);
  const [days, setDays] = useState(3);
  const [pickup, setPickup] = useState(20);
  const [rdv, setRdv] = useState(30);
  const [win, setWin] = useState(30);
  const [dealvalue, setDealvalue] = useState(4000);

  const r = useMemo(() => {
    const pickupR = pickup / 100;
    const rdvR = rdv / 100;
    const winR = win / 100;
    const dv = Math.max(0, Number(dealvalue) || 0);

    const extraCallsPerRep = calls * days;
    const extraCallsTeam = extraCallsPerRep * team;

    const leadsPerRep = extraCallsPerRep * pickupR * rdvR;
    const leadsTeam = leadsPerRep * team;

    const pipelineTeam = leadsTeam * dv;

    const dealsTeam = leadsTeam * winR;
    const revenueMonth = dealsTeam * dv;
    const revenueYear = revenueMonth * 12;

    return {
      pickupR, rdvR, winR, dv,
      extraCallsPerRep, extraCallsTeam, leadsPerRep, leadsTeam,
      pipelineTeam, dealsTeam, revenueMonth, revenueYear
    };
  }, [team, calls, days, pickup, rdv, win, dealvalue]);

  // Barres normalisées sur une équipe de référence réaliste (5 à 10 commerciaux),
  // pas sur les extrêmes absolus des curseurs, pour que CHAQUE curseur (équipe,
  // appels, jours, conversion) fasse bouger les barres de façon visible dans la
  // plage d'usage courante. Calibré pour qu'environ 80 deals signés / mois
  // atteignent la moitié de la barre "Deals signés".
  const maxDealsTeam = 450;
  const maxLeadsTeam = maxDealsTeam / 0.6; // win max
  const maxCallsTeam = maxLeadsTeam / (0.6 * 0.7); // pickup max * rdv max
  const scaleBarPct = (fraction) => Math.min(100, Math.pow(Math.max(fraction, 0), 0.4) * 100);

  const appelsPct = scaleBarPct(r.extraCallsTeam / maxCallsTeam);
  const leadsPct = scaleBarPct(r.leadsTeam / maxLeadsTeam);
  const dealsPct = scaleBarPct(r.dealsTeam / maxDealsTeam);

  const cardStyle = {
    background: '#0D0D25',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '14px',
    padding: '2rem',
    boxShadow: '0 4px 24px rgba(0,0,0,0.25)'
  };

  const StepTitle = ({ n, label, desc }) => (
    <h2 style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.4rem', marginBottom: '1.25rem', fontWeight: 700 }}>
      <span style={{ color: '#44CCFF', fontSize: '0.95rem' }}>{n}.</span>
      <span style={{ color: '#FFFFFF', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
      <span style={{ color: '#9CA3AF', fontSize: '0.9rem', fontWeight: 500 }}>: {desc}</span>
    </h2>
  );

  return (
    <div style={{ background: '#0A0A1A', minHeight: '100vh', color: '#F9FAFB', paddingBottom: '100px' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '68vh', overflow: 'hidden' }}>
        <img src={simulateurRoiImg} alt="" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '68% 20%', pointerEvents: 'none', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: 'rgba(10,10,26,0.40)'
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(105deg, rgba(10,10,26,0.97) 0%, rgba(10,10,26,0.80) 35%, rgba(10,10,26,0.45) 60%, transparent 100%)'
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(to bottom, transparent, #0A0A1A)'
        }} />

        <div style={{ position: 'relative', zIndex: 4, minHeight: '68vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '160px 8% 60px' }}>
          <div
            className="fade-in"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start',
              background: 'rgba(37,99,235,0.1)', border: '1px solid #44CCFF',
              padding: '0.4rem 1rem', borderRadius: '30px', color: '#44CCFF',
              fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem'
            }}
          >
            <Calculator size={16} /> Simulateur gratuit
          </div>
          <h1 className="fade-in" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 900, marginBottom: '1.25rem', letterSpacing: '-0.02em', maxWidth: '700px', lineHeight: 1.15 }}>
            Simulateur de rentabilité&nbsp;: combien vaut le temps récupéré par votre équipe&nbsp;?
          </h1>
          <p className="fade-in" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '1.1rem' }}>
            Nettoyez et enrichissez votre donnée CRM pour libérer en moyenne <span style={{ whiteSpace: 'nowrap' }}>3 jours de prospection par commercial et par mois</span>.
          </p>
          <p className="fade-in" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', fontWeight: 700, color: '#44CCFF', maxWidth: '600px', lineHeight: '1.5' }}>
            <SlidersHorizontal size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
            Ajustez les curseurs ci-dessous pour estimer votre gain de temps, mesurer l'impact financier sur vos ventes et valider vos investissements avec Squadia.
          </p>
        </div>
      </section>

      {/* SIMULATEUR */}
      <section className="container" style={{ paddingTop: '8rem' }}>
        <div className="fade-in" style={{ margin: '0 auto 3.5rem', textAlign: 'center' }}>
          <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#44CCFF', marginBottom: '1rem' }}>
            Simulateur de performance
          </span>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: '#F9FAFB', margin: '0 0 1.25rem' }}>
            Calculez la rentabilité du temps économisé sur vos process commerciaux
          </h2>
          <p style={{ fontSize: '1rem', color: '#9CA3AF', lineHeight: 1.7, textAlign: 'justify', marginBottom: '1.1rem' }}>
            Ce simulateur évalue l'impact financier du temps gagné sur vos process commerciaux. Par défaut, il s'appuie sur une base de données de référence estimant à <strong style={{ color: '#F3F4F6' }}>3 jours de prospection par mois et par commercial</strong> le gain généré.
          </p>
          <p style={{ fontSize: '1rem', color: '#9CA3AF', lineHeight: 1.7, textAlign: 'justify' }}>
            Utilisez-le pour estimer le temps perdu sur vos process actuels, mesurer le volume de temps de vente récupéré et obtenir facilement les arguments chiffrés nécessaires pour valider votre budget avec Squadia et accélérer votre croissance.
          </p>
        </div>
        <div
          className="grid-2"
          style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(320px,380px)', alignItems: 'start', gap: '1.5rem' }}
        >

          {/* LEFT: parameters */}
          <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={cardStyle}>
              <StepTitle n={1} label="Équipe" desc="précisez la structure de votre équipe" />
              <Field
                label="Nombre de commerciaux"
                value={team}
                valueLabel={team}
                min={1} max={30} step={1}
                onChange={setTeam}
              />
              <div style={{ height: '18px' }} />
              <Field
                label="Appels moyens / commercial / jour"
                value={calls}
                valueLabel={fmtInt(calls)}
                min={20} max={100} step={5}
                onChange={setCalls}
              />
              <div style={{ height: '18px' }} />
              <Field
                label="Jours de prospection gagnés / mois"
                hint="Promesse Squadia sur le nettoyage & l'enrichissement — ajustable pour tester la sensibilité"
                value={days}
                valueLabel={days}
                min={1} max={5} step={1}
                onChange={setDays}
              />
            </div>

            <div style={cardStyle}>
              <StepTitle n={2} label="Conversion" desc="indiquez le taux de conversion moyen par commercial" />
              <Field
                label="Taux de décroché"
                value={pickup}
                valueLabel={`${pickup}%`}
                min={5} max={60} step={1}
                onChange={setPickup}
              />
              <div style={{ height: '18px' }} />
              <Field
                label="Conversion en rendez-vous (R1)"
                value={rdv}
                valueLabel={`${rdv}%`}
                min={10} max={70} step={1}
                onChange={setRdv}
              />
              <div style={{ height: '18px' }} />
              <Field
                label="Conversion lead → deal signé"
                value={win}
                valueLabel={`${win}%`}
                min={10} max={60} step={1}
                onChange={setWin}
              />
            </div>

            <div style={cardStyle}>
              <StepTitle n={3} label="Valeur" desc="précisez la valeur moyenne d'un deal signé" />
              <label style={{ fontSize: '0.95rem', fontWeight: 600, color: '#F3F4F6', display: 'block', marginBottom: '10px' }}>
                Valeur moyenne d'un deal signé
              </label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #1A1A3A', borderRadius: '9px', background: '#03030A', overflow: 'hidden' }}>
                <span style={{ padding: '10px 12px', fontFamily: 'monospace', fontSize: '14px', color: '#6B7280', borderRight: '1px solid #1A1A3A' }}>
                  €
                </span>
                <input
                  type="number"
                  min={200}
                  step={100}
                  value={dealvalue}
                  onChange={(e) => setDealvalue(e.target.value)}
                  style={{ border: 'none', background: 'transparent', padding: '10px 12px', fontFamily: 'monospace', fontSize: '15px', fontWeight: 700, color: '#F9FAFB', width: '100%', outline: 'none' }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: results */}
          <div className="fade-in" style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-120px', bottom: '-120px', left: '-100px', right: '-100px',
                background: 'radial-gradient(circle, rgba(37,99,235,0.85) 0%, rgba(37,99,235,0.35) 45%, transparent 75%)',
                filter: 'blur(70px)', zIndex: 0, pointerEvents: 'none'
              }} />
              <div style={{ ...cardStyle, position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  Gains potentiels d'équipe / mois
                </h2>

                <FunnelRow
                  label="Appels supplémentaires générés / mois"
                  value={fmtInt(r.extraCallsTeam)}
                  barColor="#2563EB"
                  barPct={appelsPct}
                  barHeight={12}
                />
                <FunnelRow
                  label="Leads créés (RDV pris) / mois"
                  value={fmtInt(r.leadsTeam)}
                  barColor="#2563EB"
                  barPct={leadsPct}
                  barHeight={12}
                />
                <div style={{ fontSize: '0.75rem', color: '#6B7280', fontFamily: 'monospace', padding: '6px 0 0' }}>
                  soit {fmtDec(r.leadsPerRep)} leads / commercial / mois
                </div>

                <FunnelRow
                  label="Pipeline généré (unweighted)"
                  value={fmtEuro(r.pipelineTeam)}
                  barColor="#2563EB"
                  barPct={leadsPct}
                  barHeight={12}
                />
                <div style={{ fontSize: '0.75rem', color: '#6B7280', fontFamily: 'monospace', padding: '6px 0 0' }}>
                  soit {fmtEuro(r.pipelineTeam * 12)} / an
                </div>

                <FunnelRow
                  label="Deals signés supplémentaires"
                  value={fmtDec(r.dealsTeam)}
                  barColor="#2563EB"
                  barPct={dealsPct}
                  barHeight={12}
                />
              </div>
            </div>

            <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.35)', borderRadius: '14px', padding: '1.75rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#10B981', marginBottom: '0.6rem' }}>
                Revenu additionnel espéré par an / équipe
              </div>
              <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: 'clamp(1.7rem, 3.6vw, 2.2rem)', color: '#10B981', lineHeight: 1.05 }}>
                {fmtEuro(r.revenueYear)}
              </div>
              <div style={{ marginTop: '6px', fontSize: '0.85rem', color: '#9CA3AF' }}>
                {fmtEuro(r.revenueMonth)} / mois
              </div>
              <p style={{ margin: '1rem 0 0', fontSize: '0.9rem', lineHeight: 1.6, color: '#E5E7EB' }}>
                En travaillant avec <strong style={{ color: '#10B981' }}>Squadia</strong> sur le nettoyage et l'enrichissement de la donnée CRM, cette équipe peut espérer générer jusqu'à <strong style={{ color: '#10B981' }}>{fmtEuro(r.revenueYear)}</strong> de revenu additionnel par an, soit <strong style={{ color: '#10B981' }}>{fmtDec(r.dealsTeam)}</strong> deals signés en plus chaque mois.
              </p>
            </div>

            <div style={{ fontSize: '0.72rem', color: '#6B7280', lineHeight: 1.6 }}>
              Calcul : ({fmtInt(calls)} appels/j × {days} j gagnés × {team} commerciaux) × {pickup}% décroché × {rdv}% RDV = leads → × {win}% deal → × {fmtEuroK(r.dv)}/deal = revenu.
            </div>

          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL : PROCHAINE ÉTAPE ═══ */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container fade-in" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-160px', bottom: '-160px', width: '840px', height: '840px', background: 'radial-gradient(circle, rgba(68,204,255,0.55) 0%, rgba(68,204,255,0) 70%)', filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none' }} />
          <div style={{ border: '1px solid rgba(68,204,255,.1)', borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px -20px rgba(68,204,255,.15)', minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 1 }}>
            <img src={teamSquadia} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.75) saturate(1.1)', zIndex: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,18,0.75) 0%, transparent 32%, transparent 55%, rgba(6,6,18,0.92) 100%)', zIndex: 1, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2, padding: '56px 56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#44CCFF', display: 'block', marginBottom: '16px' }}>Prochaine étape</span>
                <p style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 200, fontStyle: 'italic', lineHeight: 1.1, color: '#fff', margin: '0 0 8px' }}>Rejoignez-nous :</p>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, lineHeight: 1.1, color: '#fff', margin: 0 }}>Transformez ce potentiel<br/>en croissance réelle.</h2>
              </div>
              <div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.72, color: '#bcc8d1', maxWidth: '420px', margin: '0 auto 32px' }}>Nos équipes analysent votre CRM et construisent le plan d'action pour aller chercher ce revenu additionnel.</p>
                <Link href="/contact" style={{ fontSize: '1.1rem', fontWeight: 700, background: '#44CCFF', color: '#060612', padding: '1.1rem 2.2rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block', margin: '0 auto' }}>Prendre Rendez-Vous</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
