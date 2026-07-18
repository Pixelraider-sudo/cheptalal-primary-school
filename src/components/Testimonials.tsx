import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/content';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <motion.div
      className="testi-grid"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {testimonials.map((t) => (
        <motion.div className="testi-card" key={t.id} variants={staggerItem}>
          <Quote size={28} strokeWidth={1.5} className="testi-quote-icon" aria-hidden="true" />
          <p className="testi-text">{t.text}</p>
          <div className="testi-author">
            <div className="testi-avatar">
              <img src={t.avatarUrl} alt={t.name} loading="lazy" />
            </div>
            <div>
              <div className="testi-name">{t.name}</div>
              <div className="testi-role">{t.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
