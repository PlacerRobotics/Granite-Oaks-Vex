import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";
import Callout from "@/components/Callout";
import CourseProgressProvider from "@/components/progress/CourseProgressProvider";
import { getCourseProgress } from "@/lib/progress";

function AwardCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <p className="font-semibold text-brand-gold-light">{title}</p>
      <p className="mt-1 text-sm text-neutral-300">{children}</p>
    </div>
  );
}

export default async function BasicJudgingCoursePage() {
  const { userId, completedModules } = await getCourseProgress("basic-judging");

  return (
    <CourseProgressProvider
      courseSlug="basic-judging"
      initialUserId={userId}
      initialCompleted={completedModules}
    >
    <div>
      <PageHero
        eyebrow="Basic Course · Judging"
        title="The judging process, team interviews, and awards explained"
        description="Judged awards are decided from your notebook plus a team interview — every event chooses which to offer, but Excellence, Design, Innovate, and Judges Award are required whenever judging happens at all."
      />

      <Module number="01" title="The judging process & team interviews">
        <p>
          Most events run a short (roughly 10–15 minute) interview with each team, in
          addition to reading the notebook. A few things to know:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Judges are instructed to interview students, not adults.</strong> Your coach or mentor should not answer for you — practice explaining your own robot and your own decisions.</li>
          <li>Judges want your notebook and your interview to line up. If your notebook says one thing and your team says something different in person, that&apos;s a red flag, not a bonus.</li>
          <li>It&apos;s common (though not required) that the same judges who interview your team also read your notebook — treat the interview as a continuation of the same story your notebook tells, not a separate performance.</li>
          <li>Every student should be able to speak to <em>some</em> part of the process — the drivetrain, the code, the notebook, the strategy. Judges notice when only one person can answer anything.</li>
        </ul>
        <Callout>
          Practice a 60–90 second &quot;walk me through your robot&quot; answer as a team,
          but also practice answering unscripted follow-up questions like &quot;what
          didn&apos;t work?&quot; or &quot;why this mechanism instead of that one?&quot; —
          those are the questions that actually differentiate teams.
        </Callout>
      </Module>

      <Module number="02" title="Judged awards, explained">
        <p>
          Submitting an Engineering Notebook is required to be eligible for most of these.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <AwardCard title="Excellence Award">
            The top overall team. Incorporates everything the Design Award looks for,
            plus the team&apos;s actual on-field performance (qualification ranking and
            Skills scores). The highest honor at most events, required whenever judging occurs.
          </AwardCard>
          <AwardCard title="Design Award">
            Given to the team with the strongest Engineering Notebook and interview — a
            Fully Developed Notebook, where both the notebook and interview show real
            independent inquiry from early design through final execution.
          </AwardCard>
          <AwardCard title="Innovate Award">
            Recognizes an effective, well-documented <em>innovative</em> feature on the
            robot — something genuinely original, not just well-built.
          </AwardCard>
          <AwardCard title="Think Award">
            Recognizes effective, consistent use of coding and programming design to
            solve the game challenge — typically tied to strong, consistent Autonomous
            Coding Skills scores.
          </AwardCard>
          <AwardCard title="Amaze Award">
            Given to a consistently high-performing, competitive robot — one that
            reliably contributes to high-scoring matches with alliance partners.
          </AwardCard>
          <AwardCard title="Build Award">
            Recognizes a robustly and carefully constructed robot — solid mechanical
            design, attention to detail, and durability to survive a full tournament.
          </AwardCard>
          <AwardCard title="Create Award">
            Given to a team whose robot design incorporates a creative engineering
            solution — a unique approach, not necessarily the highest-scoring one.
          </AwardCard>
          <AwardCard title="Judges, Inspire, Sportsmanship & Energy">
            The Judges Award recognizes a team judges feel deserves special recognition
            outside the other categories. Inspire, Sportsmanship, and Energy recognize
            leadership, courtesy toward other teams, and enthusiasm — about who you are
            as a team, not just what you built.
          </AwardCard>
        </div>
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

      <Module number="03" title="Notebook & interview checklist">
        <ul className="list-disc space-y-2 pl-5">
          <li>Cover page with team name/number and season</li>
          <li>Up-to-date table of contents with page numbers</li>
          <li>Every entry dated and signed/initialed by the students who did the work</li>
          <li>Entries written the same day as the work whenever possible</li>
          <li>Failed attempts and rejected ideas included, not just the final design</li>
          <li>Real test data or observations, not just &quot;it worked&quot;</li>
          <li>Evidence of teamwork and time/material management</li>
          <li>Digital submission link tested by someone outside the team, if submitting digitally</li>
          <li>Every team member can explain at least one full part of the robot unscripted</li>
          <li>Notebook and interview answers actually agree with each other</li>
        </ul>
      </Module>

      <Module number="04" title="Practice questions to rehearse">
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
    </CourseProgressProvider>
  );
}
