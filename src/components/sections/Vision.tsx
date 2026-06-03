import { Globe, Repeat, Compass, GitBranch, Leaf, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Globe,
    title: "Global Technology Partner",
    desc: "Serving teams across continents with consistent quality and engineering excellence.",
  },
  {
    icon: Repeat,
    title: "Digital Transformation",
    desc: "End-to-end modernization — from legacy systems to cloud-native platforms.",
  },
  {
    icon: Compass,
    title: "Future-Ready Solutions",
    desc: "Architectures designed for what's next: AI, edge, real-time, and serverless.",
  },
  {
    icon: GitBranch,
    title: "Continuous Innovation",
    desc: "We invest in R&D and bring proven new tech into your roadmap responsibly.",
  },
  {
    icon: Leaf,
    title: "Sustainable Growth",
    desc: "Efficient systems and clean code that reduce cost and carbon at scale.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Business Impact",
    desc: "Measured outcomes, transparent processes, and accountable delivery.",
  },
];

export function Vision() {
  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Vision
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Shaping the next decade of <span className="text-gradient-brand">digital business</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative rounded-2xl p-7 bg-gradient-card border border-border backdrop-blur hover:shadow-glow hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl glass text-primary group-hover:bg-gradient-brand group-hover:text-brand-foreground transition-smooth">
                  <it.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
