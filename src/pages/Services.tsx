import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Palette, TrendingUp, Diamond, Bot, Settings, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Website Development",
    icon: Laptop,
    description: "Your website is your most important salesperson. It works 24/7, never takes a break, and is often the very first impression a potential customer has of your business. We design and develop websites that don't just look modern, they're strategically built to guide visitors toward taking action.",
    features: [
      "Responsive Design for all devices",
      "Sub-2-second load times",
      "Conversion-focused architecture",
      "SEO-ready structure"
    ]
  },
  {
    id: "02",
    title: "UI / UX Design",
    icon: Palette,
    description: "Beautiful, intuitive interfaces designed with the user in mind. We craft digital experiences that are not only visually stunning but also incredibly easy to navigate, ensuring your customers find exactly what they need without friction.",
    features: [
      "In-depth User Research",
      "Wireframing & Prototyping",
      "Visual Design & Branding Integration",
      "Usability Testing"
    ]
  },
  {
    id: "03",
    title: "Digital Marketing",
    icon: TrendingUp,
    description: "Data-driven marketing strategies that get you found by the right audience. We optimize your campaigns to dominate search results, drive measurable growth, and turn cold traffic into loyal customers.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Strategy",
      "Analytics & Performance Tracking"
    ]
  },
  {
    id: "04",
    title: "Branding",
    icon: Diamond,
    description: "Build a memorable identity that stands out in a crowded market. We develop cohesive brand strategies, visual identities, and messaging that resonate deeply with your target audience and build lasting trust.",
    features: [
      "Brand Identity & Logo Design",
      "Brand Voice & Messaging",
      "Visual Guidelines",
      "Market Positioning"
    ]
  },
  {
    id: "05",
    title: "Automation / AI",
    icon: Bot,
    description: "Streamline your operations with cutting-edge AI and automation. We implement smart tools that save you time, reduce human error, and allow your team to focus on high-value tasks that scale your business.",
    features: [
      "Custom Workflow Automation",
      "AI Chatbots & Customer Support",
      "Data Processing & Syncing",
      "Operational Efficiency Audits"
    ]
  },
  {
    id: "06",
    title: "Business Systems",
    icon: Settings,
    description: "Robust digital infrastructure to support your growth. We set up and integrate the tools, CRMs, and platforms your team needs to operate at peak performance, ensuring your business runs like a well-oiled machine.",
    features: [
      "CRM Setup & Optimization",
      "Third-party Tool Integration",
      "Process Mapping",
      "Scalable Infrastructure Planning"
    ]
  }
];

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

      {/* Services List */}
      <div className="flex flex-col">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon;
          
          return (
            <section 
              key={service.id} 
              className={`py-24 md:py-32 px-6 ${isEven ? 'bg-secondary/80 backdrop-blur-md text-primary' : 'bg-transparent text-white border-y border-primary-lighter'}`}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <div className={`flex flex-col gap-8 ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <span className={isEven ? "text-primary-lighter text-xs font-bold uppercase tracking-[0.15em]" : "text-accent text-xs font-bold uppercase tracking-[0.15em]"}>
                    Service {service.id}
                  </span>
                  <h2>{service.title}</h2>
                  <div className={`${isEven ? 'text-primary-lighter' : 'text-secondary-muted'} text-lg leading-relaxed flex flex-col gap-4`}>
                    <p>{service.description}</p>
                  </div>

                  <div className="flex flex-col gap-4 mt-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className={`${isEven ? 'text-primary-lighter' : 'text-accent'} shrink-0 mt-1`} />
                        <span className={isEven ? 'text-primary-lighter font-medium' : 'text-secondary-muted'}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link 
                      to="/contact" 
                      className={`inline-block px-8 py-4 font-bold rounded-full transition-all duration-300 ${
                        isEven 
                          ? 'bg-primary text-white hover:bg-primary-lighter' 
                          : 'bg-gradient-silver text-primary hover:bg-gradient-silver-hover hover:scale-105 hover:shadow-silver-glow'
                      }`}
                    >
                      Start Your Project &rarr;
                    </Link>
                  </div>
                </div>
                
                <div className={`relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter shadow-2xl flex items-center justify-center p-8 group ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-soft/80" />
                   <Icon 
                     size={160} 
                     strokeWidth={1} 
                     className="text-accent relative z-10 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" 
                   />
                </div>

              </div>
            </section>
          );
        })}
      </div>

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
            <a href="https://wa.me/256782876841" className="px-10 py-5 border border-accent text-white font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 text-lg w-full sm:w-auto">
              Or WhatsApp us directly &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
