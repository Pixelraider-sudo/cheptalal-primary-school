import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import type { NewsItem } from '../types';
import { newsCategoryIcons } from '../lib/icons';
import { fadeUp, hoverLift, viewportOnce } from '../lib/motion';
import './News.css';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function NewsCard({ item, featured = false, delay = 0 }: { item: NewsItem; featured?: boolean; delay?: number }) {
  const CategoryIcon = newsCategoryIcons[item.categoryIcon];
  return (
    <motion.article
      className={`news-card ${featured ? 'news-card-featured' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
      {...hoverLift}
    >
      <div className={`news-thumb ${featured ? 'news-thumb-lg' : 'news-thumb-sm'}`}>
        <img src={item.imageUrl} alt={item.title} loading="lazy" />
        <div className="news-overlay" aria-hidden="true" />
        <div className="news-category">
          {CategoryIcon && <CategoryIcon size={12} strokeWidth={2.5} aria-hidden="true" />}
          {item.category}
        </div>
      </div>
      <div className="news-body">
        <div className="news-date">
          <CalendarDays size={13} strokeWidth={2} aria-hidden="true" />
          {formatDate(item.date)}
        </div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <a href={`/news#${item.id}`} className="news-link">
          {featured ? 'Read Full Story' : 'Read More'}
          <ArrowRight size={14} strokeWidth={2.25} />
        </a>
      </div>
    </motion.article>
  );
}

export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <div className="news-list-grid">
      {items.map((item, i) => (
        <NewsCard key={item.id} item={item} delay={i * 0.07} />
      ))}
    </div>
  );
}
