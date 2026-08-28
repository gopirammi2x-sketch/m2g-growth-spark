import { ArrowRight, Activity, MessageCircle, Sparkles, TrendingUp, Users } from "lucide-react";
import { CtaButton, Reveal, WHATSAPP_URL, scrollToId } from "./shared";
import heroImage from "@/assets/hero-ecosystem.webp";

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
            Digital + AI + Automation — connected into one growth system that attracts the right audience, generates
            better leads and moves enquiries towards conversion.
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
          <div className="overflow-hidden rounded-3xl border border-navy/10 bg-navy shadow-lift">
            <img
              src={heroImage}
              width={1280}
              height={1024}
              fetchPriority="high"
              decoding="async"
              alt="Business growth ecosystem connecting digital marketing, AI, advertising, leads, automation, sales and analytics"
              className="h-full w-full object-cover"
            />
          </div>

          <FloatCard
            icon={Users}
            label="Digital Marketing"
            value="Reach"
            delay="0s"
            className="-left-2 top-10 sm:-left-8 lg:-left-10"
          />
          <FloatCard
            icon={Activity}
            label="Automation"
            value="Connected"
            delay="1.4s"
            className="-right-2 top-1/2 sm:-right-6"
          />
          <FloatCard
            icon={TrendingUp}
            label="Outcome"
            value="Growth"
            delay="2.6s"
            className="-bottom-6 left-6 sm:left-10"
          />
        </Reveal>
      </div>
    </section>
  );
}
