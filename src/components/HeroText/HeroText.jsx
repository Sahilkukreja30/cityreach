import React, { useRef, useEffect, useState, useCallback } from 'react';
import './HeroText.css';

const LETTERS = 'CITYREACH'.split('');

export default function HeroText() {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Smooth mouse tracking
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Animate loop — lerp toward mouse and apply per-letter tilt
  useEffect(() => {
    const animate = () => {
      const cx = currentRef.current;
      const mx = mouseRef.current;
      cx.x += (mx.x - cx.x) * 0.07;
      cx.y += (mx.y - cx.y) * 0.07;

      const container = containerRef.current;
      if (!container) { rafRef.current = requestAnimationFrame(animate); return; }

      const rect = container.getBoundingClientRect();
      const relX = (cx.x - rect.left - rect.width / 2) / (rect.width / 2);
      const relY = (cx.y - rect.top - rect.height / 2) / (rect.height / 2);

      lettersRef.current.forEach((el, i) => {
        if (!el) return;
        const offset = (i - (LETTERS.length - 1) / 2) / (LETTERS.length / 2);
        const tiltX = -relY * 12;
        const tiltY = relX * 10 + offset * 4;
        const tz = -Math.abs(relX * relY) * 18;
        const shiftX = relX * 6 * (1 - Math.abs(offset) * 0.5);
        const shiftY = relY * 4;
        el.style.transform = `
          translate(${shiftX}px, ${shiftY}px)
          perspective(600px)
          rotateX(${tiltX}deg)
          rotateY(${tiltY}deg)
          translateZ(${tz}px)
        `;
      });

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Mount stagger
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`hero-text-root ${mounted ? 'hero-text-mounted' : ''} ${hovered ? 'hero-text-hover' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="CITYREACH"
    >
      {LETTERS.map((letter, i) => (
        <span
          key={i}
          className="hero-letter"
          ref={(el) => (lettersRef.current[i] = el)}
          style={{ '--i': i, '--total': LETTERS.length }}
        >
          {/* Main outlined letter */}
          <span className="hero-letter-main">{letter}</span>
          {/* Chromatic aberration layers — visible on hover */}
          <span className="hero-letter-r" aria-hidden="true">{letter}</span>
          <span className="hero-letter-b" aria-hidden="true">{letter}</span>
        </span>
      ))}

      {/* Aurora shimmer line that sweeps across on hover */}
      <span className="hero-shimmer" aria-hidden="true" />
    </div>
  );
}
