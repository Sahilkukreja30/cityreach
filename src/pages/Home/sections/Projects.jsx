import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../../../components/Magnetic/Magnetic';
import './sections.css';

const selectedProjects = [
  {
    num: '01',
    title: 'Luxury Fashion E-Commerce',
    domain: 'healthandwealthclub.com',
    tags: ['E-Commerce', 'Luxury UI/UX', 'Motion-Driven'],
    desc: 'A sophisticated e-commerce experience inspired by luxury fashion brands, designed with immersive motion and a seamless shopping journey.',
    concept: 'Minimal • Elegant • Motion-Driven • Premium UI/UX'
  },
  {
    num: '02',
    title: 'Booking & Ordering Platform',
    domain: 'twoblends.ae',
    tags: ['Integrated POS', 'Web App', 'Conversion-Focused'],
    desc: 'Create a seamless digital experience for drive-thru ordering and catering bookings through one intuitive platform.',
    concept: 'Fast, intuitive, and conversion-focused with a clean user experience.'
  },
  {
    num: '03',
    title: 'Restaurant Brand Website',
    domain: 'thebclub.me',
    tags: ['Mobile-First', 'Restaurant Menu', 'Clean Design'],
    desc: 'Create a modern website that showcases the brand while providing an elegant, easy-to-navigate digital menu.',
    concept: 'Minimal, clean, and mobile-first with a premium browsing experience.'
  },
  {
    num: '04',
    title: 'Meta Advertising Campaign',
    domain: 'ofelia.ae',
    tags: ['Meta Ads', 'Lead Generation', 'ROI Focus'],
    desc: 'Increase brand awareness and generate qualified enquiries through targeted campaigns. Reached over 51K potential customers, generated 518 messaging conversations, and drove 9,129 profile visits.',
    concept: 'Performance-driven advertising targeting high-intent consumers.'
  }
];

const allProjectsList = [
  ...selectedProjects,
  {
    num: '05',
    title: 'Minimal Lifestyle Platform',
    domain: 'fold.ae',
    tags: ['Branding', 'Clean Layout', 'Visual Identity'],
    desc: 'Crafting a cohesive minimal lifestyle web platform matching architectural layouts and clean aesthetics.',
    concept: 'Geometric structure paired with generous whitespace.'
  },
  {
    num: '06',
    title: 'Editorial Design Hub',
    domain: 'needleform.com',
    tags: ['Creative Portfolio', 'Syne Typography', 'Analog Grain'],
    desc: 'A gorgeous online showroom built for a modern textile design house, utilizing smooth transitions and editorial composition.',
    concept: 'Warm editorial layout inspired by Monocle and Kinfolk.'
  },
  {
    num: '07',
    title: 'Artisanal Bakery Site',
    domain: 'voyabakehouse.ae',
    tags: ['Local Business', 'Responsive Store', 'Aesthetic UX'],
    desc: 'High-converting regional landing page designed to attract local walk-in customers and manage custom bakery catering pre-orders.',
    concept: 'Earthy tones, high-quality typography, and fast page load.'
  },
  {
    num: '08',
    title: 'Creative Studio Showcase',
    domain: 'overlay.ae',
    tags: ['Vite React', 'Canvas Art', 'Interactive Physics'],
    desc: 'An immersive interactive agency portfolio featuring smooth scrolling physics, constellation node tracks, and spring hover animations.',
    concept: 'Interactive digital canvas demonstrating state-of-the-art capabilities.'
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? allProjectsList : selectedProjects;

  return (
    <section id="projects-section" className="projects-container container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="projects-title"
      >
        Selected Projects
      </motion.h2>

      <div className="projects-grid">
        <AnimatePresence initial={false}>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.domain}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="project-card-wrapper"
            >
              <div className="project-card">
                {/* Clicking on the placeholder navigates directly to the external site */}
                <a
                  href={`https://${project.domain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="project-image-placeholder-link"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div className="project-image-placeholder" data-cursor="view" data-cursor-text="VISIT">
                    <div style={{ textAlign: 'center', padding: '24px' }}>
                      <span className="shimmer-text" style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                        {project.domain.toUpperCase()}
                      </span>
                      <p style={{ fontSize: '0.75rem', marginTop: '12px', opacity: 0.6, letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                        {project.concept.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </a>

                <div className="project-tag-row">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>

                <a
                  href={`https://${project.domain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card-link"
                >
                  Visit Site &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
        <Magnetic>
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-secondary"
            style={{ minWidth: '240px' }}
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
