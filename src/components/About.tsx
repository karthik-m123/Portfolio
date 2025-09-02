import React from "react";
import CloudOrbitDemo from "./cloud-orbit-demo";
import { motion } from 'framer-motion';
import { Shield, Brain, Code, Database } from "lucide-react";

const About: React.FC = () => {

  const skills = [
    {
      icon: <Brain className="w-8 h-8 text-violet-400" />,
      title: 'AI & LLM',
      description: 'Developing intelligent systems and LLMs models for security applications.',
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-400" />,
      title: 'Cybersecurity',
      description: 'Implementing robust security measures and threat detection systems and analyzing threats.',
    },
    {
      icon: <Code className="w-8 h-8 text-emerald-400" />,
      title: ' AI Full-Stack Development',
      description: 'Building secure, scalable, and efficient web applications and Prototypes.',
    },
    {
      icon: <Database className="w-8 h-8 text-amber-400" />,
      title: 'Data Analysis',
      description: 'Extracting insights from data to drive security strategies.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left Side: 3D Orbit Animation */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
            <CloudOrbitDemo />
          </div>
          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-6 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                I'm a passionate IT student specializing in the fascinating intersection of
                <span className="text-purple-400 font-semibold"> Artificial Intelligence</span> and
                <span className="text-cyan-400 font-semibold"> Cybersecurity</span>.
                Currently pursuing my Bachelor's degree, I'm dedicated to building secure AI systems
                and developing intelligent security solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                My expertise spans across <span className="text-green-400 font-semibold">machine learning</span>,
                <span className="text-purple-400 font-semibold">penetration testing</span>, and
                <span className="text-cyan-400 font-semibold">AI full-stack development</span>.
                I'm particularly interested in adversarial AI, automated threat detection,
                and creating AI-powered security tools.
              </motion.p>
            </div>

            {/* Statistic Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-4 mt-8 lg:mt-12"
            >
              <div className="p-4 rounded-xl bg-gray-800 text-center">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-gray-400">Vulnerabilities Found</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-800 text-center">
                <div className="text-3xl font-bold text-green-400">4+</div>
                <div className="text-sm text-gray-400">AI Projects</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skill Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-gray-800 shadow-lg hover:shadow-purple-400/20 transition-all duration-300"
              >
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;