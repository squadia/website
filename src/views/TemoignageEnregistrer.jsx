'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Video, Circle, Square, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { uploadTestimonial } from '@/src/lib/testimonials';
import { NOTION_RESOURCE_URL, MAX_RECORDING_SECONDS } from '@/src/lib/testimonialsConfig';

const CANDIDATE_MIME_TYPES = [
  'video/webm;codecs=vp9,opus',
  'video/webm;codecs=vp8,opus',
  'video/webm',
  'video/mp4',
];

function pickSupportedMimeType() {
  if (typeof MediaRecorder === 'undefined') return null;
  return CANDIDATE_MIME_TYPES.find((type) => MediaRecorder.isTypeSupported(type)) || '';
}

const TemoignageEnregistrer = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const blobRef = useRef(null);

  const [step, setStep] = useState('idle'); // idle | ready | recording | uploading | done | error
  const [errorMessage, setErrorMessage] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia || pickSupportedMimeType() === null) {
      setUnsupported(true);
    }
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      clearInterval(timerRef.current);
    };
  }, []);

  const enableCamera = async () => {
    setErrorMessage('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStep('ready');
    } catch (err) {
      setErrorMessage("Impossible d'accéder à votre caméra et micro. Vérifiez les autorisations de votre navigateur puis réessayez.");
      setStep('error');
    }
  };

  const startRecording = () => {
    const stream = streamRef.current;
    if (!stream) return;

    const mimeType = pickSupportedMimeType();
    const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    chunksRef.current = [];

    recorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) chunksRef.current.push(event.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: mimeType || 'video/webm' });
      blobRef.current = blob;
      handleUpload(blob);
    };

    recorderRef.current = recorder;
    recorder.start();
    setStep('recording');
    setSeconds(0);

    timerRef.current = setInterval(() => {
      setSeconds((prev) => {
        const next = prev + 1;
        if (next >= MAX_RECORDING_SECONDS) {
          stopRecording();
        }
        return next;
      });
    }, 1000);
  };

  const stopRecording = () => {
    clearInterval(timerRef.current);
    if (recorderRef.current && recorderRef.current.state !== 'inactive') {
      recorderRef.current.stop();
    }
    streamRef.current?.getTracks().forEach((track) => track.stop());
  };

  const handleUpload = async (blob) => {
    setStep('uploading');
    try {
      await uploadTestimonial(blob, seconds);
      setStep('done');
      window.location.href = NOTION_RESOURCE_URL;
    } catch (err) {
      setErrorMessage("L'envoi de votre témoignage a échoué. Vérifiez votre connexion puis réessayez.");
      setStep('error');
    }
  };

  const retryUpload = () => {
    if (blobRef.current) {
      handleUpload(blobRef.current);
    } else {
      setStep('idle');
    }
  };

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  return (
    <div style={{ minHeight: '100vh', background: '#050510', color: '#F9FAFB', display: 'flex', alignItems: 'center', padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
          Votre témoignage
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem' }}>
          Quand vous êtes prêt, filmez quelques secondes pour partager votre retour sur la formation.
        </p>

        {unsupported ? (
          <div style={{ background: '#0D0D25', border: '1px solid #1A1A3A', borderRadius: '16px', padding: '3rem 2rem' }}>
            <AlertTriangle size={32} color="#F59E0B" style={{ marginBottom: '1rem' }} />
            <p>Votre navigateur ne permet pas l'enregistrement vidéo ici. Essayez avec Chrome, Edge ou Safari récent.</p>
          </div>
        ) : (
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid #1A1A3A', background: '#0D0D25', aspectRatio: '16 / 9', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)' }}>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: step === 'idle' || step === 'error' ? 'none' : 'block',
                transform: 'scaleX(-1)',
              }}
            />

            {step === 'idle' && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                <Video size={40} color="#44CCFF" />
                <button onClick={enableCamera} className="btn btn-primary" style={{ padding: '1rem 2.2rem', borderRadius: '8px', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                  Activer ma caméra
                </button>
              </div>
            )}

            {step === 'recording' && (
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(5,5,16,0.6)', padding: '0.4rem 0.9rem', borderRadius: '30px' }}>
                <Circle size={10} color="#EF4444" fill="#EF4444" />
                <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: '0.9rem' }}>{minutes}:{secs}</span>
              </div>
            )}

            {step === 'uploading' && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', background: 'rgba(5,5,16,0.7)' }}>
                <Loader2 size={32} color="#44CCFF" className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                <p>Envoi de votre témoignage...</p>
              </div>
            )}

            {step === 'done' && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', background: 'rgba(5,5,16,0.85)' }}>
                <CheckCircle2 size={40} color="#22C55E" />
                <p>Merci ! Redirection en cours...</p>
              </div>
            )}

            {step === 'error' && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem', textAlign: 'center' }}>
                <AlertTriangle size={32} color="#F59E0B" />
                <p>{errorMessage}</p>
                <button onClick={blobRef.current ? retryUpload : enableCamera} className="btn btn-outline" style={{ padding: '0.9rem 1.8rem', borderRadius: '8px', fontWeight: 600 }}>
                  Réessayer
                </button>
              </div>
            )}
          </div>
        )}

        {step === 'ready' && (
          <button onClick={startRecording} className="btn btn-primary" style={{ marginTop: '2rem', padding: '1.1rem 2.6rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.05rem', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <Circle size={16} fill="currentColor" /> Démarrer l'enregistrement
          </button>
        )}

        {step === 'recording' && (
          <button onClick={stopRecording} className="btn btn-primary" style={{ marginTop: '2rem', padding: '1.1rem 2.6rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.05rem', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <Square size={16} fill="currentColor" /> Terminer l'enregistrement
          </button>
        )}

        {NOTION_RESOURCE_URL.includes('REMPLACER') && (
          <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
            (lien Notion de redirection non configuré)
          </p>
        )}
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default TemoignageEnregistrer;
