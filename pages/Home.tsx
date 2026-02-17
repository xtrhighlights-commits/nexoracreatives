
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center mt-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Identity that <br/><span className="text-primary italic">Inspires</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Crafting iconic brands that bridge the gap between vision and reality. We design systems that demand attention and deserve loyalty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg purple-glow hover:translate-y-[-2px] transition-all">
              Start Your Rebrand
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-10 py-4 glass border border-white/10 hover:bg-white/5 rounded-lg font-bold transition-all">
              View Showcase
            </Link>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-xl bg-surface border border-white/5 flex flex-col gap-6 relative group overflow-hidden glass">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-8xl text-primary">psychology</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">chat</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Brand Strategy</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                The foundation of your brand. We dive deep into your soul to define what makes you irreplaceable in the market.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Tone of Voice & Personality
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Market Positioning
                </li>
              </ul>
            </div>
          </div>

          <div className="p-10 rounded-xl bg-surface border border-white/5 flex flex-col gap-6 relative group overflow-hidden glass">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-8xl text-primary">draw</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">brush</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Visual Identity</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                The face of your brand. We create cohesive visual systems that translate strategy into breathtaking aesthetics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Logo & Mark Development
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Typography Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Recent Insights</h2>
              <p className="text-slate-400">Thought leadership on the future of digital experience.</p>
            </div>
            <Link to="/blog" className="text-primary font-bold hover:underline mb-2">View all articles</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InsightCard 
              image="https://picsum.photos/seed/insight1/800/500"
              category="AI Marketing"
              title="The Future of AI in Marketing: Redefining Engagement"
              author="Alex Thorne"
            />
            <InsightCard 
              image="https://picsum.photos/seed/insight2/800/500"
              category="Branding"
              title="Designing for the Metaverse: New Brand Dimensions"
              author="Sarah Jenkins"
            />
            <InsightCard 
              image="https://picsum.photos/seed/insight3/800/500"
              category="SEO"
              title="Mastering Local SEO in 2024: A Survival Guide"
              author="Mike Lawson"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const InsightCard = ({ image, category, title, author }: { image: string, category: string, title: string, author: string }) => (
  <Link to="/blog" className="group flex flex-col">
    <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-4 bg-slate-800">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={image}