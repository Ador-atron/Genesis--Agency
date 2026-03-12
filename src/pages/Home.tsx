import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, MonitorSmartphone, PenTool, Search, FileText } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary px-6 py-20">
        {/* Animated Particle Field (Simplified) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping" />
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-700" />
          <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-accent rounded-full animate-bounce delay-1000" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-primary-soft/50 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-accent tracking-wide uppercase">🚀 East Africa's Results-Driven Digital Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            We Build Websites That <br className="hidden md:block" />
            <span className="text-gradient-silver">Turn Visitors Into Customers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-secondary-muted text-lg md:text-xl max-w-[700px] leading-relaxed"
          >
            Genesis combines strategic web design, conversion-focused copywriting, and local SEO to help businesses across Uganda, Kenya, South Sudan, and Rwanda generate more leads online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <Link
              to="/free-audit"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-silver text-primary font-bold rounded-full hover:bg-gradient-silver-hover hover:scale-105 hover:shadow-silver-glow transition-all duration-300 text-lg"
            >
              Get Your Free Website Audit
            </Link>
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-accent text-white font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 text-lg group flex items-center justify-center gap-2"
            >
              View Our Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary-muted/50"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <ChevronDown className="animate-bounce text-accent" size={24} />
        </motion.div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-primary-soft py-8 border-y border-primary-lighter overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-accent text-sm md:text-base font-medium uppercase tracking-widest text-center">
            <span className="flex items-center gap-2">🏢 50+ Business Websites Launched</span>
            <span className="hidden md:block w-px h-6 bg-primary-lighter" />
            <span className="flex items-center gap-2">📈 3x Average Traffic Increase</span>
            <span className="hidden lg:block w-px h-6 bg-primary-lighter" />
            <span className="flex items-center gap-2">🌍 4 Countries Served</span>
            <span className="hidden xl:block w-px h-6 bg-primary-lighter" />
            <span className="flex items-center gap-2">⭐ 100% Client Satisfaction</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-primary to-primary-soft px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">The Problem</span>
            </div>
            
            <h2 className="text-white">Your Online Presence Is Costing You Customers</h2>
            
            <p className="text-secondary-muted text-lg leading-relaxed">
              Most businesses in East Africa are losing potential customers every single day — not because their services are bad, but because their digital presence doesn't do them justice. We see it constantly:
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {[
                {
                  icon: "🚫",
                  title: "No Website — Or an Outdated One",
                  desc: "Your competitors are online. Your customers are searching online. But your business? Invisible. An outdated website is worse than no website — it actively damages trust."
                },
                {
                  icon: "👻",
                  title: "Invisible on Google",
                  desc: "You exist, but Google doesn't know it. Without proper SEO, your business is buried beneath competitors who invested in being found."
                },
                {
                  icon: "📉",
                  title: "Weak Messaging That Doesn't Convert",
                  desc: "Traffic means nothing if your website doesn't persuade. Generic copy and no clear call-to-action means visitors leave without buying."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="bg-primary-lighter/30 border border-primary-lighter p-6 rounded-xl hover:border-accent/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl grayscale">{item.icon}</span>
                    <div>
                      <h4 className="text-white mb-2">{item.title}</h4>
                      <p className="text-secondary-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden border border-primary-lighter bg-primary-soft shadow-2xl group"
          >
            {/* Abstract visual representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-soft to-primary-lighter opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-md bg-primary border border-primary-lighter rounded-lg shadow-2xl overflow-hidden transform group-hover:rotate-0 rotate-2 transition-transform duration-700">
                <div className="h-8 border-b border-primary-lighter bg-primary-soft flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="p-8 flex flex-col gap-4 opacity-50 grayscale">
                  <div className="w-3/4 h-8 bg-primary-lighter rounded animate-pulse" />
                  <div className="w-full h-4 bg-primary-lighter rounded animate-pulse delay-75" />
                  <div className="w-5/6 h-4 bg-primary-lighter rounded animate-pulse delay-150" />
                  <div className="w-full h-32 bg-primary-lighter rounded mt-4 animate-pulse delay-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 bg-secondary px-6 text-primary">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-primary-lighter" />
            <span className="text-primary-lighter text-xs font-bold uppercase tracking-[0.15em]">The Solution</span>
            <div className="w-10 h-px bg-primary-lighter" />
          </div>
          
          <h2 className="max-w-3xl">We Turn Your Digital Presence Into a Growth Engine</h2>
          
          <p className="text-primary-lighter text-lg max-w-3xl leading-relaxed">
            Genesis doesn't just build websites. We build strategic digital systems designed to attract your ideal customers, communicate your value clearly, and convert visitors into paying clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 w-full">
            {[
              { num: "01", title: "Discover", desc: "We audit your current online presence, understand your business goals, and identify exactly what's holding you back." },
              { num: "02", title: "Strategize", desc: "We craft a tailored digital strategy — from website architecture and SEO keywords to messaging frameworks." },
              { num: "03", title: "Build", desc: "Our team designs and develops your website with clean code, persuasive copy, and conversion-optimized layouts." },
              { num: "04", title: "Grow", desc: "We track performance, refine your content, and help you scale your digital presence for long-term growth." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex flex-col items-center text-center gap-4 relative"
              >
                <div className="text-6xl font-black text-primary/5 select-none absolute -top-8 left-1/2 -translate-x-1/2">{step.num}</div>
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4 relative z-10 shadow-xl">
                  {step.num}
                </div>
                <h4 className="font-bold">{step.title}</h4>
                <p className="text-primary-lighter text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-primary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 mb-16">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">What We Do</span>
            <h2 className="text-white max-w-2xl">Digital Services Built to Generate Results</h2>
            <p className="text-secondary-muted text-lg max-w-2xl">
              Every service we offer is designed with one goal in mind: turning your digital presence into a measurable, reliable source of new business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: MonitorSmartphone,
                title: "Website Design & Development",
                desc: "Professional, mobile-responsive websites built for speed, clarity, and conversion. We create digital experiences that make your business look as good online as it performs offline.",
                tags: ["Responsive Design", "Fast Loading", "Custom UI", "CMS Integration"]
              },
              {
                icon: PenTool,
                title: "Copywriting",
                desc: "Words that work. We write persuasive website copy, engaging blogs, informative articles, and compelling email campaigns that guide your audience toward becoming customers.",
                tags: ["Website Copy", "Blogs & Articles", "Email Campaigns", "Brand Voice"]
              },
              {
                icon: Search,
                title: "Local SEO Optimization",
                desc: "Get found by the customers already searching for your services. We optimize your website and Google Business profile to dominate local search results across East Africa.",
                tags: ["Google Business", "On-Page SEO", "Keyword Research", "Local Citations"]
              },
              {
                icon: FileText,
                title: "Content Strategy",
                desc: "Build authority and trust through strategic content. We plan and create educational content that positions your brand as the go-to expert in your industry.",
                tags: ["Content Planning", "Blog Strategy", "Brand Authority", "Educational Content"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-primary-soft border border-primary-lighter rounded-2xl p-8 md:p-10 hover:border-accent hover:shadow-silver-glow hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
              >
                <service.icon className="text-accent mb-6" size={48} strokeWidth={1.5} />
                <h3 className="text-white mb-4">{service.title}</h3>
                <p className="text-secondary-muted mb-8 flex-grow leading-relaxed">{service.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-secondary-muted bg-primary border border-primary-lighter px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link to="/services" className="text-accent font-medium inline-flex items-center gap-2 group-hover:text-white transition-colors mt-auto">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center flex flex-col items-center gap-6">
            <p className="text-white font-medium text-lg">Need a custom solution? Let's talk.</p>
            <Link to="/services" className="px-8 py-4 border border-accent text-white font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300">
              Explore All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-secondary px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTkyLCAxOTIsIDE5MiwgMC4wNSkiLz4KPC9zdmc+')] opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <span className="text-primary-lighter text-xs font-bold uppercase tracking-[0.15em]">Client Voices</span>
            <h2 className="text-primary max-w-3xl">Don't Take Our Word for It — Hear From Businesses We've Helped</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Genesis completely transformed how we appear online. Our new website not only looks incredible — it's actually bringing in new client enquiries every week. We wish we'd found them sooner.",
                name: "James K.",
                title: "Managing Director, BuildRight Construction (Uganda)",
                img: "https://picsum.photos/seed/client1/100/100"
              },
              {
                quote: "The team understood our business better than any other agency we've worked with. The copy they wrote speaks directly to our patients. Our Google visibility has skyrocketed.",
                name: "Dr. Sarah M.",
                title: "Founder, GreenLeaf Clinic (Kenya)",
                img: "https://picsum.photos/seed/client2/100/100"
              },
              {
                quote: "Professional, strategic, and genuinely invested in our results. Genesis delivered a website that positions us as the premium brand we are. The ROI has been exceptional.",
                name: "David O.",
                title: "CEO, Horizon Real Estate (Rwanda)",
                img: "https://picsum.photos/seed/client3/100/100"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white border border-primary-lighter/20 rounded-2xl p-8 shadow-xl flex flex-col"
              >
                <div className="text-6xl font-serif text-accent/30 leading-none mb-4">"</div>
                <p className="text-primary text-lg italic leading-relaxed mb-8 flex-grow">
                  {testimonial.quote}
                </p>
                <div className="w-10 h-px bg-accent mb-6" />
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-accent/20 object-cover" />
                  <div>
                    <h4 className="text-primary font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-primary-lighter text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 md:py-32 bg-primary-soft px-6 border-t border-primary-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">Where We Operate</span>
              <h2 className="text-white">A Distributed Agency Built for East Africa</h2>
              <p className="text-secondary-muted text-lg leading-relaxed">
                With team members and partners across four countries, we understand the East African market intimately. Wherever your business operates, we're close enough to understand your customers.
              </p>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              {[
                { flag: "🇺🇬", country: "Uganda", city: "Kampala" },
                { flag: "🇰🇪", country: "Kenya", city: "Nairobi" },
                { flag: "🇸🇸", country: "South Sudan", city: "Juba" },
                { flag: "🇷🇼", country: "Rwanda", city: "Kigali" }
              ].map((loc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-primary border border-primary-lighter rounded-xl p-6 flex flex-col gap-2 hover:border-accent transition-colors"
                >
                  <span className="text-3xl mb-2">{loc.flag}</span>
                  <h4 className="text-white font-bold">{loc.country}</h4>
                  <p className="text-secondary-muted text-sm">{loc.city}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs text-secondary-muted font-medium">Active</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden px-6 border-t border-primary-lighter">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,192,192,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            Is Your Website Costing You Customers? <br className="hidden md:block" />
            <span className="text-gradient-silver">Find Out in 48 Hours — Free.</span>
          </motion.h2>
          
          <p className="text-secondary-muted text-lg leading-relaxed">
            Get a comprehensive, no-obligation audit of your website's design, messaging, SEO performance, and conversion potential. We'll show you exactly what's working, what's broken, and how to fix it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full mt-4">
            <div className="flex items-center gap-2 text-sm text-white bg-primary-soft px-4 py-2 rounded-full border border-primary-lighter">
              <CheckCircle2 size={16} className="text-success" /> Design & UX
            </div>
            <div className="flex items-center gap-2 text-sm text-white bg-primary-soft px-4 py-2 rounded-full border border-primary-lighter">
              <CheckCircle2 size={16} className="text-success" /> SEO Health
            </div>
            <div className="flex items-center gap-2 text-sm text-white bg-primary-soft px-4 py-2 rounded-full border border-primary-lighter">
              <CheckCircle2 size={16} className="text-success" /> Conversion
            </div>
          </div>

          <Link
            to="/free-audit"
            className="mt-8 px-10 py-5 bg-gradient-silver text-primary font-bold rounded-full hover:bg-gradient-silver-hover hover:scale-105 hover:shadow-silver-glow transition-all duration-300 text-lg w-full sm:w-auto"
          >
            Get My Free Website Audit &rarr;
          </Link>
          
          <p className="text-xs text-secondary-muted/60 uppercase tracking-widest mt-4">
            ✦ No credit card required · Response within 48 hours · 100% free
          </p>
        </div>
      </section>
    </div>
  );
}
