import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";
import Callout from "@/components/Callout";
import DiagramFrame from "@/components/DiagramFrame";
import CourseProgressProvider from "@/components/progress/CourseProgressProvider";
import { getCourseProgress } from "@/lib/progress";

export default async function ParentsCoursePage() {
  const { userId, completedModules } = await getCourseProgress("parents");

  return (
    <CourseProgressProvider
      courseSlug="parents"
      initialUserId={userId}
      initialCompleted={completedModules}
    >
    <div>
      <PageHero
        eyebrow="For Parents & Guardians"
        title="How a season actually goes"
        description="A plain-language walkthrough of the VEX season, what a build meeting and competition day look like, and how you can actually help — without needing to know a screwdriver from a standoff driver."
      />

      <Module number="01" title="The season at a glance">
        <p>
          VEX runs on a school-year rhythm: a new game is revealed and build season starts
          in the fall, local qualifying competitions run through fall and winter, and the
          season builds toward regional/state championships and, for teams that qualify,
          the VEX World Championship in the spring.
        </p>
        <DiagramFrame caption="A typical VEX season, roughly August through April/May.">
          <svg viewBox="0 0 440 70" className="mx-auto w-full max-w-lg" role="img" aria-label="Season timeline from build season through qualifiers to championships">
            <rect x="0" y="20" width="150" height="30" fill="#1a7a42" rx="3" />
            <rect x="150" y="20" width="170" height="30" fill="#0f3d22" stroke="#3fc077" strokeWidth="2" rx="3" />
            <rect x="320" y="20" width="110" height="30" fill="#e8c96a" rx="3" />
            <text x="75" y="15" textAnchor="middle" fontSize="11" fill="#3fc077">Build season</text>
            <text x="235" y="15" textAnchor="middle" fontSize="11" fill="#3fc077">Qualifying events</text>
            <text x="375" y="15" textAnchor="middle" fontSize="11" fill="#e8c96a">Champs / Worlds</text>
          </svg>
        </DiagramFrame>
        <p>
          Exact dates, meeting schedules, and which competitions your team is registered for
          are specific to your team — check with your coach/lead for the actual calendar.
        </p>
      </Module>

      <Module number="02" title="What a build meeting looks like">
        <p>
          Regular after-school or weekend meetings where students design, build, code, and
          test the robot — mentors guide, but students do the actual work. Expect it to look
          messier and slower than you&apos;d imagine: parts scattered everywhere, the same
          mechanism rebuilt three times, long stretches where nothing seems to visibly
          progress. That&apos;s normal. Struggling with a problem before solving it is most
          of the actual learning.
        </p>
      </Module>

      <Module number="03" title="What a competition day looks like">
        <ul className="list-disc space-y-2 pl-5">
          <li>These are full-day events — often 6-10+ hours, so pack snacks, water, and something to do between matches.</li>
          <li>The robot gets inspected first thing (size, weight, legal parts) before it can play.</li>
          <li>The team plays several short qualification matches spread throughout the day — each one lasts about 2 minutes, but there can be significant downtime between them.</li>
          <li>Some teams sign up for or get selected for a judges&apos; interview, usually 10-15 minutes, separate from matches.</li>
          <li>Elimination rounds and the awards ceremony happen toward the end of the day — schedules commonly run behind, so don&apos;t plan a tight exit.</li>
        </ul>
      </Module>

      <Module number="04" title="How you can actually help">
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Volunteer.</strong> Competitions run almost entirely on parent volunteers — judges, referees, field resets, registration. Events regularly need more volunteers than they have; ask your team lead how to sign up.</li>
          <li><strong>Drive/carpool</strong> to meetings and competitions, especially away events.</li>
          <li><strong>Don&apos;t do the engineering or code for them.</strong> It&apos;s tempting when you see them stuck, but working through a stuck problem is the actual point of the program — and judges can tell the difference in an interview.</li>
          <li><strong>Ask them to explain what they built</strong> rather than just watching. Talking through their own design out loud is exactly what they&apos;ll need to do in a judges&apos; interview.</li>
        </ul>
      </Module>

      <Module number="05" title="Registering, paying & signing up for events">
        <p>
          Almost all of this is handled by your team&apos;s coach/lead, not by individual
          families — but it helps to know where the money and paperwork actually go.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Season team registration</strong> happens once a year on{" "}
            <strong>RobotEvents.com</strong>: create a login, register the team under the
            program (V5RC, VIQRC, etc.), and pay the season registration fee. This has to
            happen before the team can sign up for any individual competition, and there&apos;s
            a season deadline — check RobotEvents for the current one.
          </li>
          <li>
            <strong>Each competition</strong> is a separate registration and a separate
            fee, paid through the same RobotEvents.com account — everything from free
            scrimmages up to $50–100+ for a typical qualifier, more for Signature/Championship
            events, plus a small flat platform fee per registration.
          </li>
          <li>
            <strong>Payment</strong> happens in the RobotEvents cart at checkout (card), or
            a team can select <strong>&quot;Pay Later&quot;</strong> if payment (e.g. a
            school purchase order) needs to be arranged before the event.
          </li>
        </ul>
        <Callout>
          Exact fees and deadlines change season to season and by event — always confirm
          current numbers with your coach/lead or directly on RobotEvents.com rather than
          budgeting off last year&apos;s prices.
        </Callout>
        <LinkGrid
          resources={[
            {
              title: "RobotEvents.com",
              url: "https://www.robotevents.com/",
              description: "Where teams register for the season and sign up/pay for individual events.",
              tag: "Official",
            },
          ]}
        />
      </Module>

      <Module number="06" title="Costs & fundraising">
        <p>
          Costs typically include team registration/membership, per-event competition fees,
          replacement parts, and travel if the team attends away events or qualifies for a
          higher-level championship. How much of that falls to families vs. the team&apos;s
          budget or fundraising varies a lot by program — ask your coach/lead for actual
          numbers and whether there are fundraising or subsidy options.
        </p>
      </Module>

      <Module number="07" title="Staying in the loop">
        <ul className="list-disc space-y-2 pl-5">
          <li>Ask your student to show you their engineering notebook once in a while — it&apos;s a genuinely good window into what they&apos;re actually doing week to week.</li>
          <li>Find out which channel your team uses for updates (Slack, email list, group chat) and where the season schedule gets posted.</li>
          <li>If you want to understand more of the jargon yourself, the <a href="/library" className="font-medium text-brand-green-light hover:underline">Library</a> on this site decodes it in plain language.</li>
        </ul>
      </Module>
    </div>
    </CourseProgressProvider>
  );
}
