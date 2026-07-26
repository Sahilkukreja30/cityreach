import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 200);
          return 100;
        }
        
        const diff = Math.random() * 20;
        const next = Math.min(prev + diff, 100);
        
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 200);
          return 100;
        }
        
        return next;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: '-100vh', 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="preloader-container"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="preloader-logo shimmer-text"
      >
        CityReach
      </motion.div>

      <div className="preloader-progress-track">
        <motion.div
          className="preloader-progress-bar"
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
}
