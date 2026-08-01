import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays,BookOpen,Coffee,Users,Sparkles,GraduationCap,Download } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Section, Container, Heading, Badge, Button } from '../components/ui';
import { terms, academicYear } from '../data/calendar';
import type { TermKey } from '../data/calendar';
import { PAGE_META } from '../lib/seo';
import { breadcrumbSchema } from '../lib/structuredData';
import { fadeUp, EASE, viewportOnce } from '../lib/motion';
const meta=PAGE_META.calendar;
const TYPE_STYLE: Record<string,{icon:typeof CalendarDays;tone:'green'|'gold';label:string}>={
  term:{icon:BookOpen,tone:'green',label:'Term'},holiday:{icon:Coffee,tone:'gold',label:'Holiday'},
  meeting:{icon:Users,tone:'green',label:'Meeting'},event:{icon:Sparkles,tone:'gold',label:'Event'},exam:{icon:GraduationCap,tone:'green',label:'Exams'},
};
function fmt(iso:string){return new Date(iso).toLocaleDateString('en-KE',{day:'numeric',month:'short',year:'numeric'});}
export default function Calendar() {
  const [active,setActive]=useState<TermKey>('term1');
  const term=terms.find(t=>t.key===active)!;
  return (<>
    <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords}/>
    <Helmet><script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{name:'Academic Calendar',path:'/calendar'}]))}</script></Helmet>
    <div className="page-banner"><div className="container">
      <nav aria-label="Breadcrumb"><ol className="breadcrumb"><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Calendar</li></ol></nav>
      <h1>Academic Calendar {academicYear}</h1><p>Term dates, exam schedules, holidays, and key school events for the full academic year.</p>
    </div></div>
    <Section ariaLabelledBy="cal-h"><Container>
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:'var(--sp-8)',flexWrap:'wrap',gap:'var(--sp-4)'}}>
        <Heading eyebrow={`Academic Year ${academicYear}`} title="School Calendar" id="cal-h" subtitle="Select a term to see its full schedule."/>
        <Button variant="outline" href="#" onClick={(e:React.MouseEvent)=>e.preventDefault()}><Download size={15} strokeWidth={2.25}/> Download PDF</Button>
      </div>
      <div className="tab-list">
        {terms.map(t=>(
          <button key={t.key} onClick={()=>setActive(t.key)} className={`tab-btn ${active===t.key?'active':''}`} aria-selected={active===t.key}>
            {t.label} — {fmt(t.opens)} to {fmt(t.closes)}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.28,ease:EASE}}>
          <div style={{background:'var(--green)',borderRadius:'var(--r-xl)',padding:'var(--sp-7)',marginBottom:'var(--sp-5)',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'var(--sp-5)'}}>
            {[['Term Opens',fmt(term.opens),'#fff'],['Term Closes',fmt(term.closes),'#fff'],['Events This Term',String(term.events.length),'var(--gold)']].map(([label,value,color])=>(
              <div key={label}><div style={{fontSize:'var(--text-xs)',color:'rgba(255,255,255,.5)',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:6}}>{label}</div><div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.35rem',fontWeight:700,color}}>{value}</div></div>
            ))}
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-3)'}}>
            {term.events.map((ev,i)=>{const {icon:Icon,tone,label}=TYPE_STYLE[ev.type];return(
              <motion.div key={ev.id} initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} transition={{delay:i*.04,duration:.28,ease:EASE}}
                style={{display:'flex',alignItems:'center',gap:'var(--sp-4)',padding:'var(--sp-4) var(--sp-5)',background:'var(--white)',border:'1px solid var(--line)',borderRadius:'var(--r-lg)'}}>
                <div style={{width:40,height:40,borderRadius:'var(--r-sm)',background:tone==='green'?'var(--green-light)':'var(--gold-light)',color:tone==='green'?'var(--green-mid)':'var(--gold-deep)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Icon size={18} strokeWidth={1.75}/></div>
                <div style={{flex:1}}><div style={{fontSize:'var(--text-sm)',fontWeight:700,marginBottom:2}}>{ev.title}</div>{ev.description&&<div style={{fontSize:'var(--text-xs)',color:'var(--text-light)'}}>{ev.description}</div>}</div>
                <div style={{textAlign:'right',flexShrink:0}}><div style={{fontSize:'var(--text-xs)',fontWeight:600,color:'var(--text-mid)'}}>{fmt(ev.date)}{ev.endDate?` – ${fmt(ev.endDate)}`:''}</div><Badge tone={tone} style={{marginTop:4,fontSize:'.65rem'}}>{label}</Badge></div>
              </motion.div>
            );})}
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}
        style={{display:'flex',flexWrap:'wrap',gap:'var(--sp-3)',marginTop:'var(--sp-8)',paddingTop:'var(--sp-5)',borderTop:'1px solid var(--line)'}}>
        <span style={{fontSize:'var(--text-xs)',color:'var(--text-light)',marginRight:'var(--sp-2)'}}>Legend:</span>
        {Object.entries(TYPE_STYLE).map(([type,{icon:Icon,tone,label}])=>(
          <div key={type} style={{display:'flex',alignItems:'center',gap:6,fontSize:'var(--text-xs)',color:'var(--text-mid)'}}>
            <div style={{width:22,height:22,borderRadius:'var(--r-xs)',background:tone==='green'?'var(--green-light)':'var(--gold-light)',color:tone==='green'?'var(--green-mid)':'var(--gold-deep)',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon size={12} strokeWidth={2}/></div>{label}
          </div>
        ))}
      </motion.div>
    </Container></Section>
  </>);
}
