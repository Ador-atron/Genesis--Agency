import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Strategy & Positioning',
    description: 'We audit your current presence, define the narrative that makes you feel premium, and map a digital playbook that keeps every touchpoint aligned.',
    bullets: ['Brand clarity workshops', 'Customer research', 'Messaging frameworks']
  },
  {
    title: 'Digital Product Design',
    description: 'Minimal, elegant, and purposeful interfaces inspired by the world\'s finest brands. Every layout is optimized for clarity, motion, and performance.',
    bullets: ['Pixel-perfect UI', 'Design systems', 'Prototype testing']
  },
  {
    title: 'Web Development',
    description: 'Lightweight, lightning-fast builds with clean code, production-ready SEO, and a developer experience that keeps updates easy.',
    bullets: ['Performance-first builds', 'Headless CMS', 'Vercel-ready deployments']
  },
  {
    title: 'Copy & Narrative',
    description: 'Copy that reads like a luxury magazine spread—precise, confident, and tuned to convert visitors into clients.',
    bullets: ['Conversion copywriting', 'Long-form thought leadership', 'Microcopy systems']
  },
  {
    title: 'SEO & Growth',
    description: 'We engineer the infrastructure that keeps you visible. Technical SEO, content strategy, and growth experiments are built into every project.',
    bullets: ['Keyword architecture', 'Technical audits', 'Performance reporting']
  },
  {
    title: 'Systems & Automation',
    description: 'Zapier, AI, and smart automation strip away the busywork so you can focus on high-leverage growth.',
    bullets: ['Workflow automation', 'AI playbooks', 'Operational integration']
  }
];

export function Services() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="min-h-[70vh] flex items-center px-6 md:px-12 py-24 border-b border-white/10">
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Services</p>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">Premium digital services that feel intentional, precise, and timeless.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl leading-relaxed">We only build what needs to exist. Whether you need a full digital overhaul or a single high-impact touchpoint, expect a design system-level approach.</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[#f5f5f7] text-black border-b border-black/10">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="relative group bg-white border border-black/5 rounded-3xl px-8 py-10 shadow-[0px_10px_45px_rgba(0,0,0,0.08)] hover:border-[#1d1d1f] transition-all duration-300">
              <div className="text-xs uppercase tracking-[0.35em] text-black/40">Service</div>
              <h2 className="mt-4 text-2xl font-semibold leading-tight">{service.title}</h2>
              <p className="mt-4 text-base text-black/70 leading-relaxed">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-black/60">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-[#0071e3]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] relative before:absolute before:inset-0 before:rounded-full before:bg-[#0071e3] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 px-2"
              >
                Let\'s Talk
                <span className="text-[#0071e3]">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Process</p>
          <h3 className="mt-4 text-3xl font-semibold">A deliberate process for every project.</h3>
          <p className="mt-4 text-white/70 leading-relaxed">Discovery, research, and measurable output—no guesswork, no fluff. Each engagement follows a simple rhythm: Understand, Design, Ship, Measure.</p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-4 text-center">
          {['1. Discover', '2. Design', '3. Deliver', '4. Grow'].map((step) => (
            <div key={step} className="rounded-2xl border border-white/10 p-6">
              <div className="text-sm uppercase tracking-[0.35em] text-white/50">{step.split(' ')[0]}</div>
              <p className="mt-4 text-white text-xl font-semibold">{step.split('. ')[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold">Ready to build something that feels premium and performs for years?</h3>
          <p className="mt-4 text-white/70 leading-relaxed">Schedule a zero-obligation strategy call, and we\'ll outline the exact mix of services that will unlock the most growth.</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 border border-white/30 rounded-full px-8 py-3 font-semibold uppercase tracking-[0.35em] text-sm hover:border-white"
          >
            Book a Call ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
