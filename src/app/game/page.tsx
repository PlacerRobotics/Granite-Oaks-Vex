import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";
import Callout from "@/components/Callout";

export default function GameBreakdownPage() {
  return (
    <div>
      <PageHero
        eyebrow="2026-2027 Season"
        title="Override"
        description="This season's V5RC game, straight from the source. Read the manual yourself before trusting anyone's summary — ours included."
      />

      <Module number="01" title="Official reveal video">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/68NxYIAzbkY"
            title="VEX V5 Robotics Competition: Override | 2026-2027 Game"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Module>

      <Module number="02" title="Game manual & rules">
        <LinkGrid
          resources={[
            {
              title: "VEX V5 Override: Game Manual & Rules",
              url: "https://www.vexrobotics.com/v5/competition/vrc-current-game",
              description: "Official, always-current landing page for the game manual and field specs.",
              tag: "Official",
            },
            {
              title: "V5RC Override Game Manual (direct link)",
              url: "https://link.vex.com/override-online",
              description: "Direct link to the current online manual — check the version number before relying on any rule.",
              tag: "Official",
            },
          ]}
        />
      </Module>

      <Module number="03" title="Rough scoring summary">
        <Callout>
          This is a simplified overview, not a rules source. The manual above is the only
          authoritative reference — always confirm anything that affects a design decision
          there or in the official Q&amp;A.
        </Callout>
        <ul className="list-disc space-y-2 pl-5">
          <li>12&apos; x 12&apos; field, 2v2 alliance play, 0:15 Autonomous followed by 1:45 Driver Control.</li>
          <li>Score by stacking Pins and Cups on Goals, setting Toggles to your alliance color, and ending the match with your robot in the contested Midfield.</li>
          <li>Alliance-color Pins score 5 points in a Goal; a yellow Pin scores 10 points for whichever alliance owns the Toggle in that quadrant.</li>
          <li>Whichever alliance scores more during Autonomous earns a 12-point bonus at the end of the match, plus each alliance can earn an Autonomous Win Point for completing assigned tasks.</li>
        </ul>
      </Module>

      <Module number="04" title="Official Q&A">
        <p>
          The only source for official rules clarifications — answers from the Game Design
          Committee are as binding as the written manual itself. Only registered teams,
          certified Event Partners, and certified Head Referees can ask questions, but
          anyone can read existing answers.
        </p>
        <LinkGrid
          resources={[
            {
              title: "Official Q&A: V5RC 2026-2027 Override",
              url: "https://www.robotevents.com/V5RC/2026-2027/QA/guidelines",
              description: "Search existing rules questions or submit your own (registered teams only).",
              tag: "Official",
            },
          ]}
        />
      </Module>

      <Module number="05" title="Look up teams and events">
        <LinkGrid
          resources={[
            {
              title: "Team & Event Lookup",
              url: "/lookup",
              description: "Live team info and event results via the official RobotEvents API.",
              tag: "Tool",
            },
          ]}
        />
      </Module>
    </div>
  );
}
