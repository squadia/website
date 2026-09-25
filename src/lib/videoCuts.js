import { useEffect, useState } from 'react';

// Coupures non destructives : la vidéo stockée reste intacte, les lecteurs
// sautent les segments [{ start, end }] (en secondes) au moment de la lecture.

const END_EPSILON = 0.05;
// Le navigateur atterrit parfois quelques ms avant la cible d'un seek :
// on vise un peu après la fin de coupure pour ne pas reboucler dessus.
const SEEK_MARGIN = 0.05;

export function normalizeCuts(cuts) {
  const sorted = (cuts || [])
    .filter((c) => Number.isFinite(c?.start) && Number.isFinite(c?.end) && c.end > c.start)
    .map((c) => ({ start: Math.max(0, c.start), end: c.end }))
    .sort((a, b) => a.start - b.start);

  const merged = [];
  for (const cut of sorted) {
    const last = merged[merged.length - 1];
    if (last && cut.start <= last.end) last.end = Math.max(last.end, cut.end);
    else merged.push({ ...cut });
  }
  return merged;
}

export function keptDuration(duration, cuts) {
  if (!Number.isFinite(duration)) return null;
  const removed = normalizeCuts(cuts).reduce(
    (sum, c) => sum + Math.max(0, Math.min(c.end, duration) - Math.min(c.start, duration)),
    0
  );
  return Math.max(0, duration - removed);
}

export function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '--:--';
  const total = Math.max(0, seconds);
  const m = Math.floor(total / 60);
  const s = Math.floor(total % 60);
  const d = Math.floor((total % 1) * 10);
  return `${m}:${String(s).padStart(2, '0')}.${d}`;
}

// Les webm issus de MediaRecorder n'ont souvent pas de durée (Infinity) :
// forcer un seek très loin oblige le navigateur à la calculer.
export function useVideoDuration(videoRef, fallback) {
  const [duration, setDuration] = useState(Number(fallback) || null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let probing = false;

    const read = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        setDuration(video.duration);
        if (probing) {
          probing = false;
          video.currentTime = 0;
        }
      }
    };

    const onMetadata = () => {
      if (!Number.isFinite(video.duration)) {
        probing = true;
        video.currentTime = 1e101;
      } else {
        read();
      }
    };

    video.addEventListener('loadedmetadata', onMetadata);
    video.addEventListener('durationchange', read);
    if (video.readyState >= 1) onMetadata();
    return () => {
      video.removeEventListener('loadedmetadata', onMetadata);
      video.removeEventListener('durationchange', read);
    };
  }, [videoRef]);

  return duration;
}

// Saute les coupures pendant la lecture. rAF en priorité car timeupdate (≈4 Hz)
// laisserait passer jusqu'à un quart de seconde de scène coupée.
export function useSkipCuts(videoRef, cuts, enabled = true) {
  const key = JSON.stringify(cuts || []);

  useEffect(() => {
    const video = videoRef.current;
    const list = normalizeCuts(JSON.parse(key));
    if (!video || !enabled || list.length === 0) return;

    let frame = null;

    const check = () => {
      if (video.seeking) return;
      const t = video.currentTime;
      const cut = list.find((c) => t >= c.start && t < c.end);
      if (cut) {
        const duration = video.duration;
        if (Number.isFinite(duration) && cut.end >= duration - END_EPSILON) {
          if (video.loop) video.currentTime = 0;
          else {
            video.pause();
            video.currentTime = Math.max(0, cut.start - 0.01);
          }
        } else {
          video.currentTime = Math.min(cut.end + SEEK_MARGIN, duration || Infinity);
        }
      }
    };

    const tick = () => {
      check();
      frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (frame === null) frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    };

    video.addEventListener('play', start);
    video.addEventListener('pause', stop);
    video.addEventListener('ended', stop);
    video.addEventListener('seeked', check);
    // Filet de sécurité : rAF est gelé quand l'onglet est en arrière-plan.
    video.addEventListener('timeupdate', check);
    if (!video.paused) start();

    return () => {
      stop();
      video.removeEventListener('play', start);
      video.removeEventListener('pause', stop);
      video.removeEventListener('ended', stop);
      video.removeEventListener('seeked', check);
      video.removeEventListener('timeupdate', check);
    };
  }, [videoRef, key, enabled]);
}
