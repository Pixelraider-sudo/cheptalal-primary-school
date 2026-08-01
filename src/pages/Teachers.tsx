import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, TrendingUp, Heart } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { TeacherGrid } from '../components/Teachers';
import { Section, Container, Heading, FeatureCard } from '../components/ui';
import { teachers } from '../data/teachers';
import { schoolInfo } from '../data/content';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';
const meta=PAGE_META.teachers;
export default function Teachers() {
  return (<>
    <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords}/>
    <Helmet><script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{name:'Our Teachers',path:'/teachers'}]))}</script></Helmet>
    <div className="page-banner"><div className="container">
      <nav aria-label="Breadcrumb"><ol className="breadcrumb"><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Our Teachers</li></ol></nav>
      <h1>Meet Our Dedicated Teachers</h1><p>TSC-certified professionals committed to every learner's success at {schoolInfo.shortName}.</p>
    </div></div>
    <Section ariaLabelledBy="teachers-h"><Container>
      <Heading eyebrow="Our Staff" title="The Team Behind Every Learner's Success" align="center" id="teachers-h"/>
      <TeacherGrid teachers={teachers}/>
    </Container></Section>
    <Section tone="alt" ariaLabelledBy="commit-h"><Container>
      <Heading eyebrow="Our Commitment" title="Why Our Teaching Staff Stands Out" align="center" id="commit-h"/>
      <div className="feat-grid">
        <FeatureCard icon={GraduationCap} title="TSC-Certified" description="Every teacher is registered with the Teachers Service Commission and meets national qualification standards." delay={0}/>
        <FeatureCard icon={TrendingUp} title="Continuous Training" description="Our staff regularly attend CBC capacity-building workshops to stay current with curriculum updates." delay={.08}/>
        <FeatureCard icon={Heart} title="Personalised Attention" description="With a healthy pupil-teacher ratio, our teachers know each learner by name, learning style, and individual needs." delay={.16}/>
      </div>
    </Container></Section>
  </>);
}
