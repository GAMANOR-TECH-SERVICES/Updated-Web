import React from 'react';
import { Target, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0B1215] to-[#070b0d]">
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

        @keyframes floatGlow {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(30px, -30px); opacity: 0.5; }
        }
        @keyframes revealDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* FIX 1: Matching teal+gold scan line from Home page */
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
      `}</style>

      {/* Header — same motion style as Home hero */}
      <section className="relative min-h-[340px] sm:min-h-[420px] flex items-center justify-center px-4 sm:px-6 bg-gradient-to-r from-[#0B1215] to-[#070b0d] overflow-hidden">
        {/* Floating glow blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#84C5C9]/10 blur-[100px] rounded-full animate-[floatGlow_12s_infinite_ease-in-out]" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full animate-[floatGlow_15s_infinite_ease-in-out_reverse]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Heading — revealDown like Home */}
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-tight mb-4 sm:mb-6"
            style={{ animation: 'revealDown 0.9s both' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84C5C9] to-[#D4AF37]">
              About Gamanor
            </span>
          </h1>

          {/* Subtext — revealUp like Home */}
          <p
            className="text-sm sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-2"
            style={{ animation: 'revealUp 1s both 0.2s' }}
          >
            Founded on the principle that high-end technical engineering should be accessible, Gamanor has grown into a global partner for industry leaders.
          </p>
        </div>
      </section>
      {/* Scan Line — FIX 1: matches Home page exactly */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 items-stretch">
          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-[#84C5C9]/20 shadow-lg hover:shadow-[0_0_25px_rgba(132,197,201,0.3)] transition-all p-4 sm:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }} className="bg-gradient-to-r from-[#84C5C9]/20 to-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-[#84C5C9]" />
              </div>
              <h2 className="text-sm sm:text-xl font-bold uppercase tracking-tight text-white">Our Mission</h2>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-base">
              To demystify complex technology and provide the foundational infrastructure that enables companies to scale without limits.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-[#84C5C9]/20 shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all p-4 sm:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }} className="bg-gradient-to-r from-[#84C5C9]/20 to-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h2 className="text-sm sm:text-xl font-bold uppercase tracking-tight text-white">Our Vision</h2>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-base">
              To be the premier architecture partner for the next generation of intelligent enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Scan Line — FIX 1: matches Home page exactly */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      {/* Advantage Section */}
      <section className="relative py-16 sm:py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Mobile: clean stacked card. Desktop: side-by-side inside bordered container */}
          <div className="rounded-3xl border border-[#84C5C9]/20 shadow-lg hover:shadow-[0_0_40px_rgba(132,197,201,0.3)] transition-all bg-white/5 backdrop-blur-md overflow-hidden">

            <div className="flex flex-col md:flex-row md:items-center">

              {/* LEFT: Heading + desc + mobile image + certs */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col gap-6">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] bg-clip-text text-transparent">
                  The Gamanor Advantage
                </h2>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  We operate with a partner-first mentality, embedding ourselves in your workflow to understand the nuances of your industry.
                </p>

                {/* Image — mobile only, between desc and certs, square aspect */}
                <div className="block md:hidden relative rounded-2xl overflow-hidden group aspect-video">
                  <img
                    src="https://picsum.photos/id/1/800/500"
                    alt="Office Collaboration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1215]/60 to-transparent" />
                </div>

                {/* Certificates */}
                <div className="space-y-3">
                  {['IOT Certified', 'AI-ML Certified', 'Data Science Certified'].map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-lg bg-[#84C5C9]/10 border border-[#84C5C9]/30
                      hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:-translate-y-[2px] transition-all duration-300">
                      <Award className="text-[#84C5C9] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                      <span className="font-semibold text-slate-300 text-sm sm:text-base">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Image — desktop only */}
              <div className="hidden md:flex md:w-1/2 items-center justify-center p-6 md:p-8">
                <div className="relative w-full rounded-2xl overflow-hidden group">
                  <img
                    src="https://picsum.photos/id/1/800/500"
                    alt="Office Collaboration"
                    className="w-full h-[22rem] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1215]/50 to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Glow accents */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#84C5C9]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Scan Line — FIX 1: matches Home page exactly */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

    </div>
  );
};

export default About;