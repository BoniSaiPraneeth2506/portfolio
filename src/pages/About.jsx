import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  const cards = [
    {
      icon: FaGraduationCap,
      title: 'Education',
      description: 'Pursuing B.Tech in Computer Science & Engineering with a strong foundation in programming, algorithms, and software development.',
    },
    {
      icon: FaCode,
      title: 'Passion',
      description: 'Enthusiastic about web development, problem-solving, and creating user-friendly applications that solve real-world problems.',
    },
    {
      icon: FaLaptopCode,
      title: 'Focus Areas',
      description: 'Specializing in full-stack web development with expertise in React.js, Node.js, and modern web technologies.',
    },
  ];

  const interests = [
    { emoji: '💻', text: 'Building scalable web applications' },
    { emoji: '🚀', text: 'Learning new technologies' },
    { emoji: '🤝', text: 'Collaborating on open-source' },
    { emoji: '📚', text: 'Continuous learning and growth' },
  ];

  return (
    <SectionWrapper id="about">
      <div className="space-y-12 sm:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-text-primary">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Get to know more about my journey and passions
          </p>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
            <FaUser className="text-3xl text-accent" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 font-display">
            Hello! I'm Praneeth
          </h3>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            A passionate Computer Science Engineering student at SRKR Engineering College, 
            currently in my 2nd year. I love building innovative solutions and exploring 
            new technologies that can make a positive impact.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-2xl text-accent" />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3 font-display">
                  {card.title}
                </h4>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center font-display">
            What Drives Me
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center space-y-3 p-4 bg-background rounded-xl"
              >
                <span className="text-4xl">{interest.emoji}</span>
                <p className="text-text-secondary text-sm">{interest.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary text-center mb-6 font-display">
            My Journey So Far
          </h3>
          <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
            <p>
              My journey in computer science began with curiosity and has evolved into a passion. 
              From learning my first programming language to building complete web applications, 
              every step has been a learning experience. I actively participate in hackathons, 
              contribute to technical clubs, and constantly work on improving my skills through 
              hands-on projects.
            </p>
            <p>
              I believe in learning by doing and am always excited to take on new challenges 
              that push me out of my comfort zone. Whether it's debugging complex code or 
              designing intuitive user interfaces, I approach every task with enthusiasm and dedication.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;

