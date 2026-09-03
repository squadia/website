'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const SECTIONS = [
  {
    title: 'Solutions',
    links: [
      { href: '/prospection/campagne',   label: 'Campagne multicanale' },
      { href: '/prospection/cold-call',  label: 'Appels sortants' },
      { href: '/data/data-clean',        label: 'Data Clean' },
      { href: '/data/data-seg',          label: 'Data Seg' },
      { href: '/data/data-lead',         label: 'Data Lead' },
    ],
  },
  {
    title: 'Formation',
    links: [
      { href: '/formations',                      label: 'Formations' },
      { href: '/formation-ventes-et-ia',          label: 'Vente B2B et IA' },
      { href: '/formation-marketing-et-ia',       label: 'Marketing et IA' },
      { href: '/formation-communication-et-ia',   label: 'Communication et IA' },
    ],
  },
  {
    title: 'Votre fonction',
    links: [
      { href: '/directeur-general',    label: 'Directeur Général' },
      { href: '/directeur-marketing',  label: 'Directeur Marketing' },
      { href: '/directeur-commercial', label: 'Directeur Commercial' },
    ],
  },
  {
    title: 'Cas clients',
    links: [
      { href: '/cas-clients/pipeline-b2b',    label: 'Pipeline B2B' },
      { href: '/cas-clients/crm-industrie',   label: 'Pipeline sans hasard' },
      { href: '/cas-clients/migration-crm',   label: 'Data cleaning CRM' },
      { href: '/cas-clients/formation-vente', label: 'Formation Vente' },
      { href: '/cas-clients/formation-ia-com',label: 'Formation IA Com' },
    ],
  },
  {
    title: 'Tarifs',
    links: [
      { href: '/tarifs?tab=data',        label: 'Data' },
      { href: '/tarifs?tab=prospection', label: 'Prospection' },
      { href: '/tarifs?tab=formation',   label: 'Formation' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { href: '/automatisation-ia.html',              label: 'Automatisation IA' },
      { href: '/ressources/enquete-ia-b2b',           label: 'Enquête IA 2026' },
      { href: '/ressources/guide-sales-manager',      label: 'Guide Sales Manager' },
      { href: '/ressources/guide-marketing-manager',  label: 'Guide Marketing Manager' },
      { href: '/ressources/channel-sales-plan',       label: 'Channel Sales Plan' },
    ],
  },
];

export default function FooterMobile() {
  const [open, setOpen] = useState(null);
  const toggle = (title) => setOpen(prev => (prev === title ? null : title));

  return (
    <div className="footer-accordion mobile-only">
      {SECTIONS.map(({ title, links }) => {
        const isOpen = open === title;
        return (
          <div key={title} className="footer-acc-section">
            <button
              className="footer-acc-trigger"
              onClick={() => toggle(title)}
              aria-expanded={isOpen}
            >
              <span>{title}</span>
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                aria-hidden="true"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', flexShrink: 0 }}
              >
                <path d="M4 6l4 4 4-4" stroke="rgba(249,250,251,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`footer-acc-panel${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
              <ul>
                {links.map(link => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="footer-acc-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
