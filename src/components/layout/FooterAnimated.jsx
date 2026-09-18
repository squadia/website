'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FooterMobile from './FooterMobile';

export default function FooterAnimated() {
  const footerRef = useRef(null);
  const pathname = usePathname();

  // Le footer vit dans le layout partagé : il ne se remonte pas lors d'une
  // navigation client-side. On doit donc réarmer l'observer à chaque
  // changement de page pour que l'animation se rejoue à chaque fois.
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    el.classList.remove('in-view');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <footer ref={footerRef} className="footer-anim" style={{ background: '#050510', padding: '5rem 0 3rem 0', borderTop: '1px solid #111' }}>
      <div className="container">
        <div className="footer-grid desktop-only">

          {/* COLONNE 1 */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Solutions</h4>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              <li><Link href="/prospection/campagne" className="footer-link">Campagne multicanale</Link></li>
              <li><Link href="/prospection/cold-call" className="footer-link">Appels sortants</Link></li>
              <li><Link href="/data/data-clean" className="footer-link">Nettoyage et enrich. Data</Link></li>
              <li><Link href="/data/data-seg" className="footer-link">Segmentation Data B2B</Link></li>
              <li><Link href="/data/data-lead" className="footer-link">Flux Data B2B</Link></li>
            </ul>
          </div>

          {/* COLONNE 2 */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Formation</h4>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              <li><Link href="/formation-ventes-et-ia" className="footer-link">Vente B2B et IA</Link></li>
              <li><Link href="/formation-marketing-et-ia" className="footer-link">Marketing et IA</Link></li>
              <li><Link href="/formation-communication-et-ia" className="footer-link">Communication et IA</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Votre fonction</h4>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              <li><Link href="/directeur-general" className="footer-link">Directeur Général</Link></li>
              <li><Link href="/directeur-marketing" className="footer-link">Directeur Marketing</Link></li>
              <li><Link href="/directeur-commercial" className="footer-link">Directeur Commercial</Link></li>
            </ul>
          </div>

          {/* COLONNE 4 */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Cas clients</h4>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              <li><Link href="/cas-clients/pipeline-b2b" className="footer-link">Pipeline B2B</Link></li>
              <li><Link href="/cas-clients/crm-industrie" className="footer-link">Prospection ciblée</Link></li>
              <li><Link href="/cas-clients/migration-crm" className="footer-link">Data cleaning CRM</Link></li>
              <li><Link href="/cas-clients/formation-vente" className="footer-link">Closing avec l'IA</Link></li>
              <li><Link href="/cas-clients/formation-ia-com" className="footer-link">Prod. contenu accélérée</Link></li>
            </ul>
          </div>

          {/* COLONNE 5 */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Tarifs</h4>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              <li><Link href="/tarifs?tab=data" className="footer-link">Data</Link></li>
              <li><Link href="/tarifs?tab=prospection" className="footer-link">Prospection</Link></li>
              <li><Link href="/tarifs?tab=formation" className="footer-link">Formation</Link></li>
            </ul>
          </div>

          {/* COLONNE 6 */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Ressources</h4>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              <li><a href="/automatisation-ia.html" className="footer-link">Automatisation IA</a></li>
              <li><Link href="/ressources/enquete-ia-b2b" className="footer-link">Enquête IA 2026</Link></li>
              <li><Link href="/ressources/guide-sales-manager" className="footer-link">Guide Sales Manager</Link></li>
              <li><Link href="/ressources/guide-marketing-manager" className="footer-link">Guide Marketing Manager</Link></li>
              <li><Link href="/ressources/channel-sales-plan" className="footer-link">Channel Sales Plan</Link></li>
            </ul>
          </div>

        </div>

        <FooterMobile />

        <div className="footer-bottom" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '3rem', borderTop: '1px solid #1A1A3A', gap: '2rem' }}>
          <div>
            <Link href="/" className="footer-logo" style={{ display: 'block' }}>
              <img src="/logo.png" alt="Squadia" style={{ height: '32px', width: 'auto', marginBottom: '1.5rem' }} />
            </Link>
            <div className="footer-contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              2026 Squadia — SIRET 45243901100027<br />
              193 Av. de France, 75013 Paris<br />
              contact@squadia.io — +33 7 45 80 49 49
            </div>
          </div>

          <div className="footer-social" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', marginTop: '1rem' }}>
            <a href="https://www.linkedin.com/company/squadiagroup" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>LinkedIn</a>
            <a href="https://www.youtube.com/@squadiagroup" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>YouTube</a>
            <Link href="/mentions-legales" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>Mentions Légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
