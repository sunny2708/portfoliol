import { useInView } from 'react-intersection-observer';

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming',
      color: 'from-purple-500 to-indigo-500',
      skills: ['Python'],
    },
    {
      title: 'AI/ML Technologies',
      color: 'from-pink-500 to-rose-500',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'NLP',
        'Transformers',
        'ViT Transformer',
        'Generative AI',
        'RAG',
        'LLM',
        'Agentic AI',
        'YOLO-v8',
        'GAN',
        'LangChain',
      ],
    },
    {
      title: 'Libraries & Frameworks',
      color: 'from-orange-500 to-amber-500',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      title: 'Cloud Platforms',
      color: 'from-cyan-500 to-blue-500',
      skills: ['AWS', 'Azure', 'GCP'],
    },
  ];

  const techLogos = [
    { name: 'Python', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    { name: 'TensorFlow', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    { name: 'PyTorch', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
    { name: 'LangChain', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    { name: 'OpenAI', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
    { name: 'AWS', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    { name: 'Docker', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { name: 'Kubernetes', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { name: 'GPT-4o', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { name: 'YOLO', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
    { name: 'Redis', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
    { name: 'FastAPI', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {techLogos.map((tech) => (
            <div
              key={tech.name}
              className={`px-4 py-2 rounded-full border ${tech.color} font-medium text-sm hover:scale-105 transition-transform cursor-default`}
            >
              {tech.name}
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800 hover:border-purple-500/30 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-sm text-gray-300 hover:bg-slate-700/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Skills Bar */}
        <div className="mt-16 space-y-6">
          <h3 className="text-xl font-bold text-center mb-8">Core Competencies</h3>
          
          {[
            { name: 'Large Language Models (LLM)', level: 95, color: 'from-purple-500 to-pink-500' },
            { name: 'Computer Vision', level: 90, color: 'from-pink-500 to-orange-500' },
            { name: 'RAG & Agentic AI', level: 92, color: 'from-orange-500 to-yellow-500' },
            { name: 'Deep Learning', level: 88, color: 'from-cyan-500 to-blue-500' },
            { name: 'Cloud Deployment', level: 85, color: 'from-green-500 to-teal-500' },
          ].map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: inView ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 150}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
