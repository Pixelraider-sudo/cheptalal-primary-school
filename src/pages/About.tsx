import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, School, MapPin, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Section, Container, Heading, FeatureCard } from '../components/ui';
import { schoolInfo } from '../data/content';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';
const meta=PAGE_META.about;
const CHECKS=['TSC-certified and experienced teaching staff','Full CBC curriculum from PP1 to Grade 6','Safe, inclusive environment for all learners','Active parent-teacher community engagement','Sports, arts, and co-curricular programmes'];
export default function About() {
  return (<>
    <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords}/>
    <Helmet><script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{name:'About Us',path:'/about'}]))}</script></Helmet>
    <div className="page-banner"><div className="container">
      <nav aria-label="Breadcrumb"><ol className="breadcrumb"><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">About Us</li></ol></nav>
      <h1>About {schoolInfo.shortName}</h1><p>Our history, mission, and the values that have guided us since {schoolInfo.founded}.</p>
    </div></div>
    <Section ariaLabelledBy="about-h"><Container>
      <div className="about-grid">
        <div className="about-img-stack">
          <div className="about-img-main"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80" alt="Students in classroom at Cheptalal Primary" loading="lazy" width="700" height="467"/></div>
          <div className="about-img-sub"><img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&q=80" alt="Children reading books" loading="lazy" width="500" height="333"/></div>
          <div className="about-badge"><strong>{schoolInfo.founded}</strong><span>Established</span></div>
        </div>
        <div>
          <div className="sl">Our Story</div>
          <h2 className="st" id="about-h">A Legacy of Learning in the Heart of Bomet</h2>
          <p className="ss" style={{marginBottom:'var(--sp-4)'}}>Founded in {schoolInfo.founded}, {schoolInfo.name} has grown into one of the most respected institutions in Konoin Sub-County, serving hundreds of families from Pre-Primary through Grade 6.</p>
          <p style={{fontSize:'var(--text-sm)',color:'var(--text-mid)',lineHeight:'var(--lh-relaxed)',marginBottom:'var(--sp-5)'}}>Our growth is rooted in the same values: discipline, excellence, and service. Today we implement Kenya's CBC, blending strong academics with practical life skills, creativity, and digital literacy.</p>
          <div className="about-checks">{CHECKS.map(t=>(
            <div className="ck" key={t}>
              <div className="ck-ico"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <span>{t}</span>
            </div>
          ))}</div>
        </div>
      </div>
    </Container></Section>
    <Section tone="alt" ariaLabelledBy="mission-h"><Container>
      <Heading eyebrow="What Drives Us" title="Mission &amp; Vision" align="center" id="mission-h"/>
      <div className="feat-grid feat-grid-2" style={{maxWidth:860,margin:'0 auto'}}>
        <FeatureCard icon={Target} title="Our Mission" description="To provide quality CBC-aligned education in a safe, nurturing environment that develops academically competent, disciplined, and socially responsible learners."/>
        <FeatureCard icon={Eye} title="Our Vision" description="To be a centre of academic excellence in Bomet County, recognised for nurturing confident, competent, values-driven learners who become leaders in their fields."/>
      </div>
    </Container></Section>
    <Section ariaLabelledBy="profile-h"><Container>
      <Heading eyebrow="School Profile" title="Key Facts at a Glance" align="center" id="profile-h"/>
      <div className="feat-grid">
        <FeatureCard icon={School} title="School Type" description="Public primary school, day school, mixed (boys and girls), PP1 to Grade 6."/>
        <FeatureCard icon={MapPin} title="Location" description={`${schoolInfo.location}, ${schoolInfo.country}, within the Rift Valley region.`}/>
        <FeatureCard icon={Users} title="Pupil-Teacher Ratio" description="Approximately 23 learners per teacher, supporting personalised attention in every classroom."/>
      </div>
    </Container></Section>
  </>);
}
