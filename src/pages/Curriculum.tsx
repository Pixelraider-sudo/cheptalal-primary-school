import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Brain, Palette, Laptop, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LearningJourney from '../components/LearningJourney';
import { Section, Container, Heading, FeatureCard, Button } from '../components/ui';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';

const meta = PAGE_META.curriculum;

export default function Curriculum() {
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Curriculum', path: '/curriculum' }]))}</script>
      </Helmet>

      <div className="page-banner">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display:'flex', gap:6, listStyle:'none', fontSize:'0.78rem', color:'rgba(255,255,255,0.55)' }}>
              <li><Link to="/" style={{ color:'var(--gold)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Curriculum</li>
            </ol>
          </nav>
          <h1>Our Curriculum (CBC)</h1>
          <p>Kenya's Competency-Based Curriculum — skills-focused education at every stage of growth.</p>
        </div>
      </div>

      <Section ariaLabelledBy="cbc-philosophy-h">
        <Container>
          <Heading eyebrow="Philosophy" title="Building Competence, Not Just Knowledge"
            subtitle="Kenya's CBC moves away from rote learning toward seven core competencies. At Cheptalal, every lesson is designed with these in mind."
            id="cbc-philosophy-h" />
          <div className="feat-grid" style={{ marginBottom:'var(--space-9)' }}>
            <FeatureCard icon={Brain} title="Critical Thinking" delay={0}
              description="Learners are guided to ask questions, solve problems, and reason through real-world scenarios." />
            <FeatureCard icon={Palette} title="Creativity & Imagination" delay={0.08}
              description="Art, music, drama, and open-ended projects give every learner room to express ideas their own way." />
            <FeatureCard icon={Laptop} title="Digital Literacy" delay={0.16}
              description="From Lower Primary onward, ICT is woven into all lessons, preparing pupils for a technology-driven world." />
          </div>
          <Heading eyebrow="Subjects by Grade Level" title="The CBC Learning Journey"
            subtitle="Select a level to explore what your child will study at Cheptalal Primary." id="journey-full-h" />
          <LearningJourney />
        </Container>
      </Section>

      <Section tone="alt" ariaLabelledBy="curr-cta-h">
        <Container>
          <div className="cta-banner">
            <div>
              <div className="sl">Want to Know More?</div>
              <h2 id="curr-cta-h">Have Questions About Our Curriculum?</h2>
              <p>Our teaching staff are happy to walk you through what your child will learn at every grade level.</p>
            </div>
            <div className="cta-actions">
              <Button to="/contact" variant="primary" style={{ whiteSpace:'nowrap' }}>
                Contact Our Office <ArrowRight size={16} strokeWidth={2.25} />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
