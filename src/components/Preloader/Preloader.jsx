import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const words = ["Design", "Build", "Deliver", "Scale"];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      // Leave the final word "Scale" visible for 900ms before fading out
      const timer = setTimeout(() => {
        onComplete();
      }, 900);
      return () => clearTimeout(timer);
    }

    // Display each word for 700ms (increased cycling speed)
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 1.8, ease: 'easeInOut' } 
      }}
      className="preloader-container"
    >
      <div className="preloader-text-wrapper">
        <span className="preloader-static">We</span>
        <span className="preloader-dynamic-wrapper">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={index}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="preloader-dynamic"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
    </motion.div>
  );
}
