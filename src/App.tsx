import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import BackToTop from './components/BackToTop';
import { ToastProvider } from './components/ToastProvider';
import StructuredData from './components/StructuredData';

// Route-level code splitting — each page loads only when navigated to
const Home         = lazy(() => import('./pages/Home'));
const About        = lazy(() => import('./pages/About'));
const Curriculum   = lazy(() => import('./pages/Curriculum'));
const Teachers     = lazy(() => import('./pages/Teachers'));
const News         = lazy(() => import('./pages/News'));
const GalleryPage  = lazy(() => import('./pages/Gallery'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Calendar     = lazy(() => import('./pages/Calendar'));
const Admissions   = lazy(() => import('./pages/Admissions'));
const Contact      = lazy(() => import('./pages/Contact'));
const NotFound     = lazy(() => import('./pages/NotFound'));

// Minimal fallback shown during route transitions
function RouteFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 40, height: 40, borderRadius: '50%', border: '3px solid var(--green-light)', borderTopColor: 'var(--green)', animation: 'spin 0.7s linear infinite' }} aria-label="Loading page" role="status" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ToastProvider>
          <StructuredData />
          <PageLoader />
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Navbar />
          <main id="main-content">
            <ScrollToTop />
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/"             element={<Home />} />
                <Route path="/about"        element={<About />} />
                <Route path="/curriculum"   element={<Curriculum />} />
                <Route path="/teachers"     element={<Teachers />} />
                <Route path="/news"         element={<News />} />
                <Route path="/gallery"      element={<GalleryPage />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/calendar"     element={<Calendar />} />
                <Route path="/admissions"   element={<Admissions />} />
                <Route path="/contact"      element={<Contact />} />
                <Route path="*"             element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </ToastProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
