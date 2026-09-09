import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Globe2,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { CtaButton, Reveal, SectionHeading, WHATSAPP_URL, scrollToId } from "./shared";
import digitalImg from "@/assets/service-digital-marketing.webp";
import aiImg from "@/assets/service-ai-ads.webp";
import automationImg from "@/assets/service-automation.webp";
import aiBusinessImg from "@/assets/service-ai-business.webp";
import ecommerceImg from "@/assets/service-ecommerce.webp";
import websiteImg from "@/assets/ecom-website.webp";
import storeImg from "@/assets/ecom-store.webp";
import marketplaceImg from "@/assets/ecom-marketplace.webp";
import managementImg from "@/assets/ecom-management.webp";
import contentImg from "@/assets/ecom-content.webp";
import socialAdsImg from "@/assets/ecom-social-ads.webp";
import videoAdsImg from "@/assets/ecom-video-ads.webp";
import ecommerceAutomationImg from "@/assets/ecom-automation.webp";

const CORE_SERVICES = [
  {
    no: "01",
    icon: Target,
    id: "digital-marketing",
    title: "Digital Marketing & Lead Generation",
    tagline: "Reach. Engage. Convert.",
    desc: "Build brand visibility and generate quality leads through targeted digital marketing campaigns.",
  },
  {
    no: "02",
    icon: Bot,
    id: "ai-advertising",
    title: "AI Advertising",
    tagline: "Create. Impress. Promote.",
    desc: "Create powerful AI-generated advertisements, videos and social media creatives faster and affordably.",
  },
  {
    no: "03",
    icon: Workflow,
    id: "automation",
    title: "Sales & Marketing Automation",
    tagline: "Automate. Nurture. Convert.",
    desc: "Connect advertising, lead management, follow-up and sales into one intelligent workflow.",
  },
  {
    no: "04",
    icon: Sparkles,
    id: "ai-business-services",
    title: "AI-Powered Business Services",
    tagline: "Practical AI for Growing Businesses.",
    desc: "Save time, reduce repetitive work, generate more leads and serve customers better with practical AI.",
  },
  {
    no: "05",
    icon: ShoppingBag,
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    tagline: "Build. Sell. Advertise. Grow.",
    desc: "Build your online presence, establish marketplace visibility and promote products and services.",
  },
];

const PRIMARY_SERVICES = [
  {
    no: "01",
    icon: Target,
    id: "digital-marketing",
    image: digitalImg,
    alt: "Laptop and smartphone showing social advertising, audience targeting, lead generation and marketing analytics",
    title: "Digital Marketing & Lead Generation",
    tagline: "Reach. Engage. Convert.",
    desc: "Build your brand visibility and generate quality leads through targeted digital marketing campaigns.",
    flow: ["Reach", "Engage", "Leads", "Conversion"],
    points: [
      "Meta (Facebook & Instagram) Advertising",
      "Lead Generation Campaigns",
      "Audience Targeting & Retargeting",
      "Brand Awareness",
      "Campaign Optimization",
      "Performance Tracking",
    ],
  },
  {
    no: "02",
    icon: Bot,
    id: "ai-advertising",
    image: aiImg,
    alt: "AI-powered creative studio producing video advertisements and social media creative concepts",
    title: "AI Advertising",
    tagline: "Create. Impress. Promote.",
    desc: "Create powerful AI-generated advertisements, videos and social media creatives faster and at an affordable cost.",
    flow: ["Idea", "AI Creation", "Video / Creative", "Social Media"],
    points: [
      "AI Video Advertisements",
      "Social Media Creatives",
      "Reels & Short Videos",
      "Product Advertisements",
      "Service Advertisements",
      "Promotional Campaign Creatives",
    ],
    tags: ["Salons", "Gyms", "Clinics", "Supermarkets", "Manufacturers", "Retailers", "Products", "Services"],
  },
  {
    no: "03",
    icon: Workflow,
    id: "automation",
    image: automationImg,
    alt: "Simple connected automation journey from social media advertising through AI validation, CRM and sales conversion",
    title: "Sales & Marketing Automation",
    tagline: "Automate. Nurture. Convert.",
    desc: "Connect your advertising, lead management, follow-up and sales process into one intelligent workflow using n8n, AI and cloud-based automation.",
    flow: ["Social Ad", "Lead", "AI Validation", "CRM", "Follow-up", "Sales Team", "Conversion"],
    points: [
      "Lead Capture",
      "AI Lead Validation",
      "Lead Scoring",
      "CRM Integration",
      "WhatsApp & Email Follow-up",
      "Automated Notifications",
      "Sales Team Handover",
      "Customer Nurturing",
    ],
  },
];

