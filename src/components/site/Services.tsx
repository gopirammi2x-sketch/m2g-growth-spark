import { ArrowRight, Bot, Check, Target, Workflow } from "lucide-react";
import { Reveal, SectionHeading, scrollToId } from "./shared";
import digitalImg from "@/assets/service-digital-marketing.webp";
import aiImg from "@/assets/service-ai-ads.webp";
import automationImg from "@/assets/service-automation.webp";

const SERVICES = [
  {
    no: "01",
    icon: Target,
    id: "digital-marketing",
    image: digitalImg,
    alt: "Laptop and tablet showing social advertising, audience targeting, a leads dashboard and a conversion funnel",
    title: "Digital Marketing & Lead Generation",
    headline: (
      <>
        REACH. ENGAGE.
        <br />
        GENERATE LEADS. CONVERT.
      </>
    ),
    desc: "Build visibility and generate quality leads through targeted social campaigns, sharp audience targeting and optimised funnels.",
    points: [
      "Social Ad Campaigns",
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
    id: "ai-advertising",
    image: aiImg,
    alt: "AI creative studio generating advertisement previews for a salon, gym, clinic, supermarket and product brand",
    title: "AI Advertising",
    headline: (
      <>
        CREATE POWERFUL ADS.
        <br />
        FASTER WITH AI.
      </>
    ),
    desc: "Create engaging advertisements and social creatives in a shorter time and with a more affordable production approach.",
    tags: ["Salons", "Gyms", "Clinics", "Supermarkets", "Manufacturers", "Retailers", "Product Companies"],
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
    id: "automation",
    image: automationImg,
    alt: "Connected automation workflow linking a social ad, lead, AI validation, CRM, follow-up, sales team and conversion",
    title: "Sales & Marketing Automation",
    headline: (
      <>
        FROM FIRST CLICK
        <br />
        TO FINAL SALE.
      </>
    ),
    desc: "Connect advertising, lead management, follow-up and sales into one smarter workflow using n8n, AI and cloud automation.",
    tags: ["AI", "CRM", "n8n", "WhatsApp", "Email", "Lead Scoring", "Sales"],
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

        <div className="mt-16 space-y-16 lg:space-y-24">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={60} as="article">
              <div
                id={s.id}
                className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div
                  className={`overflow-hidden rounded-3xl border border-border bg-navy shadow-lift transition-colors group-hover:border-gold/60 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold/12 text-gold-dark ring-1 ring-gold/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-gold group-hover:text-cream">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="eyebrow">{s.no} — {s.title}</span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-[2rem]">
                    {s.headline}
                  </h3>
                  <div className="gold-rule mt-5" />
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{s.desc}</p>

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

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
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
                    className="mt-8 inline-flex items-center gap-2 font-display text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold-dark"
                  >
                    Talk to us about this <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
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
