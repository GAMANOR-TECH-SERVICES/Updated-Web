import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-slate-800 pb-8">
          {/* LEFT: GaMaNor - Takes 2 columns to prevent wrapping */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">GaMaNor Tech Services</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              We provide professional, scalable tech services that empower your business to move faster, stay secure, and lead your industry.
            </p>
          </div>
          
          {/* RIGHT: Contact */}
          <div className="md:col-start-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 flex items-center gap-1">
              
              Contact Us
            </h4>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm flex items-center gap-1">
                <Mail className="w-4 h-4" />
                info@gamanor.com
              </p>
              <p className="text-slate-400 text-sm flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +91 9381987790
              </p>
            </div>
          </div>
        </div>
        
        {/* COPYRIGHT - Perfectly centered */}
        <div className="pt-8 pb-8 text-center border-t border-slate-800">
          <p className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Gamanor. All rights reserved. Technology is complex. Partnering with us isn't.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
