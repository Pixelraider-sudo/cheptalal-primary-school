import { motion } from 'framer-motion';
import { BookOpen,Shield,GraduationCap,Laptop,Music,Users,ArrowRight,Trophy,CalendarDays } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Testimonials from '../components/Testimonials';
import HeadteacherSection from '../components/HeadteacherSection';
import SchoolLife from '../components/SchoolLife';
import LearningJourney from '../components/LearningJourney';
import { NewsCard } from '../components/News';
import { Section, Container, Heading, FeatureCard, Button } from '../components/ui';
import { newsItems } from '../data/news';
import { schoolInfo } from '../data/content';
import { achievements } from '../data/achievements';
import { PAGE_META } from '../lib/seo';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion';
const FEATURES=[
  {icon:BookOpen,title:'Quality CBC Education',desc:"Kenya's CBC building critical thinking, creativity, and practical life skills alongside core academics."},
  {icon:GraduationCap,title:'Qualified Teachers',desc:'TSC-certified professionals committed to personalised attention for every learner, PP1 to Grade 6.'},
  {icon:Shield,title:'Safe Learning Environment',desc:'Secure, well-maintained classrooms and facilities so every learner can focus on growth.'},
  {icon:Laptop,title:'Digital Learning',desc:'ICT integrated across all learning areas from the earliest grades, preparing pupils for a digital world.'},
  {icon:Music,title:'Co-Curricular Activities',desc:'Sports, music, drama, and clubs develop teamwork, discipline, and confidence beyond the classroom.'},
  {icon:Users,title:'Community Values',desc:'A strong partnership with parents and local leaders shapes responsible, well-rounded learners.'},
];
const meta=PAGE_META.home;
export default function Home() {
  const featured=newsItems.find(n=>n.featured)??newsItems[0];
  const rest=newsItems.filter(n=>n.id!==featured.id).slice(0,2);
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords}/>
      <Hero/><StatsBar/>
      <Section ariaLabelledBy="features-h">
        <Container>
          <Heading eyebrow="Why Cheptalal" title="Built for Every Learner's Success" subtitle="Academic rigour with a nurturing school culture — every child thrives." align="center" id="features-h"/>
          <div className="feat-grid">{FEATURES.map((f,i)=><FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} delay={(i%3)*.08}/>)}</div>
        </Container>
      </Section>
      <Section tone="alt" ariaLabelledBy="headteacher-h">
        <Container>
          <Heading eyebrow="Welcome" title="A Message from Our Headteacher" align="center" id="headteacher-h"/>
          <HeadteacherSection/>
        </Container>
      </Section>
      <Section ariaLabelledBy="journey-h">
        <Container>
          <Heading eyebrow="Our Curriculum" title="The CBC Learning Journey" subtitle="Explore what learners study at each stage of their primary education." id="journey-h"/>
          <LearningJourney/>
        </Container>
      </Section>
      <Section tone="alt" ariaLabelledBy="life-h">
        <Container>
          <Heading eyebrow="School Life" title="Life at Cheptalal Primary" subtitle="Beyond academics, our learners discover their passions through rich activities." align="center" id="life-h"/>
          <SchoolLife/>
        </Container>
      </Section>
      <Section ariaLabelledBy="news-h">
        <Container>
          <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:'var(--sp-8)',flexWrap:'wrap',gap:'var(--sp-4)'}}>
            <div><div className="sl">Latest Updates</div><h2 className="st" id="news-h" style={{marginBottom:0}}>News &amp; Events</h2></div>
            <Button to="/news" variant="outline">View All Posts <ArrowRight size={15} strokeWidth={2.25}/></Button>
          </div>
          <div className="news-home-grid">
            <NewsCard item={featured} featured delay={0}/>
            <div className="news-side">{rest.map((item,i)=><NewsCard key={item.id} item={item} delay={.08+i*.08}/>)}</div>
          </div>
        </Container>
      </Section>
      <Section tone="alt" ariaLabelledBy="achieve-h">
        <Container>
          <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:'var(--sp-8)',flexWrap:'wrap',gap:'var(--sp-4)'}}>
            <div><div className="sl">Our Record</div><h2 className="st" id="achieve-h" style={{marginBottom:0}}>Awards &amp; Achievements</h2></div>
            <Button to="/achievements" variant="outline">View All <ArrowRight size={15} strokeWidth={2.25}/></Button>
          </div>
          <motion.div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--sp-4)'}} initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
            {achievements.slice(0,3).map(a=>(
              <motion.div key={a.id} variants={staggerItem} style={{display:'flex',gap:'var(--sp-4)',padding:'var(--sp-5)',background:'var(--white)',border:'1px solid var(--line)',borderRadius:'var(--r-lg)'}}>
                <div style={{width:44,height:44,borderRadius:'var(--r-sm)',background:'var(--green-light)',color:'var(--green-mid)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Trophy size={20} strokeWidth={1.75}/></div>
                <div><div style={{fontSize:'var(--text-sm)',fontWeight:700,marginBottom:3}}>{a.title}</div><div style={{fontSize:'var(--text-xs)',color:'var(--text-light)',marginBottom:5}}>{a.year}</div><div style={{fontSize:'var(--text-xs)',color:'var(--text-mid)',lineHeight:'var(--lh-relaxed)'}}>{a.description}</div></div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
      <Section ariaLabelledBy="cal-h">
        <Container>
          <div className="cta-banner">
            <div><div className="sl">Academic Year 2026</div><h2 id="cal-h">View the Full School Calendar</h2><p>Term dates, exam schedules, holidays, and events — all in one place.</p></div>
            <div className="cta-actions"><Button to="/calendar" variant="primary" className="btn-lg" style={{whiteSpace:'nowrap'}}>View Calendar <CalendarDays size={17} strokeWidth={2}/></Button></div>
          </div>
        </Container>
      </Section>
      <Section tone="dark" ariaLabelledBy="testi-h">
        <Container>
          <Heading eyebrow="What People Say" title="Voices From Our Community" subtitle="Parents, alumni, and community members share what Cheptalal has meant to them." align="center" tone="inverted" id="testi-h"/>
          <Testimonials/>
        </Container>
      </Section>
      <Section tone="alt" ariaLabelledBy="adm-h">
        <Container>
          <div className="cta-banner">
            <div><div className="sl">Enrol Your Child</div><h2 id="adm-h">Ready to Join the Cheptalal Family?</h2><p>We welcome learners from Pre-Primary to Grade 6. Simple, welcoming admissions process.</p></div>
            <div className="cta-actions"><Button to="/admissions" variant="primary" className="btn-lg" style={{whiteSpace:'nowrap'}}>Apply Now <ArrowRight size={17} strokeWidth={2.25}/></Button><small>Or call {schoolInfo.phone}</small></div>
          </div>
        </Container>
      </Section>
    </>
  );
}
