import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Target, Eye, Shield, ArrowRight } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6 py-20 border-b border-primary-lighter">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping" />
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-700" />
          <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-accent rounded-full animate-bounce delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">About Us</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            We're Not Just Another Agency. <br className="hidden md:block" />
            <span className="text-gradient-silver">We're Your Digital Growth Partner.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary-muted text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Genesis was founded with a simple but powerful belief: every business deserves a digital presence that actually works. Not just looks, but works.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-secondary/80 backdrop-blur-md text-primary px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <span className="text-primary-lighter text-xs font-bold uppercase tracking-[0.15em]">Our Story</span>
            <h2>Born From Frustration With the Status Quo</h2>
            <div className="text-primary-lighter text-lg leading-relaxed flex flex-col gap-6">
              <p>
                Genesis started because we saw the same problem playing out across East Africa: talented businesses with incredible services but terrible online presences. Construction companies with decade-long track records but no website. Restaurants with award-worthy food but invisible on Google. Clinics saving lives but losing patients to competitors with better marketing.
              </p>
              <p>
                We're a small, focused team of professionals who came together with complementary skills in website development, copywriting, SEO management, and content creation. We don't do everything. We do the things that matter most for your online growth, and we do them exceptionally well.
              </p>
              <p>
                Currently operating across Uganda, Kenya, South Sudan, and Rwanda, we've built Genesis as a distributed agency by design. While our roots are in East Africa, our digital expertise knows no borders, and we proudly partner with forward-thinking businesses worldwide.
              </p>
              <p className="font-semibold text-primary">
                Our approach is simple: understand your business deeply, build a strategy based on data and experience, execute with precision, and measure everything. No vanity metrics. No empty promises. Just measurable growth.
              </p>
            </div>
          </div>
          
          <div className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter shadow-2xl">
            <img
              src="https://picsum.photos/seed/teamwork/800/1000?blur=1"
              alt="Team collaboration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 md:py-32 bg-transparent px-6 border-y border-primary-lighter">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "Help businesses across East Africa transform their online presence into a reliable, measurable customer-generating system."
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "Become the most trusted digital growth partner for ambitious businesses in East Africa, known for strategy, execution, and results."
            },
            {
              icon: Shield,
              title: "Our Values",
              desc: (
                <ul className="flex flex-col gap-3">
                  <li><strong className="text-white">Strategy First:</strong> We think before we build.</li>
                  <li><strong className="text-white">Results Obsessed:</strong> If it doesn't generate results, we don't do it.</li>
                  <li><strong className="text-white">Transparent Always:</strong> No jargon, no hidden costs.</li>
                  <li><strong className="text-white">Growth Mindset:</strong> Always learning, always improving.</li>
                </ul>
              )
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter rounded-2xl p-8 hover:border-accent transition-colors duration-300"
            >
              <item.icon className="text-accent mb-6" size={40} strokeWidth={1.5} />
              <h3 className="text-white mb-4">{item.title}</h3>
              <div className="text-secondary-muted leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 md:py-32 bg-secondary/80 backdrop-blur-md text-primary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="text-primary-lighter text-xs font-bold uppercase tracking-[0.15em]">The People Behind Genesis</span>
            <h2>A Small Team. A Big Impact.</h2>
            <p className="text-primary-lighter text-lg max-w-2xl leading-relaxed">
              We're a lean, distributed team of specialists, each an expert in their craft. No account managers, no middlemen. When you work with Genesis, you work directly with the people building your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-transparent px-6 border-t border-primary-lighter">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white max-w-3xl mb-16">Why Businesses Choose Genesis Over Other Agencies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { num: "01", title: "Strategy-Driven Design", desc: "We don't start with Figma. We start with strategy. Every design decision is rooted in your business goals and customer behavior." },
              { num: "02", title: "Conversion-Focused Copywriting", desc: "Your website's words matter as much as its design. We write every headline, description, and CTA to persuade and convert." },
              { num: "03", title: "SEO-Ready From Day One", desc: "We don't 'add SEO later.' Every website we build is architected for search engine visibility from the very first line of code." },
              { num: "04", title: "East Africa Market Expertise", desc: "We're not a foreign agency guessing about your market. We live and work in East Africa. We understand your customers because they're our neighbors." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 border-l border-primary-lighter pl-6 hover:border-accent transition-colors duration-300">
                <div className="text-4xl font-bold text-accent/50 font-mono">{item.num}</div>
                <div>
                  <h4 className="text-white mb-3">{item.title}</h4>
                  <p className="text-secondary-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-transparent relative overflow-hidden px-6 border-t border-primary-lighter">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-white max-w-3xl">Ready to Work With a Team That Actually Cares About Your Results?</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link to="/contact" className="px-10 py-5 bg-gradient-silver text-primary font-bold rounded-full hover:bg-gradient-silver-hover hover:scale-105 hover:shadow-silver-glow transition-all duration-300 text-lg w-full sm:w-auto">
              Let's Start a Conversation &rarr;
            </Link>
            <Link to="/contact" className="px-10 py-5 border border-accent text-white font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 text-lg w-full sm:w-auto">
              Get a Free Website Audit &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
