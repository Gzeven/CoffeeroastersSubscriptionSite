"use client";
import IntroSection from "@/components/Home/IntroSection";
import CoffeeCollectionSection from "@/components/Home/CoffeeCollectionSection";
import Benefits from "@/components/Home/BenefitsSection";
import HowItWorks from "@/components/Home/HowItWorksSection";

export default function Home() {
  return (
    <div>
      <main>
        <IntroSection />
        <CoffeeCollectionSection />
        <Benefits />
        <HowItWorks />
      </main>
    </div>
  );
}
