import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col">

      {/* HERO — Full viewport, black, cinematic */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 section-dark">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          {/* Eyebrow */}
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.5)]">
            East Africa's Results-Driven Digital Agency
          </p>

          {/* Headline */}
          <h1 className="text-white">
            We Build Websites That<br />
            <span className="text-[rgba(255,255,255,0.45)]">Turn Visitors Into Customers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-[rgba(255,255,255,0.6)] max-w-xl leading-relaxed">
            Genesis combines strategic web design, conversion-focused copywriting, and local SEO to help businesses across East Africa generate more leads online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link to="/free-audit" className="btn-primary px-8 py-4 text-base">
              Get Your Free Website Audit
            </Link>
            <Link to="/portfolio" className="btn-pill px-8 py-4 text-base group">
              View Our Work
              <ArrowRight size={16} className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.3)]">Scroll</span>
          <div className="w-px h-8 bg-[rgba(255,255,255,0.2)]" />
        </div>
      </section>

      {/* SOCIAL PROOF — Light gray section */}
      <section className="bg-[#f5f5f7] py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-semibold text-[#1d1d1f] tracking-tight">50+</span>
              <span className="text-xs tracking-wide text-[rgba(29,29,31,0.6)] uppercase">Business Websites Launched</span>
            </div>
            <div className="w-px h-10 bg-[rgba(29,29,31,0.15)] hidden md:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-semibold text-[#1d1d1f] tracking-tight">3x</span>
              <span className="text-xs tracking-wide text-[rgba(29,29,31,0.6)] uppercase">Average Traffic Increase</span>
            </div>
            <div className="w-px h-10 bg-[rgba(29,29,31,0.15)] hidden md:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-semibold text-[#1d1d1f] tracking-tight">4</span>
              <span className="text-xs tracking-wide text-[rgba(29,29,31,0.6)] uppercase">Countries Served</span>
            </div>
            <div className="w-px h-10 bg-[rgba(29,29,31,0.15)] hidden lg:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-semibold text-[#1d1d1f] tracking-tight">100%</span>
              <span className="text-xs tracking-wide text-[rgba(29,29,31,0.6)] uppercase">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM — Black section */}
      <section className="section-dark py-32 md:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6">The Problem</p>
            <h2 className="text-white mb-6">
              Your Online Presence Is<br />
              <span className="text-[rgba(255,255,255,0.4)]">Costing You Customers</span>
            </h2>
            <p className="text-base text-[rgba(255,255,255,0.6)] max-w-lg leading-relaxed">
              Most businesses in East Africa lose potential customers every single day — not because their services are bad, but because their digital presence doesn't do them justice.
            </p>
          </div>

          <div className="flex flex-col gap-px">
            {[
              {
                title: "No Website or an Outdated One",
                desc: "Your competitors are online. Your customers are searching online. But your business? Invisible. An outdated website is worse than no website because it actively damages trust."
              },
              {
                title: "Invisible on Google",
                desc: "You exist, but Google doesn't know it. Without proper SEO, your business is buried beneath competitors who invested in being found."
              },
              {
                title: "Weak Messaging That Doesn't Convert",
                desc: "Traffic means nothing if your website doesn't persuade. Generic copy and no clear call-to-action means visitors leave without buying."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="border-t border-white/[0.08] py-8 last:border-b border-white/[0.08]"
              >
                <div className="flex items-start gap-8">
                  <span className="text-xs text-[rgba(255,255,255,0.2)] font-medium mt-1 shrink-0">0{i + 1}</span>
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION — Light gray section */}
      <section className="section-light py-32 md:py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[rgba(29,29,31,0.5)] mb-6">The Solution</p>
          <h2 className="text-[#1d1d1f] mb-6">
            We Turn Your Digital Presence Into<br />
            <span className="text-[rgba(29,29,31,0.4)]">a Growth Engine</span>
          </h2>
          <p className="text-base text-[rgba(29,29,31,0.65)] max-w-2xl mx-auto leading-relaxed mb-20">
            Genesis doesn't just build websites. We build strategic digital systems designed to attract your ideal customers, communicate your value clearly, and convert visitors into paying clients.
          </p>

          {/* Process grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { num: "01", title: "Discover", desc: "We audit your current online presence, understand your business goals, and identify exactly what's holding you back." },
              { num: "02", title: "Strategize", desc: "We craft a tailored digital strategy from website architecture and SEO keywords to messaging frameworks." },
              { num: "03", title: "Build", desc: "Our team designs and develops your website with clean code, persuasive copy, and conversion-optimized layouts." },
              { num: "04", title: "Grow", desc: "We track performance, refine your content, and help you scale your digital presence for long-term growth." },
            ].map((step) => (
              <div key={step.num} className="flex flex-col gap-4">
                <span className="text-5xl font-semibold text-[rgba(29,29,31,0.1)] tracking-tight">{step.num}</span>
                <h4 className="text-[#1d1d1f] font-semibold text-lg">{step.title}</h4>
                <p className="text-sm text-[rgba(29,29,31,0.6)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW — Black section */}
      <section className="section-dark py-32 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 max-w-xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-accent)] mb-6">What We Do</p>
            <h2 className="text-white mb-5">
              Digital Services Built<br />
              <span className="text-[rgba(255,255,255,0.4)]">to Generate Results</span>
            </h2>
            <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">
              Every service we offer is designed with one goal in mind: turning your digital presence into a measurable, reliable source of new business.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08]">
            {[
              {
                title: "Website Development",
                desc: "Professional, fast, and scalable websites built for performance and conversion. We create digital experiences that look as good as they perform.",
                tags: ["Responsive Design", "Fast Loading", "Custom Code", "CMS Integration"]
              },
              {
                title: "UI / UX Design",
                desc: "Beautiful, intuitive interfaces designed with the user in mind. We craft digital experiences that are visually stunning and easy to navigate.",
                tags: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
              },
              {
                title: "Digital Marketing",
                desc: "Data-driven strategies that get you found by the right audience. We optimize your campaigns to dominate search results and drive measurable growth.",
                tags: ["SEO", "Paid Ads", "Social Media", "Analytics"]
              },
              {
                title: "Branding",
                desc: "Build a memorable identity that stands out. We develop cohesive brand strategies, visual identities, and messaging that resonate with your audience.",
                tags: ["Brand Identity", "Logo Design", "Brand Voice", "Guidelines"]
              },
              {
                title: "Automation & AI",
                desc: "Streamline your operations with cutting-edge AI and automation. We implement smart tools that save you time and scale your business effortlessly.",
                tags: ["Workflow Automation", "AI Integration", "Chatbots", "Efficiency"]
              },
              {
                title: "Business Systems",
                desc: "Robust digital infrastructure to support your growth. We set up the tools, CRMs, and platforms your team needs to operate at peak performance.",
                tags: ["CRM Setup", "Tool Integration", "Process Mapping", "Scalability"]
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-black p-10 flex flex-col gap-5 hover:bg-[#0a0a0a] transition-colors duration-300 group"
              >
                <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed flex-grow">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full border border-white/[0.1] text-[rgba(255,255,255,0.4)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="text-xs font-medium tracking-wide uppercase text-[var(--color-accent)] hover:text-[var(--color-accent-link)] transition-colors duration-200 flex items-center gap-2 mt-2 group-hover:gap-3"
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — Light gray section */}
      <section className="section-light py-32 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[rgba(29,29,31,0.5)] mb-6">Client Voices</p>
            <h2 className="text-[#1d1d1f]">
              Hear From Businesses<br />
              <span className="text-[rgba(29,29,31,0.35)]">We've Helped Grow</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Genesis completely transformed how we appear online. Our new website not only looks incredible, it's bringing in new client enquiries every week. We wish we'd found them sooner.",
                name: "James K.",
                title: "Managing Director, BuildRight Construction (Uganda)"
              },
              {
                quote: "The team understood our business better than any other agency we've worked with. The copy they wrote speaks directly to our patients. Our Google visibility has skyrocketed.",
                name: "Dr. Sarah M.",
                title: "Founder, GreenLeaf Clinic (Kenya)"
              },
              {
                quote: "Professional, strategic, and genuinely invested in our results. Genesis delivered a website that positions us as the premium brand we are. The ROI has been exceptional.",
                name: "David O.",
                title: "CEO, Horizon Real Estate (Rwanda)"
              }
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-10 flex flex-col gap-6 rounded-lg"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0 2px 20px 0' }}
              >
                <p className="text-sm text-[rgba(29,29,31,0.7)] leading-relaxed italic flex-grow">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-[rgba(29,29,31,0.1)] pt-6">
                  <h4 className="text-[#1d1d1f] font-semibold text-sm">{t.name}</h4>
                  <p className="text-xs text-[rgba(29,29,31,0.5)] mt-1">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Black section */}
      <section className="section-dark py-32 md:py-40 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-white">
            Is Your Website Costing You Customers?<br />
            <span className="text-[rgba(255,255,255,0.35)]">Find Out in 48 Hours. Free.</span>
          </h2>

          <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed max-w-sm">
            Get a comprehensive, no-obligation audit of your website's design, messaging, SEO performance, and conversion potential.
          </p>

          <Link to="/free-audit" className="btn-primary px-10 py-4 text-base mt-2">
            Get My Free Website Audit &rarr;
          </Link>

          <p className="text-[10px] tracking-[0.15em] uppercase text-[rgba(255,255,255,0.25)]">
            No credit card required &middot; Response within 48 hours &middot; 100% free
          </p>
        </div>
      </section>

    </div>
  );
}
