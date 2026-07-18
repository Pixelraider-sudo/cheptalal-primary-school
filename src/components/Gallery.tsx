import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryCategory, GalleryImage } from '../types';
import { GalleryCard } from './ui';
import { scaleIn, viewportOnce } from '../lib/motion';
import './Gallery.css';

const LIGHTBOX_SPAN_CLASSES = ['span-2', '', '', 'row-2', '', '', 'span-2', '', '', ''];

interface GalleryProps {
  images: GalleryImage[];
  showFilters?: boolean;
}

const ALL_CATEGORIES: Array<GalleryCategory | 'All'> = ['All', 'Campus', 'Academics', 'Events', 'Sports', 'Learning'];

export default function Gallery({ images, showFilters = false }: GalleryProps) {
  const [filter, setFilter] = useState<GalleryCategory | 'All'>('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter);
  const isOpen = lightboxIdx !== null;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowLeft') setLightboxIdx((i) => i === null ? null : (i - 1 + filtered.length) % filtered.length);
      if (e.key === 'ArrowRight') setLightboxIdx((i) => i === null ? null : (i + 1) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, filtered.length]);

  return (
    <>
      {showFilters && (
        <div className="gallery-filters" role="tablist">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              className={`gallery-filter ${filter === cat ? 'active' : ''}`}
              onClick={() => { setFilter(cat); setLightboxIdx(null); }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <motion.div
        key={filter}
        className="gallery-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              className={LIGHTBOX_SPAN_CLASSES[i % LIGHTBOX_SPAN_CLASSES.length]}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.92 }}
              variants={scaleIn}
            >
              <GalleryCard
                src={img.thumb}
                caption={img.caption}
                onClick={() => setLightboxIdx(i)}
                spanClass={LIGHTBOX_SPAN_CLASSES[i % LIGHTBOX_SPAN_CLASSES.length]}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={(e) => { if (e.target === e.currentTarget) setLightboxIdx(null); }}
        >
          <button className="lb-close" aria-label="Close lightbox" onClick={() => setLightboxIdx(null)}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l16 16M17 1L1 17" />
            </svg>
          </button>
          <div className="lb-img-wrap">
            <img src={filtered[lightboxIdx!].src} alt={filtered[lightboxIdx!].caption} />
            <button className="lb-btn lb-btn-prev" aria-label="Previous" onClick={() => setLightboxIdx((i) => i === null ? null : (i - 1 + filtered.length) % filtered.length)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 16l-6-6 6-6"/></svg>
            </button>
            <button className="lb-btn lb-btn-next" aria-label="Next" onClick={() => setLightboxIdx((i) => i === null ? null : (i + 1) % filtered.length)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4l6 6-6 6"/></svg>
            </button>
          </div>
          <div className="lb-meta">
            <span className="lb-caption">{filtered[lightboxIdx!].caption}</span>
            <span className="lb-counter">{lightboxIdx! + 1} / {filtered.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
