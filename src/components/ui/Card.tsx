import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, hoverLift, viewportOnce } from '../../lib/motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  as?: 'div' | 'article';
}

export default function Card({ children, className = '', hover = true, delay = 0, as = 'div' }: CardProps) {
  const Component = motion[as];
  return (
    <Component
      className={`card ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
      {...(hover ? hoverLift : {})}
    >
      {children}
    </Component>
  );
}
