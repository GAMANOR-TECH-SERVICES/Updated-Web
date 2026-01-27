
import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative">
        <div className="absolute inset-0 dotted-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block border-b-4 border-rose-600 pb-2 mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">About Gamanor</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Founded on the principle that high-end technical engineering should be accessible, Gamanor has grown into a global partner for industry leaders.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="bg-rose-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-rose-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To demystify complex technology and provide the foundational infrastructure that enables companies to scale without limits. We believe that your tech should be your engine, not your anchor.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="bg-rose-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-rose-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the premier architecture partner for the next generation of intelligent enterprises. We aim to redefine how software engineering, data management, and operational logic intersect.
            </p>
          </div>
        </div>
      </section>

      {/* Team / Expertise */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold uppercase mb-4 tracking-tight">Our Global Expertise</h2>
          <div className="w-20 h-1.5 bg-rose-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our team consists of veteran software architects, data scientists, and industry analysts dedicated to your success.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Clients Served', value: '5+' },
            { label: 'Projects Completed', value: '10+' },
            { label: 'Tech Architects', value: '5-10' },
            { label: 'Data Points Labeled', value: '50K+' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-extrabold text-rose-600 mb-2">{stat.value}</div>
              <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold uppercase mb-6 tracking-tight">The Gamanor Advantage</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We operate with a partner-first mentality, embedding ourselves in your workflow to understand the nuances of your industry rather than acting as a traditional outsourcing vendor. 
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="text-rose-600 w-5 h-5" />
                <span className="font-semibold text-slate-800">IOT Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-rose-600 w-5 h-5" />
                <span className="font-semibold text-slate-800">AI-ML Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-rose-600 w-5 h-5" />
                <span className="font-semibold text-slate-800">Data Science Certified</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://picsum.photos/id/1/600/400" alt="Office Collaboration" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
