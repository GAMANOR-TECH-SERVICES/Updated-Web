// pages/ContactForm.tsx
import React, { useRef, useState, FormEvent } from 'react';
import {Mail} from 'lucide-react';
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

    // 🔥 YOUR 3 KEYS FROM EMAILJS DASHBOARD (emailjs.com)
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID as string;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY as string;
      // Copy from Account → API Keys

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
    <div className="max-w-md mx-auto p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-2xl">
      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        {/* NAME FIELD */}
        <input
          type="text"
          name="user_name"
          placeholder="Full Name *"
          required
          className="w-full p-4 bg-slate-700/80 border border-slate-600 rounded-xl text-white placeholder-slate-400 
                     focus:outline-none focus:ring-4 focus:ring-slate-500/50 focus:border-slate-500 
                     transition-all duration-200"
        />
        
        {/* EMAIL FIELD */}
        <input
          type="email"
          name="user_email"
          placeholder="Email Address *"
          required
          className="w-full p-4 bg-slate-700/80 border border-slate-600 rounded-xl text-white placeholder-slate-400 
                     focus:outline-none focus:ring-4 focus:ring-slate-500/50 focus:border-slate-500 
                     transition-all duration-200"
        />
        
        {/* MESSAGE FIELD */}
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your project *"
          required
          className="w-full p-4 bg-slate-700/80 border border-slate-600 rounded-xl text-white placeholder-slate-400 resize-vertical 
                     focus:outline-none focus:ring-4 focus:ring-slate-500/50 focus:border-slate-500 
                     transition-all duration-200 min-h-[120px]"
        />
        
        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 
                     disabled:from-slate-800 disabled:to-slate-700 text-white py-4 px-8 rounded-xl font-semibold 
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
        
        {/* STATUS MESSAGE */}
        {status && (
          <p className={`text-sm text-center font-medium px-4 py-3 rounded-lg ${
            status.includes('✅') 
              ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
