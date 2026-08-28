import { ArrowRight, Bot, Check, Target, Workflow } from "lucide-react";
import { Reveal, SectionHeading, scrollToId } from "./shared";

const SERVICES = [
  {
    no: "01",
    icon: Target,
    title: "Digital Marketing & Lead Generation",
    tagline: "Reach. Engage. Convert.",
    desc: "Build your brand visibility and generate quality leads through targeted digital campaigns.",
    points: [
      "Meta (Facebook & Instagram) Ad Campaigns",
      "Lead Generation Campaigns",
      "Audience Targeting & Retargeting",
      "Funnel Building & Optimization",
      "Brand Awareness & Engagement",
      "Performance Tracking & Reporting",
    ],
  },
  {
    no: "02",
    icon: Bot,
    title: "AI Advertising",
    tagline: "Powerful Creatives. Faster & Affordable.",
    desc: "Create engaging AI-powered video advertisements and social creatives with a shorter turnaround time and a more affordable production approach.",
    tags: [
      "Salons",
      "Gyms",
      "Clinics",
      "Supermarkets",
      "Manufacturers",
      "Retailers",
      "Service Businesses",
      "Product Companies",
      "And More",
    ],
    points: [
      "AI Ad Creatives & Videos",
      "Short Videos & Reels",
      "Product & Service Promotions",
      "Faster Creative Production",
      "Affordable Advertising Content",
    ],
  },
  {
    no: "03",
    icon: Workflow,
    title: "Sales & Marketing Automation",
    tagline: "Automate. Nurture. Close.",
    desc: "Connect your advertising, lead management, follow-up and sales process into one smarter workflow using n8n, AI and cloud automation.",
    points: [
      "Ad → Lead → AI Lead Validation",
      "CRM Integration",
      "Automated Email, WhatsApp & SMS Follow-ups",
      "Lead Scoring & Segmentation",
      "Sales Team Notifications",
      "End-to-End Automation with n8n + AI + Cloud",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Three practical solutions.
                <br className="hidden sm:block" /> One growth journey.
              </>
            }
            subtitle="Use one vertical on its own — or connect all three to build a smarter path from visibility to lead generation and sales."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 100} as="article">
              <div className="lift group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft hover:border-gold/50">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/12 text-gold-dark ring-1 ring-gold/25 transition-colors group-hover:bg-gold group-hover:text-navy">
                    <s.icon className="h-5.5 w-5.5" />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-navy/10">{s.no}</span>
                </div>

                <h3 className="mt-6 font-display text-xl font-extrabold leading-snug text-navy">{s.title}</h3>
                <p className="mt-1.5 text-sm font-bold text-gold-dark">{s.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                {s.tags ? (
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border bg-cream px-2.5 py-1 text-[0.7rem] font-semibold text-navy/70"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <ul className="mt-6 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-ink/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => scrollToId("contact")}
                  className="mt-7 inline-flex items-center gap-2 self-start font-display text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold-dark"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="mx-auto max-w-4xl rounded-3xl border border-gold/25 bg-cream px-7 py-10 text-center sm:px-12">
            <h3 className="font-display text-2xl font-extrabold leading-snug text-navy sm:text-3xl">
              We don&apos;t believe every business needs the same solution.
            </h3>
            <div className="gold-rule mx-auto mt-5" />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We first understand your audience, offer and sales process. Then we recommend the right combination of
              digital marketing, AI advertising and automation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
