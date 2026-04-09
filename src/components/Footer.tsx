import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  { icon: Mail, href: "mailto:hello.genesis.agency@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/genesis-agency-36698a3b7/" },
  { icon: Instagram, href: "https://www.instagram.com/hello.genesis.agency" },
  { icon: Facebook, href: "https://www.facebook.com/share/1Ag2hwZTsW/" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@hello.gensis.agency" },
];

const footerLinks = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    'Website Development',
    'UI / UX Design',
    'Digital Marketing',
    'Branding',
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.08]">
      {/* Main footer content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" className="text-2xl font-semibold tracking-tight text-white">
              Genesis<span className="text-[var(--color-accent)]">.</span>
            </Link>
            <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.6)] max-w-sm">
              We build websites that turn visitors into customers. East Africa's premium digital agency serving businesses across Uganda, Kenya, South Sudan, Rwanda, and beyond.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-200 p-1.5 focus-ring rounded"
                    aria-label={social.label}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.4)]">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 focus-ring rounded w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.4)]">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.services.map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 focus-ring rounded w-fit"
                >
                  {service}
                </Link>
              ))}
              <Link
                to="/services"
                className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-link)] transition-colors duration-200 focus-ring rounded w-fit mt-1"
              >
                View all &rarr;
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgba(255,255,255,0.4)]">
            &copy; {new Date().getFullYear()} Genesis Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-xs text-[rgba(255,255,255,0.4)] hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-[rgba(255,255,255,0.4)] hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
