import React, { useState } from 'react';

const faqs = [
  { q: 'How long does a typical project take?', a: 'Most business websites take 2–4 weeks from strategy to launch. Complex projects or full brand builds may take longer—we\'ll give you a clear timeline during our first conversation.' },
  { q: 'What does a project cost?', a: 'Every engagement is custom. We provide transparent quotes after understanding your needs—no hidden costs, no surprises. Early conversations are always free.' },
  { q: 'Do you work with clients outside East Africa?', a: 'Yes. Our team is distributed across East Africa, but we work globally. Time zone differences are managed with async communication and scheduled syncs.' },
  { q: 'Can we work together on just one service?', a: 'Absolutely. Our services are modular. You can engage us for a single deliverable—copywriting, a landing page, an SEO audit—or a full end-to-end build.' },
  { q: 'What happens after the project launches?', a: 'We offer ongoing support and maintenance packages. We also provide a 30-day post-launch window for minor adjustments at no extra cost.' }
];

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
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
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
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Contact</p>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">Let's build something that actually grows your business.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">Tell us what you're working on. We'll tell you what's possible.</p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#f5f5f7] text-black border-b border-black/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">Get in Touch</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">Send us a message and we'll respond within 24 hours.</h2>
              <div className="mt-10 space-y-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-black/40 mb-2">Email</div>
                  <a href="mailto:hello.genesis.agency@gmail.com" className="text-[#0071e3] hover:underline">hello.genesis.agency@gmail.com</a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-black/40 mb-2">WhatsApp</div>
                  <a href="https://wa.me/256782876841" className="text-[#0071e3] hover:underline">+256 782 876 841</a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-black/40 mb-2">Locations</div>
                  <p className="text-black/60">Kampala · Nairobi · Juba · Kigali</p>
                  <p className="text-black/40 text-sm mt-1">Available globally</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-[0.35em] text-black/40 block mb-3">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-[#0071e3]"
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
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-[#0071e3]"
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
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-[#0071e3] resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-4 rounded-full font-semibold text-sm uppercase tracking-[0.35em] transition-colors ${
                  status === 'success'
                    ? 'bg-black text-white'
                    : 'bg-[#0071e3] text-white hover:bg-[#0071e3]/90'
                } disabled:opacity-80`}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent.' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50 text-center">FAQ</p>
          <h2 className="mt-4 text-2xl font-semibold text-center">Common questions.</h2>
          <div className="mt-10 space-y-1">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-white/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-sm font-medium pr-8">{faq.q}</span>
                  <span className={`text-xs text-white/40 shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <p className="text-sm text-white/60 pb-5 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
