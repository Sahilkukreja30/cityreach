import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from '../../../components/Magnetic/Magnetic';
import LiquidEther from '../../../components/LiquidEther/LiquidEther';
import { useCountry } from '../../../hooks/useCountry';
import './sections.css';

const PhoneIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const InstagramIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const WhatsAppIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MailIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function Contact({ onNavClick }) {
  const country = useCountry();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact-section" className="contact-footer-container">
      {/* LiquidEther WebGL background animation layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
        <div className={`footer-grid ${country === 'in' ? 'has-location' : ''}`}>
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <h2 className="footer-brand-title">
              CITYREACH <br />
              DIGITAL
            </h2>
            <p className="footer-brand-desc">
              Premium digital solutions serving clients globally. We build state-of-the-art Web experiences, organic search strategy, and scalable branding assets.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => onNavClick('about-section')} className="footer-text-link">
                  ABOUT US
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services-section')} className="footer-text-link">
                  SERVICES
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('enquiry-section')} className="footer-text-link">
                  ENQUIRE
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('contact-section')} className="footer-text-link">
                  CONTACT
                </button>
              </li>
              <li>
                <Link to={`/${country}/blogs`} className="footer-text-link">
                  BUSINESS BLOGS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="footer-col">
            <h3 className="footer-col-title">Connect With Us</h3>
            <div className="footer-social-grid">
              <Magnetic>
                <a 
                  href="https://instagram.com/cityreachdigital" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href={country === 'in' ? "tel:+919111110422" : "tel:+971555037299"} 
                  className="footer-social-btn"
                  aria-label="Call Phone"
                >
                  <PhoneIcon size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href={country === 'in' ? "https://wa.me/919111110422" : "https://wa.me/971555037299"} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href="mailto:hello@cityreachdigital.com" 
                  className="footer-social-btn"
                  aria-label="Email"
                >
                  <MailIcon size={20} />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Column 4: Location (Only for India) */}
          {country === 'in' && (
            <div className="footer-col">
              <h3 className="footer-col-title">Our Office</h3>
              <p className="footer-location-text">
                Shop No. 5, near Arun Bakery,<br />
                CAT Square, Sahakar Nagar,<br />
                Indore, MP 452013
              </p>
              <a 
                href="https://maps.app.goo.gl/CzPjPqUosX8J23xz5" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-map-btn"
              >
                Open in Maps
              </a>
              <div className="footer-map-iframe-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.787702846985!2d75.81488102298642!3d22.6690954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd476c282071%3A0xa44173c62ac8943c!2sDMH%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DMH Enterprises Location"
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Footer bottom copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} CITYREACH DIGITAL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
