import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Enquiry from './sections/Enquiry';
import Contact from './sections/Contact';

export default function Home({ preloaderFinished }) {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
