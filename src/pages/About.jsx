import React from 'react';
import { FaUser, FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h1>About Me</h1>
        <p className="section-subtitle">Get to know more about my journey and passions</p>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="intro-card">
            <FaUser className="about-icon" />
            <h2>Hello! I'm Praneeth</h2>
            <p className="intro-text">
              A passionate Computer Science Engineering student at SRKR Engineering College, 
              currently in my 2nd year. I love building innovative solutions and exploring 
              new technologies that can make a positive impact.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3>Education</h3>
              <p>
                Pursuing B.Tech in Computer Science & Engineering with a strong foundation 
                in programming, algorithms, and software development.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FaCode />
              </div>
              <h3>Passion</h3>
              <p>
                Enthusiastic about web development, problem-solving, and creating 
                user-friendly applications that solve real-world problems.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FaLaptopCode />
              </div>
              <h3>Focus Areas</h3>
              <p>
                Specializing in full-stack web development with expertise in React.js, 
                Node.js, and modern web technologies.
              </p>
            </div>
          </div>

          <div className="interests-section">
            <h3>What Drives Me</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <span className="interest-emoji">💻</span>
                <p>Building scalable web applications</p>
              </div>
              <div className="interest-item">
                <span className="interest-emoji">🚀</span>
                <p>Learning new technologies</p>
              </div>
              <div className="interest-item">
                <span className="interest-emoji">🤝</span>
                <p>Collaborating on open-source</p>
              </div>
              <div className="interest-item">
                <span className="interest-emoji">📚</span>
                <p>Continuous learning and growth</p>
              </div>
            </div>
          </div>

          <div className="journey-section">
            <h3>My Journey So Far</h3>
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
        </div>
      </div>
    </section>
  );
};

export default About;
