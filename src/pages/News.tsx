import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import { NewsList } from '../components/News';
import EventsSection from '../components/EventsSection';
import { Section, Container, Heading } from '../components/ui';
import { newsItems } from '../data/news';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';

const meta = PAGE_META.news;

export default function News() {
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'News & Events', path: '/news' }]))}</script>
      </Helmet>

      <div className="page-banner">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display:'flex', gap:6, listStyle:'none', fontSize:'0.78rem', color:'rgba(255,255,255,0.55)' }}>
              <li><Link to="/" style={{ color:'var(--gold)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">News &amp; Events</li>
            </ol>
          </nav>
          <h1>News &amp; Events</h1>
          <p>Stay up to date with the latest happenings, achievements, and announcements from our school.</p>
        </div>
      </div>

      <Section ariaLabelledBy="news-list-h">
        <Container>
          <Heading eyebrow="Latest Updates" title="School News" id="news-list-h" />
          <NewsList items={newsItems} />
        </Container>
      </Section>

      <Section tone="alt" ariaLabelledBy="events-h">
        <Container>
          <Heading eyebrow="Upcoming Events" title="Events Calendar"
            subtitle="Key dates for the current academic term. Contact the office for the full term calendar."
            id="events-h" />
          <EventsSection />
        </Container>
      </Section>
    </>
  );
}
