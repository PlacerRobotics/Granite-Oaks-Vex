import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SafetyGate from "@/components/SafetyGate";

export default function NotebookPage() {
  return (
    <SafetyGate>
    <div>
      <PageHero
        eyebrow="Engineering Notebook 101"
        title="Documenting your season the way judges expect"
        description="The notebook is a running log of your team's design process — not a scrapbook you fill in the night before an event. Judges care about content and clarity, not length or decoration."
      />

      <Section
        title="Official templates"
        resources={[
          {
            title: "notebooks.vex.com",
            url: "https://notebooks.vex.com/",
            description: "Free official notebook templates, examples, and digital parts from VEX.",
            tag: "Official",
          },
        ]}
      />

      <Section
        title="What to actually put in it"
        intro="A strong notebook consistently shows: the problem you identified, the options you considered, why you picked one, what you built, how you tested it, and what you changed as a result. Every entry should be dated and specific."
        resources={[
          {
            title: "\"VEX engineering notebook example\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+engineering+notebook+example",
            description: "Walkthroughs of real, high-scoring notebooks from past seasons.",
            tag: "Video",
          },
          {
            title: "\"how to write a robotics engineering notebook\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=how+to+write+a+robotics+engineering+notebook",
            description: "General structure and habits for keeping a notebook up to date weekly.",
            tag: "Video",
          },
        ]}
      />

      <Section
        title="Common mistakes"
        intro="Backfilling entries right before an event, writing only about the final robot with no design history, skipping failed ideas, and not documenting testing/data are the most common reasons notebooks score lower than the robot deserves."
        resources={[
          {
            title: "Judging & Interview Prep",
            url: "/judging",
            description: "How the notebook feeds directly into your judges' interview.",
            tag: "Tool",
          },
        ]}
      />
    </div>
    </SafetyGate>
  );
}
