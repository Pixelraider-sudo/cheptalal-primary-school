import { Link } from 'react-router-dom';
import { Globe, Share2, MessageCircle, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { schoolInfo } from '../data/content';
import { trackPhoneClick, trackEmailClick, trackWhatsAppClick } from '../lib/analytics';
import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top"><div className="container"><div className="footer-grid">
        <div className="footer-brand">
          <div className="f-logo" aria-hidden="true"><svg viewBox="0 0 26 26" fill="none" width="28" height="28"><path d="M13 3L3 9v14h7v-6h6v6h7V9L13 3z" fill="white" opacity=".9"/><circle cx="13" cy="9" r="3" fill="#F59E0B"/></svg></div>
          <h3>{schoolInfo.name}</h3>
          <p>CBC-aligned quality education in {schoolInfo.location}, {schoolInfo.country}. Nurturing tomorrow's leaders since {schoolInfo.founded}.</p>
          <div className="f-socials" aria-label="Social media links">
            <a href="#" className="f-soc" aria-label="Facebook"><Globe size={15} strokeWidth={1.75}/></a>
            <a href={schoolInfo.whatsapp} className="f-soc" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}><MessageCircle size={15} strokeWidth={1.75}/></a>
            <a href="#" className="f-soc" aria-label="Twitter / X"><Share2 size={15} strokeWidth={1.75}/></a>
          </div>
        </div>
        <div className="f-col"><h4>Quick Links</h4><ul>
          {[['About Us','/about'],['Curriculum','/curriculum'],['Our Teachers','/teachers'],['Gallery','/gallery'],['News & Events','/news'],['Achievements','/achievements']].map(([l,h])=>(
            <li key={h}><Link to={h}><ArrowRight size={12} strokeWidth={2.5} aria-hidden="true"/>{l}</Link></li>
          ))}
        </ul></div>
        <div className="f-col"><h4>Admissions</h4><ul>
          {[['How to Apply','/admissions'],['Requirements','/admissions#faq'],['Term Dates','/calendar'],['Downloads','/admissions'],['Contact Admissions','/contact']].map(([l,h])=>(
            <li key={l}><Link to={h}><ArrowRight size={12} strokeWidth={2.5} aria-hidden="true"/>{l}</Link></li>
          ))}
        </ul></div>
        <div className="f-col"><h4>Contact</h4><ul className="f-contact-list">
          <li><a href={`tel:${schoolInfo.phoneHref}`} onClick={()=>trackPhoneClick(schoolInfo.phone)}><Phone size={13} strokeWidth={2}/>{schoolInfo.phone}</a></li>
          <li><a href={`mailto:${schoolInfo.email}`} onClick={()=>trackEmailClick(schoolInfo.email)}><Mail size={13} strokeWidth={2}/>{schoolInfo.email}</a></li>
          <li><span><MapPin size={13} strokeWidth={2}/>{schoolInfo.location}</span></li>
          <li><span><Clock size={13} strokeWidth={2}/>Mon–Fri 7:30–17:00</span></li>
        </ul></div>
      </div></div></div>
      <div className="footer-bottom"><div className="container">
        <span>&copy; {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</span>
        <span>Designed by <a href="#" rel="noopener">PIXELFORGE</a></span>
      </div></div>
    </footer>
  );
}
