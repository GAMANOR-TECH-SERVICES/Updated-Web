import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    
    <footer className="relative bg-gradient-to-b from-[#0B1215] to-[#070b0d] text-white py-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#84C5C9]/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-[#84C5C9]/20 pb-12">
          
          {/* LEFT: Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] bg-clip-text text-transparent">
              GaMaNor Tech Services
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Professional, scalable tech services that empower your business to move faster, stay secure, and lead your industry.
            </p>
          </div>

          {/* RIGHT: Contact Us */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-2 text-[#84C5C9]">
              Contact Us
            </h4>
            <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
              <a href="mailto:info@gamanor.com" className="flex items-center gap-2 hover:text-[#84C5C9] transition-all hover:underline underline-offset-4">
                <Mail className="w-4 h-4 text-[#84C5C9]" /> info@gamanor.com
              </a>
              <a href="tel:+919381987790" className="flex items-center gap-2 hover:text-[#D4AF37] transition-all hover:underline underline-offset-4">
                <Phone className="w-4 h-4 text-[#D4AF37]" /> +91 9381987790
              </a>
            </div>
            <div className="flex gap-5">
              <a href="#" className="text-slate-400 hover:text-[#84C5C9] transition-all hover:drop-shadow-[0_0_8px_#84C5C9]"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-[#D4AF37] transition-all hover:drop-shadow-[0_0_8px_#D4AF37]"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-[#84C5C9] transition-all hover:drop-shadow-[0_0_8px_#84C5C9]"><Github className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 text-center text-slate-400 text-xs relative">
          {/* Animated divider line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-[#84C5C9] via-[#D4AF37] to-[#84C5C9] animate-pulse" />
          <p>&copy; {new Date().getFullYear()} Gamanor. All rights reserved. Technology is complex. Partnering with us isn't.</p>
          <div className="mt-2 text-[10px] text-slate-500">
            Privacy Policy | Terms | Cookies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
