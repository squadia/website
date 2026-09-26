'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Site-wide finishing layer for the "cabinet" theme:
// 1. section headers (kicker, h2, chapo) rise in sequence when scrolled into view
// 2. page hero (h1 + text + buttons) enters on load
// 3. FAQ items cascade in
// 4. standalone photos get the white passe-partout frame
// Elements already animated by framer-motion (inline opacity) are left alone.

const FRAME_SHADOW = '0 0 0 1px #E4DED2, 0 24px 48px -20px rgba(28,43,39,0.25)';

const isAnimatedByFramer = (el) => {
  for (let e = el, i = 0; e && i < 6; e = e.parentElement, i++) {
    if (e.style && e.style.opacity !== '') return true;
  }
  return false;
};

const isInChrome = (el) => !!el.closest('nav, header, footer, .navbar-base, .squad-dropdown, [data-no-enhance]');

const shortText = (el) => el && /^(P|SPAN|DIV)$/.test(el.tagName) && el.children.length === 0 && el.textContent.trim().length > 0 && el.textContent.trim().length < 60;

const hasWhiteBackground = (el) => {
  for (let e = el.parentElement, i = 0; e && i < 5; e = e.parentElement, i++) {
    const bg = getComputedStyle(e).backgroundColor;
    if (bg === 'rgb(255, 255, 255)') return true;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return false;
  }
  return false;
};


const looksLikeQuestions = (el) => el && el.children.length >= 3 && /\?/.test(el.textContent);
// FAQ lists sit either right after the h2 or after the block that wraps it; unwrap single-child containers
const findFaqList = (h2) => {
  const candidates = [h2.nextElementSibling, h2.parentElement && h2.parentElement.nextElementSibling, h2.parentElement && h2.parentElement.parentElement && h2.parentElement.parentElement.nextElementSibling];
  for (let c of candidates) {
    for (let i = 0; c && i < 3 && c.children.length === 1; i++) c = c.firstElementChild;
    if (looksLikeQuestions(c)) return c;
  }
  return null;
};

// French typography: a non-breaking space before ; : ! ? » and after «, so punctuation never starts a line
const PUNCT_BEFORE = / ([;:!?»])/g;
const PUNCT_AFTER = /« /g;
function fixPunctuation(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.parentElement && n.parentElement.closest('script, style, textarea, code, pre, elevenlabs-convai')
      ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  const nodes = [];
  while (walker.nextNode()) { const v = walker.currentNode.nodeValue; if (v && (v.includes(' :') || v.includes(' ;') || v.includes(' !') || v.includes(' ?') || v.includes(' »') || v.includes('« '))) nodes.push(walker.currentNode); }
  nodes.forEach((n) => { n.nodeValue = n.nodeValue.replace(PUNCT_BEFORE, '\u00a0$1').replace(PUNCT_AFTER, '«\u00a0'); });
}

function prepare(el, delay) {
  if (el.dataset.rv) return;
  el.dataset.rv = '1';
  el.style.setProperty('--rv-delay', `${delay}s`);
  el.classList.add('rv-init');
}

function enhance(root, observer) {
  // 1. section headers
  root.querySelectorAll('h2').forEach((h2) => {
    if (h2.dataset.rv || isInChrome(h2) || isAnimatedByFramer(h2)) return;
    const prev = h2.previousElementSibling;
    const next = h2.nextElementSibling;
    if (shortText(prev) && !isAnimatedByFramer(prev)) { prepare(prev, 0); observer.observe(prev); }
    prepare(h2, 0.12); observer.observe(h2);
    if (next && next.tagName === 'P' && !isAnimatedByFramer(next)) { prepare(next, 0.32); observer.observe(next); }
  });

  // 2. page hero: first h1 of the page
  const h1 = root.querySelector('h1');
  if (h1 && !h1.dataset.rv && !isInChrome(h1) && !isAnimatedByFramer(h1)) {
    const parts = [h1];
    let n = h1.nextElementSibling;
    while (n && parts.length < 4) { parts.push(n); n = n.nextElementSibling; }
    parts.forEach((p, i) => { if (!isAnimatedByFramer(p)) { prepare(p, 0.1 + i * 0.16); observer.observe(p); } });
  }

  // 3. FAQ cascade: the list of questions that follows a "questions fréquentes" / "FAQ" header
  root.querySelectorAll('h2').forEach((h2) => {
    if (!/questions fr[ée]quentes|faq/i.test(h2.textContent)) return;
    const list = findFaqList(h2);
    if (!list || list.dataset.rvList) return;
    list.dataset.rvList = '1';
    Array.from(list.children).forEach((item, i) => {
      if (isAnimatedByFramer(item) || item.dataset.rv) return;
      prepare(item, Math.min(i, 8) * 0.09); observer.observe(item);
    });
  });

  // 4. white frame around standalone photos
  root.querySelectorAll('img').forEach((img) => {
    if (img.dataset.framed || isInChrome(img)) return;
    const r = img.getBoundingClientRect();
    if (r.width < 180 || r.height < 120) return;
    if (img.closest('[class*="marquee"], [class*="logo"], .case-card, .enjeux-image, [data-no-frame]')) return;
    const cs = getComputedStyle(img);
    if (cs.position === 'absolute' || cs.position === 'fixed' || cs.borderRadius === '50%') return;
    let target = img;
    const parent = img.parentElement;
    if (parent) {
      const pr = parent.getBoundingClientRect();
      const pcs = getComputedStyle(parent);
      if (Math.abs(pr.width - r.width) < 6 && Math.abs(pr.height - r.height) < 6 && pcs.overflow === 'hidden') target = parent;
    }
    if (getComputedStyle(target).position === 'absolute') return;
    if (hasWhiteBackground(target)) return;
    const tcs = getComputedStyle(target);
    if (parseFloat(tcs.borderTopWidth) >= 4) { img.dataset.framed = '1'; return; }
    img.dataset.framed = '1';
    target.style.border = '6px solid #FFFFFF';
    target.style.boxShadow = FRAME_SHADOW;
    target.style.overflow = 'hidden';
    if (parseFloat(tcs.borderTopLeftRadius) < 12) target.style.borderRadius = '16px';
  });
}

export default function SiteEnhancer() {
  const pathname = usePathname();
  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('rv-in'); observer.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -60px 0px' });
    const run = () => {
      enhance(main, observer);
      fixPunctuation(document.body);
      if (reduced) main.querySelectorAll('.rv-init').forEach((el) => el.classList.add('rv-in'));
    };
    // throttle, not debounce: pages with live widgets (countdowns, carousels) mutate constantly
    let t = null;
    const schedule = () => { if (t) return; t = setTimeout(() => { t = null; run(); }, 150); };
    schedule();
    const mo = new MutationObserver(schedule);
    mo.observe(main, { childList: true, subtree: true });
    return () => { mo.disconnect(); observer.disconnect(); clearTimeout(t); };
  }, [pathname]);
  return null;
}
