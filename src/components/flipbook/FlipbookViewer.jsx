'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Download, Loader2, ChevronLeft, ChevronRight, AlertTriangle, Play, Pause, RotateCcw } from 'lucide-react';

/**
 * Flipbook PDF autonome (remplace Heyzine) : PDF.js pour le rendu des pages,
 * page-flip (port JS de StPageFlip) pour l'effet de pages qui tournent.
 *
 * Props :
 *  - pdfUrl (string, requis)      chemin du PDF dans /public
 *  - downloadUrl (string)         défaut = pdfUrl
 *  - title (string)               utilisé pour l'alt text et le nom de téléchargement
 *  - videoPage (number)           page (1-indexée) où la vidéo doit s'auto-jouer
 *  - videoSrc (string)            chemin de la vidéo dans /public
 *  - videoRect (object)           {top,left,width,height} en % — zone couverte par la vidéo sur la page (défaut : pleine page)
 *  - trackingId (string)          identifiant envoyé aux events de tracking
 *  - onPageFlip(pageNumber)       callback optionnel, en plus du tracking par défaut
 *  - onDownload()                 callback optionnel, en plus du tracking par défaut
 *  - enableSound (bool)           joue un bruit de page tournée à chaque flip (défaut true)
 *  - soundSrc (string)            chemin du son de page tournée (défaut /flipbooks/booksound.mp3)
 */
