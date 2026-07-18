import { Link } from 'react-router-dom';
import { Target, Eye, School, MapPin, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Section, Container, Heading, FeatureCard } from '../components/ui';
import { schoolInfo } from '../data/content';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';
import { Helmet } from 'react-helmet-async';

const meta = PAGE_META.about;

export default function About() {
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'About Us', path: '/about' }]))}</script>
      </Helmet>

      <div className="page-banner">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display:'flex', gap:6, listStyle:'none', fontSize:'0.78rem', color:'rgba(255,255,255,0.55)' }}>
              <li><Link to="/" style={{ color:'var(--gold)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">About Us</li>
            </ol>
          </nav>
          <h1>About {schoolInfo.shortName}</h1>
          <p>Our history, mission, and the values that have guided us since {schoolInfo.founded}.</p>
        </div>
      </div>

      <Section ariaLabelledBy="about-story-h">
        <Container>
          <div className="about-grid">
            <div className="about-img-stack">
              <div className="about-img-main">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80"
                  alt="Students learning in a classroom at Cheptalal Primary School" loading="lazy"
                  width="700" height="467" />
              </div>
              <div className="about-img-sub">
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&q=80"
                  alt="Children reading books at Cheptalal Primary" loading="lazy"
                  width="500" height="333" />
              </div>
              <div className="about-badge">
                <strong>{schoolInfo.founded}</strong>
                <span>Established</span>
              </div>
            </div>
            <div>
              <div className="sl">Our Story</div>
              <h2 className="st" id="about-story-h">A Legacy of Learning in the Heart of Bomet</h2>
              <p className="ss" style={{ marginBottom:'var(--space-4)' }}>
                Founded in {schoolInfo.founded}, {schoolInfo.name} has grown into one of the most respected
                institutions in Konoin Sub-County. What began as a small community school has developed into
                a full Pre-Primary through Grade 6 institution serving hundreds of families.
              </p>
              <p style={{ fontSize:'.88rem', color:'var(--text-mid)', lineHeight:1.72, marginBottom:'var(--space-5)' }}>
                Our growth has always been rooted in the same values: discipline, excellence, and service.
                Today we proudly implement Kenya's Competency-Based Curriculum, blending strong academics
                with practical life skills, creativity, and digital literacy.
              </p>
              <div className="about-checks">
                {['TSC-certified and experienced teaching staff','Full CBC curriculum from PP1 to Grade 6',
                  'Safe, inclusive environment for all learners','Active parent-teacher community engagement',
                  'Sports, arts, and co-curricular programmes'].map((text) => (
                  <div className="ck" key={text}>
                    <div className="ck-ico">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="alt" ariaLabelledBy="mission-h">
        <Container>
          <Heading eyebrow="What Drives Us" title="Mission &amp; Vision" align="center" id="mission-h" />
          <div className="feat-grid feat-grid-2" style={{ maxWidth:860, margin:'0 auto' }}>
            <FeatureCard icon={Target} title="Our Mission"
              description="To provide quality, CBC-aligned education in a safe and nurturing environment that develops academically competent, disciplined, and socially responsible learners." />
            <FeatureCard icon={Eye} title="Our Vision"
              description="To be a centre of academic excellence in Bomet County, recognised for nurturing confident, competent, and values-driven learners who become leaders in their chosen fields." />
          </div>
        </Container>
      </Section>

      <Section ariaLabelledBy="profile-h">
        <Container>
          <Heading eyebrow="School Profile" title="Key Facts at a Glance" align="center" id="profile-h" />
          <div className="feat-grid">
            <FeatureCard icon={School} title="School Type"
              description="Public primary school, day school, mixed (boys and girls), PP1 to Grade 6." />
            <FeatureCard icon={MapPin} title="Location"
              description={`${schoolInfo.location}, ${schoolInfo.country}, within the Rift Valley region.`} />
            <FeatureCard icon={Users} title="Pupil-Teacher Ratio"
              description="Approximately 23 learners per teacher, supporting personalised attention in every classroom." />
          </div>
        </Container>
      </Section>
    </>
  );
}
