import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <h2 className="text-3xl font-bold text-text-primary mb-4 font-display">Project Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Portfolio
        </button>
      </div>
    );
  }

  const IconComponent = project.icon;

  return (
    <div className="min-h-screen bg-background pt-8 sm:pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Navigation & Header */}
        <div className="space-y-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-200 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Projects</span>
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:items-start justify-between"
          >
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-xl">
                  <IconComponent className="text-2xl text-accent" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-accent/10 text-accent border border-accent/20'
                }`}>
                  {project.status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-card border border-border text-text-secondary">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-text-primary font-display leading-tight">
                {project.title}
              </h1>
              {project.role && (
                <p className="text-xl text-accent font-medium">Role: {project.role} • <span className="text-text-secondary font-normal">{project.duration}</span></p>
              )}
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-card hover:bg-accent/10 text-text-primary hover:text-accent border border-border hover:border-accent rounded-lg transition-all duration-200">
                  <FaGithub size={20} />
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-3 bg-accent hover:bg-accent/90 text-white rounded-lg transition-all duration-200">
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
              {project.linkedinPost && (
                <a href={project.linkedinPost} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] border border-[#0077b5]/20 hover:border-[#0077b5]/50 rounded-lg transition-all duration-200">
                  <FaLinkedin size={20} />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Hero Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-[40vh] sm:h-[60vh] rounded-2xl overflow-hidden bg-card border border-border"
        >
          <img 
            src={project.gallery?.[0] || `https://placehold.co/1200x600/111111/4f8cff?text=${encodeURIComponent(project.title)}`} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-text-primary font-display border-b border-border pb-4">Project Overview</h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {project.overview || project.description}
              </p>
            </motion.section>

            {/* Challenges & Solutions */}
            {project.challenges && project.solutions && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-text-primary font-display border-b border-border pb-4">Challenges & Solutions</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span> Challenges
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="text-text-secondary bg-card border border-border p-4 rounded-xl text-sm leading-relaxed">{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> Solutions
                    </h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, i) => (
                        <li key={i} className="text-text-secondary bg-card border border-border p-4 rounded-xl text-sm leading-relaxed">{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar (Right Column) */}
          <div className="space-y-10">
            {/* Tech Stack */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-6 rounded-2xl space-y-4"
            >
              <h3 className="text-xl font-bold text-text-primary font-display">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-background text-accent text-sm font-medium rounded-lg border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Key Features */}
            {project.features && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border p-6 rounded-2xl space-y-4"
              >
                <h3 className="text-xl font-bold text-text-primary font-display">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-text-secondary flex items-start">
                      <span className="text-accent mr-3 mt-1 flex-shrink-0">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 1 && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 pt-8 border-t border-border"
          >
            <h2 className="text-2xl font-bold text-text-primary font-display">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.slice(1).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-card border border-border h-64 sm:h-80 group">
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </motion.section>
        )}

      </div>
    </div>
  );
};

export default ProjectDetails;
