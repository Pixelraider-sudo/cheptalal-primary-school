import { Helmet } from 'react-helmet-async';
import { SITE, type PageMeta } from '../lib/seo';

interface SEOHeadProps extends Partial<PageMeta> {
  title: string;
  description: string;
  path: string;
}

export default function SEOHead({ title, description, path, keywords, ogImage, noIndex }: SEOHeadProps) {
  const canonical = `${SITE.url}${path}`;
  const image = ogImage ?? SITE.defaultImage;
  const allKeywords = [...(SITE.keywords), ...(keywords ?? [])].join(', ');

  return (
    <Helmet>
      {/* ─── Primary ─── */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={SITE.name} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="theme-color" content={SITE.themeColor} />
      <meta name="google-site-verification" content="REPLACE_WITH_GSC_VERIFICATION_CODE" />
      <link rel="canonical" href={canonical} />

      {/* ─── Open Graph ─── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE.name} – ${description.slice(0, 80)}`} />
      <meta property="og:locale" content={SITE.locale} />

      {/* ─── Twitter / X ─── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={SITE.name} />

      {/* ─── Geographic / Local SEO ─── */}
      <meta name="geo.region" content="KE-02" />
      <meta name="geo.placename" content="Konoin, Bomet County, Kenya" />
      <meta name="geo.position" content={`${SITE.coordinates.lat};${SITE.coordinates.lng}`} />
      <meta name="ICBM" content={`${SITE.coordinates.lat}, ${SITE.coordinates.lng}`} />

      {/* ─── Mobile / PWA ─── */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={SITE.shortName} />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
}
