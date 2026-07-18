import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';
import { Section, Container, Heading } from '../components/ui';
import { schoolInfo } from '../data/content';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';

const meta = PAGE_META.contact;

export default function Contact() {
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Contact', path: '/contact' }]))}</script>
      </Helmet>
      <div className="page-banner">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display:'flex', gap:6, listStyle:'none', fontSize:'0.78rem', color:'rgba(255,255,255,0.55)' }}>
              <li><Link to="/" style={{ color:'var(--gold)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Contact</li>
            </ol>
          </nav>
          <h1>Get in Touch</h1>
          <p>We would love to hear from you. Send a message or visit our school in Konoin, Bomet County.</p>
        </div>
      </div>
      <Section ariaLabelledBy="contact-h">
        <Container>
          <Heading eyebrow="Reach Us" title="Contact Information" align="center" id="contact-h" />
          <div className="contact-grid">
            <div>
              <div className="contact-info">
                <div className="ci"><div className="ci-ico"><MapPin size={20} strokeWidth={1.75}/></div>
                  <div><h4>Our Location</h4><p>{schoolInfo.name}<br/>{schoolInfo.location}<br/>{schoolInfo.country}</p></div>
                </div>
                <div className="ci"><div className="ci-ico"><Phone size={20} strokeWidth={1.75}/></div>
                  <div><h4>Phone</h4><p>
                    <a href={`tel:${schoolInfo.phoneHref}`} style={{ color:'var(--green-mid)', fontWeight:600 }}
                      aria-label={`Call us at ${schoolInfo.phone}`}>{schoolInfo.phone}</a>
                    <br/>{schoolInfo.officeHours}
                  </p></div>
                </div>
                <div className="ci"><div className="ci-ico"><Mail size={20} strokeWidth={1.75}/></div>
                  <div><h4>Email</h4><p>
                    <a href={`mailto:${schoolInfo.email}`} style={{ color:'var(--green-mid)', fontWeight:600 }}
                      aria-label={`Email us at ${schoolInfo.email}`}>{schoolInfo.email}</a>
                    <br/>We reply within 1 business day
                  </p></div>
                </div>
                <div className="ci"><div className="ci-ico"><Clock size={20} strokeWidth={1.75}/></div>
                  <div><h4>Office Hours</h4><p>{schoolInfo.officeHours}<br/>{schoolInfo.saturdayHours}</p></div>
                </div>
              </div>
              <div className="contact-map" role="link" tabIndex={0} aria-label="Open school location in Google Maps"
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(schoolInfo.mapQuery)}`, '_blank', 'noopener')}
                onKeyDown={(e) => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); window.open(`https://maps.google.com/?q=${encodeURIComponent(schoolInfo.mapQuery)}`, '_blank', 'noopener'); }}}>
                <MapPin size={28} strokeWidth={1.5} aria-hidden="true"/>
                <span style={{ fontWeight:600 }}>{schoolInfo.location}</span>
                <span style={{ fontSize:'0.76rem', color:'var(--text-light)' }}>Click to open in Google Maps</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
