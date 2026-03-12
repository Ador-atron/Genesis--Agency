import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Dribbble } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary relative overflow-hidden border-t border-primary-lighter pt-20 pb-8">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-3xl font-bold tracking-tight text-white flex items-center gap-1">
            Genesis<span className="text-accent">.</span>
          </Link>
          <p className="text-secondary-muted font-medium text-lg">
            Your Digital Growth Partner Across East Africa.
          </p>
          <p className="text-secondary-muted/80 text-sm leading-relaxed">
            We build websites that convert, write copy that sells, and optimize your presence to dominate search results.
          </p>
          <div className="flex items-center gap-4 mt-2">
            {[Linkedin, Twitter, Instagram, Dribbble].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-accent hover:text-white hover:scale-110 hover:shadow-silver-glow transition-all duration-300 p-2 rounded-full border border-primary-lighter hover:border-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-accent uppercase text-xs tracking-[0.15em] font-semibold">Navigation</h4>
          <nav className="flex flex-col gap-4">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-accent transition-colors duration-300 relative group w-fit"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h4 className="text-accent uppercase text-xs tracking-[0.15em] font-semibold">What We Do</h4>
          <nav className="flex flex-col gap-4">
            {[
              'Website Design & Development',
              'Website Copywriting',
              'Local SEO Optimization',
              'Content Strategy',
            ].map((item) => (
              <Link
                key={item}
                to="/services"
                className="text-secondary-muted hover:text-white transition-colors duration-300 text-sm"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-accent uppercase text-xs tracking-[0.15em] font-semibold">Get In Touch</h4>
          <div className="flex flex-col gap-4 text-sm">
            <a href="mailto:hello@genesis.agency" className="text-accent hover:text-white transition-colors">
              hello@genesis.agency
            </a>
            <a href="https://wa.me/256000000000" className="text-secondary-muted hover:text-white transition-colors">
              +256 XXX XXX XXX
            </a>
            <p className="text-secondary-muted/80 leading-relaxed mt-2">
              🇺🇬 Uganda · 🇰🇪 Kenya<br />
              🇸🇸 South Sudan · 🇷🇼 Rwanda
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-accent text-white rounded-full hover:bg-gradient-silver hover:text-primary transition-all duration-300 font-medium text-sm w-fit"
            >
              Start Your Project &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-primary-lighter flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary-muted/60">
        <p>&copy; {new Date().getFullYear()} Genesis Digital Agency. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
