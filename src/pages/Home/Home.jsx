import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Enquiry from './sections/Enquiry';
import Contact from './sections/Contact';

export default function Home({ preloaderFinished }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      let attempts = 0;

      const triggerScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { duration: 1.2, offset: 0 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          return true;
        }
        return false;
      };

      const timer = setInterval(() => {
        attempts++;
        if (triggerScroll() || attempts >= 10) {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [location.state]);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { duration: 1.2, offset: 0 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="home-page-wrapper">
      <Hero
        onServicesClick={() => handleNavClick('services-section')}
        onEnquireClick={() => handleNavClick('enquiry-section')}
        preloaderFinished={preloaderFinished}
      />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Enquiry />
      <Contact onNavClick={handleNavClick} />
    </div>
  );
}
