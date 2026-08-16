import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";

export default function BasicJudgingCoursePage() {
  return (
    <div>
      <PageHero
        eyebrow="Basic Course · Judging"
        title="What judges look for, and how to talk about your robot"
        description="Judged awards (Design, Excellence, Innovate, etc.) are based on your engineering notebook plus a short team interview, typically 10-15 minutes. Every member should be able to speak to the robot's design, code, and strategy."
      />

      <Module number="01" title="Judged awards overview">
        <p>
          The <strong>Design Award</strong> is based on your notebook plus the interview.
          The <strong>Excellence Award</strong> is the top overall judged award — it
          combines notebook/interview quality with strong on-field performance.
        </p>
        <LinkGrid
          resources={[
            {
              title: "notebooks.vex.com",
              url: "https://notebooks.vex.com/",
              description: "Official notebook templates — the document judges will review before your interview.",
              tag: "Official",
            },
          ]}
        />
      </Module>

      <Module number="02" title="Interview prep basics">
        <p>
          Every team member should be able to answer, in their own words: what does the
          robot do, why is it built this way, what did you try that didn&apos;t work, and
          what would you change next.
        </p>
        <LinkGrid
          resources={[
            {
              title: "\"VEX robotics judges interview tips\" — YouTube search",
              url: "https://www.youtube.com/results?search_query=vex+robotics+judges+interview+tips",
              description: "What to expect walking into the interview room and how answers get evaluated.",
              tag: "Video",
            },
          ]}
        />
      </Module>

      <Module number="03" title="Practice questions to rehearse">
        <ul className="list-disc space-y-2 pl-5">
          <li>Walk me through your robot&apos;s design process from start to finish.</li>
          <li>What alternative designs did you consider, and why did you reject them?</li>
          <li>What part of the robot are you least happy with, and how would you improve it?</li>
          <li>How does your code handle [a specific game task]? Can you explain it without notes?</li>
          <li>What was your biggest failure this season, and what did you learn from it?</li>
          <li>How do you divide work across the team?</li>
          <li>What&apos;s your match strategy, and how does it change against different opponents?</li>
        </ul>
      </Module>
    </div>
  );
}
