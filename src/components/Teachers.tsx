import { motion } from 'framer-motion';
import type { Teacher } from '../types';
import { Badge } from './ui';
import { fadeUp, hoverLift, viewportOnce } from '../lib/motion';
import './Teachers.css';

export function TeacherCard({ teacher, delay = 0 }: { teacher: Teacher; delay?: number }) {
  return (
    <motion.div
      className="teacher-card"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
      {...hoverLift}
    >
      <div className="teacher-photo">
        <img src={teacher.photoUrl} alt={`${teacher.name}, ${teacher.title}`} loading="lazy" />
        <div className="teacher-badge">
          <Badge tone="gold">{teacher.badge}</Badge>
        </div>
      </div>
      <div className="teacher-info">
        <h3>{teacher.name}</h3>
        <div className="teacher-role">{teacher.title}</div>
        <div className="teacher-meta">
          <span>{teacher.department}</span>
          <span aria-hidden="true">·</span>
          <span>{teacher.subject}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function TeacherGrid({ teachers }: { teachers: Teacher[] }) {
  return (
    <div className="teacher-grid">
      {teachers.map((t, i) => (
        <TeacherCard key={t.id} teacher={t} delay={(i % 4) * 0.07} />
      ))}
    </div>
  );
}
