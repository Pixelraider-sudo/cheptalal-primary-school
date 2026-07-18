import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Target, Sparkles } from 'lucide-react';
import { journeyLevels } from '../data/journey';
import { Badge } from './ui';
import { EASE } from '../lib/motion';
import './LearningJourney.css';

export default function LearningJourney() {
  const [activeId, setActiveId] = useState(journeyLevels[0].id);
  const active = journeyLevels.find((l) => l.id === activeId) ?? journeyLevels[0];

  return (
    <div>
      <div className="journey-rail" role="tablist" aria-label="CBC grade levels">
        {journeyLevels.map((level, i) => (
          <div key={level.id} style={{ display: 'flex', alignItems: 'center' }}>
            <button
              role="tab"
              aria-selected={activeId === level.id}
              className={`journey-step ${activeId === level.id ? 'active' : ''}`}
              onClick={() => setActiveId(level.id)}
            >
              <span className="journey-step-dot">{level.shortLabel.replace('Grade ', 'G')}</span>
              <span className="journey-step-label">{level.shortLabel}</span>
            </button>
            {i < journeyLevels.length - 1 && <div className="journey-connector" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="journey-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: EASE }}
          role="tabpanel"
        >
          <div className="journey-panel-grid">
            <div>
              <div className="journey-detail-icon" aria-hidden="true">
                <BookOpen size={28} strokeWidth={1.75} />
              </div>
              <Badge tone="gold">{active.ageRange}</Badge>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', margin: '12px 0 10px' }}>
                {active.fullLabel}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 20 }}>
                {active.learningFocus}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <Target size={16} strokeWidth={2} color="var(--green-mid)" aria-hidden="true" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text)' }}>Key Competencies</span>
              </div>
              <div className="journey-competencies">
                {active.competencies.map((c) => (
                  <Badge key={c} tone="green" icon={Sparkles}>
                    {c}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text)', marginBottom: 14 }}>
                Subjects & Learning Areas
              </div>
              <div className="journey-subject-list">
                {active.subjects.map((subj) => (
                  <div className="journey-subject" key={subj.id}>
                    <BookOpen size={16} strokeWidth={2} className="journey-subject-icon" aria-hidden="true" />
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-mid)', fontWeight: 500 }}>
                      {subj.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
