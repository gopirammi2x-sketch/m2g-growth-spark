import { ArrowRight, Activity, BarChart3, Bot, MessageCircle, Sparkles, TrendingUp, Users } from "lucide-react";
import { CtaButton, Reveal, WHATSAPP_URL, scrollToId } from "./shared";

function FloatCard({
  icon: Icon,
  label,
  value,
  className,
  delay,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  className: string;
  delay: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`float-slow absolute z-20 flex items-center gap-3 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-lift backdrop-blur ${className}`}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-dark">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-mute">{label}</span>
        <span className="block font-display text-base font-extrabold text-navy">{value}</span>
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-beige pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -left-40 h-[30rem] w-[30rem] rounded-full bg-navy/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <Reveal className="is-visible">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Digital • AI • Automation
          </p>

          <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]">
            Make your business
            <br />
            <span className="text-gold-dark">more visible</span>,{" "}
            <span className="text-gold-dark">more efficient</span>
            <br />
            &amp; <span className="text-gold-dark">more ready to grow</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We combine digital marketing, AI-powered advertising and sales automation to help businesses attract the
            right audience, generate better leads and move enquiries towards conversion.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton onClick={() => scrollToId("contact")}>
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
            </CtaButton>
            <CtaButton variant="outline" href={WHATSAPP_URL}>
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={120} className="is-visible relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-3xl border border-navy/10 bg-white p-3 shadow-lift">
            {/* browser bar */}
            <div className="flex items-center gap-1.5 px-2 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-navy/20" />
              <span className="ml-3 h-5 flex-1 rounded-md bg-cream" />
            </div>

            <div className="rounded-2xl bg-navy p-5 text-white">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-bold tracking-tight">Growth Dashboard</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Live
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {[
                  { icon: Users, k: "Reach", v: "84.2K" },
                  { icon: BarChart3, k: "CTR", v: "4.8%" },
                  { icon: TrendingUp, k: "Pipeline", v: "+165%" },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <s.icon className="h-4 w-4 text-gold" />
                    <p className="mt-2 text-[0.6rem] uppercase tracking-[0.12em] text-beige/60">{s.k}</p>
                    <p className="font-display text-sm font-extrabold">{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex h-28 items-end gap-2 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                {[32, 48, 40, 62, 55, 78, 70, 92].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-t-sm ${i > 4 ? "bg-gold" : "bg-white/25"}`}
                  />
                ))}
              </div>

              <div className="mt-4 space-y-2">
                {[
                  { icon: Bot, t: "AI ad creative generated", s: "Reel • 30s" },
                  { icon: Activity, t: "Lead validated & routed", s: "n8n workflow" },
                ].map((r) => (
                  <div key={r.t} className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
                    <r.icon className="h-4 w-4 shrink-0 text-gold" />
                    <span className="min-w-0 flex-1 truncate text-xs font-medium text-beige/90">{r.t}</span>
                    <span className="shrink-0 text-[0.6rem] uppercase tracking-[0.1em] text-beige/50">{r.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <FloatCard
            icon={Users}
            label="Leads Generated"
            value="1,245"
            delay="0s"
            className="-left-2 top-16 sm:-left-8 lg:-left-10"
          />
          <FloatCard
            icon={TrendingUp}
            label="Sales"
            value="+165%"
            delay="1.4s"
            className="-right-2 top-1/2 sm:-right-6"
          />
          <FloatCard
            icon={Activity}
            label="Automation"
            value="Active"
            delay="2.6s"
            className="-bottom-6 left-6 sm:left-10"
          />
        </Reveal>
      </div>
    </section>
  );
}
