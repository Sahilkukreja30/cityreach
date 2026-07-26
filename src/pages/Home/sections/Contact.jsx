import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from '../../../components/Magnetic/Magnetic';
import './sections.css';

const PhoneIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPinIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
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

export default function Contact({ onNavClick }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact-section" className="contact-footer-container">
      <div className="container">
        <div className="contact-layout">
          {/* Left panel - info */}
          <div className="contact-info-panel">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="contact-header-title"
              >
                Reach Out <br />
                To Us
              </motion.h2>

              <div className="contact-detail-row">
                <div className="contact-detail-item">
                  <label><PhoneIcon size={12} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Inquiries</label>
                  <p>+971 55 503 7299</p>
                </div>
                <div className="contact-detail-item">
                  <label><MapPinIcon size={12} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Location</label>
                  <p>UAE | Serving Clients Globally</p>
                </div>
              </div>
            </div>

            <div>
              <div className="contact-cta-row">
                <Magnetic>
                  <a href="tel:+971555037299" className="btn-primary">
                    Call Now
                  </a>
                </Magnetic>
                <Magnetic>
                  <a 
                    href="https://maps.app.goo.gl/8v35x4gEUt1vG5rQA" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-secondary"
                  >
                    Visit Us
                  </a>
                </Magnetic>
              </div>

              <div className="contact-social-row">
                <label>Connect Via Socials</label>
                <div className="social-links">
                  <Magnetic>
                    <a 
                      href="https://wa.me/971555037299" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="social-icon-btn"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon size={20} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a 
                      href="https://instagram.com/cityreach.ae" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="social-icon-btn"
                      aria-label="Instagram"
                    >
                      <InstagramIcon size={20} />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="map-card-wrapper glass"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115481.25875249563!2d55.20108399580556!3d25.197201777080517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a6d4963%3A0x8f237b2e8ee7cc0e!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1773412288344!5m2!1sen!2s" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="CityReach Location Map"
            />
          </motion.div>
        </div>

        {/* Footer bottom links */}
        <div className="footer-bottom">
          <div className="footer-nav">
            <button onClick={handleScrollTop} className="footer-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Home
            </button>
            <button onClick={() => onNavClick('about-section')} className="footer-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              About
            </button>
            <button onClick={() => onNavClick('services-section')} className="footer-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Services
            </button>
            <button onClick={() => onNavClick('enquiry-section')} className="footer-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Enquire
            </button>
          </div>

          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} CITYREACH DIGITAL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
