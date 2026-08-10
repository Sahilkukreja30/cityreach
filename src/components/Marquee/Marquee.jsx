import React from 'react';
import './Marquee.css';

export default function Marquee({ items, direction = 'left', duration = '30s' }) {
  // Duplicate list once to achieve seamless CSS loop animation
  const duplicatedItems = [...items, ...items];

  return (
    <div className="marquee-container">
      <div
        className={`marquee-track scroll-${direction}`}
        style={{ '--duration': duration }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item.image}-${index}`} className="marquee-card">
            <img
              src={item.image}
              alt={item.text ?? 'Client logo'}
              className="marquee-img"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <span className="marquee-brand-name">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
