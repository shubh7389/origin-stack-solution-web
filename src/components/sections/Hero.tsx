import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
  { value: "5+", label: "Tech Domains" },
  { value: "90%", label: "Client Commitment" },
];

const floats = [
  { label: "AI", style: "top-[18%] left-[8%]", delay: "0s" },
  { label: "Cloud", style: "top-[28%] right-[10%]", delay: "1s" },
  { label: "SaaS", style: "bottom-[30%] left-[12%]", delay: "2s" },
  { label: "API", style: "top-[55%] right-[18%]", delay: "1.5s" },
  { label: "Data", style: "bottom-[20%] right-[8%]", delay: "0.5s" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating tech chips */}
      {floats.map((f) => (
        <div
          key={f.label}
          className={`absolute ${f.style} hidden md:flex glass rounded-full px-4 py-2 text-sm font-semibold text-primary animate-float-slow shadow-elegant`}
          style={{ animationDelay: f.delay }}
        >
          {f.label}
        </div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-medium">From Origin to Innovation</span>
          </div>

          <div className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Welcome to OriginStack
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Building Digital Products That{" "}
            <span className="text-gradient-brand">Drive Business Growth</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We help startups, enterprises, and growing businesses transform ideas into scalable
            software, AI-powered solutions, and cloud-native platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Get Started <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outlineBrand" size="lg" asChild>
              <a href="#contact">Talk To Experts</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-5 md:p-6 hover:shadow-glow hover:-translate-y-1 transition-smooth"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-brand">{s.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
