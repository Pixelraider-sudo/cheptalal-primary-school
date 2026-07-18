import type { ReactNode } from 'react';

type SectionTone = 'default' | 'alt' | 'dark';

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export default function Section({
  children,
  tone = 'default',
  id,
  className = '',
  ariaLabel,
  ariaLabelledBy,
}: SectionProps) {
  const toneClass = tone === 'alt' ? 'section-alt' : tone === 'dark' ? 'section-dark' : '';
  return (
    <section
      id={id}
      className={`section ${toneClass} ${className}`}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}
