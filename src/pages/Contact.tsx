import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, ChevronDown, CheckCircle2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const faqs = [
    { q: "How long does it take to build a website?", a: "Most business websites take 2–4 weeks from strategy to launch, depending on complexity and content readiness. We'll give you a clear timeline during our initial consultation." },
    { q: "How much does a website cost?", a: "Every project is unique, so pricing depends on scope. We offer solutions for different budgets and always provide transparent quotes with no hidden costs. Contact us for a custom estimate." },
    { q: "Do you work with businesses outside East Africa?", a: "Yes, absolutely! While our core team is based in East Africa (Uganda, Kenya, South Sudan, and Rwanda), we operate globally and welcome projects from businesses anywhere in the world." },
    { q: "Do you offer website maintenance after launch?", a: "Yes. We offer ongoing maintenance and support packages to ensure your website stays updated, secure, and performing at its best." },
    { q: "What makes Genesis different from other web design agencies?", a: "We combine strategy-driven design, conversion-focused copywriting, and SEO-ready architecture in every project. Most agencies do one of these well — we integrate all three from day one." },
    { q: "Can you help with just copywriting or just SEO, without a full website build?", a: "Absolutely. Our services are modular. You can engage us for copywriting only, SEO only, content strategy, or any combination that fits your needs." }
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-6 py-20 border-b border-primary-lighter">
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">Contact Us</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            Let's Build Something That <br className="hidden md:block" />
            <span className="text-gradient-silver">Actually Grows Your Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary-muted text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Whether you need a new website, better copy, improved SEO, or a full digital strategy — we're ready to help. Reach out and let's talk about what growth looks like for your business.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h2 className="text-white mb-4">Send Us a Message</h2>
              <p className="text-secondary-muted leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. Every enquiry starts with a free, no-obligation conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-secondary-muted">Full Name *</label>
                  <input type="text" id="name" required placeholder="Your full name" className="bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-secondary-muted">Email Address *</label>
                  <input type="email" id="email" required placeholder="your@email.com" className="bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-secondary-muted">Phone / WhatsApp</label>
                  <input type="tel" id="phone" placeholder="+256 XXX XXX XXX" className="bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-secondary-muted">Business Name</label>
                  <input type="text" id="company" placeholder="Your company name" className="bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-medium text-secondary-muted">Service Interested In</label>
                <select id="service" className="bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none">
                  <option value="">Select a service...</option>
                  <option value="web">Website Design & Development</option>
                  <option value="copy">Copywriting</option>
                  <option value="seo">Local SEO Optimization</option>
                  <option value="content">Content Strategy</option>
                  <option value="audit">Free Website Audit</option>
                  <option value="other">Not sure — I need advice</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary-muted">Your Message *</label>
                <textarea id="message" required rows={5} placeholder="Tell us about your project, goals, and any challenges you're facing..." className="bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={twMerge(
                  "w-full py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2",
                  isSuccess 
                    ? "bg-success text-primary" 
                    : "bg-gradient-silver text-primary hover:bg-gradient-silver-hover hover:scale-[1.02] hover:shadow-silver-glow",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={20} /> Message Sent!
                  </span>
                ) : (
                  "Send My Message →"
                )}
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-10">
            <h3 className="text-white">Other Ways to Reach Us</h3>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Email Us</h4>
                  <a href="mailto:hello@genesis.agency" className="text-accent hover:text-white transition-colors">hello@genesis.agency</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter flex items-center justify-center shrink-0">
                  <Phone className="text-[#25D366]" size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">WhatsApp Us</h4>
                  <p className="text-secondary-muted mb-1">+256 XXX XXX XXX</p>
                  <a href="https://wa.me/256000000000" className="text-[#25D366] hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
                    Tap to chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Our Locations</h4>
                  <ul className="text-secondary-muted space-y-1">
                    <li>🇺🇬 Kampala, Uganda (HQ)</li>
                    <li>🇰🇪 Nairobi, Kenya</li>
                    <li>🇸🇸 Juba, South Sudan</li>
                    <li>🇷🇼 Kigali, Rwanda</li>
                    <li className="mt-4 pt-4 border-t border-primary-lighter text-accent font-medium flex items-center gap-2">
                      <span className="text-xl">🌍</span> Available for projects worldwide
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter flex items-center justify-center shrink-0">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Response Time</h4>
                  <p className="text-secondary-muted">We respond to all enquiries within 24 hours during business days.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter p-6 rounded-xl mt-4">
              <p className="text-sm text-secondary-muted flex items-center gap-2">
                <span className="text-accent">🔒</span> Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/80 backdrop-blur-md text-primary px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-primary-lighter rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h4 className="font-bold pr-8">{faq.q}</h4>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    className="text-primary-lighter shrink-0"
                  >
                    <div className="w-6 h-6 relative">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-current -translate-y-1/2" />
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-current -translate-x-1/2" />
                    </div>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-primary-lighter leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
