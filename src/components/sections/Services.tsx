// import {
//   Code2,
//   Globe,
//   Smartphone,
//   BrainCircuit,
//   Cloud,
//   Palette,
//   BarChart3,
//   Briefcase,
// } from "lucide-react";

// const services = [
//   {
//     icon: Code2,
//     title: "Custom Software Development",
//     desc: "Tailored enterprise software engineered for performance and scale.",
//   },
//   {
//     icon: Globe,
//     title: "Web Application Development",
//     desc: "Fast, accessible web platforms built with modern frameworks.",
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile App Development",
//     desc: "Native and cross-platform mobile experiences that delight users.",
//   },
//   {
//     icon: BrainCircuit,
//     title: "AI & Generative AI",
//     desc: "LLMs, RAG pipelines, intelligent agents, and ML model deployment.",
//   },
//   {
//     icon: Cloud,
//     title: "Cloud Solutions & DevOps",
//     desc: "AWS, Azure, GCP — infrastructure as code, CI/CD, observability.",
//   },
//   {
//     icon: Palette,
//     title: "UI/UX Design",
//     desc: "Research-driven product design with measurable user outcomes.",
//   },
//   {
//     icon: BarChart3,
//     title: "Data Analytics & BI",
//     desc: "Modern data stacks, dashboards, and ML-powered insights.",
//   },
//   {
//     icon: Briefcase,
//     title: "Digital Transformation",
//     desc: "Strategy and execution to modernize teams, processes, and tech.",
//   },
// ];

// export function Services() {
//   return (
//     <section id="services" className="py-24 md:py-32 bg-surface relative">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
//             Our Services
//           </div>
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">
//             Full-stack capabilities to build{" "}
//             <span className="text-gradient-brand">what's next</span>
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             From discovery to deployment — one accountable engineering partner.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((s) => (
//             <div
//               key={s.title}
//               className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-smooth"
//             >
//               <div className="relative h-40 bg-gradient-brand overflow-hidden">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <s.icon className="h-16 w-16 text-brand-foreground/90 group-hover:scale-110 transition-smooth" />
//                 </div>
//                 <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-smooth" />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import customSoftwareImg from "@/assets/services/custom-software.jpg";
import webAppImg from "@/assets/services/web-app.jpg";
import mobileAppImg from "@/assets/services/mobile-app.jpg";
import aiImg from "@/assets/services/ai.jpg";
import cloudImg from "@/assets/services/cloud.jpg";
import uiuxImg from "@/assets/services/uiux.jpg";
import dataImg from "@/assets/services/data.jpg";
import transformationImg from "@/assets/services/transformation.jpg";

const services = [
  {
    image: customSoftwareImg,
    title: "Custom Software Development",
    desc: "Tailored enterprise software engineered for performance and scale.",
  },
  {
    image: webAppImg,
    title: "Web Application Development",
    desc: "Fast, accessible web platforms built with modern frameworks.",
  },
  {
    image: mobileAppImg,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences that delight users.",
  },
  {
    image: aiImg,
    title: "AI & Generative AI",
    desc: "LLMs, RAG pipelines, intelligent agents, and ML model deployment.",
  },
  {
    image: cloudImg,
    title: "Cloud Solutions & DevOps",
    desc: "AWS, Azure, GCP — infrastructure as code, CI/CD, observability.",
  },
  {
    image: uiuxImg,
    title: "UI/UX Design",
    desc: "Research-driven product design with measurable user outcomes.",
  },
  {
    image: dataImg,
    title: "Data Analytics & BI",
    desc: "Modern data stacks, dashboards, and ML-powered insights.",
  },
  {
    image: transformationImg,
    title: "Digital Transformation",
    desc: "Strategy and execution to modernize teams, processes, and tech.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Full-stack capabilities to build{" "}
            <span className="text-gradient-brand">what's next</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From discovery to deployment — one accountable engineering partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-smooth"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  width={800}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


