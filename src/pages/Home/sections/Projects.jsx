import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DepthCarousel from '../../../components/DepthCarousel/DepthCarousel';
import Magnetic from '../../../components/Magnetic/Magnetic';
import './sections.css';

const selectedProjects = [
  {
    num: '01',
    title: 'Booking & Ordering Platform',
    domain: 'twoblends.ae',
    tags: ['Integrated POS', 'Web App', 'Conversion-Focused'],
    desc: 'A seamless digital experience for drive-thru ordering and catering bookings through one intuitive platform.',
    concept: 'Fast, intuitive, and conversion-focused drive-thru ordering.'
  },
  {
    num: '02',
    title: 'Luxury Fashion E-Commerce',
    domain: 'healthandwealthclub.com',
    tags: ['E-Commerce', 'Luxury UI/UX', 'Motion-Driven'],
    desc: 'A sophisticated e-commerce experience inspired by luxury fashion brands, designed with immersive motion and seamless shopping.',
    concept: 'Minimal • Elegant • Motion-Driven • Premium UI/UX'
  },
  {
    num: '03',
    title: 'Meta Advertising Campaign',
    domain: 'ofelia.ae',
    tags: ['Meta Ads', 'Lead Generation', 'ROI Focus'],
    desc: 'Targeted performance campaigns driving high-intent enquiries and reaching over 51K potential customers.',
    concept: 'Performance-driven advertising targeting high-intent consumers.'
  }
];

const allProjectsList = [
  ...selectedProjects,
  {
    num: '04',
    title: 'Restaurant Brand Website',
    domain: 'thebclub.me',
    tags: ['Mobile-First', 'Restaurant Menu', 'Clean Design'],
    desc: 'A modern website that showcases the brand while providing an elegant, easy-to-navigate digital menu.',
    concept: 'Minimal, clean, and mobile-first digital menu.'
  },
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
    desc: 'An online showroom built for a modern textile design house, utilizing smooth transitions and editorial composition.',
    concept: 'Warm editorial layout inspired by Monocle and Kinfolk.'
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const carouselItems = showAll ? allProjectsList : selectedProjects;

  return (
    <section id="projects-section" className="projects-container container" style={{ position: 'relative', zIndex: 5, padding: '80px 0' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="projects-title"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
          textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: '48px',
          color: '#ffffff'
        }}
      >
        Selected Projects
      </motion.h2>

      <div className="projects-carousel-wrapper" style={{ width: '100%', minHeight: '440px', position: 'relative' }}>
        <DepthCarousel
          key={showAll ? 'all' : 'selected'}
          items={carouselItems}
          cardWidth={300}
          cardHeight={400}
          radius={16}
          tint="#05060a"
          depth={180}
          spread={210}
          tilt={18}
          perspective={1300}
          visibleCards={3}
          loop={true}
          autoplay={true}
          autoplayDelay={2000}
          showControls={true}
          showIndicators={true}
        />
      </div>

      <div className="projects-view-all" style={{ textAlign: 'center', marginTop: '48px' }}>
        <Magnetic>
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-secondary"
            style={{ minWidth: '220px' }}
          >
            {showAll ? 'Show Selected Only' : 'View All Projects'}
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
