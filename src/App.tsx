import { useState } from "react";
import { ClinicalResults } from "./components/ClinicalResults";
import { CompareSection } from "./components/CompareSection";
import { DoctorSection } from "./components/DoctorSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCTA } from "./components/FinalCTA";
import { Hero } from "./components/Hero";
import { OrderFormSection } from "./components/OrderFormSection";
import { StoryTimeline } from "./components/StoryTimeline";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { useOfferState } from "./hooks/useOfferState";

function App() {
  const { time, packsLeft } = useOfferState();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="landing-bright relative min-h-screen overflow-x-clip bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.98)_52%,rgba(255,255,255,1)_100%),linear-gradient(90deg,transparent_0%,rgba(15,23,42,0.03)_50%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-[4%] top-[10%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(148,163,184,0.06),_transparent_72%)] blur-2xl" />
      <div className="pointer-events-none absolute right-[2%] top-[30%] h-20 w-20 rounded-full bg-[radial-gradient(circle,_rgba(71,85,105,0.05),_transparent_74%)] blur-2xl" />

      <main className="relative z-10">
        <Hero packsLeft={packsLeft} />
        <StoryTimeline />
        <DoctorSection />
        <ClinicalResults />
        <CompareSection />
        <TestimonialsSection />
        <OrderFormSection minutes={time.minutes} seconds={time.seconds} />
        <FaqSection
          activeIndex={activeFaq}
          onToggle={(index) => setActiveFaq((current) => (current === index ? null : index))}
        />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
