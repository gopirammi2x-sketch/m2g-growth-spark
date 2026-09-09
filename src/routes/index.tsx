import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { CredibilityStrip } from "@/components/site/CredibilityStrip";
import { Services } from "@/components/site/Services";
import { HowWeWork } from "@/components/site/HowWeWork";
import { Industries } from "@/components/site/Industries";
import { WhyM2G } from "@/components/site/WhyM2G";
import { About } from "@/components/site/About";
import { CaseStudies } from "@/components/site/CaseStudies";
import { FinalCta } from "@/components/site/FinalCta";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "M2G | Digital, AI, Automation & E-Commerce";
const DESC =
  "M2G helps growing businesses with digital marketing, AI advertising, business automation, AI services and e-commerce solutions.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "M2G Business Consultants" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Mettugudisai Business Consultants (M2G)",
          description: DESC,
          telephone: "+91-96555-49132",
          email: "gopi.g@mettugudisai.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "10th Floor, Tower B, Prestige Shantiniketan, Whitefield Main Road, Whitefield",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560048",
            addressCountry: "IN",
          },
          founder: { "@type": "Person", name: "Gopi Gopal", jobTitle: "Founder & Business Consultant" },
          areaServed: "IN",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CredibilityStrip />
        <Services />
        <HowWeWork />
        <Industries />
        <WhyM2G />
        <About />
        <CaseStudies />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
