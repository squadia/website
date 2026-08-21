'use client';

import { motion, useSpring, useTransform } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';

// ─── Defaults ────────────────────────────────────────────────────────────────

const fmtVal = (v) => v.toLocaleString('fr-FR');

const springConfig = { stiffness: 120, damping: 20, mass: 1 };
const hoverSpring = { stiffness: 300, damping: 24 };

// ─── SVG Helpers ─────────────────────────────────────────────────────────────

function hSegmentPath(normStart, normEnd, segW, H, layerScale, straight = false) {
  const my = H / 2;
  const h0 = normStart * H * 0.44 * layerScale;
  const h1 = normEnd * H * 0.44 * layerScale;

  if (straight) {
    return `M 0 ${my - h0} L ${segW} ${my - h1} L ${segW} ${my + h1} L 0 ${my + h0} Z`;
  }

  const cx = segW * 0.55;
  const top = `M 0 ${my - h0} C ${cx} ${my - h0}, ${segW - cx} ${my - h1}, ${segW} ${my - h1}`;
  const bot = `L ${segW} ${my + h1} C ${segW - cx} ${my + h1}, ${cx} ${my + h0}, 0 ${my + h0}`;
  return `${top} ${bot} Z`;
}

// ─── Animated Ring ───────────────────────────────────────────────────────────

function HRing({ d, color, fill, opacity, hovered, ringIndex, totalRings }) {
  const extraScale = 1 + (ringIndex / Math.max(totalRings - 1, 1)) * 0.12;
  const ringSpring = { stiffness: 300 - ringIndex * 60, damping: 24 - ringIndex * 3 };
  const scaleY = useSpring(1, ringSpring);

  useEffect(() => {
    scaleY.set(hovered ? extraScale : 1);
  }, [hovered, scaleY, extraScale]);

  return (
    <motion.path
      d={d}
      fill={fill ?? color}
      opacity={opacity}
      style={{ scaleY, transformOrigin: 'center center' }}
    />
  );
}

// ─── Animated Segment ────────────────────────────────────────────────────────

function HSegment({
  index, normStart, normEnd, segW, fullH, color, layers, staggerDelay,
  hovered, dimmed, straight, gradientStops,
}) {
  const gradientId = `funnel-h-grad-${index}`;
  const growProgress = useSpring(0, springConfig);
  const entranceScaleX = useTransform(growProgress, [0, 1], [0, 1]);
  const entranceScaleY = useTransform(growProgress, [0, 1], [0, 1]);
  const dimOpacity = useSpring(1, hoverSpring);

  useEffect(() => {
    dimOpacity.set(dimmed ? 0.4 : 1);
  }, [dimmed, dimOpacity]);

  useEffect(() => {
    const timeout = setTimeout(() => growProgress.set(1), index * staggerDelay * 1000);
    return () => clearTimeout(timeout);
  }, [growProgress, index, staggerDelay]);

  const rings = Array.from({ length: layers }, (_, l) => {
    const scale = 1 - (l / layers) * 0.35;
    const opacity = 0.18 + (l / (layers - 1 || 1)) * 0.65;
    return { d: hSegmentPath(normStart, normEnd, segW, fullH, scale, straight), opacity };
  });

  return (
    <motion.div
      style={{
        position: 'relative',
        flexShrink: 0,
        overflow: 'visible',
        pointerEvents: 'none',
        width: segW,
        height: fullH,
        zIndex: hovered ? 10 : 1,
        opacity: dimOpacity,
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'visible',
          scaleX: entranceScaleX,
          scaleY: entranceScaleY,
          transformOrigin: 'left center',
        }}
      >
        <svg
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
          preserveAspectRatio="none"
          role="presentation"
          viewBox={`0 0 ${segW} ${fullH}`}
        >
          <defs>
            {gradientStops && (
              <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
                {gradientStops.map((stop) => (
                  <stop
                    key={`${stop.offset}-${stop.color}`}
                    offset={typeof stop.offset === 'number' ? `${stop.offset * 100}%` : stop.offset}
                    stopColor={stop.color}
                  />
                ))}
              </linearGradient>
            )}
          </defs>
          {rings.map((r, i) => {
            const isInnermost = i === rings.length - 1;
            const ringFill = isInnermost && gradientStops ? `url(#${gradientId})` : undefined;
            return (
              <HRing
                color={color}
                d={r.d}
                fill={ringFill}
                hovered={hovered}
                key={`h-ring-${r.opacity.toFixed(2)}`}
                opacity={r.opacity}
                ringIndex={i}
                totalRings={layers}
              />
            );
          })}
        </svg>
      </motion.div>
    </motion.div>
  );
}

// ─── Label Overlay ───────────────────────────────────────────────────────────

