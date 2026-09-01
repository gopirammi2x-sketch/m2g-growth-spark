import { ArrowRight, MessageCircle } from "lucide-react";
import { CtaButton, Reveal, WHATSAPP_URL, scrollToId } from "./shared";
import whatsappQr from "@/assets/whatsapp-qr-code.jpeg.asset.json";

export function FinalCta() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-beige px-6 py-14 text-center sm:px-14">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-[1.14] text-logo-blue sm:text-4xl">
              Ready to make your marketing smarter?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Let&apos;s discuss your business, your growth goals and where digital, AI or automation can make the
              biggest difference.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaButton onClick={() => scrollToId("contact")}>
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </CtaButton>
              <CtaButton variant="navy" href={WHATSAPP_URL}>
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </CtaButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
