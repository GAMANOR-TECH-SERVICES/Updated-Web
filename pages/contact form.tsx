import React, { useRef, useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormElements extends HTMLFormElement {
  user_name: HTMLInputElement;
  user_email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const ContactForm: React.FC = () => {
  const formRef = useRef<FormElements>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus('');

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID as string;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY as string;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('✅ Message sent! Reply coming soon.');
      formRef.current.reset();
    } catch (error) {
      setStatus('❌ Failed. Try again.');
      console.error('EmailJS Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="relative max-w-lg mx-auto p-[2px] rounded-2xl bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] animate-[gradientShift_8s_infinite]">
      {/* Inner glassmorphism container */}
      <div className="bg-[#0B1215]/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* NAME FIELD */}
          <input
            type="text"
            name="user_name"
            placeholder="Full Name *"
            required
            className="w-full p-4 rounded-xl bg-[#0B1215]/60 border border-[#84C5C9]/30 text-white placeholder-slate-400 
                       focus:outline-none focus:ring-2 focus:ring-[#84C5C9] focus:scale-[1.02] transition-all duration-300"
          />

          {/* EMAIL FIELD */}
          <input
            type="email"
            name="user_email"
            placeholder="Email Address *"
            required
            className="w-full p-4 rounded-xl bg-[#0B1215]/60 border border-[#84C5C9]/30 text-white placeholder-slate-400 
                       focus:outline-none focus:ring-2 focus:ring-[#84C5C9] focus:scale-[1.02] transition-all duration-300"
          />

          {/* MESSAGE FIELD */}
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your project *"
            required
            className="w-full p-4 rounded-xl bg-[#0B1215]/60 border border-[#84C5C9]/30 text-white placeholder-slate-400 resize-none 
                       focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:scale-[1.02] transition-all duration-300 min-h-[120px]"
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="relative w-full py-4 px-8 rounded-xl font-bold uppercase tracking-widest text-black 
                       bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] shadow-lg hover:shadow-[0_0_30px_rgba(132,197,201,0.4)] 
                       transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                             -translate-x-full hover:animate-[shimmerLoop_1.5s_infinite]" />
            <span className="relative z-10">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </span>
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p
              className={`text-sm text-center font-medium px-4 py-3 rounded-lg animate-fadeIn ${
                status.includes('✅')
                  ? 'bg-[#84C5C9]/20 text-[#84C5C9] border border-[#84C5C9]/30'
                  : 'bg-red-500/20 text-red-300 border border-red-500/30 animate-shake'
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
