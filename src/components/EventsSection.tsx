import { motion } from 'framer-motion';
import { MapPin, CalendarDays } from 'lucide-react';
import { events } from '../data/events';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/motion';

function formatEventDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString('en-KE', { day: 'numeric' }),
    month: d.toLocaleDateString('en-KE', { month: 'short' }).toUpperCase(),
    full: d.toLocaleDateString('en-KE', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
  };
}

export default function EventsSection() {
  return (
    <motion.div
      className="event-grid"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {events.map((event) => {
        const { day, month, full } = formatEventDate(event.date);
        return (
          <motion.div className="event-card" key={event.id} variants={staggerItem}>
            <div className="event-date-block" aria-label={full}>
              <span className="event-date-day">{day}</span>
              <span className="event-date-month">{month}</span>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <div className="event-meta">
                <div className="event-meta-item">
                  <CalendarDays size={13} strokeWidth={2} aria-hidden="true" />
                  <time dateTime={event.date}>{full}</time>
                </div>
                <div className="event-meta-item">
                  <MapPin size={13} strokeWidth={2} aria-hidden="true" />
                  {event.location}
                </div>
              </div>
              <p>{event.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
