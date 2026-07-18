import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../lib/motion';

interface GalleryCardProps {
  src: string;
  caption: string;
  onClick: () => void;
  delay?: number;
  spanClass?: string;
}

export default function GalleryCard({ src, caption, onClick, delay = 0, spanClass = '' }: GalleryCardProps) {
  return (
    <motion.div
      className={`gallery-card ${spanClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View ${caption}`}
    >
      <img src={src} alt={caption} loading="lazy" />
      <div className="gallery-card-overlay">
        <Search size={22} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div className="gallery-card-caption">{caption}</div>
    </motion.div>
  );
}
