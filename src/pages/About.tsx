import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="min-h-[80vh] flex items-center px-6 md:px-12 py-24 border-b border-white/10">
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">About</p>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">A small team with a precise, intentional approach to digital growth.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl leading-relaxed">Genesis was built on a single belief: that most agencies confuse activity with progress. We do fewer things. We do them at a premium level. And we measure everything.</p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#f5f5f7] text-black border-b border-black/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-black/40">Origin</p>
          <h2 className="mt-4 text-3xl font-semibold max-w-3xl leading-tight">Born from frustration with agencies that deliver mediocrity dressed as strategy.</h2>
          <div className="mt-12 space-y-8 text-lg text-black/70 leading-relaxed max-w-3xl">
            <p>We watched talented businesses across East Africa get stuck with websites that looked like 2015, copy that nobody read, and "SEO strategies" that amounted to stuffing keywords into blog posts nobody visited.</p>
            <p>Genesis was our answer. A focused team of specialists in design, development, and content—working directly with clients, no account managers, no overhead, no fluff. We operate across Uganda, Kenya, South Sudan, and Rwanda, with the flexibility to work globally.</p>
            <p>Our process is simple: understand the business deeply, define what premium looks like for that specific client, build with intention, and measure outcomes—not outputs.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">What We Stand For</p>
          <div className="mt-10 grid gap-px bg-white/10">
            {[
              { title: 'Strategy First', desc: 'Every project starts with understanding. We don\'t open Figma until we know exactly what we\'re building and why.' },
              { title: 'Premium Without Pretense', desc: 'Premium design isn\'t about price tags. It\'s about intentionality—every element earns its place.' },
              { title: 'Results Obsessed', desc: 'If a design decision doesn\'t serve a business outcome, it doesn\'t ship. We track what matters.' },
              { title: 'Transparent Always', desc: 'Real timelines. Real pricing. Real expectations. We don\'t hide behind agency speak.' },
              { title: 'Built to Last', desc: 'We build for the long term. Code that scales, designs that age gracefully, copy that stays relevant.' }
            ].map((value) => (
              <div key={value.title} className="bg-black grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 md:col-span-1 border-b md:border-b-0 md:border-r border-white/10">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </div>
                <div className="p-8 md:col-span-2">
                  <p className="text-white/60 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold">Work with a team that cares about your outcomes as much as you do.</h3>
          <p className="mt-4 text-white/70 leading-relaxed">We take on a small number of projects each quarter to ensure every client gets the attention they deserve.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#0071e3] text-white rounded-full px-8 py-3 font-semibold uppercase tracking-[0.35em] text-sm hover:bg-[#0071e3]/90 transition-colors"
            >
              Start a Conversation ↗
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center border border-white/30 rounded-full px-8 py-3 font-semibold uppercase tracking-[0.35em] text-sm hover:border-white transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
