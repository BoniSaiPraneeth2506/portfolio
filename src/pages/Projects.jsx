import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Desktop Application'];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setVisibleCount(3);
  };

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

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
        <div className="-mx-4 sm:mx-0 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-3 hide-scrollbar pb-4 sm:pb-0"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`flex-shrink-0 whitespace-nowrap px-6 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm ${
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
        </div>

        {/* Projects Grid / Horizontal Scroll on Mobile */}
        <div className="-mx-4 sm:mx-0 px-4 sm:px-0">
          <motion.div
            layout
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-4 md:grid md:overflow-visible md:snap-none md:grid-cols-2 xl:grid-cols-3 md:gap-6 lg:gap-8 md:pb-0"
          >
            {displayedProjects.map((project, index) => (
              <div key={project.id} className="w-[85vw] max-w-[320px] sm:max-w-[380px] md:w-auto md:max-w-none flex-shrink-0 snap-center md:snap-align-none">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </motion.div>
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8 md:mt-12"
          >
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1"
            >
              See More
            </button>
          </motion.div>
        )}

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

