import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";
import Callout from "@/components/Callout";
import DiagramFrame from "@/components/DiagramFrame";
import CourseProgressProvider from "@/components/progress/CourseProgressProvider";
import { getCourseProgress } from "@/lib/progress";

export default async function BasicNotebookingCoursePage() {
  const { userId, completedModules } = await getCourseProgress("basic-notebooking");

  return (
    <CourseProgressProvider
      courseSlug="basic-notebooking"
      initialUserId={userId}
      initialCompleted={completedModules}
    >
    <div>
      <PageHero
        eyebrow="Basic Course · Notebooking"
        title="How to document your season — and how judges actually read it"
        description="Your robot only shows judges the result of your season. The engineering notebook is the only thing that shows them the thinking."
      />

      <Module number="01" title="Why the notebook matters">
        <p>
          Judges use your notebook, together with a team interview, to award the
          Excellence, Design, Innovate, Think, Amaze, Build, and Create Awards. At many
          events, a strong notebook and interview is what separates two teams with
          similar-looking robots.
        </p>
        <p>
          Judges are told to prioritize <strong>content and clarity over sophistication
          of presentation or notebook length.</strong> A messy, honest, dated notebook
          that clearly documents real engineering thinking will always beat a beautiful
          notebook written after the fact to look good. It&apos;s not about making pretty
          pages — it&apos;s about proving you actually engineered the robot.
        </p>
      </Module>

      <Module number="02" title="Physical vs. digital notebooks">
        <p>
          Teams can keep either a <strong>physical notebook</strong> (the official bound
          VEX notebook, or any other physical notebook) or a{" "}
          <strong>Digital Engineering Notebook</strong> built with an app or cloud service
          — including free templates VEX provides. Every notebook is judged against the
          exact same rubric and criteria regardless of format. Format is a team
          preference, not an advantage.
        </p>
        <Callout>
          If submitting digitally (required for most judged awards at many events,
          including Worlds), your submission must be a link to a{" "}
          <strong>single file</strong> — not a folder — with sharing permissions that let
          judges open it <strong>without logging in</strong>. Test the link yourself, or
          better, have someone outside your organization test it, before you submit.
          Submission deadlines are typically set in advance of the event — check your
          specific event&apos;s requirements early.
        </Callout>
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

      <Module number="03" title="Notebook structure & entry format">
        <p>Whatever format you use, a strong notebook generally includes:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>A <strong>cover page</strong> — team name/number, season, and school/organization</li>
          <li>A <strong>table of contents</strong>, kept up to date as you add entries — one of the easiest, most concrete things judges look for</li>
          <li><strong>Numbered pages</strong>, so the table of contents can actually reference something</li>
          <li><strong>Dated entries</strong>, in the order you actually did the work — not reorganized afterward to look cleaner</li>
          <li>The <strong>names of contributing students</strong> on each entry, so it&apos;s clear who did what</li>
          <li>An ongoing system of organization that&apos;s consistent from the first page to the last</li>
        </ul>
        <Callout>
          Write in the notebook the same day you do the work, even if it&apos;s just three
          rough sentences and a phone-photo of a sketch. A five-minute entry written in
          the moment beats a polished paragraph written from memory two weeks later — and
          it&apos;s the difference judges are trained to notice.
        </Callout>
        <DiagramFrame caption="A simple, repeatable entry layout: date, title, what you did, a sketch/photo, results or problems, and next steps.">
          <svg viewBox="0 0 460 340" className="mx-auto w-full max-w-sm" role="img" aria-label="Sample engineering notebook entry layout">
            <rect x="10" y="10" width="440" height="320" fill="#faf8f2" stroke="#1c1c1e" strokeWidth="2" rx="6" />
            <text x="30" y="38" fontSize="14" fontWeight="700" fill="#1c1c1e">Page 14</text>
            <text x="430" y="38" fontSize="12" fill="#5b5b5f" textAnchor="end">Date: 9/12</text>
            <line x1="30" y1="46" x2="430" y2="46" stroke="#1a7a42" strokeWidth="2" />
            <text x="30" y="66" fontSize="13" fontWeight="700" fill="#1a7a42">Intake: first roller test</text>
            <line x1="30" y1="82" x2="430" y2="82" stroke="#e2e2e6" />
            <line x1="30" y1="98" x2="430" y2="98" stroke="#e2e2e6" />
            <line x1="30" y1="114" x2="430" y2="114" stroke="#e2e2e6" />
            <line x1="30" y1="130" x2="260" y2="130" stroke="#e2e2e6" />
            <rect x="280" y="90" width="150" height="90" fill="#f5f5f7" stroke="#5b5b5f" strokeDasharray="4 3" />
            <text x="355" y="140" fontSize="11" fill="#5b5b5f" textAnchor="middle">[ sketch / photo ]</text>
            <line x1="30" y1="198" x2="430" y2="198" stroke="#e2e2e6" />
            <line x1="30" y1="214" x2="430" y2="214" stroke="#e2e2e6" />
            <line x1="30" y1="230" x2="430" y2="230" stroke="#e2e2e6" />
            <line x1="30" y1="246" x2="430" y2="246" stroke="#e2e2e6" />
            <text x="30" y="280" fontSize="11" fill="#a8630a" fontWeight="700">Next Steps:</text>
            <line x1="30" y1="292" x2="430" y2="292" stroke="#e2e2e6" />
            <line x1="30" y1="308" x2="430" y2="308" stroke="#e2e2e6" />
            <text x="30" y="326" fontSize="10" fill="#5b5b5f">Signed: _______________  Witnessed: _______________</text>
          </svg>
        </DiagramFrame>
      </Module>

      <Module number="04" title="Documenting the Engineering Design Process">
        <p>
          The Engineering Design Process (EDP) is the cycle judges are trained to look for
          evidence of on every page: exploring a problem, generating and testing
          solutions, and documenting results — repeated over and over across a season.
          Your notebook should show this cycle happening again and again, not just once
          at the start of the year.
        </p>
        <DiagramFrame caption="The Engineering Design Process as an ongoing cycle — good notebooks show teams going around this loop many times over a season.">
          <svg viewBox="0 0 480 340" className="mx-auto w-full max-w-sm" role="img" aria-label="Engineering Design Process cycle diagram">
            <circle cx="240" cy="170" r="140" fill="none" stroke="#ffffff1a" strokeWidth="24" />
            <g fontSize="12" fill="#0a0f0c" textAnchor="middle" fontWeight="700">
              <circle cx="240" cy="40" r="34" fill="#1a7a42" /><text x="240" y="44" fill="white">Identify</text>
              <circle cx="360" cy="90" r="34" fill="#d4af37" /><text x="360" y="94">Brainstorm</text>
              <circle cx="400" cy="220" r="34" fill="#3fc077" /><text x="400" y="224">Select</text>
              <circle cx="310" cy="310" r="34" fill="#e8c96a" /><text x="310" y="314">Build</text>
              <circle cx="170" cy="310" r="34" fill="#ffffff" /><text x="170" y="314">Test</text>
              <circle cx="80" cy="220" r="34" fill="#a3a3a3" /><text x="80" y="215" fill="#0a0f0c">Iterate &amp;</text><text x="80" y="230" fill="#0a0f0c">Repeat</text>
              <circle cx="120" cy="90" r="34" fill="#0f6b38" /><text x="120" y="94" fill="white">Plan</text>
            </g>
          </svg>
        </DiagramFrame>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-neutral-400">
                <th className="py-2 pr-4">EDP stage</th>
                <th className="py-2">What to actually write down</th>
              </tr>
            </thead>
            <tbody className="text-neutral-300">
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Identify the problem</td><td className="py-2">What isn&apos;t working, or what the game requires that your robot can&apos;t yet do</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Brainstorm & prototype</td><td className="py-2">Every idea you considered — including the ones you rejected, and why</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Select & plan</td><td className="py-2">Why you picked the solution you picked, with reasoning, not just &quot;we chose X&quot;</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Build & program</td><td className="py-2">What you actually built, with dates, sketches, or CAD/photos</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Test</td><td className="py-2">Real data or observations — what happened when you ran it, including failures</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Iterate</td><td className="py-2">What you changed based on the test, and why</td></tr>
              <tr><td className="py-2 pr-4 font-semibold text-neutral-100">Teamwork & management</td><td className="py-2">Who did what, how the team split up work, and how time/materials were managed</td></tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-md border-l-4 border-amber-500 bg-amber-500/10 px-4 py-3 text-sm">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-amber-400">
            Common mistake
          </span>
          Writing only the &quot;final&quot; version of a design as if it appeared
          perfectly the first time. Judges specifically look for failed attempts and dead
          ends — a notebook with zero mistakes in it usually reads as incomplete or
          rewritten after the fact, not as an efficient team.
        </div>
      </Module>

      <Module number="05" title="What makes a notebook &quot;fully developed&quot;">
        <p>
          Judges use a formal Engineering Notebook Rubric to score notebooks. Any notebook
          that scores two or more points in each of the first four rubric criteria is
          considered <strong>Fully Developed</strong> — meaning it shows at least one
          complete pass through the Engineering Design Process. Only Fully Developed
          notebooks are eligible for the Innovate, Design, and Excellence Awards, so
          hitting that bar consistently, early in the season, matters far more than one
          spectacular page near the end.
        </p>
        <p>
          A low rubric score is <strong>not</strong> an automatic disqualification from
          any award, and a high score doesn&apos;t automatically win one either — the
          rubric is a sorting and comparison tool. Final award decisions come from judges&apos;
          qualitative discussion, weighing the notebook together with the team interview
          and (for some awards) on-field performance.
        </p>
      </Module>

      <Module number="06" title="Weekly habits & where to go next">
        <ul className="list-disc space-y-2 pl-5">
          <li>Write in it every meeting, not just when something &quot;big&quot; happens. A two-line entry beats no entry.</li>
          <li>CAD screenshots, photos of prototypes, and test data all count as strong evidence.</li>
          <li>Backfilling entries right before an event is the single most common reason notebooks score lower than the robot deserves.</li>
        </ul>
        <LinkGrid
          resources={[
            {
              title: "Basic Course · Judging",
              url: "/courses/basic/judging",
              description: "How the notebook feeds directly into your judges' interview, and how awards are decided.",
              tag: "Tool",
            },
          ]}
        />
      </Module>
    </div>
    </CourseProgressProvider>
  );
}
