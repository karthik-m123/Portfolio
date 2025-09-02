import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Shield, 
  Brain, 
  Users, 
  Cpu,
  CheckCircle
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'technical',
      title: 'Full-Stack Development',
      icon: Code2,
      color: 'from-blue-500 to-indigo-600',
      skills: [
        'Python', 'React.js', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 
        'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git/GitHub', 'Firebase'
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Ethical Hacking',
      icon: Shield,
      color: 'from-emerald-500 to-green-600',
      skills: [
        'Penetration Testing', 'Vulnerability Assessment', 'Kali Linux', 'Wireshark', 
        'Metasploit', 'Burp Suite', 'Nmap', 'OWASP', 'Network Security', 'IoT Security'
      ],
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-violet-600',
      skills: [
        'TensorFlow', 'PyTorch', 'OpenAI APIs', 'LangChain', 'Hugging Face', 
        'Computer Vision', 'NLP', 'Prompt Engineering', 'Model Fine-tuning', 'Data Science'
      ],
    },
    {
      id: 'professional',
      title: 'Leadership & Strategy',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      skills: [
        'Team Leadership', 'Project Management', 'Strategic Planning', 'Problem Solving', 
        'Research & Development', 'Technical Writing', 'Presentation Skills', 'Mentoring'
      ],
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-slate-100/5 [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0.6))]" />
      
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-indigo-900/50 rounded-full mb-6">
            <Cpu className="w-6 h-6 text-indigo-400 mr-2" />
            <span className="text-indigo-300 font-semibold text-sm">TECHNICAL EXPERTISE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Skills & 
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Expertise
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical mastery across modern development, cybersecurity, 
            and artificial intelligence with proven industry experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/80"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-2.5 mr-4 flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {category.title}
                    </h3>
                    <div className={`w-16 h-0.5 bg-gradient-to-r ${category.color} rounded-full`}></div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.15) + (skillIndex * 0.05) }}
                      className="flex items-center group"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 group-hover:text-emerald-300 transition-colors" />
                      <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '40+', label: 'Technologies Mastered' },
              { number: '4', label: 'Core Domains' },
              { number: '5+', label: 'Years Experience' },
              { number: '∞', label: 'Learning & Growing' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
