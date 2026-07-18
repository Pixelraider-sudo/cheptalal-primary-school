import { MessageCircle } from 'lucide-react';
import { schoolInfo } from '../data/content';
import { trackWhatsAppClick } from '../lib/analytics';
import './FloatingElements.css';

export default function WhatsAppFloat() {
  return (
    <a href={schoolInfo.whatsapp} target="_blank" rel="noopener noreferrer"
      className="wa-float" aria-label="Chat with us on WhatsApp"
      onClick={() => trackWhatsAppClick()}>
      <span className="wa-tooltip">WhatsApp Us</span>
      <MessageCircle size={24} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
