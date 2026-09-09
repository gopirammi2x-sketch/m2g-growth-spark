import { Quote } from "lucide-react";
import { Reveal } from "./shared";
import founderPhoto from "@/assets/founder-gopi-gopal.jpg.asset.json";

const STATS = [
  { k: "25+", v: "Years Experience" },
  { k: "5", v: "Core Verticals" },
  { k: "AI", v: "Powered Marketing" },
  { k: "n8n", v: "Automation" },
];

const APPROACH = [
  "Understand the business first.",
  "Attract the right audience.",
  "Create compelling communication.",
  "Capture and qualify leads.",
  "Automate follow-up wherever it makes business sense.",
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal>
          <p className="eyebrow">Meet the Founder</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] text-logo-blue sm:text-4xl">
            Business experience meets
            <br className="hidden sm:block" /> AI-first marketing.
          </h2>
          <div className="gold-rule mt-5" />

          <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p className="font-display text-lg font-bold text-logo-blue">
              Young Minds. Experienced Thinking.
            </p>
            <p>
              We are a team of young and experienced professionals with 25+ years of corporate experience across MNCs,
              engineering, automotive, IT consulting and digital marketing.
            </p>
            <p>
              We help small and growing businesses improve brand visibility, generate quality leads and automate their
              marketing activities and establish an online presence using practical digital, AI-powered and e-commerce solutions.
            </p>
            <p>Our focus is simple: smarter marketing, better leads and improved business growth.</p>
          </div>

          <div className="mt-9 rounded-3xl border border-gold/25 bg-cream p-7">
            <p className="eyebrow">Our Approach</p>
            <ul className="mt-4 space-y-3">
              {APPROACH.map((a) => (
                <li key={a} className="flex gap-3 text-sm font-medium text-navy">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-cream p-8 shadow-soft">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
              <img
                src={founderPhoto.url}
                alt="Gopi Gopal — Founder & Business Consultant at M2G"
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-2xl object-cover ring-1 ring-gold/40"
              />
              <span className="min-w-0">
                <span className="block font-display text-xl font-extrabold text-navy">Gopi Gopal</span>
                <span className="block text-sm font-semibold text-gold-dark">Founder &amp; Business Consultant</span>
                <span className="mt-0.5 block text-xs text-mute">Bengaluru, Karnataka, India</span>
              </span>
            </div>

            <div className="mt-7 rounded-2xl border border-gold/20 bg-white p-5">
              <Quote className="h-5 w-5 text-gold" />
              <p className="mt-3 font-display text-sm font-bold leading-relaxed text-navy">
                Understand the business first — then build the marketing system around it.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.v} className="lift rounded-2xl border border-border bg-white px-5 py-6 text-center shadow-soft">
                  <p className="font-display text-3xl font-extrabold text-brand">{s.k}</p>
                  <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-mute">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
