import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';

const Experience = () => {
  return (
    <SectionWrapper id="experience">
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
            Experience & <span className="text-accent">Leadership</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => {
          const IconComponent = exp.icon;
          
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 group">
                {/* Icon and Badge */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-3xl text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary font-display">
                        {exp.role}
                      </h3>
                      <h4 className="text-base sm:text-lg text-accent font-medium">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-medium ${
                    exp.type === 'Internship' 
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                      : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-accent" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-text-primary mb-3 font-display">
                    Key Responsibilities:
                  </h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-text-secondary flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-lg font-semibold text-text-primary mb-3 font-display">
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-background text-accent text-xs font-medium rounded-lg border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Connector (except for last item) */}
              {index < experienceData.length - 1 && (
                <div className="hidden sm:block absolute left-8 top-full w-0.5 h-8 bg-border" />
              )}
            </motion.div>
          );
        })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;

