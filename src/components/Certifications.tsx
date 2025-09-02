import React from 'react';
import { Award, CheckCircle, Calendar, ExternalLink } from 'lucide-react';
import ciscoLogo from '../assets/Cisco-logo.jpg';

const Certifications: React.FC = () => {
  const certificationList = [
    {
      name: 'Cisco Ethical Hacker',
      issuer: 'Cisco',
      logo: ciscoLogo,
      date: '2025',
      description: 'Advanced ethical hacking and penetration testing certification',
      badge: 'Professional',
    },
    {
      name: 'Microsoft Gen AI',
      issuer: 'Microsoft',
      logo: 'https://img.icons8.com/fluency/48/microsoft.png',
      date: '2025',
      description: 'Generative AI fundamentals and applications certification',
      badge: 'Certified',
    },
    {
      name: 'AI & Cybersecurity',
      issuer: 'Various Platforms',
      logo: null as string | null,
      date: 'Ongoing',
      description: 'Continuous learning in AI and cybersecurity domains and more...',
      badge: 'In Progress',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-lg mt-6 max-w-3xl mx-auto text-gray-300">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificationList.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 text-green-300 border border-green-400/30">
                  <CheckCircle className="w-3 h-3" />
                  {cert.badge}
                </span>
              </div>

              {/* Logo and content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {cert.logo ? (
                  <div className="w-20 h-20 mb-4 rounded-xl bg-slate-800/50 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      className="w-full h-full object-contain filter group-hover:brightness-110" 
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 mb-4 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-2 border-dashed border-slate-600/50 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-slate-400" />
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {cert.name}
                </h3>
                
                <p className="text-blue-400 font-medium mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {cert.issuer}
                </p>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-slate-700/50">
                  <span className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </span>
                  
                  <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 group/btn">
                    View
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-full border border-slate-700/50 text-gray-300 hover:border-blue-400/50 transition-all duration-300">
            <Award className="w-5 h-5" />
            <span>And more... Continuously expanding knowledge and certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;