import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Code2, Search, Gamepad2, GraduationCap, ArrowRight, MousePointer2 } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import { servicesData } from '../utils/servicesData';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Globe': return <Globe className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />;
    case 'Smartphone': return <Smartphone className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />;
    case 'Code2': return <Code2 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />;
    case 'Search': return <Search className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />;
    case 'Gamepad2': return <Gamepad2 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />;
    case 'GraduationCap': return <GraduationCap className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />;
    default: return <Code2 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />;
  }
};

const Services = () => {
  const serviceKeys = Object.keys(servicesData);

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[#020205] text-white">
        {/* --- Background Texture / Gradients --- */}
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-1/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        </div>

        {/* --- Hero Section --- */}
        <section className="pt-40 pb-20 px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-accent-1 font-black uppercase tracking-[0.4em] text-xs mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-accent-1/50" /> Our Expertise
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
            >
              Solutions designed <br />
              <span className="gradient-text">For the Future</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/50 text-base md:text-xl max-w-2xl leading-relaxed"
            >
              We combine deep technical expertise with strategic vision to deliver digital products that redefine industries and drive massive growth.
            </motion.p>
          </div>
        </section>

        {/* --- Service Cards Grid --- */}
        <section className="pb-32 px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceKeys.map((key, i) => {
              const service = servicesData[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link 
                    to={`/services/${service.slug}`}
                    className="group block relative h-full p-8 md:p-10 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover Gradient Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: service.gradient }}
                    />
                    
                    {/* Icon Container */}
                    <div className={`relative mb-8 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 ${service.accent} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                      {getIcon(service.icon)}
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-white/40 text-sm md:text-base leading-relaxed mb-10 min-h-[3rem]">
                        {service.tagline}
                      </p>

                      {/* Footer Info */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <span className="text-[10px] uppercase font-black tracking-widest text-white/30 group-hover:text-accent-1 transition-colors">
                          Explore Service
                        </span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent-1 group-hover:border-accent-1 transition-all duration-500">
                          <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl pointer-events-none transition-opacity group-hover:opacity-20 ${service.bgAccent}`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* --- Call to Action Bar --- */}
        <section className="px-6 sm:px-12 lg:px-24 pb-24 w-full max-w-[1920px] mx-auto">
          <div className="relative rounded-[40px] bg-accent-1/5 border border-accent-1/20 p-12 md:p-24 overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-none tracking-tighter">
                Need a Custom <br /> <span className="text-accent-1">Solution?</span>
              </h2>
              <p className="text-white/60 text-base md:text-xl max-w-xl mx-auto mb-12">
                Every business is unique. We build tailored architectures that fit your specific workflows and goals.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-accent-1 text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
              >
                Start a conversation <MousePointer2 className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
