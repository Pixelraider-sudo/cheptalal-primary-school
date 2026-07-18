import { useEffect, useState } from 'react';
import { schoolInfo } from '../data/content';
import './PageLoader.css';

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let w = 0;
    const interval = setInterval(() => {
      w += Math.random() * 18 + 5;
      if (w >= 100) {
        w = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 280);
      }
      setProgress(Math.min(w, 100));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`page-loader ${done ? 'done' : ''}`} role="status" aria-label="Loading">
      <div className="page-loader-logo" aria-hidden="true">
        <svg viewBox="0 0 36 36" fill="none" width="36" height="36">
          <path d="M18 3L3 12v21h10v-8h10v8h10V12L18 3z" fill="white" opacity=".9" />
          <circle cx="18" cy="12" r="4" fill="#C8861A" />
        </svg>
      </div>
      <div className="page-loader-name">{schoolInfo.shortName}</div>
      <div className="page-loader-bar" aria-hidden="true">
        <div className="page-loader-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
