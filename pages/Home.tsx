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
    <div className="bg-[#0B1215] min-h-screen text-white font-sans overflow-hidden">
      {/* --- BUILT-IN ANIMATION ENGINE --- */}
      <style>{`
        @keyframes revealDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          0% { width: 0; opacity: 0; }
          100% { width: 120px; opacity: 1; }
        }
        @keyframes floatGlow {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(30px, -30px); opacity: 0.5; }
        }
          
        .shimmer-effect {
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: transform 0.6s ease;
        }
        .btn-group:hover .shimmer-effect {
          transform: translateX(100%);
        }

        /* FIX 1: Teal+Gold gradient scan line */
        @keyframes glide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, #84C5C9, #D4AF37, #84C5C9);
          box-shadow: 0 0 15px #84C5C9, 0 0 25px #D4AF37;
          animation: glide 6s infinite linear;
        }

        /* FIX 2 & 4: Card come-forward effect on hover */
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerLoop {
          100% { transform: translateX(100%); }
        }

        .expertise-grid {
          perspective: 400px;
          perspective-origin: 50% 50%;
          overflow: visible;
        }
        .expertise-card {
          animation-fill-mode: both;
          transition: transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.45s ease;
          transform-style: preserve-3d;
          will-change: transform;
          backface-visibility: hidden;
        }
        .expertise-card:hover {
          transform: translateZ(90px) translateY(-8px);
          box-shadow: 0 24px 60px rgba(132, 197, 201, 0.35), 0 8px 30px rgba(212, 175, 55, 0.2);
          z-index: 50;
        }
      `}</style>

      <section className="relative min-h-[500px] sm:min-h-screen flex items-center justify-center px-2 sm:px-6">
        {/* --- DYNAMIC MOVEMENT BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-[#84C5C9]/10 blur-[100px] rounded-full animate-[floatGlow_12s_infinite_ease-in-out]" />
          <div className="absolute bottom-1/4 right-1/4 w-[220px] sm:w-[380px] md:w-[450px] h-[220px] sm:h-[380px] md:h-[450px] bg-[#D4AF37]/5 blur-[100px] rounded-full animate-[floatGlow_15s_infinite_ease-in-out_reverse]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-tight mb-4 sm:mb-6 animate-[revealDown_0.9s_both]">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84C5C9] to-[#D4AF37]">GAMANOR</span>
          </h1>

          {/* Tagline */}
          <p
            className="font-light mb-4 sm:mb-6 px-3 sm:px-4 animate-[revealUp_1s_both] text-transparent bg-clip-text bg-gradient-to-r from-[#84C5C9] to-[#D4AF37]"
            style={{ fontSize: 'clamp(0.8rem, 3.5vw, 2.25rem)' }}
          >
            Technology is complex. Partnering with us isn't.
          </p>

          {/* Description */}
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed opacity-80 mb-6 sm:mb-10 px-2 sm:px-4 animate-[revealUp_1s_both]">
            We provide professional, scalable tech services that empower your business to move faster, stay secure, and lead your industry.
          </p>

          {/* Button */}
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2 sm:px-10 sm:py-4 md:px-14 md:py-5 text-[10px] xs:text-xs sm:text-sm md:text-base bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] text-black font-bold rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,197,201,0.4)] hover:-translate-y-1 uppercase tracking-widest"
          >
            <span>Explore Services</span>
            <ArrowRight
              className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 align-middle transition-transform group-hover:translate-x-2"
            />
          </Link>

        </div>
      </section>

      {/* --- THE SCAN LINE DIFFERENTIATOR (FIX 1: teal+gold gradient motion line) --- */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      <section className="py-12 bg-[#0B1215]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stack on mobile, side-by-side on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Image first */}
            <div className="relative group order-1 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400"
                alt="Our Capabilities"
                className="rounded-2xl shadow-2xl w-full h-56 sm:h-72 md:h-96 lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#84C5C9]/20 to-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
            </div>

            {/* Timeline after image */}
            <div className="relative flex flex-col justify-start space-y-6 sm:space-y-8 order-2 lg:order-2">
              {/* Vertical timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#84C5C9] to-[#D4AF37]" />

              {[
                {
                  icon: <ShieldCheck className="w-5 h-5 text-[#84C5C9]" />,
                  title: "Managed IT Services",
                  desc: "24/7 monitoring and support to ensure your operations never skip a beat."
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-[#84C5C9]" />,
                  title: "Cybersecurity & Protection",
                  desc: "Enterprise-grade security protocols to keep your data safe and your clients' trust intact."
                },
                {
                  icon: <Cloud className="w-5 h-5 text-[#84C5C9]" />,
                  title: "Cloud Strategy & Migration",
                  desc: "Seamlessly move your business to the cloud for better collaboration and lower overhead."
                },
                {
                  icon: <Users className="w-5 h-5 text-[#84C5C9]" />,
                  title: "Strategic Consulting",
                  desc: "A dedicated tech roadmap designed specifically for your long-term business goals."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative flex items-start gap-4 sm:gap-6 group cursor-pointer transition-all duration-500 hover:translate-x-2"
                >
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0B1215] border-2 border-[#84C5C9]/40 group-hover:border-[#D4AF37] transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#84C5C9] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 group-hover:text-white transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SCAN LINE DIFFERENTIATOR --- */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      {/* Services Teaser Section */}
      <section className="bg-[#0B1215] py-24 border-y border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#84C5C9]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block border-b-4 border-[#D4AF37] pb-2 mb-8">
            <h2 className="text-3xl font-extrabold uppercase tracking-[0.3em] text-white">Our Expertise</h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tight">
            Future-Ready Solutions for Modern Business
          </h3>
          <p className="max-w-3xl mx-auto text-slate-400 leading-relaxed mb-16 opacity-90">
            At Gamanor, we provide the technical infrastructure that drives modern industry. From custom engineering to the precision data that powers today's AI, we handle the technical complexity so you can lead your market.
          </p>

          {/* FIX 2 & 4: Cards come forward (translateZ) on hover — nothing else changes */}
          <div
            className="expertise-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            style={{ paddingTop: "16px", paddingBottom: "24px" }}
          >
            {[
              { title: "Custom Engineering", desc: "Tailored digital products built for scale." },
              { title: "Intelligent Payroll", desc: "Automating administrative friction." },
              { title: "AI Data Labeling", desc: "High-quality data for machine learning." }
            ].map((item, i) => (
              <div
                key={i}
                className="expertise-card group relative p-[1px] rounded-2xl bg-white/5 
                  hover:bg-gradient-to-br hover:from-[#84C5C9] hover:to-[#D4AF37]"
                style={{
                  animation: `cardReveal 0.8s ease-out ${i * 0.2}s both`,
                }}
              >
                <div className="relative h-full bg-[#0B1215] p-10 rounded-[15px] z-10 flex flex-col items-center text-center">
                  <div className="absolute top-6 right-6 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84C5C9] opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-800 group-hover:bg-[#84C5C9] transition-colors"></span>
                  </div>

                  {/* Accent Line */}
                  <div className="w-10 h-[2px] bg-[#D4AF37] mb-8 transition-all duration-500 ease-in-out group-hover:w-24 group-hover:bg-[#84C5C9] shadow-[0_0_10px_rgba(212,175,55,0.3)]" />

                  <h4 className="font-bold text-white text-lg uppercase tracking-widest mb-4 transition-colors duration-300 group-hover:text-[#84C5C9]">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW ALL SERVICES BUTTON */}
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] text-black font-bold rounded-sm hover:shadow-[0_0_30px_rgba(132,197,201,0.4)] transition-all uppercase tracking-widest"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0 align-middle transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      {/* --- THE SCAN LINE DIFFERENTIATOR --- */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      {/* --- Why Section --- */}
      <section className="relative bg-[#0B1215] py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT: Heading + Content + Cards */}
            {/* FIX 3: On mobile, image comes FIRST (order-2 on mobile → pushed after heading but before cards)
                We split into 3 sections for mobile reordering */}
            <div className="lg:col-span-7 space-y-8 order-1 lg:order-1">
              <div className="inline-block border-b-2 border-[#D4AF37] pb-1">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                  Why <span className="text-[#84C5C9]">Gamanor?</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-light max-w-xl">
                In the modern market, your technology shouldn't just work—it should be your
                <span className="text-white font-medium italic"> competitive advantage.</span>
                At Gamanor, we bridge the gap between complex infrastructure and your growth.
              </p>

              {/* FIX 3: Image shows here ONLY on mobile (hidden on lg+) */}
              <div className="block lg:hidden relative group">
                <div className="absolute -inset-2 border border-white/5 rounded-2xl group-hover:border-[#84C5C9]/20 transition-colors duration-1000" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                    alt="Strategy"
                    className="w-full h-56 sm:h-72 object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Value Cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Agility", text: "We respond to the fast-changing tech landscape so you don't have to.", color: "#84C5C9" },
                  { label: "Blueprint", text: "Every solution we provide is custom-engineered for your specific needs.", color: "#84C5C9" },
                  { label: "Clarity", text: "We speak your language. No confusing jargon—just transparent results.", color: "#84C5C9" }
                ].map((val, i) => (
                  <div
                    key={i}
                    className="group relative p-5 bg-white/[0.02] border border-white/5 rounded-lg transition-all duration-500 hover:bg-white/[0.05] hover:border-[#84C5C9]/30 hover:translate-x-2"
                  >
                    <div className="flex items-center gap-5">
                      {/* Dot */}
                      <div className="h-2 w-2 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_12px_currentColor] bg-[#84C5C9] group-hover:bg-[#D4AF37]"/>
                      <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-[#84C5C9] transition-colors duration-300 group-hover:text-[#D4AF37]">{val.label}</h4>
                        <p className="text-sm sm:text-base text-slate-400 leading-snug group-hover:text-slate-200 transition-colors">
                          {val.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Image — hidden on mobile (shown inline above), visible on lg+ */}
            <div className="lg:col-span-5 relative group order-2 lg:order-2 hidden lg:block">
              <div className="absolute -inset-2 border border-white/5 rounded-2xl group-hover:border-[#84C5C9]/20 transition-colors duration-1000" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                  alt="Strategy"
                  className="w-full h-56 sm:h-72 md:h-96 lg:h-[500px] object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SCAN LINE DIFFERENTIATOR --- */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      {/* --- CTA SECTION: THE FINAL IMPACT --- */}
      <section className="relative py-24 bg-gradient-to-b from-[#0B1215] to-[#070b0d] overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
            Ready to build <span className="text-[#84C5C9]">the future?</span>
          </h2>
          <p className="text-lg text-slate-400 mb-12 font-light">
            Let's discuss how Gamanor can transform your technical infrastructure.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] text-black font-bold px-12 py-5 rounded-sm hover:shadow-[0_0_30px_rgba(132,197,201,0.4)] transition-all uppercase tracking-widest text-sm"
          >
            Work with us
            <ArrowRight className="w-5 h-5 flex-shrink-0 align-middle transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        {/* Subtle Background Mark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none">
          GAMANOR
        </div>
      </section>

      {/* --- THE SCAN LINE DIFFERENTIATOR --- */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>
    </div>
  );
};

export default Home;