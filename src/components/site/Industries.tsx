import {
  Building2,
  Car,
  Dumbbell,
  Factory,
  GraduationCap,
  Home,
  Scissors,
  ShoppingCart,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Reveal, SectionHeading } from "./shared";

const INDUSTRIES = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Stethoscope, label: "Healthcare & Clinics" },
  { icon: Scissors, label: "Salons & Beauty" },
  { icon: Dumbbell, label: "Gyms & Fitness" },
  { icon: ShoppingCart, label: "Retail & Supermarkets" },
  { icon: Home, label: "Real Estate" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Professional Services" },
  { icon: Car, label: "Automotive" },
  { icon: Sparkles, label: "Other B2B & B2C Businesses" },
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

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((item, i) => (
            <Reveal key={item.label} delay={i * 50} as="li">
              <div className="lift flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-white px-4 py-7 text-center shadow-soft hover:border-gold/50">
                <item.icon className="h-6 w-6 shrink-0 text-gold-dark" strokeWidth={1.5} />
                <span className="font-display text-[0.82rem] font-bold leading-snug text-navy">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
