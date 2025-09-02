import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Certifications from './components/Certifications';
import { BeamsBackground } from './components/ui/beams-background';

function App() {
  // Smooth-scroll hook disabled to improve mobile performance

  return (
    <BeamsBackground intensity="subtle">
      <div className="min-h-screen bg-transparent text-white relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Technologies />
            <Certifications />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      </div>
    </BeamsBackground>
  );
}

export default App;