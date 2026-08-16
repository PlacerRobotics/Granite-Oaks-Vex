import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";
import DiagramFrame from "@/components/DiagramFrame";

export default function CompetitionBasicsCoursePage() {
  return (
    <div>
      <PageHero
        eyebrow="Basic Course · What's a VEX Competition?"
        title="What actually happens at an event"
        description="A total-beginner walkthrough of the programs, match structure, and event day — so your first competition doesn't come as a surprise."
      />

      <Module number="01" title="The programs">
        <p>
          VEX Robotics runs three main programs: <strong>VEX IQ</strong> (grades 4&ndash;8,
          snap-together parts, no tools required), <strong>VEX V5</strong> (grades
          6&ndash;12, metal + code, the main competitive program), and <strong>VEX U</strong>{" "}
          (college). Most new teams spend their first season learning to build a reliable
          drivetrain, program basic autonomous routines, and keep a notebook.
        </p>
      </Module>

      <Module number="02" title="How a match works">
        <DiagramFrame caption="Every qualification match: 15s Autonomous, then 1:45 Driver Control.">
          <svg viewBox="0 0 400 70" className="mx-auto w-full max-w-lg" role="img" aria-label="Match timeline showing the autonomous period followed by the driver control period">
            <rect x="0" y="20" width="50" height="30" fill="#e8c96a" rx="3" />
            <rect x="50" y="20" width="350" height="30" fill="#1a7a42" rx="3" />
            <text x="25" y="15" textAnchor="middle" fontSize="12" fill="#e8c96a" fontWeight="600">0:15</text>
            <text x="225" y="15" textAnchor="middle" fontSize="12" fill="#3fc077" fontWeight="600">1:45</text>
            <text x="25" y="64" textAnchor="middle" fontSize="11" fill="white">Autonomous</text>
            <text x="225" y="64" textAnchor="middle" fontSize="11" fill="white">Driver Control</text>
          </svg>
        </DiagramFrame>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Alliances.</strong> Matches are 2v2 — you and a partner team play as an alliance against another two-team alliance.</li>
          <li><strong>Autonomous period.</strong> The first 15 seconds — robots run pre-written code with zero driver input.</li>
          <li><strong>Driver control.</strong> The remaining ~1:45 — humans drive via controller.</li>
          <li><strong>Qualification matches → Eliminations.</strong> Everyone plays a set of qualifying matches to build a ranking, then the field narrows into a bracket-style elimination round, usually with alliance selection in between.</li>
        </ul>
      </Module>

      <Module number="03" title="A day at an event">
        <p>
          Expect: robot inspection first thing (checking size/weight/legal parts), a
          practice match or two if the schedule allows, your qualification matches spread
          throughout the day, a judges&apos; interview if you signed up or get selected, and
          alliance selection/eliminations toward the end. Bring a fully charged spare
          battery and your notebook.
        </p>
      </Module>

      <Module number="04" title="Where to get help">
        <p>
          Nearly every question you&apos;ll have this season has already been asked and
          answered by another team.
        </p>
        <LinkGrid
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
            {
              title: "VEX Public Discord Server List (VEX Forum thread)",
              url: "https://www.vexforum.com/t/vex-public-discord-server-list/47098",
              description: "Community-maintained, up-to-date list of active VEX Discord servers.",
              tag: "Forum",
            },
            {
              title: "Game Breakdown",
              url: "/game",
              description: "This season's game, the official manual, and the rules Q&A.",
              tag: "Tool",
            },
          ]}
        />
      </Module>
    </div>
  );
}
