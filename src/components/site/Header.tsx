import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaButton, Logo, scrollToId } from "./shared";

const NAV = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Industries", id: "industries" },
  { label: "How We Work", id: "how-we-work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const SERVICE_LINKS = [
  { label: "Digital Marketing", id: "digital-marketing" },
  { label: "AI Advertising", id: "ai-advertising" },
  { label: "Sales & Marketing Automation", id: "automation" },
  { label: "AI-Powered Business Services", id: "ai-business-services" },
  { label: "E-Commerce Solutions", id: "ecommerce-solutions" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 10);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-white/90 backdrop-blur-md shadow-soft" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button type="button" onClick={() => go("home")} className="min-w-0 justify-self-start" aria-label="M2G home">
          <Logo />
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => item.id === "services" ? (
            <div key={item.id} className="group relative">
              <button type="button" onClick={() => go(item.id)} className="relative inline-flex items-center gap-1 text-sm font-semibold text-navy/80 transition-colors hover:text-gold-dark">
                Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="border border-border bg-white p-2 shadow-lift">
                  {SERVICE_LINKS.map((service) => <button key={service.id} type="button" onClick={() => go(service.id)} className="block w-full px-3 py-2.5 text-left text-xs font-semibold text-navy transition-colors hover:bg-cream hover:text-brand-dark">{service.label}</button>)}
                </div>
              </div>
            </div>
          ) : (
            <button key={item.id} type="button" onClick={() => go(item.id)} className="relative text-sm font-semibold text-navy/80 transition-colors hover:text-gold-dark after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full">{item.label}</button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <CtaButton className="hidden lg:inline-flex" onClick={() => go("contact")}>
            Get a Free Consultation
          </CtaButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-navy/15 bg-white text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-white transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[48rem] overflow-y-auto" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-4 py-3 sm:px-6">
          {NAV.map((item) => item.id === "services" ? (
            <div key={item.id} className="border-b border-border/60 py-3">
              <button type="button" onClick={() => go(item.id)} className="w-full text-left font-display text-sm font-bold text-navy">Services</button>
              <div className="mt-2 border-l-2 border-brand/30 pl-3">{SERVICE_LINKS.map((service) => <button key={service.id} type="button" onClick={() => go(service.id)} className="block w-full py-2 text-left text-xs font-semibold text-navy/70">{service.label}</button>)}</div>
            </div>
          ) : (
            <button key={item.id} type="button" onClick={() => go(item.id)} className="border-b border-border/60 py-3.5 text-left font-display text-sm font-bold text-navy last:border-0">{item.label}</button>
          ))}
          <CtaButton className="mt-4 mb-4 w-full" onClick={() => go("contact")}>
            Get a Free Consultation
          </CtaButton>
        </nav>
      </div>
    </header>
  );
}
