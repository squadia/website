'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Download, Loader2, ChevronLeft, ChevronRight, AlertTriangle, Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { hasAnalyticsConsent } from '../CookieConsent';

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
 *  - videoMode (string)           'overlay' (défaut : boutons sur la vidéo) ou 'below' (lecteur sous la vidéo,
 *                                 plein écran/PiP/menu contextuel désactivés, préchargement différé)
 *  - videoMask (object)           {color, rects:[{top,left,width,height}]} en % de l'image vidéo : pastilles de couleur
 *                                 unie posées sur les coins pour cacher un watermark (fond uni uniquement)
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
  videoMode = 'overlay',
  videoMask = null,
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
  const maskCanvasRef = useRef(null);
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
  const [videoMuted, setVideoMuted] = useState(false);
  const [videoTime, setVideoTime] = useState({ current: 0, duration: 0 });

  const videoPageIndex = videoPage ? videoPage - 1 : null; // 0-indexed pour matcher l'event page-flip

  const track = useCallback((event, data = {}) => {
    const payload = { event, trackingId, title, ...data };
    console.log('[flipbook]', payload);
    if (typeof window !== 'undefined' && hasAnalyticsConsent()) {
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

  // Vidéo avec watermark : on la redessine dans un canvas et on remplit les coins avec une couleur
  // échantillonnée dans l'image elle-même (un hex CSS ne colle jamais exactement à la vidéo décodée).
  useEffect(() => {
    if (status !== 'ready' || !videoMask) return undefined;
    let raf;
    let lastKey = '';
    const draw = () => {
      raf = requestAnimationFrame(draw);
      const video = videoRef.current;
      const canvas = maskCanvasRef.current;
      if (!video || !canvas || video.readyState < 2 || !video.videoWidth) return;
      const key = `${video.currentTime}|${video.videoWidth}`;
      if (key === lastKey) return;
      lastKey = key;
      const w = video.videoWidth;
      const h = video.videoHeight;
      if (canvas.width !== w) { canvas.width = w; canvas.height = h; }
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(video, 0, 0, w, h);
      const [r, g, b] = ctx.getImageData(Math.round(w / 2), 6, 1, 1).data;
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      videoMask.rects.forEach((rect) => {
        ctx.fillRect((rect.left / 100) * w, (rect.top / 100) * h, (rect.width / 100) * w, (rect.height / 100) * h);
      });
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [status, videoMask]);

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

  const toggleVideoMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
  };

  const seekVideo = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !video.duration) return;
    video.currentTime = (Number(e.target.value) / 1000) * video.duration;
  };

  const formatTime = (t) => {
    if (!Number.isFinite(t)) return '0:00';
    const m = Math.floor(t / 60);
    const sec = String(Math.floor(t % 60)).padStart(2, '0');
    return `${m}:${sec}`;
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
        <h2 className="text-[#4A534F] text-base md:text-lg font-medium m-0">{title}</h2>

        {status === 'ready' && (
          <span className="text-sm text-[#6B716C]">
            Page {pageInfo.current} / {pageInfo.total}
          </span>
        )}

        <a
          href={downloadUrl || pdfUrl}
          download
          onClick={handleDownload}
          className="inline-flex items-center gap-2 text-sm text-[#4A534F] hover:text-[#1C2B27] transition-colors no-underline"
        >
          <Download size={15} /> Télécharger le PDF
        </a>
      </div>

      {status === 'ready' && showHint && (
        <p className="flipbook-hint w-full px-2 text-[#1C2B27] font-bold text-sm md:text-base m-0">
          CLIQUEZ sur le document pour animer les pages
        </p>
      )}

      <div className="relative w-full flex items-center justify-center min-h-[420px]">
        {status === 'loading' && (
          <div className="flex flex-col items-center gap-3 text-[#4A534F]">
            <Loader2 size={32} className="animate-spin" />
            <span className="text-sm">Chargement du document… {progress}%</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center gap-3 text-center max-w-md">
            <AlertTriangle size={32} color="#A63D2F" />
            <p className="text-[#A63D2F] text-sm">
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
                {/* Bouton "Calculer ROI" sur la page 2 */}
                {i === 1 && (
                  <button
                    type="button"
                    onClick={() => window.location.href = 'https://www.squadia.io/ressources/simulateur-roi/'}
                    style={{
                      position: 'absolute',
                      top: '13%',
                      left: '72%',
                      transform: 'translateX(-50%)',
                      width: '180px',
                      height: '50px',
                      cursor: 'pointer',
                      zIndex: 10,
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                    }}
                    aria-label="Calculer ROI"
                  />
                )}
                {/* Bouton "Préparons son arrivée" sur la dernière page */}
                {i === pages.length - 1 && (
                  <button
                    type="button"
                    onClick={() => window.location.href = '/contact/'}
                    style={{
                      position: 'absolute',
                      top: '26%',
                      left: '15%',
                      transform: 'translateX(-50%)',
                      width: '160px',
                      height: '45px',
                      cursor: 'pointer',
                      zIndex: 10,
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                    }}
                    aria-label="Préparons son arrivée"
                  />
                )}
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
                    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '4%', background: '#000' }}>
                      <div style={{ position: 'absolute', inset: 0 }}>
                        <video
                          ref={videoRef}
                          src={videoSrc}
                          playsInline
                          loop
                          preload={videoMode === 'below' && pageInfo.current < videoPage - 2 ? 'none' : 'auto'}
                          {...(videoMode === 'below' ? {
                            controlsList: 'nodownload nofullscreen noremoteplayback',
                            disablePictureInPicture: true,
                            disableRemotePlayback: true,
                            onContextMenu: (e) => e.preventDefault(),
                          } : {})}
                          onPlay={() => setVideoPlaying(true)}
                          onPause={() => setVideoPlaying(false)}
                          onVolumeChange={(e) => setVideoMuted(e.currentTarget.muted)}
                          onTimeUpdate={(e) => setVideoTime({ current: e.currentTarget.currentTime, duration: e.currentTarget.duration })}
                          style={{
                            width: '100%',
                            height: '100%',
                            maxWidth: 'none',
                            objectFit: 'cover',
                            display: 'block',
                            pointerEvents: videoMode === 'below' ? 'none' : 'auto',
                            ...(videoMask ? { position: 'absolute', inset: 0, opacity: 0 } : {}),
                          }}
                        />
                        {videoMask && (
                          <canvas
                            ref={maskCanvasRef}
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
                          />
                        )}
                      </div>
                    </div>
                    {videoMode === 'below' ? (
                      <div
                        onMouseDown={stopFlipGesture}
                        onMouseUp={stopFlipGesture}
                        onTouchStart={stopFlipGesture}
                        onTouchEnd={stopFlipGesture}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          marginTop: '2.5%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <button
                          type="button"
                          onClick={toggleVideoPlay}
                          aria-label={videoPlaying ? 'Mettre la vidéo en pause' : 'Lancer la vidéo'}
                          className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#1F3A33] hover:bg-[#16302A] text-[#F6F3EC] transition-colors"
                        >
                          {videoPlaying ? <Pause size={14} /> : <Play size={14} />}
                        </button>
                        <button
                          type="button"
                          onClick={toggleVideoMute}
                          aria-label={videoMuted ? 'Activer le son' : 'Couper le son'}
                          className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#1F3A33] hover:bg-[#16302A] text-[#F6F3EC] transition-colors"
                        >
                          {videoMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                        </button>
                        <input
                          type="range"
                          min={0}
                          max={1000}
                          value={videoTime.duration ? Math.round((videoTime.current / videoTime.duration) * 1000) : 0}
                          onChange={seekVideo}
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Position dans la vidéo"
                          style={{ flex: 1, minWidth: 0, accentColor: '#1F3A33', height: '4px' }}
                        />
                        <span style={{ fontSize: '11px', color: '#4A534F', fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>
                          {formatTime(videoTime.current)} / {formatTime(videoTime.duration)}
                        </span>
                      </div>
                    ) : (
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
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1F3A33] hover:bg-[#16302A] text-[#F6F3EC] transition-colors shadow-lg"
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
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1F3A33] hover:bg-[#16302A] text-[#F6F3EC] transition-colors shadow-lg"
                      >
                        <RotateCcw size={16} />
                      </button>
                    </div>
                    )}
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
              className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-white text-[#1C2B27] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Page suivante"
              className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-white text-[#1C2B27] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
