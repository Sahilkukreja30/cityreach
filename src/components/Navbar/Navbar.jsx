import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Magnetic from '../Magnetic/Magnetic';
import { useCountry } from '../../hooks/useCountry';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const country = useCountry();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileOpen(false);
    
    const isHomePage = location.pathname === '/' || location.pathname === '/in' || location.pathname === '/ae';
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Redirect home and pass target section in state
      navigate(`/${country}`, { state: { scrollTo: sectionId } });
    }
  };

  // Smooth scroll after navigation from another page
  useEffect(() => {
    const isHomePage = location.pathname === '/' || location.pathname === '/in' || location.pathname === '/ae';
    if (isHomePage && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      // Slight timeout to let DOM render
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Reset navigation state to avoid re-triggering on reload
        navigate(`/${country}`, { replace: true, state: {} });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location, navigate, country]);

  return (
    <>
      <nav className={`navbar-container glass-accent ${scrolled ? 'scrolled' : ''}`}>
        <Link to={`/${country}`} className="nav-brand shimmer-text" onClick={() => handleNavClick('hero-section')}>
          CityReach
        </Link>

        <div className="nav-links-wrapper">
          <Magnetic>
            <button onClick={() => handleNavClick('about-section')} className="nav-link-item">
              About
            </button>
          </Magnetic>
          <Magnetic>
            <button onClick={() => handleNavClick('services-section')} className="nav-link-item">
              Services
            </button>
          </Magnetic>
          <Magnetic>
            <Link to={`/${country}/blogs`} className="nav-link-item">
              Insights
            </Link>
          </Magnetic>
          <Magnetic>
            <button onClick={() => handleNavClick('contact-section')} className="nav-link-item">
              Contact
            </button>
          </Magnetic>
          <Magnetic>
            <button onClick={() => handleNavClick('enquiry-section')} className="nav-cta-btn">
              Enquire
            </button>
          </Magnetic>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={`nav-mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Links Drawer */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <button onClick={() => handleNavClick('about-section')} className="nav-mobile-link">
          About
        </button>
        <button onClick={() => handleNavClick('services-section')} className="nav-mobile-link">
          Services
        </button>
        <Link to={`/${country}/blogs`} onClick={() => setMobileOpen(false)} className="nav-mobile-link">
          Insights
        </Link>
        <button onClick={() => handleNavClick('contact-section')} className="nav-mobile-link">
          Contact
        </button>
        <button onClick={() => handleNavClick('enquiry-section')} className="nav-mobile-cta">
          Enquire Now
        </button>
      </div>
    </>
  );
}
