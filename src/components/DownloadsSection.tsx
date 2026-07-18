import { motion } from 'framer-motion';
import { FileText, ArrowDownToLine } from 'lucide-react';
import { downloads } from '../data/schoolLife';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion';

export default function DownloadsSection() {
  return (
    <motion.div
      className="download-grid"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {downloads.map((item) => (
        <motion.a
          key={item.id}
          className="download-card"
          href="#"
          onClick={(e: React.MouseEvent) => e.preventDefault()}
          variants={staggerItem}
          aria-label={`Download ${item.label}`}
        >
          <div className="download-icon" aria-hidden="true">
            <FileText size={22} strokeWidth={1.75} />
          </div>
          <div className="download-info">
            <h4>{item.label}</h4>
            <span>{item.fileType}</span>
          </div>
          <ArrowDownToLine size={18} strokeWidth={2} className="download-arrow" aria-hidden="true" />
        </motion.a>
      ))}
    </motion.div>
  );
}
