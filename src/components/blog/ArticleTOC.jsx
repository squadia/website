'use client';
import { useEffect, useState } from 'react';

export default function ArticleTOC({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );
    const els = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="article-toc" aria-label="Sommaire de l'article">
      <style>{`
        .article-toc { position: sticky; top: 120px; align-self: start; }
        .article-toc ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.85rem; border-left: 1px solid #1A1A3A; }
        .article-toc a { display: block; padding: 0.1rem 0 0.1rem 1.1rem; margin-left: -1px; border-left: 2px solid transparent; color: #9CA3AF; font-size: 0.85rem; line-height: 1.4; text-decoration: none; transition: color 0.2s, border-color 0.2s; }
        .article-toc a:hover { color: #E5E7EB; }
        .article-toc a.active { color: #44CCFF; border-left-color: #44CCFF; font-weight: 600; }
        @media (max-width: 1024px) { .article-toc { display: none; } }
      `}</style>
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={activeId === id ? 'active' : ''}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
