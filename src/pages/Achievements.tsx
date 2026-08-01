import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Section, Container, Heading, Badge } from '../components/ui';
import { achievements, stats } from '../data/achievements';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion';
const meta=PAGE_META.achievements;
const ICON_MAP={trophy:Trophy,medal:Medal,star:Star,award:Award} as const;
export default function Achievements() {
  const years=[...new Set(achievements.map(a=>a.year))].sort((a,b)=>b-a);
  return (<>
    <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords}/>
    <Helmet><script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{name:'Achievements',path:'/achievements'}]))}</script></Helmet>
    <div className="page-banner"><div className="container">
      <nav aria-label="Breadcrumb"><ol className="breadcrumb"><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Achievements</li></ol></nav>
      <h1>Awards &amp; Achievements</h1><p>Celebrating excellence — our learners, teachers, and community.</p>
    </div></div>
    <div style={{background:'var(--green-dark)'}}><div className="container">
      <motion.div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}} initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
        {stats.map(s=>(
          <motion.div key={s.label} variants={staggerItem} style={{padding:'var(--sp-7) var(--sp-4)',textAlign:'center',borderRight:'1px solid rgba(255,255,255,.08)'}}>
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3vw,2.5rem)',fontWeight:700,color:'var(--gold)',display:'block',lineHeight:1}}>{s.value}</span>
            <div style={{fontSize:'var(--text-xs)',color:'rgba(255,255,255,.55)',marginTop:'var(--sp-2)',textTransform:'uppercase',letterSpacing:'.05em'}}>{s.label} <span style={{opacity:.4}}>since {s.since}</span></div>
          </motion.div>
        ))}
      </motion.div>
    </div></div>
    <Section ariaLabelledBy="ach-h"><Container>
      <Heading eyebrow="Our Record" title="Achievements by Year" subtitle="Every award and recognition our school has earned in recent years." id="ach-h"/>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-9)'}}>
        {years.map(year=>{
          const items=achievements.filter(a=>a.year===year);
          return (
            <div key={year}>
              <div style={{fontSize:'var(--text-xs)',fontWeight:700,color:'var(--text-light)',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:'var(--sp-5)',display:'flex',alignItems:'center',gap:12}}>
                <span>{year}</span><div style={{flex:1,height:1,background:'var(--line)'}}/>
              </div>
              <motion.div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'var(--sp-4)'}} initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
                {items.map(a=>{const Icon=ICON_MAP[a.icon];return(
                  <motion.div key={a.id} variants={staggerItem} style={{display:'flex',gap:'var(--sp-4)',padding:'var(--sp-5)',background:'var(--white)',border:'1px solid var(--line)',borderRadius:'var(--r-lg)'}}>
                    <div style={{width:48,height:48,borderRadius:'var(--r)',background:'var(--green-light)',color:'var(--green-mid)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Icon size={22} strokeWidth={1.75}/></div>
                    <div>
                      <h3 style={{fontSize:'var(--text-sm)',fontWeight:700,letterSpacing:'-.01em',marginBottom:4}}>{a.title}</h3>
                      <Badge tone={a.category==='academic'||a.category==='arts'?'green':'gold'} style={{marginBottom:6,fontSize:'.67rem'}}>{a.category.charAt(0).toUpperCase()+a.category.slice(1)}</Badge>
                      <p style={{fontSize:'var(--text-xs)',color:'var(--text-mid)',lineHeight:'var(--lh-relaxed)'}}>{a.description}</p>
                    </div>
                  </motion.div>
                );})}
              </motion.div>
            </div>
          );
        })}
      </div>
    </Container></Section>
  </>);
}
