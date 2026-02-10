import { ChevronDown, MapPin, Mail, Phone, Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-pink-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
              <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SK
              </span>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-slate-950 flex items-center justify-center">
            <span className="text-xs">✓</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Sunny Kumar
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text font-semibold mb-6">
          AI Engineer & Data Scientist
        </p>

        {/* Institution */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
          <MapPin size={18} className="text-purple-400" />
          <span>M.Tech AI & DS • IIT Patna</span>
        </div>

        {/* Roll Number */}
        <p className="text-sm text-gray-500 mb-8">Roll No: IITP006482</p>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="tel:+919718428062"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 hover:border-purple-500 transition-colors"
          >
            <Phone size={16} className="text-purple-400" />
            <span className="text-sm text-gray-300">+91-9718428062</span>
          </a>
          <a
            href="mailto:sunnykumar118989@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 hover:border-pink-500 transition-colors"
          >
            <Mail size={16} className="text-pink-400" />
            <span className="text-sm text-gray-300">sunnykumar118989@gmail.com</span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 bg-slate-800/50 border border-slate-700 rounded-full font-semibold hover:bg-slate-800 hover:border-purple-500 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={18} />
            View Work
          </a>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="inline-block animate-bounce">
          <ChevronDown size={32} className="text-gray-500" />
        </a>
      </div>
    </section>
  );
}
