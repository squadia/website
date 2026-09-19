'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export function showCookiePreferences() {
  CookieConsent.showPreferences();
}

export function hasAnalyticsConsent() {
  return CookieConsent.acceptedCategory('analytics');
}

export default function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom left',
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: false,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          autoClear: {
            cookies: [{ name: /^(_ga|_gid|_gat)/ }],
          },
        },
      },
      language: {
        default: 'fr',
        translations: {
          fr: {
            consentModal: {
              title: 'On peut utiliser des cookies ?',
              description:
                "Squadia utilise des cookies pour mesurer l'audience du site. Vous pouvez accepter, refuser ou personnaliser votre choix à tout moment.",
              acceptAllBtn: 'Tout accepter',
              acceptNecessaryBtn: 'Tout refuser',
              showPreferencesBtn: 'Personnaliser',
              footer:
                '<a href="/mentions-legales/">Mentions légales</a>',
            },
            preferencesModal: {
              title: 'Préférences de cookies',
              acceptAllBtn: 'Tout accepter',
              acceptNecessaryBtn: 'Tout refuser',
              savePreferencesBtn: 'Enregistrer mes choix',
              closeIconLabel: 'Fermer',
              sections: [
                {
                  title: 'Cookies nécessaires',
                  description:
                    "Indispensables au fonctionnement du site (navigation, sécurité). Ils ne peuvent pas être désactivés.",
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Cookies analytiques',
                  description:
                    "Nous aident à comprendre comment le site est utilisé, pour l'améliorer. Aucune donnée n'est revendue.",
                  linkedCategory: 'analytics',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
