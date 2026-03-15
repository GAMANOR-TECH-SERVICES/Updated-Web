import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Custom Tech Building & Engineering",
    description: "We specialize in building bespoke digital products tailored to your operational needs. Whether it is a custom web application, a secure internal tool, or a full-scale software platform, our engineering team ensures high performance, scalability, and security from day one.",
    bullets: ["Full-stack Development", "Enterprise Architecture", "Scalable Cloud Systems"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    title: "Payroll Management",
    description: "Technology should eliminate administrative friction. Our payroll management services utilize automated systems to ensure your team is paid accurately and on time, every time. We handle the technical backend of compliance, reporting, and disbursements.",
    bullets: ["Automated Disbursements", "Global Compliance Engine", "Real-time Tax Reporting"],
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    title: "Data Labeling & Annotation",
    description: "Powering the Next Generation of AI. High-quality AI requires high-quality data. We provide precision data labeling and annotation services—including image, text, and video tagging—to train your machine learning models.",
    bullets: ["Computer Vision Labeling", "NLP & Text Categorization", "Semantic Segmentation"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    title: "Innovation & Strategic R&D",
    description: "Designing What's Next. In a 'tech-first' world, standing still is falling behind. Our Innovation branch works as your external R&D department. We help you identify emerging technologies and implement digital transformation.",
    bullets: ["Emerging Tech Scouting", "Rapid Prototyping", "Digital Transformation Roadmap"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500",
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-[#0B1215]">
      <style>{`
        /* Matching scan line from Home & About */
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

        /* Hero reveal animations — same as Home page */
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
              Our Services
            </span>
          </h1>

          {/* Subtext — revealUp like Home */}
          <p
            className="text-sm sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-2"
            style={{ animation: 'revealUp 1s both 0.2s' }}
          >
            Scalable, enterprise-grade technology solutions designed to handle the complexity of modern business.
          </p>
        </div>
      </section>

      {/* Scan Line */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-[#0B1215] to-[#070b0d]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative mx-1 rounded-xl overflow-hidden border border-[#84C5C9]/20 
              hover:border-[#84C5C9]/40 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(132,197,201,0.25)]"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-xl"
              />

              {/* Glassmorphic Content */}
              <div className="p-4 space-y-3 bg-white/5 backdrop-blur-md">
                <h3 className="text-lg font-bold text-center bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm text-left">{service.description}</p>
                <ul className="space-y-2 text-slate-300 text-sm text-left">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] rounded-full"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scan Line */}
      <div className="relative h-[1px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="scan-line" />
      </div>

      {/* Bottom CTA */}
      <section className="relative bg-gradient-to-r from-[#0B1215] to-[#070b0d] py-20 border-t border-[#84C5C9]/20">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#84C5C9]/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">
            Need a custom solution?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Our architects are ready to discuss your specific technical requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] text-black font-bold px-10 py-4 rounded-sm 
            hover:shadow-[0_0_30px_rgba(132,197,201,0.4)] transition-all uppercase tracking-widest"
          >
            Talk to an Expert
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;