"use client";

import AboutUs from "@/components/About/AboutUsSection";
import CommitmentSection from "@/components/About/CommitmentSection";
import QualitySection from "@/components/About/QualitySection";
import HeadquartersSection from "@/components/About/HeadquartersSection";

export default function About() {
  return (
    <div>
      <AboutUs />
      <CommitmentSection />
      <QualitySection />
      <HeadquartersSection />
    </div>
  );
}
