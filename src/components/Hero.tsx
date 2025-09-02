import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Brain, Bug, Download, Shield } from 'lucide-react';
import { roles } from './constants';
import { HeroSpotlight } from "./ui/hero-spotlight";
import { StardustButton } from './ui/stardust-button';
import { shouldUseSmoothScroll } from '../lib/utils';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  const behavior: ScrollBehavior = shouldUseSmoothScroll() ? 'smooth' : 'auto';
  window.scrollTo({ top: offsetPosition, behavior });
    }
  };

  const handleDownloadResume = () => {
    alert('Coming soon!');
  };

  const renderContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center w-full max-w-6xl mx-auto"
    >
      <motion.h1
        className="text-4xl font-bold md:text-6xl lg:text-7xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="text-white">
          Hello, I'm{' '}
        </span>
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
          Karthik
        </span>
      </motion.h1>

      <div className="flex h-16 items-center justify-center text-xl font-medium md:text-3xl lg:text-4xl mb-8">
        <span className="mr-3 text-slate-300">I'm a </span>
        <span className="font-mono font-bold text-indigo-400">
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-indigo-400"
          >
            |
          </motion.span>
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl lg:text-2xl mb-12"
      >
        Passionate about the intersection of{' '}
        <span className="font-semibold text-violet-400">
          Artificial Intelligence
        </span>{' '}
        and{' '}
        <span className="font-semibold text-emerald-400">Cybersecurity</span>.
        Building secure AI systems while hunting vulnerabilities and creating
        innovative solutions that protect our digital future.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {[
          {
            icon: Brain,
            label: 'AI',
            color: 'from-violet-400 to-purple-400',
          },
          {
            icon: Shield,
            label: 'Cybersecurity',
            color: 'from-indigo-400 to-blue-400',
          },
          {
            icon: Bug,
            label: 'Research',
            color: 'from-emerald-400 to-green-400',
          },
        ].map((skill, index) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`flex items-center gap-2 rounded-full bg-gradient-to-r ${skill.color} px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200`}
          >
            <skill.icon className="w-4 h-4" />
            {skill.label}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-6 sm:flex-row"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="focus:ring-slate-400 relative inline-flex h-12 w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
            Explore My Work
          </span>
        </button>
        <StardustButton onClick={handleDownloadResume}>
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </StardustButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-20"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="cursor-pointer p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-8 h-8 text-indigo-400" />
        </motion.button>
        <p className="text-slate-400 text-sm mt-2 font-medium">Scroll to explore</p>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden pt-20"
    >
      <HeroSpotlight>{renderContent()}</HeroSpotlight>
    </section>
  );
};

export default Hero;