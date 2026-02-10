import { Brain, Code2, Sparkles, Target } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expert',
      description: 'Specialized in LLMs, RAG, and Generative AI systems',
    },
    {
      icon: Code2,
      title: 'Full-Stack AI',
      description: 'End-to-end AI solution development and deployment',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Building cutting-edge AI products for real-world impact',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: '92% accuracy in Lead Scoring, production-ready systems',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Passionate AI Engineer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-purple-400 font-semibold">M.Tech student in AI & Data Science</span> at 
              <span className="text-pink-400 font-semibold"> IIT Patna</span>, with a strong foundation from my 
              B.Tech in EEE from MAIT Delhi. My passion lies in building intelligent systems that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With experience at <span className="text-orange-400 font-semibold">India Today Group</span>, 
              <span className="text-purple-400 font-semibold"> SoluLab</span>, 
              <span className="text-pink-400 font-semibold"> Collegedunia</span>, and 
              <span className="text-orange-400 font-semibold"> Goldman Sachs</span>, I've developed expertise in 
              LLMs, Computer Vision, RAG systems, and production-grade AI deployments.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in building AI-powered chatbots, virtual news anchors, automated evaluation systems, 
              and intelligent data processing pipelines using cutting-edge technologies like GPT-4o, LangChain, 
              and modern deep learning frameworks.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-slate-900 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="text-4xl font-bold text-purple-400 mb-2">4+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-slate-900 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all">
              <div className="text-4xl font-bold text-pink-400 mb-2">9.0</div>
              <div className="text-gray-400">CGPA @ IIT Patna</div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-slate-900 p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <div className="text-4xl font-bold text-orange-400 mb-2">10+</div>
              <div className="text-gray-400">AI Projects</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-slate-900 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-gray-400">Companies</div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
