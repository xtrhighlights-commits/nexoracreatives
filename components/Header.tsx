
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-opacity-80 backdrop-blur-md glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-primary rounded-lg flex items-center justify-center overflow-hidden w-10 h-10 transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-white text-2xl">rocket_launch</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">Nexora<span className="text-primary">.</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-300 hover:text-white'}`}>Home</Link>
          <Link to="/services" className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-primary' : 'text-slate-300 hover:text-white'}`}>Services</Link>
          <Link to="/portfolio" className={`text-sm font-medium transition-colors ${isActive('/portfolio') ? 'text-primary' : 'text-slate-300 hover:text-white'}`}>Portfolio</Link>
          <Link to="/process" className={`text-sm font-medium transition-colors ${isActive('/process') ? 'text-primary' : 'text-slate-300 hover:text-white'}`}>Process</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-slate-300 hover:text-white'}`}>About</Link>
          <Link to="/blog" className={`text-sm font-medium transition-colors ${isActive('/blog') ? 'text-primary' : 'text-slate-300 hover:text-white'}`}>Insights</Link>
        </div>

        <div>
          <Link 
            to="/contact" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 block"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
