export interface Teacher {
  id: string;
  name: string;
  title: string;       // e.g. "Headteacher", "Grade 4 Class Teacher"
  subject: string;      // e.g. "Mathematics & English"
  department: string;   // e.g. "Lower Primary", "Upper Primary", "Administration"
  photoUrl: string;
  badge: string;        // e.g. "Grade 4", "Headteacher"
  bio?: string;
}

export type NewsCategoryIcon = 'achievement' | 'community' | 'admissions' | 'sports' | 'facilities';

export interface NewsItem {
  id: string;
  title: string;
  date: string;          // ISO date string
  category: string;      // e.g. "Achievement", "Community", "Admissions"
  categoryIcon: NewsCategoryIcon;
  summary: string;
  content?: string;
  imageUrl: string;
  featured?: boolean;
}

export type GalleryCategory = 'Campus' | 'Academics' | 'Events' | 'Sports' | 'Learning';

export interface GalleryImage {
  id: string;
  src: string;
  thumb: string;
  caption: string;
  category: GalleryCategory;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  text: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export interface JourneyLevel {
  id: string;
  shortLabel: string;   // e.g. "PP1"
  fullLabel: string;    // e.g. "Pre-Primary 1"
  ageRange: string;
  learningFocus: string;
  subjects: { id: string; name: string }[];
  competencies: string[];
}

export interface HeadteacherMessage {
  name: string;
  title: string;
  portraitUrl: string;
  message: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;          // ISO date string
  location: string;
  description: string;
}

export interface DownloadItem {
  id: string;
  label: string;
  fileType: string;      // e.g. "PDF · Coming soon"
}

export type SchoolLifeIcon = 'sports' | 'music' | 'drama' | 'clubs' | 'environment' | 'trips';

export interface SchoolLifeItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  iconKey: SchoolLifeIcon;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}
