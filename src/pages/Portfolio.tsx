import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Website Builds', value: '30+' },
  { label: 'Countries Served', value: '4' },
  { label: 'Avg Conversion Lift', value: '3×' }
];

const projects = [
  {
    title: 'Mr Shawarma Turkish Restaurant',
    category: 'Website',
    description: 'Modern hospitality website with interactive menu, fast load times, and mobile-first design that drove a 40% increase in online orders.',
    tags: ['Restaurant', 'UI/UX', 'Performance'],
    link: 'https://mr-shawarma-turkish-restaurant.vercel.app/'
  },
  {
    title: 'Peacock Resort Juba',
    category: 'Website',
    description: 'Luxury resort website built to feel as premium as the property itself. High-res imagery, immersive scroll, and direct booking integration.',
    tags: ['Hospitality', 'Luxury', 'UI/UX'],
    link: 'https://peacock-resort-juba.vercel.app/'
  },
  {
    title: 'Phoenix Restaurant & Bar',
    category: 'Website',
    description: 'Brand-forward restaurant site that increased foot traffic by capturing local search traffic in Kampala.',
    tags: ['Restaurant', 'Local SEO', 'Branding'],
    link: 'https://phoenixrestaurantbar.com/'
  },
  {
    title: "Vicky's Restaurant & Lounge",
    category: 'Website',
    description: 'Nightlife brand experience designed around atmosphere and lifestyle positioning for the Juba market.',
    tags: ['Lounge', 'Branding', 'UI/UX'],
    link: 'https://malualmadut211-bot.github.io/Vicky-s-Restaurant-Lounge/'
  },
  {
    title: 'B2B SaaS Onboarding Flow',
    category: 'UI/UX',
    description: 'End-to-end onboarding redesign that reduced drop-off by 38% through clearer copy and simplified steps.',
    tags: ['SaaS', 'Conversion', 'UX Research'],
    link: null
  },
  {
    title: 'E-commerce Checkout Optimization',
    category: 'UI/UX',
    description: 'Cart abandonment analysis and full checkout redesign for a regional e-commerce brand. 2.4× increase in completed purchases.',
    tags: ['E-commerce', 'Conversion', 'UX'],
    link: null
  },
  {
    title: 'Flowmingo Launch Campaign',
    category: 'Copywriting',
    description: 'Full copywriting suite for the Flowmingo AI recruitment platform launch: landing page, email sequence, and social proof materials.',
    tags: ['AI', 'B2B', 'Email'],
    link: null
  },
  {
    title: 'Content Strategy Framework',
    category: 'Content',
    description: 'Three-month editorial calendar and SEO content strategy for a fintech startup, resulting in 180% organic traffic growth.',
    tags: ['SEO', 'Fintech', 'Strategy'],
    link: null
  }
];

const filters = ['All', 'Website', 'UI/UX', 'Copywriting', 'Content'];

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useState(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="min-h-[70vh] flex items-center px-6 md:px-12 py-24 border-b border-white/10">
        <div className="max-w-5xl">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Work</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Work that speaks precisely and performs consistently.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg text-white/70 max-w-3xl leading-relaxed">
              A selection of projects across website design, UI/UX, copywriting, and content strategy.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-black px-8 py-10"
              >
                <div className="text-4xl md:text-5xl font-semibold">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.35em] text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`text-xs uppercase tracking-[0.35em] shrink-0 pb-1 border-b transition-colors ${
                  activeFilter === filter ? 'border-white text-white' : 'border-transparent text-white/50'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="mt-12 grid gap-10 md:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => project.link && window.open(project.link, '_blank')}
                className={`group border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-300 ${
                  project.link ? 'cursor-pointer' : ''
                }`}
              >
                <div className="aspect-[16/9] bg-[#f5f5f7] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/5 to-transparent" />
                  <div className="text-center">
                    <div className="text-black/20 text-sm uppercase tracking-[0.35em]">{project.category}</div>
                  </div>
                  {project.link ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center"
                    >
                      <motion.span
                        initial={{ y: 8, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="border border-white text-white text-xs uppercase tracking-[0.35em] px-4 py-2 rounded-full flex items-center gap-2"
                      >
                        View Project <ExternalLink size={14} />
                      </motion.span>
                    </motion.div>
                  ) : null}
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.35em] text-white/50">{project.category}</span>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/40 border border-white/10 rounded-full px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <FadeUp>
            <h3 className="text-3xl font-semibold">Have a project in mind?</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              We take on a limited number of projects each quarter. Reach out early to check availability.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-[#0071e3] text-white rounded-full px-8 py-3 font-semibold uppercase tracking-[0.35em] text-sm hover:bg-[#0071e3]/90 transition-colors"
            >
              Start a Project ↗
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
