import Approach from "./sections/Approach";
import FinalCta from "./sections/FinalCta";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";
import Services from "./sections/Services";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <SelectedWork />
      <Services />
      <Approach />
      <FinalCta />
    </main>
  );
}
