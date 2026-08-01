import { motion } from 'framer-motion';
import { statItems } from '../data/content';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion';
import './StatsBar.css';
function StatItem({value,suffix,label}:{value:number;suffix:string;label:string}) {
  const {ref,value:display}=useCounterAnimation(value);
  return <div className="stat-item"><span className="stat-num" ref={ref}>{display}{suffix}</span><div className="stat-label">{label}</div></div>;
}
export default function StatsBar() {
  return (
    <div className="stats-bar" role="region" aria-label="School at a glance">
      <div className="container">
        <motion.div className="stats-grid" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
          {statItems.map(s=><motion.div key={s.id} variants={staggerItem} className="stats-cell"><StatItem value={s.value} suffix={s.suffix} label={s.label}/></motion.div>)}
        </motion.div>
      </div>
    </div>
  );
}
