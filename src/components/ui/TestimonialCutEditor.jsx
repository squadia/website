'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Scissors, X, Trash2, Play, Pause, Loader2, Eye } from 'lucide-react';
import { normalizeCuts, keptDuration, formatTime, useVideoDuration, useSkipCuts } from '@/src/lib/videoCuts';

const MIN_SELECTION = 0.2;

const btn = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
  padding: '0.55rem 0.9rem',
  borderRadius: '6px',
  border: '1px solid #D8D1C2',
  background: 'transparent',
  color: '#1C2B27',
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: 600,
};

export default function TestimonialCutEditor({ row, onClose, onSave }) {
  const videoRef = useRef(null);
  const trackRef = useRef(null);
  const duration = useVideoDuration(videoRef, row.duration_seconds);

  const [cuts, setCuts] = useState(() => normalizeCuts(row.cuts));
  const [selection, setSelection] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [preview, setPreview] = useState(false);
  const [dragging, setDragging] = useState(null);
  const [saving, setSaving] = useState(false);

  useSkipCuts(videoRef, cuts, preview && !dragging);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTime = () => setCurrentTime(video.currentTime);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener('timeupdate', onTime);
    video.addEventListener('seeked', onTime);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    return () => {
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('seeked', onTime);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  const pct = (t) => (duration ? `${(Math.min(Math.max(t, 0), duration) / duration) * 100}%` : '0%');

  const timeFromClientX = useCallback(
    (clientX) => {
      const rect = trackRef.current?.getBoundingClientRect();
      if (!rect || !duration) return 0;
      const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      return ratio * duration;
    },
    [duration]
  );

  const seek = (t) => {
    if (videoRef.current) videoRef.current.currentTime = t;
    setCurrentTime(t);
  };

  const setStart = (t) => {
    const end = selection?.end ?? Math.min(t + 2, duration || t + 2);
    setSelection({ start: Math.min(t, end - MIN_SELECTION), end });
  };

  const setEnd = (t) => {
    const start = selection?.start ?? Math.max(t - 2, 0);
    setSelection({ start, end: Math.max(t, start + MIN_SELECTION) });
  };

  const onTrackPointerDown = (e) => {
    if (!duration) return;
    const t = timeFromClientX(e.clientX);
    videoRef.current?.pause();
    seek(t);
  };

  const onHandlePointerDown = (which) => (e) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    videoRef.current?.pause();
    setDragging(which);
  };

  const onHandlePointerMove = (e) => {
    if (!dragging || !selection) return;
    const t = timeFromClientX(e.clientX);
    if (dragging === 'start') setSelection((s) => ({ ...s, start: Math.min(t, s.end - MIN_SELECTION) }));
    else setSelection((s) => ({ ...s, end: Math.max(t, s.start + MIN_SELECTION) }));
    seek(t);
  };

  const onHandlePointerUp = () => setDragging(null);

  const addCut = () => {
    if (!selection) return;
    setCuts((prev) => normalizeCuts([...prev, selection]));
    setSelection(null);
  };

  const removeCut = (index) => setCuts((prev) => prev.filter((_, i) => i !== index));

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const t = videoRef.current?.currentTime ?? 0;
      if (e.key === 'i' || e.key === 'I') setStart(t);
      else if (e.key === 'o' || e.key === 'O') setEnd(t);
      else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'Enter') addCut();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(cuts);
    } finally {
      setSaving(false);
    }
  };

  const finalDuration = keptDuration(duration, cuts);
  const initialKey = JSON.stringify(normalizeCuts(row.cuts));
  const dirty = JSON.stringify(cuts) !== initialKey;

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(28,43,39,0.262)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: '#F6F3EC', border: '1px solid #D8D1C2', borderRadius: '16px', padding: '1.5rem', width: '100%', maxWidth: '860px', maxHeight: '95vh', overflowY: 'auto', color: '#1C2B27' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Scissors size={18} color="#8A6D3B" /> Couper des scènes
            {row.label && <span style={{ color: '#4A534F', fontWeight: 500, fontSize: '0.9rem' }}>· {row.label}</span>}
          </h2>
          <button onClick={onClose} style={{ ...btn, border: 'none', padding: '0.4rem' }} aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        <video
          ref={videoRef}
          src={row.signed_url}
          playsInline
          preload="auto"
          onClick={togglePlay}
          style={{ width: '100%', maxHeight: '48vh', borderRadius: '10px', background: '#F6F3EC', display: 'block', cursor: 'pointer' }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.9rem 0 0.6rem' }}>
          <button onClick={togglePlay} style={btn}>
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: '0.85rem', color: '#4A534F' }}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <label style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: preview ? '#8A6D3B' : '#4A534F', cursor: 'pointer' }}>
            <input type="checkbox" checked={preview} onChange={(e) => setPreview(e.target.checked)} />
            <Eye size={14} /> Aperçu du montage
          </label>
        </div>

        {/* Timeline */}
        <div
          ref={trackRef}
          onPointerDown={onTrackPointerDown}
          style={{ position: 'relative', height: '56px', borderRadius: '8px', background: '#F6F3EC', border: '1px solid #D8D1C2', cursor: duration ? 'pointer' : 'wait', touchAction: 'none', userSelect: 'none' }}
        >
          {cuts.map((c, i) => (
            <div
              key={`cut-${i}`}
              title={`Coupé : ${formatTime(c.start)} → ${formatTime(c.end)}`}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: pct(c.start),
                width: `calc(${pct(c.end)} - ${pct(c.start)})`,
                background: 'repeating-linear-gradient(45deg, rgba(166,61,47,0.45) 0 6px, rgba(166,61,47,0.2) 6px 12px)',
                borderLeft: '1px solid #A63D2F',
                borderRight: '1px solid #A63D2F',
              }}
            />
          ))}

          {selection && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: pct(selection.start),
                width: `calc(${pct(selection.end)} - ${pct(selection.start)})`,
                background: 'rgba(176,141,87,0.18)',
                borderTop: '2px solid #8A6D3B',
                borderBottom: '2px solid #8A6D3B',
              }}
            >
              {['start', 'end'].map((which) => (
                <div
                  key={which}
                  onPointerDown={onHandlePointerDown(which)}
                  onPointerMove={onHandlePointerMove}
                  onPointerUp={onHandlePointerUp}
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    bottom: '-2px',
                    [which === 'start' ? 'left' : 'right']: '-7px',
                    width: '14px',
                    background: '#8A6D3B',
                    borderRadius: '4px',
                    cursor: 'ew-resize',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ width: '2px', height: '18px', background: '#F6F3EC', borderRadius: '1px' }} />
                </div>
              ))}
            </div>
          )}

          <div style={{ position: 'absolute', top: '-4px', bottom: '-4px', left: pct(currentTime), width: '2px', background: '#8A6D3B', pointerEvents: 'none', transform: 'translateX(-1px)' }} />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.9rem' }}>
          <button onClick={() => setStart(videoRef.current?.currentTime ?? 0)} disabled={!duration} style={btn}>
            [ Début ici <kbd style={{ opacity: 0.5 }}>I</kbd>
          </button>
          <button onClick={() => setEnd(videoRef.current?.currentTime ?? 0)} disabled={!duration} style={btn}>
            Fin ici ] <kbd style={{ opacity: 0.5 }}>O</kbd>
          </button>
          <button
            onClick={addCut}
            disabled={!selection}
            style={{ ...btn, background: selection ? '#FFFFFF' : 'transparent', border: selection ? 'none' : btn.border, opacity: selection ? 1 : 0.5, cursor: selection ? 'pointer' : 'not-allowed' }}
          >
            <Scissors size={14} /> Supprimer ce bloc
            {selection && <span style={{ fontWeight: 400, opacity: 0.8 }}>({formatTime(selection.start)} → {formatTime(selection.end)})</span>}
          </button>
          {selection && (
            <button onClick={() => setSelection(null)} style={{ ...btn, color: '#4A534F' }}>
              Annuler la sélection
            </button>
          )}
        </div>

        <p style={{ color: '#6B716C', fontSize: '0.78rem', marginTop: '0.6rem' }}>
          Lancez la vidéo, placez le début (I) puis la fin (O) de la scène à retirer, ajustez les poignées bleues, puis « Supprimer ce bloc » (Entrée). La vidéo d'origine n'est pas modifiée&nbsp;: les passages coupés sont simplement sautés à la lecture.
        </p>

        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Coupures ({cuts.length})
            <span style={{ color: '#4A534F', fontWeight: 500, marginLeft: '0.5rem' }}>
              Durée finale&nbsp;: {formatTime(finalDuration)}
            </span>
          </h3>
          {cuts.length === 0 && <p style={{ color: '#6B716C', fontSize: '0.85rem' }}>Aucune coupure pour l'instant.</p>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {cuts.map((c, i) => (
              <div key={`row-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.45rem 0.7rem', border: '1px solid #D8D1C2', borderRadius: '6px', fontSize: '0.85rem' }}>
                <button onClick={() => seek(c.start)} style={{ ...btn, border: 'none', padding: 0, color: '#A63D2F', fontVariantNumeric: 'tabular-nums' }}>
                  {formatTime(c.start)} → {formatTime(c.end)}
                </button>
                <span style={{ color: '#6B716C' }}>−{formatTime(c.end - c.start)}</span>
                <button onClick={() => { setSelection(c); removeCut(i); }} style={{ ...btn, border: 'none', padding: '0.2rem 0.4rem', marginLeft: 'auto', color: '#4A534F', fontSize: '0.8rem' }}>
                  Modifier
                </button>
                <button onClick={() => removeCut(i)} style={{ ...btn, border: 'none', padding: '0.2rem 0.4rem', color: '#A63D2F' }} aria-label="Retirer la coupure">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.5rem' }}>
          <button onClick={onClose} style={{ ...btn, color: '#4A534F' }}>Fermer</button>
          <button
            onClick={handleSave}
            disabled={!dirty || saving}
            style={{ ...btn, border: 'none', background: dirty ? '#3F7A5E' : '#FFFFFF', opacity: dirty ? 1 : 0.6, cursor: dirty ? 'pointer' : 'not-allowed' }}
          >
            {saving && <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />} Enregistrer le montage
          </button>
        </div>
      </div>
    </div>
  );
}
