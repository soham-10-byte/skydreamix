import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingTiers = ({ data }) => {
  return (
    <section id="pricing" className="border-b border-white/5 py-32 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className={`${data.accent} text-sm font-bold tracking-[0.2em] uppercase`}>Investment</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">Simple, Transparent Pricing</h2>
      </motion.div>

      {/* Pricing Cards Horizontal Scroll Snap on Mobile, Grid on Desktop */}
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 pb-8 pt-10 snap-x snap-mandatory hide-scrollbars">
        {data.pricing.map((plan, index) => {
          const isPopular = plan.popular;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: index * 0.15 }}
              className={`snap-center shrink-0 w-[85vw] sm:w-[400px] lg:w-auto relative rounded-3xl p-8 flex flex-col bg-[#0A0D14] transition-transform duration-300 hover:-translate-y-2
                ${isPopular ? `border ${data.borderAccent} shadow-[0_0_30px_rgba(255,255,255,0.05)] z-10 scale-100 lg:scale-105` : 'border border-white/10'}
              `}
            >
              {isPopular && (
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${data.bgAccent} shadow-lg`}>
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500 font-medium mb-1">/project</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full ${data.bgAccent}/10 flex items-center justify-center`}>
                      <Check size={12} className={data.accent} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-300 font-medium leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl text-sm font-bold transition-all
                ${isPopular 
                  ? `${data.bgAccent} text-white shadow-lg hover:opacity-90` 
                  : 'bg-white/5 text-white hover:bg-white/10'
                }
              `}>
                Get Started
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingTiers;
