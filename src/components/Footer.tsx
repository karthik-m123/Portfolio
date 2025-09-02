import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Dialog09 from './Dialog09';
import StarOnGithub from './ui/button-github';
import { StarButton } from './ui/star-button';
import { shouldUseSmoothScroll } from '../lib/utils';

const Footer: React.FC = () => {
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
    { href: 'https://in.linkedin.com/in/m-karthik-4127b02bb', label: 'LinkedIn', onClick: handleLinkedInClick },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
  const behavior: ScrollBehavior = shouldUseSmoothScroll() ? 'smooth' : 'auto';
  section.scrollIntoView({ behavior });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gray-900 border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20" />
      </div>

      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Karthik
            </div>
            <p className="text-gray-400 leading-relaxed">
              Cybersecurity Student & AI Enthusiast passionate about creating secure, 
              intelligent systems and protecting our digital future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="transition-all duration-200 text-gray-400 hover:text-white hover:underline"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              Connect
            </h3>
            <div className="flex space-x-4">
              <StarOnGithub />
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onClick={social.onClick as any}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <StarButton>{social.label}</StarButton>
                </motion.a>
              ))}
              <Dialog09 />
            </div>
          </motion.div>
        </div>
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-sm text-gray-400 flex items-center space-x-1">
            <span>© 2025 Karthik. Made with</span>
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#f59e0b', '#ef4444']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.span>
            <span>and lots of coffee ☕</span>
          </p>
          
          <motion.button
            onClick={() => scrollToSection('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium transition-colors duration-200 text-gray-400 hover:text-white"
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;