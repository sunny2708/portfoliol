import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sunnykumar118989@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${formState.message}%0A%0AFrom: ${formState.email}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9718428062',
      href: 'tel:+919718428062',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sunnykumar118989@gmail.com',
      href: 'mailto:sunnykumar118989@gmail.com',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Mail,
      label: 'IIT Email',
      value: 'sunny_pa2503mth397@iitp.ac.in',
      href: 'mailto:sunny_pa2503mth397@iitp.ac.in',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Faridabad, India',
      href: '#',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-slate-950" />
      
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, innovative AI projects, 
            or just have a chat about the latest in technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-x-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-400 mb-4">Connect with me on social media</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
