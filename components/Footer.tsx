
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl font-bold text-white tracking-tight">Nexora Creatives Agency</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
            Redefining the digital frontier with data-driven creativity and AI-powered marketing solutions. We help ambitious brands tell stories that scale.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon="language" />
            <SocialIcon icon="alternate_email" />
            <SocialIcon icon="public" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Navigation</h4>
          <ul className="space-y-4">
            <FooterLink to="/portfolio">Portfolio</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/process">Process</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="text-slate-400 text-sm">hello@nexora.io</li>
            <li className="text-slate-400 text-sm">Tech City, NY 10001, USA</li>
            <li className="text-slate-400 text-sm">+1 (555) 000-0000</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
        <p>© 2024 Nexora Creatives. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: string }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-primary transition-colors text-white">
    <span className="material-symbols-outlined text-xl">{icon}</span>
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-slate-400 hover:text-primary transition-colors text-sm">
      {children}
    </Link>
  </li>
);

export default Footer;
