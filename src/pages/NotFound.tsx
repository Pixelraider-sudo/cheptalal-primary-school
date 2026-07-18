import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Button } from '../components/ui';
import { SITE } from '../lib/seo';
import { fadeUp, viewportOnce } from '../lib/motion';

export default function NotFound() {
  return (
    <>
      <SEOHead title={`404 – Page Not Found | ${SITE.shortName}`}
        description="The page you are looking for does not exist. Return to the Cheptalal Primary School homepage."
        path="/404" noIndex />
      <section style={{ minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center',
        padding:'var(--space-9) 0', paddingTop:'calc(var(--nav-h) + var(--space-9))' }}>
        <motion.div style={{ textAlign:'center', maxWidth:520 }}
          initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'7rem', fontWeight:800, color:'var(--green-light)', lineHeight:1, marginBottom:'var(--space-4)' }}>404</div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.8rem', fontWeight:700, marginBottom:'var(--space-4)' }}>Page Not Found</h1>
          <p style={{ fontSize:'0.96rem', color:'var(--text-mid)', lineHeight:1.72, marginBottom:'var(--space-7)' }}>
            The page you are looking for does not exist or may have been moved. Let us get you back to the right place.
          </p>
          <div style={{ display:'flex', gap:'var(--space-3)', justifyContent:'center', flexWrap:'wrap' }}>
            <Button to="/" variant="primary"><Home size={16} strokeWidth={2}/> Back to Home</Button>
            <Button to="/contact" variant="outline">Contact Us <ArrowRight size={15} strokeWidth={2.25}/></Button>
          </div>
          <div style={{ marginTop:'var(--space-7)', display:'flex', flexDirection:'column', gap:'var(--space-2)', alignItems:'center' }}>
            <span style={{ fontSize:'0.78rem', color:'var(--text-light)', marginBottom:'var(--space-1)' }}>Or go directly to:</span>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'var(--space-3)', justifyContent:'center' }}>
              {[['About','/about'],['Curriculum','/curriculum'],['Admissions','/admissions'],['Teachers','/teachers'],['Gallery','/gallery'],['Contact','/contact']].map(([l,h]) => (
                <Link key={h} to={h} style={{ fontSize:'0.84rem', color:'var(--green-mid)', fontWeight:600, textDecoration:'underline', textUnderlineOffset:3 }}>{l}</Link>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
