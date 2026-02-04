import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Full Stack', 'Desktop Application'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <SectionWrapper id="projects">
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
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Showcasing my work and technical capabilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm ${
                filter === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-text-primary border border-border hover:border-accent/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-secondary text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Projects;

