import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: 'Technical Skills',
      description: ' Python , C , HTML, React.js, Node.js, Express.js, Firebase, Tailwind CSS, Internet of Things (IoT), IoT–AI , Microcontrollers, Arduino IDE, Wireless Networking, Networking Types, IPv4, IPv6, Protocols & Standards, Network Media',
      link: '#'
    },
    {
      title: 'Cybersecurity',
      description: 'Ethical Hacking, Vulnerability Assessment, IoT Security, Privacy & Data Confidentiality, Information Security, Cybersecurity, Network Vulnerability, Threat Detection, Vulnerability Scanning, Ubuntu, Kali Linux, Wireshark',
      link: '#'
    },
    {
      title: 'Artificial Intelligence & ML models',
      description: 'Generative AI, Generative AI Tools, AI Applications, AI Tools, Prompt Engineering, OpenAI, AI, Vibe Coding',
      link: '#'
    },
    {
      title: 'Soft Skills',
      description: 'Research Skills, Problem Solving, Solution Design, Critical Thinking, Project Planning, Design Thinking, Communication, Engineering, Reporting',
      link: '#'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-lg mt-6 max-w-3xl mx-auto text-gray-300">
            AI Enthusiast • Cybersecurity • AI Full Stack Developer (Vibe Coding) • Ethical Hacker
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((item) => (
              <div key={item.title} className="p-6 rounded-lg bg-gray-800 shadow-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;