const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Stakeholder workshops, technical audits, and goal alignment.",
  },
  {
    n: "02",
    title: "Planning",
    desc: "Roadmap, architecture, and delivery milestones with measurable KPIs.",
  },
  {
    n: "03",
    title: "Design",
    desc: "Research-driven UX, design systems, and high-fidelity prototypes.",
  },
  {
    n: "04",
    title: "Development",
    desc: "Agile sprints, code review, automated testing, daily standups.",
  },
  { n: "05", title: "Testing", desc: "QA, performance, security, and accessibility validation." },
  {
    n: "06",
    title: "Deployment & Support",
    desc: "CI/CD release, observability, and continuous improvement.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A proven path from <span className="text-gradient-brand">idea to impact</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:-translate-x-1/2" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative flex flex-col md:flex-row gap-6 items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="h-4 w-4 rounded-full bg-gradient-brand shadow-glow animate-pulse-glow" />
                </div>
                <div className="md:w-1/2" />
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth">
                    <div className="text-4xl font-bold text-gradient-brand mb-2">{s.n}</div>
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
