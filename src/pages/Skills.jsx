import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import SectionWrapper from '../components/SectionWrapper';
import SkillBadge from '../components/SkillBadge';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    all: 'All Skills',
    programmingLanguages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Databases',
    tools: 'Tools',
    concepts: 'Concepts',
  };

  const getAllSkills = () => {
    return Object.entries(skillsData).map(([category, skills]) => ({
      category,
      skills
    }));
  };

  return (
    <SectionWrapper id="skills">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-text-primary">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {Object.keys(categories).map((key) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm ${
                activeCategory === key
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-text-primary border border-border hover:border-accent/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categories[key]}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <div className="min-h-[400px]">
          {activeCategory === 'all' ? (
            <div className="space-y-10">
              {getAllSkills().map(({ category, skills }) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-text-primary font-display border-l-4 border-accent pl-4">
                    {categories[category]}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {skills.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} index={index} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {skillsData[activeCategory]?.map((skill, index) => (
                <SkillBadge key={index} skill={skill} index={index} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;

