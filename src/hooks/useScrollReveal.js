import { useEffect } from 'react';

const SELECTORS = '.fade-in, .reveal-title, .reveal-text, .reveal-card';

export const useScrollReveal = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(SELECTORS));

    // Auto-stagger siblings: when multiple .fade-in (or .reveal-card) share
    // the same parent, cascade their transition-delay automatically
    const processedParents = new Set();
    elements.forEach(el => {
      const parent = el.parentElement;
      if (!parent || processedParents.has(parent)) return;
      processedParents.add(parent);

      const siblings = Array.from(parent.children).filter(child =>
        child.matches(SELECTORS)
      );

      // Only stagger if ≥ 2 siblings AND none already have an explicit delay
      if (siblings.length >= 2) {
        siblings.forEach((sib, i) => {
          if (!sib.dataset.delay && !sib.classList.contains('reveal-card')) {
            sib.style.transitionDelay = `${i * 0.09}s`;
          }
        });
      }
    });

    // Intersection observer — fires once per element
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
