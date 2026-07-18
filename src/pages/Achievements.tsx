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

const meta = PAGE_META.achievements;
const iconMap = { trophy: Trophy, medal: Medal, star: Star, award: Award };

export default function Achievements() {
  const years = [...new Set(achievements.map((a) => a.year))].sort((a, b) => b - a);
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Achievements', path: '/achievements' }]))}</script>
      </Helmet>
      <div className="page-banner">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display:'flex', gap:6, listStyle:'none', fontSize:'0.78rem', color:'rgba(255,255,255,0.55)' }}>
              <li><Link to="/" style={{ color:'var(--gold)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Achievements</li>
            </ol>
          </nav>
          <h1>Awards &amp; Achievements</h1>
          <p>A record of excellence — celebrating our learners, teachers, and community.</p>
        </div>
      </div>
      <div style={{ background:'var(--green)', color:'#fff' }}>
        <Container>
          <motion.div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}
            initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
            {stats.map((s) => (
              <motion.div key={s.label} variants={staggerItem}
                style={{ padding:'var(--space-6) var(--space-4)', textAlign:'center', borderRight:'1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontFamily:"'Playfair Display',serif", fontSize:'2.2rem', fontWeight:700, color:'var(--gold)', display:'block', lineHeight:1 }}>{s.value}</span>
                <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.65)', marginTop:6 }}>{s.label} <span style={{ opacity:.5 }}>since {s.since}</span></div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
      <Section ariaLabelledBy="ach-h">
        <Container>
          <Heading eyebrow="Our Record" title="Achievements by Year"
            subtitle="Every award and recognition our school has earned in recent years." id="ach-h" />
          <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-8)' }}>
            {years.map((year) => {
              const items = achievements.filter((a) => a.year === year);
              return (
                <div key={year}>
                  <div style={{ fontSize:'0.8rem', fontWeight:700, color:'var(--text-light)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'var(--space-5)', display:'flex', alignItems:'center', gap:12 }}>
                    <span>{year}</span><div style={{ flex:1, height:1, background:'var(--line)' }}/>
                  </div>
                  <motion.div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'var(--space-4)' }}
                    initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
                    {items.map((a) => {
                      const Icon = iconMap[a.icon];
                      return (
                        <motion.div key={a.id} variants={staggerItem}
                          style={{ display:'flex', gap:'var(--space-4)', padding:'var(--space-5)', background:'var(--white)', border:'1px solid var(--line)', borderRadius:'var(--r)' }}>
                          <div style={{ width:48, height:48, borderRadius:'var(--r-sm)', background:'var(--green-light)', color:'var(--green-mid)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <Icon size={22} strokeWidth={1.75}/>
                          </div>
                          <div>
                            <h3 style={{ fontSize:'0.94rem', fontWeight:700, letterSpacing:'-0.01em', marginBottom:4 }}>{a.title}</h3>
                            <Badge tone={a.category === 'academic' || a.category === 'arts' ? 'green' : 'gold'} style={{ marginBottom:6, fontSize:'0.68rem' }}>
                              {a.category.charAt(0).toUpperCase()+a.category.slice(1)}
                            </Badge>
                            <p style={{ fontSize:'0.83rem', color:'var(--text-mid)', lineHeight:1.6 }}>{a.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
