import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, X, Bot, ChevronRight, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ── CHATBOT ───────────────────────────────────────────────────────────────────
type BotStep = 'greeting' | 'service' | 'budget' | 'timeline' | 'project' | 'done';
interface BotMsg { from: 'bot' | 'user'; text: string; }
interface BotAnswers { service: string; budget: string; timeline: string; project: string; }

const BOT_FLOW: Record<BotStep, { msg: string; options?: string[]; next?: BotStep }> = {
  greeting: {
    msg: "👋 Hi! I'm the Gamanor assistant. What service are you interested in?",
    options: ['Custom Tech Building', 'Intelligent Payroll', 'Data Labeling & AI', 'Innovation & R&D', 'Managed IT Services'],
    next: 'service',
  },
  service: {
    msg: 'Great choice! What is your approximate budget range?',
    options: ['Under ₹1 Lakh', '₹1–5 Lakhs', '₹5–20 Lakhs', '₹20 Lakhs+', 'Not sure yet'],
    next: 'budget',
  },
  budget: {
    msg: 'Got it. When are you looking to start?',
    options: ['Immediately', 'Within 1 month', 'Within 3 months', 'Just exploring'],
    next: 'timeline',
  },
  timeline: {
    msg: 'Perfect. Briefly tell us about your project:',
    next: 'project',
  },
  project: {
    msg: "Thanks! We've noted your details. Our team will reach out within 24 hours. You can also email us at info@gamanor.com 🚀",
    next: 'done',
  },
  done: { msg: '' },
};

const STEP_TO_KEY: Partial<Record<BotStep, keyof BotAnswers>> = {
  greeting: 'service',
  service: 'budget',
  budget: 'timeline',
  timeline: 'project',
};

const ChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [step, setStep] = useState<BotStep>('greeting');
  const [messages, setMessages] = useState<BotMsg[]>([{ from: 'bot', text: BOT_FLOW.greeting.msg }]);
  const [input, setInput] = useState('');
  const [answers, setAnswers] = useState<BotAnswers>({ service: '', budget: '', timeline: '', project: '' });
  const bottomRef = useRef<HTMLDivElement>(null);

  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY as string;
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string;
  const BOT_TEMPLATE = import.meta.env.VITE_BOT_TEMPLATE_ID as string;

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const sendEmail = async (finalAnswers: BotAnswers) => {
    try {
      await emailjs.send(SERVICE_ID, BOT_TEMPLATE, {
        service: finalAnswers.service,
        budget: finalAnswers.budget,
        timeline: finalAnswers.timeline,
        project: finalAnswers.project,
        submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      }, PUBLIC_KEY);
    } catch (err) {
      console.error('Bot email error:', err);
    }
  };

  const advance = (userText: string, currentStep: BotStep) => {
    const nextStep = BOT_FLOW[currentStep].next!;
    const answerKey = STEP_TO_KEY[currentStep];
    const updatedAnswers = answerKey ? { ...answers, [answerKey]: userText } : answers;
    setAnswers(updatedAnswers);
    setMessages(prev => [...prev, { from: 'user', text: userText }, { from: 'bot', text: BOT_FLOW[nextStep].msg }]);
    setStep(nextStep);
    if (nextStep === 'done') sendEmail(updatedAnswers);
  };

  const handleOption = (option: string) => advance(option, step);
  const handleTextSubmit = () => { if (input.trim()) { advance(input.trim(), step); setInput(''); } };
  const reset = () => {
    setStep('greeting');
    setMessages([{ from: 'bot', text: BOT_FLOW.greeting.msg }]);
    setAnswers({ service: '', budget: '', timeline: '', project: '' });
  };

  const currentFlow = BOT_FLOW[step];

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl border border-[#84C5C9]/30 shadow-[0_0_40px_rgba(132,197,201,0.25)] overflow-hidden bg-[#0B1215]"
      style={{ maxHeight: '500px' }}>
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#84C5C9]/15 to-[#D4AF37]/10 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] flex items-center justify-center">
            <Bot className="w-4 h-4 text-black" />
          </div>
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest">Gamanor Bot</p>
            <p className="text-[10px] text-[#84C5C9]">● Online</p>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
      </div>
      <div className="overflow-y-auto p-4 space-y-3 flex-1 bg-[#0B1215]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[82%] px-3 py-2 rounded-xl text-sm leading-relaxed ${msg.from === 'user' ? 'bg-gradient-to-r from-[#84C5C9]/30 to-[#D4AF37]/20 text-white rounded-br-none' : 'bg-white/5 border border-white/10 text-slate-300 rounded-bl-none'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="bg-[#0d1518] border-t border-white/5 p-3 shrink-0">
        {step !== 'done' && currentFlow.options ? (
          <div className="flex flex-col gap-1.5">
            {currentFlow.options.map(opt => (
              <button key={opt} onClick={() => handleOption(opt)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-[#84C5C9]/20 text-slate-300 text-xs font-medium text-left hover:bg-[#84C5C9]/10 hover:border-[#84C5C9]/40 hover:text-white transition-all">
                {opt} <ChevronRight className="w-3 h-3 shrink-0 text-[#84C5C9]" />
              </button>
            ))}
          </div>
        ) : step !== 'done' && !currentFlow.options ? (
          <div className="flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleTextSubmit()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-lg bg-white/[0.04] border border-[#84C5C9]/20 text-white text-xs outline-none focus:border-[#84C5C9] transition-colors placeholder:text-slate-600" />
            <button onClick={handleTextSubmit} className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] text-black">
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button onClick={reset} className="w-full py-2 text-xs font-bold uppercase tracking-widest text-[#84C5C9] border border-[#84C5C9]/30 rounded-lg hover:bg-[#84C5C9]/10 transition-all">
            Start Over
          </button>
        )}
      </div>
    </div>
  );
};

// ── SCHEDULE A CALL MODAL ─────────────────────────────────────────────────────
const ScheduleModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', note: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const PUBLIC_KEY  = import.meta.env.VITE_PUBLIC_KEY as string;
  const SERVICE_ID  = import.meta.env.VITE_SERVICE_ID as string;
  const SCHEDULE_TEMPLATE = import.meta.env.VITE_SCHEDULE_TEMPLATE_ID as string;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, SCHEDULE_TEMPLATE, {
        name:  form.name,
        email: form.email,
        phone: form.phone,
        date:  form.date,
        time:  form.time,
        note:  form.note,
        submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      }, PUBLIC_KEY);
      setSent(true);
    } catch (err) {
      console.error('Schedule email error:', err);
    }
    setLoading(false);
  };

  return (
    /* Backdrop */
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
      <div className="relative w-full max-w-md bg-[#0B1215] rounded-2xl border border-[#84C5C9]/30 shadow-[0_0_60px_rgba(132,197,201,0.2)] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-gradient-to-r from-[#84C5C9]/10 to-[#D4AF37]/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] flex items-center justify-center">
              <Calendar className="w-4 h-4 text-black" />
            </div>
            <h3 className="font-bold text-white uppercase tracking-widest text-sm">Schedule a Call</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#84C5C9]/20 to-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#84C5C9]" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Call Scheduled! 🎉</h4>
              <p className="text-slate-400 text-sm">We'll call you at your preferred time. Check your email for confirmation.</p>
              <button onClick={onClose} className="mt-6 text-[#84C5C9] text-sm font-bold hover:text-[#D4AF37] transition-colors uppercase tracking-widest">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-slate-400 text-sm mb-4">Fill in your details and we'll call you at your convenient time.</p>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Full Name *</label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-[#84C5C9]/20 text-white text-sm outline-none focus:border-[#84C5C9] transition-colors placeholder:text-slate-600" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Email *</label>
                <input name="email" required type="email" value={form.email} onChange={handleChange} placeholder="john@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-[#84C5C9]/20 text-white text-sm outline-none focus:border-[#84C5C9] transition-colors placeholder:text-slate-600" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Phone Number *</label>
                <input name="phone" required type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-[#84C5C9]/20 text-white text-sm outline-none focus:border-[#84C5C9] transition-colors placeholder:text-slate-600" />
              </div>

              {/* Date + Time side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Preferred Date *</label>
                  <input name="date" required type="date" value={form.date} onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-[#84C5C9]/20 text-white text-sm outline-none focus:border-[#84C5C9] transition-colors"
                    style={{ colorScheme: 'dark' }} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Preferred Time *</label>
                  <input name="time" required type="time" value={form.time} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-[#84C5C9]/20 text-white text-sm outline-none focus:border-[#84C5C9] transition-colors"
                    style={{ colorScheme: 'dark' }} />
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Note (Optional)</label>
                <textarea name="note" value={form.note} onChange={handleChange} rows={2}
                  placeholder="What would you like to discuss?"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-[#84C5C9]/20 text-white text-sm outline-none focus:border-[#84C5C9] transition-colors placeholder:text-slate-600 resize-none" />
              </div>

              <button type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] font-bold text-sm uppercase tracking-widest rounded-lg hover:shadow-[0_0_25px_rgba(132,197,201,0.4)] transition-all"
                style={{ color: '#000000' }}>
                {loading ? 'Sending...' : 'Confirm Schedule'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [chatOpen, setChatOpen]   = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const SERVICE_ID  = import.meta.env.VITE_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID as string;
  const PUBLIC_KEY  = import.meta.env.VITE_PUBLIC_KEY as string;

  useEffect(() => { emailjs.init(PUBLIC_KEY); }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!);
      setSubmitted(true);
    } catch (error) {
      console.log('❌ ERROR:', error);
      alert('Check console');
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#0B1215] text-white min-h-screen">
      <style>{`
        @keyframes revealDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatGlow {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(30px, -30px); opacity: 0.5; }
        }
        @keyframes glide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes botPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(132,197,201,0.5); }
          50% { box-shadow: 0 0 0 10px rgba(132,197,201,0); }
        }
        .scan-line {
          position: absolute; top: 0; left: 0;
          height: 1px; width: 100%;
          background: linear-gradient(90deg, #84C5C9, #D4AF37, #84C5C9);
          box-shadow: 0 0 15px #84C5C9, 0 0 25px #D4AF37;
          animation: glide 6s infinite linear;
        }
        .input-field {
          width: 100%; padding: 10px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(132,197,201,0.2);
          border-radius: 8px; color: white; font-size: 14px;
          outline: none; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-field::placeholder { color: rgba(148,163,184,0.5); }
        .input-field:focus { border-color: #84C5C9; box-shadow: 0 0 0 2px rgba(132,197,201,0.15); }
        .input-field option { background: #0B1215; color: white; }
        .bot-fab { animation: botPulse 2.5s infinite; }
      `}</style>

      {/* HERO */}
      <section className="relative flex items-center justify-center px-4 sm:px-6 bg-gradient-to-r from-[#0B1215] to-[#070b0d] overflow-hidden py-16 sm:py-0 sm:min-h-[420px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#84C5C9]/10 blur-[100px] rounded-full animate-[floatGlow_12s_infinite_ease-in-out]" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full animate-[floatGlow_15s_infinite_ease-in-out_reverse]" />
        </div>
        <div className="relative z-10 text-center w-full max-w-3xl mx-auto">
          <h1 className="font-black uppercase leading-tight mb-4"
            style={{ fontSize: 'clamp(1.45rem, 6.5vw, 3.75rem)', letterSpacing: '-0.01em', animation: 'revealDown 0.9s both' }}>
            <span className="text-white">Connect with Us.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84C5C9] to-[#D4AF37]">Forge the Future.</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed px-2"
            style={{ animation: 'revealUp 1s both 0.2s' }}>
            We are committed to building transformative solutions. Let's discuss how we can elevate your vision.
          </p>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-3 pb-10 sm:pb-0"
            style={{ animation: 'revealUp 1s both 0.4s' }}>
            <a href="#contact-form"
              className="w-64 sm:w-auto px-6 py-3 bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] font-bold text-sm uppercase tracking-widest rounded-sm hover:shadow-[0_0_25px_rgba(132,197,201,0.4)] transition-all text-center"
              style={{ color: '#000000' }}>
              Start a Project
            </a>
            <a href="mailto:info@gamanor.com"
              className="w-64 sm:w-auto px-6 py-3 border border-[#84C5C9]/50 text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:border-[#84C5C9] hover:bg-[#84C5C9]/10 transition-all text-center">
              Request Support
            </a>
            {/* Schedule a Call — opens modal */}
            <button
              onClick={() => setScheduleOpen(true)}
              className="w-64 sm:w-auto px-6 py-3 border border-[#D4AF37]/50 text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all text-center">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Scan line */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      {/* MAIN CONTENT */}
      <section id="contact-form" className="px-4 sm:px-6 py-16 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#84C5C9]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-[#84C5C9]/20 p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="bg-gradient-to-r from-[#84C5C9]/20 to-[#D4AF37]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-[#84C5C9]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Message Received!</h2>
                  <p className="text-slate-400">Our team will be in touch within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-[#84C5C9] font-bold hover:text-[#D4AF37] transition-colors">Send another message</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <MessageSquare className="text-[#84C5C9] w-5 h-5" />
                    <h3 className="text-lg font-bold tracking-widest uppercase text-white">Contact Form</h3>
                  </div>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Full Name</label>
                        <input name="user_name" required type="text" placeholder="John Doe" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Email Address</label>
                        <input name="user_email" required type="email" placeholder="john@company.com" className="input-field" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Company</label>
                      <input name="company" type="text" placeholder="Your company name" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Service of Interest</label>
                      <select name="service" className="input-field">
                        <option>Custom Tech Building</option>
                        <option>Intelligent Payroll</option>
                        <option>Data Labeling & Annotation</option>
                        <option>Innovation & R&D</option>
                        <option>Managed IT Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Message</label>
                      <textarea name="message" required rows={5} placeholder="Tell us about your project requirements..." className="input-field resize-none" />
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] text-black font-bold py-3.5 rounded-lg hover:shadow-[0_0_30px_rgba(132,197,201,0.4)] transition-all uppercase tracking-widest text-sm mt-2">
                      {loading ? 'Sending...' : 'Submit'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Reach Us */}
          <div className="lg:col-span-2">
            <div className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-[#84C5C9]/20 p-6 shadow-xl w-full">
              <h3 className="text-base font-bold uppercase tracking-widest text-white mb-5 pb-3 border-b border-white/5">Reach Us</h3>
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-4 h-4 text-[#84C5C9]" />,  label: 'Email',     value: 'info@gamanor.com' },
                  { icon: <Phone className="w-4 h-4 text-[#D4AF37]" />, label: 'Phone',     value: '+91 93819 87790' },
                  { icon: <MapPin className="w-4 h-4 text-[#84C5C9]" />, label: 'Address',  value: '39 Sapthagiri Colony, Bongloor\nIbrahimpatnam, 501510' },
                  { icon: <Clock className="w-4 h-4 text-[#D4AF37]" />,  label: 'Time Zone',value: 'IST / GMT+5:30' },
                  { icon: <Globe className="w-4 h-4 text-[#84C5C9]" />,  label: 'Location', value: 'Hyderabad, India' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-[#84C5C9]/20 to-[#D4AF37]/20 p-2 rounded-lg shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-slate-300 text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setChatOpen(true)}
                className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-[#84C5C9]/20 to-[#84C5C9]/10 border border-[#84C5C9]/30 text-[#84C5C9] text-sm font-bold uppercase tracking-widest hover:bg-[#84C5C9]/20 transition-all">
                <MessageSquare className="w-4 h-4" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scan line bottom */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      {/* Chatbot widget */}
      {chatOpen && <ChatBot onClose={() => setChatOpen(false)} />}

      {/* Floating bot button */}
      {!chatOpen && (
        <button onClick={() => setChatOpen(true)}
          className="bot-fab fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] flex items-center justify-center shadow-[0_0_20px_rgba(132,197,201,0.4)] hover:shadow-[0_0_35px_rgba(132,197,201,0.6)] transition-all">
          <Bot className="w-6 h-6 text-black" />
        </button>
      )}

      {/* Schedule a Call Modal */}
      {scheduleOpen && <ScheduleModal onClose={() => setScheduleOpen(false)} />}
    </div>
  );
};

export default Contact;