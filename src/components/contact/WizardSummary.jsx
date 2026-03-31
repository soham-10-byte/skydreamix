import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Smartphone, Layers, DollarSign, FileText, CheckCircle2 } from 'lucide-react';

const WizardSummary = ({ formData, currentStep }) => {
  const summaryItems = [
    { 
      id: 1, 
      label: 'Client Info', 
      icon: User, 
      value: formData.name ? `${formData.name} (${formData.email || 'No email'})` : 'Awaiting details...' 
    },
    { 
      id: 2, 
      label: 'Requesting', 
      icon: Layers, 
      value: formData.service || 'Select a service...' 
    },
    { 
      id: 3, 
      label: 'Budget Range', 
      icon: DollarSign, 
      value: formData.budget ? `$${formData.budget.toLocaleString()}+` : 'Establishing budget...' 
    },
    { 
      id: 4, 
      label: 'The Brief', 
      icon: FileText, 
      value: formData.description ? formData.description.substring(0, 40) + '...' : 'Details pending...' 
    }
  ];

  return (
    <div className="w-full">
      <h3 className="text-white text-[10px] font-black tracking-[0.3em] uppercase mb-10 opacity-40">
        Project Blueprint
      </h3>

      <div className="space-y-10">
        {summaryItems.map((item) => {
          const isCompleted = (item.id < currentStep) || (item.id === 4 && formData.description);
          
          return (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-5 relative group"
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-500 ${
                isCompleted ? 'bg-[#00E5FF]/5 border-[#00E5FF]/20 shadow-[0_0_20px_rgba(0,229,255,0.1)]' : 'bg-white/5 border-white/10'
              }`}>
                {isCompleted ? (
                  <CheckCircle2 size={18} className="text-[#00E5FF]" />
                ) : (
                  <item.icon size={16} className="text-white/20 group-hover:text-white/40 transition-colors" />
                )}
              </div>

              <div className="pt-1">
                <p className={`text-[9px] font-black tracking-[0.2em] uppercase mb-1.5 transition-colors ${
                  isCompleted ? 'text-[#00E5FF]' : 'text-white/20'
                }`}>
                  {item.label}
                </p>
                <motion.p 
                  key={item.value}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs font-semibold text-white/70 leading-relaxed max-w-[200px]"
                >
                  {item.value}
                </motion.p>
              </div>

              {/* Connecting line */}
              {item.id !== 4 && (
                <div className={`absolute left-5 top-10 w-[1px] h-10 transition-colors duration-500 ${
                  isCompleted ? 'bg-[#00E5FF]/10' : 'bg-white/5'
                }`} />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WizardSummary;
