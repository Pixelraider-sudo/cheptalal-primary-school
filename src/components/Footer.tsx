import { Link } from 'react-router-dom';
import { Globe, Share2, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { schoolInfo } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="f-logo" aria-hidden="true">
              <svg viewBox="0 0 26 26" fill="none" width="28" height="28">
                <path d="M13 3L3 9v14h7v-6h6v6h7V9L13 3z" fill="white" opacity=".85" />
                <circle cx="13" cy="9" r="3" fill="#C8861A" />
              </svg>
            </div>
            <h3>{schoolInfo.name}</h3>
            <p>CBC-aligned quality education in {schoolInfo.location}, {schoolInfo.country}. Nurturing leaders since {schoolInfo.founded}.</p>
            <div className="f-socials" aria-label="Social media links">
              <a href="#" className="f-soc" aria-label="Facebook"><Globe size={16} strokeWidth={1.75} /></a>
              <a href={schoolInfo.whatsapp} className="f-soc" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} strokeWidth={1.75} /></a>
              <a href="#" className="f-soc" aria-label="Social"><Share2 size={16} strokeWidth={1.75} /></a>
            </div>
          </div>

          <div className="f-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/curriculum">Curriculum</Link></li>
              <li><Link to="/teachers">Our Teachers</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/news">News &amp; Events</Link></li>
            </ul>
          </div>

          <div className="f-col">
            <h4>Admissions</h4>
            <ul>
              <li><Link to="/admissions">How to Apply</Link></li>
              <li><Link to="/admissions#faq">Requirements</Link></li>
              <li><Link to="/admissions#faq">Term Dates</Link></li>
              <li><Link to="/contact">Contact Admissions</Link></li>
            </ul>
          </div>

          <div className="f-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`tel:${schoolInfo.phoneHref}`} className="f-contact-item">
                  <Phone size={13} strokeWidth={2} aria-hidden="true" />
                  {schoolInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${schoolInfo.email}`} className="f-contact-item">
                  <Mail size={13} strokeWidth={2} aria-hidden="true" />
                  {schoolInfo.email}
                </a>
              </li>
              <li>
                <span className="f-contact-item">
                  <MapPin size={13} strokeWidth={2} aria-hidden="true" />
                  {schoolInfo.location}
                </span>
              </li>
              <li>
                <span className="f-contact-item">
                  <Clock size={13} strokeWidth={2} aria-hidden="true" />
                  Mon–Fri 7:30–17:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
          </span>
          <span>
            Designed by <a href="#">PIXELFORGE</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
