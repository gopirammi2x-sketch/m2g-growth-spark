import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import m2gLogo from "@/assets/m2g-logo.png.asset.json";

export const WHATSAPP_URL = "https://wa.me/919655549132";
export const PHONE_TEL = "tel:+919655549132";
export const EMAIL = "gopi.g@mettugudisai.com";

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ animationDelay: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}

export function Logo({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  return (
    <span className={cn("flex items-center", className)}>
      <img
        src={m2gLogo.url}
        alt="M2G Business Consultants — Digital, AI, Automation"
        width={220}
        height={147}
        className={cn(
          "h-11 w-auto object-contain sm:h-12",
          variant === "light" && "rounded-lg bg-white/95 px-2.5 py-1.5",
        )}
      />
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow ? <p className={cn("eyebrow", light && "text-gold")}>{eyebrow}</p> : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.7rem]",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      <div className={cn("gold-rule mt-5", align === "center" && "mx-auto")} />
      {subtitle ? (
        <p className={cn("mt-5 text-base leading-relaxed", light ? "text-beige/80" : "text-muted-foreground")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function CtaButton({
  children,
  onClick,
  href,
  variant = "gold",
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "gold" | "outline" | "navy";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-[0.78rem] font-extrabold uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";
  const styles = {
    gold: "bg-gold text-white shadow-[var(--shadow-gold)] hover:bg-gold-dark hover:text-white hover:-translate-y-0.5",
    outline: "border border-navy/20 bg-white/70 text-navy hover:border-gold hover:text-gold-dark hover:-translate-y-0.5",
    navy: "bg-navy text-white hover:bg-navy-2 hover:-translate-y-0.5",
  }[variant];

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(base, styles, className)}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cn(base, styles, className)}>
      {children}
    </button>
  );
}
