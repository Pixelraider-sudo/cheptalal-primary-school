import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import GalleryComponent from '../components/Gallery';
import { Section, Container, Heading } from '../components/ui';
import { galleryImages } from '../data/content';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';

const meta = PAGE_META.gallery;

export default function GalleryPage() {
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Gallery', path: '/gallery' }]))}</script>
      </Helmet>

      <div className="page-banner">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display:'flex', gap:6, listStyle:'none', fontSize:'0.78rem', color:'rgba(255,255,255,0.55)' }}>
              <li><Link to="/" style={{ color:'var(--gold)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Gallery</li>
            </ol>
          </nav>
          <h1>A Glimpse Into Our Campus</h1>
          <p>From classroom moments to sports days — life at Cheptalal is vibrant and purposeful. Click any photo to explore.</p>
        </div>
      </div>

      <Section ariaLabelledBy="gallery-grid-h">
        <Container>
          <Heading eyebrow="Photo Gallery" title="School Life in Pictures"
            subtitle="Filter by category to explore different aspects of our school community."
            id="gallery-grid-h" />
          <GalleryComponent images={galleryImages} showFilters />
        </Container>
      </Section>
    </>
  );
}
