import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SafetyGate from "@/components/SafetyGate";

export default function BuildingPage() {
  return (
    <SafetyGate>
    <div>
      <PageHero
        eyebrow="Building 101"
        title="Drivetrains, mechanisms, and structure"
        description="The physical basics every new team needs before touching CAD or code: how to build a robot that survives a full match."
      />

      <Section
        title="Start here"
        intro="Official build instructions and part references for whichever kit you're on."
        resources={[
          {
            title: "VEX Get Started (Build)",
            url: "https://www.vexrobotics.com/support/get-started",
            description: "Official setup guides for classrooms, teams, and home learning.",
            tag: "Official",
          },
          {
            title: "VEX Build Instructions & Downloads",
            url: "https://www.vexrobotics.com/downloads/builds",
            description: "Downloadable assembly instructions for GO, IQ, EXP, and V5.",
            tag: "Official",
          },
          {
            title: "VEX Library (kb.vex.com)",
            url: "https://kb.vex.com/hc/en-us",
            description: "Searchable knowledge base covering every VEX platform.",
            tag: "Official",
          },
        ]}
      />

      <Section
        title="Drivetrains"
        intro="Your drivetrain is the single most important subsystem — get it reliable before anything else. Tank drive (simple, high traction) and X-drive/H-drive (strafing, more complex) are the two most common starting points."
        resources={[
          {
            title: "VEX V5 Knowledge Base — Drivetrain articles",
            url: "https://kb.vex.com/hc/en-us/categories/360002333191-V5",
            description: "Official V5 category covering drivetrain build and config topics.",
            tag: "Official",
          },
          {
            title: "\"VEX drivetrain build tank vs x-drive\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+drivetrain+build+tank+vs+x-drive",
            description: "Curated search — compare build approaches across top teams' videos.",
            tag: "Video",
          },
        ]}
      />

      <Section
        title="Common mechanisms"
        intro="Lifts, claws, intakes, and flywheels show up in nearly every game. Learn the mechanism families, not just one season's specific build."
        resources={[
          {
            title: "\"VEX lift mechanisms explained\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+lift+mechanism+explained",
            description: "Four-bar, six-bar, and linear slide lift comparisons.",
            tag: "Video",
          },
          {
            title: "\"VEX intake design tutorial\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+intake+design+tutorial",
            description: "Roller, claw, and conveyor intake design walkthroughs.",
            tag: "Video",
          },
        ]}
      />

      <Section
        title="Gear ratios & motion basics"
        intro="Understanding torque vs. speed tradeoffs early will save you a lot of re-builds. Pair this with the gear ratio calculator in Tools."
        resources={[
          {
            title: "VEX motor & gear ratio reference",
            url: "https://kb.vex.com/hc/en-us/categories/360002333191-V5",
            description: "Official specs for V5 Smart Motors and gearing options.",
            tag: "Official",
          },
          {
            title: "Gear Ratio Calculator",
            url: "/tools",
            description: "Quick tool on this site — plug in gears, get speed/torque tradeoffs.",
            tag: "Tool",
          },
        ]}
      />
    </div>
    </SafetyGate>
  );
}
