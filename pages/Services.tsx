
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative">
        <div className="absolute inset-0 dotted-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block border-b-4 border-rose-600 pb-2 mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">Our Services</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Scalable, enterprise-grade technology solutions designed to handle the complexity of modern business.
          </p>
        </div>
      </section>

      {/* Alternating Services Layout */}
      <section className="py-24 bg-white space-y-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600&h=400" alt="Software Development" className="rounded-lg shadow-xl" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-rose-600 uppercase tracking-tight">Custom Tech Building & Engineering</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                We specialize in building bespoke digital products tailored to your operational needs. Whether it is a custom web application, a secure internal tool, or a full-scale software platform, our engineering team ensures high performance, scalability, and security from day one.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Full-stack Development</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Enterprise Architecture</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Scalable Cloud Systems</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-rose-600 uppercase tracking-tight">Payroll Management</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Technology should eliminate administrative friction. Our payroll management services utilize automated systems to ensure your team is paid accurately and on time, every time. We handle the technical backend of compliance, reporting, and disbursements.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Automated Disbursements</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Global Compliance Engine</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Real-time Tax Reporting</li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=600&h=400" alt="Payroll Management" className="rounded-lg shadow-xl" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400" alt="Data Annotation" className="rounded-lg shadow-xl" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-rose-600 uppercase tracking-tight">Data Labeling & Annotation</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Powering the Next Generation of AI. High-quality AI requires high-quality data. We provide precision data labeling and annotation services—including image, text, and video tagging—to train your machine learning models.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Computer Vision Labeling</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> NLP & Text Categorization</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Semantic Segmentation</li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-rose-600 uppercase tracking-tight">Innovation & Strategic R&D</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Designing What's Next. In a "tech-first" world, standing still is falling behind. Our Innovation branch works as your external R&D department. We help you identify emerging technologies and implement digital transformation.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Emerging Tech Scouting</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Rapid Prototyping</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-600 rounded-full"></span> Digital Transformation Roadmap</li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400" alt="R&D" className="rounded-lg shadow-xl" />
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-widest">Need a custom solution?</h2>
          <p className="text-xl text-slate-600 mb-10">Our architects are ready to discuss your specific technical requirements.</p>
          <Link to="/contact" className="inline-block bg-rose-600 text-white font-bold px-10 py-4 rounded-full hover:bg-rose-700 transition-colors uppercase tracking-widest shadow-lg">
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
