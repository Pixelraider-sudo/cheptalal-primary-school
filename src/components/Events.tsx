import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { events } from '../data/events';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion';

function parseDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.getDate().toString().padStart(2, '0'),
    month: d.toLocaleString('en-KE', { month: 'short' }).toUpperCase(),
    full: d.toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' }),
  };
}

export default function Events() {
  return (
    <motion.div
      className="event-grid"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {events.map((evt) => {
        const { day, month, full } = parseDate(evt.date);
        return (
          <motion.div key={evt.id} className="event-card" variants={staggerItem}>
            <div className="event-date-block" aria-label={full}>
              <span className="event-date-day">{day}</span>
              <span className="event-date-month">{month}</span>
            </div>
            <div className="event-content">
              <h3>{evt.title}</h3>
              <div className="event-meta">
                <span className="event-meta-item">
                  <Calendar size={13} strokeWidth={2} aria-hidden="true" />
                  <time dateTime={evt.date}>{full}</time>
                </span>
                <span className="event-meta-item">
                  <MapPin size={13} strokeWidth={2} aria-hidden="true" />
                  {evt.location}
                </span>
              </div>
              <p>{evt.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
