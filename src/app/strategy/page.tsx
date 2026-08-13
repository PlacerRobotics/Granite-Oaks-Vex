import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export default function StrategyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Competition & Strategy"
        title="Game rules, Q&A, and match strategy basics"
        description="Every season starts with a new game and a new manual. Read it fully before you design anything — most early-season design mistakes come from skipping rules."
      />

      <Section
        title="Official game info"
        resources={[
          {
            title: "VEX Robotics — Get Started",
            url: "https://www.vexrobotics.com/support/get-started",
            description: "Links to the current season's game manual and resources by program.",
            tag: "Official",
          },
          {
            title: "Virtual Skills (vrskills.vex.com)",
            url: "https://vrskills.vex.com/",
            description: "Practice autonomous and driver skills runs online.",
            tag: "Official",
          },
        ]}
      />

      <Section
        title="Q&A and rules clarifications"
        intro="Official rules questions get answered through your program's official Q&A system — always check there before assuming a rule works a certain way. The VEX Forum is the best place to see how other teams are interpreting tricky rules."
        resources={[
          {
            title: "VEX Forum",
            url: "https://www.vexforum.com/",
            description: "Search past rules discussions, or ask your own strategy question.",
            tag: "Forum",
          },
        ]}
      />

      <Section
        title="Match strategy basics"
        intro="Understanding scoring priorities, alliance selection, and autonomous win-points matters as much as build quality once you're at events."
        resources={[
          {
            title: "\"VEX alliance selection strategy\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+alliance+selection+strategy",
            description: "How picking order and alliance strategy work at events.",
            tag: "Video",
          },
          {
            title: "\"VEX match strategy breakdown\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+match+strategy+breakdown",
            description: "Film review style breakdowns of high-level matches, season to season.",
            tag: "Video",
          },
        ]}
      />
    </div>
  );
}
