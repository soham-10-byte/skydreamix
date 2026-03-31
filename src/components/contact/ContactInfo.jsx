import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';

const InfoRow = ({ icon: Icon, title, value, copyableText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copyableText) return;
    navigator.clipboard.writeText(copyableText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
        copyableText ? 'cursor-pointer hover:bg-white/[0.03] group' : ''
      }`}
      onClick={handleCopy}
    >
      <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#00E5FF]/50 group-hover:bg-[#00E5FF]/10 transition-colors">
        <Icon size={18} className="text-gray-400 group-hover:text-[#00E5FF] transition-colors" />
      </div>
      <div>
        <p className="text-[#00E5FF] text-[10px] font-bold tracking-widest uppercase mb-1">
          {title}
        </p>
        <p className="text-sm font-medium text-white max-w-[200px] leading-relaxed">
          {value}
        </p>
      </div>
      {copyableText && (
        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? (
            <Check size={16} className="text-[#34D399]" />
          ) : (
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">
              Copy
            </span>
          )}
        </div>
      )}
    </div>
  );
};

const OfficeHours = () => (
  <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
    <div className="flex items-center gap-3 mb-4">
      <Clock size={18} className="text-[#00E5FF]" />
      <h4 className="text-white text-xs font-bold tracking-widest uppercase">Office Hours</h4>
    </div>
    <div className="space-y-2 text-xs text-gray-400">
      <div className="flex justify-between">
        <span>Mon - Fri</span>
        <span className="text-white font-medium">9:00 AM - 7:00 PM IST</span>
      </div>
      <div className="flex justify-between">
        <span>Saturday</span>
        <span className="text-white font-medium">10:00 AM - 4:00 PM IST</span>
      </div>
      <div className="flex justify-between">
        <span>Sunday</span>
        <span className="text-[#00E5FF] font-bold tracking-widest uppercase">Closed</span>
      </div>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="h-full flex flex-col pt-8 lg:pt-0">
      
      {/* Dynamic Header Block */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 text-[10px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6 relative overflow-hidden group hover:bg-[#00E5FF]/20 transition-colors">
          <span className="relative z-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            We reply within 2 hours
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">Direct Contact</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Prefer to skip the form? Reach out directly via email or give us a call. Our strategy consultants are ready to assist you globally.
        </p>
      </div>

      {/* Info Rows */}
      <div className="space-y-2 mb-10">
        <InfoRow 
          icon={Phone} 
          title="Phone & WhatsApp" 
          value="+91 94332 77194" 
          copyableText="+919433277194"
        />
        <InfoRow 
          icon={Mail} 
          title="General Inquiries" 
          value="contact@skydreamix.co.in" 
          copyableText="contact@skydreamix.co.in"
        />
        <InfoRow 
          icon={MapPin} 
          title="Headquarters" 
          value="India" 
          copyableText="India"
        />
      </div>

      <OfficeHours />

      {/* Custom Filtered Google Maps Embed */}
      <div className="w-full h-[250px] bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden mt-auto relative group">
        <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl group-hover:ring-[#00E5FF]/50 transition-colors" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8488099881264!2d88.45524231495982!3d22.58474998517617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275330372df03%3A0xc343468d601d0a52!2sWebel%20Bhavan!5e0!3m2!1sen!2sin!4v1683901962383!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ 
            border: 0, 
            filter: "grayscale(100%) invert(100%) contrast(150%) hue-rotate(180deg)", 
            opacity: 0.8
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SkyDreamix HQ"
        />
      </div>

      {/* Social Row & CTA */}
      <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm font-bold hover:bg-[#00E5FF] hover:border-[#00E5FF] hover:text-black transition-all">IN</a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm font-bold hover:bg-[#00E5FF] hover:border-[#00E5FF] hover:text-black transition-all">FB</a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm font-bold hover:bg-[#00E5FF] hover:border-[#00E5FF] hover:text-black transition-all">IG</a>
        </div>
        
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noreferrer"
          className="text-[#34D399] text-xs font-bold tracking-widest uppercase hover:underline"
        >
          Chat on WhatsApp
        </a>
      </div>

    </div>
  );
};

export default ContactInfo;
