import React from 'react';
import { motion } from 'framer-motion';
import './sections.css';

const clients = [
  { name: 'TWO BLENDS', sub: 'Drive-Thru Ordering' },
  { name: 'THE B CLUB', sub: 'Restaurant Brand' },
  { name: 'FOLD', sub: 'Minimal Lifestyle' },
  { name: 'NEEDLE FORM', sub: 'Editorial Design' },
  { name: 'VOYA BAKE HOUSE', sub: 'Artisanal Bakery' },
  { name: 'OVERLAY', sub: 'Digital Creative' },
  { name: 'THE HEALTH & WEALTH CLUB', sub: 'E-Commerce' },
  { name: 'OFELIA', sub: 'Flower Boutique' },
  { name: 'LD', sub: 'Luxury Design' }
];

// Double the list to ensure a seamless infinite scroll loop
const marqueeClients = [...clients, ...clients, ...clients, ...clients];

export default function Clients() {
  return (
    <section id="clients-section" className="clients-container">
      <h2 className="clients-title">Trusted By Visionary Brands</h2>
      
      <div className="marquee-container" data-cursor="drag" data-cursor-text="DRAG">
        <motion.div 
          className="marquee-scroller"
          animate={{ x: [0, -1000] }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity
          }}
        >
          {marqueeClients.map((client, index) => (
            <div key={index} className="client-logo-card glass">
              <span className="client-logo-name shimmer-text">{client.name}</span>
              <span className="client-logo-subtitle">{client.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
