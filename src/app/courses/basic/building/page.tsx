import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";
import SafetyGate from "@/components/SafetyGate";
import DiagramFrame from "@/components/DiagramFrame";

export default function BasicBuildingCoursePage() {
  return (
    <SafetyGate>
      <div>
        <PageHero
          eyebrow="Basic Course · Building"
          title="Drivetrains, mechanisms, and structure"
          description="The physical basics every new team needs: how to build a robot that survives a full match. For deep technique (bracing, screw joints, friction control), move on to the Advanced Building course once you've got the fundamentals down."
        />

        <Module number="01" title="Start here">
          <p>
            Official build instructions and part references for whichever kit you&apos;re on —
            skim these before your first build meeting.
          </p>
          <LinkGrid
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
            ]}
          />
        </Module>

        <Module number="02" title="Drivetrains">
          <p>
            Your drivetrain is the single most important subsystem — get it reliable before
            anything else. Tank drive (simple, high traction) and X-drive/H-drive (strafing,
            more complex) are the two most common starting points.
          </p>
          <LinkGrid
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
                description: "Compare build approaches across top teams' videos.",
                tag: "Video",
              },
            ]}
          />
        </Module>

        <Module number="03" title="Common mechanisms">
          <p>
            Lifts, claws, intakes, and flywheels show up in nearly every game. Learn the
            mechanism families, not just one season&apos;s specific build.
          </p>
          <LinkGrid
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
        </Module>

        <Module number="04" title="Gear ratios & motion basics">
          <p>
            Understanding torque vs. speed tradeoffs early will save you a lot of re-builds.
            Fewer teeth on the motor side and more on the wheel/mechanism side means more
            torque and less speed — and vice versa.
          </p>
          <DiagramFrame caption="Small input gear meshing with a larger output gear: gearing down like this trades speed for torque.">
            <svg viewBox="0 0 400 170" className="mx-auto w-full max-w-md" role="img" aria-label="Small input gear meshing with a larger output gear">
              <circle cx="110" cy="75" r="34" fill="none" stroke="#e8c96a" strokeWidth="10" strokeDasharray="7 5" />
              <circle cx="110" cy="75" r="24" fill="#0f3d22" stroke="white" strokeWidth="1.5" />
              <circle cx="110" cy="75" r="4" fill="white" />
              <text x="110" y="130" textAnchor="middle" fontSize="13" fill="white">Input</text>
              <text x="110" y="146" textAnchor="middle" fontSize="11" fill="#a3a3a3">(motor gear)</text>

              <defs>
                <marker id="arrow-gear" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="white" />
                </marker>
              </defs>
              <line x1="150" y1="75" x2="198" y2="75" stroke="white" strokeWidth="2" markerEnd="url(#arrow-gear)" />

              <circle cx="260" cy="75" r="54" fill="none" stroke="#3fc077" strokeWidth="10" strokeDasharray="7 5" />
              <circle cx="260" cy="75" r="42" fill="#0f3d22" stroke="white" strokeWidth="1.5" />
              <circle cx="260" cy="75" r="4" fill="white" />
              <text x="260" y="150" textAnchor="middle" fontSize="13" fill="white">Output</text>
              <text x="260" y="166" textAnchor="middle" fontSize="11" fill="#a3a3a3">(wheel / mechanism)</text>
            </svg>
            <div className="mt-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide">
              <span className="text-brand-gold-light">&larr; More speed</span>
              <span className="text-brand-green-light">More torque &rarr;</span>
            </div>
          </DiagramFrame>
          <LinkGrid
            resources={[
              {
                title: "Gear Ratio Calculator",
                url: "/tools",
                description: "Plug in your gears and wheel size — get speed/torque tradeoffs instantly.",
                tag: "Tool",
              },
            ]}
          />
        </Module>

        <Module number="05" title="Structural basics">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Go by hole spacing.</strong> Keep any run of spacing, gears, or wheels on a
              shaft within 0.5&quot; intervals — that matches the hole spacing on every VEX
              structural part and makes bracing everything much easier later.
            </li>
            <li>
              <strong>Always use bearing flats.</strong> Anywhere a shaft passes through
              structure, a bearing flat keeps it aligned in the square hole and cuts friction
              dramatically. Line the bearing&apos;s center hole up with the c-channel&apos;s hole and
              fasten with 3 screws.
            </li>
            <li>
              <strong>Never put metal on metal.</strong> A metal part (like a shaft collar)
              rubbing directly against a c-channel or other metal surface creates friction and
              wear — always put a bearing flat, bushing, or spacer between them.
            </li>
            <li>
              <strong>Bracing exists for a reason.</strong> Anywhere structure is under load —
              drivetrain rails, lift towers, key connection points — add a brace to stop it
              flexing. The Advanced Building course covers the specific techniques (boxing,
              standoff bracing, screw joints) in depth.
            </li>
          </ul>
        </Module>

        <Module number="06" title="Beginner build habits">
          <ul className="list-disc space-y-2 pl-5">
            <li>Build a rough prototype that just works first, then refine it on the actual robot — don&apos;t try to perfect a mechanism before you&apos;ve seen it move.</li>
            <li>Be creative — there&apos;s never one correct answer to a mechanism problem. Look at how other teams solved it, then adapt, don&apos;t just copy.</li>
            <li>Place heavy components (battery, Brain) low and central for a better center of gravity.</li>
            <li>Keep your drivetrain as slim as possible — every extra inch of width eats into room you need for other mechanisms.</li>
            <li>Don&apos;t just trust CAD — build and test the real thing. CAD catches collisions, it doesn&apos;t catch real-world friction and flex.</li>
            <li>Everything on a shaft inside your drivetrain should be able to wiggle very slightly along the axle — dead-tight spacing binds and adds friction.</li>
          </ul>
        </Module>
      </div>
    </SafetyGate>
  );
}
