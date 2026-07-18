import { motion } from 'framer-motion';
import { statItems } from '../data/content';
import { StatCard, Container } from './ui';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion';
import './StatsBar.css';

export default function StatsBar() {
  return (
    <div className="stats-bar" role="region" aria-label="School statistics">
      <Container>
        <motion.div
          className="stats-inner"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {statItems.map((s) => (
            <motion.div key={s.id} variants={staggerItem} className="stats-cell">
              <StatCard value={s.value} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
