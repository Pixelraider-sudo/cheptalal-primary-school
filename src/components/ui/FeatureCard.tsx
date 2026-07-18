import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { fadeUp, hoverLift, viewportOnce } from '../../lib/motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      className="feature-card"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
      {...hoverLift}
    >
      <div className="feature-card-icon" aria-hidden="true">
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
