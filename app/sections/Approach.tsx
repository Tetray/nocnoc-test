const principles = [
  {
    index: "01",
    title: "See clearly.",
    description:
      "We start by understanding the real problem — the market, the users, the constraints — before proposing a direction.",
  },
  {
    index: "02",
    title: "Shape precisely.",
    description:
      "Every decision is deliberate. Interfaces, systems and details are refined until nothing is arbitrary.",
  },
  {
    index: "03",
    title: "Launch intelligently.",
    description:
      "We ship in a way that lets teams learn, adapt and grow the product with confidence.",
  },
];

export default function Approach() {
  return (
    <section className="border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
          04 — Approach
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.index} className="flex flex-col gap-5">
              <span className="text-5xl font-light text-foreground/20">
                {principle.index}
              </span>
              <h3 className="text-2xl font-medium tracking-tight">
                {principle.title}
              </h3>
              <p className="leading-relaxed text-foreground/70">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
