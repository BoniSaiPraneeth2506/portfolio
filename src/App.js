import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div className="App bg-background min-h-screen" key="content">
            <Navbar />
            <main>
              <Home />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;

