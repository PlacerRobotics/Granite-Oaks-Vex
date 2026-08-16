import PageHero from "@/components/PageHero";
import TeamLookup from "@/components/TeamLookup";

export default function LookupPage() {
  return (
    <div>
      <PageHero
        eyebrow="Team & Event Lookup"
        title="Look up any VEX team"
        description="Live data straight from the official RobotEvents API — search a team number to see who they are and which events they've attended."
      />
      <TeamLookup />
    </div>
  );
}