const AI_BUSINESS_SERVICES = [
  ["01", "AI Lead Generation", "Find more prospects. Start more conversations. Grow your pipeline.", "AI-assisted prospect research, lead identification, outreach and follow-up across email, LinkedIn, WhatsApp and social platforms."],
  ["02", "AI Customer Support", "Respond faster without having to be available 24/7.", "AI chatbots, voice agents, knowledge bases and automated support workflows—with human oversight where it matters."],
  ["03", "AI Marketing & Content", "Keep your brand visible without creating everything from scratch.", "Blogs, social media, newsletters, email campaigns, ebooks, marketing copy and content workflows."],
  ["04", "Sales Funnels & Lead Nurturing", "Turn more enquiries into customers.", "Automated journeys designed to follow up, educate, engage and nurture prospects until they are ready to buy."],
  ["05", "AI Business Automation", "Let AI handle the repetitive work.", "Identify repetitive processes and build AI-powered workflows that connect everyday business activities."],
  ["06", "Market & Competitor Intelligence", "Know your market before making important decisions.", "AI-assisted market research, competitor analysis, customer research and opportunity discovery."],
  ["07", "SEO & AI Search Visibility", "Get discovered where your customers are searching.", "SEO, content optimization and strategies designed to improve visibility across traditional and AI-powered search."],
  ["08", "AI Ads & Conversion Systems", "Create marketing campaigns that are built to convert.", "AI-assisted ad creatives, copy, landing pages, testing and optimization—with human review at critical stages."],
  ["09", "AI Virtual Executive Assistance", "Give yourself more time to focus on the business.", "Email, calendar, meetings, appointments, research, documentation and day-to-day administrative support."],
  ["10", "Business Analytics & Reporting", "Turn your business data into better decisions.", "AI-assisted reporting, analysis, dashboards and insights that help reveal what is working and what needs attention."],
];

const ECOMMERCE_SERVICES = [
  { no: "01", title: "Website Design & Development", desc: "Professional, mobile-friendly websites designed to represent your business, products and services.", image: websiteImg, alt: "Laptop and mobile phone displaying a modern responsive business website" },
  { no: "02", title: "E-Commerce Website Setup", desc: "Build and configure online stores where customers can discover products and place orders.", image: storeImg, alt: "Laptop and phone displaying a generic online store and shopping cart" },
  { no: "03", title: "Amazon Business / Seller Setup", desc: "Set up and organize your seller presence, product listings and essential marketplace requirements.", image: marketplaceImg, alt: "Generic marketplace seller workspace with products, inventory and orders" },
  { no: "04", title: "Shopify Store Setup", desc: "Create and configure online stores, products, collections and essential store settings.", image: managementImg, alt: "Generic online store management workspace with product collections" },
  { no: "05", title: "Product Listing & Content", desc: "Create clear titles, descriptions, specifications and marketing content that present products professionally.", image: contentImg, alt: "Professional product photography and content creation workspace" },
  { no: "06", title: "Meta Advertising", desc: "Promote products and services through targeted Facebook and Instagram advertising campaigns.", image: socialAdsImg, alt: "Smartphone and laptop showing conceptual social media advertisements" },
  { no: "07", title: "TikTok Advertising", desc: "Use short-form video campaigns to introduce products and services to new audiences.", image: videoAdsImg, alt: "Smartphones displaying conceptual short-form product video advertising" },
  { no: "08", title: "E-Commerce Sales & Marketing Automation", desc: "Connect enquiries, follow-ups, marketing and repetitive e-commerce processes using AI and automation.", image: ecommerceAutomationImg, alt: "Simple connected workflow linking a store enquiry to AI, CRM and customer follow-up" },
];

