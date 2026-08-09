import React from 'react';
import { motion } from 'framer-motion';
import SpecularButton from '../../../components/SpecularButton/SpecularButton';
import DarkVeil from '../../../components/DarkVeil/DarkVeil';
import './sections.css';

export default function Hero({ onServicesClick, preloaderFinished }) {
  return (
    <section
      id="hero-section"
      className="hero-container"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent'
      }}
    >
      {/* DarkVeil Background */}
      <DarkVeil
        hueShift={-10}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={1.4}
        scanlineFrequency={0}
        warpAmount={0}
        resolutionScale={1}
      />

      {/* Hero Text — White Poppins text fading in slowly after loader finishes */}
      <div
        style={{
          width: '90%',
          maxWidth: '1200px',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '120px'
        }}
      >
        {preloaderFinished && (
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="hero-title-text"
          >
            C I T Y R E A C H
          </motion.h1>
        )}
      </div>

      {/* Button — absolutely pinned to bottom centre of hero, fading in slowly after the text */}
      <div className="hero-btn-container">
        {preloaderFinished && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
          >
            <SpecularButton
              onClick={onServicesClick}
              baseColor="#25064c"
              lineColor="#8b5cf6"
              style={{ filter: 'hue-rotate(-10deg)' }}
            >
              Get Started
            </SpecularButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}
