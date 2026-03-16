import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export function FreeAudit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || '';
    
    formData.append("access_key", "3cac6cf1-1616-4503-82b1-5fd07653429c");
    formData.append("subject", `Free Website Audit Request from ${name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6 py-20 border-b border-primary-lighter">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,192,192,0.15)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            Your Website Might Be Costing You Thousands in Lost Revenue. <br className="hidden md:block" />
            <span className="text-gradient-silver">Let's Find Out For Free.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary-muted text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            In just 48 hours, we'll deliver a comprehensive audit of your website's design, messaging, SEO performance, and conversion potential completely free, with zero obligation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-accent mt-4"
          >
            <span>✦ 100% Free</span>
            <span className="hidden sm:block">·</span>
            <span>✦ No Credit Card</span>
            <span className="hidden sm:block">·</span>
            <span>✦ Results in 48 Hours</span>
            <span className="hidden sm:block">·</span>
            <span>✦ Zero Obligation</span>
          </motion.div>
        </div>
      </section>

      {/* Content & Form Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* What's Included */}
          <div className="flex flex-col gap-12">
            <h2>What Your Free Website Audit Covers</h2>
            
            <div className="flex flex-col gap-8">
              {[
                {
                  title: "Design & User Experience Review",
                  desc: "We evaluate your website's visual design, mobile responsiveness, navigation, and overall user experience against modern standards."
                },
                {
                  title: "SEO Health Check",
                  desc: "We analyze your website's technical SEO, keyword optimization, page speed, meta tags, and Google Search Console data."
                },
                {
                  title: "Messaging & Conversion Analysis",
                  desc: "We review your website's copy, calls-to-action, value proposition clarity, and conversion flow to identify where you're losing potential customers."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">{item.title}</h4>
                    <p className="text-secondary-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter p-8 rounded-2xl mt-8">
              <h4 className="text-white mb-6">Businesses That Started With a Free Audit</h4>
              <div className="flex flex-col gap-6">
                <div className="border-l-2 border-accent pl-4">
                  <p className="text-secondary-muted italic mb-2">"The audit revealed exactly why our traffic wasn't converting. Implementing their suggestions doubled our leads in a month."</p>
                  <span className="text-xs text-white font-bold uppercase tracking-widest">Logistics Co.</span>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <p className="text-secondary-muted italic mb-2">"I thought our site was fine until Genesis showed me how slow it was on mobile. The audit was eye-opening."</p>
                  <span className="text-xs text-white font-bold uppercase tracking-widest">Retail Brand</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="sticky top-32 bg-primary-soft/50 backdrop-blur-sm border border-primary-lighter rounded-2xl p-8 shadow-2xl">
              <h3 className="text-white mb-2">Request Your Audit</h3>
              <p className="text-secondary-muted mb-8">Fill out the details below to get started.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-secondary-muted">Full Name *</label>
                  <input type="text" id="name" name="name" required placeholder="Your full name" className="bg-primary/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-secondary-muted">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="your@email.com" className="bg-primary/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="website" className="text-sm font-medium text-secondary-muted">Website URL *</label>
                  <input type="url" id="website" name="website" required placeholder="https://yourwebsite.com" className="bg-primary/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="challenge" className="text-sm font-medium text-secondary-muted">Biggest Challenge</label>
                  <select id="challenge" name="challenge" className="bg-primary/50 backdrop-blur-sm border border-primary-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none">
                    <option value="">My main challenge is...</option>
                    <option value="no-website">No website yet</option>
                    <option value="outdated">Outdated design</option>
                    <option value="seo">Not found on Google</option>
                    <option value="conversions">Low conversions</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={twMerge(
                    "w-full py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 mt-4",
                    isSuccess 
                      ? "bg-success text-primary" 
                      : "bg-gradient-silver text-primary hover:bg-gradient-silver-hover hover:scale-[1.02] hover:shadow-silver-glow",
                    isSubmitting && "opacity-80 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={20} /> Request Received!
                    </span>
                  ) : (
                    "Get My Free Audit →"
                  )}
                </button>

                <p className="text-xs text-secondary-muted text-center mt-2 flex items-center justify-center gap-1">
                  <span className="text-accent">🔒</span> Your information is 100% secure. We'll only use it to deliver your audit.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