export default function FlipbookViewer({
  pdfUrl,
  downloadUrl,
  title = 'Document',
  videoPage = null,
  videoSrc = null,
  videoRect = { top: 0, left: 0, width: 100, height: 100 },
  trackingId,
  onPageFlip,
  onDownload,
  enableSound = true,
  soundSrc = '/flipbooks/booksound.mp3',
}) {
  const containerRef = useRef(null);
  const pageFlipRef = useRef(null);
  const videoRef = useRef(null);
  const flipAudioRef = useRef(null);
  const flipSoundTimersRef = useRef([]);
  const isInitialFlipRef = useRef(true);

  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [progress, setProgress] = useState(0);
  const [pages, setPages] = useState([]); // dataURLs
  const [pageInfo, setPageInfo] = useState({ current: 1, total: 0 });
  const [errorMessage, setErrorMessage] = useState('');
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const videoPageIndex = videoPage ? videoPage - 1 : null; // 0-indexed pour matcher l'event page-flip

  const track = useCallback((event, data = {}) => {
    const payload = { event, trackingId, title, ...data };
    console.log('[flipbook]', payload);
    if (typeof window !== 'undefined') {
      if (typeof window.gtag === 'function') {
        window.gtag('event', event, payload);
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: `flipbook_${event}`, ...payload });
      }
    }
  }, [trackingId, title]);

  // Bruit de page tournée, joué depuis /public/flipbooks/booksound.mp3.
  // Le fichier dure ~1s ; on ne garde que le début (fondu de sortie) pour
  // matcher le rythme rapide d'une page qui tourne (~450ms).
  const FLIP_SOUND_PLAY_MS = 450;
  const FLIP_SOUND_FADE_MS = 120;
  const FLIP_SOUND_BASE_VOLUME = 0.5;

  const playFlipSound = useCallback(() => {
    if (!enableSound || typeof window === 'undefined') return;
    try {
      flipSoundTimersRef.current.forEach(clearTimeout);
      flipSoundTimersRef.current = [];

      let audio = flipAudioRef.current;
      if (!audio) {
        audio = new Audio(soundSrc);
        flipAudioRef.current = audio;
      }
      audio.currentTime = 0;
      audio.volume = FLIP_SOUND_BASE_VOLUME;
      audio.play().catch(() => {});

      const fadeStart = FLIP_SOUND_PLAY_MS - FLIP_SOUND_FADE_MS;
      const fadeSteps = 6;
      for (let i = 1; i <= fadeSteps; i += 1) {
        const t = setTimeout(() => {
          audio.volume = Math.max(0, FLIP_SOUND_BASE_VOLUME * (1 - i / fadeSteps));
        }, fadeStart + (FLIP_SOUND_FADE_MS * i) / fadeSteps);
        flipSoundTimersRef.current.push(t);
      }
      flipSoundTimersRef.current.push(
        setTimeout(() => { audio.pause(); }, FLIP_SOUND_PLAY_MS)
      );
    } catch {
      // Best-effort : un son manqué n'empêche pas la lecture du flipbook.
    }
  }, [enableSound, soundSrc]);

  // 1) Rendu des pages PDF -> images (dataURL) via PDF.js
  useEffect(() => {
    let cancelled = false;

    async function renderPdf() {
      try {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url
        ).toString();

        const pdf = await pdfjsLib.getDocument({ url: pdfUrl }).promise;
        if (cancelled) return;

        const images = [];
        for (let i = 1; i <= pdf.numPages; i += 1) {
          const page = await pdf.getPage(i);
          const baseViewport = page.getViewport({ scale: 1 });
          const scale = Math.min(2.2, 1400 / baseViewport.width);
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext('2d');
          await page.render({ canvasContext: ctx, viewport }).promise;

          images.push({
            src: canvas.toDataURL('image/jpeg', 0.85),
            width: viewport.width,
            height: viewport.height,
          });

          if (!cancelled) setProgress(Math.round((i / pdf.numPages) * 100));
        }

        if (!cancelled) {
          setPages(images);
          setStatus('ready');
        }
      } catch (err) {
        if (!cancelled) {
          setErrorMessage(err?.message || 'Erreur inconnue');
          setStatus('error');
        }
      }
    }

    renderPdf();
    return () => { cancelled = true; };
  }, [pdfUrl]);

  // Message "cliquez pour animer" : clignote puis disparaît (voir @keyframes
  // flipHintBlink dans index.css), ou disparaît dès que l'utilisateur tourne
  // une page.
  useEffect(() => {
    if (status !== 'ready') return;
    const t = setTimeout(() => setShowHint(false), 2400);
    return () => clearTimeout(t);
  }, [status]);

  useEffect(() => () => {
    flipSoundTimersRef.current.forEach(clearTimeout);
    flipAudioRef.current?.pause?.();
  }, []);

  // 2) Initialisation de page-flip une fois les pages rendues
  useEffect(() => {
    if (status !== 'ready' || pages.length === 0 || !containerRef.current) return;
    let pageFlip;
    let disposed = false;

    (async () => {
      const { PageFlip } = await import('page-flip');
      if (disposed) return;

      const first = pages[0];
      const aspect = first.height / first.width;
      const baseWidth = 560;

      pageFlip = new PageFlip(containerRef.current, {
        width: baseWidth,
        height: Math.round(baseWidth * aspect),
        size: 'stretch',
        minWidth: 280,
        maxWidth: 1400,
        minHeight: 360,
        maxHeight: 1800,
        showCover: true,
        usePortrait: true,
        maxShadowOpacity: 0.5,
        mobileScrollSupport: false,
        useMouseEvents: true,
      });

      const pageEls = containerRef.current.querySelectorAll('.flipbook-page');
      pageFlip.loadFromHTML(pageEls);
      pageFlipRef.current = pageFlip;
      setPageInfo({ current: 1, total: pages.length });

      pageFlip.on('flip', (e) => {
        const newIndex = e.data;
        const pageNumber = newIndex + 1;
        setPageInfo({ current: pageNumber, total: pages.length });

        // page-flip émet un premier 'flip' dès l'init (page 1 affichée),
        // avant toute interaction — on l'ignore pour le son/tracking/hint.
        if (isInitialFlipRef.current) {
          isInitialFlipRef.current = false;
          return;
        }

        setShowHint(false);
        playFlipSound();
        track('page_turn', { page: pageNumber, totalPages: pages.length });
        onPageFlip?.(pageNumber);

        const video = videoRef.current;
        if (video && videoPageIndex !== null) {
          if (newIndex === videoPageIndex) {
            video.currentTime = 0;
            video.muted = false;
            video.play().catch(() => {
              // Politique autoplay du navigateur : repli silencieux, le
              // bouton play permet de relancer avec le son (vrai clic).
              video.muted = true;
              video.play().catch(() => {});
            });
          } else {
            video.pause();
          }
        }
      });
    })();

    return () => {
      disposed = true;
      pageFlipRef.current?.destroy?.();
      pageFlipRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, pages]);

  const goPrev = () => pageFlipRef.current?.flipPrev();
  const goNext = () => pageFlipRef.current?.flipNext();

  const toggleVideoPlay = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = false; // vrai clic utilisateur : le son est autorisé
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const restartVideo = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = false;
    video.play().catch(() => {});
    track('video_restart', { page: (videoPageIndex ?? 0) + 1 });
  };

  // page-flip démarre/termine son geste de tournage sur mousedown/touchstart
  // (sur le conteneur) et mouseup/touchend (sur window) — stopPropagation
  // sur le seul 'click' ne suffit pas à l'empêcher de tourner la page.
  const stopFlipGesture = (e) => e.stopPropagation();

  const handleDownload = () => {
    track('download', { url: downloadUrl || pdfUrl });
    onDownload?.();
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="w-full flex flex-wrap items-center gap-x-6 gap-y-2 px-2">
        <h2 className="text-gray-300 text-base md:text-lg font-medium m-0">{title}</h2>

        {status === 'ready' && (
          <span className="text-sm text-gray-400">
            Page {pageInfo.current} / {pageInfo.total}
          </span>
        )}

        <a
          href={downloadUrl || pdfUrl}
          download
          onClick={handleDownload}
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors no-underline"
        >
          <Download size={15} /> Télécharger le PDF
        </a>
      </div>

      {status === 'ready' && showHint && (
        <p className="flipbook-hint w-full px-2 text-white font-bold text-sm md:text-base m-0">
          CLIQUEZ sur le document pour animer les pages
        </p>
      )}

      <div className="relative w-full flex items-center justify-center min-h-[420px]">
        {status === 'loading' && (
          <div className="flex flex-col items-center gap-3 text-gray-300">
            <Loader2 size={32} className="animate-spin" />
            <span className="text-sm">Chargement du document… {progress}%</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center gap-3 text-center max-w-md">
            <AlertTriangle size={32} color="#EF4444" />
            <p className="text-red-400 text-sm">
              Impossible de charger le document ({errorMessage}). Réessayez ou téléchargez le PDF directement.
            </p>
          </div>
        )}

        {/* Le conteneur page-flip prend le relais du DOM une fois initialisé */}
        <div
          className="flipbook-container"
          ref={containerRef}
          style={{ visibility: status === 'ready' ? 'visible' : 'hidden' }}
        >
          {pages.map((pageImg, i) => (
            <div className="flipbook-page" key={i} data-density={i === 0 || i === pages.length - 1 ? 'hard' : 'soft'}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={pageImg.src}
                  alt={`${title} — page ${i + 1}`}
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
                {videoPageIndex !== null && i === videoPageIndex && videoSrc && (
                  <div
                    style={{
                      position: 'absolute',
                      top: `${videoRect.top}%`,
                      left: `${videoRect.left}%`,
                      width: `${videoRect.width}%`,
                      height: `${videoRect.height}%`,
                    }}
                  >
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      playsInline
                      loop
                      onPlay={() => setVideoPlaying(true)}
                      onPause={() => setVideoPlaying(false)}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '2%',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '10px',
                      }}
                    >
                      <button
                        type="button"
                        onClick={toggleVideoPlay}
                        onMouseDown={stopFlipGesture}
                        onMouseUp={stopFlipGesture}
                        onTouchStart={stopFlipGesture}
                        onTouchEnd={stopFlipGesture}
                        aria-label={videoPlaying ? 'Mettre la vidéo en pause' : 'Lancer la vidéo'}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-black/85 text-white transition-colors shadow-lg"
                      >
                        {videoPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                      <button
                        type="button"
                        onClick={restartVideo}
                        onMouseDown={stopFlipGesture}
                        onMouseUp={stopFlipGesture}
                        onTouchStart={stopFlipGesture}
                        onTouchEnd={stopFlipGesture}
                        aria-label="Rejouer la vidéo depuis le début"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-black/85 text-white transition-colors shadow-lg"
                      >
                        <RotateCcw size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {status === 'ready' && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Page précédente"
              className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Page suivante"
              className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
