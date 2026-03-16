import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  { icon: Mail, href: "mailto:hello.genesis.agency@gmail.com" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/genesis-agency-36698a3b7/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMbjQ0xnFTDSCdMc0OKvxuQ%3D%3D" },
  { icon: Instagram, href: "https://www.instagram.com/hello.genesis.agency?igsh=cWZzcXZucHIwb2Nz" },
  { icon: Facebook, href: "https://www.facebook.com/share/1Ag2hwZTsW/" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@hello.gensis.agency?_r=1&_t=ZS-94jfdXfBA2P" }
];

export function Footer() {
  return (
    <footer className="bg-primary relative z-10 overflow-hidden border-t border-primary-lighter pt-20 pb-8">
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
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white hover:scale-110 hover:shadow-silver-glow transition-all duration-300 p-2 rounded-full border border-primary-lighter hover:border-accent"
                >
                  <Icon size={18} />
                </a>
              );
            })}
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
              'Copywriting',
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
            <a href="mailto:hello.genesis.agency@gmail.com" className="text-accent hover:text-white transition-colors">
              hello.genesis.agency@gmail.com
            </a>
            <a href="https://wa.me/256782876841" className="text-secondary-muted hover:text-white transition-colors">
              +256 782 876 841
            </a>
            <p className="text-secondary-muted/80 leading-relaxed mt-2">
              🇺🇬 Uganda · 🇰🇪 Kenya<br />
              🇸🇸 South Sudan · 🇷🇼 Rwanda<br />
              <span className="text-xs mt-2 inline-block text-accent">🌍 Available for projects worldwide</span>
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
