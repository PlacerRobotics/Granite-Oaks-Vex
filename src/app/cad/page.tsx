import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SafetyGate from "@/components/SafetyGate";

export default function CadPage() {
  return (
    <SafetyGate>
    <div>
      <PageHero
        eyebrow="CAD 101"
        title="Designing your robot digitally"
        description="CAD lets you prototype mechanisms, catch collisions, and produce notebook-ready renders before you cut a single piece of metal. Onshape is what almost every VEX team uses — it's free, browser-based, and has an official VEX parts library."
      />

      <Section
        title="Onshape (recommended)"
        intro="Free for students and educators, runs in the browser, and is built for team collaboration in real time."
        resources={[
          {
            title: "Onshape Student Resources",
            url: "https://www.onshape.com/en/education/student-resources",
            description: "Free account signup and getting-started material for students.",
            tag: "Official",
          },
          {
            title: "VEX IQ & V5 Parts Libraries (Onshape)",
            url: "https://www.onshape.com/en/blog/vex-iq-vex-v5-parts-libraries",
            description: "Official, up-to-date VEX part libraries you can drop straight into assemblies.",
            tag: "Official",
          },
          {
            title: "Using Onshape to Design a VEX Robot in the Cloud",
            url: "https://learn.onshape.com/courses/using-onshape-to-design-a-vex-robot-in-the-cloud",
            description: "Full course: navigating Onshape, building assemblies, and collaborating as a team.",
            tag: "Docs",
          },
          {
            title: "Designing a VEX V5 Robot with Onshape",
            url: "https://www.onshape.com/en/blog/vex-v5-robot-onshape",
            description: "Walkthrough blog post on modeling a V5 robot end to end.",
            tag: "Docs",
          },
        ]}
      />

      <Section
        title="Alternatives"
        resources={[
          {
            title: "\"Fusion 360 for VEX robotics\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=fusion+360+for+vex+robotics",
            description: "Fusion 360 is free for students and used by some higher-level teams; steeper learning curve than Onshape.",
            tag: "Video",
          },
        ]}
      />

      <Section
        title="Why CAD matters for judging"
        intro="A well-documented CAD process (screenshots, iteration history, exploded views) is one of the easiest ways to strengthen your engineering notebook and Design Award case."
        resources={[
          {
            title: "Engineering Notebook 101",
            url: "/notebook",
            description: "How to actually document your CAD iterations, not just the final design.",
            tag: "Tool",
          },
        ]}
      />
    </div>
    </SafetyGate>
  );
}
