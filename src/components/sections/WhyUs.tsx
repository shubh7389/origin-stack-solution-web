import { useEffect, useRef, useState } from "react";
import { Users, BrainCircuit, Network, LifeBuoy } from "lucide-react";

const items = [
  {
    icon: Users,
    value: 20,
    suffix: "+",
    label: "Expert Tech Team",
    desc: "Senior engineers, architects, designers across 5+ domains.",
  },
  {
    icon: BrainCircuit,
    value: 5,
    suffix: "+",
    label: "AI & Modern Tech Focus",
    desc: "GenAI, RAG, LLM agents, and modern data platforms.",
  },
  {
    icon: Network,
    value: 99,
    suffix: "%",
    label: "Scalable Architecture",
    desc: "Cloud-native systems built for uptime and growth.",
  },
  {
    icon: LifeBuoy,
    value: 24,
    suffix: "/7",
    label: "Long-Term Support",
    desc: "Continuous monitoring, iteration, and partnership.",
  },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const dur = 1400;
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setVal(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Engineering excellence, <span className="text-gradient-brand">delivered.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.label}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth text-center overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-brand opacity-10 group-hover:opacity-30 transition-smooth" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-elegant mb-4">
                  <it.icon className="h-7 w-7" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">
                  <Counter to={it.value} suffix={it.suffix} />
                </div>
                <div className="font-semibold mb-2">{it.label}</div>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
