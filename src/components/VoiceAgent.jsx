'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { VOICE_SITE_MAP, findPage, normalizePath } from '../lib/voiceSiteMap';

// Assistant vocal ElevenLabs monté dans le layout racine : il survit aux
// changements de page (navigation client Next), donc la conversation continue
// pendant que l'agent fait visiter le site via ses "client tools".

// .env.local peut pointer vers une copie de test de l'agent (remplacé par Next au build)
// eslint-disable-next-line no-undef
const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || 'TWYUafGgpOMApu1OinUj';
const NAV_OFFSET = 96; // navbar fixe (80px) + marge
// Pages non indexées, légales ou « conditions » : pas d'Elisa
const HIDDEN_PREFIXES = ['/temoignage', '/mentions-legales', '/ressources/conditions-participation', '/ressources/flipbook'];

const clean = (s) => (s || '')
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/\s+/g, ' ').trim();

// innerText garde l'espace des <br> ("commerciaux<br>seuls")
const textOf = (el) => (el?.innerText || el?.textContent || '').replace(/\s+/g, ' ').trim();

// Sections visibles de la page courante, repérées par leur premier titre
function listSections() {
  const main = document.querySelector('main');
  if (!main) return [];
  const seen = new Set();
  const out = [];
  main.querySelectorAll('section').forEach((el) => {
    if (el.offsetHeight < 40) return;
    const heading = el.querySelector('h1, h2, h3');
    const title = textOf(heading) || el.id;
    if (!title || seen.has(title)) return;
    seen.add(title);
    out.push({ el, heading, id: el.id || null, title });
  });
  // Titres hors <section> (certaines pages structurent en <div>)
  main.querySelectorAll('h2, h3').forEach((heading) => {
    const title = textOf(heading);
    if (!title || seen.has(title) || heading.closest('section')) return;
    seen.add(title);
    out.push({ el: heading, heading, id: heading.id || null, title });
  });
  return out.sort((a, b) => (a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
}

const wordsOf = (s) => s.split(/[^a-z0-9]+/).filter((w) => w.length > 2);

// "segmentation" ~ "segments" : racine commune d'au moins 6 lettres
const sameWord = (a, b) => {
  if (a === b) return true;
  if (a.length < 6 || b.length < 6) return false;
  let i = 0;
  while (i < a.length && a[i] === b[i]) i += 1;
  return i >= 6;
};

function scoreText(query, text) {
  const q = clean(query);
  const t = clean(text);
  if (!q || !t) return 0;
  if (t === q) return 100;
  if (t.includes(q)) return 85;
  if (q.includes(t)) return 65;
  const qWords = wordsOf(q);
  const tWords = wordsOf(t);
  if (!qWords.length) return 0;
  const hits = qWords.filter((w) => tWords.some((tw) => sameWord(w, tw))).length;
  return (hits / qWords.length) * 60;
}

// Le titre prime sur le contenu : le corps d'une section plafonne à 0.5
function findSection(query) {
  let best = null;
  let bestScore = 0;
  for (const s of listSections()) {
    const score = Math.max(
      scoreText(query, s.title),
      s.id ? scoreText(query, s.id) : 0,
      0.5 * scoreText(query, (s.el.textContent || '').slice(0, 600)),
    );
    if (score > bestScore) { best = s; bestScore = score; }
  }
  return bestScore >= 25 ? best : null;
}

function focusSection(section) {
  const top = section.el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  const target = section.heading || section.el;
  target.classList.remove('voice-agent-focus');
  void target.offsetWidth; // relance l'animation si déjà appliquée
  target.classList.add('voice-agent-focus');
  setTimeout(() => target.classList.remove('voice-agent-focus'), 3200);
}

// Attend que la nouvelle page soit affichée (vues chargées en dynamic import)
function waitForPage(path, timeout = 6000) {
  return new Promise((resolve) => {
    const start = Date.now();
    const check = () => {
      const onPath = normalizePath(window.location.pathname) === path;
      if (onPath && document.querySelector('main h1, main h2')) {
        setTimeout(() => resolve(true), 250);
        return;
      }
      if (Date.now() - start > timeout) { resolve(false); return; }
      setTimeout(check, 100);
    };
    check();
  });
}

function pageContext() {
  const path = normalizePath(window.location.pathname);
  return {
    path,
    page: findPage(path)?.label || document.title,
    sections: listSections().slice(0, 20).map((s) => s.title),
  };
}

// Campagne du lien d'arrivée (utm_campaign, sinon utm_source), gardée pour toute la visite
function landingCampaign() {
  try {
    const params = new URLSearchParams(window.location.search);
    const campaign = params.get('utm_campaign') || params.get('utm_source');
    if (campaign) sessionStorage.setItem('squadia_campagne', campaign.slice(0, 100));
    return sessionStorage.getItem('squadia_campagne') || 'aucune';
  } catch {
    return 'aucune';
  }
}

// Variables lues par le prompt au début de l'appel ({{salutation}}, {{page_actuelle}}, {{page_titre}}, {{campagne}})
function setDynamicVariables(widget, pathname) {
  const path = normalizePath(pathname);
  widget.setAttribute('dynamic-variables', JSON.stringify({
    salutation: new Date().getHours() < 18 ? 'Bonjour' : 'Bonsoir',
    page_actuelle: path,
    page_titre: findPage(path)?.label || 'Accueil',
    campagne: landingCampaign(),
  }));
}

const FOCUS_CSS = `
  elevenlabs-convai { --bottom: 180px !important; bottom: 180px !important; }
  @media (max-width: 768px) {
    elevenlabs-convai { --bottom: 110px !important; bottom: 110px !important; }
  }
  .voice-agent-focus {
    border-radius: 8px;
    animation: voiceAgentFocus 3s ease-out;
  }
  @keyframes voiceAgentFocus {
    0%   { box-shadow: 0 0 0 0 rgba(138,109,59,0); background-color: rgba(138,109,59,0); }
    20%  { box-shadow: 0 0 0 12px rgba(138,109,59,0.18); background-color: rgba(138,109,59,0.10); }
    100% { box-shadow: 0 0 0 0 rgba(138,109,59,0); background-color: rgba(138,109,59,0); }
  }
`;

export default function VoiceAgent() {
  const router = useRouter();
  const pathname = usePathname();
  const routerRef = useRef(router);
  const pathnameRef = useRef(pathname);

  useEffect(() => { routerRef.current = router; }, [router]);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    if (!document.querySelector('script[src*="elevenlabs/convai-widget-embed"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }
    if (!document.querySelector('#elevenlabs-widget-style')) {
      const style = document.createElement('style');
      style.id = 'elevenlabs-widget-style';
      style.textContent = FOCUS_CSS;
      document.head.appendChild(style);
    }

    // Outils appelés par l'agent. Noms et paramètres identiques à la config ElevenLabs.
    const clientTools = {
      getPageContext: async () => JSON.stringify(pageContext()),

      navigateToPage: async ({ path, section } = {}) => {
        const page = findPage(path);
        if (!page) {
          return JSON.stringify({
            ok: false,
            error: `Page inconnue : ${path}`,
            pages: VOICE_SITE_MAP.map((p) => p.path),
          });
        }
        if (normalizePath(window.location.pathname) !== page.path) {
          routerRef.current.push(page.path === '/' ? '/' : `${page.path}/`);
          const loaded = await waitForPage(page.path);
          if (!loaded) return JSON.stringify({ ok: false, error: 'La page met trop de temps à charger.' });
        }
        let focused = null;
        if (section) {
          const match = findSection(section);
          if (match) { focusSection(match); focused = match.title; }
        }
        return JSON.stringify({ ok: true, ...pageContext(), focusedSection: focused });
      },

      scrollToSection: async ({ section } = {}) => {
        const match = findSection(section);
        if (!match) {
          return JSON.stringify({ ok: false, error: `Section introuvable : ${section}`, sections: pageContext().sections });
        }
        focusSection(match);
        return JSON.stringify({ ok: true, focusedSection: match.title });
      },
    };

    const onCall = (event) => {
      event.detail.config.clientTools = { ...(event.detail.config.clientTools || {}), ...clientTools };
    };

    let widget = null;
    const timer = setTimeout(() => {
      widget = document.querySelector('elevenlabs-convai');
      if (!widget) {
        widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', AGENT_ID);
        setDynamicVariables(widget, pathnameRef.current);
        document.body.appendChild(widget);
      }
      widget.style.display = HIDDEN_PREFIXES.some((p) => pathnameRef.current?.startsWith(p)) ? 'none' : '';
      widget.addEventListener('elevenlabs-convai:call', onCall);
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (widget) {
        widget.removeEventListener('elevenlabs-convai:call', onCall);
        widget.remove();
      }
    };
  }, []);

  // Masqué (pas démonté) sur les pages privées pour ne pas couper un appel en cours
  useEffect(() => {
    pathnameRef.current = pathname;
    const widget = document.querySelector('elevenlabs-convai');
    if (!widget) return;
    widget.style.display = HIDDEN_PREFIXES.some((p) => pathname?.startsWith(p)) ? 'none' : '';
    setDynamicVariables(widget, pathname);
  }, [pathname]);

  return null;
}
