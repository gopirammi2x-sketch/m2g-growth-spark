import { EMAIL, Logo, PHONE_TEL, scrollToId } from "./shared";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Industries", id: "industries" },
  { label: "How We Work", id: "how-we-work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const SERVICES = [
  { label: "Digital Marketing & Lead Generation", id: "digital-marketing" },
  { label: "AI Advertising", id: "ai-advertising" },
  { label: "Sales & Marketing Automation", id: "automation" },
  { label: "AI-Powered Business Services", id: "ai-business-services" },
  { label: "E-Commerce Solutions", id: "ecommerce-solutions" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-2 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-beige/65">
              Driving business growth through Digital Marketing, AI Advertising and Automation.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-gold">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(l.id)}
                    className="text-sm text-beige/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-gold">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(s.id)}
                    className="text-left text-sm text-beige/70 transition-colors hover:text-gold"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-beige/70">
              <li>
                <a href={PHONE_TEL} className="transition-colors hover:text-gold">
                  +91 96555 49132
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-gold">
                  {EMAIL}
                </a>
              </li>
              <li>Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-beige/50">
            © 2026 Mettugudisai Business Consultants (M2G). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
