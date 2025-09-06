"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EssayInterface from "@/components/EssayInterface";
import ScoringResults from "@/components/ScoringResults";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <EssayInterface />
        <ScoringResults />
        <TestimonialsSection />
      </main>
    </div>
  );
}
