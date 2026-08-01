import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home,ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Button } from '../components/ui';
import { SITE } from '../lib/seo';
import { fadeUp,viewportOnce } from '../lib/motion';
export default function NotFound() {
  return (<>
    <SEOHead title={`404 – Page Not Found | ${SITE.shortName}`} description="The page you are looking for does not exist." path="/404" noIndex/>
    <section style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'var(--sp-10) 0',paddingTop:'calc(var(--nav-h) + var(--sp-10))'}}>
      <motion.div style={{textAlign:'center',maxWidth:520}} initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(5rem,15vw,8rem)',fontWeight:800,color:'var(--green-light)',lineHeight:1,marginBottom:'var(--sp-4)'}}>404</div>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:700,marginBottom:'var(--sp-4)'}}>Page Not Found</h1>
        <p style={{fontSize:'var(--text-base)',color:'var(--text-mid)',lineHeight:'var(--lh-relaxed)',marginBottom:'var(--sp-8)'}}>The page you are looking for does not exist or may have been moved.</p>
        <div style={{display:'flex',gap:'var(--sp-3)',justifyContent:'center',flexWrap:'wrap',marginBottom:'var(--sp-7)'}}>
          <Button to="/" variant="primary" className="btn-lg"><Home size={17} strokeWidth={2}/> Back to Home</Button>
          <Button to="/contact" variant="outline" className="btn-lg">Contact Us <ArrowRight size={16} strokeWidth={2.25}/></Button>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'var(--sp-3)',justifyContent:'center'}}>
          {[['About','/about'],['Curriculum','/curriculum'],['Admissions','/admissions'],['Teachers','/teachers'],['Gallery','/gallery'],['Contact','/contact']].map(([l,h])=>(
            <Link key={h} to={h} style={{fontSize:'var(--text-sm)',color:'var(--green-mid)',fontWeight:600,textDecoration:'underline',textUnderlineOffset:3}}>{l}</Link>
          ))}
        </div>
      </motion.div>
    </section>
  </>);
}
