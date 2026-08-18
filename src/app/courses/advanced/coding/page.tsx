import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";
import Callout from "@/components/Callout";

import CourseProgressProvider from "@/components/progress/CourseProgressProvider";
import { getCourseProgress } from "@/lib/progress";

export default async function AdvancedCodingCoursePage() {
  const { userId, completedModules } = await getCourseProgress("advanced-coding");

  return (
    <CourseProgressProvider
      courseSlug="advanced-coding"
      initialUserId={userId}
      initialCompleted={completedModules}
    >
    <div>
      <PageHero
        eyebrow="Advanced Course · Coding"
        title="PID, odometry, and writing autonomous code that survives real fields"
        description="VEX fields are inconsistent site to site — code that only works on your practice field will fail at competition. This is what separates a robot that's reliable everywhere from one that only works at home."
      />

      <Module number="01" title="Drive control feel">
        <p>
          Raw joystick input is hard to drive precisely — small stick movements translate to
          big robot movements, causing oversteering. Almost every competitive team runs the
          joystick input through a curve (commonly called <strong>cubic drive</strong>) that
          reduces sensitivity near the center of the stick for finer control, while still
          allowing full speed at full stick deflection.
        </p>
        <LinkGrid
          resources={[
            {
              title: "\"VEX cubic drive curve\" — YouTube search",
              url: "https://www.youtube.com/results?search_query=vex+cubic+drive+curve+programming",
              description: "Implementing a drive sensitivity curve in Blocks or C++.",
              tag: "Video",
            },
          ]}
        />
      </Module>

      <Module number="02" title="Autonomous that survives field variance">
        <ul className="list-disc space-y-2 pl-5">
          <li>Don&apos;t rely on the match load bar or a goal to set up or reset your robot mid-routine — field walls and bars vary by up to an inch site to site, and your auton will behave differently everywhere but your home field.</li>
          <li>Build a 100% repeatable physical setup instead: field tiles as a reference, a printed setup jig, or (for advanced teams) sensor-based self-correction.</li>
          <li>Test every autonomous with a well-charged battery. Performance and consistency both degrade fast as charge drops, so an auton that works on a full battery can fail on a half-full one.</li>
        </ul>
      </Module>

      <Module number="03" title="turnFor vs. turnToHeading">
        <p>
          Field contact (a bumped triball, a stray part) can knock your robot out of position
          mid-routine. <code className="rounded bg-white/10 px-1">turnFor</code> turns a set
          number of degrees relative to wherever the robot currently is — so a 10&deg; error
          from a bump becomes a permanent 10&deg; error in every turn after it.{" "}
          <code className="rounded bg-white/10 px-1">turnToHeading</code> (part of the
          smartdrive class) turns to an absolute heading using the inertial sensor instead,
          so it self-corrects: if you&apos;re 10&deg; off going into a planned 90&deg; turn,
          it only turns the remaining 80&deg;.
        </p>
        <Callout>
          Switching from turnFor to turnToHeading is one of the easiest, highest-value
          changes you can make to reduce accumulated error across a multi-step autonomous.
        </Callout>
      </Module>

      <Module number="04" title="Using the inertial sensor correctly">
        <ul className="list-disc space-y-2 pl-5">
          <li>Mount it securely on a non-movable part of the robot, ideally facing the front.</li>
          <li>It auto-calibrates for a few seconds in the pre-autonomous phase — you don&apos;t write calibration code.</li>
          <li>Place the robot in its exact starting position <em>before</em> starting the program, and don&apos;t move it after. If you need to reposition, restart the program.</li>
          <li>Give the Brain 4-5 seconds after connecting and starting the program before signaling ready for the match — starting too early means the sensor hasn&apos;t finished calibrating and every heading reading after that is wrong.</li>
        </ul>
      </Module>

      <Module number="05" title="AWP strategy in code">
        <p>
          Every team should be able to complete both halves of the Autonomous Win Point.
          Get low-risk AWP routines fully reliable before layering in riskier scoring
          attempts during autonomous — and remember you don&apos;t need AWP in eliminations,
          so many top teams run a separate, more aggressive elims-only autonomous.
        </p>
      </Module>

      <Module number="06" title="Blocking vs. non-blocking code, and auton selection">
        <p>
          Most drive commands take a <code className="rounded bg-white/10 px-1">wait</code>{" "}
          parameter. With <code className="rounded bg-white/10 px-1">wait=true</code>{" "}
          (blocking), the robot won&apos;t move to the next line until the current command
          finishes — including if it physically can&apos;t finish (stuck on a wall), so pair
          blocking calls with a motor timeout so your routine doesn&apos;t stall forever.
        </p>
        <p>
          Keep your drive code and all auton routines in a single file rather than several
          copies — it&apos;s easy to forget to update every copy when a motor port or drive
          constant changes. Use side-port jumpers (or a screen menu) plus a case statement to
          pick which routine runs before the match, instead of re-flashing code at the field.
        </p>
      </Module>

      <Module number="07" title="Debugging & version control">
        <ul className="list-disc space-y-2 pl-5">
          <li>Comment your logic, especially in a long autonomous, so you can tell which lines correspond to which step of the path.</li>
          <li>Print to the Brain screen to debug — never send debug data or rumble to the controller, both are known to cause disconnects on competition fields.</li>
          <li>Save versions of your code as you go, or use Git for real version history. Bring a backup on a flash drive (and ideally a backup computer) to every competition.</li>
        </ul>
        <LinkGrid
          resources={[
            {
              title: "purduesigbots/pros",
              url: "https://github.com/purduesigbots/pros",
              description: "PROS kernel source — open source C/C++ dev for the V5 Brain.",
              tag: "GitHub",
            },
            {
              title: "PROS API Reference",
              url: "https://purduesigbots.github.io/pros-doxygen-docs/api.html",
              description: "Full C++ API documentation for sensors, motors, and tasks.",
              tag: "Docs",
            },
          ]}
        />
      </Module>

      <Module number="08" title="Growing into GitHub libraries">
        <p>
          Once basic movement is solid, these libraries handle PID, odometry, and pure
          pursuit so you&apos;re not writing motion control from scratch. Read the source,
          don&apos;t just import it blind — you&apos;ll need to explain how your autonomous
          works in a judges&apos; interview either way.
        </p>
        <LinkGrid
          resources={[
            {
              title: "LemLib/LemLib",
              url: "https://github.com/LemLib/LemLib",
              description: "Popular PROS template with PID, odometry, and pure pursuit motion.",
              tag: "GitHub",
            },
            {
              title: "JacksonAreaRobotics/JAR-Template",
              url: "https://github.com/JacksonAreaRobotics/JAR-Template",
              description: "VEXcode Pro (C++) library with PID, odometry, and drive-to-point/pose.",
              tag: "GitHub",
            },
            {
              title: "OkapiLib/OkapiLib",
              url: "https://github.com/OkapiLib/OkapiLib",
              description: "PROS library aimed at making motion control easy for newer teams.",
              tag: "GitHub",
            },
          ]}
        />
      </Module>
    </div>
    </CourseProgressProvider>
  );
}
