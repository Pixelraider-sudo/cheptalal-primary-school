import { SITE } from './seo';

// ─── School / EducationalOrganization ────────────────────────────────────────
export const schoolSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'School'],
  '@id': `${SITE.url}/#school`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}/icons/icon-512.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE.url}/og-image.jpg`,
  description: SITE.defaultDescription,
  foundingDate: SITE.founded,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.coordinates.lat,
    longitude: SITE.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '17:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
    email: SITE.email,
    contactType: 'admissions',
    availableLanguage: ['English', 'Kiswahili'],
  },
  sameAs: [
    `https://www.facebook.com/cheptalalprimary`,
    `https://twitter.com/cheptalalprimary`,
  ],
  numberOfStudents: { '@type': 'QuantitativeValue', value: 500 },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CBC Programmes',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Pre-Primary 1 (PP1)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Pre-Primary 2 (PP2)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Lower Primary (Grades 1–3)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Upper Primary (Grades 4–6)' } },
    ],
  },
};

// ─── Website + SearchAction ───────────────────────────────────────────────────
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.defaultDescription,
  publisher: { '@id': `${SITE.url}/#school` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/news?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

// ─── Breadcrumb factory ───────────────────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${SITE.url}${item.path}`,
      })),
    ],
  };
}

// ─── FAQ schema factory ───────────────────────────────────────────────────────
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

// ─── Article schema factory (for news items) ──────────────────────────────────
export function articleSchema(article: {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.date,
    publisher: { '@id': `${SITE.url}/#school` },
    url: `${SITE.url}${article.path}`,
  };
}
