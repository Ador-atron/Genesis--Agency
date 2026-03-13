import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MonitorSmartphone, PenTool, Search, FileText, CheckCircle2 } from 'lucide-react';

export function Services() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6 py-20 border-b border-primary-lighter">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTkyLCAxOTIsIDE5MiwgMC4wNSkiLz4KPC9zdmc+')] opacity-50" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">Our Services</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            Strategic Digital Services <br className="hidden md:block" />
            <span className="text-gradient-silver">That Drive Real Business Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary-muted text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Every service at Genesis is engineered for one outcome: turning your digital presence into your most powerful sales tool. We don't do generic. We do strategic.
          </motion.p>
        </div>
      </section>

      {/* Service 01: Web Design */}
      <section className="py-24 md:py-32 bg-secondary/80 backdrop-blur-md px-6 text-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <span className="text-primary-lighter text-xs font-bold uppercase tracking-[0.15em]">Service 01</span>
            <h2>Website Design & Development That Converts</h2>
            <div className="text-primary-lighter text-lg leading-relaxed flex flex-col gap-4">
              <p>
                Your website is your most important salesperson — it works 24/7, never takes a break, and is often the very first impression a potential customer has of your business. At Genesis, we design and develop websites that don't just look modern — they're strategically built to guide visitors toward taking action.
              </p>
              <p>
                Every website we create is mobile-responsive, lightning-fast, SEO-optimized, and designed around your specific business goals. Whether you need a complete website build or a redesign of your existing site, we deliver a digital experience that reflects the quality of your brand.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {[
                { title: "Responsive Design", desc: "Flawless experience on every device." },
                { title: "Performance Optimized", desc: "Sub-2-second load times." },
                { title: "Conversion Architecture", desc: "Layouts designed to turn visitors into leads." },
                { title: "SEO-Ready Structure", desc: "Built with search engines in mind." }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-bold">
                    <MonitorSmartphone size={20} className="text-primary-lighter" /> {feature.title}
                  </div>
                  <p className="text-sm text-primary-lighter">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-lighter transition-colors text-center">
                Start Your Website Project &rarr;
              </Link>
              <Link to="/portfolio" className="px-8 py-4 border border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-colors text-center">
                See Website Portfolio &rarr;
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter shadow-2xl flex items-center justify-center p-8">
             <div className="w-full h-full border border-primary-lighter rounded-lg bg-primary relative overflow-hidden flex flex-col">
               <div className="h-10 bg-primary-lighter flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500" />
                 <div className="w-3 h-3 rounded-full bg-green-500" />
               </div>
               <div className="flex-1 p-8 flex flex-col gap-4 opacity-50 grayscale">
                  <div className="w-1/2 h-8 bg-primary-lighter rounded" />
                  <div className="w-full h-4 bg-primary-lighter rounded" />
                  <div className="w-3/4 h-4 bg-primary-lighter rounded" />
                  <div className="w-full h-48 bg-primary-lighter rounded mt-8" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Service 02: Copywriting */}
      <section className="py-24 md:py-32 bg-transparent px-6 text-white border-y border-primary-lighter">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter shadow-2xl flex items-center justify-center p-8">
             <div className="w-full max-w-md bg-primary border border-primary-lighter rounded-lg p-8 flex flex-col gap-6 relative">
               <div className="absolute -right-4 -top-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-12">
                 Headline
               </div>
               <div className="w-3/4 h-12 bg-primary-lighter rounded" />
               
               <div className="absolute -left-4 top-24 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg -rotate-6">
                 Subheadline
               </div>
               <div className="w-full h-4 bg-primary-lighter rounded" />
               <div className="w-5/6 h-4 bg-primary-lighter rounded" />
               
               <div className="absolute right-8 bottom-12 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-6">
                 CTA
               </div>
               <div className="w-1/3 h-10 bg-primary-lighter rounded mt-8" />
             </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">Service 02</span>
            <h2>Copywriting That Speaks to Your Customers and Sells for You</h2>
            <div className="text-secondary-muted text-lg leading-relaxed flex flex-col gap-4">
              <p>
                A beautiful website or campaign with weak messaging is like a luxury store with no staff — people walk in, look around, and leave without buying. At Genesis, we write every word with strategic intent, whether it's for your website, blog, or email list.
              </p>
              <p>
                Our copywriting process starts with understanding your customer — what they need, what they fear, and what motivates them to take action. Then we craft messaging that connects emotionally, communicates your value clearly, and guides readers toward your call-to-action with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              {[
                "Website copy that converts cold traffic into warm leads",
                "Engaging blogs and articles that build industry authority",
                "Email campaigns that nurture prospects and drive sales",
                "Service descriptions that clearly communicate your value"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-1" />
                  <span className="text-secondary-muted">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-silver text-primary font-bold rounded-full hover:bg-gradient-silver-hover hover:scale-105 hover:shadow-silver-glow transition-all duration-300">
                Get Copy That Converts &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-transparent relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,192,192,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-white">Not Sure Which Service You Need? <br className="hidden md:block" /><span className="text-gradient-silver">Let's Figure It Out Together.</span></h2>
          <p className="text-secondary-muted text-lg max-w-2xl">
            Book a free 30-minute strategy call. We'll audit your current online presence and recommend the exact services that will deliver the highest ROI for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link to="/contact" className="px-10 py-5 bg-gradient-silver text-primary font-bold rounded-full hover:bg-gradient-silver-hover hover:scale-105 hover:shadow-silver-glow transition-all duration-300 text-lg w-full sm:w-auto">
              Book Your Free Strategy Call &rarr;
            </Link>
            <a href="https://wa.me/256000000000" className="px-10 py-5 border border-accent text-white font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 text-lg w-full sm:w-auto">
              Or WhatsApp us directly &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
