import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Award, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { schoolInfo } from '../data/content';
import { EASE } from '../lib/motion';
import './Hero.css';
const SLIDES=[
  {src:'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1800&q=85',alt:'Students in classroom'},
  {src:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1800&q=85',alt:'Children reading'},
  {src:'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1800&q=85',alt:'Science activities'},
];
const BADGES=[{icon:Award,label:'35+ Years',sub:'of Excellence'},{icon:Users,label:'500+ Learners',sub:'Enrolled 2026'},{icon:BookOpen,label:'Full CBC',sub:'PP1 to Grade 6'}];
export default function Hero() {
  const [idx,setIdx]=useState(0);
  const timer=useRef<ReturnType<typeof setInterval>|undefined>(undefined);
  const start=()=>{ timer.current=setInterval(()=>setIdx(i=>(i+1)%SLIDES.length),5500); };
  useEffect(()=>{ start(); return()=>clearInterval(timer.current); },[]);// eslint-disable-line
  return (
    <section className="hero" aria-label="Welcome to Cheptalal Primary School">
      <div className="hero-slides" aria-hidden="true">
        {SLIDES.map((s,i)=><div key={s.src} className={`hero-slide ${i===idx?'active':''}`} style={{backgroundImage:`url('${s.src}')`}} role="img" aria-label={s.alt}/>)}
      </div>
      <div className="hero-overlay" aria-hidden="true"/>
      <div className="container"><div className="hero-content">
        <motion.div className="hero-eyebrow" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.6,ease:EASE,delay:.1}}>
          <span className="hero-dot" aria-hidden="true"/>{schoolInfo.location} · {schoolInfo.country}
        </motion.div>
        <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.75,ease:EASE,delay:.25}}>
          Shaping Tomorrow's<br/><span className="hero-highlight">Leaders</span><br/>Through Excellence
        </motion.h1>
        <motion.p className="hero-sub" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,ease:EASE,delay:.42}}>
          {schoolInfo.shortName} offers a CBC-aligned, nurturing environment where every child in Bomet County develops knowledge, confidence, and values to thrive in life.
        </motion.p>
        <motion.div className="hero-actions" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7,ease:EASE,delay:.58}}>
          <Link to="/admissions" className="btn btn-gold btn-lg">Apply for Admission <ArrowRight size={18} strokeWidth={2.25}/></Link>
          <Link to="/about" className="btn btn-ghost btn-lg">Discover Our School</Link>
        </motion.div>
        <motion.div className="hero-badges" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,ease:EASE,delay:.75}}>
          {BADGES.map(b=>(
            <div key={b.label} className="hero-badge-card">
              <b.icon size={18} strokeWidth={1.75} className="hero-badge-icon" aria-hidden="true"/>
              <div><div className="hero-badge-label">{b.label}</div><div className="hero-badge-sub">{b.sub}</div></div>
            </div>
          ))}
        </motion.div>
      </div></div>
      <div className="hero-dots" aria-label="Slideshow navigation">
        {SLIDES.map((_,i)=><button key={i} className={`hero-dot-btn ${i===idx?'active':''}`} aria-label={`Slide ${i+1}`} onClick={()=>{clearInterval(timer.current);setIdx(i);start();}}/>)}
      </div>
      <motion.div className="hero-scroll" aria-hidden="true" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}>
        <span>Scroll to explore</span>
        <motion.div animate={{y:[0,6,0]}} transition={{duration:1.8,repeat:Infinity,ease:'easeInOut'}}><ChevronDown size={16} strokeWidth={2}/></motion.div>
      </motion.div>
    </section>
  );
}
