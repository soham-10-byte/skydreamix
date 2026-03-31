import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const ServiceFAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default
  const [showAll, setShowAll] = useState(false);

  // Show up to 4 initially, or all if expansion toggled
  const visibleFaqs = showAll ? data.faqs : data.faqs.slice(0, 4);

  return (
    <section id="faq" className="py-32 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className={`${data.accent} text-sm font-bold tracking-[0.2em] uppercase`}>Questions</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">Frequently Asked</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {visibleFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border-b ${isOpen ? 'border-transparent' : 'border-white/10'} overflow-hidden relative rounded-xl transition-colors duration-300 ${isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'}`}
            >
              {/* Active Left Bar */}
              {isOpen && (
                <motion.div 
                  layoutId="faqBar"
                  className={`absolute left-0 top-0 bottom-0 w-1 ${data.bgAccent} rounded-l-xl`}
                />
              )}

              <button 
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-lg"
              >
                <span className={isOpen ? data.accent : 'text-gray-200'}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`shrink-0 ${isOpen ? data.accent : 'text-gray-500'}`}
                >
                  <Plus size={20} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed font-medium pl-[24px]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* Show More toggle if > 4 items */}
        {data.faqs.length > 4 && (
          <div className="pt-8 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className={`px-6 py-2 rounded-full border border-white/10 text-sm font-bold text-white hover:bg-white/5 transition-colors`}
            >
              {showAll ? 'Show Less' : `Show ${data.faqs.length - 4} More Questions`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceFAQ;
