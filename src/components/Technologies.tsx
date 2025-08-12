import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from './ui/card-hover-effect';
import { technologies } from './constants';
const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-glow">
              Technologies & Tools
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-lg mt-6 max-w-3xl mx-auto text-gray-300">
            My arsenal of development, security, and AI tools
          </p>
        </motion.div>

        <HoverEffect items={technologies} />
      </div>
    </section>
  );
};

export default Technologies;