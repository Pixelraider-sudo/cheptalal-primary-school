import type { GalleryImage, FAQItem, Testimonial, StatItem, NavLink } from '../types';

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    caption: 'Classroom Learning',
    category: 'Learning',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
    caption: 'Reading Time',
    category: 'Learning',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&q=80',
    caption: 'Science Discovery',
    category: 'Academics',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80',
    caption: 'Sports & Play',
    category: 'Sports',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
    caption: 'Guided Learning',
    category: 'Learning',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=400&q=80',
    caption: 'Creative Arts',
    category: 'Academics',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80',
    caption: 'Science Fair Winners',
    category: 'Events',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80',
    caption: 'Earth Day Tree Planting',
    category: 'Events',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=400&q=80',
    caption: 'Inter-House Sports Day',
    category: 'Sports',
  },
  {
    id: 'g10',
    src: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80',
    caption: 'Teacher-Led Instruction',
    category: 'Academics',
  },
  {
    id: 'g11',
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80',
    caption: 'School Campus Grounds',
    category: 'Campus',
  },
  {
    id: 'g12',
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=85',
    thumb: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
    caption: 'School Buildings',
    category: 'Campus',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'f1',
    question: 'What age does a child need to be to join Grade 1?',
    answer:
      'Children joining Grade 1 should be at least 6 years old. For Pre-Primary (PP1), learners should be at least 4 years of age. Please bring the original birth certificate during admission.',
  },
  {
    id: 'f2',
    question: 'What is the school uniform?',
    answer:
      'Our uniform consists of a green shirt or blouse and khaki shorts or skirts. A green sweater or cardigan is worn during cold weather. Uniforms are available at the school office or approved suppliers in Bomet Town.',
  },
  {
    id: 'f3',
    question: 'Are there school meals provided?',
    answer:
      'Yes. Cheptalal Primary participates in the National Government School Feeding Programme. Learners receive a midday meal. Parents may also provide packed snacks for morning break.',
  },
  {
    id: 'f4',
    question: 'What are the school term dates for 2026?',
    answer:
      'Term 1: January 6 to April 4. Term 2: April 28 to July 31. Term 3: August 24 to November 7. These align with the Kenya Ministry of Education calendar. Contact the office for any updates.',
  },
  {
    id: 'f5',
    question: 'How can I get involved as a parent?',
    answer:
      'We strongly encourage parent involvement. Join the Parent-Teacher Association which meets each term. You can also volunteer for school activities, sports days, and community events.',
  },
  {
    id: 'f6',
    question: 'Does the school offer transport?',
    answer:
      'The school does not operate its own transport, but many families share transport arrangements. The school office can help connect you with other parents in your neighbourhood.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'te1',
    text: 'My daughter joined Cheptalal in PP1 and has grown tremendously, not just academically but in confidence and character. The teachers know every child by name.',
    name: 'Caroline Mutai',
    role: 'Parent · Grade 4 Learner',
    avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
  },
  {
    id: 'te2',
    text: 'I started at Cheptalal in 2008. The foundation I received here gave me the discipline and work ethic that took me through secondary school and all the way to university.',
    name: 'Brian Kiptoo',
    role: 'Alumnus · Class of 2014',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 'te3',
    text: 'The community spirit here is exceptional. Teachers, parents, and local leaders all work together to support every learner in the village.',
    name: 'Elder Simon Rono',
    role: 'Community Leader · Cheptalal',
    avatarUrl: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=100&q=80',
  },
];

export const statItems: StatItem[] = [
  { id: 's1', value: 500, suffix: '+', label: 'Students' },
  { id: 's2', value: 22, suffix: '', label: 'Teachers' },
  { id: 's3', value: 35, suffix: '+', label: 'Years of Excellence' },
  { id: 's4', value: 100, suffix: '%', label: 'CBC Learning' },
];

export const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'Teachers', href: '/teachers' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

export const schoolInfo = {
  name: 'Cheptalal Primary School',
  shortName: 'Cheptalal Primary',
  location: 'Konoin Sub-County, Bomet County',
  country: 'Kenya',
  phone: '+254 700 000 000',
  phoneHref: '+254700000000',
  email: 'info@cheptalalprimary.sch.ke',
  founded: 1989,
  motto: 'Excellence · Discipline · Service',
  officeHours: 'Monday to Friday: 7:30 AM – 5:00 PM',
  saturdayHours: 'Saturday: 9:00 AM – 12:00 PM (by appointment)',
  mapQuery: 'Konoin Bomet County Kenya',
  whatsapp: 'https://wa.me/254700000000',
};
