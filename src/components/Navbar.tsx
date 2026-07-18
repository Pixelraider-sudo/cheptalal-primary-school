import { useEffect, useRef, useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navLinks, schoolInfo } from '../data/content';
import './Navbar.css';

const PRIMARY = navLinks.slice(0, 6);   // About → Gallery
const MORE    = navLinks.slice(6);      // Achievements → Contact

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen]     = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onClickOut = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    document.addEventListener('mousedown', onClickOut);
    return () => document.removeEventListener('mousedown', onClickOut);
  }, []);

  const close = () => { setMobileOpen(false); setMoreOpen(false); };

  return (
    <header>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="nav-brand" aria-label="Cheptalal Primary School homepage" onClick={close}>
              <div className="nav-logo" aria-hidden="true">
                <svg viewBox="0 0 26 26" fill="none">
                  <path d="M13 3L3 9v14h7v-6h6v6h7V9L13 3z" fill="white" opacity=".9"/>
                  <circle cx="13" cy="9" r="3" fill="#C8861A"/>
                </svg>
              </div>
              <div className="nav-name">
                <strong>{schoolInfo.shortName}</strong>
                <span>{schoolInfo.location}</span>
              </div>
            </Link>

            <ul className="nav-links" role="list">
              {PRIMARY.map((link) => (
                <li key={link.href}>
                  <RouterNavLink to={link.href} className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
                    {link.label}
                  </RouterNavLink>
                </li>
              ))}
              {/* More dropdown */}
              <li ref={moreRef as React.RefObject<HTMLLIElement>} style={{ position:'relative' }}>
                <button
                  className={`nav-more-btn ${moreOpen ? 'open' : ''}`}
                  onClick={() => setMoreOpen((v) => !v)}
                  aria-expanded={moreOpen}
                  aria-haspopup="menu"
                >
                  More <ChevronDown size={13} strokeWidth={2.5} className={moreOpen ? 'rotated' : ''}/>
                </button>
                {moreOpen && (
                  <div className="nav-dropdown" role="menu">
                    {MORE.map((link) => (
                      <RouterNavLink key={link.href} to={link.href} role="menuitem"
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={close}>
                        {link.label}
                      </RouterNavLink>
                    ))}
                  </div>
                )}
              </li>
            </ul>

            <div className="nav-cta">
              <Link to="/contact" className="btn btn-outline" onClick={close}>Get in Touch</Link>
              <Link to="/admissions" className="btn btn-primary" onClick={close}>Apply Now →</Link>
            </div>

            <button
              className={`hamburger ${mobileOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      <nav className={`mob-menu ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen} aria-label="Mobile navigation">
        <div className="mob-links">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} onClick={close}>{link.label}</Link>
          ))}
        </div>
        <Link to="/admissions" onClick={close} className="btn btn-primary"
          style={{ justifyContent:'center', width:'100%', fontSize:'.95rem' }}>
          Apply for Admission →
        </Link>
      </nav>
    </header>
  );
}
