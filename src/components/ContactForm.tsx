import { useState, type FormEvent } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import type { ContactFormData } from '../types';
import { Button } from './ui';
import { useToast } from './ToastProvider';
import { sanitizeText, sanitizeEmail, sanitizePhone } from '../utils/sanitize';
import { trackContactFormSuccess } from '../lib/analytics';
import './ContactForm.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initial: ContactFormData = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initial);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { showToast } = useToast();

  function update<K extends keyof ContactFormData>(key: K, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const errs: Partial<ContactFormData> = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) errs.email = 'Email address is required';
    else if (!EMAIL_RE.test(form.email.trim())) errs.email = 'Please enter a valid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // TODO: replace with real endpoint (Formspree, EmailJS, or serverless function)
      // Example: await fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(sanitized), headers:{'Content-Type':'application/json'} })
      const sanitized = {
        name: sanitizeText(form.name),
        email: sanitizeEmail(form.email),
        phone: sanitizePhone(form.phone ?? ''),
        subject: sanitizeText(form.subject ?? ''),
        message: sanitizeText(form.message),
      };
      console.debug("[ContactForm] sanitized payload:", JSON.stringify(sanitized).length, "chars");
      await new Promise((r) => setTimeout(r, 1400)); // simulate network
      trackContactFormSuccess();
      setSuccess(true);
      setForm(initial);
    } catch {
      showToast('Something went wrong. Please try again or call our office.', 'error');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="cf-success" role="status" aria-live="polite">
        <CheckCircle size={40} strokeWidth={1.5} className="cf-success-icon" aria-hidden="true" />
        <h3>Message Sent Successfully</h3>
        <p>Thank you for reaching out. A member of our team will respond within one business day.</p>
        <Button variant="outline" onClick={() => setSuccess(false)} type="button">Send Another Message</Button>
      </div>
    );
  }

  return (
    <form className="cf" onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form">
      <h3 className="cf-title">Send Us a Message</h3>
      <p className="cf-sub">For admissions, enquiries, or to schedule a visit.</p>
      <div className="form-row">
        <div className="fg">
          <label htmlFor="fname">Full Name <span className="req" aria-hidden="true">*</span></label>
          <input id="fname" type="text" placeholder="Jane Chebet" required autoComplete="name"
            aria-required="true" aria-describedby={errors.name ? 'fname-err' : undefined}
            aria-invalid={!!errors.name} value={form.name} onChange={(e) => update('name', e.target.value)} />
          {errors.name && <span id="fname-err" className="field-error" role="alert">{errors.name}</span>}
        </div>
        <div className="fg">
          <label htmlFor="fphone">Phone Number</label>
          <input id="fphone" type="tel" placeholder="+254 7XX XXX XXX" autoComplete="tel"
            value={form.phone} onChange={(e) => update('phone', e.target.value)} />
        </div>
      </div>
      <div className="fg">
        <label htmlFor="femail">Email Address <span className="req" aria-hidden="true">*</span></label>
        <input id="femail" type="email" placeholder="jane@example.com" required autoComplete="email"
          aria-required="true" aria-describedby={errors.email ? 'femail-err' : undefined}
          aria-invalid={!!errors.email} value={form.email} onChange={(e) => update('email', e.target.value)} />
        {errors.email && <span id="femail-err" className="field-error" role="alert">{errors.email}</span>}
      </div>
      <div className="fg">
        <label htmlFor="fsubject">Subject</label>
        <select id="fsubject" value={form.subject} onChange={(e) => update('subject', e.target.value)}>
          <option value="">Select a topic...</option>
          <option>Admissions Enquiry</option>
          <option>Academic Question</option>
          <option>Fees &amp; Payments</option>
          <option>Schedule a Visit</option>
          <option>Other</option>
        </select>
      </div>
      <div className="fg">
        <label htmlFor="fmessage">Message <span className="req" aria-hidden="true">*</span></label>
        <textarea id="fmessage" rows={5} placeholder="Tell us how we can help..." required
          aria-required="true" aria-describedby={errors.message ? 'fmessage-err' : undefined}
          aria-invalid={!!errors.message} value={form.message} onChange={(e) => update('message', e.target.value)} />
        {errors.message && <span id="fmessage-err" className="field-error" role="alert">{errors.message}</span>}
      </div>
      <Button type="submit" variant="primary" className="cf-submit" disabled={submitting}>
        {submitting ? 'Sending...' : <><Send size={15} strokeWidth={2} /> Send Message</>}
      </Button>
      <div className="cf-note">
        <AlertCircle size={12} strokeWidth={2} aria-hidden="true" />
        Your details are never shared with third parties.
      </div>
    </form>
  );
}
