import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Send, CheckCircle2, Globe, Smartphone, Code2, Search, Gamepad2, GraduationCap, Phone, MapPin } from 'lucide-react';

const SERVICES = [
  { id: 'web', name: 'Web Development', icon: Globe, color: 'text-cyan-400' },
  { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, color: 'text-blue-400' },
  { id: 'software', name: 'Custom Software', icon: Code2, color: 'text-purple-400' },
  { id: 'marketing', name: 'Digital Marketing', icon: Search, color: 'text-orange-400' },
  { id: 'design', name: 'UI/UX Design', icon: Gamepad2, color: 'text-pink-400' },
  { id: 'cloud', name: 'Cloud Solutions', icon: GraduationCap, color: 'text-green-400' }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};

const inputClasses = "w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#00E5FF]/50 focus:bg-white/[0.05] transition-all text-lg font-medium";
const labelClasses = "block text-[10px] font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 ml-1";

// --- STEP COMPONENTS (Moved Outside) ---

const Step1 = ({ direction, formData, setFormData }) => (
  <motion.div 
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.4, ease: "circOut" }}
    className="space-y-8"
  >
    <div className="mb-10">
      <h2 className="text-3xl font-black text-white mb-2">Let's start with the basics</h2>
      <p className="text-gray-400">Tell us who we'll be working with.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className={labelClasses}>Your Full Name</label>
        <input 
          autoFocus
          type="text" 
          placeholder="e.g. John Doe"
          className={inputClasses}
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses}>Email Address</label>
        <input 
          type="email" 
          placeholder="e.g. john@company.com"
          className={inputClasses}
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>
      <div>
        <label className={labelClasses}>Phone Number</label>
        <div className="relative group">
          <input 
            type="tel" 
            placeholder="+1 (555) 000-0000"
            className={`${inputClasses} pl-14`}
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
          <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#00E5FF] transition-colors" size={20} />
        </div>
      </div>
      <div>
        <label className={labelClasses}>Physical Address / Location</label>
        <div className="relative group">
          <input 
            type="text" 
            placeholder="e.g. San Francisco, CA"
            className={`${inputClasses} pl-14`}
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
          />
          <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#00E5FF] transition-colors" size={20} />
        </div>
      </div>
    </div>
  </motion.div>
);

