import React from 'react';
import Marquee from '../../../components/Marquee/Marquee';
import ShinyText from '../../../components/ShinyText/ShinyText';
import './sections.css';

const clientProjects = [
  { image: '/Ghazifoodandcoldstorage.webp', text: 'Ghazi Food & Cold Storage' },
  { image: '/Hide.webp', text: 'Hide' },
  { image: '/IlifeClinic.webp', text: 'iLife Clinic' },
  { image: '/Kaze.webp', text: 'Kaze' },
  { image: '/NeedleForm.webp', text: 'Needle Form' },
  { image: '/Overlay.webp', text: 'Overlay' },
  { image: '/TwoBlends.webp', text: 'Two Blends' },
  { image: '/fold.webp', text: 'Fold' },
  { image: '/lucedoroclub.webp', text: "Luce D'oro Club" },
  { image: '/ofeliaboutique.webp', text: 'Ofelia Boutique' },
  { image: '/theBClub.webp', text: 'The B Club' },
  { image: '/thehealthandwealthclub.webp', text: 'The Health & Wealth Club' },
  { image: '/voyabakehouse.webp', text: 'Voya Bakehouse' }
];

export default function Clients() {
  const half = Math.ceil(clientProjects.length / 2);
  const row1 = clientProjects.slice(0, half);
  const row2 = clientProjects.slice(half);

  return (
    <section id="clients-section" className="clients-container">
      <h2 className="clients-title">
        <ShinyText
          text="clients who trust us"
          color="#a1a1aa"
          shineColor="#8b5cf6"
          speed={3}
          spread={120}
          direction="left"
        />
      </h2>
      
      <div className="clients-gallery-wrapper">
        <div className="clients-marquee-rows">
          <Marquee items={row1} direction="left" duration="28s" />
          <Marquee items={row2} direction="right" duration="28s" />
        </div>
      </div>
    </section>
  );
}
