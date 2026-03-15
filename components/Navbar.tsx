import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0B1215]/95 to-[#070b0d]/95 backdrop-blur-md border-b border-[#84C5C9]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 pr-4">
            <img
              src="/gmn1.png"
              alt="GaMaNor Logo"
              className="h-6 w-6 xs:h-7 xs:w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] bg-clip-text text-transparent">
              GaMaNor
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex ml-8 sm:ml-12 space-x-6 sm:space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group relative px-2 sm:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 rounded-md ${
                    isActive
                      ? 'text-[#84C5C9]'
                      : 'text-slate-400 hover:text-[#D4AF37]'
                  }`}
                >
                  <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 border border-transparent bg-gradient-to-r from-[#84C5C9]/40 to-[#D4AF37]/40 shadow-[0_0_12px_rgba(132,197,201,0.4)]" />
                  <span className="relative z-10">{link.name}</span>
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] w-full transform transition-transform duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#84C5C9] to-[#D4AF37] scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-[#84C5C9] to-[#D4AF37]'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Nav */}
          {/* Mobile Nav */}
<div className="md:hidden grid grid-cols-2 gap-2 px-2">
  {navLinks.map((link) => {
    const isActive =
      link.path === '/'
        ? location.pathname === '/'
        : location.pathname.startsWith(link.path);

    return (
      <Link
        key={link.name}
        to={link.path}
        className={`text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wide transition-colors rounded-md px-2 py-1 text-center ${
          isActive
            ? 'text-[#84C5C9] border border-[#84C5C9]/40 shadow-[0_0_6px_rgba(132,197,201,0.4)]'
            : 'text-slate-400 hover:text-[#D4AF37] hover:border hover:border-[#84C5C9]/20'
        }`}
      >
        {link.name}
      </Link>
    );
  })}
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
