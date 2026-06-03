// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const testimonials = [
//   { name: "Sarah Chen", role: "CTO, FinEdge", initials: "SC", review: "OriginStack rebuilt our core platform in 4 months. Performance is 6x faster and our team finally ships weekly." },
//   { name: "Marcus Wright", role: "VP Engineering, HealthBridge", initials: "MW", review: "Their AI team integrated RAG into our clinical workflow flawlessly. Adoption beat every internal estimate." },
//   { name: "Priya Nair", role: "Founder, ShopLume", initials: "PN", review: "From design to launch in 10 weeks. The product feels like a flagship app — and the metrics back it up." },
//   { name: "David Okafor", role: "Head of Product, LogiPro", initials: "DO", review: "True engineering partners. They challenged assumptions and delivered an architecture built to last." },
// ];

// export function Testimonials() {
//   const [i, setI] = useState(0);
//   const next = () => setI((p) => (p + 1) % testimonials.length);
//   const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
//   const t = testimonials[i];

//   return (
//     <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-hero opacity-40" />
//       <div className="container mx-auto px-4 md:px-6 relative">
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
//             Testimonials
//           </div>
//           <h2 className="text-3xl md:text-5xl font-bold">
//             Loved by <span className="text-gradient-brand">teams that ship</span>
//           </h2>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <div className="relative rounded-3xl glass p-8 md:p-12 shadow-elegant text-center">
//             <Quote className="h-12 w-12 text-primary/40 mx-auto mb-6" />
//             <p className="text-lg md:text-2xl font-medium leading-relaxed mb-8">"{t.review}"</p>
//             <div className="flex flex-col items-center gap-3">
//               <div className="h-14 w-14 rounded-full bg-gradient-brand flex items-center justify-center text-brand-foreground font-bold text-lg shadow-elegant">
//                 {t.initials}
//               </div>
//               <div>
//                 <div className="font-semibold">{t.name}</div>
//                 <div className="text-sm text-muted-foreground">{t.role}</div>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-center gap-4 mt-8">
//             <Button variant="outline" size="icon" onClick={prev} aria-label="Previous">
//               <ChevronLeft className="h-5 w-5" />
//             </Button>
//             <div className="flex gap-2">
//               {testimonials.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setI(idx)}
//                   aria-label={`Slide ${idx + 1}`}
//                   className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-brand" : "w-2 bg-border"}`}
//                 />
//               ))}
//             </div>
//             <Button variant="outline" size="icon" onClick={next} aria-label="Next">
//               <ChevronRight className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
