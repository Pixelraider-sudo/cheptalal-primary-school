import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, BookOpen, Coffee, Users, Sparkles, GraduationCap, Download } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Section, Container, Heading, Badge, Button } from '../components/ui';
import { terms, academicYear } from '../data/calendar';
import type { TermKey } from '../data/calendar';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';
import { fadeUp, EASE, viewportOnce } from '../lib/motion';

const meta = PAGE_META.calendar;
const eventTypeStyle: Record<string, { icon: typeof CalendarDays; tone: 'green'|'gold'; label: string }> = {
  term:    { icon: BookOpen,      tone: 'green', label: 'Term' },
  holiday: { icon: Coffee,        tone: 'gold',  label: 'Holiday' },
  meeting: { icon: Users,         tone: 'green', label: 'Meeting' },
  event:   { icon: Sparkles,      tone: 'gold',  label: 'Event' },
  exam:    { icon: GraduationCap, tone: 'green', label: 'Exams' },
};
function fmt(iso: string) { return new Date(iso).toLocaleDateString('en-KE', { day:'numeric', month:'short', year:'numeric' }); }

export default function Calendar() {
  const [active, setActive] = useState<TermKey>('term1');
  const term = terms.find((t) => t.key === active)!;
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Academic Calendar', path: '/calendar' }]))}</script>
      </Helmet>
      <div className="page-banner">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ display:'flex', gap:6, listStyle:'none', fontSize:'0.78rem', color:'rgba(255,255,255,0.55)' }}>
              <li><Link to="/" style={{ color:'var(--gold)' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Academic Calendar</li>
            </ol>
          </nav>
          <h1>Academic Calendar {academicYear}</h1>
          <p>Term dates, exam schedules, holidays, and key school events for the full academic year.</p>
        </div>
      </div>
      <Section ariaLabelledBy="cal-h">
        <Container>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'var(--space-7)', flexWrap:'wrap', gap:'var(--space-4)' }}>
            <Heading eyebrow={`Academic Year ${academicYear}`} title="School Calendar" id="cal-h" subtitle="Select a term to see its full schedule of events." />
            <Button variant="outline" href="#" onClick={(e: React.MouseEvent) => e.preventDefault()}>
              <Download size={15} strokeWidth={2.25}/> Download PDF
            </Button>
          </div>
          <div style={{ display:'flex', gap:'var(--space-3)', marginBottom:'var(--space-6)', flexWrap:'wrap' }}>
            {terms.map((t) => (
              <button key={t.key} onClick={() => setActive(t.key)}
                className={`gallery-filter ${active===t.key?'active':''}`} aria-pressed={active===t.key}>
                {t.label} — {fmt(t.opens)} to {fmt(t.closes)}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-14 }} transition={{ duration:0.3, ease:EASE }}>
              <div style={{ background:'var(--green)', borderRadius:'var(--r-lg)', padding:'var(--space-6) var(--space-7)', marginBottom:'var(--space-5)', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'var(--space-5)' }}>
                {[['Term Opens', fmt(term.opens), '#fff'],['Term Closes', fmt(term.closes), '#fff'],['Events This Term', String(term.events.length), 'var(--gold)']].map(([label, value, color]) => (
                  <div key={label}>
                    <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.55)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:6 }}>{label}</div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.3rem', fontWeight:700, color }}>{value}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-3)' }}>
                {term.events.map((ev, i) => {
                  const { icon: Icon, tone, label } = eventTypeStyle[ev.type];
                  return (
                    <motion.div key={ev.id} initial={{ opacity:0, x:-16 }} animate={{ opacity:1, x:0 }}
                      transition={{ delay:i*0.05, duration:0.3, ease:EASE }}
                      style={{ display:'flex', alignItems:'center', gap:'var(--space-4)', padding:'var(--space-4) var(--space-5)', background:'var(--white)', border:'1px solid var(--line)', borderRadius:'var(--r)' }}>
                      <div style={{ width:40, height:40, borderRadius:'var(--r-sm)', background:tone==='green'?'var(--green-light)':'var(--gold-light)', color:tone==='green'?'var(--green-mid)':'var(--gold-deep)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <Icon size={18} strokeWidth={1.75}/>
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:'0.93rem', fontWeight:700, marginBottom:2 }}>{ev.title}</div>
                        {ev.description && <div style={{ fontSize:'0.8rem', color:'var(--text-light)' }}>{ev.description}</div>}
                      </div>
                      <div style={{ textAlign:'right', flexShrink:0 }}>
                        <div style={{ fontSize:'0.82rem', fontWeight:600, color:'var(--text-mid)' }}>
                          {fmt(ev.date)}{ev.endDate?` – ${fmt(ev.endDate)}`:''}
                        </div>
                        <Badge tone={tone} style={{ marginTop:4, fontSize:'0.67rem' }}>{label}</Badge>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}
            style={{ display:'flex', flexWrap:'wrap', gap:'var(--space-3)', marginTop:'var(--space-7)', paddingTop:'var(--space-5)', borderTop:'1px solid var(--line)' }}>
            <span style={{ fontSize:'0.78rem', color:'var(--text-light)', marginRight:'var(--space-2)' }}>Legend:</span>
            {Object.entries(eventTypeStyle).map(([type, { icon: Icon, tone, label }]) => (
              <div key={type} style={{ display:'flex', alignItems:'center', gap:6, fontSize:'0.78rem', color:'var(--text-mid)' }}>
                <div style={{ width:22, height:22, borderRadius:'var(--r-sm)', background:tone==='green'?'var(--green-light)':'var(--gold-light)', color:tone==='green'?'var(--green-mid)':'var(--gold-deep)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Icon size={12} strokeWidth={2}/>
                </div>{label}
              </div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
