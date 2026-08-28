import { Reveal, SectionHeading } from "./shared";
import manufacturing from "@/assets/ind-manufacturing.webp";
import healthcare from "@/assets/ind-healthcare.webp";
import salon from "@/assets/ind-salon.webp";
import gym from "@/assets/ind-gym.webp";
import retail from "@/assets/ind-retail.webp";
import realestate from "@/assets/ind-realestate.webp";
import education from "@/assets/ind-education.webp";
import professional from "@/assets/ind-professional.webp";
import automotive from "@/assets/ind-automotive.webp";
import other from "@/assets/ind-other.webp";

const INDUSTRIES = [
  { img: manufacturing, label: "Manufacturing", desc: "Promote products and reach B2B buyers.", alt: "Modern manufacturing facility with industrial machinery" },
  { img: healthcare, label: "Healthcare & Clinics", desc: "Attract patients and manage enquiries.", alt: "Doctor consulting a patient in a modern private clinic" },
  { img: salon, label: "Salons & Beauty", desc: "Fill appointment slots with local reach.", alt: "Premium modern salon interior with styling stations" },
  { img: gym, label: "Gyms & Fitness", desc: "Drive memberships and trial sign-ups.", alt: "Modern fitness centre with professional equipment" },
  { img: retail, label: "Retail & Supermarkets", desc: "Push offers and increase footfall.", alt: "Modern supermarket aisle with product displays" },
  { img: realestate, label: "Real Estate", desc: "Generate and qualify property enquiries.", alt: "Premium modern apartment interior" },
  { img: education, label: "Education", desc: "Fill batches with qualified admissions.", alt: "Modern training classroom with students and digital screen" },
  { img: professional, label: "Professional Services", desc: "Build authority and steady enquiries.", alt: "Modern consulting office meeting room" },
  { img: automotive, label: "Automotive", desc: "Bring buyers into showroom and service.", alt: "Modern automobile showroom interior" },
  { img: other, label: "Other B2B & B2C", desc: "Adaptable for product and service brands.", alt: "Abstract premium business growth visual" },
];

export function Industries() {
  return (
    <section id="industries" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Solutions for different types of businesses"
            subtitle="Our approach can be adapted for B2B, B2C, product-based and service-based businesses."
          />
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {INDUSTRIES.map((item, i) => (
            <Reveal key={item.label} delay={i * 50} as="li">
              <article className="lift group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-colors hover:border-gold/60">
                <div className="aspect-[4/3] overflow-hidden bg-cream">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={768}
                    height={576}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-4">
                  <h3 className="font-display text-[0.92rem] font-bold leading-snug text-navy">{item.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
