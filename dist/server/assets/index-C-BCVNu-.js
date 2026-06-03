import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, X, Menu, Sparkles, ArrowRight, Rocket, Layers, Bot, Heart, Zap, Globe, Repeat, Compass, GitBranch, Leaf, ShieldCheck, Users, BrainCircuit, Network, LifeBuoy, Code2, Smartphone, Cloud, Palette, BarChart3, Briefcase, Building2, HeartPulse, ShoppingBag, GraduationCap, Factory, Home, Truck, Check, Mail, MapPin, Send } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast, Toaster as Toaster$1 } from "sonner";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        brand: "bg-gradient-brand text-brand-foreground shadow-elegant hover:shadow-glow hover:scale-[1.03] transition-smooth font-semibold",
        hero: "bg-gradient-brand text-brand-foreground shadow-elegant hover:shadow-glow hover:scale-[1.03] transition-smooth font-semibold text-base px-8 py-6",
        outlineBrand: "border-2 border-primary/40 bg-background/40 backdrop-blur text-foreground hover:bg-primary/10 hover:border-primary transition-smooth font-semibold"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const dark = stored ? stored === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: toggle, "aria-label": "Toggle theme", children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Moon, { className: "h-5 w-5" }) });
}
const logo = "/assets/originstack-logo-DCsZ0x_o.png";
const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" }
];
function ResponsiveLogo() {
  const [isDark, setIsDark] = useState(true);
  const [processedSrc, setProcessedSrc] = useState(logo);
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (isDark) {
      setProcessedSrc(logo);
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    const process = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const startY = Math.floor(canvas.height * 0.6);
      for (let y = startY; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const idx = (y * canvas.width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];
          if (a > 0 && r > 210 && g > 210 && b > 210) {
            data[idx] = 102;
            data[idx + 1] = 102;
            data[idx + 2] = 102;
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setProcessedSrc(canvas.toDataURL());
    };
    img.onload = process;
    img.src = logo;
    if (img.complete) {
      process();
    }
  }, [isDark]);
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: processedSrc,
      alt: "OriginStack Technologies",
      className: "h-12 md:h-16 w-auto transition-smooth group-hover:scale-105"
    }
  );
}
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash) setActive(window.location.hash);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter((el) => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled ? "glass-strong border-b border-border py-2" : "bg-transparent py-3"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#home",
              onClick: () => setActive("#home"),
              className: "flex items-center gap-2 group",
              children: /* @__PURE__ */ jsx(ResponsiveLogo, {})
            }
          ),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-8", children: nav.map((n) => {
            const isActive = active === n.href;
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: n.href,
                onClick: () => setActive(n.href),
                className: `text-sm font-medium transition-smooth relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all ${isActive ? "text-primary after:w-full" : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"}`,
                children: n.label
              },
              n.href
            );
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsx(Button, { variant: "ghost", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Schedule Consultation" }) }),
            /* @__PURE__ */ jsx(Button, { variant: "brand", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Get Started" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) })
          ] })
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden glass-strong border-t border-border mt-3 animate-fade-up", children: /* @__PURE__ */ jsxs("nav", { className: "container mx-auto px-4 py-4 flex flex-col gap-3", children: [
          nav.map((n) => {
            const isActive = active === n.href;
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: n.href,
                onClick: () => {
                  setActive(n.href);
                  setOpen(false);
                },
                className: `text-base font-medium py-2 transition-smooth ${isActive ? "text-primary" : "hover:text-primary"}`,
                children: n.label
              },
              n.href
            );
          }),
          /* @__PURE__ */ jsx(Button, { variant: "brand", className: "mt-2", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "#contact", onClick: () => setOpen(false), children: "Get Started" }) })
        ] }) })
      ]
    }
  );
}
const heroBg = "/assets/hero-bg-DcKapncU.jpg";
const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
  { value: "5+", label: "Tech Domains" },
  { value: "90%", label: "Client Commitment" }
];
const floats = [
  { label: "AI", style: "top-[18%] left-[8%]", delay: "0s" },
  { label: "Cloud", style: "top-[28%] right-[10%]", delay: "1s" },
  { label: "SaaS", style: "bottom-[30%] left-[12%]", delay: "2s" },
  { label: "API", style: "top-[55%] right-[18%]", delay: "1.5s" },
  { label: "Data", style: "bottom-[20%] right-[8%]", delay: "0.5s" }
];
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-screen flex items-center overflow-hidden pt-24 pb-16",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: heroBg,
              alt: "",
              width: 1920,
              height: 1280,
              className: "w-full h-full object-cover opacity-30 dark:opacity-40"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-hero" })
        ] }),
        floats.map((f) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute ${f.style} hidden md:flex glass rounded-full px-4 py-2 text-sm font-semibold text-primary animate-float-slow shadow-elegant`,
            style: { animationDelay: f.delay },
            children: f.label
          },
          f.label
        )),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "From Origin to Innovation" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-primary mb-4", children: "Welcome to OriginStack" }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6", children: [
            "Building Digital Products That",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Drive Business Growth" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10", children: "We help startups, enterprises, and growing businesses transform ideas into scalable software, AI-powered solutions, and cloud-native platforms." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-16", children: [
            /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "#contact", children: [
              "Get Started ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-5 w-5" })
            ] }) }),
            /* @__PURE__ */ jsx(Button, { variant: "outlineBrand", size: "lg", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Talk To Experts" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto", children: stats.map((s) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "glass rounded-2xl p-5 md:p-6 hover:shadow-glow hover:-translate-y-1 transition-smooth",
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-gradient-brand", children: s.value }),
                /* @__PURE__ */ jsx("div", { className: "text-xs md:text-sm text-muted-foreground mt-1", children: s.label })
              ]
            },
            s.label
          )) })
        ] }) })
      ]
    }
  );
}
const items$2 = [
  {
    icon: Rocket,
    title: "Driving Innovation",
    desc: "We craft pioneering software that pushes boundaries and unlocks new business value."
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    desc: "Architectures built to grow with you — from MVP to global enterprise scale."
  },
  {
    icon: Sparkles,
    title: "Digital Excellence",
    desc: "Pixel-perfect interfaces and engineering rigor in every line of code we ship."
  },
  {
    icon: Bot,
    title: "Business Automation",
    desc: "Streamline workflows with intelligent automation, AI agents, and integrations."
  },
  {
    icon: Heart,
    title: "Customer Success",
    desc: "Long-term partnership focused on measurable outcomes and continuous improvement."
  },
  {
    icon: Zap,
    title: "Emerging Technologies",
    desc: "Generative AI, edge computing, and cloud-native — adopted with engineering discipline."
  }
];
function Mission() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-24 md:py-32 relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3", children: "Our Mission" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
        "Empowering businesses through",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "innovative technology" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Six pillars that define how we build, ship, and partner with the teams we serve." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: items$2.map((it, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group relative rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden",
        style: { animationDelay: `${i * 60}ms` },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-smooth" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-elegant mb-5 group-hover:scale-110 transition-smooth", children: /* @__PURE__ */ jsx(it.icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: it.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: it.desc })
          ] })
        ]
      },
      it.title
    )) })
  ] }) });
}
const items$1 = [
  {
    icon: Globe,
    title: "Global Technology Partner",
    desc: "Serving teams across continents with consistent quality and engineering excellence."
  },
  {
    icon: Repeat,
    title: "Digital Transformation",
    desc: "End-to-end modernization — from legacy systems to cloud-native platforms."
  },
  {
    icon: Compass,
    title: "Future-Ready Solutions",
    desc: "Architectures designed for what's next: AI, edge, real-time, and serverless."
  },
  {
    icon: GitBranch,
    title: "Continuous Innovation",
    desc: "We invest in R&D and bring proven new tech into your roadmap responsibly."
  },
  {
    icon: Leaf,
    title: "Sustainable Growth",
    desc: "Efficient systems and clean code that reduce cost and carbon at scale."
  },
  {
    icon: ShieldCheck,
    title: "Trusted Business Impact",
    desc: "Measured outcomes, transparent processes, and accountable delivery."
  }
];
function Vision() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 md:py-32 bg-surface relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3", children: "Our Vision" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
          "Shaping the next decade of ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "digital business" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: items$1.map((it) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "group relative rounded-2xl p-7 bg-gradient-card border border-border backdrop-blur hover:shadow-glow hover:-translate-y-1 transition-smooth",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl glass text-primary group-hover:bg-gradient-brand group-hover:text-brand-foreground transition-smooth", children: /* @__PURE__ */ jsx(it.icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: it.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: it.desc })
            ] })
          ] })
        },
        it.title
      )) })
    ] })
  ] });
}
const items = [
  {
    icon: Users,
    value: 20,
    suffix: "+",
    label: "Expert Tech Team",
    desc: "Senior engineers, architects, designers across 5+ domains."
  },
  {
    icon: BrainCircuit,
    value: 5,
    suffix: "+",
    label: "AI & Modern Tech Focus",
    desc: "GenAI, RAG, LLM agents, and modern data platforms."
  },
  {
    icon: Network,
    value: 99,
    suffix: "%",
    label: "Scalable Architecture",
    desc: "Cloud-native systems built for uptime and growth."
  },
  {
    icon: LifeBuoy,
    value: 24,
    suffix: "/7",
    label: "Long-Term Support",
    desc: "Continuous monitoring, iteration, and partnership."
  }
];
function Counter({ to, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const dur = 1400;
        const start = performance.now();
        const step = (t) => {
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
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    val,
    suffix
  ] });
}
function WhyUs() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3", children: "Why Choose Us" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
        "Engineering excellence, ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "delivered." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: items.map((it) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group relative rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth text-center overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-brand opacity-10 group-hover:opacity-30 transition-smooth" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-elegant mb-4", children: /* @__PURE__ */ jsx(it.icon, { className: "h-7 w-7" }) }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-bold text-gradient-brand mb-2", children: /* @__PURE__ */ jsx(Counter, { to: it.value, suffix: it.suffix }) }),
            /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: it.label }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: it.desc })
          ] })
        ]
      },
      it.label
    )) })
  ] }) });
}
const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Tailored enterprise software engineered for performance and scale."
  },
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "Fast, accessible web platforms built with modern frameworks."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences that delight users."
  },
  {
    icon: BrainCircuit,
    title: "AI & Generative AI",
    desc: "LLMs, RAG pipelines, intelligent agents, and ML model deployment."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    desc: "AWS, Azure, GCP — infrastructure as code, CI/CD, observability."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Research-driven product design with measurable user outcomes."
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    desc: "Modern data stacks, dashboards, and ML-powered insights."
  },
  {
    icon: Briefcase,
    title: "Digital Transformation",
    desc: "Strategy and execution to modernize teams, processes, and tech."
  }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "py-24 md:py-32 bg-surface relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3", children: "Our Services" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
        "Full-stack capabilities to build",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "what's next" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "From discovery to deployment — one accountable engineering partner." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: services.map((s) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group relative rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-smooth",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-40 bg-gradient-brand overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(s.icon, { className: "h-16 w-16 text-brand-foreground/90 group-hover:scale-110 transition-smooth" }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-smooth" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
          ] })
        ]
      },
      s.title
    )) })
  ] }) });
}
const industries = [
  {
    icon: Building2,
    title: "FinTech & Banking",
    challenges: "Legacy systems, compliance, real-time fraud.",
    solutions: "Core modernization, KYC/AML automation, payments APIs.",
    benefits: ["Faster onboarding", "Reduced fraud loss", "Regulatory readiness"]
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Pharma",
    challenges: "Fragmented records, HIPAA, manual workflows.",
    solutions: "EHR integrations, telehealth, AI diagnostics.",
    benefits: ["Better patient outcomes", "Operational efficiency", "Secure data exchange"]
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    challenges: "Cart abandonment, omnichannel, personalization.",
    solutions: "Headless commerce, recommendation engines, OMS.",
    benefits: ["Higher conversion", "Unified inventory", "Personalized journeys"]
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    challenges: "Engagement, scale, content delivery.",
    solutions: "LMS platforms, adaptive learning, AI tutors.",
    benefits: ["Higher completion", "Scalable delivery", "Data-driven curriculum"]
  },
  {
    icon: Factory,
    title: "Manufacturing & Supply Chain",
    challenges: "Visibility, downtime, demand planning.",
    solutions: "IIoT, predictive maintenance, digital twins.",
    benefits: ["Reduced downtime", "Real-time visibility", "Optimized inventory"]
  },
  {
    icon: Home,
    title: "Real Estate",
    challenges: "Lead quality, paperwork, virtual tours.",
    solutions: "CRM, AI valuation, immersive 3D experiences.",
    benefits: ["More qualified leads", "Faster closings", "Better client trust"]
  },
  {
    icon: Truck,
    title: "Logistics",
    challenges: "Routing, tracking, last-mile cost.",
    solutions: "TMS, route optimization, real-time tracking.",
    benefits: ["Lower delivery cost", "On-time performance", "Customer satisfaction"]
  },
  {
    icon: Rocket,
    title: "Startups & SaaS",
    challenges: "Speed to market, scaling, product-market fit.",
    solutions: "MVPs, multi-tenant SaaS, growth analytics.",
    benefits: ["Faster launches", "Investor-ready scale", "Lower burn"]
  }
];
function Industries() {
  return /* @__PURE__ */ jsx("section", { id: "industries", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3", children: "Industries We Empower" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
        "Domain expertise across ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "eight verticals" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: industries.map((it, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `group relative rounded-3xl border border-border bg-card p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden ${i % 2 === 1 ? "lg:translate-y-6" : ""}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-brand opacity-10 group-hover:opacity-25 transition-smooth" }),
          /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col md:flex-row gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-elegant", children: /* @__PURE__ */ jsx(it.icon, { className: "h-8 w-8" }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", children: it.title }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Challenges: " }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: it.challenges })
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Solutions: " }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: it.solutions })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: it.benefits.map((b) => /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium",
                  children: [
                    /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }),
                    " ",
                    b
                  ]
                },
                b
              )) })
            ] })
          ] })
        ]
      },
      it.title
    )) })
  ] }) });
}
const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Stakeholder workshops, technical audits, and goal alignment."
  },
  {
    n: "02",
    title: "Planning",
    desc: "Roadmap, architecture, and delivery milestones with measurable KPIs."
  },
  {
    n: "03",
    title: "Design",
    desc: "Research-driven UX, design systems, and high-fidelity prototypes."
  },
  {
    n: "04",
    title: "Development",
    desc: "Agile sprints, code review, automated testing, daily standups."
  },
  { n: "05", title: "Testing", desc: "QA, performance, security, and accessibility validation." },
  {
    n: "06",
    title: "Deployment & Support",
    desc: "CI/CD release, observability, and continuous improvement."
  }
];
function Process() {
  return /* @__PURE__ */ jsx("section", { id: "process", className: "py-24 md:py-32 bg-surface relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3", children: "Our Process" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
        "A proven path from ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "idea to impact" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:-translate-x-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: steps.map((s, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative flex flex-col md:flex-row gap-6 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-6 md:left-1/2 -translate-x-1/2 z-10", children: /* @__PURE__ */ jsx("div", { className: "h-4 w-4 rounded-full bg-gradient-brand shadow-glow animate-pulse-glow" }) }),
            /* @__PURE__ */ jsx("div", { className: "md:w-1/2" }),
            /* @__PURE__ */ jsx("div", { className: "md:w-1/2 pl-12 md:pl-0 md:px-12", children: /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-gradient-brand mb-2", children: s.n }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: s.desc })
            ] }) })
          ]
        },
        s.n
      )) })
    ] })
  ] }) });
}
const awsLogo = "/assets/aws-g1kX-I-7.png";
const azureLogo = "data:image/png;base64,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";
const oracleLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20231%2030'%20preserveAspectRatio='xMinYMid'%3e%3cpath%20d='M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6'%20transform='translate(-0.02%200)'%20style='fill:%23C74634'/%3e%3c/svg%3e";
const javaLogo = "/assets/java-IIiPvIVe.png";
const icon = (slug) => `https://cdn.simpleicons.org/${slug}`;
const groups = [
  {
    title: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Python", slug: "python" },
      { name: "Django", slug: "django" },
      { name: "Java", slug: "java", customIcon: javaLogo },
      { name: "Node.js", slug: "nodedotjs" }
    ]
  },
  {
    title: "Database",
    items: [
      { name: "Oracle", slug: "oracle", customIcon: oracleLogo },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" }
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", slug: "amazonwebservices", customIcon: awsLogo },
      { name: "Azure", slug: "microsoftazure", customIcon: azureLogo },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" }
    ]
  }
  // {
  //   title: "AI & Data",
  //   items: [
  //     // { name: "OpenAI", slug: "openai" },
  //     { name: "LangChain", slug: "langchain" },
  //     { name: "TensorFlow", slug: "tensorflow" },
  //     { name: "PyTorch", slug: "pytorch" },
  //   ],
  // },
];
function TechStack() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3", children: "Tech Stack" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
        "Modern tooling, ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "production-ready" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto", children: groups.map((g) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-primary uppercase tracking-wider mb-5 text-center", children: g.title }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: g.items.map((t) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-muted/40 hover:bg-gradient-card hover:-translate-y-1 transition-smooth",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `flex items-center justify-center ${t.name === "Oracle" ? "w-16 h-10" : "w-10 h-10"}`,
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: t.customIcon || icon(t.slug),
                        alt: t.name,
                        className: `object-contain group-hover:scale-110 transition-smooth ${t.name === "Java" ? "h-12 w-12" : "h-9 w-9"}`,
                        loading: "lazy"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-center text-foreground/80", children: t.name })
              ]
            },
            t.name
          )) })
        ]
      },
      g.title
    )) })
  ] }) });
}
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll reach out within one business day.");
      e.target.reset();
    }, 700);
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3", children: "Get In Touch" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: [
        "Let's ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "Connect" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Share your vision — we'll respond with a tailored plan within 24 hours." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-gradient-brand p-6 sm:p-8 md:p-10 text-brand-foreground shadow-elegant relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2", children: "Contact Information" }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-foreground/80 mb-8", children: "Talk to our experts and start your transformation." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:info@originstacktech.com",
                className: "flex items-center gap-4 group",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-smooth", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider opacity-80", children: "Email" }),
                    /* @__PURE__ */ jsx("div", { className: "font-semibold break-all", children: "info@originstacktech.com" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center", children: /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider opacity-80", children: "Website" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "www.originstacktech.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider opacity-80", children: "Global" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Serving clients worldwide" })
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit,
          className: "rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-card space-y-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Name" }),
                /* @__PURE__ */ jsx(Input, { required: true, name: "name", placeholder: "Your name" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Email" }),
                /* @__PURE__ */ jsx(Input, { required: true, type: "email", name: "email", placeholder: "you@company.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Company" }),
              /* @__PURE__ */ jsx(Input, { name: "company", placeholder: "Company name" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Service Required" }),
              /* @__PURE__ */ jsx(Input, { name: "service", placeholder: "e.g. AI Solutions, Mobile App, Cloud" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Message" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  required: true,
                  name: "message",
                  rows: 4,
                  placeholder: "Tell us about your project..."
                }
              )
            ] }),
            /* @__PURE__ */ jsx(Button, { type: "submit", variant: "brand", size: "lg", className: "w-full", disabled: loading, children: loading ? "Sending..." : /* @__PURE__ */ jsxs(Fragment, { children: [
              "Send Message ",
              /* @__PURE__ */ jsx(Send, { className: "ml-1 h-4 w-4" })
            ] }) })
          ]
        }
      )
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[oklch(0.1_0.02_250)] text-white pt-16 pb-8 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-hero opacity-30" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-10 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
          /* @__PURE__ */ jsx("img", { src: logo, alt: "OriginStack Technologies", className: "h-14 w-auto mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/70 text-sm italic mb-4", children: '"From Origin to Innovation."' }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm", children: "Engineering modern software, AI, and cloud platforms for ambitious teams." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider mb-4 text-[color:var(--brand-glow)]", children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/70", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#home", className: "hover:text-white transition-smooth", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-white transition-smooth", children: "About" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#services", className: "hover:text-white transition-smooth", children: "Services" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#industries", className: "hover:text-white transition-smooth", children: "Industries" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-white transition-smooth", children: "Contact" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider mb-4 text-[color:var(--brand-glow)]", children: "Services" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/70", children: [
            /* @__PURE__ */ jsx("li", { children: "Software Development" }),
            /* @__PURE__ */ jsx("li", { children: "AI Solutions" }),
            /* @__PURE__ */ jsx("li", { children: "Cloud Solutions" }),
            /* @__PURE__ */ jsx("li", { children: "Mobile Apps" }),
            /* @__PURE__ */ jsx("li", { children: "UI/UX Design" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider mb-4 text-[color:var(--brand-glow)]", children: "Contact" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/70", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:info@originstacktech.com",
                className: "hover:text-white transition-smooth",
                children: "info@originstacktech.com"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: "www.originstacktech.com" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50", children: [
        /* @__PURE__ */ jsx("div", { children: "© 2026 OriginStack Technologies. All Rights Reserved." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-smooth", children: "Privacy" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-smooth", children: "Terms" })
        ] })
      ] })
    ] })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Mission, {}),
      /* @__PURE__ */ jsx(Vision, {}),
      /* @__PURE__ */ jsx(WhyUs, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Industries, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(TechStack, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-right" })
  ] });
}
export {
  Index as component
};
