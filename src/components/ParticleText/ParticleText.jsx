import React, { useEffect, useRef } from 'react';
import './ParticleText.css';

export default function ParticleText({ text = "CITYREACH" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let isInitialized = false;

    // Mouse coordinates relative to canvas
    const mouse = {
      x: null,
      y: null,
      radius: 130, // Increased radius for wider reach
    };

    const baseWidth = 1000;
    const baseHeight = 250;

    let displayWidth = canvas.clientWidth;
    let displayHeight = canvas.clientHeight;

    const initParticles = () => {
      if (isInitialized) return;
      isInitialized = true;

      // Offscreen canvas for scanning
      const offscreenCanvas = document.createElement('canvas');
      const offscreenCtx = offscreenCanvas.getContext('2d');

      offscreenCanvas.width = baseWidth;
      offscreenCanvas.height = baseHeight;

      // Draw text to offscreen canvas
      offscreenCtx.fillStyle = '#ffffff';
      offscreenCtx.textAlign = 'center';
      offscreenCtx.textBaseline = 'middle';

      if ('letterSpacing' in offscreenCtx) {
        offscreenCtx.letterSpacing = '14px';
      }

      // Fit text size (using Inter font)
      let fontSize = 140;
      offscreenCtx.font = `900 ${fontSize}px 'Inter', sans-serif`;
      let textWidth = offscreenCtx.measureText(text).width;

      while (textWidth > baseWidth * 0.95 && fontSize > 20) {
        fontSize -= 5;
        offscreenCtx.font = `900 ${fontSize}px 'Inter', sans-serif`;
        textWidth = offscreenCtx.measureText(text).width;
      }

      offscreenCtx.fillText(text, baseWidth / 2, baseHeight / 2);

      // Scan pixels
      const imgData = offscreenCtx.getImageData(0, 0, baseWidth, baseHeight);
      const data = imgData.data;

      const step = 2.5;
      const color = "#ffffff"; // Pure white

      particles = [];
      for (let y = 0; y < baseHeight; y += step) {
        for (let x = 0; x < baseWidth; x += step) {
          const alpha = data[(Math.floor(y) * baseWidth + Math.floor(x)) * 4 + 3];
          if (alpha > 128) {
            const size = 2.5;

            // Initialize scattered positions strictly across the actual screen viewport
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;

            particles.push({
              homeX: x,
              homeY: y,
              x: startX,
              y: startY,
              vx: 0,
              vy: 0,
              color,
              size,
              density: Math.random() * 25 + 15,
              // Soft return force so they drift further before easing back
              ease: Math.random() * 0.015 + 0.02,
              // Higher friction (lower damping) to maintain velocity inertia
              friction: 0.90,
            });
          }
        }
      }
    };

    // Ensure the Inter font is loaded before rendering
    if (document.fonts) {
      document.fonts.ready.then(() => {
        initParticles();
      });
    } else {
      setTimeout(initParticles, 100);
    }

    // Handle Resize
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      displayWidth = rect.width;
      displayHeight = rect.height;

      // Adjust mouse interaction radius
      mouse.radius = Math.max(100, displayWidth * 0.12);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Mouse/Touch events
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      if (particles.length > 0) {
        const scaleX = displayWidth / baseWidth;
        const scaleY = displayHeight / baseHeight;
        let scale = Math.min(scaleX, scaleY);

        // Restores the original compact text size on desktop and mobile
        if (displayWidth > 768) {
          scale *= 0.58;
        } else {
          scale *= 0.85;
        }

        const offsetX = (displayWidth - baseWidth * scale) / 2;
        const offsetY = (displayHeight - baseHeight * scale) / 2;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          const targetX = p.homeX * scale + offsetX;
          const targetY = p.homeY * scale + offsetY;

          let vx = p.vx;
          let vy = p.vy;

          // Mouse physics push (with chaotic random scattering)
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
              const force = (mouse.radius - distance) / mouse.radius;

              // Angle deviation for chaotic organic dispersion
              const randomAngleOffset = (Math.random() - 0.5) * Math.PI * 0.95;
              const angle = Math.atan2(dy, dx) + randomAngleOffset;

              const forceDirectionX = Math.cos(angle);
              const forceDirectionY = Math.sin(angle);

              // Strong force vectors
              vx -= forceDirectionX * force * p.density * 1.8;
              vy -= forceDirectionY * force * p.density * 1.8;
            }
          }

          // Return to home position vector
          const dxHome = targetX - p.x;
          const dyHome = targetY - p.y;
          vx += dxHome * p.ease;
          vy += dyHome * p.ease;

          // Add a tiny constant Brownian jitter when moving to look active and alive
          if (Math.abs(vx) > 0.1 || Math.abs(vy) > 0.1) {
            vx += (Math.random() - 0.5) * 0.25;
            vy += (Math.random() - 0.5) * 0.25;
          }

          // Apply damping/friction
          vx *= p.friction;
          vy *= p.friction;

          p.x += vx;
          p.y += vy;
          p.vx = vx;
          p.vy = vy;

          // Draw particles as square blocks to create a pixel-perfect solid text when resting
          ctx.fillStyle = p.color;
          const drawSize = p.size * Math.max(0.7, scale);
          ctx.fillRect(p.x - drawSize / 2, p.y - drawSize / 2, drawSize, drawSize);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text]);

  return (
    <div ref={containerRef} className="particle-text-container">
      <canvas ref={canvasRef} className="particle-text-canvas" />
    </div>
  );
}
