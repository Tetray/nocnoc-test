function MarkCircle() {
  return <div className="absolute inset-10 rounded-full border border-foreground/30" />;
}

function MarkSquare() {
  return (
    <div className="absolute inset-10 border border-foreground/30">
      <div className="absolute -bottom-6 -right-6 h-16 w-16 border border-foreground/30 bg-background" />
    </div>
  );
}

function MarkLines() {
  return (
    <div className="absolute inset-10 flex flex-col justify-between">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="h-px w-full bg-foreground/20" />
      ))}
    </div>
  );
}

function MarkDots() {
  return (
    <div className="absolute inset-10 grid grid-cols-4 gap-6">
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
      ))}
    </div>
  );
}

const marks = [MarkCircle, MarkSquare, MarkLines, MarkDots];

const projects = [
  { index: "01", category: "Product Design" },
  { index: "02", category: "Design Strategy" },
  { index: "03", category: "Product Design" },
  { index: "04", category: "Design Strategy" },
];

export default function SelectedWork() {
  return (
    <section className="border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
          02 — Selected Work
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {projects.map((project) => {
            const Mark = marks[Number(project.index) % marks.length];
            return (
              <div key={project.index} className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden border border-foreground/15">
                  <span className="absolute left-4 top-4 text-xs text-foreground/40">
                    {project.index}
                  </span>
                  <Mark />
                </div>
                <div className="flex items-center justify-between border-t border-foreground/10 pt-4 text-sm">
                  <span className="text-foreground/80">Case Study {project.index}</span>
                  <span className="text-foreground/50">{project.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
