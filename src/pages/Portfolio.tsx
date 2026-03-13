import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const categories = ['All', 'Website Projects', 'Copywriting Work', 'SEO Case Studies', 'Content Writing Samples'];

const portfolioItems = [
  {
    id: 1,
    title: 'BuildRight Construction',
    category: 'Website Projects',
    industry: 'Construction',
    description: 'Complete website redesign with a focus on lead generation and portfolio showcase.',
    result: '+180% enquiry increase',
    image: 'https://picsum.photos/seed/construction/800/600?blur=2'
  },
  {
    id: 2,
    title: 'Horizon Real Estate',
    category: 'Website Projects',
    industry: 'Real Estate',
    description: 'Modern property listing website with advanced search and conversion-optimized contact flows.',
    result: '42% more property enquiries',
    image: 'https://picsum.photos/seed/realestate/800/600?blur=2'
  },
  {
    id: 3,
    title: 'Savanna Kitchen',
    category: 'Website Projects',
    industry: 'Restaurant',
    description: 'Visually rich restaurant website with online menu, reservations integration, and brand storytelling.',
    result: '3x online reservation increase',
    image: 'https://picsum.photos/seed/restaurant/800/600?blur=2'
  },
  {
    id: 4,
    title: 'GreenLeaf Clinic',
    category: 'Website Projects',
    industry: 'Healthcare',
    description: 'Patient-centric healthcare website with appointment booking, service listings, and trust-building design.',
    result: '60% increase in online bookings',
    image: 'https://picsum.photos/seed/clinic/800/600?blur=2'
  },
  {
    id: 5,
    title: 'Savanna Kitchen — Brand Messaging',
    category: 'Copywriting Work',
    industry: 'Restaurant',
    description: 'Complete rewrite of website copy including homepage, about page, and menu descriptions using sensory-driven language.',
    result: '2.5x conversion rate improvement',
    image: 'https://picsum.photos/seed/copywriting1/800/600?blur=2'
  },
  {
    id: 6,
    title: 'Horizon Real Estate — Landing Page',
    category: 'Copywriting Work',
    industry: 'Real Estate',
    description: 'Persuasive landing page for a premium property launch, including headline framework, benefit stacking, and urgency-driven CTA.',
    result: '38% landing page conversion rate',
    image: 'https://picsum.photos/seed/copywriting2/800/600?blur=2'
  },
  {
    id: 7,
    title: 'GreenLeaf Clinic — Local SEO Domination',
    category: 'SEO Case Studies',
    industry: 'Healthcare',
    description: 'Full local SEO campaign including Google Business Profile optimization, on-page SEO, keyword targeting, and citation building.',
    result: '#1 Google ranking for 12 keywords in 90 days',
    image: 'https://picsum.photos/seed/seo/800/600?blur=2'
  },
  {
    id: 8,
    title: 'BuildRight Construction — Authority Content',
    category: 'Content Writing Samples',
    industry: 'Construction',
    description: '6-month blog content plan with 24 SEO-optimized articles positioning BuildRight as the go-to construction authority in Kampala.',
    result: '+220% organic traffic increase',
    image: 'https://picsum.photos/seed/content/800/600?blur=2'
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-6 py-20 border-b border-primary-lighter">
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
            Real projects. Real businesses. Real results. Browse our portfolio to see how we've helped companies across East Africa transform their digital presence.
          </motion.p>
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
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md border border-primary-lighter text-accent text-xs font-bold px-3 py-1.5 rounded-full z-10">
                    {item.category}
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs font-medium text-secondary-muted uppercase tracking-widest mb-2">{item.industry}</span>
                    <h3 className="text-white mb-2 text-xl md:text-2xl">{item.title}</h3>
                    <p className="text-accent font-medium text-sm mb-4">{item.result}</p>
                    
                    <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      View Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

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
