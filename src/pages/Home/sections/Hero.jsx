import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from '../../../components/Magnetic/Magnetic';
import './sections.css';

export default function Hero({ onEnquireClick, onServicesClick }) {
  return (
    <section id="hero-section" className="hero-container container">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title"
        >
          ELEVATE YOUR <br />
          BRAND'S DIGITAL <br />
          <span className="shimmer-text">PRESENCE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="hero-subtitle"
        >
          Premium Web Design & SEO strategies tailored for growing businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="hero-cta-group"
        >
          <Magnetic>
            <button onClick={onServicesClick} className="btn-primary">
              View Services
            </button>
          </Magnetic>
          <Magnetic>
            <button onClick={onEnquireClick} className="btn-secondary">
              Enquire
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
