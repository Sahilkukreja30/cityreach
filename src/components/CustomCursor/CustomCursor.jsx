import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'drag', 'view'
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 350, damping: 26, mass: 0.45 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop with mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select');
      const dragElement = target.closest('[data-cursor="drag"]');
      const viewElement = target.closest('[data-cursor="view"]');

      if (dragElement) {
        setCursorType('drag');
        setCursorText(dragElement.getAttribute('data-cursor-text') || 'DRAG');
      } else if (viewElement) {
        setCursorType('view');
        setCursorText(viewElement.getAttribute('data-cursor-text') || 'VIEW');
      } else if (interactive) {
        setCursorType('hover');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [cursorX, cursorY, isVisible]);

  // If on mobile/tablet, do not render the custom cursor
  const isFinePointer = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
  if (!isFinePointer || !isVisible) return null;

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      borderColor: '#d4bd96',
      borderWidth: 1.5,
    },
    hover: {
      width: 56,
      height: 56,
      backgroundColor: 'rgba(212, 189, 150, 0.08)',
      borderColor: '#d4bd96',
      borderWidth: 1,
    },
    drag: {
      width: 72,
      height: 72,
      backgroundColor: '#d4bd96',
      borderColor: '#d4bd96',
      borderWidth: 0,
      color: '#070708',
    },
    view: {
      width: 72,
      height: 72,
      backgroundColor: '#f4f4f6',
      borderColor: '#f4f4f6',
      borderWidth: 0,
      color: '#070708',
    }
  };

  const currentVariant = variants[cursorType] || variants.default;

  return (
    <>
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          ...currentVariant,
          transition: { type: 'spring', stiffness: 300, damping: 22 }
        }}
      >
        {cursorText && (
          <span className="cursor-text">{cursorText}</span>
        )}
      </motion.div>

      {cursorType === 'default' && (
        <motion.div
          className="custom-cursor-dot"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}
    </>
  );
}
