import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Web developer', 'Content creator', 'Python developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="firstsection">
      <div className="leftsection">
        Hi, i am <span className="purple">Praneeth</span>
        <div>i am a passionate</div>
        <span ref={typedElement} id="element"></span>
      </div>
      <div className="rightsection">
        <img src="/developer.webp" alt="Developer" />
      </div>
    </section>
  );
};

export default Home;
