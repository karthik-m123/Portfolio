import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Shield, 
  Brain, 
  Users, 
  Cpu
} from 'lucide-react';
import { PlainCard } from '@/components/ui/plain-card';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'technical',
      title: 'Technical',
      icon: Code2,
      color: 'from-blue-500 to-indigo-600',
      skills: ['Python', 'MongoDB', 'GitHub', 'Firebase', 'C', 'C++', 'Java', 'IoT', 'Oracle'],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-emerald-500 to-green-600',
      skills: ['Penetration Testing', 'Ethical Hacking', 'Vulnerability Assessment', 'IoT Security', 'Privacy & Data Confidentiality', 'Information Security', 'Cybersecurity', 'Network Security', 'Network Vulnerability', 'Threat Detection', 'Vulnerability Scanning', 'Ubuntu', 'Kali Linux', 'Wireshark', 'OWASP'],
    },
    {
      id: 'ai-ml',
      title: 'AI',
      icon: Brain,
      color: 'from-purple-500 to-violet-600',
      skills: ['TensorFlow', 'OpenAI APIs', 'Generative AI', 'Generative AI Tools', 'AI Applications', 'AI Tools', 'Prompt Engineering', 'OpenAI', 'LLM', 'Dataset Training', 'Vibe Coding'],
    },
    {
      id: 'professional',
      title: 'Soft Skills',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      skills: ['Research Skills', 'Problem Solving', 'Solution Design', 'Critical Thinking', 'Project Planning', 'Design Thinking', 'Communication', 'Reporting'],
    }
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-slate-100/5 [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.6))]" />
      
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-indigo-900/50 rounded-full mb-4">
            <Cpu className="w-5 h-5 text-indigo-400 mr-2" />
            <span className="text-indigo-300 font-semibold text-sm">EXPERTISE</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & 
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Expertise
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Core technical expertise across development, security, and AI
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
                className="h-full"
              >
                <PlainCard>
                  {/* Category Header */}
                  <div className="flex items-center mb-4 flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} p-2 mr-3 flex items-center justify-center shadow-lg transform-gpu`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2 flex-1 content-start">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-gray-700/50 text-slate-300 rounded-full text-sm font-medium hover:bg-gray-600/50 transition-colors duration-200 transform-gpu whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </PlainCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
