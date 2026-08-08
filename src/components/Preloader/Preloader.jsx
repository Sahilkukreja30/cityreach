import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const words = ["Design", "develop", "scale"];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      // Leave the final word "scale" visible for 1200ms before revealing the site
      const timer = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }

    // Display each word for 900ms
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: '-100vh', 
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
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
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
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
