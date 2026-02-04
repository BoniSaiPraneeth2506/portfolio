import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-20 px-3 sm:px-6 lg:px-8 w-full overflow-x-hidden ${className}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
