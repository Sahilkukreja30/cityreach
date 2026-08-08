import React from 'react';
import { motion } from 'framer-motion';
import ParticleText from '../../../components/ParticleText/ParticleText';
import SpecularButton from '../../../components/SpecularButton/SpecularButton';
import DarkVeil from '../../../components/DarkVeil/DarkVeil';
import './sections.css';

export default function Hero({ onServicesClick }) {
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

      {/* Full screen ParticleText */}
      <ParticleText text="CITYREACH" />

      {/* Button overlay container positioned at the bottom of the hero page */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '10%', // Anchored at the bottom of the viewport
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5, 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SpecularButton onClick={onServicesClick}>
            Get Started
          </SpecularButton>
        </motion.div>
      </div>
    </section>
  );
}
