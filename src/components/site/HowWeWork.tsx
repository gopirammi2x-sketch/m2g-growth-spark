import { BadgeCheck, Bell, ChevronRight, Database, Handshake, Megaphone, MessagesSquare, UserPlus } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";

const STAGES = [
  { icon: Megaphone, title: "Social Media Ad", desc: "Attract the right audience" },
  { icon: UserPlus, title: "Lead Capture", desc: "Collect enquiries" },
  { icon: BadgeCheck, title: "AI Lead Validation", desc: "Qualify and score leads" },
  { icon: Database, title: "CRM & Automation", desc: "Store, segment and nurture" },
  { icon: MessagesSquare, title: "Follow-ups", desc: "WhatsApp, Email & SMS" },
  { icon: Bell, title: "Sales Team", desc: "Hot leads delivered to your team" },
  { icon: Handshake, title: "Conversion", desc: "Close more business" },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="From First Click to Final Sale"
            title="Let the system do the follow-up."
            subtitle="Connect your marketing, lead management and sales follow-up using n8n, AI and cloud-based automation."
          />
        </Reveal>

        <ol className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-7 lg:gap-2">
          {STAGES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} as="li" className="relative flex lg:block">
              <div className="lift flex h-full w-full flex-col items-center rounded-2xl border border-border bg-white px-4 py-6 text-center shadow-soft hover:border-gold/50">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/12 text-gold-dark ring-1 ring-gold/25">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold-dark">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-display text-sm font-extrabold leading-tight text-navy">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>

              {i < STAGES.length - 1 ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 py-1 text-gold lg:left-full lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:py-0"
                >
                  <ChevronRight className="h-5 w-5 rotate-90 lg:rotate-0" />
                </span>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
