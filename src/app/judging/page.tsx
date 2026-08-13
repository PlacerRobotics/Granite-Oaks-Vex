import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export default function JudgingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Judging & Interview Prep"
        title="What judges look for, and how to talk about your robot"
        description="Judged awards (Design, Excellence, Innovate, etc.) are based on your engineering notebook plus a short team interview, typically 10-15 minutes. Every member should be able to speak to the robot's design, code, and strategy."
      />

      <Section
        title="Official rulebook"
        intro="Your program's current-season official Guide to Judging is the authoritative source for rubrics and process — your coach or event partner will have the current link. This page covers general prep that stays true season to season."
        resources={[
          {
            title: "notebooks.vex.com",
            url: "https://notebooks.vex.com/",
            description: "Official notebook templates — the document judges will review before your interview.",
            tag: "Official",
          },
        ]}
      />

      <Section
        title="Interview prep basics"
        intro="Every team member should be able to answer, in their own words: what does the robot do, why is it built this way, what did you try that didn't work, and what would you change next."
        resources={[
          {
            title: "\"VEX robotics judges interview tips\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+robotics+judges+interview+tips",
            description: "What to expect walking into the interview room and how answers get evaluated.",
            tag: "Video",
          },
          {
            title: "\"robotics competition interview practice questions\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=robotics+competition+judges+interview+practice+questions",
            description: "Sample question banks to run as a mock interview with your team.",
            tag: "Video",
          },
        ]}
      />

      <Section
        title="Practice question starters"
        intro="Have every team member practice answering these out loud before your first event."
        resources={[
          {
            title: "Community",
            url: "/community",
            description: "Ask veteran teams on the VEX Forum or Discord what their interviews were like.",
            tag: "Tool",
          },
        ]}
      />

      <div className="mb-12 rounded-lg border border-black/10 p-5 dark:border-white/10">
        <h2 className="text-lg font-bold">Sample questions to rehearse</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>Walk me through your robot&apos;s design process from start to finish.</li>
          <li>What alternative designs did you consider, and why did you reject them?</li>
          <li>What part of the robot are you least happy with, and how would you improve it?</li>
          <li>How does your code handle [a specific game task]? Can you explain it without notes?</li>
          <li>What was your biggest failure this season, and what did you learn from it?</li>
          <li>How do you divide work across the team?</li>
          <li>What&apos;s your match strategy, and how does it change against different opponents?</li>
        </ul>
      </div>
    </div>
  );
}
