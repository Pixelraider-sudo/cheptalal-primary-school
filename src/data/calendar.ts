export type TermKey = 'term1' | 'term2' | 'term3';

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;       // ISO date or date range "YYYY-MM-DD"
  endDate?: string;
  type: 'exam' | 'holiday' | 'meeting' | 'event' | 'term';
  description?: string;
}

export interface Term {
  key: TermKey;
  label: string;
  opens: string;
  closes: string;
  events: CalendarEvent[];
}

export const academicYear = '2026';

export const terms: Term[] = [
  {
    key: 'term1',
    label: 'Term 1',
    opens: '2026-01-05',
    closes: '2026-04-03',
    events: [
      { id: 'e1', title: 'Term 1 Opens', date: '2026-01-05', type: 'term' },
      { id: 'e2', title: 'Mid-Term Break', date: '2026-02-16', endDate: '2026-02-20', type: 'holiday', description: '5-day mid-term recess' },
      { id: 'e3', title: 'End-of-Term Exams', date: '2026-03-23', endDate: '2026-03-27', type: 'exam' },
      { id: 'e4', title: 'Parents Meeting', date: '2026-03-28', type: 'meeting', description: 'Annual Term 1 report-sharing meeting' },
      { id: 'e5', title: 'Term 1 Closes', date: '2026-04-03', type: 'term' },
    ],
  },
  {
    key: 'term2',
    label: 'Term 2',
    opens: '2026-04-27',
    closes: '2026-07-31',
    events: [
      { id: 'e6', title: 'Term 2 Opens', date: '2026-04-27', type: 'term' },
      { id: 'e7', title: 'Madaraka Day Holiday', date: '2026-06-01', type: 'holiday' },
      { id: 'e8', title: 'Mid-Term Break', date: '2026-06-08', endDate: '2026-06-12', type: 'holiday' },
      { id: 'e9', title: 'Inter-House Sports Day', date: '2026-06-26', type: 'event' },
      { id: 'e10', title: 'End-of-Term Exams', date: '2026-07-20', endDate: '2026-07-24', type: 'exam' },
      { id: 'e11', title: 'Term 2 Closes', date: '2026-07-31', type: 'term' },
    ],
  },
  {
    key: 'term3',
    label: 'Term 3',
    opens: '2026-08-24',
    closes: '2026-11-06',
    events: [
      { id: 'e12', title: 'Term 3 Opens', date: '2026-08-24', type: 'term' },
      { id: 'e13', title: 'Parents Meeting', date: '2026-08-29', type: 'meeting' },
      { id: 'e14', title: 'Mashujaa Day Holiday', date: '2026-10-20', type: 'holiday' },
      { id: 'e15', title: 'CBC Learning Exhibition', date: '2026-10-03', type: 'event', description: 'Learners showcase CBC projects across all grades' },
      { id: 'e16', title: 'End-of-Year Exams', date: '2026-10-19', endDate: '2026-10-23', type: 'exam' },
      { id: 'e17', title: 'Prize Giving / Closing Day', date: '2026-11-06', type: 'event', description: 'Annual prize-giving and closing assembly' },
      { id: 'e18', title: 'Term 3 Closes', date: '2026-11-06', type: 'term' },
    ],
  },
];
