import awsLogo from "@/assets/aws.png";
import azureLogo from "@/assets/azure.png";
import oracleLogo from "@/assets/oracle.svg";
import javaLogo from "@/assets/java.png";
import rubyonrails from "@/assets/rubyonrails.png";


const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

type Tech = { name: string; slug: string; customIcon?: string };

const groups: { title: string; items: Tech[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", slug: "java", customIcon: javaLogo },
      { name: "Python", slug: "python" },
      { name: "ROR", slug: "rubyonrails", customIcon: rubyonrails },
      { name: "Node.js", slug: "nodedotjs" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "Oracle", slug: "oracle", customIcon: oracleLogo },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", slug: "amazonwebservices", customIcon: awsLogo },
      { name: "Azure", slug: "microsoftazure", customIcon: azureLogo },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
    ],
  },
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

export function TechStack() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Tech Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Modern tooling, <span className="text-gradient-brand">production-ready</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-5 text-center">
                {g.title}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {g.items.map((t) => (
                  <div
                    key={t.name}
                    className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-muted/40 hover:bg-gradient-card hover:-translate-y-1 transition-smooth"
                  >
                    <div
                      className={`flex items-center justify-center ${t.name === "Oracle" ? "w-16 h-10" : "w-10 h-10"
                        }`}
                    >
                      {/* <img
                        src={t.customIcon || icon(t.slug)}
                        alt={t.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-smooth"
                        loading="lazy"
                      /> */}
                      <img
                        src={t.customIcon || icon(t.slug)}
                        alt={t.name}
                        className={`object-contain group-hover:scale-110 transition-smooth ${t.name === "Java" ? "h-12 w-12" : "h-9 w-9"
                          }`}
                        loading="lazy"
                      />
                    </div>

                    <span className="text-xs font-medium text-center text-foreground/80">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
