export interface Achievement {
  id: string;
  year: number;
  title: string;
  category: 'academic' | 'sports' | 'arts' | 'community';
  description: string;
  icon: 'trophy' | 'medal' | 'star' | 'award';
}

export const achievements: Achievement[] = [
  { id: 'a1', year: 2026, title: '1st Place — Bomet County Science Fair', category: 'academic', description: 'Grade 5 & 6 learners won first place with projects on solar water heating and local plant remedies.', icon: 'trophy' },
  { id: 'a2', year: 2025, title: 'Best CBC Implementation Award', category: 'academic', description: 'Recognised by the Sub-County Education Office for outstanding CBC curriculum delivery.', icon: 'award' },
  { id: 'a3', year: 2025, title: 'Inter-Schools Football Champions', category: 'sports', description: 'Our football team won the Konoin Sub-County inter-primary schools championship.', icon: 'trophy' },
  { id: 'a4', year: 2025, title: 'Cultural Day Drama Winners', category: 'arts', description: 'First place at the Bomet County Cultural Festival for dramatic performance.', icon: 'star' },
  { id: 'a5', year: 2024, title: 'Environmental Conservation Award', category: 'community', description: 'Awarded by Kenya Forest Service for the school tree-planting programme — over 1,000 trees planted.', icon: 'award' },
  { id: 'a6', year: 2024, title: '2nd Place — County Athletics Championship', category: 'sports', description: 'Six medals won at the Bomet County Primary Athletics Championship, including two gold.', icon: 'medal' },
  { id: 'a7', year: 2023, title: 'Top School — Konoin Literacy Drive', category: 'academic', description: 'Highest reading comprehension improvement scores across all Sub-County primary schools.', icon: 'star' },
  { id: 'a8', year: 2023, title: 'County Music Festival — Choir Bronze', category: 'arts', description: 'School choir placed third at the Bomet County Music Festival.', icon: 'medal' },
];

export const stats = [
  { label: 'County Competitions Won', value: '12+', since: '2020' },
  { label: 'Academic Distinctions', value: '8', since: '2020' },
  { label: 'Trees Planted', value: '1,000+', since: '2022' },
  { label: 'Sports Medals', value: '24', since: '2020' },
];
