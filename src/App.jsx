import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Layout & Global Components
import Noise from './components/Noise/Noise';
import Preloader from './components/Preloader/Preloader';
import DarkVeil from './components/DarkVeil/DarkVeil';

// Pages
import Home from './pages/Home/Home';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Blogs from './pages/Blogs/Blogs';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setPreloaderFinished(true);
    }
  }, [isLoading]);

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
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
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

      <Noise />
      <DarkVeil
        hueShift={-10}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={1.4}
        scanlineFrequency={0}
        warpAmount={0}
        resolutionScale={1}
      />

      <Routes>
        {/* Exact Home paths */}
        <Route path="/" element={<Home preloaderFinished={preloaderFinished} />} />
        <Route path="/in" element={<Home preloaderFinished={preloaderFinished} />} />
        <Route path="/ae" element={<Home preloaderFinished={preloaderFinished} />} />

        {/* Blogs paths */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/in/blogs" element={<Blogs />} />
        <Route path="/ae/blogs" element={<Blogs />} />

        {/* Service Details paths */}
        <Route path="/in/:serviceSlug" element={<ServiceDetails />} />
        <Route path="/ae/:serviceSlug" element={<ServiceDetails />} />

        {/* Legacy / Fallback Service Details path */}
        <Route path="/:serviceSlug" element={<ServiceDetails />} />
      </Routes>
    </Router>
  );
}
