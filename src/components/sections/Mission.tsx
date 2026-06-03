import { Rocket, Layers, Sparkles, Bot, Heart, Zap } from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "Driving Innovation",
    desc: "We craft pioneering software that pushes boundaries and unlocks new business value.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    desc: "Architectures built to grow with you — from MVP to global enterprise scale.",
  },
  {
    icon: Sparkles,
    title: "Digital Excellence",
    desc: "Pixel-perfect interfaces and engineering rigor in every line of code we ship.",
  },
  {
    icon: Bot,
    title: "Business Automation",
    desc: "Streamline workflows with intelligent automation, AI agents, and integrations.",
  },
  {
    icon: Heart,
    title: "Customer Success",
    desc: "Long-term partnership focused on measurable outcomes and continuous improvement.",
  },
  {
    icon: Zap,
    title: "Emerging Technologies",
    desc: "Generative AI, edge computing, and cloud-native — adopted with engineering discipline.",
  },
];

export function Mission() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Empowering businesses through{" "}
            <span className="text-gradient-brand">innovative technology</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Six pillars that define how we build, ship, and partner with the teams we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-elegant mb-5 group-hover:scale-110 transition-smooth">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