function SegmentLabel({ stage, showValues, showLabels, formatValue, index, staggerDelay }) {
  const display = stage.displayValue ?? formatValue(stage.value);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: index * staggerDelay + 0.25, duration: 0.35, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '0.5rem',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
        {showValues && (
          <span style={{ whiteSpace: 'nowrap', fontWeight: 700, color: '#FFFFFF', fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)' }}>
            {display}
          </span>
        )}
        {showLabels && (
          <span style={{ whiteSpace: 'nowrap', fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.55)' }}>
            {stage.label}
          </span>
        )}
        {stage.sub && (
          <span style={{ whiteSpace: 'nowrap', fontSize: '0.75rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.35)' }}>
            {stage.sub}
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ─── FunnelChart ─────────────────────────────────────────────────────────────

export function FunnelChart({
  data,
  color = '#44CCFF',
  layers = 3,
  style,
  showValues = true,
  showLabels = true,
  hoveredIndex: hoveredIndexProp,
  onHoverChange,
  formatValue = fmtVal,
  staggerDelay = 0.15,
  gap = 4,
  edges = 'curved',
  timeline,
}) {
  const ref = useRef(null);
  const [sz, setSz] = useState({ w: 0, h: 0 });
  const [internalHoveredIndex, setInternalHoveredIndex] = useState(null);

  const isControlled = hoveredIndexProp !== undefined;
  const hoveredIndex = isControlled ? hoveredIndexProp : internalHoveredIndex;
  const setHoveredIndex = useCallback(
    (index) => {
      if (isControlled) {
        onHoverChange?.(index);
      } else {
        setInternalHoveredIndex(index);
      }
    },
    [isControlled, onHoverChange]
  );

  const measure = useCallback(() => {
    if (!ref.current) return;
    const { width: w, height: h } = ref.current.getBoundingClientRect();
    if (w > 0 && h > 0) {
      setSz((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    }
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [measure]);

  if (!data.length) return null;

  const first = data[0];
  if (!first) return null;

  const max = first.value;
  const n = data.length;
  const norms = data.map((d) => d.value / max);
  const { w: W, h: H } = sz;

  const totalGap = gap * (n - 1);
  const segW = (W - totalGap) / n;

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        userSelect: 'none',
        overflow: 'visible',
        aspectRatio: '2.4 / 1',
        ...style,
      }}
    >
      {W > 0 && H > 0 && (
        <>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'row', overflow: 'visible', gap }}>
            {data.map((stage, i) => {
              const normStart = norms[i] ?? 0;
              const normEnd = norms[Math.min(i + 1, n - 1)] ?? 0;
              const firstStop = stage.gradient?.[0];
              const segColor = firstStop ? firstStop.color : (stage.color ?? color);

              return (
                <HSegment
                  color={segColor}
                  dimmed={hoveredIndex !== null && hoveredIndex !== i}
                  fullH={H}
                  gradientStops={stage.gradient}
                  hovered={hoveredIndex === i}
                  index={i}
                  key={stage.label}
                  layers={layers}
                  normEnd={normEnd}
                  normStart={normStart}
                  segW={segW}
                  staggerDelay={staggerDelay}
                  straight={edges === 'straight'}
                />
              );
            })}
          </div>

          {data.map((stage, i) => {
            const posStyle = { left: (segW + gap) * i, width: segW, top: 0, height: H };
            const isDimmed = hoveredIndex !== null && hoveredIndex !== i;

            return (
              <motion.div
                animate={{ opacity: isDimmed ? 0.4 : 1 }}
                key={`lbl-${stage.label}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ position: 'absolute', cursor: 'pointer', ...posStyle, zIndex: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <SegmentLabel
                  formatValue={formatValue}
                  index={i}
                  showLabels={showLabels}
                  showValues={showValues}
                  stage={stage}
                  staggerDelay={staggerDelay}
                />
              </motion.div>
            );
          })}

          {timeline && timeline.length > 0 && (() => {
            const boundaryX = (k) => (k <= 0 ? 0 : k >= n ? (segW + gap) * n - gap : k * segW + (k - 1) * gap);
            const marks = [0, ...timeline.map((t) => t.atIndex)];
            const totalW = boundaryX(n);
            return (
              <div style={{ position: 'absolute', left: 0, top: H + 22, width: totalW, height: 32 }}>
                <div style={{ position: 'absolute', left: 0, top: 0, width: totalW, height: 1, background: 'rgba(255,255,255,0.18)' }} />
                {marks.map((m, i) => (
                  <div key={i} style={{ position: 'absolute', left: boundaryX(m), top: -4, width: 1, height: 9, background: 'rgba(255,255,255,0.35)', transform: 'translateX(-0.5px)' }} />
                ))}
                {timeline.map((t, i) => {
                  const x0 = boundaryX(marks[i]);
                  const x1 = boundaryX(marks[i + 1]);
                  const midX = (x0 + x1) / 2;
                  return (
                    <span
                      key={i}
                      style={{
                        position: 'absolute', left: midX, top: 10, transform: 'translateX(-50%)',
                        fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap',
                      }}
                    >
                      {t.label}
                    </span>
                  );
                })}
            </div>
            );
          })()}
        </>
      )}
    </div>
  );
}

FunnelChart.displayName = 'FunnelChart';

export default FunnelChart;
