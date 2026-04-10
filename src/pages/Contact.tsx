import React, { useState } from 'react';
import { motion, useInView } from 'motion/react';

const faqs = [
  { q: 'How long does a typical project take?', a: 'Most business websites take 2–4 weeks from strategy to launch. Complex projects or full brand builds may take longer—we\'ll give you a clear timeline during our first conversation.' },
  { q: 'What does a project cost?', a: 'Every engagement is custom. We provide transparent quotes after understanding your needs—no hidden costs, no surprises. Early conversations are always free.' },
  { q: 'Do you work with clients outside East Africa?', a: 'Yes. Our team is distributed across East Africa, but we work globally. Time zone differences are managed with async communication and scheduled syncs.' },
  { q: 'Can we work together on just one service?', a: 'Absolutely. Our services are modular. You can engage us for a single deliverable—copywriting, a landing page, an SEO audit—or a full end-to-end build.' },
  { q: 'What happens after the project launches?', a: 'We offer ongoing support and maintenance packages. We also provide a 30-day post-launch window for minor adjustments at no extra cost.' }
];

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useInView(null, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={ref ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData();
    formData.append('access_key', '3cac6cf1-1616-4503-82b1-5fd07653429c');
    formData.append('subject', `New Enquiry from ${form.name}`);
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    try {
      await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('idle');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="min-h-[70vh] flex items-center px-6 md:px-12 py-24 border-b border-white/10">
        <div className="max-w-5xl">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Contact</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Let's build something that actually grows your business.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
              Tell us what you're working on. We'll tell you what's possible.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#f5f5f7] text-black border-b border-black/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <FadeUp>
                <p className="text-xs uppercase tracking-[0.35em] text-black/40">Get in Touch</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">
                  Send us a message and we'll respond within 24 hours.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="mt-10 space-y-8">
                  {[
                    { label: 'Email', value: 'hello.genesis.agency@gmail.com', href: 'mailto:hello.genesis.agency@gmail.com' },
                    { label: 'WhatsApp', value: '+256 782 876 841', href: 'https://wa.me/256782876841' },
                    { label: 'Locations', value: 'Kampala · Nairobi · Juba · Kigali', sub: 'Available globally' }
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-xs uppercase tracking-[0.35em] text-black/40 mb-2">{item.label}</div>
                      <a href={item.href} className="text-[#0071e3] hover:underline">{item.value}</a>
                      {item.sub && <p className="text-black/40 text-sm mt-1">{item.sub}</p>}
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-[0.35em] text-black/40 block mb-3">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-[#0071e3] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.35em] text-black/40 block mb-3">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-[#0071e3] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.35em] text-black/40 block mb-3">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-[#0071e3] resize-none transition-colors"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                  className={`w-full py-4 rounded-full font-semibold text-sm uppercase tracking-[0.35em] transition-colors ${
                    status === 'success'
                      ? 'bg-black text-white'
                      : 'bg-[#0071e3] text-white hover:bg-[#0071e3]/90'
                  } disabled:opacity-80`}
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent.' : 'Send Message'}
                </motion.button>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">FAQ</p>
            <h2 className="mt-4 text-2xl font-semibold">Common questions.</h2>
          </FadeUp>
          <div className="mt-10 space-y-1">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-white/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-sm font-medium pr-8">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs text-white/40 shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                {openFaq === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm text-white/60 pb-5 leading-relaxed overflow-hidden"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
