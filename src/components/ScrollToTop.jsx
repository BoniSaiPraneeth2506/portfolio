import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Alternate between Arrow and YouTube icon every 4 seconds
    const interval = setInterval(() => {
      setShowYoutube(prev => !prev);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    if (showYoutube) {
      navigate('/youtube');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={handleClick}
            className={`scroll-to-top ${showYoutube ? 'youtube-mode' : ''}`}
            aria-label={showYoutube ? "Go to YouTube Portfolio" : "Scroll to top"}
          >
            {/* Floating text badge */}
            <AnimatePresence>
              {showYoutube && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute -top-12 whitespace-nowrap bg-card/90 backdrop-blur-sm border border-[#FF0000]/30 text-text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-xl"
                >
                  <span className="text-[#FF0000] mr-1">●</span> 70k+ Subs
                </motion.div>
              )}
            </AnimatePresence>

            {/* Icon Crossfade */}
            <AnimatePresence mode="wait">
              {showYoutube ? (
                <motion.div
                  key="youtube"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-full h-full text-2xl"
                >
                  <FaYoutube />
                </motion.div>
              ) : (
                <motion.div
                  key="arrow"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-full h-full"
                >
                  <FaArrowUp />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
