import {
  Building2,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Factory,
  Home,
  Truck,
  Rocket,
  Check,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "FinTech & Banking",
    challenges: "Legacy systems, compliance, real-time fraud.",
    solutions: "Core modernization, KYC/AML automation, payments APIs.",
    benefits: ["Faster onboarding", "Reduced fraud loss", "Regulatory readiness"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Pharma",
    challenges: "Fragmented records, HIPAA, manual workflows.",
    solutions: "EHR integrations, telehealth, AI diagnostics.",
    benefits: ["Better patient outcomes", "Operational efficiency", "Secure data exchange"],
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    challenges: "Cart abandonment, omnichannel, personalization.",
    solutions: "Headless commerce, recommendation engines, OMS.",
    benefits: ["Higher conversion", "Unified inventory", "Personalized journeys"],
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    challenges: "Engagement, scale, content delivery.",
    solutions: "LMS platforms, adaptive learning, AI tutors.",
    benefits: ["Higher completion", "Scalable delivery", "Data-driven curriculum"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Supply Chain",
    challenges: "Visibility, downtime, demand planning.",
    solutions: "IIoT, predictive maintenance, digital twins.",
    benefits: ["Reduced downtime", "Real-time visibility", "Optimized inventory"],
  },
  {
    icon: Home,
    title: "Real Estate",
    challenges: "Lead quality, paperwork, virtual tours.",
    solutions: "CRM, AI valuation, immersive 3D experiences.",
    benefits: ["More qualified leads", "Faster closings", "Better client trust"],
  },
  {
    icon: Truck,
    title: "Logistics",
    challenges: "Routing, tracking, last-mile cost.",
    solutions: "TMS, route optimization, real-time tracking.",
    benefits: ["Lower delivery cost", "On-time performance", "Customer satisfaction"],
  },
  {
    icon: Rocket,
    title: "Startups & SaaS",
    challenges: "Speed to market, scaling, product-market fit.",
    solutions: "MVPs, multi-tenant SaaS, growth analytics.",
    benefits: ["Faster launches", "Investor-ready scale", "Lower burn"],
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Industries We Empower
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Domain expertise across <span className="text-gradient-brand">eight verticals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {industries.map((it, i) => (
            <div
              key={it.title}
              className={`group relative rounded-3xl border border-border bg-card p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden ${
                i % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-brand opacity-10 group-hover:opacity-25 transition-smooth" />
              <div className="relative flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-elegant">
                    <it.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{it.title}</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Challenges: </span>
                      <span className="text-muted-foreground">{it.challenges}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Solutions: </span>
                      <span className="text-muted-foreground">{it.solutions}</span>
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {it.benefits.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        <Check className="h-3 w-3" /> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
