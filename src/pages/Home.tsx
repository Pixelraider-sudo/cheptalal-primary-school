import { motion } from 'framer-motion';
import { BookOpen, Shield, GraduationCap, Laptop, Music, Users, ArrowRight, Trophy, CalendarDays } from 'lucide-react';
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

const features = [
  { icon: BookOpen,      title: 'Quality CBC Education',      desc: "Kenya's Competency-Based Curriculum, building critical thinking and practical life skills alongside core academics." },
  { icon: GraduationCap, title: 'Qualified Teachers',         desc: 'All our educators are TSC-certified professionals committed to personalised attention for every learner.' },
  { icon: Shield,        title: 'Safe Learning Environment',  desc: 'Well-maintained classrooms, clean facilities, and a secure compound so learners focus on growth.' },
  { icon: Laptop,        title: 'Digital Learning',           desc: 'ICT integrated across all learning areas from the earliest grades, preparing pupils for a digital world.' },
  { icon: Music,         title: 'Co-Curricular Activities',   desc: 'Sports, music, drama, and clubs develop teamwork, discipline, and confidence beyond the classroom.' },
  { icon: Users,         title: 'Community Values',           desc: 'A strong partnership with parents and the local community shapes well-rounded, responsible learners.' },
];

const meta = PAGE_META.home;

export default function Home() {
  const featured = newsItems.find((n) => n.featured) ?? newsItems[0];
  const rest = newsItems.filter((n) => n.id !== featured.id).slice(0, 2);

  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} keywords={meta.keywords} />

      <Hero />
      <StatsBar />

      {/* WHY CHOOSE US */}
      <Section ariaLabelledBy="features-h">
        <Container>
          <Heading eyebrow="Why Cheptalal" title="Built for Every Learner's Success"
            subtitle="We combine academic rigour with a nurturing school culture so that every child thrives."
            align="center" id="features-h" />
          <div className="feat-grid">
            {features.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc}
                delay={(i % 3) * 0.08} />
            ))}
          </div>
        </Container>
      </Section>

      {/* HEADTEACHER MESSAGE */}
      <Section tone="alt" ariaLabelledBy="headteacher-h">
        <Container>
          <Heading eyebrow="Welcome" title="A Message from Our Headteacher" align="center" id="headteacher-h" />
          <HeadteacherSection />
        </Container>
      </Section>

      {/* CBC LEARNING JOURNEY */}
      <Section ariaLabelledBy="journey-h">
        <Container>
          <Heading eyebrow="Our Curriculum" title="The CBC Learning Journey"
            subtitle="Explore what learners study at each stage of their primary education at Cheptalal."
            id="journey-h" />
          <LearningJourney />
        </Container>
      </Section>

      {/* SCHOOL LIFE */}
      <Section tone="alt" ariaLabelledBy="life-h">
        <Container>
          <Heading eyebrow="School Life" title="Life at Cheptalal Primary"
            subtitle="Beyond academics, our learners discover their passions through a rich range of activities."
            align="center" id="life-h" />
          <SchoolLife />
        </Container>
      </Section>

      {/* LATEST NEWS */}
      <Section ariaLabelledBy="news-h">
        <Container>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between',
            marginBottom:'var(--space-7)', flexWrap:'wrap', gap:'var(--space-4)' }}>
            <div>
              <div className="sl">Latest Updates</div>
              <h2 className="st" id="news-h" style={{ marginBottom:0 }}>News &amp; Events</h2>
            </div>
            <Button to="/news" variant="outline">
              View All Posts <ArrowRight size={15} strokeWidth={2.25} />
            </Button>
          </div>
          <div className="news-home-grid">
            <NewsCard item={featured} featured delay={0} />
            <div className="news-side">
              {rest.map((item, i) => <NewsCard key={item.id} item={item} delay={0.08 + i * 0.08} />)}
            </div>
          </div>
        </Container>
      </Section>

      {/* ACHIEVEMENTS TEASER */}
      <Section tone="alt" ariaLabelledBy="achieve-h">
        <Container>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between',
            marginBottom:'var(--space-7)', flexWrap:'wrap', gap:'var(--space-4)' }}>
            <div>
              <div className="sl">Our Record</div>
              <h2 className="st" id="achieve-h" style={{ marginBottom:0 }}>Awards &amp; Achievements</h2>
            </div>
            <Button to="/achievements" variant="outline">
              View All <ArrowRight size={15} strokeWidth={2.25} />
            </Button>
          </div>
          <motion.div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-4)' }}
            initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
            {achievements.slice(0, 3).map((a) => (
              <motion.div key={a.id} variants={staggerItem}
                style={{ display:'flex', gap:'var(--space-4)', padding:'var(--space-5)',
                  background:'var(--white)', border:'1px solid var(--line)', borderRadius:'var(--r)' }}>
                <div style={{ width:44, height:44, borderRadius:'var(--r-sm)', background:'var(--green-light)',
                  color:'var(--green-mid)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <Trophy size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <div style={{ fontSize:'0.93rem', fontWeight:700, marginBottom:3 }}>{a.title}</div>
                  <div style={{ fontSize:'0.8rem', color:'var(--text-light)' }}>{a.year}</div>
                  <div style={{ fontSize:'0.82rem', color:'var(--text-mid)', marginTop:4, lineHeight:1.55 }}>{a.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* CALENDAR CTA */}
      <Section ariaLabelledBy="cal-cta-h">
        <Container>
          <div className="cta-banner">
            <div>
              <div className="sl">Academic Year 2026</div>
              <h2 id="cal-cta-h">View the Full School Calendar</h2>
              <p>Term dates, exam schedules, holidays, and events — all in one place.</p>
            </div>
            <div className="cta-actions">
              <Button to="/calendar" variant="primary" style={{ whiteSpace:'nowrap' }}>
                View Calendar <CalendarDays size={16} strokeWidth={2} />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="dark" ariaLabelledBy="testi-h">
        <Container>
          <Heading eyebrow="What People Say" title="Voices From Our Community"
            subtitle="Parents, alumni, and community members share what Cheptalal has meant to them."
            align="center" tone="inverted" id="testi-h" />
          <Testimonials />
        </Container>
      </Section>

      {/* ADMISSIONS CTA */}
      <Section tone="alt" ariaLabelledBy="adm-h">
        <Container>
          <div className="cta-banner">
            <div>
              <div className="sl">Enrol Your Child</div>
              <h2 id="adm-h">Ready to Join the Cheptalal Family?</h2>
              <p>We welcome learners from Pre-Primary to Grade 6. Simple, welcoming admissions process.</p>
            </div>
            <div className="cta-actions">
              <Button to="/admissions" variant="primary" style={{ whiteSpace:'nowrap' }}>
                Apply Now <ArrowRight size={16} strokeWidth={2.25} />
              </Button>
              <small>Or call {schoolInfo.phone}</small>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
