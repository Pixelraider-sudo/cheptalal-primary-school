import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Brain, Palette, Laptop, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LearningJourney from '../components/LearningJourney';
import { Section, Container, Heading, FeatureCard, Button } from '../components/ui';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';
const meta=PAGE_META.curriculum;
export default function Curriculum() {
  return (<>
    <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords}/>
    <Helmet><script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{name:'Curriculum',path:'/curriculum'}]))}</script></Helmet>
    <div className="page-banner"><div className="container">
      <nav aria-label="Breadcrumb"><ol className="breadcrumb"><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Curriculum</li></ol></nav>
      <h1>Our Curriculum (CBC)</h1><p>Skills-focused, competency-based education at every stage of growth — PP1 to Grade 6.</p>
    </div></div>
    <Section ariaLabelledBy="cbc-h"><Container>
      <Heading eyebrow="Philosophy" title="Building Competence, Not Just Knowledge" subtitle="Kenya's CBC moves away from rote learning toward seven core competencies. Every lesson at Cheptalal is designed with these in mind." id="cbc-h"/>
      <div className="feat-grid" style={{marginBottom:'var(--sp-10)'}}>
        <FeatureCard icon={Brain} title="Critical Thinking" description="Learners ask questions, solve problems, and reason through real-world scenarios." delay={0}/>
        <FeatureCard icon={Palette} title="Creativity & Imagination" description="Art, music, drama, and open-ended projects give every learner room to express ideas their own way." delay={.08}/>
        <FeatureCard icon={Laptop} title="Digital Literacy" description="From Lower Primary onward, ICT is woven into all lessons, preparing pupils for a technology-driven world." delay={.16}/>
      </div>
      <Heading eyebrow="Grade by Grade" title="The CBC Learning Journey" subtitle="Select a level to explore what your child will study at Cheptalal Primary." id="journey-h"/>
      <LearningJourney/>
    </Container></Section>
    <Section tone="alt"><Container>
      <div className="cta-banner">
        <div><div className="sl">Have Questions?</div><h2>Talk to Our Teaching Staff</h2><p>Our educators are happy to walk you through what your child will learn at every grade level.</p></div>
        <div className="cta-actions"><Button to="/contact" variant="primary" className="btn-lg" style={{whiteSpace:'nowrap'}}>Contact Us <ArrowRight size={17} strokeWidth={2.25}/></Button></div>
      </div>
    </Container></Section>
  </>);
}
