import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Full Stack Developer', 'Content Creator', 'Python Developer'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Hero Section - Full Screen */}
      <section id="home" className="min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 pt-20 relative w-full overflow-x-hidden">
        {/* Vertical Social Media Icons - Left Side */}
        <motion.div
          className="fixed left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-0 z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Social Icons */}
          <div className="flex flex-col gap-5 mb-6">
            <motion.a
              href="https://github.com/BoniSaiPraneeth2506"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.15, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.15, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.15, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a
              href="https://youtube.com/@yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.15, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaYoutube size={20} />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.15, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaXTwitter size={20} />
            </motion.a>
          </div>
          
          {/* Vertical Line */}
          <motion.div
            className="w-[2px] h-24 bg-gradient-to-b from-text-secondary/50 to-transparent"
            initial={{ height: 0 }}
            animate={{ height: 96 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </motion.div>

        <motion.div
          className="max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Centered Content */}
          <div className="space-y-5 lg:space-y-6 w-full">
            <motion.div variants={itemVariants} className="space-y-3">
              <motion.p
                className="text-text-secondary text-sm sm:text-base lg:text-lg font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I am
              </motion.p>
              <motion.h1
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display break-words"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-text-primary">Praneeth</span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-base sm:text-lg lg:text-xl text-text-secondary font-medium">
                I am a passionate
              </p>
              <div className="h-10 sm:h-12 lg:h-14">
                <span
                  ref={typedElement}
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-accent font-display break-words"
                />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl"
            >
              Building modern, scalable, and user-friendly web applications with cutting-edge technologies.
              Passionate about creating exceptional digital experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                className="px-5 sm:px-7 py-2.5 sm:py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-5 sm:px-7 py-2.5 sm:py-3 bg-card hover:bg-accent/10 text-text-primary border border-border hover:border-accent rounded-lg font-medium transition-all duration-200 text-sm sm:text-base whitespace-nowrap"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Me Section - Appears on Scroll */}
      <section className="py-12 px-3 sm:px-6 lg:px-8 w-full overflow-x-hidden">
        <motion.div
          className="max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary">About</h2>
            <p className="text-text-secondary text-xs sm:text-sm lg:text-base leading-[1.75]">
              A Passionate and Self-Motivated BTech 3rd year student with a robust foundation in programming languages including C, C++, Java, Python, HTML, CSS, and JavaScript. Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), with proven experience building and deploying full-stack web applications as the main developer. Skilled at translating ideas into real-world web, data, and AI projects. Eager to leverage these skills in challenging internships to gain hands-on experience, drive innovation, and contribute value to impactful teams.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
