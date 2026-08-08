import React from 'react';
import { motion } from 'framer-motion';
import WarpText from '../../../components/WarpText/WarpText';
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
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        gap: 0,
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

      {/* Hero WarpText — responsive height via clamp */}
      <WarpText
        text="CITYREACH"
        color="#3b010b"
        warpStrength={0.12}
        warpScale={1.5}
        speed={0.5}
        pointerInfluence={0.5}
        pointerStrength={0.55}
        refraction={0.022}
        ripple
        fontSize="clamp(2.5rem, 13vw, 11rem)"
        fontWeight={900}
        fontFamily="Inter, Helvetica Neue, sans-serif"
        letterSpacing="0.06em"
        style={{
          width: '100%',
          maxWidth: '1300px',
          height: 'clamp(120px, 22vw, 320px)',
          zIndex: 2,
          flexShrink: 0,
        }}
      />

      {/* Button sits below text in flow — no absolute positioning to avoid overflow */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          zIndex: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 'clamp(32px, 6vw, 64px)',
          paddingBottom: 'clamp(40px, 8vw, 80px)',
          flexShrink: 0,
        }}
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
    </section>
  );
}
