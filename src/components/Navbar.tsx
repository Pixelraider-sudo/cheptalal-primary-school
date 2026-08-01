import { useEffect, useRef, useState } from 'react';
import { Link, NavLink as RNL, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, GraduationCap, BookOpen, Users, Image, Trophy, Calendar, Phone, Home } from 'lucide-react';
import { navLinks, schoolInfo } from '../data/content';
import './Navbar.css';
const MEGA = [
  {label:'About Us',href:'/about',icon:Home,desc:'History, mission & values'},
  {label:'Curriculum',href:'/curriculum',icon:BookOpen,desc:'CBC learning PP1–Grade 6'},
  {label:'Teachers',href:'/teachers',icon:Users,desc:'Meet our qualified staff'},
  {label:'Achievements',href:'/achievements',icon:Trophy,desc:'Awards & excellence'},
  {label:'Gallery',href:'/gallery',icon:Image,desc:'Campus life in pictures'},
  {label:'Calendar',href:'/calendar',icon:Calendar,desc:'2026 term dates'},
];
export default function Navbar() {
  const [scrolled,setScrolled]=useState(false);
  const [mob,setMob]=useState(false);
  const [mega,setMega]=useState(false);
  const ref=useRef<HTMLLIElement>(null);
  const loc=useLocation();
  useEffect(()=>{setMob(false);setMega(false);},[loc.pathname]);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>20);window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn);},[]);
  useEffect(()=>{document.body.style.overflow=mob?'hidden':'';return()=>{document.body.style.overflow='';};},[mob]);
  useEffect(()=>{const fn=(e:MouseEvent)=>{if(ref.current&&!ref.current.contains(e.target as Node))setMega(false);};document.addEventListener('mousedown',fn);return()=>document.removeEventListener('mousedown',fn);},[]);
  return (
    <header>
      <nav className={`nav ${scrolled?'nav-scrolled':''}`} aria-label="Main navigation">
        <div className="container"><div className="nav-inner">
          <Link to="/" className="nav-brand" aria-label="Cheptalal Primary School">
            <div className="nav-logo" aria-hidden="true"><svg viewBox="0 0 26 26" fill="none" width="24" height="24"><path d="M13 3L3 9v14h7v-6h6v6h7V9L13 3z" fill="white" opacity=".9"/><circle cx="13" cy="9" r="3" fill="#F59E0B"/></svg></div>
            <div className="nav-name"><strong>Cheptalal Primary</strong><span>Bomet County · Kenya</span></div>
          </Link>
          <ul className="nav-links" role="list">
            <li><RNL to="/" end className={({isActive})=>isActive?'active':''}>Home</RNL></li>
            <li ref={ref} className="nav-mega-parent">
              <button className={`nav-mega-btn ${mega?'open':''}`} onClick={()=>setMega(v=>!v)} aria-expanded={mega} aria-haspopup="menu">
                Explore <ChevronDown size={13} strokeWidth={2.5}/>
              </button>
              {mega&&<div className="nav-mega" role="menu"><div className="nav-mega-grid">
                {MEGA.map(item=>(
                  <Link key={item.href} to={item.href} className="nav-mega-item" role="menuitem">
                    <div className="nav-mega-icon"><item.icon size={18} strokeWidth={1.75}/></div>
                    <div><div className="nav-mega-label">{item.label}</div><div className="nav-mega-desc">{item.desc}</div></div>
                  </Link>
                ))}
              </div></div>}
            </li>
            <li><RNL to="/news" className={({isActive})=>isActive?'active':''}>News</RNL></li>
            <li><RNL to="/admissions" className={({isActive})=>isActive?'active':''}>Admissions</RNL></li>
            <li><RNL to="/contact" className={({isActive})=>isActive?'active':''}>Contact</RNL></li>
          </ul>
          <div className="nav-cta">
            <a href={`tel:${schoolInfo.phoneHref}`} className="nav-phone"><Phone size={14} strokeWidth={2}/>{schoolInfo.phone}</a>
            <Link to="/admissions" className="btn btn-primary btn-sm">Apply Now</Link>
          </div>
          <button className="nav-hamburger" aria-label={mob?'Close menu':'Open menu'} aria-expanded={mob} onClick={()=>setMob(v=>!v)}>
            {mob?<X size={22} strokeWidth={2}/>:<Menu size={22} strokeWidth={2}/>}
          </button>
        </div></div>
      </nav>
      <div className={`mobile-drawer ${mob?'open':''}`} aria-hidden={!mob}>
        <div className="mobile-drawer-inner">
          <div className="mobile-links">{navLinks.map(l=><Link key={l.href} to={l.href} className="mobile-link">{l.label}</Link>)}</div>
          <div className="mobile-cta">
            <Link to="/admissions" className="btn btn-primary" style={{justifyContent:'center',width:'100%'}}><GraduationCap size={16} strokeWidth={2}/> Apply for Admission</Link>
            <a href={`tel:${schoolInfo.phoneHref}`} className="btn btn-outline" style={{justifyContent:'center',width:'100%'}}><Phone size={16} strokeWidth={2}/> {schoolInfo.phone}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
