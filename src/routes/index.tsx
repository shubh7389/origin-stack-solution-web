import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Vision } from "@/components/sections/Vision";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
// import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OriginStack Solutions — From Origin to Innovation" },
      {
        name: "description",
        content:
          "Premium software development, AI, cloud, and digital transformation services for startups and enterprises.",
      },
      { property: "og:title", content: "OriginStack Solutions" },
      {
        property: "og:description",
        content: "Building digital products that drive business growth.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Vision />
        <WhyUs />
        <Services />
        <Industries />
        <Process />
        <TechStack />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