function Flow({ items }: { items: string[] }) {
  return (
    <ol aria-label="Service journey" className="mt-6 flex flex-wrap items-center gap-2">
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-2">
          <span className="rounded-full border border-brand/25 bg-brand/8 px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.08em] text-brand-dark">
            {item}
          </span>
          {index < items.length - 1 ? <ArrowRight aria-hidden className="h-3.5 w-3.5 text-premium" /> : null}
        </li>
      ))}
    </ol>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title={<>Five practical solutions.<br className="hidden sm:block" /> One business growth partner.</>}
            subtitle="From generating leads and creating powerful advertisements to automating business processes and building your online presence, M2G helps growing businesses use Digital, AI and Automation to work smarter and grow."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CORE_SERVICES.map((service, index) => (
            <Reveal key={service.id} as="li" delay={index * 55}>
              <article className="lift flex h-full flex-col border-t-2 border-brand bg-cream p-5 shadow-soft hover:border-premium">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-white"><service.icon className="h-4.5 w-4.5" /></span>
                  <span className="font-display text-xs font-extrabold text-premium">{service.no}</span>
                </div>
                <h3 className="mt-5 font-display text-sm font-extrabold uppercase leading-snug text-navy">{service.title}</h3>
                <p className="mt-2 text-xs font-bold text-brand-dark">{service.tagline}</p>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">{service.desc}</p>
                <button type="button" onClick={() => scrollToId(service.id)} className="mt-5 inline-flex items-center gap-1.5 text-left font-display text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-navy transition-colors hover:text-brand-dark">
                  Explore Service <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20 space-y-20 lg:mt-28 lg:space-y-28">
          {PRIMARY_SERVICES.map((service, index) => (
            <Reveal key={service.id} as="article">
              <div id={service.id} className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={`group overflow-hidden rounded-3xl border border-border bg-navy shadow-lift transition-colors hover:border-brand/60 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={service.image} alt={service.alt} width={1280} height={960} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/12 text-brand-dark ring-1 ring-brand/25"><service.icon className="h-5 w-5" /></span>
                    <span className="eyebrow">{service.no} — Core Service</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold uppercase leading-tight text-logo-blue sm:text-[2rem]">{service.title}</h3>
                  <p className="mt-3 font-display text-base font-extrabold text-brand-dark">{service.tagline}</p>
                  <div className="gold-rule mt-5" />
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{service.desc}</p>
                  {service.tags ? <ul className="mt-5 flex flex-wrap gap-1.5">{service.tags.map((tag) => <li key={tag} className="rounded-full border border-border bg-cream px-2.5 py-1 text-[0.7rem] font-semibold text-navy/70">{tag}</li>)}</ul> : null}
                  <Flow items={service.flow} />
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.points.map((point) => <li key={point} className="flex gap-2.5 text-sm text-ink/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /><span>{point}</span></li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal as="article">
            <div id="ai-business-services" className="scroll-mt-28">
              <div className="grid items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
                <div className="group overflow-hidden rounded-3xl border border-border bg-navy shadow-lift hover:border-brand/60">
                  <img src={aiBusinessImg} alt="Growing business team connected to lead generation, support, marketing, sales, automation, research and analytics" width={1536} height={1024} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div>
                  <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand/12 text-brand-dark ring-1 ring-brand/25"><Sparkles className="h-5 w-5" /></span><span className="eyebrow">04 — Core Service</span></div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold uppercase leading-tight text-logo-blue sm:text-[2rem]">AI-Powered Business Services</h3>
                  <p className="mt-3 font-display text-base font-extrabold text-brand-dark">Practical AI for Growing Businesses.</p>
                  <div className="gold-rule mt-5" />
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">Practical AI solutions that help entrepreneurs save time, reduce repetitive work, generate more leads and serve customers better.</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-center font-display text-xs font-extrabold uppercase text-navy"><span className="bg-cream px-4 py-3">One Business</span><span className="text-premium">+</span><span className="bg-cream px-4 py-3">Multiple AI Solutions</span><span className="text-premium">=</span><span className="bg-brand px-4 py-3 text-white">Smarter Growth</span></div>
                </div>
              </div>
              <div className="mt-10 grid gap-3 md:grid-cols-2">
                {AI_BUSINESS_SERVICES.map(([no, title, tagline, desc]) => (
                  <details key={no} className="group border border-border bg-cream open:border-brand/35 open:bg-white">
                    <summary className="flex cursor-pointer list-none items-center gap-4 p-5 marker:hidden">
                      <span className="font-display text-xs font-extrabold text-premium">{no}</span>
                      <span className="min-w-0 flex-1"><span className="block font-display text-sm font-extrabold text-navy">{title}</span><span className="mt-1 block text-xs font-semibold text-brand-dark">{tagline}</span></span>
                      <ChevronDown className="h-4 w-4 shrink-0 text-navy transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal as="article">
            <div id="ecommerce-solutions" className="scroll-mt-28">
              <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                <div className="lg:order-2">
                  <div className="group overflow-hidden rounded-3xl border border-border bg-navy shadow-lift hover:border-brand/60">
                    <img src={ecommerceImg} alt="Small product business moving from an offline shop to a website, online store, digital advertising, customers and fulfilment" width={1536} height={1024} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                </div>
                <div className="lg:order-1">
                  <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand/12 text-brand-dark ring-1 ring-brand/25"><ShoppingBag className="h-5 w-5" /></span><span className="eyebrow">05 — Core Service</span></div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold uppercase leading-tight text-logo-blue sm:text-[2rem]">E-Commerce Solutions</h3>
                  <p className="mt-3 font-display text-base font-extrabold text-brand-dark">Build. Sell. Advertise. Grow.</p>
                  <div className="gold-rule mt-5" />
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">From building your website and online store to marketplace setup and digital advertising, we help businesses establish and grow their online presence.</p>
                  <Flow items={["Business", "Website", "Online Store", "Marketplace", "Social Ads", "Customers", "Sales"]} />
                </div>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {ECOMMERCE_SERVICES.map((service) => (
                  <article key={service.no} className="lift group overflow-hidden border border-border bg-white shadow-soft hover:border-brand/50">
                    <div className="aspect-[4/3] overflow-hidden bg-cream"><img src={service.image} alt={service.alt} width={768} height={768} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                    <div className="p-5"><span className="text-xs font-extrabold text-premium">{service.no}</span><h4 className="mt-2 font-display text-sm font-extrabold leading-snug text-navy">{service.title}</h4><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{service.desc}</p></div>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-center text-xs text-muted-foreground">Marketplace and store setup services are independent implementation support; M2G does not claim official platform partnerships.</p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-20 bg-navy px-4 py-16 sm:px-6 lg:mt-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Globe2 className="mx-auto h-8 w-8 text-brand" />
          <h3 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">Which part of your business<br className="hidden sm:block" /> do you want to grow?</h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-beige/75">Whether you need more leads, better advertising, smarter automation, AI-powered business support or an online e-commerce presence, let&apos;s discuss the right solution for your business.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><CtaButton onClick={() => scrollToId("contact")}>Get a Free Consultation <ArrowRight className="h-4 w-4" /></CtaButton><CtaButton variant="outline" href={WHATSAPP_URL} className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</CtaButton></div>
        </div>
      </Reveal>
    </section>
  );
}