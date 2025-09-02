import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { technologies } from './constants';
import { Sparkles, Zap } from 'lucide-react';

const Technologies: React.FC = () => {
  // Organize technologies by category for better presentation
  const categoryMap: { [key: string]: typeof technologies } = {};
  technologies.forEach(tech => {
    const category = getCategoryFromTitle(tech.title);
    if (!categoryMap[category]) {
      categoryMap[category] = [];
    }
    categoryMap[category].push(tech);
  });

  function getCategoryFromTitle(title: string): string {
    const frontendTech = ['React', 'Next.js', 'Tailwind', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue'];
    const backendTech = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL'];
    const aiTech = ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'];
    const devOpsTech = ['Docker', 'AWS', 'Azure', 'Firebase', 'Vercel'];
    const toolsTech = ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'];
    
    if (frontendTech.some(tech => title.toLowerCase().includes(tech.toLowerCase()))) return 'Frontend';
    if (backendTech.some(tech => title.toLowerCase().includes(tech.toLowerCase()))) return 'Backend';
    if (aiTech.some(tech => title.toLowerCase().includes(tech.toLowerCase()))) return 'AI/ML';
    if (devOpsTech.some(tech => title.toLowerCase().includes(tech.toLowerCase()))) return 'DevOps';
    if (toolsTech.some(tech => title.toLowerCase().includes(tech.toLowerCase()))) return 'Tools';
    return 'Languages';
  }

  // Split into two rows for marquee display
  const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
  const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

  const TechItem = ({ tech, index = 0 }: { tech: { title: string; logo: string }, index?: number }) => (
    <motion.div 
      className="mx-3 group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center justify-center p-5 bg-gray-800/80 rounded-2xl shadow-lg border border-gray-700 transition-all duration-300 min-w-[140px] h-32 hover:shadow-2xl hover:shadow-indigo-500/30 hover:border-indigo-400 hover:-translate-y-2 hover:bg-gray-700/90 group">
        <div className="relative mb-3">
          <img 
            src={tech.logo} 
            alt={tech.title} 
            className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
          />
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400/20 via-violet-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
          <div className="absolute -inset-3 bg-gradient-to-r from-indigo-400/10 via-violet-400/10 to-purple-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10 animate-pulse" />
        </div>
        <span className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors duration-300 text-center leading-tight group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]">
          {tech.title}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-violet-900/50 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-violet-400 mr-2" />
            <span className="text-violet-300 font-semibold text-sm">TECHNOLOGY STACK</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technologies & 
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Tools
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of cutting-edge technologies, frameworks, and tools 
            that power modern software development and security solutions.
          </p>
        </motion.div>

        {/* Flowing Technology Showcase */}
        <div className="space-y-8">
          {/* First Row - Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Marquee 
              gradient={false} 
              speed={40} 
              className="py-4"
            >
              {firstRow.map((tech, index) => (
                <TechItem key={tech.title} tech={tech} index={index} />
              ))}
            </Marquee>
          </motion.div>

          {/* Second Row - Right to Left */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Marquee 
              gradient={false} 
              speed={40} 
              direction="right" 
              className="py-4"
            >
              {secondRow.map((tech, index) => (
                <TechItem key={tech.title} tech={tech} index={index} />
              ))}
            </Marquee>
          </motion.div>
        </div>

        {/* Integration Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/80 rounded-2xl p-8 shadow-xl border border-gray-700 max-w-3xl mx-auto">
            <Zap className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Innovation
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Staying at the forefront of technology trends, constantly expanding this toolkit 
              to deliver cutting-edge solutions that meet evolving industry demands.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;