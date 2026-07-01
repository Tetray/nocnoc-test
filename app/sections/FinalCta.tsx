export default function FinalCta() {
  return (
    <section
      id="start-conversation"
      className="scroll-mt-20 border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
          05 — Start a Conversation
        </p>
        <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
          Tell us about your product, your team, or the problem you&apos;re
          trying to solve.
        </h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="mailto:hello@nocnoc.studio"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            Start a conversation
          </a>
          <span className="text-sm text-foreground/60">hello@nocnoc.studio</span>
        </div>
      </div>
    </section>
  );
}
