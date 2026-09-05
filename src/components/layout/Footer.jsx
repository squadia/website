import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer style={{ background: '#050510', padding: '5rem 0 3rem 0', borderTop: '1px solid #111' }}>
    <div className="container">
      <div className="footer-grid">
        {/* COLONNE 1 */}
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Solutions</h4>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <li><Link href="/prospection/campagne" className="footer-link">Campagne multicanale</Link></li>
            <li><Link href="/prospection/cold-call" className="footer-link">Appels sortants</Link></li>
            <li><Link href="/data/data-clean" className="footer-link">Data Clean</Link></li>
            <li><Link href="/data/data-seg" className="footer-link">Data Seg</Link></li>
            <li><Link href="/data/data-lead" className="footer-link">Data Lead</Link></li>
          </ul>
        </div>
        {/* COLONNE 2 */}
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Formation</h4>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <li><Link href="/formations" className="footer-link">Formations</Link></li>
            <li><Link href="/formation-ventes-et-ia" className="footer-link">Vente B2B et IA</Link></li>
            <li><Link href="/formation-marketing-et-ia" className="footer-link">Marketing et IA</Link></li>
            <li><Link href="/formation-communication-et-ia" className="footer-link">Communication et IA</Link></li>
          </ul>
        </div>
        {/* COLONNE 3 */}
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Votre fonction</h4>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <li><Link href="/directeur-general" className="footer-link">Directeur Général</Link></li>
            <li><Link href="/directeur-marketing" className="footer-link">Directeur Marketing</Link></li>
            <li><Link href="/directeur-commercial" className="footer-link">Directeur Commercial</Link></li>
          </ul>
        </div>
        {/* COLONNE 4 */}
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Cas clients</h4>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <li><Link href="/cas-clients/pipeline-b2b" className="footer-link">Pipeline B2B</Link></li>
            <li><Link href="/cas-clients/crm-industrie" className="footer-link">Pipeline sans hasard</Link></li>
            <li><Link href="/cas-clients/migration-crm" className="footer-link">Data cleaning CRM</Link></li>
            <li><Link href="/cas-clients/formation-vente" className="footer-link">Formation Vente</Link></li>
            <li><Link href="/cas-clients/formation-ia-com" className="footer-link">Formation IA Com</Link></li>
          </ul>
        </div>
        {/* COLONNE 5 */}
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Tarifs</h4>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <li><Link href="/prospection/campagne" className="footer-link">Campagne multicanale</Link></li>
            <li><Link href="/prospection/cold-call" className="footer-link">Appels sortants</Link></li>
            <li><Link href="/tarifs" className="footer-link">Formation</Link></li>
          </ul>
        </div>
        {/* COLONNE 6 */}
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>Ressources</h4>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <li><Link href="/blog" className="footer-link">Blog</Link></li>
            <li><a href="/automatisation-ia.html" className="footer-link">Automatisation IA</a></li>
            <li><Link href="/ressources/enquete-ia-b2b" className="footer-link">Enquête IA 2026</Link></li>
            <li><Link href="/ressources/guide-sales-manager" className="footer-link">Guide Sales Manager</Link></li>
            <li><Link href="/ressources/guide-marketing-manager" className="footer-link">Guide Marketing Manager</Link></li>
            <li><Link href="/ressources/channel-sales-plan" className="footer-link">Channel Sales Plan</Link></li>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '3rem', borderTop: '1px solid #1A1A3A', gap: '2rem' }}>
        <div>
          <Link href="/">
            <img src="/logo.png" alt="Squadia" style={{ height: '32px', width: 'auto', marginBottom: '1.5rem' }} />
          </Link>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            2026 Squadia : SIRET 45243901100027<br />
            193 Av. de France, 75013 Paris<br />
            contact@squadia.io : +33 7 45 80 49 49
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', marginTop: '1rem' }}>
          <a href="https://www.linkedin.com/company/squadiagroup" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>LinkedIn</a>
          <a href="https://www.youtube.com/@squadiagroup" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>YouTube</a>
          <Link href="/mentions-legales" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>Mentions Légales</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
