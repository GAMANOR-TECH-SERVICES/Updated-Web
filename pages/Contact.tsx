
import React, { useState, useRef,useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import ContactForm from './contact form';
import emailjs from '@emailjs/browser';


const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]= useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY as string;

  // ADD THIS after PUBLIC_KEY declaration:
useEffect(() => {
  emailjs.init(PUBLIC_KEY);
}, []);

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
     console.log('🔥 FORM DATA:', {
      name: e.currentTarget.user_name.value,
      email: e.currentTarget.user_email.value,
      service: e.currentTarget.service.value,
      message: e.currentTarget.message.value
    });

   
    
  
  try {
    const result = await emailjs.sendForm(
      SERVICE_ID, TEMPLATE_ID, formRef.current!
    );
    
    console.log('✅ SENT:', result);
    setSubmitted(true);
  } catch (error) {
    console.log('❌ ERROR:', error);
    alert('Check console');
  }
  setLoading(false);
};

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block border-b-4 border-rose-600 pb-2 mb-6 uppercase">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ready to streamline your tech? Reach out today for a discovery session.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="bg-rose-50 p-3 rounded-lg"><Mail className="w-6 h-6 text-rose-600" /></div>
              <div>
                <h4 className="font-bold text-slate-900">Email</h4>
                <p className="text-slate-600">info@gamanor.com</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="bg-rose-50 p-3 rounded-lg"><Phone className="w-6 h-6 text-rose-600" /></div>
              <div>
                <h4 className="font-bold text-slate-900">Call Us</h4>
                <p className="text-slate-600">+91 (9381987790) GaMaNor</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="bg-rose-50 p-3 rounded-lg"><MapPin className="w-6 h-6 text-rose-600" /></div>
              <div>
                <h4 className="font-bold text-slate-900">HQ</h4>
                <p className="text-slate-600">39 Sapthagiri colony, Bongloor<br />Ibrahimpatnam, 501510</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Message Received!</h2>
                  <p className="text-slate-600">Thank you for reaching out. One of our tech leads will be in touch within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-rose-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref= {formRef}onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2 mb-8">
                    <MessageSquare className="text-rose-600 w-6 h-6" />
                    <h3 className="text-2xl font-bold tracking-tight uppercase">Discovery Session</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Full Name</label>
                      <input 
                        name='user_name'
                        required type="text" 
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Email Address</label>
                      <input 
                        name='user_email'
                        required type="email" 
                        placeholder="john@company.com" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Service of Interest</label>
                    <select 
                    name='service'
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none transition-all bg-white">
                      <option>Custom Tech Building</option>
                      <option>Intelligent Payroll</option>
                      <option>Data Labeling & Annotation</option>
                      <option>Innovation & R&D</option>
                      <option>Managed IT Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Message</label>
                    <textarea 
                      name='message'
                      required
                      rows={5} 
                      placeholder="Tell us about your project requirements..." 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-rose-600 text-white font-bold py-4 rounded-lg hover:bg-rose-700 transition-colors shadow-lg uppercase tracking-widest"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
