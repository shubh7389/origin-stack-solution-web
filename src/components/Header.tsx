import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import solutionLogo from "@/assets/originstack-logo.png";
// import solutionLogo from "@/assets/solutionlogo.png";


const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

function ResponsiveLogo() {
  const [isDark, setIsDark] = useState(true);
  const [processedSrc, setProcessedSrc] = useState<string>(solutionLogo);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDark) {
      setProcessedSrc(solutionLogo);
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
    img.src = solutionLogo;
    if (img.complete) {
      process();
    }
  }, [isDark]);

  return (
    <img
      src={processedSrc}
      alt="OriginStack Solutions"
      className="h-12 md:h-16 w-auto transition-smooth group-hover:scale-105"
    />
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Sync active tab to URL hash on click / load
    const syncFromHash = () => {
      if (window.location.hash) setActive(window.location.hash);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    // Scroll spy
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled ? "glass-strong border-b border-border py-2" : "bg-transparent py-3"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => setActive("#home")}
          className="flex items-center gap-2 group"
        >
          <ResponsiveLogo />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => {
            const isActive = active === n.href;
            return (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setActive(n.href)}
                className={`text-sm font-medium transition-smooth relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all ${isActive
                  ? "text-primary after:w-full"
                  : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
                  }`}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <a href="#contact">Schedule Consultation</a>
          </Button>
          <Button variant="brand" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border mt-3 animate-fade-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {nav.map((n) => {
              const isActive = active === n.href;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => {
                    setActive(n.href);
                    setOpen(false);
                  }}
                  className={`text-base font-medium py-2 transition-smooth ${isActive ? "text-primary" : "hover:text-primary"
                    }`}
                >
                  {n.label}
                </a>
              );
            })}
            <Button variant="brand" className="mt-2" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                Get Started
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
