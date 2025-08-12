import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Calendar, Target } from 'lucide-react';
import ciscoLogo from '../assets/Cisco-logo.jpg';

const Certifications: React.FC = () => {
  const certificationList = [
    {
      name: 'Cisco Ethical Hacker',
      issuer: 'Cisco',
      logo: ciscoLogo,
    },
    {
      name: 'Microsoft Gen AI',
      issuer: 'Microsoft',
      logo: 'https://img.icons8.com/?size=100&id=22989&format=png&color=000000',
    },
    {
      name: 'And more...',
      issuer: '',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900">
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
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationList.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-16 h-16 mb-4 object-contain" />
              <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;