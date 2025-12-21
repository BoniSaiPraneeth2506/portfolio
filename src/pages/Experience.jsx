import React from 'react';
import { experienceData } from '../data/experienceData';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h1>Experience & Leadership</h1>
        <p className="section-subtitle">My professional journey and contributions</p>
      </div>

      <div className="experience-container">
        {experienceData.map((exp) => (
          <div key={exp.id} className="experience-card" data-aos="fade-up">
            <div className="exp-icon">{exp.icon}</div>
            
            <div className="exp-content">
              <div className="exp-header">
                <div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <span className={`type-badge ${exp.type.toLowerCase()}`}>
                  {exp.type}
                </span>
              </div>

              <div className="exp-info">
                <p className="exp-duration">
                  <FaCalendarAlt /> {exp.duration}
                </p>
                <p className="exp-location">
                  <FaMapMarkerAlt /> {exp.location}
                </p>
              </div>

              <p className="exp-description">{exp.description}</p>

              <div className="responsibilities">
                <h5>Key Responsibilities:</h5>
                <ul>
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-used">
                <h5>Technologies:</h5>
                <div className="tech-tags">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
