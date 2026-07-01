export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#" className="text-sm font-medium tracking-tight">
          Nocnoc
        </a>
        <span className="text-xs text-foreground/50">Seoul — London</span>
      </div>
    </header>
  );
}
