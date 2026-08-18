import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";
import Callout from "@/components/Callout";
import CourseProgressProvider from "@/components/progress/CourseProgressProvider";
import { getCourseProgress } from "@/lib/progress";

const BLOCK_COLORS: Record<string, string> = {
  event: "#d4af37",
  control: "#e0a200",
  drive: "#1a7a42",
  motion: "#3fc077",
  sense: "#7b3fa0",
};

function Block({
  category,
  indent = 0,
  children,
}: {
  category: keyof typeof BLOCK_COLORS;
  indent?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-md border-l-4 bg-white/5 px-3 py-1.5 font-mono text-xs text-neutral-100"
      style={{ borderColor: BLOCK_COLORS[category], marginLeft: indent * 20 }}
    >
      {children}
    </div>
  );
}

function BlockStack({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1.5 rounded-lg border border-white/10 bg-black/20 p-4">{children}</div>;
}

export default async function BasicCodingCoursePage() {
  const { userId, completedModules } = await getCourseProgress("basic-coding");

  return (
    <CourseProgressProvider
      courseSlug="basic-coding"
      initialUserId={userId}
      initialCompleted={completedModules}
    >
    <div>
      <PageHero
        eyebrow="Basic Course · Coding"
        title="VEXcode V5 Blocks — coding basics"
        description="No prior programming experience needed. VEXcode is where almost every team writes their first robot code — this covers Blocks end to end, from opening your first project to a working autonomous."
      />

      <Module number="01" title="What is VEXcode V5 Blocks?">
        <p>
          VEXcode V5 comes in three flavors: <strong>Blocks</strong>, <strong>Python</strong>,
          and <strong>C++</strong> (VEXcode Pro V5). Blocks is a visual, drag-and-drop
          language built on the same idea as Scratch — instead of typing exact syntax, you
          snap together color-coded puzzle pieces representing commands like &quot;drive
          forward&quot; or &quot;spin the intake.&quot;
        </p>
        <p>
          Blocks removes typos and syntax errors from the equation — you can&apos;t
          misspell a block, and pieces are shaped so you can only snap together compatible
          ones. It&apos;s not a &quot;toy&quot; language either: many competitive teams
          write their entire competition code in Blocks. When ready, VEXcode lets you view
          the same logic in Python for a smoother transition to text-based coding later.
        </p>
        <Callout>
          VEXcode&apos;s layout is identical across VEX IQ and VEX V5, and across
          Blocks/Python/C++. Concepts you learn here carry forward no matter what you code next.
        </Callout>
        <LinkGrid
          resources={[
            {
              title: "VEXcode",
              url: "https://www.vexrobotics.com/vexcode",
              description: "Official IDE for Blocks, Python, and C++ across VEX platforms.",
              tag: "Official",
            },
          ]}
        />
      </Module>

      <Module number="02" title="Getting started">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Download and install VEXcode V5 from vexrobotics.com/vexcode (or use the browser-based version).</li>
          <li>Open the app and select <strong>Create New Project</strong>, or start from a template like the Clawbot (Drivetrain 4-Motor) template to skip some setup.</li>
          <li>Connect your V5 Brain to your computer with USB, or pair wirelessly via the Radio, so you can download and run code on the real robot.</li>
          <li>Get familiar with three areas: the <strong>Toolbox</strong> (block categories, left), the <strong>Canvas</strong> (where you build, middle), and the <strong>Devices</strong> button (top — tells VEXcode what&apos;s actually wired to your robot).</li>
        </ol>
        <div className="rounded-md border-l-4 border-amber-500 bg-amber-500/10 px-4 py-3 text-sm">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-amber-400">
            Important
          </span>
          On a brand-new project, Drivetrain and other device blocks will <strong>not
          appear</strong> in the Toolbox until you configure that device first. This trips
          up almost every beginner — if you can&apos;t find the block you need, check
          Devices before anything else.
        </div>
        <LinkGrid
          resources={[
            {
              title: "Get Started Coding — VEX Library",
              url: "https://kb.vex.com/hc/en-us/articles/8780205244308-Get-Started-Coding",
              description: "Official walkthrough for writing and downloading your first project.",
              tag: "Official",
            },
          ]}
        />
      </Module>

      <Module number="03" title="Configuring your robot's devices">
        <p>
          Before you can control anything, VEXcode needs to know what&apos;s physically
          wired to which Smart Port. Open the <strong>Devices</strong> window and add each
          device you built.
        </p>
        <p className="font-semibold text-neutral-200">4-motor drivetrain</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Select <strong>Drivetrain 4-Motor</strong>.</li>
          <li>Choose which ports your <strong>Left Motors</strong> are plugged into.</li>
          <li>Choose which ports your <strong>Right Motors</strong> are plugged into.</li>
          <li>If you have an Inertial Sensor installed, select it and its port — this unlocks more accurate autonomous turning.</li>
          <li>Confirm the <strong>Wheel Size</strong>, <strong>Gear Ratio</strong>, and <strong>Gear Cartridge</strong> match what you actually built — VEXcode uses these numbers to calculate exactly how far &quot;drive 12 inches&quot; really is.</li>
          <li>Select <strong>Done</strong>.</li>
        </ol>
        <p className="font-semibold text-neutral-200">Other devices</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Motor</strong> — add one for your intake and one (or a Motor Group, for two motors) for your cascade lift.</li>
          <li><strong>Controller</strong> — required before Controller blocks (joystick/button reads) appear in your Toolbox.</li>
          <li><strong>Motor Group</strong> — combine motors that always move together into one block that controls them as a unit.</li>
        </ul>
        <Callout>
          Rename each device something obvious — &quot;Intake&quot; instead of
          &quot;Motor1&quot;, &quot;Lift&quot; instead of &quot;Motor2&quot;. Six months
          from now, and even six minutes from now, you&apos;ll thank yourself.
        </Callout>
      </Module>

      <Module number="04" title="Touring the block categories">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-neutral-400">
                <th className="py-2 pr-4">Category</th>
                <th className="py-2 pr-4">Color</th>
                <th className="py-2">What it does</th>
              </tr>
            </thead>
            <tbody className="text-neutral-300">
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Events</td><td className="py-2 pr-4" style={{ color: BLOCK_COLORS.event }}>Gold</td><td className="py-2">Starts your code — <code className="rounded bg-white/10 px-1">when started</code>, <code className="rounded bg-white/10 px-1">when button pressed</code></td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Control</td><td className="py-2 pr-4" style={{ color: BLOCK_COLORS.control }}>Amber</td><td className="py-2">Loops and decisions — <code className="rounded bg-white/10 px-1">repeat</code>, <code className="rounded bg-white/10 px-1">forever</code>, <code className="rounded bg-white/10 px-1">wait</code>, <code className="rounded bg-white/10 px-1">if / then</code></td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Drivetrain</td><td className="py-2 pr-4" style={{ color: BLOCK_COLORS.drive }}>Green</td><td className="py-2">Moves your configured drivetrain — <code className="rounded bg-white/10 px-1">drive for</code>, <code className="rounded bg-white/10 px-1">turn for</code></td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Motion</td><td className="py-2 pr-4" style={{ color: BLOCK_COLORS.motion }}>Light green</td><td className="py-2">Controls individual motors — <code className="rounded bg-white/10 px-1">spin for</code>, <code className="rounded bg-white/10 px-1">spin to position</code></td></tr>
              <tr className="border-b border-white/5"><td className="py-2 pr-4 font-semibold text-neutral-100">Sensing</td><td className="py-2 pr-4" style={{ color: BLOCK_COLORS.sense }}>Purple</td><td className="py-2">Reads sensors and Controller input</td></tr>
              <tr><td className="py-2 pr-4 font-semibold text-neutral-100">Looks / Variables</td><td className="py-2 pr-4 text-neutral-500">—</td><td className="py-2">Screen output for debugging; storing/reusing values</td></tr>
            </tbody>
          </table>
        </div>
      </Module>

      <Module number="05" title="Writing driver control code">
        <p>
          Driver Control code runs during the 1:45 Driver Control Period and does one job:
          continuously check what the driver is doing, and translate that into motor
          movement, forever, until the match ends. The pattern is always the same — an
          event block at the top, then a forever loop that never stops checking inputs.
        </p>
        <BlockStack>
          <Block category="event">when Driver Control starts</Block>
          <Block category="control">repeat forever</Block>
          <Block category="drive" indent={1}>drive with left joystick, right joystick</Block>
          <Block category="control" indent={1}>if Controller button R1 pressed then</Block>
          <Block category="motion" indent={2}>Intake: spin forward</Block>
          <Block category="control" indent={1}>else</Block>
          <Block category="motion" indent={2}>Intake: stop</Block>
          <Block category="control" indent={1}>end if</Block>
          <Block category="control" indent={1}>if Controller button L1 pressed then</Block>
          <Block category="motion" indent={2}>Lift: spin forward</Block>
          <Block category="control" indent={1}>else if Controller button L2 pressed then</Block>
          <Block category="motion" indent={2}>Lift: spin reverse</Block>
          <Block category="control" indent={1}>else</Block>
          <Block category="motion" indent={2}>Lift: stop</Block>
          <Block category="control" indent={1}>end if</Block>
        </BlockStack>
        <p>
          That&apos;s a complete, legal driver control program: joysticks drive the robot,
          one button runs the intake, two buttons run the lift up and down. Everything
          else — sensors, autonomous helpers, screen readouts — builds on top of this same
          skeleton.
        </p>
      </Module>

      <Module number="06" title="Writing autonomous code">
        <p>
          The 15-second Autonomous Period runs with <strong>no driver input at all</strong>{" "}
          — your code makes every decision in advance. Autonomous programs are usually a
          straight sequence of movement blocks, one after another.
        </p>
        <BlockStack>
          <Block category="event">when Autonomous starts</Block>
          <Block category="drive">drive forward for 24 inches</Block>
          <Block category="motion">Intake: spin forward for 1 second</Block>
          <Block category="drive">turn right for 90 degrees</Block>
          <Block category="drive">drive forward for 12 inches</Block>
          <Block category="motion">Lift: spin to position 45 degrees</Block>
          <Block category="motion">Intake: spin reverse for 0.5 seconds</Block>
          <Block category="control">wait 0.3 seconds</Block>
          <Block category="motion">Lift: spin to position 0 degrees</Block>
        </BlockStack>
        <p>
          Read that sequence out loud and it should make sense as a story: drive forward
          to a Goal, run the intake to grab a piece, turn to face the Goal, drive up to
          it, raise the lift, reverse the intake to score, wait a beat, then lower the
          lift back down.
        </p>
        <Callout>
          Never write a full 15-second autonomous in one shot. Add one or two blocks,
          download and test on the real field/practice mat, confirm it&apos;s accurate,
          then add the next chunk. Small distance or turning errors compound fast over a
          long sequence.
        </Callout>
      </Module>

      <Module number="07" title="Waiting vs. non-waiting blocks">
        <p>
          Most Motion and Drivetrain blocks (<code className="rounded bg-white/10 px-1">spin for</code>,{" "}
          <code className="rounded bg-white/10 px-1">drive for</code>,{" "}
          <code className="rounded bg-white/10 px-1">turn for</code>) are{" "}
          <strong>waiting blocks</strong> by default — your program pauses on that line
          until the movement finishes before moving to the next block. That&apos;s usually
          what you want, but sometimes it costs you valuable time.
        </p>
        <p>
          VEXcode lets you switch specific blocks to <strong>non-waiting</strong> with one
          click, so the program moves on immediately while that motion keeps happening in
          the background. Classic example: make &quot;open the claw&quot; and &quot;raise
          the arm&quot; both non-waiting, and the robot can drive forward{" "}
          <em>while</em> the claw opens and the arm raises — instead of doing four actions
          one after another. In a fast-paced game like Override, stacking non-waiting
          actions like this can be the difference between scoring one more Pin per match
          or not.
        </p>
      </Module>

      <Module number="08" title="Debugging & testing tips">
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Test in small pieces.</strong> Isolate a new mechanism&apos;s code and test it alone before combining with everything else.</li>
          <li><strong>Use the Brain&apos;s screen and Print blocks.</strong> A simple print block showing a sensor value or variable is often faster to debug with than guessing.</li>
          <li><strong>Check your Devices configuration first</strong> whenever a motor spins the wrong direction or a drivetrain drives backward — it&apos;s very often a port assignment or a reversed motor, not a logic bug.</li>
          <li><strong>Re-check gear ratio and wheel size</strong> in your Drivetrain configuration if autonomous distances are consistently off — this is the #1 cause of &quot;my robot drives too far/not far enough.&quot;</li>
          <li><strong>Save versions.</strong> Before a big rewrite, save a copy of your working project so you can always roll back.</li>
        </ul>
      </Module>

      <Module number="09" title="Growing into GitHub libraries">
        <p>
          Once basic movement is solid, community libraries handle PID and odometry math
          so you&apos;re not writing motion control from scratch. You don&apos;t need
          these on day one — bookmark them for when you outgrow basic movement commands,
          and see the Advanced Coding course for how field-tested teams use them.
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
              title: "Advanced Course · Coding",
              url: "/courses/advanced/coding",
              description: "Field-proof autonomous, turnToHeading, and debugging practices.",
              tag: "Tool",
            },
          ]}
        />
      </Module>
    </div>
    </CourseProgressProvider>
  );
}
