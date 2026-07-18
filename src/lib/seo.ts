// Central SEO configuration — all page metadata defined here.
// Replace string values when real domain / GSC token are available.

export const SITE = {
  name: 'Cheptalal Primary School',
  shortName: 'Cheptalal Primary',
  url: 'https://cheptalalprimary.sch.ke',
  defaultTitle: 'Cheptalal Primary School – Quality CBC Education in Bomet County, Kenya',
  defaultDescription:
    'Cheptalal Primary School offers CBC-aligned quality education in Konoin Sub-County, Bomet County, Kenya. Enrolling learners from PP1 to Grade 6 since 1989.',
  defaultImage: 'https://cheptalalprimary.sch.ke/og-image.jpg',
  locale: 'en_KE',
  twitterHandle: '@CheptalaPrimary',
  themeColor: '#1B5E20',
  founded: '1989',
  phone: '+254700000000',
  email: 'info@cheptalalprimary.sch.ke',
  gscVerification: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
  address: {
    street: 'Konoin Sub-County',
    locality: 'Konoin',
    region: 'Bomet County',
    country: 'KE',
  },
  coordinates: { lat: '-0.60962', lng: '35.37282' },
  keywords: [
    'Cheptalal Primary School',
    'CBC school Kenya',
    'primary school Bomet County',
    'Konoin Sub-County school',
    'CBC curriculum Kenya',
    'Kenya primary school admissions',
    'PP1 PP2 Grade 1 to 6 Kenya',
  ],
} as const;

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'Cheptalal Primary School | CBC Education in Konoin, Bomet County',
    description:
      'Welcome to Cheptalal Primary School offering quality CBC-aligned education in Konoin Sub-County, Bomet County, Kenya. Enrol your child today for PP1 to Grade 6.',
    path: '/',
    keywords: ['CBC school Bomet', 'primary school Kenya', 'school admissions Bomet County'],
  },
  about: {
    title: 'About Us | Cheptalal Primary School Established 1989',
    description:
      'Discover the history, mission, vision, and values of Cheptalal Primary School. A leading CBC primary school in Konoin Sub-County, Bomet County since 1989.',
    path: '/about',
    keywords: ['about Cheptalal Primary', 'school history Kenya', 'CBC mission vision'],
  },
  curriculum: {
    title: 'CBC Curriculum | Cheptalal Primary School Academics',
    description:
      'Explore the Competency-Based Curriculum at Cheptalal Primary. PP1 to Grade 6 subjects, learning outcomes, and the CBC learning journey explained for parents.',
    path: '/curriculum',
    keywords: ['CBC curriculum Kenya', 'CBC subjects primary school', 'PP1 to Grade 6 Kenya'],
  },
  teachers: {
    title: 'Our Teachers | Qualified TSC-Certified Staff at Cheptalal Primary',
    description:
      'Meet the experienced TSC-certified teaching staff at Cheptalal Primary School. Dedicated educators committed to every learner\'s success in Bomet County.',
    path: '/teachers',
    keywords: ['TSC certified teachers Kenya', 'primary school teachers Bomet', 'qualified CBC teachers'],
  },
  news: {
    title: 'News & Events | Cheptalal Primary School Updates',
    description:
      'Latest news, announcements, and upcoming events from Cheptalal Primary School. Stay informed about school life, achievements, and community activities.',
    path: '/news',
    keywords: ['school news Kenya', 'primary school events Bomet', 'school announcements Kenya'],
  },
  gallery: {
    title: 'Photo Gallery | Cheptalal Primary School Life in Pictures',
    description:
      'Browse photos of school life at Cheptalal Primary: classrooms, sports, events, arts, and campus. A vibrant learning community in Bomet County, Kenya.',
    path: '/gallery',
    keywords: ['school gallery Kenya', 'primary school photos Bomet', 'school life Kenya'],
  },
  achievements: {
    title: 'Awards & Achievements | Cheptalal Primary School Excellence',
    description:
      'Celebrating excellence at Cheptalal Primary. Explore academic, sports, arts, and community achievements of our learners and staff over the years.',
    path: '/achievements',
    keywords: ['school awards Kenya', 'primary school achievements Bomet', 'CBC school excellence Kenya'],
  },
  calendar: {
    title: 'Academic Calendar 2026 | Cheptalal Primary School Term Dates',
    description:
      'Full academic calendar for Cheptalal Primary School 2026. Term dates, exam schedules, holidays, parents meetings, and key school events all in one place.',
    path: '/calendar',
    keywords: ['Kenya school term dates 2026', 'Bomet school calendar', 'CBC school calendar Kenya'],
  },
  admissions: {
    title: 'Admissions | Join Cheptalal Primary School Apply Today',
    description:
      'Enrol your child at Cheptalal Primary School. Admission requirements, process, term dates, downloadable forms, and frequently asked questions for parents.',
    path: '/admissions',
    keywords: ['school admissions Kenya', 'enrol primary school Bomet', 'PP1 Grade 1 admissions Kenya'],
  },
  contact: {
    title: 'Contact Us | Cheptalal Primary School Konoin, Bomet County',
    description:
      'Contact Cheptalal Primary School in Konoin Sub-County. Find our address, phone number, email, office hours, and send us a message directly.',
    path: '/contact',
    keywords: ['contact Cheptalal Primary', 'school phone Bomet', 'primary school address Konoin'],
  },
};
