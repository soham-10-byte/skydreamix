import React, { useRef, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Code2, 
  Search, 
  Gamepad2, 
  GraduationCap, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    desc: "Next-gen web applications built for speed, scalability, and stunning UX.",
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    features: ["React & Next.js", "Headless CMS", "E-commerce"]
  },
  {
    title: "Mobile Apps",
    slug: "mobile-app",
    desc: "Seamless iOS and Android experiences tailored for global audiences.",
    icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
    features: ["Flutter & Native", "Smooth UI/UX", "High Performance"]
  },
  {
    title: "Custom Software",
    slug: "custom-software",
    desc: "Enterprise-grade software solutions designed to solve complex problems.",
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    features: ["SaaS Platforms", "Cloud Integration", "Legacy Migration"]
  },
  {
    title: "SEO & Digital Marketing",
    slug: "digital-marketing",
    desc: "Data-driven strategies to boost your visibility and search rankings.",
    icon: <Search className="w-8 h-8 text-cyan-400" />,
    features: ["Technical SEO", "Growth Hacking", "PPC Campaigns"]
  },
  {
    title: "Graphics & Video",
    slug: "graphics-video",
    desc: "High-end visual storytelling and cinematic branding for your business.",
    icon: <Gamepad2 className="w-8 h-8 text-cyan-400" />,
    features: ["Brand Identity", "3D Animation", "Video Production"]
  },
  {
    title: "IT Academy",
    slug: "it-academy",
    desc: "Empowering the next generation of tech talent through expert-led training.",
    icon: <GraduationCap className="w-8 h-8 text-cyan-400" />,
    features: ["Full Stack Bootcamps", "UI/UX Design", "Job Placement"]
  }
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  
  // Use quickTo for high-performance mouse following
  const qToX = useRef();
  const qToY = useRef();

  useEffect(() => {
    if (cardRef.current) {
      qToX.current = gsap.quickTo(cardRef.current, "rotateY", { duration: 0.4, ease: "power2.out" });
      qToY.current = gsap.quickTo(cardRef.current, "rotateX", { duration: 0.4, ease: "power2.out" });
    }
  }, []);

  const onMouseMove = (e) => {
    if (!cardRef.current || !qToX.current || !qToY.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Limits: Max 15 degree tilt
    qToX.current((x - 0.5) * 15);
    qToY.current((y - 0.5) * -15);
  };

  const onMouseLeave = () => {
    if (qToX.current && qToY.current) {
      qToX.current(0);
      qToY.current(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="perspective-1000 h-full"
    >
      <div 
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative p-8 h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl service-card-glow transition-transform duration-500 transform-gpu hover:-translate-y-2 will-change-transform"
      >
        {/* Hardware-accelerated glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
        
        <div className="mb-6 inline-block p-4 bg-cyan-500/10 rounded-xl transition-all duration-300">
          {service.icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          {service.desc}
        </p>

        <ul className="space-y-2 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-gray-500">
              <span className="w-1 h-1 bg-cyan-500 rounded-full mr-2 opacity-50" />
              {feature}
            </li>
          ))}
        </ul>

        <Link 
          to={`/services/${service.slug}`} 
          className="explore-link mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300"
        >
          Explore More 
          <ArrowRight size={14} className="explore-arrow" />
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-black">
      {/* Background patterns - simplified */}
      <div className="absolute inset-0 diagonal-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] relative z-10">
        <div className="max-w-4xl mb-16 text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Our Core <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-xl"
          >
            Elevating digital experiences through cutting-edge technology and precision-crafted software solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
