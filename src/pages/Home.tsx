import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Float({ children, y = -8, duration = 3 }: { children: React.ReactNode; y?: number; duration?: number }) {
  return (
    <motion.div
      animate={{ y: [0, y, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8 py-32">
          <FadeUp>
            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#86868b]">Genesis Agency — Kampala, Uganda</span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-[56px] leading-[1.07] font-semibold tracking-[-0.028em]">
              We build digital experiences<br />that define brands.
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-[21px] leading-[1.47] text-[#86868b] max-w-xl font-light">
              Strategy, design, and engineering for companies that refuse to be ordinary.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex items-center gap-4 mt-4">
              <Link to="/portfolio" className="px-6 py-[10px] bg-[#0071e3] text-white text-[17px] font-normal rounded-[980px] hover:bg-[#0071e3]/90 transition-colors">
                View Our Work
              </Link>
              <Link to="/contact" className="px-6 py-[10px] text-[#0071e3] text-[17px] font-normal rounded-[980px] border border-[#0071e3]/40 hover:border-[#0071e3] hover:bg-[#0071e3]/5 transition-colors">
                Start a Project →
              </Link>
            </div>
          </FadeUp>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#86868b]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-10 bg-gradient-to-b from-[#86868b] to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-14 border-t border-[#f5f5f7]/10 bg-black">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Website Builds' },
            { value: '4', label: 'Countries' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col gap-2">
                <span className="text-[40px] font-semibold tracking-[-0.02em]">{stat.value}</span>
                <span className="text-[12px] uppercase tracking-[0.2em] text-[#86868b]">{stat.label}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-28 px-6 bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#86868b] block mb-5">What We Do</span>
            <h2 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] mb-16 max-w-2xl">From strategy to launch — every discipline under one roof.</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d2d2d7]">
            {[
              { num: '01', title: 'Brand Strategy', desc: 'Positioning, narrative, and visual identity that commands attention and builds lasting recognition.' },
              { num: '02', title: 'Web Design & Dev', desc: 'High-performance websites engineered for impact. Clean architecture, conversion-focused, built to scale.' },
              { num: '03', title: 'UI / UX Design', desc: 'Intuitive interfaces that reduce friction and make every interaction feel effortless.' },
              { num: '04', title: 'Copywriting', desc: 'Words that sell. Persuasive, clear, and aligned with how your customers actually think.' },
              { num: '05', title: 'SEO & Content', desc: 'Dominate search results with strategy-led content that attracts your ideal customers.' },
              { num: '06', title: 'Automation & AI', desc: 'Streamline operations with intelligent workflows and AI-powered systems.' },
            ].map((service, i) => (
              <FadeUp key={service.num} delay={i * 0.08}>
                <div className="bg-[#f5f5f7] p-10 flex flex-col gap-4 hover:bg-white transition-colors duration-300 group">
                  <Float y={-4} duration={2.5 + i * 0.3}>
                    <span className="text-[48px] font-semibold text-[#d2d2d7] group-hover:text-[#0071e3] transition-colors duration-300">{service.num}</span>
                  </Float>
                  <h3 className="text-[21px] font-semibold tracking-[-0.02em]">{service.title}</h3>
                  <p className="text-[17px] leading-[1.47] text-[#86868b] font-light">{service.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK ─── */}
      <section className="py-28 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#86868b] block mb-5">Selected Work</span>
              <h2 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.02em]">Projects that<br />speak for themselves.</h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline-block text-[17px] text-[#0071e3] hover:underline underline-offset-4">View all →</Link>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Mr Shawarma Turkish Restaurant', category: 'Web Design', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', link: 'https://mr-shawarma-turkish-restaurant.vercel.app/' },
              { title: 'Peacock Resort Juba', category: 'Web Design', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', link: 'https://peacock-resort-juba.vercel.app/' },
              { title: 'Phoenix Restaurant & Bar', category: 'Branding & Web', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', link: 'https://phoenixrestaurantbar.com/' },
              { title: 'Flowmingo — AI Recruitment', category: 'Product Design', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', link: 'https://flowmingo.com' },
            ].map((project, i) => (
              <FadeUp key={project.title} delay={i * 0.1}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block relative aspect-[4/3] overflow-hidden bg-[#1d1d1f]">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#86868b]">{project.category}</span>
                    <h3 className="text-[21px] font-semibold mt-1">{project.title}</h3>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-10 md:hidden">
            <Link to="/portfolio" className="text-[17px] text-[#0071e3] hover:underline underline-offset-4">View all projects →</Link>
          </FadeUp>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="py-28 px-6 bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#86868b] block mb-5">Our Approach</span>
            <h2 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] mb-16 max-w-xl">No bloat. No buzzwords. Just work that moves the needle.</h2>
          </FadeUp>

          <div className="flex flex-col gap-0">
            {[
              { num: '01', title: 'Discover', desc: 'We spend time understanding your business, market, and customers before a single pixel is designed.' },
              { num: '02', title: 'Strategy', desc: 'We map the shortest path from your current position to measurable growth outcomes.' },
              { num: '03', title: 'Build', desc: 'Design and development executed with precision. No shortcuts, no template shortcuts.' },
              { num: '04', title: 'Launch & Scale', desc: 'We ship, measure, and iterate. Your growth is our north star.' },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div className="flex items-start gap-10 py-10 border-t border-[#d2d2d7] group hover:border-[#0071e3] transition-colors duration-300">
                  <span className="text-[14px] text-[#86868b] font-medium w-8 pt-1 shrink-0">{step.num}</span>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-semibold tracking-[-0.02em] mb-3 group-hover:text-[#0071e3] transition-colors duration-300">{step.title}</h3>
                    <p className="text-[17px] leading-[1.47] text-[#86868b] font-light max-w-lg">{step.desc}</p>
                  </div>
                  <motion.div
                    className="w-6 h-6 rounded-full border border-[#d2d2d7] flex items-center justify-center shrink-0 mt-2 group-hover:border-[#0071e3] group-hover:bg-[#0071e3] transition-all duration-300"
                    whileHover={{ rotate: 90 }}
                  >
                    <ArrowRight size={12} className="text-[#86868b] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </div>
              </FadeUp>
            ))}
            <div className="h-px bg-[#d2d2d7]" />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <FadeUp>
          <h2 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">Ready to build something remarkable?</h2>
          <p className="text-[21px] text-[#86868b] font-light mb-12">Let's talk about your next project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-[#0071e3] text-white text-[17px] font-normal rounded-[980px] hover:bg-[#0071e3]/90 transition-colors">
              Start a Project →
            </Link>
            <Link to="/free-audit" className="px-8 py-4 text-[#86868b] text-[17px] font-normal rounded-[980px] border border-[#424245] hover:border-[#86868b] hover:text-white transition-colors">
              Free Website Audit
            </Link>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}
