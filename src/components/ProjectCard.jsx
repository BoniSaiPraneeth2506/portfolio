import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const IconComponent = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 h-full flex flex-col"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon and Status */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-xl flex-shrink-0">
            <IconComponent className="text-3xl text-accent" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
            project.status === 'Completed' 
              ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
              : 'bg-accent/10 text-accent border border-accent/20'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 font-display line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-background text-accent text-xs font-medium rounded-lg border border-border"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 bg-background text-text-secondary text-xs font-medium rounded-lg border border-border">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6 flex-grow">
            <h4 className="text-sm font-semibold text-text-primary mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-text-secondary flex items-start line-clamp-1">
                  <span className="text-accent mr-2 flex-shrink-0">•</span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-background hover:bg-accent/10 text-text-primary border border-border hover:border-accent rounded-lg transition-all duration-200 text-sm font-medium group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub className="group-hover/btn:text-accent transition-colors" />
            <span>GitHub</span>
          </motion.a>
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-lg transition-all duration-200 text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaExternalLinkAlt />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
