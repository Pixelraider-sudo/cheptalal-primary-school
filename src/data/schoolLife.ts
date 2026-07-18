import type { DownloadItem, SchoolLifeItem } from '../types';

export const downloads: DownloadItem[] = [
  { id: 'd1', label: 'Admission Form', fileType: 'PDF · Coming soon' },
  { id: 'd2', label: 'Academic Calendar', fileType: 'PDF · Coming soon' },
  { id: 'd3', label: 'School Rules & Regulations', fileType: 'PDF · Coming soon' },
  { id: 'd4', label: 'CBC Parent Guide', fileType: 'PDF · Coming soon' },
  { id: 'd5', label: 'Fee Structure', fileType: 'PDF · Coming soon' },
];

export const schoolLifeItems: SchoolLifeItem[] = [
  {
    id: 'sl1',
    title: 'Sports',
    description: 'Football, athletics, and netball build teamwork and discipline.',
    imageUrl: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=700&q=80',
    iconKey: 'sports',
  },
  {
    id: 'sl2',
    title: 'Music',
    description: 'Choir and instrumental groups nurture creativity and confidence.',
    imageUrl: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=700&q=80',
    iconKey: 'music',
  },
  {
    id: 'sl3',
    title: 'Drama',
    description: 'Storytelling and performance develop expression and public speaking.',
    imageUrl: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=700&q=80',
    iconKey: 'drama',
  },
  {
    id: 'sl4',
    title: 'Clubs',
    description: 'Science, debate, and environmental clubs extend learning beyond class.',
    imageUrl: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=700&q=80',
    iconKey: 'clubs',
  },
  {
    id: 'sl5',
    title: 'Environmental Activities',
    description: 'Tree planting and conservation projects build environmental responsibility.',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80',
    iconKey: 'environment',
  },
  {
    id: 'sl6',
    title: 'Educational Trips',
    description: 'Field visits connect classroom learning to the wider world.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80',
    iconKey: 'trips',
  },
];
