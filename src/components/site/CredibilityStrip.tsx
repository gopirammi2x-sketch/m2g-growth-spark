const ITEMS = [
  "25+ Years of Business Experience",
  "Sales & Marketing",
  "Business Development",
  "Industrial & Powergen Exposure",
  "Digital • AI • Automation",
];

export function CredibilityStrip() {
  return (
    <div className="border-y border-gold/20 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-5 sm:px-6 lg:px-8">
        {ITEMS.map((item, i) => (
          <div key={item} className="flex items-center gap-6">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-navy/70">{item}</span>
            {i < ITEMS.length - 1 ? <span aria-hidden className="hidden h-1 w-1 rounded-full bg-gold sm:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
