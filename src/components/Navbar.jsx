import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <div className="left">
            <Link to="/" onClick={() => scrollToSection('home')}>
              Praneeth's Portfolio
            </Link>
          </div>
          <div className={`right ${isOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="#home" onClick={() => scrollToSection('home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#education" onClick={() => scrollToSection('education')}>
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => scrollToSection('skills')}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => scrollToSection('projects')}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => scrollToSection('experience')}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#certifications" onClick={() => scrollToSection('certifications')}>
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection('contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span className={isOpen ? 'active' : ''}></span>
            <span className={isOpen ? 'active' : ''}></span>
            <span className={isOpen ? 'active' : ''}></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
