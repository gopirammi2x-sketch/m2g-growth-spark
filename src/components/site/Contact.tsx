import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EMAIL, PHONE_TEL, Reveal } from "./shared";
import whatsappQr from "@/assets/whatsapp-qr-code.jpeg.asset.json";

const SERVICES = [
  "Digital Marketing & Lead Generation",
  "AI Advertising",
  "Sales & Marketing Automation",
  "AI-Powered Business Services",
  "E-Commerce Solutions",
  "Multiple Services",
];

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-beige/40 outline-none transition-colors focus:border-gold focus:bg-white/10";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: SERVICES[0],
    message: "",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      "New Consultation Request — M2G",
      "",
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(`https://wa.me/919655549132?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="eyebrow text-gold">Contact Us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl">
            Let&apos;s talk about your growth.
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-beige/75">
            Tell us what you are trying to achieve. Whether you need more leads, better advertisements or a connected
             sales process, practical AI support or an online store, let&apos;s start with a simple conversation.
          </p>

          <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-display text-lg font-extrabold text-white">Gopi Gopal</p>
            <p className="text-sm font-semibold text-gold">Founder &amp; Business Consultant</p>
          </div>

          <ul className="mt-6 space-y-4">
            {[
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Phone, label: "Phone", value: "+91 96555 49132", href: PHONE_TEL },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+91 96555 49132",
                href: "https://wa.me/919655549132",
              },
            ].map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/25 transition-colors group-hover:bg-gold group-hover:text-white">
                    <c.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-beige/50">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm font-semibold text-white transition-colors group-hover:text-gold">
                      {c.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/25">
                <MapPin className="h-4.5 w-4.5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-beige/50">Address</span>
                <address className="mt-0.5 text-sm not-italic leading-relaxed text-beige/85">
                  10th Floor, Tower B,
                  <br />
                  Prestige Shantiniketan, Whitefield Main Road,
                  <br />
                  Whitefield, Bengaluru – 560048
                </address>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-lift backdrop-blur sm:p-8"
          >
            <h3 className="font-display text-xl font-extrabold text-white">Request a free consultation</h3>
            <p className="mt-1.5 text-sm text-beige/60">Your details open a pre-filled WhatsApp message to our team.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-beige/70">Name</span>
                <input required value={form.name} onChange={set("name")} placeholder="Your name" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-beige/70">Business / Company Name</span>
                <input value={form.business} onChange={set("business")} placeholder="Company" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-beige/70">Phone / WhatsApp</span>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 ..."
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-beige/70">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-semibold text-beige/70">What service do you need?</span>
                <select value={form.service} onChange={set("service")} className={`${inputClass} appearance-none`}>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-navy text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-semibold text-beige/70">Message</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your business and goals"
                  className={`${inputClass} resize-none`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-display text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-white shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:bg-gold-dark hover:text-white"
            >
              Request a Free Consultation <ArrowRight className="h-4 w-4" />
            </button>

            <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-beige/70">
                Or scan to WhatsApp us directly
              </p>
              <img
                src={whatsappQr.url}
                alt="WhatsApp QR code for Gopi Gopal — scan to start a chat"
                width={180}
                height={180}
                className="h-44 w-44 rounded-xl object-contain ring-1 ring-white/10"
                loading="lazy"
              />
              <p className="max-w-[16rem] text-xs leading-relaxed text-beige/60">
                Scan this code with your WhatsApp camera to message Gopi directly.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
