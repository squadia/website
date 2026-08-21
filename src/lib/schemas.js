import { SITE_URL } from './metadata';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Squadia',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/logo.png`,
    sameAs: [
      'https://www.linkedin.com/company/squadia',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: `${SITE_URL}/contact`,
      availableLanguage: ['French'],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Squadia',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof faq.answer === 'string' ? faq.answer : faq.plainText || '',
      },
    })),
  };
}

export function serviceSchema({ name, description, path, provider = 'Squadia', areaServed = 'FR' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed === 'FR' ? 'France' : areaServed,
    },
    url: `${SITE_URL}${path}`,
  };
}

export function courseSchema({ name, description, path, provider = 'Squadia', audience = 'Professionnels B2B' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: SITE_URL,
    },
    url: `${SITE_URL}${path}`,
    educationalLevel: 'Professionnel',
    inLanguage: 'fr',
    audience: {
      '@type': 'Audience',
      audienceType: audience,
    },
  };
}

export function articleSchema({ title, description, path, image, datePublished, dateModified, author = 'Squadia' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image ? `${SITE_URL}${image}` : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Squadia',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/images/logo.png`,
      },
    },
    url: `${SITE_URL}${path}`,
    inLanguage: 'fr',
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
