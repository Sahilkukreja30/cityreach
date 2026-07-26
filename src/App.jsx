import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Layout & Global Components
import Navbar from './components/Navbar/Navbar';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Noise from './components/Noise/Noise';
import CanvasParticles from './components/CanvasParticles/CanvasParticles';
import Preloader from './components/Preloader/Preloader';

// Pages
import Home from './pages/Home/Home';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Blogs from './pages/Blogs/Blogs';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    // Scrollbar hide during loading
    if (isLoading) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.body.classList.remove('loading');
    };
  }, [isLoading]);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />
      <Noise />
      <CanvasParticles />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:serviceSlug" element={<ServiceDetails />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}
