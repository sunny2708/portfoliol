import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'India Today Group',
      role: 'AI System Designer',
      location: 'Noida, India',
      period: 'Sep 2025 - Present',
      color: 'from-red-500 to-orange-500',
      borderColor: 'border-red-500/30',
      current: true,
      points: [
        'Built a multilingual (English/Hindi/Hinglish) LLM-powered Bihar election chatbot using Excel-based data (1952–2020) with Text-to-SQL architecture for high numerical accuracy and low latency',
        'Built an AI-powered virtual news anchor platform using open-source video generation models (LTX, Wan2.2) with Latent Sync–based lip synchronization for production-ready news delivery',
        'Implemented post-processing video enhancement pipelines to improve visual quality and produce media-grade outputs',
      ],
    },
    {
      company: 'SoluLab Pvt. Ltd.',
      role: 'AI Engineer',
      location: 'Remote, India',
      period: 'Jun 2025 - Sep 2025',
      color: 'from-purple-500 to-indigo-500',
      borderColor: 'border-purple-500/30',
      current: false,
      points: [
        'Developed GPT-4o-powered AI chatbot with multi-modal interaction including voice (ElevenLabs), document-based QA using RAG, and LangChain integration',
        'Built smart land division layout tool using Overstreet logic and GPT-4o for dynamic planning; created property valuation engine for intelligent pricing',
        'Integrated Redis and WebSocket for real-time messaging and efficient state management in the chatbot',
      ],
    },
    {
      company: 'Collegedunia Web Pvt. Ltd.',
      role: 'Data Scientist',
      location: 'Gurugram, India',
      period: 'Jul 2024 - Jun 2025',
      color: 'from-pink-500 to-rose-500',
      borderColor: 'border-pink-500/30',
      current: false,
      points: [
        'Developed AI-driven dish recognition system using U-Net, YOLO, and Gemini Flash for deep learning and computer vision',
        'Built AI-powered system to automate UPSC handwritten answer sheet evaluation using CRAFT, AWS OCR, RAG, GPT-4o, and Langchain',
        'Developed Lead Scoring System achieving 92% accuracy using CatBoost model; created neural network for auto deskewing and orientation correction',
        'Deployed solutions on AWS EKS ensuring seamless scalability and production-readiness for real-time training sessions',
      ],
    },
    {
      company: 'AppsQuiver',
      role: 'Data Scientist',
      location: 'Faridabad, India',
      period: 'Jan 2024 - Jun 2024',
      color: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-500/30',
      current: false,
      points: [
        'Developed Text Analytics toolkit combining NLP capabilities: Text Analytics, Summarization, and Translation',
        'Explored state-of-art NLP models including Google Pegasus, Facebook Bart, and Huggingface T5 for text summarization and theme extraction',
      ],
    },
    {
      company: 'Goldman Sachs',
      role: 'Data Analyst Intern',
      location: 'Remote, India',
      period: 'Jun 2021 - Jul 2021',
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500/30',
      current: false,
      points: [
        'Performed authorized analysis of anonymized password datasets to identify weak-password patterns and deliver actionable recommendations',
        'Designed password-strength metrics and policy optimizations (entropy thresholds, hashing/salting guidance) to improve authentication resilience',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative mb-12 lg:mb-0 ${
                index % 2 === 0 ? 'lg:pr-[50%] lg:text-right' : 'lg:pl-[50%] lg:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div
                className={`lg:max-w-lg ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`group bg-slate-900/50 rounded-2xl p-6 border ${exp.borderColor} hover:border-opacity-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                  {/* Current Badge */}
                  {exp.current && (
                    <div className={`inline-block mb-4 px-3 py-1 bg-gradient-to-r ${exp.color} rounded-full text-xs font-semibold`}>
                      Currently Working
                    </div>
                  )}

                  {/* Header */}
                  <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                      <Briefcase size={24} />
                    </div>
                    <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-pink-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className={`flex flex-wrap gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Points */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-left' : ''}`}>
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <ChevronRight size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
