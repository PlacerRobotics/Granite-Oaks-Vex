import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SafetyGate from "@/components/SafetyGate";

export default function CommunityPage() {
  return (
    <SafetyGate>
    <div>
      <PageHero
        eyebrow="Community"
        title="Forums, Discords, and channels worth following"
        description="Nearly every question you'll have this season has already been asked and answered by another team. These are the places to search first — and to ask when it hasn't been."
      />

      <Section
        title="Forums"
        resources={[
          {
            title: "VEX Forum",
            url: "https://www.vexforum.com/",
            description: "The main VEX community forum — programming, building, rules, and general discussion boards.",
            tag: "Forum",
          },
          {
            title: "r/VEXRobotics",
            url: "https://www.reddit.com/r/VEXRobotics/",
            description: "Reddit community for VEX teams — informal, good for quick questions and season chatter.",
            tag: "Community",
          },
        ]}
      />

      <Section
        title="Discord"
        intro="The VEX Forum maintains a running thread listing current public VEX Discord servers — server invites change often, so check there rather than following a possibly-dead link."
        resources={[
          {
            title: "VEX Public Discord Server List (VEX Forum thread)",
            url: "https://www.vexforum.com/t/vex-public-discord-server-list/47098",
            description: "Community-maintained, up-to-date list of active VEX Discord servers.",
            tag: "Forum",
          },
        ]}
      />

      <Section
        title="YouTube"
        resources={[
          {
            title: "VEX Robotics (official channel)",
            url: "https://www.youtube.com/vexrobotics",
            description: "Official builds, programming guides, and competition highlights.",
            tag: "Official",
          },
          {
            title: "\"VEX robotics team reveal\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+robotics+team+reveal",
            description: "Top teams' season reveal videos are one of the best ways to see full robots in action.",
            tag: "Video",
          },
          {
            title: "\"VEX robotics build tutorial\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+robotics+build+tutorial",
            description: "General build tutorials across skill levels.",
            tag: "Video",
          },
        ]}
      />

      <Section
        title="GitHub"
        intro="Beyond code libraries (see Coding 101), searching GitHub for a current game's name often surfaces open-sourced robot code from other teams."
        resources={[
          {
            title: "GitHub topic: vex-robotics",
            url: "https://github.com/topics/vex-robotics",
            description: "Repos tagged by the community — code, tools, and utilities from other teams.",
            tag: "GitHub",
          },
        ]}
      />
    </div>
    </SafetyGate>
  );
}
