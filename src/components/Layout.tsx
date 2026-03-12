import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-primary text-secondary selection:bg-accent selection:text-primary">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex-grow pt-[88px]"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/256000000000?text=Hi%20Genesis%2C%20I%27d%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
