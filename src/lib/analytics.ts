// Analytics abstraction layer — swap gtag for any provider without touching components.
// To activate GA4: set VITE_GA_ID in .env and add the gtag snippet to index.html.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type EventName =
  | 'page_view'
  | 'admissions_click'
  | 'phone_click'
  | 'email_click'
  | 'whatsapp_click'
  | 'download_click'
  | 'gallery_view'
  | 'contact_form_submit'
  | 'contact_form_success';

export function trackEvent(name: EventName, params?: Record<string, string | number>) {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('event', name, params);
  }
  // Debug in dev
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${name}`, params);
  }
}

export function trackPhoneClick(phone: string) {
  trackEvent('phone_click', { phone });
}
export function trackEmailClick(email: string) {
  trackEvent('email_click', { email });
}
export function trackWhatsAppClick() {
  trackEvent('whatsapp_click');
}
export function trackAdmissionsClick(source: string) {
  trackEvent('admissions_click', { source });
}
export function trackDownload(label: string) {
  trackEvent('download_click', { label });
}
export function trackGalleryView(category: string) {
  trackEvent('gallery_view', { category });
}
export function trackContactFormSuccess() {
  trackEvent('contact_form_success');
}
