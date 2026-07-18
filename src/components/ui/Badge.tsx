import type { LucideIcon } from 'lucide-react';
import type { ReactNode, CSSProperties } from 'react';

type BadgeTone = 'green' | 'gold' | 'outline-light';

interface BadgeProps {
  children: ReactNode;
  icon?: LucideIcon;
  tone?: BadgeTone;
  className?: string;
  style?: CSSProperties;
}

export default function Badge({ children, icon: Icon, tone = 'green', className = '', style }: BadgeProps) {
  return (
    <span className={`badge badge-${tone} ${className}`} style={style}>
      {Icon && <Icon size={14} strokeWidth={2.25} aria-hidden="true" />}
      {children}
    </span>
  );
}
