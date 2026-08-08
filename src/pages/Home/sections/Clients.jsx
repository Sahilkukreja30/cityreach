import React from 'react';
import CircularGallery from '../../../components/CircularGallery/CircularGallery';
import './sections.css';

const clientProjects = [
  { image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80', text: 'TWO BLENDS' },
  { image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', text: 'THE B CLUB' },
  { image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80', text: 'FOLD' },
  { image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80', text: 'NEEDLE FORM' },
  { image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', text: 'VOYA BAKE HOUSE' },
  { image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80', text: 'OVERLAY' },
  { image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80', text: 'HEALTH & WEALTH' },
  { image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80', text: 'OFELIA' },
  { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80', text: 'LD LUXURY' }
];

export default function Clients() {
  return (
    <section id="clients-section" className="clients-container">
      <h2 className="clients-title">Trusted By Visionary Brands</h2>
      
      <div className="clients-gallery-wrapper">
        <CircularGallery
          items={clientProjects}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
          font="bold 24px Orbitron"
        />
      </div>
    </section>
  );
}
