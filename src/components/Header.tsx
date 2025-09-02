import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Check } from 'lucide-react';
import { shouldUseSmoothScroll } from '../lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('karthikeya2.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const webUrl = 'https://in.linkedin.com/in/m-karthik-4127b02bb';
    const appUrl = 'linkedin://in/m-karthik-4127b02bb';

    const timeout = setTimeout(() => {
      window.location.href = webUrl;
    }, 1000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        clearTimeout(timeout);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    try {
      window.location.href = appUrl;
    } catch (error) {
      clearTimeout(timeout);
      window.location.href = webUrl;
    }

    // Cleanup the event listener
    setTimeout(() => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, 1000);
  };

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/karthik-m123', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://in.linkedin.com/in/m-karthik-4127b02bb', label: 'LinkedIn', onClick: handleLinkedInClick },
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          // Update active section based on scroll position
          const sections = navItems.map(item => document.getElementById(item.id));
          const scrollPosition = window.scrollY + 100;
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(navItems[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
  const behavior: ScrollBehavior = shouldUseSmoothScroll() ? 'smooth' : 'auto';
  section.scrollIntoView({ behavior });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-indigo-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ Icon, href, label, onClick }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick as any}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full transition-all duration-200 text-slate-400 hover:text-white hover:bg-slate-800/50 backdrop-blur-sm"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full transition-all duration-200 text-gray-400 hover:text-white hover:bg-gray-800/50 backdrop-blur-sm"
              aria-label="Copy email"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 text-slate-300"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 border-t border-slate-700 mt-4">
            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isMobileMenuOpen ? 0 : -20, 
                  opacity: isMobileMenuOpen ? 1 : 0 
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-lg font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-indigo-400 bg-slate-800/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            {/* Mobile Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: isMobileMenuOpen ? 0 : 20, 
                opacity: isMobileMenuOpen ? 1 : 0 
              }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="flex justify-center space-x-6 mt-6 pt-4 border-t border-slate-700"
            >
              {socialLinks.map(({ Icon, href, label, onClick }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClick as any}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full transition-all duration-200 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
               <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full transition-all duration-200 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-6 h-6 text-emerald-400" /> : <Mail className="w-6 h-6" />}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;