'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '../src/components/layout/Navbar';
import FooterAnimated from '../src/components/layout/FooterAnimated';
import '../src/App.css';
import '../src/index.css';

function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SmoothAnchorScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return null;
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Squadia",
  "url": "https://www.squadia.io",
  "description": "Squadia aide les PME et ETI françaises à structurer leur système de génération de revenus : data B2B, prospection multicanale et formation IA pour équipes commerciales.",
  "foundingDate": "2022",
  "founder": {
    "@type": "Person",
    "name": "Jérôme Debruyne",
    "jobTitle": "Fondateur",
    "knowsAbout": ["Vente B2B complexe", "Data B2B", "Prospection multicanale", "Formation commerciale", "IA appliquée aux métiers"]
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "knowsAbout": ["Data B2B", "Prospection multicanale", "Formation IA métiers", "Go-to-market ETI"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-7-82-84-35-64",
    "email": "contact@squadia.io",
    "contactType": "sales",
    "availableLanguage": "French",
    "hoursAvailable": "Mo-Fr 09:00-18:00"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "193 Avenue de France",
    "addressLocality": "Paris",
    "postalCode": "75013",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.linkedin.com/company/squadiagroup",
    "https://www.youtube.com/@squadiagroup",
    "https://www.comundi.fr/formateurs/8307-debruyne-jerome.html"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/squadia.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Allison&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <ScrollToTop />
        <SmoothAnchorScroll />
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>

        {/* Footer */}
        <FooterAnimated />
      </body>
    </html>
  );
}
