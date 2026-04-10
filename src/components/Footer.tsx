import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socialLinks = [
  { icon: Mail, href: "mailto:hello.genesis.agency@gmail.com" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/genesis-agency-36698a3b7/" },
  { icon: Instagram, href: "https://www.instagram.com/hello.genesis.agency" },
  { icon: Facebook, href: "https://www.facebook.com/share/1Ag2hwZTsW/" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@hello.gensis.agency" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#f5f5f7]/10 pt-16 pb-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-[21px] font-semibold tracking-[-0.02em] text-white">
              Genesis<span className="text-[#86868b]">.</span>
            </Link>
            <p className="text-[15px] text-[#86868b] font-light max-w-xs leading-relaxed">
              Your digital growth partner. We build the experiences that move ambitious brands forward.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#86868b]">Agency</span>
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <Link key={item} to={item === 'Work' ? '/portfolio' : `/${item.toLowerCase()}`} className="text-[15px] text-[#86868b] hover:text-white transition-colors duration-200">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#86868b]">Services</span>
              {['Brand Strategy', 'Web Design', 'UI / UX', 'Copywriting', 'SEO', 'Automation'].map((item) => (
                <Link key={item} to="/services" className="text-[15px] text-[#86868b] hover:text-white transition-colors duration-200">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#f5f5f7]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#86868b]">© {new Date().getFullYear()} Genesis Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-[#86868b] hover:text-white transition-colors duration-200 p-2 -m-2">
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
