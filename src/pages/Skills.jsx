import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    all: 'All Skills',
    programmingLanguages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Databases',
    tools: 'Tools',
    concepts: 'Concepts',
  };

  const getAllSkills = () => {
    return Object.entries(skillsData).map(([category, skills]) => ({
      category,
      skills
    }));
  };

  const renderSkillChip = (skill, index) => (
    <div key={index} className="skill-chip" style={{ animationDelay: `${index * 0.05}s` }}>
      <span className="skill-icon">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h1>Technical Skills</h1>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </div>

      <div className="category-tabs">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            className={`category-tab ${activeCategory === key ? 'active' : ''}`}
            onClick={() => setActiveCategory(key)}
          >
            {categories[key]}
          </button>
        ))}
      </div>

      <div className="skills-container">
        {activeCategory === 'all' ? (
          <div className="all-skills-view">
            {getAllSkills().map(({ category, skills }) => (
              <div key={category} className="skill-category-block">
                <h3 className="category-title">{categories[category]}</h3>
                <div className="skills-chip-grid">
                  {skills.map((skill, index) => renderSkillChip(skill, index))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="skills-chip-grid single-category">
            {skillsData[activeCategory]?.map((skill, index) => 
              renderSkillChip(skill, index)
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
