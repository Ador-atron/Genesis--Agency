import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ExternalLink, FileText } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const stats = [
  { label: 'Projects Completed', value: '12+' },
  { label: 'Website Builds', value: '6' },
  { label: 'Copywriting Projects', value: '10+' },
  { label: 'SEO Articles', value: '20+' },
];

const categories = ['All', 'Website Projects', 'Copywriting Work', 'SEO Case Studies', 'Content Writing Samples'];

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  content?: string;
};

const portfolioItems: PortfolioItem[] = [
  // Website Projects
  {
    id: 'web-1',
    title: 'Mr Shawarma Turkish Restaurant Website',
    category: 'Website Projects',
    description: 'Modern restaurant website featuring interactive menu sections, responsive design, and customer-focused user experience built to increase online visibility and customer engagement.',
    image: 'https://picsum.photos/seed/shawarma/800/600?blur=2',
    tags: ['Restaurant', 'UI/UX', 'Web Development'],
    link: 'https://mr-shawarma-turkish-restaurant.vercel.app/'
  },
  {
    id: 'web-2',
    title: 'Peacock Resort Juba Website',
    category: 'Website Projects',
    description: 'Hospitality website designed to showcase resort services, accommodations, and bookings while delivering a visually immersive browsing experience.',
    image: 'https://picsum.photos/seed/resort/800/600?blur=2',
    tags: ['Hospitality', 'Resort Website', 'UX Design'],
    link: 'https://peacock-resort-juba.vercel.app/'
  },
  {
    id: 'web-3',
    title: "Vicky's Restaurant & Lounge Website",
    category: 'Website Projects',
    description: 'Restaurant and lounge website focused on nightlife branding, customer engagement, and modern UI presentation.',
    image: 'https://picsum.photos/seed/lounge/800/600?blur=2',
    tags: ['Restaurant', 'Branding', 'UI Design'],
    link: 'https://malualmadut211-bot.github.io/Vicky-s-Restaurant-Lounge/'
  },
  {
    id: 'web-4',
    title: 'Phoenix Restaurant & Bar Website',
    category: 'Website Projects',
    description: 'Professional restaurant and bar website designed to highlight menu offerings, dining atmosphere, and brand identity.',
    image: 'https://picsum.photos/seed/phoenix/800/600?blur=2',
    tags: ['Restaurant', 'Business Website', 'Web Design'],
    link: 'https://phoenixrestaurantbar.com/'
  },
  
  // SEO Case Studies
  {
    id: 'seo-1',
    title: "The Best Version of You Is No Longer a Destination, It's a Starting Point",
    category: 'SEO Case Studies',
    description: 'SEO-optimized long-form article demonstrating keyword structuring, engaging storytelling, and high retention blog formatting.',
    image: 'https://picsum.photos/seed/seo-growth/800/600?blur=2',
    tags: ['SEO', 'Long-form', 'Storytelling'],
    content: 'This SEO case study focuses on structuring long-form content to rank for competitive personal development keywords while maintaining high reader retention through engaging storytelling and optimized formatting.'
  },

  // Content Writing Samples
  {
    id: 'cw-1',
    title: '7 Ways Small Businesses Can Use AI in 2026',
    category: 'Content Writing Samples',
    description: 'Educational listicle demonstrating structured blog writing, SEO formatting, and reader-friendly information delivery.',
    image: 'https://picsum.photos/seed/ai-business/800/600?blur=2',
    tags: ['Listicle', 'B2B', 'Technology'],
    content: 'An educational breakdown of AI tools for small businesses, structured for readability with clear headings, actionable takeaways, and SEO-friendly formatting.'
  },
  {
    id: 'cw-2',
    title: '10 Simple Productivity Habits That Actually Work',
    category: 'Content Writing Samples',
    description: 'Personal development article designed for high engagement and blog readability.',
    image: 'https://picsum.photos/seed/productivity/800/600?blur=2',
    tags: ['Personal Development', 'Blog', 'Engagement'],
    content: 'A highly engaging personal development piece focusing on actionable productivity habits, written with a conversational yet authoritative tone to maximize reader retention.'
  },
  {
    id: 'cw-3',
    title: '5 Mistakes Brands Make With Content Marketing',
    category: 'Content Writing Samples',
    description: 'Marketing insights article highlighting common brand strategy mistakes.',
    image: 'https://picsum.photos/seed/marketing-mistakes/800/600?blur=2',
    tags: ['Marketing', 'B2B', 'Strategy'],
    content: 'An insightful critique of common content marketing pitfalls, designed to position the author as an industry expert and provide immediate value to brand managers.'
  },
  {
    id: 'cw-4',
    title: 'Why Gen Z Chooses Brands Differently',
    category: 'Content Writing Samples',
    description: 'Research-based article analyzing Gen Z consumer behavior and brand engagement patterns.',
    image: 'https://picsum.photos/seed/genz/800/600?blur=2',
    tags: ['Research', 'Consumer Behavior', 'Branding'],
    content: 'A data-informed editorial piece exploring the psychological and social drivers behind Gen Z purchasing decisions, showcasing deep research and analytical writing skills.'
  },

  // Copywriting Work
  {
    id: 'copy-1',
    title: 'Shopify One-Page Strategy',
    category: 'Copywriting Work',
    description: 'Conversion-focused marketing strategy framework covering: audience research, brand voice, content pillars, CTA strategy, funnel structure.',
    image: 'https://picsum.photos/seed/shopify/800/600?blur=2',
    tags: ['E-commerce', 'Strategy', 'Conversion'],
    content: 'A comprehensive one-page strategy document for Shopify brands. It outlines audience personas, establishes a compelling brand voice, defines core content pillars, and maps out a high-converting funnel with strategic CTAs.'
  },
  {
    id: 'copy-2',
    title: 'Email Newsletter Framework',
    category: 'Copywriting Work',
    description: 'Three-email sequence demonstrating storytelling email marketing, value-driven messaging, and CTA-based conversion writing.',
    image: 'https://picsum.photos/seed/email/800/600?blur=2',
    tags: ['Email Marketing', 'Storytelling', 'Sequence'],
    content: 'Email 1: The Hook & Story: Capturing attention and building relatability.\n\nEmail 2: The Value Pivot: Transitioning from story to actionable advice.\n\nEmail 3: The Soft Pitch: Naturally introducing the offer with a strong, clear CTA.'
  },
  {
    id: 'copy-3',
    title: 'Social Media Copy Samples',
    category: 'Copywriting Work',
    description: 'Collection of LinkedIn marketing insights posts designed to drive engagement and brand authority.',
    image: 'https://picsum.photos/seed/social/800/600?blur=2',
    tags: ['LinkedIn', 'Social Media', 'Brand Authority'],
    content: 'A portfolio of high-performing LinkedIn posts utilizing the "hook-story-offer" framework, optimized for the LinkedIn algorithm to maximize reach, spark comments, and build professional authority.'
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden px-6 py-20 border-b border-primary-lighter">
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">Our Work</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            Our Work Speaks <br className="hidden md:block" />
            <span className="text-gradient-silver">Louder Than Our Words</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary-muted text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Real projects. Real businesses. Real results. Browse our portfolio to see how we've helped companies transform their digital presence.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 border-b border-primary-lighter bg-primary-soft/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col gap-2"
              >
                <span className="text-4xl md:text-5xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-secondary-muted uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] md:top-[88px] z-30 bg-primary/80 backdrop-blur-xl border-b border-primary-lighter py-4 px-6 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-4 md:gap-8 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={twMerge(
                'text-sm font-medium uppercase tracking-widest transition-all duration-300 relative pb-2',
                activeCategory === category ? 'text-accent' : 'text-secondary-muted hover:text-white'
              )}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onClick={() => setSelectedProject(item)}
                  className="group relative rounded-2xl overflow-hidden bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter aspect-[4/3] cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md border border-primary-lighter text-accent text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg">
                    {item.category}
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white mb-2 text-xl md:text-2xl font-bold leading-tight">{item.title}</h3>
                    <p className="text-secondary-muted text-sm mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.category === 'Website Projects' ? (
                        <>View Project <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" /></>
                      ) : (
                        <>View Sample <FileText size={16} className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal Preview System */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-primary/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-primary-soft border border-primary-lighter rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl"
            >
              {/* Modal Header Image */}
              <div className="relative h-48 md:h-64 w-full overflow-hidden shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-soft to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-primary/50 hover:bg-primary text-white p-2 rounded-full backdrop-blur-md transition-colors border border-primary-lighter"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-accent/20">
                    {selectedProject.category}
                  </span>
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="bg-primary-lighter/30 text-secondary-muted text-xs font-medium px-3 py-1 rounded-full border border-primary-lighter/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-secondary-muted leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                  
                  {selectedProject.content && (
                    <div className="bg-primary/30 p-6 rounded-xl border border-primary-lighter mb-6">
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <FileText size={18} className="text-accent" /> Preview Content
                      </h4>
                      <p className="text-secondary-muted whitespace-pre-line leading-relaxed">
                        {selectedProject.content}
                      </p>
                    </div>
                  )}
                </div>
                
                {selectedProject.link && (
                  <div className="mt-8 pt-6 border-t border-primary-lighter">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-200 font-bold py-3 px-6 rounded-full transition-colors"
                    >
                      Visit Live Site <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-32 bg-secondary/80 backdrop-blur-md text-primary relative overflow-hidden px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-primary max-w-3xl">Like What You See? Let's Create Something Even Better for Your Business.</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link to="/contact" className="px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary-lighter transition-colors text-lg w-full sm:w-auto">
              Start Your Project &rarr;
            </Link>
            <Link to="/free-audit" className="px-10 py-5 border border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-colors text-lg w-full sm:w-auto">
              Request a Free Audit &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
