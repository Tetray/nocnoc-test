const services = [
  {
    index: "01",
    title: "Product Design",
    description:
      "End-to-end design for digital products — research, interaction, interface and systems for teams building at scale.",
  },
  {
    index: "02",
    title: "Design Strategy",
    description:
      "Clarity before craft — positioning, direction and roadmaps that give product decisions a foundation.",
  },
];

export default function Services() {
  return (
    <section className="border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
          03 — Services
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0">
          {services.map((service, i) => (
            <div
              key={service.index}
              className={`flex flex-col gap-4 md:px-10 ${
                i === 0 ? "md:border-r md:border-foreground/10 md:pl-0" : "md:pr-0"
              }`}
            >
              <span className="text-xs text-foreground/40">{service.index}</span>
              <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                {service.title}
              </h3>
              <p className="max-w-md leading-relaxed text-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
