import React from 'react';
import { motion } from 'framer-motion';
import './sections.css';

const p1 = "CityReach is a digital growth company helping businesses build, market and scale with confidence.";
const p2 = "We specialize in custom websites, e-commerce platforms, mobile applications, Meta advertising and SEO, delivering tailored solutions that strengthen brands, generate qualified leads and drive measurable business growth.";
const p3 = "Every project begins with understanding your business, because the right strategy always comes before the right solution.";

export default function About() {
  const renderParagraph = (text, keyPrefix) => {
    const words = text.split(" ");
    return (
      <p className="about-text" style={{ marginBottom: '1.2em' }}>
        {words.map((word, i) => (
          <motion.span
            key={`${keyPrefix}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
            transition={{ duration: 0.3, delay: (i % 25) * 0.01 }}
            style={{ 
              display: 'inline-block', 
              marginRight: '0.22em',
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    );
  };

  return (
    <section id="about-section" className="about-container">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          Who are we?
        </motion.h2>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {renderParagraph(p1, 'p1')}
          {renderParagraph(p2, 'p2')}
          {renderParagraph(p3, 'p3')}
        </div>
      </div>
    </section>
  );
}
