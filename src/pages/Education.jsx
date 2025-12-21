import React from 'react';
import { educationData } from '../data/educationData';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <h1>Education Journey</h1>
        <p className="section-subtitle">My academic path and achievements</p>
      </div>

      <div className="timeline-container">
        {educationData.map((edu, index) => (
          <div 
            key={edu.id} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            data-aos="fade-up"
          >
            <div className="timeline-content">
              <div className="timeline-icon">
                <span className="icon-emoji">{edu.icon}</span>
              </div>
              
              <div className="education-card">
                <div className="card-header">
                  <h3>{edu.degree}</h3>
                  {edu.status === 'ongoing' && (
                    <span className="status-badge ongoing">Ongoing</span>
                  )}
                  {edu.status === 'completed' && (
                    <span className="status-badge completed">
                      <FaCheckCircle /> Completed
                    </span>
                  )}
                </div>

                <div className="institution-info">
                  <p className="institution">
                    <FaGraduationCap className="info-icon" />
                    {edu.institution}
                  </p>
                  <p className="location">
                    <FaMapMarkerAlt className="info-icon" />
                    {edu.location}
                  </p>
                  <p className="duration">
                    <FaCalendarAlt className="info-icon" />
                    {edu.duration}
                  </p>
                  {edu.cgpa && <p className="cgpa">{edu.cgpa}</p>}
                </div>

                <p className="description">{edu.description}</p>

                <div className="highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="bullet">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
