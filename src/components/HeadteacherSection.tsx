import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { headteacherMessage } from '../data/headteacher';
import { Button } from './ui';
import { fadeUp, viewportOnce } from '../lib/motion';

export default function HeadteacherSection() {
  return (
    <motion.div
      className="headteacher-card"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <div className="headteacher-portrait">
        <img src={headteacherMessage.portraitUrl} alt={headteacherMessage.name} loading="lazy" />
      </div>
      <div>
        <Quote size={32} strokeWidth={1.5} className="headteacher-quote-icon" aria-hidden="true" />
        <p className="headteacher-message">{headteacherMessage.message}</p>
        <div className="headteacher-signature">{headteacherMessage.name.replace(/^(Mrs\.|Mr\.|Ms\.)\s*/, '')}</div>
        <div className="headteacher-name">{headteacherMessage.name}</div>
        <div className="headteacher-title">{headteacherMessage.title}</div>
        <Button to="/about" variant="outline">
          Read More
          <ArrowRight size={16} strokeWidth={2.25} />
        </Button>
      </div>
    </motion.div>
  );
}