const Step2 = ({ direction, formData, setFormData }) => (
  <motion.div 
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.4, ease: "circOut" }}
    className="space-y-8"
  >
    <div className="mb-10">
      <h2 className="text-3xl font-black text-white mb-2">What are we building?</h2>
      <p className="text-gray-400">Select the service that best matches your project.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {SERVICES.map((s) => (
        <div 
          key={s.id}
          onClick={() => setFormData(prev => ({ ...prev, service: s.name }))}
          className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-4 group ${
            formData.service === s.name 
              ? 'bg-[#00E5FF]/10 border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.1)]' 
              : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center transition-transform group-hover:scale-110 ${
            formData.service === s.name ? 'text-[#00E5FF]' : 'text-gray-500'
          }`}>
            <s.icon size={24} />
          </div>
          <span className={`font-bold transition-colors ${
            formData.service === s.name ? 'text-white' : 'text-gray-400'
          }`}>
            {s.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Step3 = ({ direction, formData, setFormData }) => (
  <motion.div 
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.4, ease: "circOut" }}
    className="space-y-8"
  >
    <div className="mb-10">
      <h2 className="text-3xl font-black text-white mb-2">Define your investment</h2>
      <p className="text-gray-400">This helps us propose the right team and tech stack.</p>
    </div>

    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10">
      <div className="flex justify-between items-end mb-8">
        <div>
          <label className={labelClasses}>Project Budget (USD)</label>
          <p className="text-gray-400 text-sm">Estimated investment range</p>
        </div>
        <span className="text-4xl font-black text-[#00E5FF] font-mono tracking-tighter">
          ${formData.budget.toLocaleString()}{formData.budget >= 50000 ? '+' : ''}
        </span>
      </div>

      <div className="relative h-12 flex items-center">
        <input 
          type="range" 
          min="100" 
          max="50000" 
          step="100"
          value={formData.budget}
          onChange={(e) => setFormData(prev => ({ ...prev, budget: Number(e.target.value) }))}
          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
        />
      </div>

      <div className="flex justify-between text-[10px] uppercase font-bold text-gray-600 tracking-widest mt-4">
        <span>Min: $100</span>
        <span>Max: $50K+</span>
      </div>
    </div>
  </motion.div>
);

const Step4 = ({ direction, formData, setFormData }) => {
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    }
  };

  return (
    <motion.div 
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: "circOut" }}
      className="space-y-8"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-black text-white mb-2">Final details</h2>
        <p className="text-gray-400">Wrap it up with a brief overview of your goals.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className={labelClasses}>Project Description</label>
          <textarea 
            autoFocus
            rows={5}
            placeholder="Share some context, challenges, or specific features you're looking for..."
            className={`${inputClasses} resize-none`}
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          />
        </div>
        
        <label className="p-6 border-2 border-dashed border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#00E5FF]/40 transition-all group flex flex-col items-center justify-center gap-3 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-[#00E5FF] transition-colors">
            <Send size={20} className="-rotate-45" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-white mb-1">
              {formData.file ? formData.file.name : 'Upload Project Brief'}
            </p>
            <p className="text-xs text-gray-500">PDF, DOC, or FIGMA links (Max 10MB)</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </label>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---

const ContactForm = ({ formData, setFormData, step, setStep, isSubmitting, setIsSubmitting, isSuccess, setIsSuccess }) => {
  const [[currentStep, direction], setStepWithDirection] = useState([step, 0]);

  const paginate = useCallback((newDirection) => {
    const nextStep = currentStep + newDirection;
    if (nextStep >= 1 && nextStep <= 4) {
      setStepWithDirection([nextStep, newDirection]);
      setStep(nextStep);
    }
  }, [currentStep, setStep]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using 127.0.0.1 instead of localhost can sometimes resolve local networking/DNS issues
      const apiUrl = 'http://127.0.0.1/skydreamix_backend/public/api/contact';
      console.log('Attempting to send data to:', apiUrl, formData);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          service: formData.service,
          budget: formData.budget,
          description: formData.description
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Server responded with error:', response.status, errorData);
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      setIsSuccess(true);
      console.log('Submission successful!');
    } catch (error) {
      console.error('Fetch error:', error);
      alert(`Error: ${error.message}. Check the console for details.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="py-24 lg:py-32 flex flex-col items-center justify-center text-center px-6">
        <motion.div
           initial={{ scale: 0, rotate: -45 }}
           animate={{ scale: 1, rotate: 0 }}
           transition={{ type: "spring", stiffness: 200, damping: 15 }}
           className="w-32 h-32 bg-[#00E5FF]/10 border-2 border-[#00E5FF] rounded-full flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(0,229,255,0.2)]"
        >
          <CheckCircle2 size={64} className="text-[#00E5FF]" />
        </motion.div>
        
        <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">You're all set!</h2>
        
        <p className="text-gray-400 text-lg lg:text-xl max-w-lg mx-auto mb-12 leading-relaxed">
          Your project blueprint has been received. One of our strategy experts will review it and reach out within 2 hours.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/'}
          className="px-12 py-5 bg-[#00E5FF] text-black rounded-full font-black text-xs tracking-[0.25em] uppercase hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all"
        >
          Return to Mission Control
        </motion.button>
      </div>
    );
  }

  return (
    <div className="relative min-h-[500px] flex flex-col">
      <div className="flex-1 overflow-hidden px-1">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {currentStep === 1 && <Step1 key="s1" direction={direction} formData={formData} setFormData={setFormData} />}
          {currentStep === 2 && <Step2 key="s2" direction={direction} formData={formData} setFormData={setFormData} />}
          {currentStep === 3 && <Step3 key="s3" direction={direction} formData={formData} setFormData={setFormData} />}
          {currentStep === 4 && <Step4 key="s4" direction={direction} formData={formData} setFormData={setFormData} />}
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between">
        <button 
          onClick={() => paginate(-1)}
          className={`group flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase transition-all ${
            currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-500 hover:text-white'
          }`}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        {currentStep < 4 ? (
          <button 
            onClick={() => paginate(1)}
            disabled={
              (currentStep === 1 && (!formData.name || !formData.email)) ||
              (currentStep === 2 && !formData.service)
            }
            className="px-10 py-5 bg-[#00E5FF] text-black rounded-full font-black text-xs tracking-[0.25em] uppercase flex items-center gap-3 hover:translate-x-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all disabled:opacity-50 disabled:grayscale disabled:hover:translate-x-0"
          >
            Continue 
            <ArrowRight size={16} />
          </button>
        ) : (
          <button 
            disabled={isSubmitting || !formData.description}
            onClick={handleSubmit}
            className="px-12 py-5 bg-white text-black rounded-full font-black text-xs tracking-[0.25em] uppercase flex items-center gap-3 hover:bg-[#00E5FF] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all disabled:opacity-50"
          >
            {isSubmitting ? 'Securing Connection...' : 'Launch Project'}
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
