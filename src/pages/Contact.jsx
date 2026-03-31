import React, { useRef, useEffect, useState, useMemo } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import ContactOrb from '../components/contact/ContactOrb';
import ContactForm from '../components/contact/ContactForm';
import WizardSummary from '../components/contact/WizardSummary';
import WizardTimeline from '../components/contact/WizardTimeline';
import ContactInfo from '../components/contact/ContactInfo';
import Footer from '../components/global/Footer';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    budget: 5000,
    description: '',
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate overall progress (0 to 1) for the 3D Orb
  const progress = useMemo(() => {
    let p = 0;
    if (formData.name && formData.email) p += 0.25;
    if (formData.service) p += 0.25;
    if (formData.budget > 5000 || step > 2) p += 0.25;
    if (formData.description) p += 0.25;
    const stepFloor = (step - 1) / 4;
    return Math.max(p, stepFloor);
  }, [formData, step]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, isSuccess]);

  return (
    <div className="min-h-screen bg-[#020206] text-white selection:bg-[#00E5FF] selection:text-black overflow-x-hidden relative">
      
      {/* 1. IMMERSIVE BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <ContactOrb progress={progress} />
        {/* Deep vignette for focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#020206]/40 to-[#020206]" />
      </div>

      {/* 2. SCROLLABLE CONTENT LAYER */}
      <div className="relative z-10">
        
        {/* HERO HEADER */}
        <section className="pt-32 pb-16 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">SkyDreamix Core Engine</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-[120px] font-black tracking-tighter leading-[0.85] mb-8 text-white"
          >
            LET'S BUILD <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">SOMETHING BIG</span>
          </motion.h1>
        </section>

        {/* MAIN WIZARD HUB */}
        <main className="max-w-6xl mx-auto px-4 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-[0_32px_128px_-32px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Progress Bar (Visual Only) */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#00E5FF] to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ type: "spring", stiffness: 50 }}
              />
            </div>

            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* WIZARD CONTENT (70%) */}
              <div className="flex-1 p-8 lg:p-20 order-2 lg:order-1">
                <div className="mb-12">
                  <WizardTimeline currentStep={step} />
                </div>

                <div className="relative">
                  <ContactForm 
                    formData={formData} 
                    setFormData={setFormData}
                    step={step}
                    setStep={setStep}
                    isSubmitting={isSubmitting}
                    setIsSubmitting={setIsSubmitting}
                    isSuccess={isSuccess}
                    setIsSuccess={setIsSuccess}
                  />
                </div>
              </div>

              {/* SUMMARY PANEL (30%) */}
              {!isSuccess && (
                <div className="w-full lg:w-[380px] bg-white/[0.02] border-b lg:border-b-0 lg:border-l border-white/5 p-8 lg:p-12 order-1 lg:order-2">
                  <div className="sticky top-12">
                    <WizardSummary formData={formData} currentStep={step} />
                  </div>
                </div>
              )}
            </div>

          </motion.div>

          {/* CONTACT INFO ROW */}
          <div className="mt-20">
            <ContactInfo />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
