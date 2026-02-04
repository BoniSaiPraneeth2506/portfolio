import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, index }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-3 px-3 py-3 bg-card border border-border rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 group cursor-default"
    >
      <IconComponent className="text-2xl text-accent group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
      <span className="text-xs sm:text-sm font-medium text-text-primary leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillBadge;
