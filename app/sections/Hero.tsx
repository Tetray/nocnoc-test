export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
        01 — Nocnoc
      </p>
      <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
        Product Design &amp; Strategy
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
        Nocnoc helps ambitious companies create meaningful products, services
        and design systems.
      </p>
      <div>
        <a
          href="#start-conversation"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
        >
          Start a conversation
        </a>
      </div>
    </section>
  );
}
