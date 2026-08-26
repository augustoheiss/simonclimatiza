import React, { useRef } from 'react';
import HeroSection from '../components/home/HeroSection';
import PainSection from '../components/home/PainSection';
import OutcomeSection from '../components/home/OutcomeSection';
import RoiCalculatorSection from '../components/home/RoiCalculatorSection';
import ComparisonTableSection from '../components/home/ComparisonTableSection';
import BridgeProcessSection from '../components/home/BridgeProcessSection';
import AcademiaAuthoritySection from '../components/home/AcademiaAuthoritySection';
import FaqSection from '../components/home/FaqSection';
import ScarcityCtaSection from '../components/home/ScarcityCtaSection';

export default function Home() {
  const painSectionRef = useRef(null);

  const scrollToPain = () => {
    painSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-slate-900 overflow-x-hidden">
      {/* 1. Hero Section — The Hook & Value Proposition */}
      <HeroSection onScrollToPain={scrollToPain} />

      {/* 2. Pain Section — The "Before" (The Cost of Commoditized HVAC) */}
      <PainSection sectionRef={painSectionRef} />

      {/* 3. Desired Outcome — The "After" (Thermodynamic & Legal Efficiency) */}
      <OutcomeSection />

      {/* 4. Interactive Lead Magnet — Interactive Energy ROI & PMOC Calculator */}
      <RoiCalculatorSection />

      {/* 5. Battlecard Comparison — Simon Engineering vs Traditional Market */}
      <ComparisonTableSection />

      {/* 6. The Bridge & Process — 3 Surgical Steps to Excellence */}
      <BridgeProcessSection />

      {/* 7. Authority & Education — Academia Simon HVAC */}
      <AcademiaAuthoritySection />

      {/* 8. Objections Killer — Interactive FAQ Accordion */}
      <FaqSection />

      {/* 9. Scarcity Trigger & Final Conversion */}
      <ScarcityCtaSection />
    </div>
  );
}
