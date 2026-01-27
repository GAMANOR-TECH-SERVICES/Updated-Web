
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Cloud, 
  Users, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block border-b-4 border-rose-600 pb-2 mb-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
                Welcome to Gamanor
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-light text-slate-300 leading-snug mb-8">
              Technology is complex. Partnering with us isn't.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              We provide professional, scalable tech services that empower your business to move faster, stay secure, and lead your industry.
            </p>
            <div className="mt-10">
              <Link to="/services" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-4 rounded-full transition-colors uppercase tracking-widest shadow-lg">
                Explore Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Our Capabilities" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1"><ShieldCheck className="w-6 h-6 text-rose-600" /></div>
                  <div>
                    <h3 className="font-bold text-lg">Managed IT Services</h3>
                    <p className="text-slate-600">24/7 monitoring and support to ensure your operations never skip a beat.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><ShieldCheck className="w-6 h-6 text-rose-600" /></div>
                  <div>
                    <h3 className="font-bold text-lg">Cybersecurity & Protection</h3>
                    <p className="text-slate-600">Enterprise-grade security protocols to keep your data safe and your clients' trust intact.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Cloud className="w-6 h-6 text-rose-600" /></div>
                  <div>
                    <h3 className="font-bold text-lg">Cloud Strategy & Migration</h3>
                    <p className="text-slate-600">Seamlessly move your business to the cloud for better collaboration and lower overhead.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Users className="w-6 h-6 text-rose-600" /></div>
                  <div>
                    <h3 className="font-bold text-lg">Strategic Consulting</h3>
                    <p className="text-slate-600">A dedicated tech roadmap designed specifically for your long-term business goals.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block border-b-4 border-rose-600 pb-2 mb-8">
            <h2 className="text-3xl font-extrabold uppercase tracking-widest text-slate-900">Our Expertise</h2>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 uppercase tracking-tight">Future-Ready Solutions for Modern Business</h3>
          <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed mb-12">
            At Gamanor, we provide the technical infrastructure that drives modern industry. From custom engineering to the precision data that powers today's AI, we handle the technical complexity so you can lead your market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Custom Engineering", desc: "Tailored digital products built for scale." },
              { title: "Intelligent Payroll", desc: "Automating administrative friction." },
              { title: "AI Data Labeling", desc: "High-quality data for machine learning." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-rose-600 uppercase tracking-wider mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/services" className="text-rose-600 font-bold uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900 mb-8 border-b-4 border-rose-600 inline-block pb-2">Why Gamanor?</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                In the modern market, your technology shouldn't just work—it should be your competitive advantage. At Gamanor, we bridge the gap between complex infrastructure and your company's growth.
              </p>
              
              <div className="space-y-8">
                <h4 className="text-xl font-bold text-slate-900">Our Values In Action</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-rose-600 flex-shrink-0" />
                    <p className="text-slate-700"><span className="font-bold">Agility:</span> We respond to the fast-changing tech landscape so you don't have to.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-rose-600 flex-shrink-0" />
                    <p className="text-slate-700"><span className="font-bold">Blueprint:</span> Every solution we provide is custom-engineered for your specific needs.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-rose-600 flex-shrink-0" />
                    <p className="text-slate-700"><span className="font-bold">Clarity:</span> We speak your language. No confusing jargon—just transparent, honest results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500&h=600" alt="Tech Strategy" className="rounded-xl shadow-2xl max-w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rose-600 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">Ready to build the future?</h2>
          <p className="text-xl mb-10 text-rose-100">Let's discuss how Gamanor can transform your technical infrastructure.</p>
          <Link to="/contact" className="inline-block bg-white text-rose-600 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors uppercase tracking-widest shadow-lg">
            Work with us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
