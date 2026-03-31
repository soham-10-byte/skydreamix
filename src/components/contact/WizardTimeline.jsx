import React from 'react';
import { motion } from 'framer-motion';
import { User, Layers, DollarSign, FileText, CheckCircle2 } from 'lucide-react';

const STEPS = [
  { id: 1, label: 'Profile', icon: User },
  { id: 2, label: 'Solution', icon: Layers },
  { id: 3, label: 'Investment', icon: DollarSign },
  { id: 4, label: 'Project Brief', icon: FileText }
];

const WizardTimeline = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between mb-12 relative px-4">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 z-0" />
      
      {/* Progress Line */}
      <motion.div 
        className="absolute top-1/2 left-0 h-[2px] bg-[#00E5FF] -translate-y-1/2 z-1 shadow-[0_0_15px_rgba(0,229,255,0.5)]"
        initial={{ width: 0 }}
        animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {STEPS.map((step) => {
        const Icon = step.icon;
        const isActive = currentStep >= step.id;
        const isCurrent = currentStep === step.id;

        return (
          <div key={step.id} className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ 
                scale: isCurrent ? 1.2 : 1,
                borderColor: isActive ? '#00E5FF' : 'rgba(255,255,255,0.1)',
                backgroundColor: isActive ? '#00E5FF' : '#020206'
              }}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors duration-500`}
            >
              <Icon size={18} className={isActive ? 'text-black' : 'text-gray-500'} />
            </motion.div>
            
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`absolute top-12 text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-500 ${
                isActive ? 'text-[#00E5FF]' : 'text-gray-500'
              }`}
            >
              {step.label}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
};

export default WizardTimeline;
