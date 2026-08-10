import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from '../../../components/Magnetic/Magnetic';
import GradientText from '../../../components/GradientText/GradientText';
import WebThreads from '../../../components/WebThreads/WebThreads';
import './sections.css';

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const WhatsAppIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const UAEFlag = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 600 300" width={size} height={size / 2} className={className}>
    <rect width="600" height="300" fill="#fff" />
    <rect width="600" height="100" fill="#00732F" />
    <rect y="200" width="600" height="100" fill="#000" />
    <rect width="150" height="300" fill="#FF0000" />
  </svg>
);

const IndiaFlag = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 900 600" width={size} height={(size * 2) / 3} className={className}>
    <rect width="900" height="600" fill="#138808" />
    <rect width="900" height="400" fill="#FFF" />
    <rect width="900" height="200" fill="#FF9933" />
    <circle cx="450" cy="300" r="80" fill="none" stroke="#000080" strokeWidth="10" />
    <circle cx="450" cy="300" r="15" fill="#000080" />
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 360) / 24;
      return (
        <line
          key={i}
          x1="450"
          y1="300"
          x2={450 + 80 * Math.cos((angle * Math.PI) / 180)}
          y2={300 + 80 * Math.sin((angle * Math.PI) / 180)}
          stroke="#000080"
          strokeWidth="4"
        />
      );
    })}
  </svg>
);

export default function Enquiry() {
  return (
    <section id="enquiry-section" className="enquiry-container" style={{ position: 'relative' }}>
      {/* WebThreads WebGL background layer floating behind the card */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'auto' }}>
        <WebThreads
          color1="#ffffff"
          color2="#000000"
          color3="#f4f4f4"
          speed={0.2}
          threadCount={2}
          frequency={5.0}
          spread={0.18}
          taper={1.2}
          position={0.5}
          fanMode="center"
          glow={0.02}
          falloff={0.63}
          thickness={1.1}
          brightness={0.6}
          opacity={1.0}
          mirror={true}
          shimmer={false}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseStrength={1.0}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="enquiry-form-card"
        style={{ position: 'relative', zIndex: 5 }}
      >
        {/* Floating Content wrapper to keep links clickable */}
        <div style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
          <h2 className="enquiry-title" style={{ border: 'none', background: 'transparent', textAlign: 'center' }}>
            <GradientText
              colors={["#ffffff", "#8b5cf6", "#ffffff", "#8b5cf6", "#ffffff"]}
              animationSpeed={5}
              showBorder={false}
            >
              Get in touch with us
            </GradientText>
          </h2>
          
          <div className="contact-glass-grid">
            {/* Instagram Link */}
            <Magnetic>
              <a
                href="https://instagram.com/cityreachdigital"
                target="_blank"
                rel="noreferrer"
                className="contact-glass-item"
              >
                <div className="contact-icon-wrapper">
                  <InstagramIcon size={24} />
                </div>
                <span className="contact-platform-label">Instagram</span>
                <span className="contact-platform-value">cityreachdigital</span>
              </a>
            </Magnetic>

            {/* UAE WhatsApp Link */}
            <Magnetic>
              <a
                href="https://wa.me/971555037299"
                target="_blank"
                rel="noreferrer"
                className="contact-glass-item"
              >
                <div className="contact-icon-wrapper">
                  <div className="flag-overlap-badge">
                    <UAEFlag size={20} />
                  </div>
                  <WhatsAppIcon size={24} />
                </div>
                <span className="contact-platform-label">UAE WhatsApp</span>
                <span className="contact-platform-value">+971 55 503 7299</span>
              </a>
            </Magnetic>

            {/* India WhatsApp Link */}
            <Magnetic>
              <a
                href="https://wa.me/919111110422"
                target="_blank"
                rel="noreferrer"
                className="contact-glass-item"
              >
                <div className="contact-icon-wrapper">
                  <div className="flag-overlap-badge">
                    <IndiaFlag size={20} />
                  </div>
                  <WhatsAppIcon size={24} />
                </div>
                <span className="contact-platform-label">India WhatsApp</span>
                <span className="contact-platform-value">+91 91111 10422</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
