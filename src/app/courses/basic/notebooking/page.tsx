import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";

export default function BasicNotebookingCoursePage() {
  return (
    <div>
      <PageHero
        eyebrow="Basic Course · Notebooking"
        title="Documenting your season the way judges expect"
        description="The notebook is a running log of your team's design process — not a scrapbook you fill in the night before an event. Judges care about content and clarity, not length or decoration."
      />

      <Module number="01" title="What judges expect">
        <p>
          A strong notebook consistently shows: the problem you identified, the options you
          considered, why you picked one, what you built, how you tested it, and what you
          changed as a result. Every entry should be dated and specific.
        </p>
        <LinkGrid
          resources={[
            {
              title: "notebooks.vex.com",
              url: "https://notebooks.vex.com/",
              description: "Free official notebook templates, examples, and digital parts from VEX.",
              tag: "Official",
            },
          ]}
        />
      </Module>

      <Module number="02" title="What to actually put in it">
        <LinkGrid
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
      </Module>

      <Module number="03" title="Common mistakes">
        <p>
          Backfilling entries right before an event, writing only about the final robot with
          no design history, skipping failed ideas, and not documenting testing/data are the
          most common reasons notebooks score lower than the robot deserves.
        </p>
      </Module>

      <Module number="04" title="Weekly habits">
        <p>
          Write in it every meeting, not just when something &quot;big&quot; happens. A
          two-line entry (what you tried, what happened) beats no entry. CAD screenshots,
          photos of prototypes, and test data all count as strong evidence.
        </p>
        <LinkGrid
          resources={[
            {
              title: "Basic Course · Judging",
              url: "/courses/basic/judging",
              description: "How the notebook feeds directly into your judges' interview.",
              tag: "Tool",
            },
          ]}
        />
      </Module>
    </div>
  );
}
