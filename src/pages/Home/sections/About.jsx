import React from 'react';
import { motion } from 'framer-motion';
import './sections.css';

const text = "CityReach is a modern growth partner, dedicated to helping businesses grow and scale in the modern market. We believe that a website should be more than just a digital business card, it should be your most powerful sales tool. Our approach is simple: we combine world-class design with data-driven strategies to ensure your brand doesn't just look premium but also delivers results. At CityReach, we don’t just follow trends; we set the standard for digital excellence.";

export default function About() {
  const words = text.split(" ");

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
          Who We Are
        </motion.h2>
        <p className="about-text">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.12, y: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
              transition={{ duration: 0.25, delay: (i % 25) * 0.01 }}
              style={{ display: 'inline-block', marginRight: '0.22em' }}
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}
