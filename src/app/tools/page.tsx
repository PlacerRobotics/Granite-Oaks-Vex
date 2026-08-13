import PageHero from "@/components/PageHero";
import GearRatioCalculator from "@/components/GearRatioCalculator";
import SafetyGate from "@/components/SafetyGate";

export default function ToolsPage() {
  return (
    <SafetyGate>
    <div>
      <PageHero
        eyebrow="Tools"
        title="Quick calculators"
        description="Small utilities for common VEX math, so you don't have to redo it by hand every time you change gearing."
      />

      <GearRatioCalculator />
    </div>
    </SafetyGate>
  );
}
