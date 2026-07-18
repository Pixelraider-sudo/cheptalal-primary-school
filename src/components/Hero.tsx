import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui';
import { schoolInfo } from '../data/content';
import { EASE } from '../lib/motion';
import './Hero.css';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1800&q=85';

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome banner">
      <div className="hero-bg" style={{ backgroundImage: `url('${HERO_IMAGE}')` }} aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            {schoolInfo.location} · {schoolInfo.country}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
          >
            Shaping Tomorrow&rsquo;s Leaders
            <br />
            Through Quality Education
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.36 }}
          >
            {schoolInfo.shortName} offers a CBC-aligned, nurturing learning environment where every child in Bomet
            County develops the knowledge, confidence, and values to thrive.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          >
            <Button to="/admissions" variant="gold">
              Apply for Admission
              <ArrowRight size={17} strokeWidth={2.25} />
            </Button>
            <Button to="/about" variant="ghost">
              Explore School
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-scroll"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} strokeWidth={2} />
        </motion.div>
      </motion.div>
    </section>
  );
}
