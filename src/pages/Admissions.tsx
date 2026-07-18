import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ClipboardList, FileCheck, UserCheck, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';
import DownloadsSection from '../components/DownloadsSection';
import { Section, Container, Heading, FeatureCard, Button } from '../components/ui';
import { faqItems, schoolInfo } from '../data/content';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema, faqSchema } from '../lib/structuredData';

const meta = PAGE_META.admissions;

export default function Admissions() {
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Admissions', path: '/admissions' }]))}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema(faqItems))}</script>
      </Helmet>

      <div className="page-banner">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display:'flex', gap:6, listStyle:'none', fontSize:'0.78rem', color:'rgba(255,255,255,0.55)' }}>
              <li><Link to="/" style={{ color:'var(--gold)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Admissions</li>
            </ol>
          </nav>
          <h1>Ready to Join the Cheptalal Family?</h1>
          <p>We welcome learners from Pre-Primary to Grade 6. Simple, welcoming admissions process.</p>
        </div>
      </div>

      <Section ariaLabelledBy="process-h">
        <Container>
          <Heading eyebrow="How to Apply" title="Three Simple Steps" align="center" id="process-h" />
          <div className="feat-grid">
            <FeatureCard icon={ClipboardList} title="Contact the Office" delay={0}
              description="Call, WhatsApp, or visit our school office in Konoin to begin your enquiry and check space availability." />
            <FeatureCard icon={FileCheck} title="Bring Required Documents" delay={0.08}
              description="Original and copy of birth certificate, immunisation card, and a passport photo for the learner." />
            <FeatureCard icon={UserCheck} title="Meet the Class Teacher" delay={0.16}
              description="Your child is introduced to their class teacher and settled into their grade for a smooth start." />
          </div>
        </Container>
      </Section>

      <Section tone="alt" ariaLabelledBy="reqs-h">
        <Container>
          <div className="about-grid" style={{ alignItems:'start' }}>
            <div>
              <div className="sl">Admission Criteria</div>
              <h2 className="st" id="reqs-h">What You Will Need</h2>
              <div className="about-checks">
                {['Child must be at least 4 years old for PP1, 6 years for Grade 1',
                  "Original and copy of child's birth certificate",
                  'Immunisation / clinic card',
                  'Two passport-size photos of the learner',
                  "Previous school's leaving certificate (for transfers)",
                  'Parent or guardian national ID copy'].map((text) => (
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
            <div>
              <div className="sl">Documents</div>
              <h2 className="st">Downloadable Resources</h2>
              <p className="ss" style={{ marginBottom:'var(--space-5)' }}>
                Save time by downloading and filling out our forms before visiting the school office.
              </p>
              <DownloadsSection />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq" ariaLabelledBy="faq-h">
        <Container>
          <Heading eyebrow="Common Questions" title="Frequently Asked Questions"
            subtitle="Answers to the questions we hear most from parents and guardians."
            align="center" id="faq-h" />
          <FAQAccordion items={faqItems} />
        </Container>
      </Section>

      <Section tone="alt" ariaLabelledBy="adm-cta-h">
        <Container>
          <div className="cta-banner">
            <div>
              <div className="sl">Still Have Questions?</div>
              <h2 id="adm-cta-h">Talk to Our Admissions Office</h2>
              <p>We are happy to answer any questions about enrolment, fees, or what to expect at {schoolInfo.shortName}.</p>
            </div>
            <div className="cta-actions">
              <Button to="/contact" variant="primary" style={{ whiteSpace:'nowrap' }}>
                Contact Us <ArrowRight size={16} strokeWidth={2.25} />
              </Button>
              <small>Or call {schoolInfo.phone}</small>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
