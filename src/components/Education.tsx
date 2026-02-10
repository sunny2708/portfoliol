import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'M.Tech in AI & Data Science',
      institution: 'Indian Institute of Technology, Patna',
      shortName: 'IIT Patna',
      cgpa: '9.0',
      year: '2025 - 2027',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-500/30 hover:border-purple-500',
      current: true,
    },
    {
      degree: 'B.Tech in Electrical & Electronics Engineering',
      institution: 'Maharaja Agrasen Institute of Technology, Delhi',
      shortName: 'MAIT Delhi',
      cgpa: '8.9',
      year: '2020 - 2024',
      color: 'from-orange-500 to-pink-500',
      borderColor: 'border-orange-500/30 hover:border-orange-500',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950 to-transparent" />
      
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Academic Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={`group relative bg-slate-900/50 rounded-3xl p-8 border ${edu.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Current Badge */}
              {edu.current && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-semibold">
                  Current
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <GraduationCap size={28} />
              </div>

              {/* Degree */}
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              
              {/* Institution */}
              <p className="text-gray-400 mb-4">{edu.institution}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-gray-300 bg-slate-800/50 px-3 py-1.5 rounded-full">
                  <Award size={16} className="text-yellow-400" />
                  <span className="text-sm font-semibold">CGPA: {edu.cgpa}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-slate-800/50 px-3 py-1.5 rounded-full">
                  <Calendar size={16} className="text-purple-400" />
                  <span className="text-sm">{edu.year}</span>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
