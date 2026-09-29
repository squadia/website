'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const THEMES = [
  { bg: '#1F3A33', title: '#F6F3EC', body: 'rgba(246,243,236,0.78)', kicker: '#D9B97A', num: 'rgba(246,243,236,0.08)', chip: 'rgba(246,243,236,0.1)', chipText: '#F6F3EC' },
  { bg: '#E9E2D3', title: '#1C2B27', body: 'rgba(28,43,39,0.78)', kicker: '#8A6D3B', num: 'rgba(28,43,39,0.07)', chip: 'rgba(31,58,51,0.08)', chipText: '#1C2B27' },
  { bg: '#2E4F45', title: '#F6F3EC', body: 'rgba(246,243,236,0.8)', kicker: '#D9B97A', num: 'rgba(246,243,236,0.08)', chip: 'rgba(246,243,236,0.1)', chipText: '#F6F3EC' },
  { bg: '#C9D3C4', title: '#1C2B27', body: 'rgba(28,43,39,0.8)', kicker: '#6E5530', num: 'rgba(28,43,39,0.08)', chip: 'rgba(31,58,51,0.1)', chipText: '#1C2B27' },
];

const StepCard = ({ step, index, total, progress }) => {
  const theme = THEMES[index % THEMES.length];
  const start = index / total;
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const shade = useTransform(progress, [start, Math.min(start + 1 / total, 1)], [0, index === total - 1 ? 0 : 0.35]);

  return (
    <div className="ssc-slot" style={{ top: `calc(110px + ${index * 26}px)`, '--ssc-i': index }}>
      <motion.article className="ssc-card" style={{ scale, background: theme.bg }}>
        <div className="ssc-text">
          <span className="ssc-kicker" style={{ color: theme.kicker }}>{step.kicker}</span>
          <h3 className="ssc-title" style={{ color: theme.title }}>{step.title}</h3>
          <p className="ssc-desc" style={{ color: theme.body }}>{step.desc}</p>
          <ul className="ssc-list">
            {step.actions.map((a) => (
              <li key={a} style={{ color: theme.body }}>
                <span className="ssc-bullet" />
                {a}
              </li>
            ))}
          </ul>
          <div className="ssc-goal" style={{ background: theme.chip, color: theme.chipText }}>
            <span className="ssc-goal-label">Objectif</span>
            <span>{step.goal}</span>
          </div>
        </div>

        <div className="ssc-visual">
          <span className="ssc-num" style={{ color: theme.num }}>{String(index + 1).padStart(2, '0')}</span>
          {step.cutout ? (
            <img className="ssc-cutout" src={step.image} alt={step.title} loading="lazy" />
          ) : (
            <div className="ssc-img">
              <img src={step.image} alt={step.title} loading="lazy" />
            </div>
          )}
        </div>

        <motion.div className="ssc-shade" style={{ opacity: shade }} />
      </motion.article>
    </div>
  );
};

const StackedStepCards = ({ steps }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <div ref={containerRef} className="ssc-wrap">
      {steps.map((step, i) => (
        <StepCard key={step.title} step={step} index={i} total={steps.length} progress={scrollYProgress} />
      ))}
      <style>{`
        .ssc-wrap { position: relative; max-width: 1200px; margin: 0 auto; }
        .ssc-slot { position: sticky; height: min(560px, 78vh); margin-bottom: 14vh; }
        .ssc-slot:last-of-type { margin-bottom: 0; }
        .ssc-card {
          position: relative; height: 100%; border-radius: 28px; overflow: hidden;
          display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
          transform-origin: top center;
          box-shadow: 0 -10px 40px -12px rgba(28,43,39,0.35);
        }
        .ssc-text { position: relative; z-index: 2; padding: 3.5rem 3rem 3rem 4rem; display: flex; flex-direction: column; }
        .ssc-kicker { font-family: var(--font-allison); font-size: 2.4rem; line-height: 1; margin-bottom: 0.25rem; }
        .ssc-title { font-family: var(--font-display); font-weight: 500; font-size: clamp(2rem, 3.6vw, 3.1rem); line-height: 1.05; letter-spacing: -0.02em; margin: 0 0 1.25rem; }
        .ssc-desc { font-size: 1rem; line-height: 1.6; margin: 0 0 1.25rem; max-width: 470px; }
        .ssc-list { list-style: none; padding: 0; margin: 0 0 1.75rem; display: flex; flex-direction: column; gap: 0.55rem; }
        .ssc-list li { display: flex; align-items: center; gap: 0.7rem; font-size: 0.95rem; font-weight: 500; }
        .ssc-bullet { width: 7px; height: 7px; border-radius: 50%; background: #B08D57; flex-shrink: 0; }
        .ssc-goal { margin-top: auto; display: flex; align-items: baseline; gap: 0.9rem; padding: 0.9rem 1.2rem; border-radius: 14px; font-weight: 600; font-size: 1rem; line-height: 1.4; max-width: 500px; }
        .ssc-goal-label { flex-shrink: 0; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #B08D57; }
        .ssc-visual { position: relative; }
        .ssc-num { position: absolute; top: 1.5rem; right: 2rem; z-index: 1; font-family: var(--font-display); font-size: clamp(8rem, 16vw, 15rem); line-height: 0.9; pointer-events: none; }
        .ssc-img { position: absolute; inset: 18% 0 0 8%; border-top-left-radius: 22px; overflow: hidden; z-index: 2; box-shadow: -12px -12px 40px -16px rgba(0,0,0,0.35); }
        .ssc-img img { width: 100%; height: 100%; object-fit: cover; object-position: left top; display: block; }
        .ssc-cutout { position: absolute; right: -4%; bottom: 0; width: 110%; max-width: none; height: auto; z-index: 2; display: block; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.25)); }
        .ssc-shade { position: absolute; inset: 0; background: #0E1A17; pointer-events: none; z-index: 5; }

        @media (max-width: 860px) {
          .ssc-slot { height: auto; min-height: 0; margin-bottom: 8vh; top: calc(80px + var(--ssc-i, 0) * 12px) !important; }
          .ssc-card { grid-template-columns: 1fr; border-radius: 22px; }
          .ssc-text { padding: 2rem 1.5rem 1.5rem; }
          .ssc-kicker { font-size: 1.6rem; }
          .ssc-desc, .ssc-list li, .ssc-goal { font-size: 0.92rem; }
          .ssc-goal { flex-direction: column; gap: 0.3rem; }
          .ssc-visual { height: 150px; }
          .ssc-img { inset: 26% 0 0 12%; }
          .ssc-visual:has(.ssc-cutout) { height: auto; }
          .ssc-cutout { position: relative; width: 100%; }
          .ssc-num { font-size: 6rem; top: 0.5rem; right: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default StackedStepCards;
