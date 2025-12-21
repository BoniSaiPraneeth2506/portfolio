import React from 'react';
import { certificationsData } from '../data/certificationsData';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-header">
        <h1>Certifications & Courses</h1>
        <p className="section-subtitle">Continuous learning and professional development</p>
      </div>

      <div className="certifications-grid">
        {certificationsData.map((cert) => (
          <div key={cert.id} className="certification-card" data-aos="flip-up">
            <div className="cert-icon">{cert.icon}</div>
            
            <div className="cert-content">
              <h3>{cert.title}</h3>
              
              <div className="cert-info">
                <p className="platform">
                  <FaCertificate /> {cert.platform}
                </p>
                <p className="issuer">{cert.issuer}</p>
                <p className="year">Year: {cert.year}</p>
              </div>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-skills">
                {cert.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>

              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-link"
              >
                <FaExternalLinkAlt /> View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
