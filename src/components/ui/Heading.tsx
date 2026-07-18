import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

interface HeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'default' | 'inverted';
  id?: string;
  className?: string;
}

export default function Heading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'default',
  id,
  className = '',
}: HeadingProps) {
  return (
    <motion.div
      className={`sh ${align === 'center' ? 'center' : ''} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {eyebrow && <div className={`sl ${tone === 'inverted' ? 'sl-inverted' : ''}`}>{eyebrow}</div>}
      <h2 className={`st ${tone === 'inverted' ? 'st-inverted' : ''}`} id={id}>
        {title}
      </h2>
      {subtitle && <p className={`ss ${tone === 'inverted' ? 'ss-inverted' : ''}`}>{subtitle}</p>}
    </motion.div>
  );
}
