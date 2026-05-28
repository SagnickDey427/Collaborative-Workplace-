import React from 'react';

export default function Footer() {
  return (
    // The top border creates a crisp line separating the footer from the rest of the page
    <footer className="relative border-t border-white/40 bg-white/20 backdrop-blur-xl mt-24 pt-16 pb-8 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content - 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-400 text-white font-bold w-8 h-8 flex items-center justify-center rounded-lg">D.</div>
              <span className="font-bold text-xl text-slate-900">DocHub</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              The minimalist collaborative workspace designed for speed, focus, and perfect synchronization.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="border-t border-white/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            {/* The JavaScript Date object automatically updates the year for you! */}
            © {new Date().getFullYear()} DocHub. All rights reserved.
          </p>
          
          {/* Simple Text Links for Socials (You can replace these with SVG icons later) */}
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-teal-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-teal-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Dribbble</a>
          </div>
        </div>

      </div>
    </footer>
  );
}