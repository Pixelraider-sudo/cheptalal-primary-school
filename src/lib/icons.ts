import {
  Trophy,
  Leaf,
  GraduationCap,
  Volleyball,
  Monitor,
  Music,
  Drama,
  Users,
  TreePine,
  Bus,
  type LucideIcon,
} from 'lucide-react';
import type { NewsCategoryIcon, SchoolLifeIcon } from '../types';

export const newsCategoryIcons: Record<NewsCategoryIcon, LucideIcon> = {
  achievement: Trophy,
  community: Leaf,
  admissions: GraduationCap,
  sports: Volleyball,
  facilities: Monitor,
};

export const schoolLifeIcons: Record<SchoolLifeIcon, LucideIcon> = {
  sports: Volleyball,
  music: Music,
  drama: Drama,
  clubs: Users,
  environment: TreePine,
  trips: Bus,
};
