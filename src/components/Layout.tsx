import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <div className="min-h-screen flex flex-col text-secondary selection:bg-accent selection:text-primary relative">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-primary">
        <motion.video
          style={{ y }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-[125%] object-cover opacity-100"
          src="https://github.com/Ador-atron/Project-Files-/raw/9620b31c9503650f6a6928087661fef7337a4503/background.mp4.mp4"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content wrapper with z-10 */}
      <div className="relative z-10 flex flex-col min-h-screen">
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
      </div>

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
