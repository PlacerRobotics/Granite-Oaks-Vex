import PageHero from "@/components/PageHero";
import TeamLookup from "@/components/TeamLookup";
import SafetyGate from "@/components/SafetyGate";

export default function LookupPage() {
  return (
    <SafetyGate>
    <div>
      <PageHero
        eyebrow="Team & Event Lookup"
        title="Look up any VEX team"
        description="Live data straight from the official RobotEvents API — search a team number to see who they are and which events they've attended."
      />
      <TeamLookup />
    </div>
    </SafetyGate>
  );
}
