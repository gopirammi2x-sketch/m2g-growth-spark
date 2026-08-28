import { Bot, Clock, Target, Workflow } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";

const CARDS = [
  { icon: Target, title: "Digital Marketing", note: "Case studies coming soon" },
  { icon: Bot, title: "AI Advertising", note: "Creative showcase coming soon" },
  { icon: Workflow, title: "Automation", note: "Automation case studies coming soon" },
];

export function CaseStudies() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Work in Progress" title="Real business. Real growth." />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="lift relative flex h-full flex-col overflow-hidden rounded-3xl border border-dashed border-gold/40 bg-cream p-8">
                <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gold-dark ring-1 ring-gold/30">
                  <Clock className="h-3 w-3" /> Coming Soon
                </span>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-gold-dark ring-1 ring-gold/25">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-14 font-display text-lg font-extrabold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
