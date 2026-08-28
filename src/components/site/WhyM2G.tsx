import { Gauge, LineChart, Sparkles, Workflow } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";

const BENEFITS = [
  {
    icon: LineChart,
    title: "Results-Driven Approach",
    desc: "Data-driven strategies focused on measurable business growth.",
  },
  { icon: Gauge, title: "Fast Turnaround", desc: "AI-powered creative processes help reduce production time." },
  {
    icon: Sparkles,
    title: "AI-Powered Solutions",
    desc: "Use modern AI tools to create, optimize and automate marketing.",
  },
  {
    icon: Workflow,
    title: "End-to-End Support",
    desc: "From strategy and execution to automation — connect the entire growth journey.",
  },
];

export function WhyM2G() {
  return (
    <section className="bg-beige py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Businesses Choose M2G"
            title={
              <>
                Practical growth.
                <br className="hidden sm:block" /> Powered by AI.
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <div className="lift flex h-full flex-col items-start rounded-3xl border border-border bg-white p-7 shadow-soft hover:border-gold/50">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold/12 text-gold-dark ring-1 ring-gold/30">
                  <b.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-base font-extrabold leading-snug text-navy">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
