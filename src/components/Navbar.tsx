import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'nav-glass border-b border-white/[0.08] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-white focus-ring rounded"
          >
            Genesis<span className="text-[var(--color-accent)]">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 focus-ring rounded ${
                    isActive
                      ? 'text-white'
                      : 'text-[rgba(255,255,255,0.72)] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/free-audit"
              className="btn-primary text-sm focus-ring"
            >
              Get Free Audit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 -mr-2 focus-ring rounded"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-20 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-3xl font-semibold tracking-tight ${
                  isActive ? 'text-[var(--color-accent)]' : 'text-white'
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/free-audit"
            className="btn-primary mt-4"
            onClick={() => setIsMobileOpen(false)}
          >
            Get Free Audit
          </Link>
        </div>
      )}
    </>
  );
}
