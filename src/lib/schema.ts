// JSON-LD. Every page emits one @graph: the Organization and WebSite nodes plus whatever the page adds.

import { SITE } from './site';

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

type Node = Record<string, unknown>;

export function baseGraph(): Node[] {
  return [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.name,
      url: `${SITE.url}/`,
      email: SITE.email,
      description: SITE.description,
      // Part of the OurKampung family (6 Oct 2026). No company runs it, so there's no legalName or foundingDate.
      parentOrganization: { '@type': 'Organization', name: 'OurKampung', url: 'https://ourkampung.com/' },
      areaServed: { '@type': 'Country', name: 'Singapore' },
      knowsLanguage: 'en-SG',
      knowsAbout: [
        'Leaving Singapore',
        'Tax clearance (IR21) for foreign employees in Singapore',
        'Ending a residential tenancy early in Singapore',
        'International household moves from and to Singapore',
        'Moving back to Singapore',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE.url}/`,
      name: SITE.name,
      inLanguage: 'en-SG',
      publisher: { '@id': ORG_ID },
    },
  ];
}

export function breadcrumbNode(items: { label: string; href?: string }[], pageUrl: string): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? new URL(item.href, SITE.url).href : pageUrl,
    })),
  };
}

export function articleNode(opts: {
  url: string;
  headline: string;
  description: string;
  dateModified: string;
  section: string;
}): Node {
  return {
    '@type': 'Article',
    '@id': `${opts.url}#article`,
    mainEntityOfPage: opts.url,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.dateModified,
    dateModified: opts.dateModified,
    articleSection: opts.section,
    inLanguage: 'en-SG',
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function faqNode(url: string, faqs: { q: string; a: string }[]): Node | null {
  if (faqs.length === 0) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
