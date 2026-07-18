import { motion } from 'framer-motion';
import { schoolLifeItems } from '../data/schoolLife';
import { schoolLifeIcons } from '../lib/icons';
import { fadeUp, viewportOnce } from '../lib/motion';

export default function SchoolLife() {
  return (
    <div className="life-grid">
      {schoolLifeItems.map((item, i) => {
        const Icon = schoolLifeIcons[item.iconKey];
        return (
          <motion.div
            className="life-card"
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ delay: (i % 3) * 0.08 }}
          >
            <img src={item.imageUrl} alt={item.title} loading="lazy" />
            <div className="life-card-overlay">
              <div className="life-card-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={1.75} color="#fff" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
