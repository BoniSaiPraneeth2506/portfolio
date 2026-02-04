import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Simple animated logo */}
      <motion.div
        className="text-6xl font-bold font-display text-accent mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        P
      </motion.div>

      {/* Simple loading dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-accent"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;
